import {IdentitySetIdentityCall} from '@metadata/kusama/calls'
import {Call, Pallet} from '../../../interfaces'
import Default, {Config, IdentityInfo} from '@gs/pallets/identity/v2'
import {ProvideJudgmentCall, SetSubsCall, IdentityClearedEvent, IdentityKilledEvent} from '../../v1030/pallet/identity'

export {ProvideJudgmentCall, SetSubsCall, IdentityClearedEvent, IdentityKilledEvent}

export const SetIdentityCall = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly info: IdentityInfo

        constructor(call: Call) {
            const data = new IdentitySetIdentityCall(call).asV1032
            this.info = new IdentityInfo(data.info)
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
