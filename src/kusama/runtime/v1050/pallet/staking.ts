import {StakingBondCall, StakingNominateCall, StakingSetControllerCall} from '@metadata/kusama/calls'
import {Call, ChainContext} from '../../../interfaces'
import {
    BondCallMapper,
    BondExtraCall,
    BondExtraCallMapper,
    ChillCallMapper,
    Config,
    ForceUnstakeCall,
    ForceUnstakeCallMapper,
    NominateCallMapper,
    Pallet,
    RewardDestination,
    RewardEvent,
    RewardEventMapper,
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
} from '../../v1032/pallet/staking'

export {
    BondCallMapper,
    BondExtraCall,
    BondExtraCallMapper,
    ChillCallMapper,
    ForceUnstakeCall,
    ForceUnstakeCallMapper,
    NominateCallMapper,
    Pallet,
    RewardEvent,
    RewardEventMapper,
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

/*********
 * CALLS *
 *********/

export const BondCall = (pallet: Pallet) =>
    class {
        readonly controller: InstanceType<Config['Lookup']['Source']>
        readonly value: bigint
        readonly payee: RewardDestination<Config['AccountId']>

        constructor(ctx: ChainContext, call: Call) {
            const data = new StakingBondCall(ctx, call).asV1050

            this.controller = new pallet.Config.Lookup.Source(data.controller)
            this.value = data.value
            this.payee = new (RewardDestination(pallet.Config.AccountId))(data.payee)
        }
    }

export const NominateCall = (pallet: Pallet) =>
    class {
        readonly targets: InstanceType<Config['Lookup']['Source']>[]

        constructor(ctx: ChainContext, call: Call) {
            const data = new StakingNominateCall(ctx, call).asV1050
            this.targets = data.targets.map((t) => new pallet.Config.Lookup.Source(t))
        }
    }

export const SetControllerCall = (pallet: Pallet) =>
    class {
        readonly controller: InstanceType<Config['Lookup']['Source']>

        constructor(ctx: ChainContext, call: Call) {
            const data = new StakingSetControllerCall(ctx, call).asV1050

            const lookupSource = new pallet.Config.Lookup.Source(data.controller)
            this.controller = pallet.Config.Lookup.lookup(lookupSource)
        }
    }

/******************
 * IMPLEMENTATION *
 ******************/

const pallet = new Pallet()

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

export default pallet
