import {
    BondCall,
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
    NominateCall,
    NominateCallMapper,
    Pallet,
    RewardDestination,
    RewardEvent,
    RewardEventMapper,
    SetControllerCall,
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
} from '../../v1030/pallet/staking'

export {
    BondCall,
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
    NominateCall,
    NominateCallMapper,
    Pallet,
    RewardDestination,
    RewardEvent,
    RewardEventMapper,
    SetControllerCall,
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

export default pallet
