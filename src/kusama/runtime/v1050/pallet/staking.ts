import {StoreWithCache} from '@belopash/squid-tools'
import {StakingBondCall, StakingNominateCall, StakingSetControllerCall} from '@metadata/kusama/calls'
import {StakingRewardEvent} from '@metadata/kusama/events'
import {Merge} from 'type-fest'
import {Call, ChainContext, Event, EventMapper, EventType, MappingContext, PalletSetup} from '../../../interfaces'
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
    CurrentEraStorage,
    Events as EventsOld,
    ForceEraStorage,
    ForceUnstakeCall,
    ForceUnstakeCallMapper,
    LedgerStorage,
    NominateCallMapper,
    Pallet,
    RewardDestination,
    SetControllerCallMapper,
    SetPayeeCall,
    SetPayeeCallMapper,
    SlashEvent,
    SlashEventMapper,
    Storage,
    UnbondCall,
    UnbondCallMapper,
    ValidateCall,
    ValidateCallMapper,
    WithdrawUnbondedCall,
    WithdrawUnbondedCallMapper,
} from '../../v1032/pallet/staking'

export {
    BondCallMapper,
    BondExtraCall,
    BondExtraCallMapper,
    BondingDurationConstant,
    ChillCallMapper,
    Config,
    CurrentEraStartSessionIndexStorage,
    CurrentEraStorage,
    ForceEraStorage,
    ForceUnstakeCall,
    ForceUnstakeCallMapper,
    LedgerStorage,
    NominateCallMapper,
    RewardDestination,
    SetControllerCallMapper,
    SetPayeeCall,
    SetPayeeCallMapper,
    SlashEvent,
    SlashEventMapper,
    UnbondCall,
    UnbondCallMapper,
    ValidateCall,
    ValidateCallMapper,
    WithdrawUnbondedCall,
    WithdrawUnbondedCallMapper,
}

export type Events<T extends Config> = Merge<
    EventsOld<T>,
    {
        Reward: EventType<{account: InstanceType<T['AccountId']>; amount: bigint}>
    }
>

/*********
 * CALLS *
 *********/

export const BondCall = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly controller: InstanceType<Config['Lookup']['Source']>
        readonly value: bigint
        readonly payee: RewardDestination<Config['AccountId']>

        constructor(call: Call) {
            const data = new StakingBondCall(call).asV1050

            this.controller = new pallet.Config.Lookup.Source(data.controller)
            this.value = data.value
            this.payee = new (RewardDestination(pallet.Config.AccountId))(data.payee)
        }
    }

export const NominateCall = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly targets: InstanceType<Config['Lookup']['Source']>[]

        constructor(call: Call) {
            const data = new StakingNominateCall(call).asV1050
            this.targets = data.targets.map((t) => new pallet.Config.Lookup.Source(t))
        }
    }

export const SetControllerCall = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly controller: InstanceType<Config['Lookup']['Source']>

        constructor(call: Call) {
            const data = new StakingSetControllerCall(call).asV1050

            const lookupSource = new pallet.Config.Lookup.Source(data.controller)
            this.controller = pallet.Config.Lookup.lookup(lookupSource)
        }
    }

/**********
 * EVENTS *
 **********/

export const RewardEvent = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly account: InstanceType<T['AccountId']>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingRewardEvent(event).asV1050

            this.account = new pallet.Config.AccountId(data[0]) as any
            this.amount = data[1]
        }
    }

/***********
 * MAPPERS *
 ***********/

export const RewardEventMapper = <T extends Config>(pallet: Pallet<T, {Events: Pick<Events<T>, 'Reward'>}>) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, item: Event): void {}
    }

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
