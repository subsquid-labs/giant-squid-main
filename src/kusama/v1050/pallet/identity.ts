import {IdentityProvideJudgementCall} from '@metadata/kusama/calls'
import {Call, ChainContext, Pallet} from '../../interfaces'
import {
    Calls,
    Config,
    Data,
    Events,
    IdentityClearedEvent,
    IdentityClearedEventMapper,
    IdentityInfo,
    IdentityJudgement,
    IdentityKilledEvent,
    IdentityKilledEventMapper,
    ProvideJudgmentCallMapper,
    SetIdentityCall,
    SetIdentityCallMapper,
    SetSubsCall,
    SetSubsCallMapper,
} from '../../v1032/pallet/identity'

export {
    Calls,
    Config,
    Data,
    Events,
    IdentityClearedEvent,
    IdentityClearedEventMapper,
    IdentityInfo,
    IdentityJudgement,
    IdentityKilledEvent,
    IdentityKilledEventMapper,
    ProvideJudgmentCallMapper,
    SetIdentityCall,
    SetIdentityCallMapper,
    SetSubsCall,
    SetSubsCallMapper,
}

/*********
 * CALLS *
 *********/

export const ProvideJudgmentCall = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly target: InstanceType<Config['Lookup']['Source']>
        readonly judgement: IdentityJudgement

        constructor(call: Call) {
            const data = new IdentityProvideJudgementCall(call).asV1050
            this.target = new P.Config.Lookup.Source(data.target)
            this.judgement = new IdentityJudgement(data.judgement)
        }
    }

export default () => {
    class P extends Pallet<
        Config,
        {
            Calls: Calls<Config>
            Events: Events<Config>
        }
    >() {}

    P.Calls = {
        provide_judgment: ProvideJudgmentCall(P),
        set_identity: SetIdentityCall(P),
        set_subs: SetSubsCall(P),
    }

    P.Events = {
        IdentityCleared: IdentityClearedEvent(P),
        IdentityKilled: IdentityKilledEvent(P),
    }

    P.CallMappers = {
        set_subs: SetSubsCallMapper(P, true),
        provide_judgment: ProvideJudgmentCallMapper(P, true),
        set_identity: SetIdentityCallMapper(P, true),
    }

    P.EventMappers = {
        IdentityClear: IdentityClearedEventMapper(P),
        IdentityKill: IdentityKilledEventMapper(P),
    }

    return P
}
