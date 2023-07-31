import {StoreWithCache} from '@belopash/squid-tools'
import {Account, Identity, Judgement} from '@gs/model'
import {getOriginAccountId} from '@gs/util/misc'
import {IdentitySetIdentityCall} from '@metadata/kusama/calls'
import * as metadata from '@metadata/kusama/v1032'
import {SubstrateBlock, toHex} from '@subsquid/substrate-processor'
import {CallItem, CallMapper, MappingContext, Pallet} from '../../../interfaces'
import {
    Config,
    Data,
    IdentityClearEventMapper,
    IdentityKillEventMapper,
    PalletIdentity,
    ProvideJudgmentCallMapper,
    SetSubsCallMapper,
} from '../../v1030/pallet/identity'

export {
    Config,
    Data,
    IdentityClearEventMapper,
    IdentityKillEventMapper,
    PalletIdentity,
    ProvideJudgmentCallMapper,
    SetSubsCallMapper,
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

export class SetIdentityCallMapper extends CallMapper<PalletIdentity> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const identitySetData = new IdentitySetIdentityCall(ctx, item.call).asV1032

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const accountAddress = new this.config.AccountId(origin)
        const accountId = accountAddress.format()
        const accountDeferred = ctx.store.defer(Account, accountId)

        const identityId = accountId
        const identityDeferred = ctx.store.defer(Identity, identityId)

        const info = new IdentityInfo(identitySetData.info)

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async () => {
                const identity = await identityDeferred.get()
                if (identity == null) {
                    const account = await accountDeferred.get()
                    if (account == null) {
                        ctx.queue.add('account_create', {
                            id: accountId,
                            publicKey: accountAddress.serialize(),
                        })
                    }
                }
                ctx.queue.add('identity_create', {
                    id: identityId,
                    accountId,
                })
            })
            .add('identity_judge', {
                identityId,
                judgement: Judgement.Unknown,
            })
            .add('identity_set', {
                identityId,
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
