import {StoreWithCache} from '@belopash/squid-tools'
import {Account, PayeeType, Staker, StakingEra, StakingUnlockChunk} from '@gs/model'
import {implements_} from '@gs/util/decorator'
import {createEraId, createEraNominationId, createEraStakerId} from '@gs/util/id'
import {getOriginAccountId} from '@gs/util/misc'
import {
    StakingBondCall,
    StakingBondExtraCall,
    StakingForceUnstakeCall,
    StakingNominateCall,
    StakingSetControllerCall,
    StakingSetPayeeCall,
    StakingUnbondCall,
    StakingValidateCall,
    StakingWithdrawUnbondedCall,
} from '@metadata/kusama/calls'
import {StakingBondingDurationConstant} from '@metadata/kusama/constants'
import {StakingRewardEvent, StakingSlashEvent} from '@metadata/kusama/events'
import {
    StakingCurrentElectedStorage,
    StakingCurrentEraStartSessionIndexStorage,
    StakingCurrentEraStorage,
    StakingForceEraStorage,
    StakingLedgerStorage,
    StakingStakersStorage,
} from '@metadata/kusama/storage'
import * as metadata from '@metadata/kusama/v1020'
import assert from 'assert'
import MathBI from 'extra-bigint'
import {
    BlockHeader,
    Call,
    CallMapper,
    CallType,
    ChainContext,
    ConstantType,
    Enum,
    Event,
    EventMapper,
    EventType,
    MappingContext,
    PalletBase,
    PalletSetup,
    StorageType,
    Parameter,
} from '../../../interfaces'
import {SessionManager} from './session'
import * as pallet_system from './system'
import {Exact} from 'type-fest'

/*********
 * TYPES *
 *********/

export const RewardDestination = <AccountId extends Parameter<Uint8Array>>(AccountId: AccountId) => {
    @implements_<Parameter<metadata.RewardDestination>>()
    class RewardDestination extends Enum<metadata.RewardDestination>()({
        Account: AccountId,
    }) {}

    return RewardDestination
}
export type RewardDestination<AccountId extends Parameter<Uint8Array>> = InstanceType<
    ReturnType<typeof RewardDestination<AccountId>>
>

@implements_<Parameter<metadata.Forcing>>()
export class Forcing extends Enum<metadata.Forcing>()({}) {}

@implements_<Parameter<metadata.ValidatorPrefs>>()
export class ValidatorPrefs {
    readonly commission: number

    constructor(readonly __value: metadata.ValidatorPrefs) {
        this.commission = __value.commission
    }
}

export const StakingLedger = <AccountId extends Parameter<Uint8Array>>(AccountId: AccountId) => {
    @implements_<Parameter<metadata.StakingLedger>>()
    class StakingLedger {
        readonly stash: InstanceType<AccountId>
        readonly total: bigint
        readonly active: bigint

        constructor(readonly __value: metadata.StakingLedger) {
            this.stash = new AccountId(__value.stash) as any
            this.total = __value.total
            this.active = __value.active
        }
    }

    return StakingLedger
}
export type StakingLedger<AccountId extends Parameter<any>> = InstanceType<ReturnType<typeof StakingLedger<AccountId>>>

/**********
 * PALLET *
 **********/

export type Config = pallet_system.Config & {}

export type Events<T extends Config> = {
    Reward: EventType<{reward: bigint; remainer: bigint}>
    Slash: EventType<{staker: InstanceType<Config['AccountId']>; amount: bigint}>
}

export type Calls<T extends Config> = {
    bond: CallType<{
        controller: InstanceType<T['Lookup']['Source']>
        value: bigint
        payee: RewardDestination<T['AccountId']>
    }>
    bond_extra: CallType<{maxAdditional: bigint}>
    unbond: CallType<{value: bigint}>
    force_unstake: CallType<{stash: InstanceType<T['AccountId']>}>
    withdraw_unbonded: CallType<{}>
    set_controller: CallType<{controller: InstanceType<T['Lookup']['Source']>}>
    set_payee: CallType<{payee: RewardDestination<T['AccountId']>}>
    validate: CallType<{prefs: ValidatorPrefs}>
    nominate: CallType<{targets: InstanceType<T['Lookup']['Source']>[]}>
    chill: CallType<{}>
}

export type Storage<T extends Config> = {
    CurrentEra: StorageType<[], number>
    ForceEra: StorageType<[], Forcing>
    CurrentEraStartSessionIndex: StorageType<[], number>
    Ledger: StorageType<[InstanceType<T['AccountId']>], StakingLedger<T['AccountId']> | undefined>
}

