import {
    IdentityClearedEvent,
    IdentityClearedEventMapper,
    IdentityKilledEvent,
    IdentityKilledEventMapper,
    Pallet,
    ProvideJudgmentCall,
    ProvideJudgmentCallMapper,
    SetIdentityCall,
    SetIdentityCallMapper,
    SetSubsCall,
    SetSubsCallMapper,
    Data,
    IdentityInfo,
} from '../../v1032/pallet/identity'

export {
    IdentityClearedEvent,
    IdentityClearedEventMapper,
    IdentityKilledEvent,
    IdentityKilledEventMapper,
    Pallet,
    ProvideJudgmentCall,
    ProvideJudgmentCallMapper,
    SetIdentityCall,
    SetIdentityCallMapper,
    SetSubsCall,
    SetSubsCallMapper,
    Data,
    IdentityInfo,
}

/******************
 * IMPLEMENTATION *
 ******************/

const pallet = new Pallet()

pallet.Calls = {
    provide_judgment: ProvideJudgmentCall(pallet),
    set_identity: SetIdentityCall(pallet),
    set_subs: SetSubsCall(pallet),
}

pallet.Events = {
    IdentityCleared: IdentityClearedEvent(pallet),
    IdentityKilled: IdentityKilledEvent(pallet),
}

pallet.CallMappers = {
    set_subs: SetSubsCallMapper(pallet, true),
    provide_judgment: ProvideJudgmentCallMapper(pallet, true),
    set_identity: SetIdentityCallMapper(pallet, true),
}

pallet.EventMappers = {
    IdentityClear: IdentityClearedEventMapper(pallet),
    IdentityKill: IdentityKilledEventMapper(pallet),
}

export default pallet
