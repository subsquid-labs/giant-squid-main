import * as session from './session'
import {
    BondCallMapper,
    BondExtraCall,
    ChillCall,
    Config,
    ForceUnstakeCall,
    NominateCall,
    SetControllerCall,
    SetPayeeCall,
    UnbondCall,
    ValidateCall,
    WithdrawUnbondedCall,
    RewardDestination,
    StakingPallet,
    RewardEvent,
    SlashEvent,
    // ForceNewEraAlwaysCall,
    // ForceNewEraCall,
    // ForceNoErasCall,
} from '../../v1030/pallet/staking'

export {
    BondCallMapper,
    BondExtraCall,
    ChillCall,
    Config,
    ForceUnstakeCall,
    NominateCall,
    SetControllerCall,
    SetPayeeCall,
    UnbondCall,
    ValidateCall,
    WithdrawUnbondedCall,
    RewardDestination,
    StakingPallet,
    RewardEvent,
    SlashEvent,
    // ForceNewEraAlwaysCall,
    // ForceNewEraCall,
    // ForceNoErasCall,
}

export const pallet = new StakingPallet()

pallet.calls = {
    bond: new BondCallMapper(pallet, true),
    bond_extra: new BondExtraCall(pallet, true),
    unbond: new UnbondCall(pallet, true),
    withdraw_unbonded: new WithdrawUnbondedCall(pallet, true),
    force_unstake: new ForceUnstakeCall(pallet, true),
    set_controller: new SetControllerCall(pallet, true),
    set_payee: new SetPayeeCall(pallet, true),
    validate: new ValidateCall(pallet, true),
    nominate: new NominateCall(pallet, true),
    chill: new ChillCall(pallet, true),
    // force_no_eras: new ForceNoErasCall(pallet, true),
    // force_new_era: new ForceNewEraCall(pallet, true),
    // force_new_era_always: new ForceNewEraAlwaysCall(pallet, true),
}

pallet.events = {
    Reward: new RewardEvent(pallet),
    Slash: new SlashEvent(pallet),
}

session.pallet.sessionManager = {
    newSession: (...args) => pallet.newSession(...args),
}
