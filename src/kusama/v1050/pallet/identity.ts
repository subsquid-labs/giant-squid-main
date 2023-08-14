import Default, {Config, IdentityJudgement} from '@gs/pallets/identity/v2'
import {IdentityProvideJudgementCall} from '@metadata/kusama/calls'
import {Call, Pallet} from '../../../interfaces'
import {IdentityClearedEvent, IdentityKilledEvent, SetIdentityCall, SetSubsCall} from '../../v1032/pallet/identity'

export {IdentityClearedEvent, IdentityKilledEvent, SetIdentityCall, SetSubsCall}

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
    class P extends Default() {}

    P.Calls = {
        provide_judgment: ProvideJudgmentCall(P),
        set_identity: SetIdentityCall(P),
        set_subs: SetSubsCall(P),
    }

    P.Events = {
        IdentityCleared: IdentityClearedEvent(P),
        IdentityKilled: IdentityKilledEvent(P),
    }

    return P
}