export type Constanst<T extends Config> = {
    BondingDuration: ConstantType<number>
}

export const Pallet = <T extends Config, S extends PalletSetup>() => {
    @implements_<SessionManager>()
    abstract class Pallet extends PalletBase<
        T,
        S & {
            Storage: Storage<T>
            Constants: Constanst<T>
        }
    >() {
        static newSession(ctx: MappingContext<StoreWithCache>, block: BlockHeader, sessionIndex: number) {
            ctx.queue
                .setBlock(block)
                .setExtrinsic(undefined)
                .lazy(async () => {
                    const forceEra = await new this.Storage.ForceEra(ctx, block).value
                    const currentEraStartSessionIndex = await new this.Storage.CurrentEraStartSessionIndex(ctx, block)
                        .value

                    const eraLength = sessionIndex - currentEraStartSessionIndex
                    assert(eraLength >= 0)

                    let triggerNewEra = false
                    forceEra.match({
                        ForceNew: () => (triggerNewEra = true),
                        ForceAlways: () => (triggerNewEra = true),
                        NotForcing: () => (triggerNewEra = eraLength == 0),
                        _: () => (triggerNewEra = false),
                    })

                    if (triggerNewEra) {
                        const eraIndex = await new this.Storage.CurrentEra(ctx, block).value
                        this.newEra(ctx, block, eraIndex)
                    }
                })
        }

        static newEra(ctx: MappingContext<StoreWithCache>, block: BlockHeader, currentEraIndex: number) {
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
                    ctx.queue.add('staking_newEra', {
                        id: eraId,
                        index: currentEraIndex,
                    })

                    const validatorAddresses = await new StakingCurrentElectedStorage(ctx, block).asV1020.get()
                    const validatorsInfo = await new StakingStakersStorage(ctx, block).asV1020.getMany(
                        validatorAddresses
                    )

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
    }

    return Pallet
}
type Pallet<T extends Config, S extends PalletSetup = {}> = ReturnType<typeof Pallet<T, S>>

/*********
 * CALLS *
 *********/

export const BondCall = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly controller: InstanceType<T['Lookup']['Source']>
        readonly value: bigint
        readonly payee: RewardDestination<T['AccountId']>

        constructor(call: Call) {
            const data = new StakingBondCall(call).asV1020

            this.controller = new pallet.Config.Lookup.Source(data.controller) as any
            this.value = data.value
            this.payee = new (RewardDestination(pallet.Config.AccountId))(data.payee)
        }
    }

export const BondExtraCall = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly maxAdditional: bigint

        constructor(call: Call) {
            const data = new StakingBondExtraCall(call).asV1020
            this.maxAdditional = data.maxAdditional
        }
    }

export const UnbondCall = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly value: bigint

        constructor(call: Call) {
            const data = new StakingUnbondCall(call).asV1020
            this.value = data.value
        }
    }

export const ForceUnstakeCall = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly stash: InstanceType<T['AccountId']>

        constructor(call: Call) {
            const data = new StakingForceUnstakeCall(call).asV1020
            this.stash = new pallet.Config.AccountId(data.stash) as any
        }
    }

export const WithdrawUnbondedCall = <T extends Config>(pallet: Pallet<T>) =>
    class {
        constructor(call: Call) {
            const data = new StakingWithdrawUnbondedCall(call).asV1020
        }
    }

export const SetControllerCall = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly controller: InstanceType<T['Lookup']['Source']>

        constructor(call: Call) {
            const data = new StakingSetControllerCall(call).asV1020

            this.controller = new pallet.Config.Lookup.Source(data.controller) as any
        }
    }

export const SetPayeeCall = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly payee: RewardDestination<T['AccountId']>

        constructor(call: Call) {
            const data = new StakingSetPayeeCall(call).asV1020

            this.payee = this.payee = new (RewardDestination(pallet.Config.AccountId))(data.payee)
        }
    }

export const ValidateCall = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly prefs: ValidatorPrefs

        constructor(call: Call) {
            const data = new StakingValidateCall(call).asV1020
            this.prefs = new ValidatorPrefs(data.prefs)
        }
    }

export const NominateCall = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly targets: InstanceType<T['Lookup']['Source']>[]

        constructor(call: Call) {
            const data = new StakingNominateCall(call).asV1020
            this.targets = data.targets.map((t) => new pallet.Config.Lookup.Source(t)) as any
        }
    }

