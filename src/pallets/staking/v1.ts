import {StoreWithCache} from '@belopash/squid-tools'
import {
    BlockHeader,
    Call,
    CallMapper,
    CallType,
    ConstantType,
    Enum,
    Event,
    EventMapper,
    EventType,
    MappingContext,
    Pallet,
    Parameter,
    StorageType,
} from '~interfaces'
import {Account, PayeeType, Staker, StakingEra, StakingUnlockChunk} from '~model'
import {implements_} from '~util/decorator'
import {createEraId, createEraNominationId, createEraStakerId} from '~util/id'
import {getOriginAccountId} from '~util/misc'
import assert from 'assert'
import MathBI from 'extra-bigint'
import * as pallet_system from '~pallets/system/v1'
import {OnSessionEnding} from '../session/v1'
import {StakingStakersStorage} from '~metadata/kusama/storage'

/*********
 * TYPES *
 *********/
type RewardDestinationRaw =
    | {
          __kind: 'Staked'
      }
    | {
          __kind: 'Stash'
      }
    | {
          __kind: 'Controller'
      }
    | {
          __kind: 'Account'
          value: Uint8Array
      }
    | {
          __kind: 'None'
      }
export const RewardDestination = <AccountId extends Parameter>(AccountId: AccountId) => {
    @implements_<Parameter<RewardDestinationRaw>>()
    class RewardDestination extends Enum<RewardDestinationRaw>()({
        Account: AccountId,
    }) {}

    return RewardDestination
}
export type RewardDestination<AccountId extends Parameter> = InstanceType<
    ReturnType<typeof RewardDestination<AccountId>>
>

type ForcingRaw =
    | {
          __kind: 'NotForcing'
      }
    | {
          __kind: 'ForceNew'
      }
    | {
          __kind: 'ForceNone'
      }
    | {
          __kind: 'ForceAlways'
      }
@implements_<Parameter<ForcingRaw>>()
export class Forcing extends Enum<ForcingRaw>()({}) {}

type ValidatorPrefsRaw = {
    commission: number
}
@implements_<Parameter<ValidatorPrefsRaw>>()
export class ValidatorPrefs {
    readonly commission: number

    constructor(readonly __value: ValidatorPrefsRaw) {
        this.commission = __value.commission
    }
}

type StakingLedgerRaw = {
    stash: Uint8Array
    total: bigint
    active: bigint
}
export const StakingLedger = <AccountId extends Parameter>(AccountId: AccountId) => {
    @implements_<Parameter<StakingLedgerRaw>>()
    class StakingLedger {
        readonly stash: InstanceType<AccountId>
        readonly total: bigint
        readonly active: bigint

        constructor(readonly __value: StakingLedgerRaw) {
            this.stash = new AccountId(__value.stash) as any
            this.total = __value.total
            this.active = __value.active
        }
    }

    return StakingLedger
}
export type StakingLedger<AccountId extends Parameter> = ReturnType<typeof StakingLedger<AccountId>>

export interface ExposureRaw {
    total: bigint
    own: bigint
    others: IndividualExposureRaw[]
}
export const Exposure = <AccountId extends Parameter>(AccountId: AccountId) => {
    const _IndividualExposure = IndividualExposure(AccountId)

    @implements_<Parameter<ExposureRaw>>()
    class Exposure {
        readonly total: bigint
        readonly own: bigint
        readonly others: InstanceType<typeof _IndividualExposure>[]

        constructor(readonly __value: ExposureRaw) {
            this.own = __value.own
            this.total = __value.total
            this.others = __value.others.map((o) => new _IndividualExposure(o))
        }
    }

    return Exposure
}
export type Exposure<AccountId extends Parameter> = ReturnType<typeof Exposure<AccountId>>

export interface IndividualExposureRaw {
    who: Uint8Array
    value: bigint
}
export const IndividualExposure = <AccountId extends Parameter>(AccountId: AccountId) => {
    @implements_<Parameter<IndividualExposureRaw>>()
    class IndividualExposure {
        readonly who: InstanceType<AccountId>
        readonly value: bigint

        constructor(readonly __value: IndividualExposureRaw) {
            this.who = new AccountId(__value.who) as any
            this.value = __value.value
        }
    }

    return IndividualExposure
}
export type IndividualExposure<AccountId extends Parameter> = ReturnType<typeof IndividualExposure<AccountId>>

