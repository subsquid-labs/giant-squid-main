import {Account, Identity, Judgement} from '@gs/model'
import {getOriginAccountId} from '@gs/util'
import {IdentitySetIdentityCall} from '@metadata/calls'
import * as metadata from '@metadata/v1032'
import {SubstrateBlock, toHex} from '@subsquid/substrate-processor'
import {CallItem, CallMapper, EventMapper, IPallet, MappingContext} from '../../../interfaces'
import {
    Config,
    Data,
    IdentityClearEventMapper,
    IdentityJudgement,
    IdentityKillEventMapper,
    ProvideJudgmentCallMapper,
    SetSubsCallMapper,
} from '../../v1030/pallet/identity'
import * as system from './system'

export {
    Config,
    Data,
    IdentityClearEventMapper,
    IdentityKillEventMapper,
    ProvideJudgmentCallMapper,
    SetSubsCallMapper,
    IdentityJudgement,
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
    }
}

export class IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint: Uint8Array | undefined
    image: Data
    twitter: Data

    constructor(private value: metadata.IdentityInfo) {
        this.display = new Data(value.display)
        this.legal = new Data(value.legal)
        this.web = new Data(value.web)
        this.riot = new Data(value.riot)
        this.email = new Data(value.email)
        this.pgpFingerprint = value.pgpFingerprint
        this.image = new Data(value.image)
        this.twitter = new Data(value.twitter)
        this.additional = value.additional.map((a) => [new Data(a[0]), new Data(a[1])])
    }
}

export class SetIdentityCallMapper implements CallMapper {
    constructor(readonly config: Config) {}

    handle(ctx: MappingContext<any>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const identitySetData = new IdentitySetIdentityCall(ctx, item.call).asV1032

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const identityId = new this.config.AccountId(origin).encode()
        const identity = ctx.store.defer(Identity, identityId)
        const account = ctx.store.defer(Account, identityId)

        const info = new IdentityInfo(identitySetData.info)
        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .add('account_ensure', {
                account: () => account.get(),
                id: identityId,
            })
            .add('identity_ensure', {
                identity: () => identity.get(),
                account: () => account.getOrFail(),
                id: identityId,
            })
            .add('identity_judge', {
                identity: () => identity.getOrFail(),
                judgement: Judgement.Unknown,
            })
            .add('identity_set', {
                identity: () => identity.getOrFail(),
                web: info.web.serialize(),
                display: info.display.serialize(),
                legal: info.legal.serialize(),
                email: info.email.serialize(),
                image: info.image.serialize(),
                pgpFingerprint: identitySetData.info.pgpFingerprint
                    ? toHex(identitySetData.info.pgpFingerprint)
                    : undefined,
                riot: info.riot.serialize(),
                twitter: info.twitter.serialize(),
                additional: info.additional.map((a) => ({
                    name: a[0].serialize(),
                    value: a[1].serialize(),
                })),
            })
    }
}