/**********
 * EVENTS *
 **********/

export const RewardEvent = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly reward: bigint
        readonly remainer: bigint

        constructor(event: Event) {
            const data = new StakingRewardEvent(event).asV1020
            this.reward = data[0]
            this.remainer = data[1]
        }
    }

export const SlashEvent = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly staker: InstanceType<Config['AccountId']>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingSlashEvent(event).asV1020
            this.staker = new pallet.Config.AccountId(data[0])
            this.amount = data[1]
        }
    }

/***********
 * STORAGE *
 ***********/

export const ForceEraStorage = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly value: Promise<Forcing>

        constructor(ctx: ChainContext, block: BlockHeader) {
            this.value = new StakingForceEraStorage(ctx, block).asV1020.get().then((v) => new Forcing(v))
        }
    }

export const CurrentEraStartSessionIndexStorage = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly value: Promise<number>

        constructor(ctx: ChainContext, block: BlockHeader) {
            this.value = new StakingCurrentEraStartSessionIndexStorage(ctx, block).asV1020.get()
        }
    }

export const CurrentEraStorage = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly value: Promise<number>

        constructor(ctx: ChainContext, block: BlockHeader) {
            this.value = new StakingCurrentEraStorage(ctx, block).asV1020.get()
        }
    }

export const LedgerStorage = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly value: Promise<StakingLedger<T['AccountId']> | undefined>

        constructor(ctx: ChainContext, block: BlockHeader, key: InstanceType<Config['AccountId']>) {
            const Ledger = StakingLedger(pallet.Config.AccountId)
            this.value = new StakingLedgerStorage(ctx, block).asV1020
                .get(key.__value)
                .then((v) => (v == null ? undefined : new Ledger(v)))
        }
    }

/*************
 * CONSTANTS *
 *************/

export const BondingDurationConstant = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly value: number

        constructor(block: BlockHeader) {
            this.value = new StakingBondingDurationConstant(block).asV1020
        }
    }

/***********
 * MAPPERS *
 ***********/

export const BondCallMapper = <T extends Config>(
    pallet: Pallet<T, {Calls: Pick<Calls<T>, 'bond'>}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const data = new pallet.Calls.bond(call)

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const stashAddress = new pallet.Config.AccountId(origin)
            const stashId = stashAddress.format()
            const stashDeferred = ctx.store.defer(Account, stashId)

            const controllerAddress = pallet.Config.Lookup.lookup(data.controller)
            const controllerId = controllerAddress.format()
            const controllerDeferred = ctx.store.defer(Account, controllerId)

            ctx.queue
                .setBlock(call.block)
                .setExtrinsic(call.extrinsic)
                .lazy(async () => {
                    const stash = await stashDeferred.get()
                    if (stash == null) {
                        ctx.queue.add('account_create', {
                            id: stashId,
                            publicKey: stashAddress.serialize(),
                        })
                    }
                })
                .lazy(async () => {
                    const controller = await controllerDeferred.get()
                    if (controller == null) {
                        ctx.queue.add('account_create', {
                            id: controllerId,
                            publicKey: controllerAddress.serialize(),
                        })
                    }
                })

            const {payeeType, payeeId} = data.payee.match({
                None: () => ({payeeType: PayeeType.None, payeeId: undefined}),
                Stash: () => ({payeeType: PayeeType.Stash, payeeId: stashId}),
                Staked: () => ({payeeType: PayeeType.Stash, payeeId: stashId}),
                Controller: () => ({payeeType: PayeeType.Controller, payeeId: controllerId}),
                Account: (accountAddress) => {
                    const payeeId = accountAddress.format()
                    const payeeDeferred = ctx.store.defer(Account, payeeId)

                    ctx.queue.lazy(async () => {
                        const payee = await payeeDeferred.get()
                        if (payee == null) {
                            ctx.queue.add('account_create', {
                                id: payeeId,
                                publicKey: accountAddress.serialize(),
                            })
                        }
                    })

                    return {payeeType: PayeeType.Account, payeeId}
                },
            })

            const stakerId = stashId
            const stakerDeferred = ctx.store.defer(Staker, stakerId)
            ctx.queue
                .lazy(async () => {
                    const staker = await stakerDeferred.get()
                    if (staker == null) {
                        ctx.queue.add('staker_create', {
                            id: stakerId,
                            stashId,
                        })
                    }
                })
                .add('staker_revive', {
                    stakerId,
                })
                .add('staker_setController', {
                    stakerId,
                    controllerId,
                })
                .add('staker_setPayee', {
                    stakerId,
                    type: payeeType,
                    payeeId,
                })
                .add('staking_bond', {
                    id: call.id,
                    stakerId,
                    accountId: stashId,
                    amount: data.value,
                })
        }
    }

