import {StoreWithCache} from '@belopash/squid-tools'
import {DataHandlerContext, SubstrateBlock} from '@subsquid/substrate-processor'
import {EnsureAccount, TransferAction} from '../../../../../action'
import {Account} from '../../../../../model'
import {encodeAddress} from '../../../../subsocial'
import {EventItem, Pallet, PalletCalls, PalletEvents} from '../../../interfaces'
import {BalancesTransferEvent} from '../../../types/events'

const calls: PalletCalls = {}

const events: PalletEvents = {
    Transfer: function (ctx: DataHandlerContext<StoreWithCache, unknown>, block: SubstrateBlock, item: EventItem) {
        const data = new BalancesTransferEvent(ctx, item.event).asV1020

        const fromId = encodeAddress(data[0])
        const from = ctx.store.defer(Account, fromId)

        const toId = encodeAddress(data[1])
        const to = ctx.store.defer(Account, toId)

        return [
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
                amount: data[2],
                success: true,
            }),
        ]
    },
}

export const Balances: Pallet = {
    events,
    calls,
}
