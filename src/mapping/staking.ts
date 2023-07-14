// import assert from 'assert'
// import {StoreWithCache} from '@belopash/squid-tools'
// import {DataHandlerContext, SubstrateBlock, assertNotNull} from '@subsquid/substrate-processor'
// import {CallItem, EventItem} from '@subsquid/substrate-processor/lib/interfaces/data-selection'
// import {
//     Action,
//     BondAction,
//     LazyAction,
//     NewEraAction,
//     NewEraNominationAction,
//     NewEraNominatorAction,
//     NewEraValidatorAction,
//     RewardAction,
// } from '../action'
// import {chain} from '../chain'
// import {BondType, Era, EraNominator, EraValidator, Staker} from '../model'
// import {encodeAddress} from '../utils'

// type _EventItem = EventItem<
//     string,
//     {
//         event: {
//             name: string
//             args: true
//             extrinsic: {
//                 hash: true
//             }
//         }
//     }
// >

// type _CallItem = CallItem<
//     string,
//     {
//         call: {
//             name: string
//             args: true
//         }
//         extrinsic: {
//             hash: true
//         }
//     }
// >

// type Item = _EventItem | _CallItem

// export function getStakingActions(ctx: DataHandlerContext<StoreWithCache, unknown>, block: SubstrateBlock, item: Item) {
//     const itemName = item.name.split('.')[1]
//     switch (item.kind) {
//         case 'event': {
//             switch (itemName) {
//                 case 'Reward':
//                 case 'Rewarded':
//                     return getRewardEventActions(ctx, block, item)
//                 case 'Bonded':
//                     return getBondEventActions(ctx, block, item)
//                 case 'Unbonded':
//                     return getUnbondEventActions(ctx, block, item)
//             }
//             break
//         }
//         case 'call': {
//             break
//         }
//     }

//     return []
// }

// function getRewardEventActions(
//     ctx: DataHandlerContext<StoreWithCache, unknown>,
//     block: SubstrateBlock,
//     item: _EventItem
// ): Action[] {
//     const actions: Action[] = []

//     const decodeEvent = () => {
//         assert('staking' in chain.api.events)
//         switch (item.name.split('.')[1]) {
//             case 'Reward':
//                 return chain.api.events.staking.Reward.decode(ctx, item.event)
//             case 'Rewarded':
//                 return chain.api.events.staking.Rewarded.decode(ctx, item.event)
//             default:
//                 throw new Error()
//         }
//     }
//     const e = decodeEvent()
//     if (e == null) return []

//     const stakerId = encodeAddress(e.stash)
//     const staker = ctx.store.defer(Staker, stakerId, {payee: true})

//     const getRewardInfo = () => {
//         assert('calls' in chain.api)
//         assert('staking' in chain.api.calls)

//         if (item.event.call?.name.split('.')[1] === 'payout_stakers') {
//             const c = chain.api.calls.staking.payout_stakers.decode(ctx, item.event.call)

//             const era = ctx.store.defer(Era, c.era.toString())
//             const validator = ctx.store.defer(EraValidator, `${era.toString()}-${encodeAddress(c.validatorStash)}}`)

//             return {
//                 era,
//                 validator,
//             }
//         } else {
//             return undefined
//         }
//     }
//     const info = getRewardInfo()

//     actions.push(
//         new RewardAction(block, item.event.extrinsic, {
//             id: item.event.id,
//             staker: () => staker.getOrFail(),
//             account: () => staker.getOrFail().then((s) => s.payee ?? undefined),
//             amount: e.amount,
//             era: () => info?.era.getOrFail(),
//             validator: () => info?.validator.getOrFail(),
//         })
//     )

//     return actions
// }

// function getBondEventActions(
//     ctx: DataHandlerContext<StoreWithCache, unknown>,
//     block: SubstrateBlock,
//     item: _EventItem
// ): Action[] {
//     const actions: Action[] = []

//     assert('staking' in chain.api.events)
//     assert('Bonded' in chain.api.events.staking)

//     const e = chain.api.events.staking.Bonded.decode(ctx, item.event)

//     const stakerId = encodeAddress(e.stash)
//     const staker = ctx.store.defer(Staker, stakerId, {stash: true})

//     actions.push(
//         new BondAction(block, item.event.extrinsic, {
//             id: item.event.id,
//             staker: () => staker.getOrFail(),
//             account: () => staker.getOrFail().then((s) => s.stash),
//             amount: e.amount,
//             type: BondType.Bond,
//         })
//     )

//     return actions
// }

