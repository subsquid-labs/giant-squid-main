import {TypeormDatabase} from '@subsquid/typeorm-store'
import {processor} from './processor'
import {StoreWithCache} from '@belopash/squid-tools'
import {Action} from './action/base'
import {BlockData, SubstrateBlock} from '@subsquid/substrate-processor'
import {getBalancesActions} from './mapping/balances'
import {getIdentityActions} from './mapping/identity'
import {getStakingActions} from './mapping/staking'

type Simplify<T> = {
    [K in keyof T]: Simplify<T[K]>
} & {}

export function processItem<I>(
    blocks: BlockData<I>[],
    fn: (block: SubstrateBlock, item: Simplify<I>) => Action[]
): Action[] {
    const actions: Action[] = []

    for (let block of blocks) {
        for (let item of block.items) {
            const a = fn(block.header, item)
            actions.push(...a)
        }
    }

    return actions
}

processor.run(new TypeormDatabase(), async (_ctx) => {
    let store = StoreWithCache.create(_ctx.store)
    let ctx = {..._ctx, store}

    const actions = processItem(ctx.blocks, (block, item) => {
        if (item.name === '*') return [] // just to satisfy compiler

        const palletName = item.name.split('.')[0]
        switch (palletName) {
            case 'Balances':
                return getBalancesActions(ctx, block, item)
            case 'Staking':
                return getStakingActions(ctx, block, item)
            case 'Identity':
                return getIdentityActions(ctx, block, item)
            default:
                return []
        }
    })

    await Action.process(ctx, actions)
    await ctx.store.flush()
})
