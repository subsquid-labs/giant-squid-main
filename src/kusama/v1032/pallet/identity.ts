import {Call} from '~interfaces'
import {IdentitySetIdentityCall} from '~metadata/kusama/calls'
import Default, {IdentityInfo} from '~pallets/identity/v2'
import {IdentityClearedEvent, IdentityKilledEvent, ProvideJudgmentCall, SetSubsCall} from '../../v1030/pallet/identity'

export {ProvideJudgmentCall, SetSubsCall, IdentityClearedEvent, IdentityKilledEvent}

export class SetIdentityCall {
    readonly info: IdentityInfo

    constructor(call: Call) {
        const data = new IdentitySetIdentityCall(call).asV1032
        this.info = new IdentityInfo(data.info)
    }
}

export default () =>
    Default((Config) => ({
        Calls: {
            provide_judgment: ProvideJudgmentCall(Config.AccountId),
            set_subs: SetSubsCall(Config.AccountId),
            set_identity: SetIdentityCall,
        },
        Events: {
            IdentityCleared: IdentityClearedEvent(Config.AccountId),
            IdentityKilled: IdentityKilledEvent(Config.AccountId),
        },
    }))
