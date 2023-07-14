// import {StoreWithCache} from '@belopash/squid-tools'
// import {DataHandlerContext, SubstrateBlock, toHex} from '@subsquid/substrate-processor'
// import {CallItem, EventItem} from '@subsquid/substrate-processor/lib/interfaces/data-selection'
// import {
//     Action,
//     AddIdentitySubAction,
//     ClearIdentityAction,
//     EnsureAccount,
//     EnsureIdentityAction,
//     EnsureIdentitySubAction,
//     GiveJudgementAction,
//     KillIdentityAction,
//     LazyAction,
//     RemoveIdentitySubAction,
//     RenameSubAction,
//     SetIdentityAction,
// } from '../action'
// import {chain} from '../chain'
// import {Account, Identity, Judgement, IdentitySub} from '../model'
// import {encodeAddress, getOriginAccountId} from '../utils'
// import assert from 'assert'

// type Item =
//     | EventItem<
//           string,
//           {
//               event: {
//                   name: string
//                   args: true
//                   extrinsic: {
//                       hash: true
//                   }
//               }
//           }
//       >
//     | CallItem<
//           string,
//           {
//               call: {
//                   name: string
//                   args: true
//                   origin: true
//               }
//               extrinsic: {
//                   hash: true
//               }
//           }
//       >

// export function getIdentityActions(
//     ctx: DataHandlerContext<StoreWithCache, unknown>,
//     block: SubstrateBlock,
//     item: Item
// ) {
//     const actions: Action[] = []

//     const itemName = item.name.split('.')[1]
//     switch (item.kind) {
//         case 'call': {
//             switch (itemName) {
//                 case 'rename_sub': {
//                     assert('calls' in chain.api)
//                     assert('identity' in chain.api.calls)

//                     if (!item.call.success) break

//                     const renameSubData = chain.api.calls.identity.rename_sub.decode(ctx, item.call)

//                     const subId = encodeAddress(renameSubData.sub)
//                     const sub = ctx.store.defer(IdentitySub, subId)

//                     actions.push(
//                         new RenameSubAction(block, item.extrinsic, {
//                             sub: () => sub.getOrFail(),
//                             name: unwrapData(renameSubData.data)!,
//                         })
//                     )

//                     break
//                 }
//                 case 'set_subs': {
//                     assert('calls' in chain.api)
//                     assert('identity' in chain.api.calls)

//                     if (!item.call.success) break

//                     const setSubsData = chain.api.calls.identity.set_subs.decode(ctx, item.call)

//                     const origin = getOriginAccountId(item.call.origin)
//                     if (origin == null) break

//                     const identityId = encodeAddress(origin)
//                     const identity = ctx.store.defer(Identity, identityId)

//                     for (const subData of setSubsData.subs) {
//                         const subId = encodeAddress(subData[0])
//                         const sub = ctx.store.defer(IdentitySub, subId)

//                         const account = ctx.store.defer(Account, subId)

//                         actions.push(
//                             new EnsureAccount(block, item.extrinsic, {
//                                 account: () => account.get(),
//                                 id: subId,
//                             }),
//                             new EnsureIdentitySubAction(block, item.extrinsic, {
//                                 sub: () => sub.get(),
//                                 account: () => account.getOrFail(),
//                                 id: subId,
//                             }),
//                             new AddIdentitySubAction(block, item.extrinsic, {
//                                 identity: () => identity.getOrFail(),
//                                 sub: () => sub.getOrFail(),
//                             }),
//                             new RenameSubAction(block, item.extrinsic, {
//                                 sub: () => sub.getOrFail(),
//                                 name: unwrapData(subData[1]),
//                             })
//                         )
//                     }

//                     break
//                 }
//                 case 'provide_judgement': {
//                     assert('calls' in chain.api)
//                     assert('identity' in chain.api.calls)

//                     if (!item.call.success) break

//                     const judgementGivenData = chain.api.calls.identity.provide_judgement.decode(ctx, item.call)

//                     const identityId = encodeAddress(judgementGivenData.target)
//                     const identity = ctx.store.defer(Identity, identityId)

//                     const getJudgment = () => {
//                         const kind = judgementGivenData.judgement.__kind
//                         switch (kind) {
//                             case Judgement.Erroneous:
//                             case Judgement.FeePaid:
//                             case Judgement.KnownGood:
//                             case Judgement.LowQuality:
//                             case Judgement.OutOfDate:
//                             case Judgement.Reasonable:
//                             case Judgement.Unknown:
//                                 return kind as Judgement
//                             default:
//                                 throw new Error(`Unknown judgement: ${kind}`)
//                         }
//                     }
//                     const judgement = getJudgment()

