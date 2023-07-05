import {TypeormDatabase} from '@subsquid/typeorm-store'
import {processor} from './processor'
import {StoreWithCache} from '@belopash/squid-tools'
import {encodeAddress, getOriginAccountId, processItem} from './utils'
import {chain} from './chain'
import {Account, Identity, Judgement, SubIdentity} from './model'
import {Action, LazyAction} from './action/base'
import assert from 'assert'
import {EnsureAccount, TransferAction, RewardAction} from './action'
import {
    AddSubIdentityAction,
    ClearIdentityAction,
    EnsureIdentityAction,
    EnsureSubIdentityAction,
    GiveJudgementAction,
    KillIdentityAction,
    RemoveSubIdentityAction,
    RenameSubAction,
    SetIdentityAction,
} from './action/identity'
import {toHex} from '@subsquid/substrate-processor'

export interface TransferData {
    id: string
    blockNumber: number
    timestamp: Date
    extrinsicHash?: string
    fromId: string
    toId: string
    amount: bigint
    success: boolean
}

processor.run(new TypeormDatabase(), async (_ctx) => {
    let store = StoreWithCache.create(_ctx.store)
    let ctx = {..._ctx, store}

    const actions: Action[] = []
    processItem(ctx.blocks, (block, item) => {
        switch (item.name) {
            case 'Balances.Transfer': {
                const data = chain.api.events.balances.Transfer.decode(ctx, item.event)

                const fromId = encodeAddress(data.from)
                const from = ctx.store.defer(Account, fromId)

                const toId = encodeAddress(data.to)
                const to = ctx.store.defer(Account, toId)

                actions.push(
                    new EnsureAccount(block, item.event.extrinsic, {
                        account: () => from.get(),
                        id: fromId,
                    }),
                    new EnsureAccount(block, item.event.extrinsic, {
                        account: () => to.get(),
                        id: toId,
                    }),
                    new TransferAction(block, item.event.extrinsic, {
                        id: item.event.id,
                        fromId,
                        toId,
                        amount: data.amount,
                        success: true,
                    })
                )
                break
            }
            case 'Staking.Reward':
            case 'Staking.Rewarded': {
                assert('staking' in chain.api.events)
                assert('calls' in chain.api)
                assert('staking' in chain.api.calls)

                const e = chain.api.events.staking.Rewarded.decode(ctx, item.event)
                if (e == null) return // skip some old format rewards

                let accountId = encodeAddress(e.stash)
                const account = ctx.store.defer(Account, accountId)

                let validatorId: string | undefined
                let era: number | undefined
                if (item.event.call?.name === 'Staking.payout_stakers') {
                    const c = chain.api.calls.staking.payout_stakers.decode(ctx, item.event.call)
                    validatorId = encodeAddress(c.validatorStash)
                    era = c.era
                }

                actions.push(
                    new EnsureAccount(block, item.event.extrinsic, {
                        account: () => account.get(),
                        id: accountId,
                    }),
                    new RewardAction(block, item.event.extrinsic, {
                        id: item.event.id,
                        accountId,
                        amount: e.amount,
                        era,
                        validatorId,
                    })
                )

                break
            }
            case 'Identity.rename_sub': {
                assert('calls' in chain.api)
                assert('identity' in chain.api.calls)

                if (!item.call.success) break

                const renameSubData = chain.api.calls.identity.rename_sub.decode(ctx, item.call)

                const subId = encodeAddress(renameSubData.sub)
                const sub = ctx.store.defer(SubIdentity, subId)

                actions.push(
                    new RenameSubAction(block, item.extrinsic, {
                        sub: () => sub.getOrFail(),
                        name: unwrapData(renameSubData.data)!,
                    })
                )

                break
            }
            case 'Identity.set_subs': {
                assert('calls' in chain.api)
                assert('identity' in chain.api.calls)

                if (!item.call.success) break

                const setSubsData = chain.api.calls.identity.set_subs.decode(ctx, item.call)

                const origin = getOriginAccountId(item.call.origin)
                if (origin == null) break

                const identityId = encodeAddress(origin)
                const identity = ctx.store.defer(Identity, identityId)

                for (const subData of setSubsData.subs) {
                    const subId = encodeAddress(subData[0])
                    const sub = ctx.store.defer(SubIdentity, subId)

                    const account = ctx.store.defer(Account, subId)

                    actions.push(
                        new EnsureAccount(block, item.extrinsic, {
                            account: () => account.get(),
                            id: subId,
                        }),
                        new EnsureSubIdentityAction(block, item.extrinsic, {
                            sub: () => sub.get(),
                            account: () => account.getOrFail(),
                            id: subId,
                        }),
                        new AddSubIdentityAction(block, item.extrinsic, {
                            identity: () => identity.getOrFail(),
                            sub: () => sub.getOrFail(),
                        }),
                        new RenameSubAction(block, item.extrinsic, {
                            sub: () => sub.getOrFail(),
                            name: unwrapData(subData[1]),
                        })
                    )
                }

                break
            }
            case 'Identity.provide_judgement': {
                assert('calls' in chain.api)
                assert('identity' in chain.api.calls)

                if (!item.call.success) break

                const judgementGivenData = chain.api.calls.identity.provide_judgement.decode(ctx, item.call)

                const identityId = encodeAddress(judgementGivenData.target)
                const identity = ctx.store.defer(Identity, identityId)

                actions.push(
                    new LazyAction(block, item.extrinsic, async (ctx) => {
                        const a: Action[] = []

                        if ( block.specId.startsWith('kusama')) { //[2018825, 3409356, 5926842, 5965153].includes(block.height) &&
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
                        }

                        return a
                    }),
                    new GiveJudgementAction(block, item.extrinsic, {
                        identity: () => identity.getOrFail(),
                        judgement: judgementGivenData.judgement.__kind,
                    })
                )

                break
            }
            case 'Identity.set_identity': {
                assert('calls' in chain.api)
                assert('identity' in chain.api.calls)

                if (!item.call.success) break

                const identitySetData = chain.api.calls.identity.set_identity.decode(ctx, item.call)

                const origin = getOriginAccountId(item.call.origin)
                if (origin == null) break

                const identityId = encodeAddress(origin)
                const identity = ctx.store.defer(Identity, identityId)

                const account = ctx.store.defer(Account, identityId)

                actions.push(
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
                        web: unwrapData(identitySetData.web),
                        display: unwrapData(identitySetData.display),
                        legal: unwrapData(identitySetData.legal),
                        email: unwrapData(identitySetData.email),
                        image: unwrapData(identitySetData.image),
                        pgpFingerprint: identitySetData.pgpFingerprint ? toHex(identitySetData.pgpFingerprint) : null,
                        riot: unwrapData(identitySetData.riot),
                        twitter: unwrapData(identitySetData.twitter),
                        additional: identitySetData.additional.map((a) => ({
                            name: unwrapData(a[0])!,
                            value: unwrapData(a[1]),
                        })),
                    })
                )

                break
            }
            case 'Identity.add_sub': {
                assert('calls' in chain.api)
                assert('identity' in chain.api.calls)

                if (!item.call.success) break

                const subAddedCallData = chain.api.calls.identity.add_sub.decode(ctx, item.call)

                const origin = getOriginAccountId(item.call.origin)
                if (origin == null) break

                const identityId = encodeAddress(origin)
                const identity = ctx.store.defer(Identity, identityId)

                const subId = encodeAddress(subAddedCallData.sub)
                const sub = ctx.store.defer(SubIdentity, subId)

                const account = ctx.store.defer(Account, subId)

                actions.push(
                    new EnsureAccount(block, item.extrinsic, {
                        account: () => account.get(),
                        id: subId,
                    }),
                    new EnsureSubIdentityAction(block, item.extrinsic, {
                        sub: () => sub.get(),
                        account: () => account.getOrFail(),
                        id: subId,
                    }),
                    new AddSubIdentityAction(block, item.extrinsic, {
                        identity: () => identity.getOrFail(),
                        sub: () => sub.getOrFail(),
                    }),
                    new RenameSubAction(block, item.extrinsic, {
                        sub: () => sub.getOrFail(),
                        name: unwrapData(subAddedCallData.data),
                    })
                )

                break
            }
            case 'Identity.clear_identity': {
                assert('calls' in chain.api)
                assert('identity' in chain.api.calls)

                if (!item.call.success) break

                const origin = getOriginAccountId(item.call.origin)
                if (origin == null) break

                const identityId = encodeAddress(origin)
                const identity = ctx.store.defer(Identity, identityId, {subs: true})

                actions.push(
                    new ClearIdentityAction(block, item.extrinsic, {
                        identity: () => identity.getOrFail(),
                    }),
                    new GiveJudgementAction(block, item.extrinsic, {
                        identity: () => identity.getOrFail(),
                        judgement: Judgement.Unknown,
                    }),
                    new LazyAction(block, item.extrinsic, async (ctx) => {
                        const a: Action[] = []

                        const i = await ctx.store.getOrFail(Identity, {
                            where: {id: identityId},
                            relations: {subs: true},
                        })

                        for (const s of i.subs) {
                            new RemoveSubIdentityAction(block, item.extrinsic, {
                                sub: () => Promise.resolve(s),
                            })
                        }

                        return a
                    })
                )

                break
            }
            case 'Identity.kill_identity': {
                assert('calls' in chain.api)
                assert('identity' in chain.api.events)

                if (!item.call.success) break

                const origin = getOriginAccountId(item.call.origin)
                if (origin == null) break

                const identityId = encodeAddress(origin)
                const identity = ctx.store.defer(Identity, identityId, {subs: true})

                actions.push(
                    new ClearIdentityAction(block, item.extrinsic, {
                        identity: () => identity.getOrFail(),
                    }),
                    new GiveJudgementAction(block, item.extrinsic, {
                        identity: () => identity.getOrFail(),
                        judgement: Judgement.Unknown,
                    }),
                    new LazyAction(block, item.extrinsic, async () => {
                        const a: Action[] = []

                        const i = await ctx.store.getOrFail(Identity, {
                            where: {id: identityId},
                            relations: {subs: true},
                        })

                        for (const s of i.subs) {
                            new RemoveSubIdentityAction(block, item.extrinsic, {
                                sub: () => Promise.resolve(s),
                            })
                        }

                        return a
                    }),
                    new KillIdentityAction(block, item.extrinsic, {
                        identity: () => identity.getOrFail(),
                    })
                )

                break
            }
            case 'Identity.SubIdentityRemoved': {
                assert('calls' in chain.api)
                assert('identity' in chain.api.events)

                const subRemovedData = chain.api.events.identity.SubIdentityRemoved.decode(ctx, item.event)

                const subId = encodeAddress(subRemovedData.sub)
                const sub = ctx.store.defer(SubIdentity, subId)

                actions.push(
                    new RemoveSubIdentityAction(block, item.event.extrinsic, {
                        sub: () => sub.getOrFail(),
                    })
                )

                break
            }
            case 'Identity.SubIdentityRevoked': {
                assert('calls' in chain.api)
                assert('identity' in chain.api.events)

                const subRevokedData = chain.api.events.identity.SubIdentityRevoked.decode(ctx, item.event)

                const subId = encodeAddress(subRevokedData.sub)
                const sub = ctx.store.defer(SubIdentity, subId)

                actions.push(
                    new RemoveSubIdentityAction(block, item.event.extrinsic, {
                        sub: () => sub.getOrFail(),
                    })
                )

                break
            }
        }
    })

    await Action.process(ctx, actions)
    await ctx.store.flush()
})

function unwrapData(data: {__kind: string; value?: Uint8Array}) {
    switch (data.__kind) {
        case 'None':
            return null
        case 'BlakeTwo256':
        case 'Sha256':
        case 'Keccak256':
        case 'ShaThree256':
            return Buffer.from(data.value!).toString('hex')
        default:
            return Buffer.from(data.value!).toString('utf-8')
    }
}
