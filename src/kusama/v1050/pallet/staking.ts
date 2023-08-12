import {StoreWithCache} from '@belopash/squid-tools'
import {StakingBondCall, StakingNominateCall, StakingSetControllerCall} from '@metadata/kusama/calls'
import {StakingCurrentEraStorage, StakingErasStakersStorage, StakingLedgerStorage} from '@metadata/kusama/storage'
import {StakingRewardEvent} from '@metadata/kusama/events'
import {Merge} from 'type-fest'
import {
    BlockHeader,
    Call,
    CallMapper,
    ChainContext,
    Event,
    EventMapper,
    EventType,
    MappingContext,
    Pallet,
    PalletSetup,
    Parameter,
    StorageType,
} from '../../interfaces'
import type * as metadata from '@metadata/kusama/v1050'
import {
    BondCallMapper,
    BondExtraCall,
    BondExtraCallMapper,
    BondingDurationConstant,
    Calls,
    ChillCallMapper,
    Config,
    Constanst,
    CurrentEraStartSessionIndexStorage,
    Events as EventsOld,
    ForceEraStorage,
    ForceUnstakeCall,
    ForceUnstakeCallMapper,
    NominateCallMapper,
    RewardDestination,
    SetControllerCallMapper,
    SetPayeeCall,
    SetPayeeCallMapper,
    SlashEvent,
    SlashEventMapper,
    StakingLedger,
    Storage as StorageOld,
    UnbondCall,
    ValidateCall,
    ValidateCallMapper,
    WithdrawUnbondedCall,
} from '../../v1032/pallet/staking'
import {implements_} from '@gs/util/decorator'
import {SessionManager} from './session'
import assert from 'assert'
import {Account, Staker, StakingEra, StakingEraStatus} from '@gs/model'
import {createEraId, createEraNominationId, createEraStakerId} from '@gs/util/id'
import {StakingActiveEraStorage, StakingErasStartSessionIndexStorage} from '@metadata/kusama/storage'
import {getOriginAccountId} from '@gs/util/misc'

export {
    BondCallMapper,
    BondExtraCall,
    BondExtraCallMapper,
    BondingDurationConstant,
    Calls,
    ChillCallMapper,
    Config,
    Constanst,
    CurrentEraStartSessionIndexStorage,
    ForceEraStorage,
    ForceUnstakeCall,
    ForceUnstakeCallMapper,
    NominateCallMapper,
    RewardDestination,
    SetControllerCallMapper,
    SetPayeeCall,
    SetPayeeCallMapper,
    SlashEvent,
    SlashEventMapper,
    StakingLedger,
    UnbondCall,
    ValidateCall,
    ValidateCallMapper,
    WithdrawUnbondedCall,
}

@implements_<Parameter<metadata.ActiveEraInfo>>()
export class ActiveEraInfo {
    readonly index: number
    readonly start: bigint | undefined

    constructor(readonly __value: metadata.ActiveEraInfo) {
        this.index = __value.index
        this.start = __value.start
    }
}

export type Events<T extends Config> = Merge<
    EventsOld<T>,
    {
        Reward: EventType<{account: InstanceType<T['AccountId']>; amount: bigint}>
    }
>

export type Storage<T extends Config> = Merge<
    StorageOld<T>,
    {
        ActiveEra: StorageType<[], ActiveEraInfo | undefined>
        CurrentEra: StorageType<[], number | undefined>
        ErasStartSessionIndex: StorageType<[number], number | undefined>
    }
>

