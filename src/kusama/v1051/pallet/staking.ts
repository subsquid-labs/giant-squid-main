import {StoreWithCache} from '@belopash/squid-tools'
import {StakingBondCall, StakingNominateCall, StakingSetControllerCall} from '@metadata/kusama/calls'
import {StakingCurrentEraStorage, StakingErasStakersStorage, StakingLedgerStorage} from '@metadata/kusama/storage'
import {
    StakingBondedEvent,
    StakingRewardEvent,
    StakingUnbondedEvent,
    StakingWithdrawnEvent,
} from '@metadata/kusama/events'
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
import type * as metadata from '@metadata/kusama/v1051'
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
    UnbondCall,
    ValidateCall,
    ValidateCallMapper,
    WithdrawUnbondedCall,
    Storage,
    BondCall,
    SetControllerCall,
    NominateCall,
    CurrentEraStorage,
    ActiveEra,
    ErasStartSessionIndex,
    LedgerStorage,
    newSession,
    endSession,
    startSession,
    RewardEvent,
    RewardEventMapper,
} from '../../v1050/pallet/staking'
import {implements_} from '@gs/util/decorator'
import {SessionManager} from './session'
import assert from 'assert'
import {Staker} from '@gs/model'

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
    Storage,
    BondCall,
    SetControllerCall,
    NominateCall,
    CurrentEraStorage,
    ActiveEra,
    ErasStartSessionIndex,
    LedgerStorage,
}

export type Events<T extends Config> = Merge<
    EventsOld<T>,
    {
        Bonded: EventType<{account: InstanceType<T['AccountId']>; amount: bigint}>
        Unbonded: EventType<{account: InstanceType<T['AccountId']>; amount: bigint}>
        Withdrawn: EventType<{account: InstanceType<T['AccountId']>; amount: bigint}>
    }
>

/**********
 * EVENTS *
 **********/

export const BondedEvent = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly account: InstanceType<T['AccountId']>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingBondedEvent(event).asV1051

            this.account = new P.Config.AccountId(data[0]) as any
            this.amount = data[1]
        }
    }

export const UnbondedEvent = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly account: InstanceType<T['AccountId']>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingUnbondedEvent(event).asV1051

            this.account = new P.Config.AccountId(data[0]) as any
            this.amount = data[1]
        }
    }

export const WithdrawnEvent = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly account: InstanceType<T['AccountId']>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingWithdrawnEvent(event).asV1051

            this.account = new P.Config.AccountId(data[0]) as any
            this.amount = data[1]
        }
    }

export const BondedEventMapper = <T extends Config>(
    Pallet: Pallet<
        T,
        {
            Events: Pick<Events<T>, 'Bonded'>
        }
    >
) =>
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
            Events: Pick<Events<T>, 'Unbonded'>
            Storage: Pick<Storage<T>, 'CurrentEra'>
            Constants: Pick<Constanst<T>, 'BondingDuration'>
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
            Events: Pick<Events<T>, 'Withdrawn'>
            Storage: Pick<Storage<T>, 'CurrentEra' | 'Ledger'>
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

/***********
 * MAPPERS *
 ***********/

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
        Bonded: BondedEvent(P),
        Unbonded: UnbondedEvent(P),
        Withdrawn: WithdrawnEvent(P),
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
        Unbond: UnbondedEventMapper(P),
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
