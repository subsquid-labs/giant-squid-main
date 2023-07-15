import {SubstrateBlock} from '@subsquid/substrate-processor'
import {Decodable, Encodable, EventItem, EventMapper, MappingContext} from '../../../interfaces'
import {BalancesTransferEvent} from '../../../types/events'
import {Account} from '../../../../../model'

export class BalancesTransferMapperV1020 implements EventMapper {
    constructor(
        readonly palletConfig: {
            AccountId: Encodable
        }
    ) {}

    handle(ctx: MappingContext<any>, block: SubstrateBlock, item: EventItem) {
        const data = new BalancesTransferEvent(ctx, item.event).asV1020

        const fromId = this.palletConfig.AccountId.encode(data[0])
        const from = ctx.store.defer(Account, fromId)

        const toId = this.palletConfig.AccountId.encode(data[1])
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
    }
}