export function newSession<T extends Config>(
    this: Pallet<T, {Storage: Pick<Storage<T>, 'CurrentEra' | 'ErasStartSessionIndex' | 'ForceEra'>}>,
    ctx: MappingContext<StoreWithCache>,
    block: BlockHeader,
    sessionIndex: number
) {
    ctx.queue
        .setBlock(block)
        .setExtrinsic(undefined)
        .lazy(async () => {
            const currentEraIndex = await new this.Storage.CurrentEra(ctx, block).value
            assert(currentEraIndex != null)

            const forceEra = await new this.Storage.ForceEra(ctx, block).value
            const currentEraStartSessionIndex = await new this.Storage.ErasStartSessionIndex(
                ctx,
                block,
                currentEraIndex
            ).value

            let triggerNewEra = currentEraStartSessionIndex == sessionIndex
            forceEra.match({
                ForceNew: () => assert(triggerNewEra),
                ForceAlways: () => assert(triggerNewEra),
                _: () => {},
            })

            if (triggerNewEra) {
                newEra.call(this, ctx, block, currentEraIndex, sessionIndex)
            }
        })
}

export function newEra(
    this: Pallet<Config, {Storage: Pick<Storage<Config>, 'CurrentEra' | 'ErasStartSessionIndex'>}>,
    ctx: MappingContext<StoreWithCache>,
    block: BlockHeader,
    currentEraIndex: number,
    sessionIndex: number
) {
    ctx.queue
        .setBlock(block)
        .setExtrinsic(undefined)
        .lazy(async () => {
            const prevEra = await ctx.store.get(StakingEra, {where: {}, order: {index: 'DESC'}})
            assert(prevEra?.index == null || prevEra.index < currentEraIndex)

            if (prevEra != null) {
                ctx.queue.add('staking_endEra', {
                    eraId: prevEra.id,
                })
            }

            const eraId = createEraId(currentEraIndex)
            ctx.queue
                .add('staking_newEra', {
                    id: eraId,
                    index: currentEraIndex,
                })
                .add('staking_startEra', {
                    eraId,
                })

            const {validatorAddresses, validatorsInfo} = await new StakingErasStakersStorage(ctx, block).asV1050
                .getPairs(currentEraIndex)
                .then((res) => {
                    const validatorAddresses: Uint8Array[] = []
                    const validatorsInfo: metadata.Exposure[] = []

                    for (const staker of res) {
                        validatorAddresses.push(staker[0][1])
                        validatorsInfo.push(staker[1])
                    }

                    return {validatorAddresses, validatorsInfo}
                })

            const validators = new Map<string, {id: string; bonded: bigint; total: bigint}>()
            const nominators = new Map<string, {id: string; bonded: bigint}>()
            const nominations = new Map<string, {validatorId: string; nominatorId: string; vote: bigint}>()
            for (let i = 0; i < validatorAddresses.length; i++) {
                const validatorAddress = new this.Config.AccountId(validatorAddresses[i])
                const validatorInfo = validatorsInfo[i]

                const validatorId = validatorAddress.format()
                ctx.store.defer(Staker, validatorId)

                const eraValidatorId = createEraStakerId(eraId, validatorId)
                validators.set(eraValidatorId, {
                    id: validatorId,
                    bonded: validatorInfo.own,
                    total: validatorInfo.total,
                })

                for (let nomination of validatorInfo.others) {
                    const nominatorAddress = new this.Config.AccountId(nomination.who)

                    const nominatorId = nominatorAddress.format()
                    ctx.store.defer(Staker, nominatorId)

                    const eraNominatorId = createEraStakerId(eraId, nominatorId)
                    let nominator = nominators.get(eraNominatorId)
                    if (nominator == null) {
                        nominator = {
                            id: nominatorId,
                            bonded: 0n,
                        }
                        nominators.set(eraNominatorId, nominator)
                    }
                    nominator.bonded += nomination.value

                    const eraNominationId = createEraNominationId(eraId, validatorId, nominatorId)
                    nominations.set(eraNominationId, {
                        validatorId: eraValidatorId,
                        nominatorId: eraNominatorId,
                        vote: nomination.value,
                    })
                }
            }

            for (const [id, validator] of validators) {
                ctx.queue.add('staking_newEraValidator', {
                    id,
                    eraId,
                    stakerId: validator.id,
                    total: validator.total,
                    own: validator.bonded,
                })
            }

            for (const [id, nominator] of nominators) {
                ctx.queue.add('staking_newEraNominator', {
                    id,
                    eraId,
                    stakerId: nominator.id,
                    bonded: nominator.bonded,
                })
            }

            for (const [id, nomination] of nominations) {
                ctx.queue.add('staking_newEraNomination', {
                    id,
                    eraId,
                    validatorId: nomination.validatorId,
                    nominatorId: nomination.nominatorId,
                    vote: nomination.vote,
                })
            }
        })
}