//                     actions.push(
//                         // new LazyAction(block, item.extrinsic, async () => {
//                         //     const a: Action[] = []

//                         //     if (block.specId.startsWith('kusama')) {
//                         //         [2018825, 3409356, 5926842, 5965153].includes(block.height) &&
//                         //         const account = ctx.store.defer(Account, identityId)

//                         //         a.push(
//                         //             new EnsureAccount(block, item.extrinsic, {
//                         //                 account: () => account.get(),
//                         //                 id: identityId,
//                         //             }),
//                         //             new EnsureIdentityAction(block, item.extrinsic, {
//                         //                 identity: () => identity.get(),
//                         //                 account: () => account.getOrFail(),
//                         //                 id: identityId,
//                         //             })
//                         //         )
//                         //     }

//                         //     return a
//                         // }),
//                         new GiveJudgementAction(block, item.extrinsic, {
//                             identity: () => identity.getOrFail(),
//                             judgement,
//                         })
//                     )

//                     break
//                 }
//                 case 'set_identity': {
//                     assert('calls' in chain.api)
//                     assert('identity' in chain.api.calls)

//                     if (!item.call.success) break

//                     const identitySetData = chain.api.calls.identity.set_identity.decode(ctx, item.call)

//                     const origin = getOriginAccountId(item.call.origin)
//                     if (origin == null) break

//                     const identityId = encodeAddress(origin)
//                     const identity = ctx.store.defer(Identity, identityId)

//                     const account = ctx.store.defer(Account, identityId)

//                     actions.push(
//                         new EnsureAccount(block, item.extrinsic, {
//                             account: () => account.get(),
//                             id: identityId,
//                         }),
//                         new EnsureIdentityAction(block, item.extrinsic, {
//                             identity: () => identity.get(),
//                             account: () => account.getOrFail(),
//                             id: identityId,
//                         }),
//                         new GiveJudgementAction(block, item.extrinsic, {
//                             identity: () => identity.getOrFail(),
//                             judgement: Judgement.Unknown,
//                         }),
//                         new SetIdentityAction(block, item.extrinsic, {
//                             identity: () => identity.getOrFail(),
//                             web: unwrapData(identitySetData.web),
//                             display: unwrapData(identitySetData.display),
//                             legal: unwrapData(identitySetData.legal),
//                             email: unwrapData(identitySetData.email),
//                             image: unwrapData(identitySetData.image),
//                             pgpFingerprint: identitySetData.pgpFingerprint
//                                 ? toHex(identitySetData.pgpFingerprint)
//                                 : null,
//                             riot: unwrapData(identitySetData.riot),
//                             twitter: unwrapData(identitySetData.twitter),
//                             additional: identitySetData.additional.map((a) => ({
//                                 name: unwrapData(a[0])!,
//                                 value: unwrapData(a[1]),
//                             })),
//                         })
//                     )

//                     break
//                 }
//                 case 'add_sub': {
//                     assert('calls' in chain.api)
//                     assert('identity' in chain.api.calls)

//                     if (!item.call.success) break

//                     const subAddedCallData = chain.api.calls.identity.add_sub.decode(ctx, item.call)

//                     const origin = getOriginAccountId(item.call.origin)
//                     if (origin == null) break

//                     const identityId = encodeAddress(origin)
//                     const identity = ctx.store.defer(Identity, identityId)

//                     const subId = encodeAddress(subAddedCallData.sub)
//                     const sub = ctx.store.defer(IdentitySub, subId)

//                     const account = ctx.store.defer(Account, subId)

//                     actions.push(
//                         new EnsureAccount(block, item.extrinsic, {
//                             account: () => account.get(),
//                             id: subId,
//                         }),
//                         new EnsureIdentitySubAction(block, item.extrinsic, {
//                             sub: () => sub.get(),
//                             account: () => account.getOrFail(),
//                             id: subId,
//                         }),
//                         new AddIdentitySubAction(block, item.extrinsic, {
//                             identity: () => identity.getOrFail(),
//                             sub: () => sub.getOrFail(),
//                         }),
//                         new RenameSubAction(block, item.extrinsic, {
//                             sub: () => sub.getOrFail(),
//                             name: unwrapData(subAddedCallData.data),
//                         })
//                     )

