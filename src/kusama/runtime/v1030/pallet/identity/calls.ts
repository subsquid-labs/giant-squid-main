import {Account, Identity, IdentitySub, Judgement} from '@gs/model'
import {getOriginAccountId} from '@gs/util'
import {IdentityProvideJudgementCall, IdentitySetIdentityCall, IdentitySetSubsCall} from '@metadata/calls'
import {SubstrateBlock, toHex} from '@subsquid/substrate-processor'
import assert from 'assert'
import {CallItem, CallMapper, MappingContext} from '../../../../interfaces'
import {Config} from './config'
import {Data, IdentityInfo, IdentityJudgement} from './types'

export class SetSubsCallMapper implements CallMapper {
    constructor(readonly config: Config) {}

    handle(ctx: MappingContext<any>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const setSubsData = new IdentitySetSubsCall(ctx, item.call).asV1030

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const identityId = new this.config.AccountId(origin).encode()
        const identity = ctx.store.defer(Identity, identityId)

        ctx.queue.setBlock(block).setExtrinsic(item.extrinsic)
        for (const subData of setSubsData.subs) {
            const subId = new this.config.AccountId(subData[0]).encode()
            const sub = ctx.store.defer(IdentitySub, subId)

            const account = ctx.store.defer(Account, subId)

            ctx.queue
                .add('account_ensure', {
                    account: () => account.get(),
                    id: subId,
                })
                .add('identity_ensureSub', {
                    sub: () => sub.get(),
                    account: () => account.getOrFail(),
                    id: subId,
                })
                .add('identity_addSub', {
                    identity: () => identity.getOrFail(),
                    sub: () => sub.getOrFail(),
                })
                .add('identity_renameSub', {
                    sub: () => sub.getOrFail(),
                    name: new Data(subData[1]).serialize(),
                })
        }
    }
}

export class ProvideJudgmentCallMapper implements CallMapper {
    constructor(readonly config: Config) {}

    handle(ctx: MappingContext<any>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const judgementGivenData = new IdentityProvideJudgementCall(ctx, item.call).asV1030
        assert(judgementGivenData.target.__kind === 'AccountId')

        const identityId = new this.config.AccountId(judgementGivenData.target.value).encode()
        const identity = ctx.store.defer(Identity, identityId, {account: true})

        const judgement = new IdentityJudgement(judgementGivenData.judgement).match({
            Erroneous: () => Judgement.Erroneous,
            FeePaid: (fee) => Judgement.FeePaid,
            KnownGood: () => Judgement.KnownGood,
            LowQuality: () => Judgement.LowQuality,
            OutOfDate: () => Judgement.OutOfDate,
            Reasonable: () => Judgement.Reasonable,
            Unknown: () => Judgement.Reasonable,
        })

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async (queue) => {
                const account = ctx.store.defer(Account, identityId)

                queue
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
            })
            .add('identity_judge', {
                identity: () => identity.getOrFail(),
                judgement,
            })
    }
}

export class SetIdentityCallMapper implements CallMapper {
    constructor(readonly config: Config) {}

    handle(ctx: MappingContext<any>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const identitySetData = new IdentitySetIdentityCall(ctx, item.call).asV1030

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
                twitter: undefined,
                additional: info.additional.map((a) => ({
                    name: a[0].serialize(),
                    value: a[1].serialize(),
                })),
            })
    }
}