/**********
 * CONFIG *
 **********/

export type Config = pallet_system.Config & {}

/**********
 * EVENTS *
 **********/

export type RewardEventType = EventType<{reward: bigint; remainer: bigint}>
export type SlashEventType<T extends Config> = EventType<{staker: InstanceType<T['AccountId']>; amount: bigint}>

/*********
 * CALLS *
 *********/

export type BondCallType<T extends Pick<Config, 'AccountId' | 'Lookup'>> = CallType<{
    controller: InstanceType<T['Lookup']['Source']>
    value: bigint
    payee: RewardDestination<T['AccountId']>
}>
export type BondExtraCallType = CallType<{maxAdditional: bigint}>
export type UnbondCallType = CallType<{value: bigint}>
export type ForceUnstakeCallType<T extends Pick<Config, 'AccountId'>> = CallType<{stash: InstanceType<T['AccountId']>}>
export type WithdrawUnbondedCallType = CallType<{}>
export type SetControllerCallType<T extends Pick<Config, 'Lookup'>> = CallType<{
    controller: InstanceType<T['Lookup']['Source']>
}>
export type SetPayeeCallType<T extends Pick<Config, 'AccountId'>> = CallType<{payee: RewardDestination<T['AccountId']>}>
export type ValidateCallType = CallType<{prefs: ValidatorPrefs}>
export type NominateCallType<T extends Pick<Config, 'Lookup'>> = CallType<{
    targets: InstanceType<T['Lookup']['Source']>[]
}>
export type ChillCallType = CallType<{}>

/***********
 * STORAGE *
 ***********/

export type CurrentEraStorageType = StorageType<[], number>
export type ForceEraStorageType = StorageType<[], Forcing>
export type CurrentEraStartSessionIndexStorageType = StorageType<[], number>
export type LedgerStorageType<T extends Pick<Config, 'AccountId'>> = StorageType<
    [InstanceType<T['AccountId']>],
    InstanceType<StakingLedger<T['AccountId']>> | undefined
>
export type CurrentElectedStorageType<T extends Pick<Config, 'AccountId'>> = StorageType<
    [],
    InstanceType<T['AccountId']>[]
>
export type StakersStorageType<T extends Pick<Config, 'AccountId'>> = StorageType<
    [InstanceType<T['AccountId']>[]],
    InstanceType<Exposure<T['AccountId']>>[]
>

/*************
 * CONSTANTS *
 *************/

export type BondingDurationConstantType = ConstantType<number>

export interface PalletSetup<T extends Config> {
    Events: {
        Reward: RewardEventType
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
        ForceEra: ForceEraStorageType
        CurrentEraStartSessionIndex: CurrentEraStartSessionIndexStorageType
        Ledger: LedgerStorageType<T>
        CurrentElected: CurrentElectedStorageType<T>
        Stakers: StakersStorageType<T>
    }
    Constants: {
        BondingDuration: BondingDurationConstantType
    }
}

export function newSession<T extends Config>(
    this: Pallet<
        T,
        {
            Storage: {
                ForceEra: ForceEraStorageType
                CurrentEraStartSessionIndex: CurrentEraStartSessionIndexStorageType
                CurrentEra: CurrentEraStorageType
                CurrentElected: CurrentElectedStorageType<T>
                Stakers: StakersStorageType<T>
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
            const forceEra = await new this.Storage.ForceEra(ctx, block).value
            const currentEraStartSessionIndex = await new this.Storage.CurrentEraStartSessionIndex(ctx, block).value

            let triggerNewEra = currentEraStartSessionIndex == sessionIndex
            forceEra.match({
                ForceNew: () => assert(triggerNewEra),
                ForceAlways: () => assert(triggerNewEra),
                _: () => {},
            })

            if (triggerNewEra) {
                newEra.call(this, ctx, block, sessionIndex)
            }
        })
}