export const BondExtraCallMapper = <T extends Config>(
    pallet: Pallet<T, {Calls: Pick<Calls<T>, 'bond_extra'>}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const data = new pallet.Calls.bond_extra(call)

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const stashAddress = new pallet.Config.AccountId(origin)
            const stashId = stashAddress.format()
            ctx.store.defer(Account, stashId)

            const stakerId = stashId
            ctx.store.defer(Staker, stakerId)

            ctx.queue.setBlock(call.block).setExtrinsic(call.extrinsic).add('staking_bond', {
                id: call.id,
                accountId: stashId,
                stakerId,
                amount: data.maxAdditional,
            })
        }
    }

export const UnbondCallMapper = <T extends Config>(
    pallet: Pallet<T, {Calls: Pick<Calls<T>, 'unbond'>}>,
    success?: boolean
) =>    
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const data = new pallet.Calls.unbond(call)

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const controllerAddress = new pallet.Config.AccountId(origin)
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

                    const bondingDuration = new pallet.Constants.BondingDuration(call.block).value
                    const currentEra = await new pallet.Storage.CurrentEra(ctx, call.block).value

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

export const ForceUnstakeCallMapper = <T extends Config>(
    pallet: Pallet<T, {Calls: Pick<Calls<T>, 'force_unstake'>}>,
    success?: boolean
) =>
    class {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const data = new pallet.Calls.force_unstake(call)

            const stashAddress = data.stash
            const stashId = stashAddress.format()
            const stakerId = stashId

            ctx.queue
                .setBlock(call.block)
                .setExtrinsic(call.extrinsic)
                .lazy(async () => {
                    const staker = await ctx.store.getOrFail(Staker, {
                        where: {id: stakerId},
                        relations: {unlocking: true},
                    })

                    for (const chunk of staker.unlocking) {
                        ctx.queue.add('staking_withdrawUnlockChunk', {
                            chunkId: chunk.id,
                        })
                    }
                })
                .add('staker_kill', {
                    stakerId,
                })
        }
    }

export const WithdrawUnbondedCallMapper = <T extends Config>(
    pallet: Pallet<T, {Calls: Pick<Calls<T>, 'withdraw_unbonded'>}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const controllerAddress = new pallet.Config.AccountId(origin)
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

                    const currentEra = await new pallet.Storage.CurrentEra(ctx, call.block).value

                    const withdrawable = staker.unlocking.filter((c) => c.lockedUntilEra <= currentEra)
                    for (const chunk of withdrawable) {
                        ctx.queue.add('staking_withdrawUnlockChunk', {chunkId: chunk.id})
                    }

                    if (staker.activeBond === 0n && withdrawable.length == staker.unlocking.length) {
                        const ledger = await new pallet.Storage.Ledger(ctx, call.block, controllerAddress as any).value
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

export const SetControllerCallMapper = <T extends Config>(
    pallet: Pallet<T, {Calls: Pick<Calls<T>, 'set_controller'>}>,
    success?: boolean
) =>
    class SetControllerCall implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const data = new pallet.Calls.set_controller(call)

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const stashAddress = new pallet.Config.AccountId(origin)
            const stashId = stashAddress.format()
            const stakerId = stashId
            ctx.store.defer(Staker, stakerId)

            const controllerAddress = pallet.Config.Lookup.lookup(data.controller)
            const controllerId = controllerAddress.format()
            const controllerDeferred = ctx.store.defer(Account, controllerId)

            ctx.queue
                .setBlock(call.block)
                .setExtrinsic(call.extrinsic)
                .lazy(async () => {
                    const controller = await controllerDeferred.get()
                    if (controller == null) {
                        ctx.queue.add('account_create', {
                            id: controllerId,
                            publicKey: controllerAddress.serialize(),
                        })
                    }
                })
                .add('staker_setController', {
                    stakerId,
                    controllerId,
                })
        }
    }

