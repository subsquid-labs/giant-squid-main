import {IdentityProvideJudgementCall, IdentitySetIdentityCall, IdentitySetSubsCall} from '~metadata/kusama/calls'
import {IdentityIdentityClearedEvent, IdentityIdentityKilledEvent} from '~metadata/kusama/events'
import {Call, Event, Parameter} from '~interfaces'
import Default, {Data, IdentityInfo, IdentityJudgement} from '~pallets/identity/v1'

//#region CALLS

export const SetSubsCall = <AccountId extends Parameter>(AccountId: AccountId) =>
    class {
        readonly subs: [InstanceType<AccountId>, Data][]

        constructor(call: Call) {
            const data = new IdentitySetSubsCall(call).asV1030
            this.subs = data.subs.map((s) => [new AccountId(s[0]) as any, new Data(s[1])])
        }
    }

export const ProvideJudgmentCall = <LookupSource extends Parameter>(LookupSource: LookupSource) =>
    class {
        readonly target: InstanceType<LookupSource>
        readonly judgement: IdentityJudgement

        constructor(call: Call) {
            const data = new IdentityProvideJudgementCall(call).asV1030
            this.target = new LookupSource(data.target) as any
            this.judgement = new IdentityJudgement(data.judgement)
        }
    }

export class SetIdentityCall {
    readonly info: IdentityInfo

    constructor(call: Call) {
        const data = new IdentitySetIdentityCall(call).asV1030
        this.info = new IdentityInfo(data.info)
    }
}

//#endregion

//#region EVENTS

export const IdentityClearedEvent = <AccountId extends Parameter>(AccountId: AccountId) =>
    class {
        readonly who: InstanceType<AccountId>

        constructor(event: Event) {
            const data = new IdentityIdentityClearedEvent(event).asV1030
            this.who = new AccountId(data[0]) as any
        }
    }

export const IdentityKilledEvent = <AccountId extends Parameter>(AccountId: AccountId) =>
    class {
        readonly who: InstanceType<AccountId>

        constructor(event: Event) {
            const data = new IdentityIdentityKilledEvent(event).asV1030
            this.who = new AccountId(data[0]) as any
        }
    }

//#endregion

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
