import {StoreWithCache} from '@belopash/squid-tools'
import {
    BlockHeader,
    Call,
    CallMapper,
    Event,
    EventMapper,
    EventType,
    MappingContext,
    Pallet,
    Parameter,
    StorageType,
} from '~interfaces'
import {Account, Staker, StakingEra, StakingEraStatus} from '~model'
import {implements_} from '~util/decorator'
import {createEraId, createEraNominationId, createEraStakerId} from '~util/id'
import {getOriginAccountId} from '~util/misc'
import assert from 'assert'
import {SessionManager} from '../session/v2'
import {
    BondCallMapper,
    BondCallType,
    BondExtraCallMapper,
    BondExtraCallType,
    BondingDurationConstantType,
    ChillCallMapper,
    ChillCallType,
    Config,
    Exposure,
    ForceEraStorageType,
    ForceUnstakeCallMapper,
    ForceUnstakeCallType,
    Forcing,
    LedgerStorageType,
    NominateCallMapper,
    NominateCallType,
    RewardDestination,
    SetControllerCallMapper,
    SetControllerCallType,
    SetPayeeCallMapper,
    SetPayeeCallType,
    SlashEventMapper,
    SlashEventType,
    StakingLedger,
    UnbondCallType,
    ValidateCallMapper,
    ValidateCallType,
    WithdrawUnbondedCallType,
} from './v1'

export {
    BondCallMapper,
    BondCallType,
    BondExtraCallMapper,
    BondExtraCallType,
    BondingDurationConstantType,
    ChillCallMapper,
    ChillCallType,
    Config,
    Exposure,
    ForceEraStorageType,
    ForceUnstakeCallMapper,
    ForceUnstakeCallType,
    LedgerStorageType,
    NominateCallMapper,
    NominateCallType,
    SetControllerCallMapper,
    SetControllerCallType,
    SetPayeeCallMapper,
    SetPayeeCallType,
    SlashEventMapper,
    SlashEventType,
    UnbondCallType,
    ValidateCallMapper,
    ValidateCallType,
    WithdrawUnbondedCallType,
    Forcing,
    StakingLedger,
    RewardDestination,
}

type ActiveEraInfoRaw = {
    index: number
    start: bigint | undefined
}
@implements_<Parameter<ActiveEraInfoRaw>>()
export class ActiveEraInfo {
    readonly index: number
    readonly start: bigint | undefined

    constructor(readonly __value: ActiveEraInfoRaw) {
        this.index = __value.index
        this.start = __value.start
    }
}

/**********
 * EVENTS *
 **********/

export type RewardEventType<T extends Pick<Config, 'AccountId'>> = EventType<{
    account: InstanceType<T['AccountId']>
    amount: bigint
}>

/***********
 * STORAGE *
 ***********/

export type ActiveEraStorageType = StorageType<[], ActiveEraInfo | undefined>
export type CurrentEraStorageType = StorageType<[], number | undefined>
export type ErasStartSessionIndexStorageType = StorageType<[number], number | undefined>
export type EraElectedStorageType<T extends Pick<Config, 'AccountId'>> = StorageType<
    [number],
    InstanceType<T['AccountId']>[]
>
export type EraStakersStorageType<T extends Pick<Config, 'AccountId'>> = StorageType<
    [[number, InstanceType<T['AccountId']>][]],
    InstanceType<Exposure<T['AccountId']>>[]
>

export interface PalletSetup<T extends Config> {
    Events: {
        Reward: RewardEventType<T>
        Slash: SlashEventType<T>
    }
    Calls: {
        bond: BondCallType<T>
        bond_extra: BondExtraCallType
        unbond: UnbondCallType
        force_unstake: ForceUnstakeCallType<T>
        withdraw_unbonded: WithdrawUnbondedCallType
        set_controller: SetControllerCallType<T>
        set_payee: SetPayeeCallType<T>
        validate: ValidateCallType
        nominate: NominateCallType<T>
        chill: ChillCallType
    }
    Storage: {
        CurrentEra: CurrentEraStorageType
        ActiveEra: ActiveEraStorageType
        ForceEra: ForceEraStorageType
        ErasStartSessionIndex: ErasStartSessionIndexStorageType
        Ledger: LedgerStorageType<T>
        EraElected: EraElectedStorageType<T>
        EraStakers: EraStakersStorageType<T>
    }
    Constants: {
        BondingDuration: BondingDurationConstantType
    }
}

export interface Setup<Config, PalletSetup> {
    (Config: Config): PalletSetup
}

export interface PalletOptions {
    skipStakers?: string[]
}

