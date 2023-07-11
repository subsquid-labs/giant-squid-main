import {TypeormDatabase} from '@subsquid/typeorm-store'
import {Item, ProcessorContext, processor} from './processor'
import {StoreWithCache} from '@belopash/squid-tools'
import {DataHandlerContext, SubstrateBlock} from '@subsquid/substrate-processor'
import {getBalancesActions} from '../../mapping/balances'
import {getIdentityActions} from '../../mapping/identity'
import {getStakingActions} from '../../mapping/staking'
import {Action} from '../../action'

export function getItemActions(ctx: DataHandlerContext<StoreWithCache, unknown>, block: SubstrateBlock, item: Item) {
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
}

export function getActions(ctx: ProcessorContext<StoreWithCache>): Action[] {
    const actions: Action[] = []

    for (let block of ctx.blocks) {
        const version = block.header.specId.split('@')[1]
        switch (version) {
            case '1020':
                return getActionsV1020(ctx, block.header, block.items)
            case '1050':
                return getActionsV1050(ctx, block.header, block.items)
        }
    }

    return actions
}

processor.run(new TypeormDatabase(), async (_ctx) => {
    let store = StoreWithCache.create(_ctx.store)
    let ctx = {..._ctx, store}

    const actions = getActions(ctx)

    await Action.process(ctx, actions)
    await ctx.store.flush()
})
