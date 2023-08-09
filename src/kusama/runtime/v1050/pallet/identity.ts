import {IdentityProvideJudgementCall} from '@metadata/kusama/calls'
import {Call, ChainContext} from '../../../interfaces'
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
    Pallet,
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
    Pallet,
    ProvideJudgmentCallMapper,
    SetIdentityCall,
    SetIdentityCallMapper,
    SetSubsCall,
    SetSubsCallMapper,
}

/*********
 * CALLS *
 *********/

export const ProvideJudgmentCall = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly target: InstanceType<Config['Lookup']['Source']>
        readonly judgement: IdentityJudgement

        constructor(call: Call) {
            const data = new IdentityProvideJudgementCall(call).asV1050
            this.target = new pallet.Config.Lookup.Source(data.target)
            this.judgement = new IdentityJudgement(data.judgement)
        }
    }

export default () => {
    const pallet = Pallet<
        Config,
        {
            Calls: Calls<Config>
            Events: Events<Config>
        }
    >()

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

    return pallet
}