export function startSession(
    this: Pallet<Config, {Storage: Pick<Storage<Config>, 'ActiveEra' | 'ErasStartSessionIndex'>}>,
    ctx: MappingContext<StoreWithCache>,
    block: BlockHeader,
    startSession: number
) {
    ctx.queue.setBlock(block).lazy(async () => {
        const curActiveEraIndex = await new this.Storage.ActiveEra(ctx, block).value.then((v) => v?.index ?? 0)

        const curActiveEraStartSessionIndex = await new this.Storage.ErasStartSessionIndex(
            ctx,
            block,
            curActiveEraIndex
        ).value
        if (curActiveEraStartSessionIndex == null) return

        if (curActiveEraStartSessionIndex === startSession) {
            startEra.call(this, ctx, block, curActiveEraIndex, startSession)
        }
    })
}

export function startEra(
    this: Pallet<Config, {Storage: Pick<Storage<Config>, 'ActiveEra' | 'ErasStartSessionIndex'>}>,
    ctx: MappingContext<StoreWithCache>,
    block: BlockHeader,
    eraIndex: number,
    startSession: number
) {
    ctx.queue.setBlock(block).add('staking_startEra', {
        eraId: createEraId(eraIndex),
    })
}

export function endSession(
    this: Pallet<Config, {Storage: Pick<Storage<Config>, 'ActiveEra' | 'ErasStartSessionIndex'>}>,
    ctx: MappingContext<StoreWithCache>,
    block: BlockHeader,
    sessionIndex: number
) {
    ctx.queue.setBlock(block).lazy(async () => {
        const curActiveEra = await new this.Storage.ActiveEra(ctx, block).value
        if (curActiveEra == null) return

        const curActiveEraStartSessionIndex = await new this.Storage.ErasStartSessionIndex(
            ctx,
            block,
            curActiveEra.index
        ).value
        if (curActiveEraStartSessionIndex == null) return

        if (curActiveEraStartSessionIndex === sessionIndex + 1) {
            endEra.call(this, ctx, block, curActiveEra.index - 1, sessionIndex)
        }
    })
}

export function endEra<T extends Config>(
    this: Pallet<T, {Storage: Pick<Storage<T>, 'ActiveEra' | 'ErasStartSessionIndex'>}>,
    ctx: MappingContext<StoreWithCache>,
    block: BlockHeader,
    eraIndex: number,
    sessionIndex: number
) {
    const eraId = createEraId(eraIndex)
    const eraDeffered = ctx.store.defer(StakingEra, eraId)

    ctx.queue.setBlock(block).lazy(async () => {
        const era = await eraDeffered.getOrFail()

        switch (era.status) {
            case StakingEraStatus.Planned:
                throw new Error(`Era ${eraIndex} has not been active, but ended`)
            case StakingEraStatus.Active:
                ctx.queue.add('staking_endEra', {
                    eraId,
                })
                break
            case StakingEraStatus.Ended:
                break
        }
    })
}

/*********
 * CALLS *
 *********/

export const BondCall = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly controller: InstanceType<Config['Lookup']['Source']>
        readonly value: bigint
        readonly payee: RewardDestination<Config['AccountId']>

        constructor(call: Call) {
            const data = new StakingBondCall(call).asV1050

            this.controller = new P.Config.Lookup.Source(data.controller)
            this.value = data.value
            this.payee = new (RewardDestination(P.Config.AccountId))(data.payee)
        }
    }

export const NominateCall = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly targets: InstanceType<Config['Lookup']['Source']>[]

        constructor(call: Call) {
            const data = new StakingNominateCall(call).asV1050
            this.targets = data.targets.map((t) => new P.Config.Lookup.Source(t))
        }
    }