// function getUnbondEventActions(
//     ctx: DataHandlerContext<StoreWithCache, unknown>,
//     block: SubstrateBlock,
//     item: _EventItem
// ): Action[] {
//     const actions: Action[] = []

//     assert('staking' in chain.api.events)
//     assert('Bonded' in chain.api.events.staking)
//     assert('Unbonded' in chain.api.events.staking)

//     const e = chain.api.events.staking.Unbonded.decode(ctx, item.event)

//     const stakerId = encodeAddress(e.stash)
//     const staker = ctx.store.defer(Staker, stakerId, {stash: true})

//     actions.push(
//         new BondAction(block, item.event.extrinsic, {
//             id: item.event.id,
//             staker: () => staker.getOrFail(),
//             account: () => staker.getOrFail().then((s) => s.stash),
//             amount: e.amount,
//             type: BondType.Unbond,
//         })
//     )

//     return actions
// }

// function getNewAuthoritiesActions(
//     ctx: DataHandlerContext<StoreWithCache, unknown>,
//     block: SubstrateBlock,
//     item: _EventItem
// ): Action[] {
//     const actions: Action[] = []

//     assert('storage' in chain.api)
//     assert('staking' in chain.api.storage)

//     const activeEraPromise = chain.api.storage.staking.ActiveEra.get(ctx, block)

//     actions.push(
//         // new LazyAction(block, item.event.extrinsic, async () => {
//         //     const a: Action[] = []

//         //     const activeEra = await activeEraPromise
//         //     if (activeEra == null || activeEra.start != BigInt(block.height)) return a

//         //     const eraId = activeEra.index.toString()
//         //     a.push(
//         //         new NewEraAction(block, item.event.extrinsic, {
//         //             id: eraId,
//         //             index: activeEra.index,
//         //         })
//         //     )

//         //     const era = ctx.store.defer(Era, eraId)

//         //     assert('storage' in chain.api)
//         //     assert('staking' in chain.api.storage)
//         //     assert('session' in chain.api.storage)

//         //     let validatorAddresses = await chain.api.storage.session.Validators.get(ctx, block)
//         //     if (!validatorAddresses) validatorAddresses = []

//         //     let validatorsInfo = await chain.api.storage.staking.EraStakers.getMany(
//         //         ctx,
//         //         block,
//         //         activeEra.index,
//         //         validatorAddresses
//         //     )
//         //     if (!validatorsInfo) validatorsInfo = new Array(validatorAddresses.length)

//         //     const nominatorIds: string[] = []
//         //     for (let i = 0; i < validatorAddresses.length; i++) {
//         //         const validatorId = encodeAddress(validatorAddresses[i])
//         //         const validatorStaker = ctx.store.defer(Staker, validatorId)

//         //         const validatorInfo = validatorsInfo[i]

//         //         const eraValidatorId = `${activeEra.index}-${validatorId}`
//         //         a.push(
//         //             new NewEraValidatorAction(block, undefined, {
//         //                 id: eraValidatorId,
//         //                 era: () => era.getOrFail(),
//         //                 staker: () => validatorStaker.getOrFail(),
//         //                 total: validatorInfo.total,
//         //                 own: validatorInfo.own,
//         //             })
//         //         )

//         //         const eraValidator = ctx.store.defer(EraValidator, validatorId)
//         //         for (let nomination of validatorInfo.others) {
//         //             const nominatorId = encodeAddress(nomination.who)
//         //             const nominatorStaker = ctx.store.defer(Staker, nominatorId)

//         //             const eraNominatorId = `${activeEra.index}-${nominatorId}`

//         //             if (!nominatorIds.includes(eraNominatorId)) {
//         //                 a.push(
//         //                     new NewEraNominatorAction(block, undefined, {
//         //                         id: eraNominatorId,
//         //                         era: () => era.getOrFail(),
//         //                         staker: () => nominatorStaker.getOrFail(),
//         //                     })
//         //                 )
//         //                 nominatorIds.push(eraNominatorId)
//         //             }

//         //             const eraNominator = ctx.store.defer(EraNominator, eraNominatorId)

//         //             const eraNominationId = `${activeEra.index}-${validatorId}-${nominatorId}`
//         //             a.push(
//         //                 new NewEraNominationAction(block, undefined, {
//         //                     id: eraNominationId,
//         //                     era: () => era.getOrFail(),
//         //                     validator: () => eraValidator.getOrFail(),
//         //                     nominator: () => eraNominator.getOrFail(),
//         //                     vote: nomination.value,
//         //                 })
//         //             )
//         //         }
//         //     }

//         //     return a
//         // })
//     )

//     return actions
// }
