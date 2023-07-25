import {StoreWithCache} from '@belopash/squid-tools'
import {Account, Identity, Judgement} from '@gs/model'
import {getOriginAccountId} from '@gs/util'
import {IdentitySetIdentityCall} from '@metadata/kusama/calls'
import * as metadata from '@metadata/kusama/v1032'
import {SubstrateBlock, toHex} from '@subsquid/substrate-processor'
import {CallItem, CallMapper, MappingContext, Pallet} from '../../../interfaces'
import {
    Config,
    Data,
    IdentityClearEventMapper,
    IdentityKillEventMapper,
    ProvideJudgmentCallMapper,
    SetSubsCallMapper,
} from '../../v1030/pallet/identity'

export {Config, Data, IdentityClearEventMapper, IdentityKillEventMapper, ProvideJudgmentCallMapper, SetSubsCallMapper}

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

export const pallet = new Pallet<Config>()

export class SetIdentityCallMapper extends CallMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const identitySetData = new IdentitySetIdentityCall(ctx, item.call).asV1032

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const identityId = new this.config.AccountId(origin)
        const identity = ctx.store.defer(Identity, identityId.format())
        const account = ctx.store.defer(Account, identityId.format())

        const info = new IdentityInfo(identitySetData.info)
        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .add('account_ensure', {
                account: () => account.get(),
                id: identityId.format(),
                publicKey: identityId.serialize(),
            })
            .add('identity_ensure', {
                identity: () => identity.get(),
                account: () => account.getOrFail(),
                id: identityId.format(),
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

pallet.calls = {
    set_subs: new SetSubsCallMapper(pallet),
    provide_judgment: new ProvideJudgmentCallMapper(pallet, true),
    set_identity: new SetIdentityCallMapper(pallet, true),
}

pallet.events = {
    IdentityClear: new IdentityClearEventMapper(pallet),
    IdentityKill: new IdentityKillEventMapper(pallet),
}
