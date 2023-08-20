import {Call, Parameter} from '~interfaces'
import {IdentityProvideJudgementCall} from '~metadata/kusama/calls'
import Default, {IdentityJudgement} from '~pallets/identity/v2'
import {IdentityClearedEvent, IdentityKilledEvent, SetIdentityCall, SetSubsCall} from '../../v1032/pallet/identity'

export {IdentityClearedEvent, IdentityKilledEvent, SetIdentityCall, SetSubsCall}

/*********
 * CALLS *
 *********/

export const ProvideJudgmentCall = <LookupSource extends Parameter>(LookupSource: LookupSource) =>
    class {
        readonly target: InstanceType<LookupSource>
        readonly judgement: IdentityJudgement

        constructor(call: Call) {
            const data = new IdentityProvideJudgementCall(call).asV1050
            this.target = new LookupSource(data.target) as any
            this.judgement = new IdentityJudgement(data.judgement)
        }
    }

export default () =>
    Default((Config) => ({
        Calls: {
            provide_judgment: ProvideJudgmentCall(Config.Lookup.Source),
            set_subs: SetSubsCall(Config.AccountId),
            set_identity: SetIdentityCall,
        },

        Events: {
            IdentityCleared: IdentityClearedEvent(Config.AccountId),
            IdentityKilled: IdentityKilledEvent(Config.AccountId),
        },
    }))
