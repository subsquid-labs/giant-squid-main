import {StoreWithCache} from '@belopash/squid-tools'
import {SubstrateBlock, toHex} from '@subsquid/substrate-processor'
import assert from 'assert'
import {Account, Identity, IdentitySub, Judgement} from '../../../../../model'
import {encodeAddress, getOriginAccountId, unwrapData} from '../../../../../utils'
import {CallItem, EventItem, MappingContext, Pallet, PalletCalls, PalletEvents} from '../../../interfaces'
import {IdentityProvideJudgementCall, IdentitySetIdentityCall, IdentitySetSubsCall} from '../../../types/calls'
import {IdentityIdentityClearedEvent, IdentityIdentityKilledEvent} from '../../../types/events'

const calls: PalletCalls = {
    set_subs: function (ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem) {
        if (!item.call.success) return

        const setSubsData = new IdentitySetSubsCall(ctx, item.call).asV1030

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const identityId = encodeAddress(origin)
        const identity = ctx.store.defer(Identity, identityId)

        ctx.queue.setBlock(block).setExtrinsic(item.extrinsic)
        for (const subData of setSubsData.subs) {
            const subId = encodeAddress(subData[0])
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
                    name: unwrapData(subData[1]),
                })
        }
    },
    provide_judgement: function (ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem) {
        if (!item.call.success) return

        const judgementGivenData = new IdentityProvideJudgementCall(ctx, item.call).asV1030
        assert(judgementGivenData.target.__kind === 'AccountId')

        const identityId = encodeAddress(judgementGivenData.target.value)
        const identity = ctx.store.defer(Identity, identityId, {account: true})

        const getJudgment = () => {
            const kind = judgementGivenData.judgement.__kind
            switch (kind) {
                case Judgement.Erroneous:
                case Judgement.FeePaid:
                case Judgement.KnownGood:
                case Judgement.LowQuality:
                case Judgement.OutOfDate:
                case Judgement.Reasonable:
                case Judgement.Unknown:
                    return kind as Judgement
                default:
                    throw new Error(`Unknown judgement: ${kind}`)
            }
        }
        const judgement = getJudgment()

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
    },
    set_identity: function (ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem) {
        if (!item.call.success) return

        const identitySetData = new IdentitySetIdentityCall(ctx, item.call).asV1030

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const identityId = encodeAddress(origin)
        const identity = ctx.store.defer(Identity, identityId)
        const account = ctx.store.defer(Account, identityId)

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
                web: unwrapData(identitySetData.info.web),
                display: unwrapData(identitySetData.info.display),
                legal: unwrapData(identitySetData.info.legal),
                email: unwrapData(identitySetData.info.email),
                image: unwrapData(identitySetData.info.image),
                pgpFingerprint: identitySetData.info.pgpFingerprint ? toHex(identitySetData.info.pgpFingerprint) : null,
                riot: unwrapData(identitySetData.info.riot),
                twitter: null,
                additional: identitySetData.info.additional.map((a) => ({
                    name: unwrapData(a[0])!,
                    value: unwrapData(a[1]),
                })),
            })
    },
}

const events: PalletEvents = {
    IdentityCleared: function (ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem) {
        const data = new IdentityIdentityClearedEvent(ctx, item.event).asV1030

        const identityId = encodeAddress(data[0])
        const identity = ctx.store.defer(Identity, identityId, {subs: true})

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.event.extrinsic)
            .add('identity_clear', {
                identity: () => identity.getOrFail(),
            })
            .add('identity_judge', {
                identity: () => identity.getOrFail(),
                judgement: Judgement.Unknown,
            })
            .lazy(async (queue) => {
                const i = await identity.getOrFail()

                queue.setBlock(block).setExtrinsic(item.event.extrinsic)

                for (const s of i.subs) {
                    queue.add('identity_removeSub', {
                        sub: () => Promise.resolve(s),
                    })
                }
            })
    },
    IdentityKilled: function (ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem) {
        const data = new IdentityIdentityKilledEvent(ctx, item.event).asV1030

        const identityId = encodeAddress(data[0])
        const identity = ctx.store.defer(Identity, identityId, {subs: true})

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.event.extrinsic)
            .add('identity_clear', {
                identity: () => identity.getOrFail(),
            })
            .add('identity_judge', {
                identity: () => identity.getOrFail(),
                judgement: Judgement.Unknown,
            })
            .lazy(async (queue) => {
                const i = await identity.getOrFail()

                queue.setBlock(block).setExtrinsic(item.event.extrinsic)

                for (const s of i.subs) {
                    queue.add('identity_removeSub', {
                        sub: () => Promise.resolve(s),
                    })
                }
            })
            .add('identity_kill', {
                identity: () => identity.getOrFail(),
            })
    },
}

export const PalletIdentity: Pallet = {
    events,
    calls,
}