export const SetPayeeCallMapper = <T extends Config>(
    pallet: Pallet<T, {Calls: Pick<Calls<T>, 'set_payee'>}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const data = new pallet.Calls.set_payee(call)

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const controllerAddress = new pallet.Config.AccountId(origin)
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

                    const {payeeType, payeeId} = await data.payee.match({
                        None: () => ({payeeType: PayeeType.None, payeeId: undefined}),
                        Stash: () => ({payeeType: PayeeType.Stash, payeeId: staker.stash.id}),
                        Staked: () => ({payeeType: PayeeType.Staked, payeeId: staker.stash.id}),
                        Controller: () => ({payeeType: PayeeType.Controller, payeeId: controller.id}),
                        Account: async (accountAddress) => {
                            const payeeId = accountAddress.format()
                            const payeeDeferred = ctx.store.defer(Account, payeeId)

                            ctx.queue.lazy(async () => {
                                const payee = await payeeDeferred.get()
                                if (payee == null) {
                                    ctx.queue.add('account_create', {
                                        id: payeeId,
                                        publicKey: accountAddress.serialize(),
                                    })
                                }
                            })

                            return {payeeType: PayeeType.Account, payeeId}
                        },
                    })

                    ctx.queue.add('staker_setPayee', {
                        stakerId: staker.id,
                        type: payeeType,
                        payeeId,
                    })
                })
        }
    }

export const ValidateCallMapper = <T extends Config>(
    pallet: Pallet<T, {Calls: Pick<Calls<T>, 'validate'>}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const data = new pallet.Calls.validate(call)

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const controllerAddress = new pallet.Config.AccountId(origin)
            const controllerId = controllerAddress.format()

            ctx.queue
                .setBlock(call.block)
                .setExtrinsic(call.extrinsic)
                .lazy(async () => {
                    const controller = await ctx.store.getOrFail(Account, {
                        where: {id: controllerId},
                        relations: {controllerOf: true},
                    })
                    const staker = controller.controllerOf
                    assert(staker != null)

                    ctx.queue.add('staker_validate', {
                        stakerId: staker.id,
                        commission: data.prefs.commission,
                    })
                })
        }
    }

export const NominateCallMapper = <T extends Config>(
    pallet: Pallet<T, {Calls: Pick<Calls<T>, 'nominate'>}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const data = new pallet.Calls.nominate(call)

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const controllerAddress = new pallet.Config.AccountId(origin)
            const controllerId = controllerAddress.format()

            let targets: string[]
            try {
                targets = data.targets.map((t) => pallet.Config.Lookup.lookup(t).format())
            } catch (err) {
                ctx.log.error({err}, `Unable to get nomitations at extrinsic ${call.extrinsic?.hash}`)
                targets = []
            }

            ctx.queue
                .setBlock(call.block)
                .setExtrinsic(call.extrinsic)
                .lazy(async () => {
                    const controller = await ctx.store.getOrFail(Account, {
                        where: {id: controllerId},
                        relations: {controllerOf: true},
                    })
                    const staker = controller.controllerOf
                    assert(staker != null)

                    ctx.queue.add('staker_nominate', {
                        stakerId: staker.id,
                        targets,
                    })
                })
        }
    }

export const ChillCallMapper = <T extends Config>(
    pallet: Pallet<T, {Calls: Pick<Calls<T>, 'chill'>}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const controllerAddress = new pallet.Config.AccountId(origin)
            const controllerId = controllerAddress.format()

            ctx.queue
                .setBlock(call.block)
                .setExtrinsic(call.extrinsic)
                .lazy(async () => {
                    const controller = await ctx.store.getOrFail(Account, {
                        where: {id: controllerId},
                        relations: {controllerOf: true},
                    })

                    const staker = controller.controllerOf
                    assert(staker != null)

                    ctx.queue.add('staker_idle', {
                        stakerId: staker.id,
                    })
                })
        }
    }

export const RewardEventMapper = <T extends Config>(pallet: Pallet<T, {Events: Pick<Events<T>, 'Reward'>}>) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, event: Event): void {
            const data = new pallet.Events.Reward(event)

            // ctx.queue.lazy(async () => {
            //     const era = await ctx.store.getOrFail(StakingEra, {where: {}, order: {index: 'DESC'}})

            //     ctx.queue.add()
            // })
        }
    }

