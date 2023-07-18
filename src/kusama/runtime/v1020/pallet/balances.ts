import {Account} from '@gs/model'
import {BalancesTransferEvent} from '@metadata/events'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {CallMapper, EventItem, EventMapper, IPallet, MappingContext} from '../../../interfaces'
import * as system from './system'

export interface Config extends system.Config {}

export class TransferEventMapper implements EventMapper {
    constructor(readonly config: Config) {}

    handle(ctx: MappingContext<any>, block: SubstrateBlock, item: EventItem) {
        const data = new BalancesTransferEvent(ctx, item.event).asV1020

        const fromId = new this.config.AccountId(data[0]).encode()
        const from = ctx.store.defer(Account, fromId)

        const toId = new this.config.AccountId(data[1]).encode()
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

export class Pallet implements IPallet<Config> {
    constructor(readonly config: Config) {}

    readonly events: Record<string, EventMapper> = {
        Transfer: new TransferEventMapper(this.config),
    }

    readonly calls: Record<string, CallMapper> = {}
}