export function newEra<T extends Config>(
    this: Pallet<
        T,
        {
            Storage: {
                CurrentEra: CurrentEraStorageType
                CurrentElected: CurrentElectedStorageType<T>
                Stakers: StakersStorageType<T>
            }
        }
    >,
    ctx: MappingContext<StoreWithCache>,
    block: BlockHeader,
    startSessionIndex: number
) {
    ctx.queue
        .setBlock(block)
        .setExtrinsic(undefined)
        .lazy(async () => {
            const currentEraIndex = await new this.Storage.CurrentEra(ctx, block).value

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

            const validatorAddresses = await new this.Storage.CurrentElected(ctx, block).value
            const validatorsInfo = await new this.Storage.Stakers(ctx, block, validatorAddresses).value

            const validators = new Map<string, {id: string; bonded: bigint; total: bigint}>()
            const nominators = new Map<string, {id: string; bonded: bigint}>()
            const nominations = new Map<string, {validatorId: string; nominatorId: string; vote: bigint}>()
            for (let i = 0; i < validatorAddresses.length; i++) {
                const validatorAddress = validatorAddresses[i]
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
                    const nominatorAddress = nomination.who

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

/***********
 * MAPPERS *
 ***********/

export const BondCallMapper = <T extends Config>(
    Pallet: Pallet<T, {Calls: {bond: BondCallType<T>}}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const data = new Pallet.Calls.bond(call)

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const stashAddress = new Pallet.Config.AccountId(origin)
            const stashId = stashAddress.format()
            const stashDeferred = ctx.store.defer(Account, stashId)

            const controllerAddress = Pallet.Config.Lookup.lookup(data.controller)
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
                Account: (accountAddress: any) => {
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
    Pallet: Pallet<T, {Calls: {bond_extra: BondExtraCallType}}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const data = new Pallet.Calls.bond_extra(call)

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const stashAddress = new Pallet.Config.AccountId(origin)
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
    Pallet: Pallet<T, {Calls: {force_unstake: ForceUnstakeCallType<T>}}>,
    success?: boolean
) =>
    class {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const data = new Pallet.Calls.force_unstake(call)

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

export const SetControllerCallMapper = <T extends Config>(
    Pallet: Pallet<T, {Calls: {set_controller: SetControllerCallType<T>}}>,
    success?: boolean
) =>
    class SetControllerCall implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const data = new Pallet.Calls.set_controller(call)

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const stashAddress = new Pallet.Config.AccountId(origin)
            const stashId = stashAddress.format()
            const stakerId = stashId
            ctx.store.defer(Staker, stakerId)

            const controllerAddress = Pallet.Config.Lookup.lookup(data.controller)
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
    Pallet: Pallet<T, {Calls: {set_payee: SetPayeeCallType<T>}}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const data = new Pallet.Calls.set_payee(call)

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

                    const {payeeType, payeeId} = await data.payee.match({
                        None: () => ({payeeType: PayeeType.None, payeeId: undefined}),
                        Stash: () => ({payeeType: PayeeType.Stash, payeeId: staker.stash.id}),
                        Staked: () => ({payeeType: PayeeType.Staked, payeeId: staker.stash.id}),
                        Controller: () => ({payeeType: PayeeType.Controller, payeeId: controller.id}),
                        Account: async (accountAddress: any) => {
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
    Pallet: Pallet<T, {Calls: {validate: ValidateCallType}}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const data = new Pallet.Calls.validate(call)

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
    Pallet: Pallet<T, {Calls: {nominate: NominateCallType<T>}}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const data = new Pallet.Calls.nominate(call)

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const controllerAddress = new Pallet.Config.AccountId(origin)
            const controllerId = controllerAddress.format()

            let targets: string[]
            try {
                targets = data.targets.map((t) => Pallet.Config.Lookup.lookup(t).format())
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
    Pallet: Pallet<T, {Calls: {chill: ChillCallType}}>,
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

export const RewardEventMapper = <T extends Config>(Pallet: Pallet<T, {Events: {Reward: RewardEventType}}>) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, event: Event): void {
            const data = new Pallet.Events.Reward(event)
        }
    }

export const SlashEventMapper = <T extends Config>(Pallet: Pallet<T, {Events: {Slash: SlashEventType<T>}}>) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, event: Event): void {
            const data = new Pallet.Events.Slash(event)

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

export default <T extends Config = Config, S extends PalletSetup<T> = PalletSetup<T>>(setup: (Config: T) => S) => {
    @implements_<OnSessionEnding>()
    class P extends Pallet(setup) {
        static onSessionEnding(
            ctx: MappingContext<StoreWithCache>,
            block: BlockHeader,
            endingIndex: number,
            willApplyAt: number
        ) {
            newSession.call(this, ctx, block, willApplyAt - 1)
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
