import {StoreWithCache} from '@belopash/squid-tools'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {Account} from '../../../../../model'
import {encodeAddress} from '../../../../subsocial'
import {EventItem, MappingContext, Pallet, PalletEvents} from '../../../interfaces'
import {BalancesTransferEvent} from '../../../types/events'
import {parent} from '../parent'

export const events: PalletEvents = {
    ...parent.PalletBalances.events,
    Transfer: function (ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem) {
        const data = new BalancesTransferEvent(ctx, item.event).asV1050

        const fromId = encodeAddress(data[0])
        const from = ctx.store.defer(Account, fromId)

        const toId = encodeAddress(data[1])
        const to = ctx.store.defer(Account, toId)

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.event.extrinsic)
            .add('account_ensure', {
                account: () => from.get(),
                id: fromId,
            })
            .add('account_ensure', {
                account: () => to.get(),
                id: toId,
            })
            .add('transfer_native', {
                id: item.event.id,
                fromId,
                toId,
                amount: data[2],
                success: true,
            })
    },
}

export const PalletBalances: Pallet = {
    ...parent.PalletBalances,
    events,
}
