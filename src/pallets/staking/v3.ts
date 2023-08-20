import {StoreWithCache} from '@belopash/squid-tools'
import {BlockHeader, Call, CallMapper, Event, EventMapper, EventType, MappingContext, Pallet, Setup} from '~interfaces'
import {Account, PayeeType, Staker} from '~model'
import {implements_} from '~util/decorator'
import {getOriginAccountId} from '~util/misc'
import assert from 'assert'
import {SessionManager} from '../session/v2'
import {
    ActiveEraInfo,
    ActiveEraStorageType,
    BondCallType,
    BondExtraCallType,
    BondingDurationConstantType,
    ChillCallMapper,
    ChillCallType,
    Config,
    CurrentEraStorageType,
    endEra,
    endSession,
    EraElectedStorageType,
    ErasStartSessionIndexStorageType,
    EraStakersStorageType,
    Exposure,
    ForceEraStorageType,
    ForceUnstakeCallMapper,
    ForceUnstakeCallType,
    Forcing,
    LedgerStorageType,
    newEra,
    newSession,
    NominateCallMapper,
    NominateCallType,
    PalletOptions,
    RewardDestination,
    RewardEventMapper,
    RewardEventType,
    SetControllerCallMapper,
    SetControllerCallType,
    SetPayeeCallMapper,
    SetPayeeCallType,
    SlashEventMapper,
    SlashEventType,
    StakingLedger,
    startEra,
    startSession,
    UnbondCallType,
    ValidateCallMapper,
    ValidateCallType,
    WithdrawUnbondedCallType,
} from './v2'

export {
    ActiveEraStorageType,
    BondCallType,
    BondExtraCallType,
    BondingDurationConstantType,
    ChillCallMapper,
    ChillCallType,
    Config,
    CurrentEraStorageType,
    endSession,
    EraElectedStorageType,
    ErasStartSessionIndexStorageType,
    EraStakersStorageType,
    ForceEraStorageType,
    ForceUnstakeCallMapper,
    ForceUnstakeCallType,
    LedgerStorageType,
    newSession,
    NominateCallMapper,
    NominateCallType,
    PalletOptions,
    RewardEventMapper,
    RewardEventType,
    SetControllerCallMapper,
    SetControllerCallType,
    SetPayeeCallMapper,
    SetPayeeCallType,
    SlashEventMapper,
    SlashEventType,
    startSession,
    UnbondCallType,
    ValidateCallMapper,
    ValidateCallType,
    WithdrawUnbondedCallType,
    ActiveEraInfo,
    Exposure,
    Forcing,
    RewardDestination,
    StakingLedger,
    endEra,
    newEra,
    startEra,
}

export type BondedEventType<T extends Pick<Config, 'AccountId'>> = EventType<{
    account: InstanceType<T['AccountId']>
    amount: bigint
}>
export type UnbondedEventType<T extends Pick<Config, 'AccountId'>> = EventType<{
    account: InstanceType<T['AccountId']>
    amount: bigint
}>
export type WithdrawnEventType<T extends Pick<Config, 'AccountId'>> = EventType<{
    account: InstanceType<T['AccountId']>
    amount: bigint
}>

export interface PalletSetup<T extends Config> {
    Events: {
        Reward: RewardEventType<T>
        Slash: SlashEventType<T>
        Bonded: BondedEventType<T>
        Unbonded: UnbondedEventType<T>
        Withdrawn: WithdrawnEventType<T>
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

export const BondedEventMapper = <T extends Config>(Pallet: Pallet<T, {Events: {Bonded: BondedEventType<T>}}>) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, event: Event): void {
            const data = new Pallet.Events.Bonded(event)

            const stashAddress = data.account
            const stashId = stashAddress.format()
            const stakerId = stashId
            ctx.store.defer(Staker, stakerId)

            const amount = data.amount

            ctx.queue.setBlock(event.block).setExtrinsic(event.extrinsic).add('staking_bond', {
                id: event.id,
                accountId: stashId,
                stakerId,
                amount,
            })
        }
    }

export const UnbondedEventMapper = <T extends Config>(
    Pallet: Pallet<
        T,
        {
            Events: {Unbonded: UnbondedEventType<T>}
            Storage: {CurrentEra: CurrentEraStorageType}
            Constants: {BondingDuration: BondingDurationConstantType}
        }
    >
) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, event: Event): void {
            const data = new Pallet.Events.Unbonded(event)

            const stashAddress = data.account
            const stashId = stashAddress.format()
            const stakerId = stashId
            ctx.store.defer(Staker, stakerId)

            const amount = data.amount
            if (amount === 0n) return

            ctx.queue
                .setBlock(event.block)
                .setExtrinsic(event.extrinsic)
                .add('staking_bond', {
                    id: event.id,
                    accountId: stashId,
                    stakerId: stakerId,
                    amount: -amount,
                })
                .lazy(async () => {
                    const bondingDuration = new Pallet.Constants.BondingDuration(event.block).value
                    const currentEra = await new Pallet.Storage.CurrentEra(ctx, event.block).value
                    assert(currentEra != null)

                    ctx.queue.add('staking_createUnlockChunk', {
                        id: event.id,
                        stakerId: stakerId,
                        amount,
                        lockedUntilEra: currentEra + bondingDuration,
                    })
                })
        }
    }

export const WithdrawnEventMapper = <T extends Config>(
    Pallet: Pallet<
        T,
        {
            Events: {Withdrawn: WithdrawnEventType<T>}
            Storage: {Ledger: LedgerStorageType<T>; CurrentEra: CurrentEraStorageType}
        }
    >,
    success?: boolean
) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, event: Event): void {
            const data = new Pallet.Events.Withdrawn(event)

            const stashAddress = data.account
            const stashId = stashAddress.format()
            const stakerId = stashId

            ctx.queue
                .setBlock(event.block)
                .setExtrinsic(event.extrinsic)
                .lazy(async () => {
                    const staker = await ctx.store.getOrFail(Staker, {
                        where: {id: stakerId},
                        relations: {stash: true, unlocking: true, controller: true},
                    })
                    const controller = staker.controller
                    assert(controller != null)

                    const currentEra = await new Pallet.Storage.CurrentEra(ctx, event.block).value
                    assert(currentEra != null)

                    const withdrawable = staker.unlocking.filter((c) => c.lockedUntilEra <= currentEra)

                    let chunkSum = 0n
                    for (const chunk of withdrawable) {
                        ctx.queue.add('staking_withdrawUnlockChunk', {chunkId: chunk.id})
                        chunkSum += chunk.amount
                    }
                    assert(data.amount === chunkSum)

                    if (staker.activeBond === 0n && withdrawable.length == staker.unlocking.length) {
                        const controllerAddress = Pallet.Config.AccountId.from(controller.id)
                        const ledger = await new Pallet.Storage.Ledger(ctx, event.block, controllerAddress as any).value
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
            // bond will be handled in the following event
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
        Bonded: BondedEventMapper(P),
        Unbonded: UnbondedEventMapper(P),
        Withdrawn: WithdrawnEventMapper(P),
    }

    P.CallMappers = {
        bond: BondCallMapper(P, true),
        force_unstake: ForceUnstakeCallMapper(P, true),
        set_controller: SetControllerCallMapper(P, true),
        set_payee: SetPayeeCallMapper(P, true),
        validate: ValidateCallMapper(P, true),
        nominate: NominateCallMapper(P, true),
        chill: ChillCallMapper(P, true),
    }

    return P
}