export const SetControllerCall = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly controller: InstanceType<Config['Lookup']['Source']>

        constructor(call: Call) {
            const data = new StakingSetControllerCall(call).asV1050

            const lookupSource = new P.Config.Lookup.Source(data.controller)
            this.controller = P.Config.Lookup.lookup(lookupSource)
        }
    }

export const UnbondCallMapper = <T extends Config>(
    Pallet: Pallet<
        T,
        {
            Calls: Pick<Calls<T>, 'unbond'>
            Storage: Pick<Storage<T>, 'CurrentEra'>
            Constants: Pick<Constanst<T>, 'BondingDuration'>
        }
    >,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const data = new Pallet.Calls.unbond(call)

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const controllerAddress = new Pallet.Config.AccountId(origin)
            const controllerId = controllerAddress.format()

            ctx.queue
                .setBlock(call.block)
                .setExtrinsic(call.extrinsic)
                .lazy(async () => {
                    const controller = await ctx.store.getOrFail(Account, {
                        where: {id: controllerId},
                        relations: {controllerOf: {stash: true}},
                    })
                    const staker = controller.controllerOf
                    assert(staker != null)

                    const amount = data.value > staker.activeBond ? staker.activeBond : data.value
                    if (amount === 0n) return

                    const bondingDuration = new Pallet.Constants.BondingDuration(call.block).value
                    const currentEra = await new Pallet.Storage.CurrentEra(ctx, call.block).value
                    assert(currentEra != null)

                    ctx.queue
                        .add('staking_bond', {
                            id: call.id,
                            accountId: staker.stash.id,
                            stakerId: staker.id,
                            amount: -amount,
                        })
                        .add('staking_createUnlockChunk', {
                            id: call.id,
                            stakerId: staker.id,
                            amount,
                            lockedUntilEra: currentEra + bondingDuration,
                        })
                })
        }
    }

export const WithdrawUnbondedCallMapper = <T extends Config>(
    Pallet: Pallet<
        T,
        {
            Calls: Pick<Calls<T>, 'withdraw_unbonded'>
            Storage: Pick<Storage<T>, 'CurrentEra' | 'Ledger'>
        }
    >,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const controllerAddress = new Pallet.Config.AccountId(origin)
            const controllerId = controllerAddress.format()

            ctx.queue
                .setBlock(call.block)
                .setExtrinsic(call.extrinsic)
                .lazy(async () => {
                    const controller = await ctx.store.getOrFail(Account, {
                        where: {id: controllerId},
                        relations: {controllerOf: {stash: true, unlocking: true}},
                    })
                    const staker = controller.controllerOf
                    assert(staker != null)

                    const currentEra = await new Pallet.Storage.CurrentEra(ctx, call.block).value
                    assert(currentEra != null)

                    const withdrawable = staker.unlocking.filter((c) => c.lockedUntilEra <= currentEra)
                    for (const chunk of withdrawable) {
                        ctx.queue.add('staking_withdrawUnlockChunk', {chunkId: chunk.id})
                    }

                    if (staker.activeBond === 0n && withdrawable.length == staker.unlocking.length) {
                        const ledger = await new Pallet.Storage.Ledger(ctx, call.block, controllerAddress as any).value
                        const stashAddress = ledger?.stash
                        const stashId = stashAddress?.format()

                        if (ledger == null || stashId !== staker.stash.id) {
                            ctx.queue.add('staker_kill', {
                                stakerId: staker.id,
                            })
                        }
                    }
                })
        }
    }

/**********
 * EVENTS *
 **********/

export const RewardEvent = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly account: InstanceType<T['AccountId']>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingRewardEvent(event).asV1050

            this.account = new P.Config.AccountId(data[0]) as any
            this.amount = data[1]
        }
    }

/***********
 * STORAGE *
 ***********/

export const ActiveEra = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly value: Promise<ActiveEraInfo | undefined>

        constructor(ctx: ChainContext, block: BlockHeader) {
            this.value = new StakingActiveEraStorage(ctx, block).asV1050.get().then((v) => v && new ActiveEraInfo(v))
        }
    }

