import {CallMapper, EventMapper, IPallet} from '../../../../interfaces'
import {Config} from '../system'
import {ProvideJudgmentCallMapper, SetIdentityCallMapper, SetSubsCallMapper} from './calls'
import {IdentityClearEventMapper, IdentityKillEventMapper} from './events'

export class Pallet implements IPallet<Config> {
    constructor(readonly config: Config) {}

    readonly events: Record<string, EventMapper> = {
        IdentityClear: new IdentityClearEventMapper(this.config),
        IdentityKill: new IdentityKillEventMapper(this.config),
    }

    readonly calls: Record<string, CallMapper> = {
        set_subs: new SetSubsCallMapper(this.config),
        provide_judgment: new ProvideJudgmentCallMapper(this.config),
        set_identity: new SetIdentityCallMapper(this.config),
    }
}