//                     break
//                 }
//                 case 'clear_identity': {
//                     assert('calls' in chain.api)
//                     assert('identity' in chain.api.calls)

//                     if (!item.call.success) break

//                     const origin = getOriginAccountId(item.call.origin)
//                     if (origin == null) break

//                     const identityId = encodeAddress(origin)
//                     const identity = ctx.store.defer(Identity, identityId, {subs: true})

//                     actions.push(
//                         new ClearIdentityAction(block, item.extrinsic, {
//                             identity: () => identity.getOrFail(),
//                         }),
//                         new GiveJudgementAction(block, item.extrinsic, {
//                             identity: () => identity.getOrFail(),
//                             judgement: Judgement.Unknown,
//                         }),
//                         // new LazyAction(block, item.extrinsic, async (ctx) => {
//                         //     const a: Action[] = []

//                         //     const i = await ctx.store.getOrFail(Identity, {
//                         //         where: {id: identityId},
//                         //         relations: {subs: true},
//                         //     })

//                         //     for (const s of i.subs) {
//                         //         new RemoveIdentitySubAction(block, item.extrinsic, {
//                         //             sub: () => Promise.resolve(s),
//                         //         })
//                         //     }

//                         //     return a
//                         // })
//                     )

//                     break
//                 }
//                 case 'kill_identity': {
//                     assert('calls' in chain.api)
//                     assert('identity' in chain.api.events)

//                     if (!item.call.success) break

//                     const origin = getOriginAccountId(item.call.origin)
//                     if (origin == null) break

//                     const identityId = encodeAddress(origin)
//                     const identity = ctx.store.defer(Identity, identityId, {subs: true})

//                     actions.push(
//                         new ClearIdentityAction(block, item.extrinsic, {
//                             identity: () => identity.getOrFail(),
//                         }),
//                         new GiveJudgementAction(block, item.extrinsic, {
//                             identity: () => identity.getOrFail(),
//                             judgement: Judgement.Unknown,
//                         }),
//                         // new LazyAction(block, item.extrinsic, async () => {
//                         //     const a: Action[] = []

//                         //     const i = await ctx.store.getOrFail(Identity, {
//                         //         where: {id: identityId},
//                         //         relations: {subs: true},
//                         //     })

//                         //     for (const s of i.subs) {
//                         //         new RemoveIdentitySubAction(block, item.extrinsic, {
//                         //             sub: () => Promise.resolve(s),
//                         //         })
//                         //     }

//                         //     return a
//                         // }),
//                         new KillIdentityAction(block, item.extrinsic, {
//                             identity: () => identity.getOrFail(),
//                         })
//                     )

//                     break
//                 }
//             }
//             break
//         }
//         case 'event': {
//             switch (itemName) {
//                 case 'IdentitySubRemoved': {
//                     assert('calls' in chain.api)
//                     assert('identity' in chain.api.events)

//                     const subRemovedData = chain.api.events.identity.IdentitySubRemoved.decode(ctx, item.event)

//                     const subId = encodeAddress(subRemovedData.sub)
//                     const sub = ctx.store.defer(IdentitySub, subId)

//                     actions.push(
//                         new RemoveIdentitySubAction(block, item.event.extrinsic, {
//                             sub: () => sub.getOrFail(),
//                         })
//                     )

//                     break
//                 }
//                 case 'IdentitySubRevoked': {
//                     assert('calls' in chain.api)
//                     assert('identity' in chain.api.events)

//                     const subRevokedData = chain.api.events.identity.IdentitySubRevoked.decode(ctx, item.event)

//                     const subId = encodeAddress(subRevokedData.sub)
//                     const sub = ctx.store.defer(IdentitySub, subId)

//                     actions.push(
//                         new RemoveIdentitySubAction(block, item.event.extrinsic, {
//                             sub: () => sub.getOrFail(),
//                         })
//                     )

//                     break
//                 }
//             }
//             break
//         }
//     }

//     return actions
// }

// function unwrapData(data: {__kind: string; value?: Uint8Array}) {
//     switch (data.__kind) {
//         case 'None':
//             return null
//         case 'BlakeTwo256':
//         case 'Sha256':
//         case 'Keccak256':
//         case 'ShaThree256':
//             return Buffer.from(data.value!).toString('hex')
//         default:
//             return Buffer.from(data.value!)
//                 .toString('utf-8')
//                 .replace(/\u0000/g, '')
//     }
// }
