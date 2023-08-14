import {IdentityProvideJudgementCall, IdentitySetIdentityCall, IdentitySetSubsCall} from '@metadata/kusama/calls'
import {IdentityIdentityClearedEvent, IdentityIdentityKilledEvent} from '@metadata/kusama/events'
import {Call, Event, Pallet} from '../../../interfaces'
import Default, {Config, Data, IdentityInfo, IdentityJudgement} from '@gs/pallets/identity/v1'

export const SetSubsCall = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly subs: [InstanceType<T['AccountId']>, Data][]

        constructor(call: Call) {
            const data = new IdentitySetSubsCall(call).asV1030
            this.subs = data.subs.map((s) => [new P.Config.AccountId(s[0]) as any, new Data(s[1])])
        }
    }

export const ProvideJudgmentCall = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly target: InstanceType<T['Lookup']['Source']>
        readonly judgement: IdentityJudgement

        constructor(call: Call) {
            const data = new IdentityProvideJudgementCall(call).asV1030
            this.target = new P.Config.Lookup.Source(data.target) as any
            this.judgement = new IdentityJudgement(data.judgement)
        }
    }

export const SetIdentityCall = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly info: IdentityInfo

        constructor(call: Call) {
            const data = new IdentitySetIdentityCall(call).asV1030
            this.info = new IdentityInfo(data.info)
        }
    }

/**********
 * EVENTS *
 **********/

export const IdentityClearedEvent = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly who: InstanceType<T['AccountId']>

        constructor(event: Event) {
            const data = new IdentityIdentityClearedEvent(event).asV1030
            this.who = new P.Config.AccountId(data[0]) as any
        }
    }

export const IdentityKilledEvent = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly who: InstanceType<T['AccountId']>

        constructor(event: Event) {
            const data = new IdentityIdentityKilledEvent(event).asV1030
            this.who = new P.Config.AccountId(data[0]) as any
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
