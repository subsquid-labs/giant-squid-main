import * as metadata from '@metadata/kusama/v1050'
import {
    Config,
    Data,
    IdentityClearEventMapper,
    IdentityKillEventMapper,
    ProvideJudgmentCallMapper,
    SetIdentityCallMapper,
    SetSubsCallMapper,
    PalletIdentity,
} from '../../v1032/pallet/identity'

export {Config, Data, IdentityClearEventMapper, IdentityKillEventMapper, ProvideJudgmentCallMapper, SetSubsCallMapper}

export const pallet = new PalletIdentity()

pallet.calls = {
    set_subs: new SetSubsCallMapper(pallet, true),
    provide_judgment: new ProvideJudgmentCallMapper(pallet, true),
    set_identity: new SetIdentityCallMapper(pallet, true),
}

pallet.events = {
    IdentityClear: new IdentityClearEventMapper(pallet),
    IdentityKill: new IdentityKillEventMapper(pallet),
}