export function newSession<T extends Config>(
    this: Pallet<
        T,
        {
            Storage: {
                ForceEra: ForceEraStorageType
                ErasStartSessionIndex: ErasStartSessionIndexStorageType
                CurrentEra: CurrentEraStorageType
                EraElected: EraElectedStorageType<T>
                EraStakers: EraStakersStorageType<T>
            }
        }
    >,
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

export function newEra<T extends Config>(
    this: Pallet<
        T,
        {
            Storage: {
                EraElected: EraElectedStorageType<T>
                EraStakers: EraStakersStorageType<T>
            }
        }
    > &
        Pick<PalletOptions, 'skipStakers'>,
    ctx: MappingContext<StoreWithCache>,
    block: BlockHeader,
    currentEraIndex: number,
    sessionIndex: number
) {
    ctx.queue
        .setBlock(block)
        .setExtrinsic(undefined)
        .lazy(async () => {
            const eraId = createEraId(currentEraIndex)
            ctx.queue.add('staking_newEra', {
                id: eraId,
                index: currentEraIndex,
            })

            const validatorAddresses = await new this.Storage.EraElected(ctx, block, currentEraIndex).value
            const validatorsInfo = await new this.Storage.EraStakers(
                ctx,
                block,
                validatorAddresses.map((v) => [currentEraIndex, v])
            ).value
            // const {validatorAddresses, validatorsInfo} = await new StakingErasStakersStorage(ctx, block).asV1050
            //     .getPairs(currentEraIndex)
            //     .then((res) => {
            //         const validatorAddresses: Uint8Array[] = []
            //         const validatorsInfo: metadata.Exposure[] = []

            //         for (const staker of res) {
            //             validatorAddresses.push(staker[0][1])
            //             validatorsInfo.push(staker[1])
            //         }

            //         return {validatorAddresses, validatorsInfo}
            //     })

            const validators = new Map<string, {id: string; bonded: bigint; total: bigint}>()
            const nominators = new Map<string, {id: string; bonded: bigint}>()
            const nominations = new Map<string, {validatorId: string; nominatorId: string; vote: bigint}>()
            for (let i = 0; i < validatorAddresses.length; i++) {
                const validatorAddress = validatorAddresses[i]
                const validatorInfo = validatorsInfo[i]

                const validatorId = validatorAddress.format()
                if (this.skipStakers?.includes(validatorId)) continue // TODO: remove then batch calls will be unwrapped

                ctx.store.defer(Staker, validatorId)

                const eraValidatorId = createEraStakerId(eraId, validatorId)
                validators.set(eraValidatorId, {
                    id: validatorId,
                    bonded: validatorInfo.own,
                    total: validatorInfo.total,
                })

                for (let nomination of validatorInfo.others) {
                    const nominatorAddress = nomination.who

                    const nominatorId = nominatorAddress.format()
                    if (this.skipStakers?.includes(nominatorId)) continue // TODO: remove then batch calls will be unwrapped

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
    this: Pallet<
        Config,
        {
            Storage: {
                ActiveEra: ActiveEraStorageType
                CurrentEra: CurrentEraStorageType
                ErasStartSessionIndex: ErasStartSessionIndexStorageType
            }
        }
    >,
    ctx: MappingContext<StoreWithCache>,
    block: BlockHeader,
    startSession: number
) {
    ctx.queue.setBlock(block).lazy(async () => {
        let curActiveEraIndex = await new this.Storage.ActiveEra(ctx, block).value.then((v) => v?.index)
        if (curActiveEraIndex == null) {
            curActiveEraIndex = await new this.Storage.CurrentEra(ctx, block).value // TODO: investigate if this correct
            assert(curActiveEraIndex != null)
        }

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
    this: Pallet<
        Config,
        {Storage: {ActiveEra: ActiveEraStorageType; ErasStartSessionIndex: ErasStartSessionIndexStorageType}}
    >,
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
    this: Pallet<
        Config,
        {Storage: {ActiveEra: ActiveEraStorageType; ErasStartSessionIndex: ErasStartSessionIndexStorageType}}
    >,
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
    this: Pallet<
        T,
        {
            Storage: {
                ActiveEra: ActiveEraStorageType
                ErasStartSessionIndex: ErasStartSessionIndexStorageType
            }
        }
    >,
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

export const UnbondCallMapper = <T extends Config>(
    Pallet: Pallet<
        T,
        {
            Calls: {unbond: UnbondCallType}
            Storage: {CurrentEra: CurrentEraStorageType}
            Constants: {BondingDuration: BondingDurationConstantType}
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
            Calls: {withdraw_unbonded: WithdrawUnbondedCallType}
            Storage: {CurrentEra: CurrentEraStorageType; Ledger: LedgerStorageType<T>}
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

export const RewardEventMapper = <T extends Config>(P: Pallet<T, {Events: {Reward: RewardEventType<T>}}>) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, item: Event): void {
            // TODO: implement sometime later
        }
    }

export default <T extends Config = Config, S extends PalletSetup<T> = PalletSetup<T>>(
    setup: Setup<T, S>,
    opts?: PalletOptions
) => {
    @implements_<SessionManager & PalletOptions>()
    class P extends Pallet(setup) {
        static skipStakers = opts?.skipStakers

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
