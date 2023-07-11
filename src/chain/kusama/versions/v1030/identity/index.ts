import assert from 'assert'
import {StoreWithCache} from '@belopash/squid-tools'
import {DataHandlerContext, SubstrateBlock, toHex} from '@subsquid/substrate-processor'
import {
    Action,
    AddIdentitySubAction,
    ClearIdentityAction,
    EnsureAccount,
    EnsureIdentityAction,
    EnsureIdentitySubAction,
    GiveJudgementAction,
    KillIdentityAction,
    LazyAction,
    RemoveIdentitySubAction,
    RenameSubAction,
    SetIdentityAction,
} from '../../../../../action'
import {Account, Identity, IdentitySub, Judgement} from '../../../../../model'
import {encodeAddress, getOriginAccountId, unwrapData} from '../../../../../utils'
import {IdentityProvideJudgementCall, IdentitySetIdentityCall, IdentitySetSubsCall} from '../../../types/calls'
import {IdentityIdentityClearedEvent, IdentityIdentityKilledEvent} from '../../../types/events'
import {CallItem, EventItem, Pallet, PalletCalls, PalletEvents} from '../../../interfaces'

const calls: PalletCalls = {
    set_subs: function (ctx: DataHandlerContext<StoreWithCache, unknown>, block: SubstrateBlock, item: CallItem) {
        if (!item.call.success) return

        const setSubsData = new IdentitySetSubsCall(ctx, item.call).asV1030

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const identityId = encodeAddress(origin)
        const identity = ctx.store.defer(Identity, identityId)

        for (const subData of setSubsData.subs) {
            const subId = encodeAddress(subData[0])
            const sub = ctx.store.defer(IdentitySub, subId)

            const account = ctx.store.defer(Account, subId)

            return [
                new EnsureAccount(block, item.extrinsic, {
                    account: () => account.get(),
                    id: subId,
                }),
                new EnsureIdentitySubAction(block, item.extrinsic, {
                    sub: () => sub.get(),
                    account: () => account.getOrFail(),
                    id: subId,
                }),
                new AddIdentitySubAction(block, item.extrinsic, {
                    identity: () => identity.getOrFail(),
                    sub: () => sub.getOrFail(),
                }),
                new RenameSubAction(block, item.extrinsic, {
                    sub: () => sub.getOrFail(),
                    name: unwrapData(subData[1]),
                }),
            ]
        }
    },
    provide_judgement: function (
        ctx: DataHandlerContext<StoreWithCache, unknown>,
        block: SubstrateBlock,
        item: CallItem
    ) {
        if (!item.call.success) return

        const judgementGivenData = new IdentityProvideJudgementCall(ctx, item.call).asV1030
        assert(judgementGivenData.target.__kind === 'AccountId')

        const identityId = encodeAddress(judgementGivenData.target.value)
        const identity = ctx.store.defer(Identity, identityId)

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

        return [
            new LazyAction(block, item.extrinsic, async (ctx) => {
                const a: Action[] = []

                const account = ctx.store.defer(Account, identityId)

                a.push(
                    new EnsureAccount(block, item.extrinsic, {
                        account: () => account.get(),
                        id: identityId,
                    }),
                    new EnsureIdentityAction(block, item.extrinsic, {
                        identity: () => identity.get(),
                        account: () => account.getOrFail(),
                        id: identityId,
                    })
                )

                return a
            }),
            new GiveJudgementAction(block, item.extrinsic, {
                identity: () => identity.getOrFail(),
                judgement,
            }),
        ]
    },
    set_identity: function (ctx: DataHandlerContext<StoreWithCache, unknown>, block: SubstrateBlock, item: CallItem) {
        if (!item.call.success) return

        const identitySetData = new IdentitySetIdentityCall(ctx, item.call).asV1030

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const identityId = encodeAddress(origin)
        const identity = ctx.store.defer(Identity, identityId)

        const account = ctx.store.defer(Account, identityId)

        return [
            new EnsureAccount(block, item.extrinsic, {
                account: () => account.get(),
                id: identityId,
            }),
            new EnsureIdentityAction(block, item.extrinsic, {
                identity: () => identity.get(),
                account: () => account.getOrFail(),
                id: identityId,
            }),
            new GiveJudgementAction(block, item.extrinsic, {
                identity: () => identity.getOrFail(),
                judgement: Judgement.Unknown,
            }),
            new SetIdentityAction(block, item.extrinsic, {
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
            }),
        ]
    },
}

const events: PalletEvents = {
    IdentityCleared: function (
        ctx: DataHandlerContext<StoreWithCache, unknown>,
        block: SubstrateBlock,
        item: EventItem
    ) {
        const data = new IdentityIdentityClearedEvent(ctx, item.event).asV1030

        const identityId = encodeAddress(data[0])
        const identity = ctx.store.defer(Identity, identityId, {subs: true})

        return [
            new ClearIdentityAction(block, item.event.extrinsic, {
                identity: () => identity.getOrFail(),
            }),
            new GiveJudgementAction(block, item.event.extrinsic, {
                identity: () => identity.getOrFail(),
                judgement: Judgement.Unknown,
            }),
            new LazyAction(block, item.event.extrinsic, async (ctx) => {
                const a: Action[] = []

                const i = await ctx.store.getOrFail(Identity, {
                    where: {id: identityId},
                    relations: {subs: true},
                })

                for (const s of i.subs) {
                    new RemoveIdentitySubAction(block, item.event.extrinsic, {
                        sub: () => Promise.resolve(s),
                    })
                }

                return a
            }),
        ]
    },
    IdentityKilled: function (
        ctx: DataHandlerContext<StoreWithCache, unknown>,
        block: SubstrateBlock,
        item: EventItem
    ) {
        const data = new IdentityIdentityKilledEvent(ctx, item.event).asV1030

        const identityId = encodeAddress(data[0])
        const identity = ctx.store.defer(Identity, identityId, {subs: true})

        return [
            new ClearIdentityAction(block, item.event.extrinsic, {
                identity: () => identity.getOrFail(),
            }),
            new GiveJudgementAction(block, item.event.extrinsic, {
                identity: () => identity.getOrFail(),
                judgement: Judgement.Unknown,
            }),
            new LazyAction(block, item.event.extrinsic, async (ctx) => {
                const a: Action[] = []

                const i = await ctx.store.getOrFail(Identity, {
                    where: {id: identityId},
                    relations: {subs: true},
                })

                for (const s of i.subs) {
                    new RemoveIdentitySubAction(block, item.event.extrinsic, {
                        sub: () => Promise.resolve(s),
                    })
                }

                return a
            }),
            new KillIdentityAction(block, item.event.extrinsic, {
                identity: () => identity.getOrFail(),
            }),
        ]
    },
}

export const PalletIdentity: Pallet = {
    events,
    calls,
}
