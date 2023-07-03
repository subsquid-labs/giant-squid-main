import {TypeormDatabase} from '@subsquid/typeorm-store'
import {processor} from './processor'
import {StoreWithCache} from '@belopash/squid-tools'
import {encodeAddress, processItem} from './utils'
import {chain} from './chain'
import {Account} from './model'
import {Action} from './action/base'
import assert from 'assert'
import {EnsureAccount, TransferAction, RewardAction} from './action'

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
            case 'Balances.Transfer':
                const {from, to, amount} = chain.api.events.balances.Transfer.decode(ctx, item.event)

                const fromId = encodeAddress(from)
                ctx.store.defer(Account, fromId)

                const toId = encodeAddress(to)
                ctx.store.defer(Account, toId)

                actions.push(
                    new EnsureAccount(block, item.event.extrinsic, {
                        id: fromId,
                    }),
                    new EnsureAccount(block, item.event.extrinsic, {
                        id: toId,
                    }),
                    new TransferAction(block, item.event.extrinsic, {
                        id: item.event.id,
                        fromId,
                        toId,
                        amount,
                        success: true,
                    })
                )
                break
            case 'Staking.Reward':
            case 'Staking.Rewarded':
                assert('staking' in chain.api.events)
                assert('calls' in chain.api)
                assert('staking' in chain.api.calls)

                const e = chain.api.events.staking.Rewarded.decode(ctx, item.event)
                if (e == null) return // skip some old format rewards

                let accountId = encodeAddress(e.stash)
                ctx.store.defer(Account, accountId)

                let validatorId: string | undefined
                let era: number | undefined
                if (item.event.call?.name === 'Staking.payout_stakers') {
                    const c = chain.api.calls.staking.payout_stakers.decode(ctx, item.event.call)
                    validatorId = encodeAddress(c.validatorStash)
                    era = c.era
                }

                actions.push(
                    new EnsureAccount(block, item.event.extrinsic, {
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
    })

    await Action.process(ctx, actions)
    await ctx.store.flush()
})