export const SlashEventMapper = <T extends Config>(pallet: Pallet<T, {Events: Pick<Events<T>, 'Slash'>}>) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, event: Event): void {
            const data = new pallet.Events.Slash(event)

            const stashAddress = data.staker
            const stashId = stashAddress.format()
            ctx.store.defer(Account, stashId)

            const stakerId = stashId
            const stakerDeferred = ctx.store.defer(Staker, stakerId)

            ctx.queue
                .setBlock(event.block)
                .setExtrinsic(event.extrinsic)
                .add('staking_slash', {
                    id: event.id,
                    stakerId,
                    accountId: stashId,
                    amount: data.amount,
                })
                .lazy(async () => {
                    const staker = await stakerDeferred.getOrFail()

                    let remainSlash = data.amount
                    const slashAmount = (balance: bigint) => {
                        const value = MathBI.min(remainSlash, balance)
                        remainSlash = MathBI.max(remainSlash - value, 0n)

                        return value
                    }

                    const bondDelta = slashAmount(staker.activeBond)
                    ctx.queue.add('staking_bond', {
                        id: event.id,
                        stakerId,
                        accountId: stashId,
                        amount: -bondDelta,
                    })

                    if (remainSlash > 0) {
                        const unlocking = await ctx.store.find(StakingUnlockChunk, {
                            where: {withdrawn: false},
                            order: {blockNumber: 'ASC'},
                        })

                        for (const chunk of unlocking) {
                            if (remainSlash <= 0) break

                            const newChunkAmount = chunk.amount - slashAmount(chunk.amount)
                            ctx.queue.add('staking_updateUnlockChunk', {
                                chunkId: chunk.id,
                                value: newChunkAmount,
                            })

                            if (newChunkAmount === 0n) {
                                ctx.queue.add('staking_withdrawUnlockChunk', {
                                    chunkId: chunk.id,
                                })
                            }
                        }
                    }
                })
        }
    }

// export class ForceNoErasCall extends CallMapper<StakingPallet> {
//     handle(ctx: MappingContext<StoreWithCache>): void {
//         pallet.setForceEra(ctx, new Forcing({__kind: 'ForceNone'}))
//     }
// }

// export class ForceNewEraCall extends CallMapper<StakingPallet> {
//     handle(ctx: MappingContext<StoreWithCache>): void {
//         pallet.setForceEra(ctx, new Forcing({__kind: 'ForceNew'}))
//     }
// }

// export class ForceNewEraAlwaysCall extends CallMapper<StakingPallet> {
//     handle(ctx: MappingContext<StoreWithCache>): void {
//         pallet.setForceEra(ctx, new Forcing({__kind: 'ForceAlways'}))
//     }
// }

export default () => {
    const pallet = Pallet<
        Config,
        {
            Events: Events<Config>
            Calls: Calls<Config>
            Storage: Storage<Config>
            Constants: Constanst<Config>
        }
    >()

    pallet.Calls = {
        bond: BondCall(pallet),
        bond_extra: BondExtraCall(pallet),
        unbond: UnbondCall(pallet),
        force_unstake: ForceUnstakeCall(pallet),
        withdraw_unbonded: WithdrawUnbondedCall(pallet),
        set_controller: SetControllerCall(pallet),
        set_payee: SetPayeeCall(pallet),
        validate: ValidateCall(pallet),
        nominate: NominateCall(pallet),
        chill: ChillCallMapper(pallet),
    }

    pallet.Events = {
        Reward: RewardEvent(pallet),
        Slash: SlashEvent(pallet),
    }

    pallet.Storage = {
        ForceEra: ForceEraStorage(pallet),
        CurrentEraStartSessionIndex: CurrentEraStartSessionIndexStorage(pallet),
        CurrentEra: CurrentEraStorage(pallet),
        Ledger: LedgerStorage(pallet),
    }

    pallet.Constants = {
        BondingDuration: BondingDurationConstant(pallet),
    }

    pallet.EventMappers = {
        Reward: RewardEventMapper(pallet),
        Slash: SlashEventMapper(pallet),
    }

    pallet.CallMappers = {
        bond: BondCallMapper(pallet, true),
        bond_extra: BondExtraCallMapper(pallet, true),
        unbond: UnbondCallMapper(pallet, true),
        withdraw_unbonded: WithdrawUnbondedCallMapper(pallet, true),
        force_unstake: ForceUnstakeCallMapper(pallet, true),
        set_controller: SetControllerCallMapper(pallet, true),
        set_payee: SetPayeeCallMapper(pallet, true),
        validate: ValidateCallMapper(pallet, true),
        nominate: NominateCallMapper(pallet, true),
        chill: ChillCallMapper(pallet, true),
        // force_no_eras: new ForceNoErasCall(pallet, true),
        // force_new_era: new ForceNewEraCall(pallet, true),
        // force_new_era_always: new ForceNewEraAlwaysCall(pallet, true),
    }

    return pallet
}
