import {SubstrateBlock} from '@subsquid/substrate-processor'
import {Account} from '../../../../model/generated'
import {CallMapper, EventItem, EventMapper, IPallet, MappingContext} from '../../../interfaces'
import {Config} from '../../v9130/pallet/balances'
import {BalancesTransferEvent} from '@metadata/events'

export {Config}

export class Pallet implements IPallet<Config> {
    constructor(readonly config: Config) {}

    readonly events: Record<string, EventMapper> = {
        Transfer: new TransferEventMapper(this.config),
    }

    readonly calls: Record<string, CallMapper> = {}
}

export class TransferEventMapper implements EventMapper {
    constructor(readonly config: Config) {}

    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem) {
        const data = new BalancesTransferEvent(ctx, item.event).asV9130

        const fromId = new this.config.AccountId(data.from).encode()
        const from = ctx.store.defer(Account, fromId)

        const toId = new this.config.AccountId(data.to).encode()
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
                amount: data.amount,
                success: true,
            })
    }
}
