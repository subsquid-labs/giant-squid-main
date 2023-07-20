import {Account} from '@gs/model'
import {BalancesTransferEvent} from '@metadata/events'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {EventItem, EventMapper, Pallet, MappingContext} from '../../../interfaces'
import * as system from './system'
import {StoreWithCache} from '@belopash/squid-tools'

export interface Config extends system.Config {}

export const pallet = new Pallet<Config>()

export class TransferEventMapper extends EventMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem) {
        const data = new BalancesTransferEvent(ctx, item.event).asV1020

        const fromId = new this.config.AccountId(data[0])
        const from = ctx.store.defer(Account, fromId.format())

        const toId = new this.config.AccountId(data[1])
        const to = ctx.store.defer(Account, toId.format())

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.event.extrinsic)
            .add('account_ensure', {
                account: () => from.get(),
                id: fromId.format(),
                publicKey: fromId.serialize(),
            })
            .add('account_ensure', {
                account: () => to.get(),
                id: toId.format(),
                publicKey: toId.serialize(),
            })
            .add('balances_transfer', {
                id: item.event.id,
                from: () => from.getOrFail(),
                to: () => to.getOrFail(),
                amount: data[2],
                success: true,
            })
    }
}

pallet.events = {
    Transfer: new TransferEventMapper(pallet),
}
