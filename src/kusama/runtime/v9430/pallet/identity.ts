import {CallMapper, EventMapper, IPallet} from '../../../interfaces'
import {
    AddSubCallMapper,
    Config,
    Data,
    IdentityClearEventMapper,
    IdentityJudgement,
    IdentityKillEventMapper,
    ProvideJudgmentCallMapper,
    RenameSubCallMapper,
    SetIdentityCallMapper,
    SetSubsCallMapper,
} from '../../v9300/pallet/identity'

export {
    AddSubCallMapper,
    Config,
    Data,
    IdentityClearEventMapper,
    IdentityJudgement,
    IdentityKillEventMapper,
    SetIdentityCallMapper,
    SetSubsCallMapper,
}

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
        rename_sub: new RenameSubCallMapper(this.config),
        add_sub: new AddSubCallMapper(this.config),
    }
}