export const ErasStartSessionIndex = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly value: Promise<number | undefined>

        constructor(ctx: ChainContext, block: BlockHeader, index: number) {
            this.value = new StakingErasStartSessionIndexStorage(ctx, block).asV1050.get(index)
        }
    }

export const CurrentEraStorage = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly value: Promise<number | undefined>

        constructor(ctx: ChainContext, block: BlockHeader) {
            this.value = new StakingCurrentEraStorage(ctx, block).asV1050.get()
        }
    }

export const LedgerStorage = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly value: Promise<StakingLedger<T['AccountId']> | undefined>

        constructor(ctx: ChainContext, block: BlockHeader, key: InstanceType<Config['AccountId']>) {
            const Ledger = StakingLedger(Pallet.Config.AccountId)
            this.value = new StakingLedgerStorage(ctx, block).asV1050
                .get(key.__value)
                .then((v) => (v == null ? undefined : new Ledger(v)))
        }
    }

/***********
 * MAPPERS *
 ***********/

export const RewardEventMapper = <T extends Config>(P: Pallet<T, {Events: Pick<Events<T>, 'Reward'>}>) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, item: Event): void {}
    }

export default () => {
    @implements_<SessionManager>()
    class P extends Pallet<
        Config,
        {
            Events: Events<Config>
            Calls: Calls<Config>
            Storage: Storage<Config>
            Constants: Constanst<Config>
        }
    >() {
        static newSession(ctx: MappingContext<StoreWithCache>, block: BlockHeader, newIndex: number): void {
            newSession.call(this, ctx, block, newIndex)
        }
        static endSession(ctx: MappingContext<StoreWithCache>, block: BlockHeader, endIndex: number): void {
            endSession.call(this, ctx, block, endIndex)
        }
        static startSession(ctx: MappingContext<StoreWithCache>, block: BlockHeader, startIndex: number): void {
            startSession.call(this, ctx, block, startIndex)
        }
    }

    P.Calls = {
        bond: BondCall(P),
        bond_extra: BondExtraCall(P),
        unbond: UnbondCall(P),
        force_unstake: ForceUnstakeCall(P),
        withdraw_unbonded: WithdrawUnbondedCall(P),
        set_controller: SetControllerCall(P),
        set_payee: SetPayeeCall(P),
        validate: ValidateCall(P),
        nominate: NominateCall(P),
        chill: ChillCallMapper(P),
    }

    P.Events = {
        Reward: RewardEvent(P),
        Slash: SlashEvent(P),
    }

    P.Storage = {
        ForceEra: ForceEraStorage(P),
        CurrentEraStartSessionIndex: CurrentEraStartSessionIndexStorage(P),
        CurrentEra: CurrentEraStorage(P),
        Ledger: LedgerStorage(P),
        ActiveEra: ActiveEra(P),
        ErasStartSessionIndex: ErasStartSessionIndex(P),
    }

    P.Constants = {
        BondingDuration: BondingDurationConstant(P),
    }

    P.EventMappers = {
        Reward: RewardEventMapper(P),
        Slash: SlashEventMapper(P),
    }

    P.CallMappers = {
        bond: BondCallMapper(P, true),
        bond_extra: BondExtraCallMapper(P, true),
        unbond: UnbondCallMapper(P, true),
        withdraw_unbonded: WithdrawUnbondedCallMapper(P, true),
        force_unstake: ForceUnstakeCallMapper(P, true),
        set_controller: SetControllerCallMapper(P, true),
        set_payee: SetPayeeCallMapper(P, true),
        validate: ValidateCallMapper(P, true),
        nominate: NominateCallMapper(P, true),
        chill: ChillCallMapper(P, true),
        // force_no_eras: new ForceNoErasCall(P, true),
        // force_new_era: new ForceNewEraCall(P, true),
        // force_new_era_always: new ForceNewEraAlwaysCall(P, true),
    }

    return P
}
