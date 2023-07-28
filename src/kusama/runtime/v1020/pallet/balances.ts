import {Account} from '@gs/model'
import {BalancesTransferEvent} from '@metadata/kusama/events'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {EventItem, EventMapper, Pallet, MappingContext, Extrinsic, Block} from '../../../interfaces'
import {StoreWithCache} from '@belopash/squid-tools'
import * as pallet_system from './system'

export interface Config extends pallet_system.Config {}

export class TransferEventMapper extends EventMapper<PalletBalances> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem) {
        const data = new BalancesTransferEvent(ctx, item.event).asV1020

        const from = new this.config.AccountId(data[0])
        const to = new this.config.AccountId(data[1])

        this.pallet.transfer(ctx, {
            block,
            extrinsic: item.event.extrinsic,
            id: item.event.id,
            from,
            to,
            amount: data[2],
            success: true,
        })
    }
}

export class PalletBalances<C extends Config = Config> extends Pallet<C> {
    transfer(
        ctx: MappingContext<StoreWithCache>,
        data: {
            block: Block
            extrinsic?: Extrinsic
            id: string
            from: InstanceType<C['AccountId']>
            to: InstanceType<C['AccountId']>
            amount: bigint
            success: boolean
        }
    ) {
        const fromId = data.from.format()
        const toId = data.to.format()

        const from = ctx.store.defer(Account, fromId)
        const to = ctx.store.defer(Account, toId)

        ctx.queue
            .setBlock(data.block)
            .setExtrinsic(data.extrinsic)
            .add('account_ensure', {
                account: () => from.get(),
                id: fromId,
                publicKey: data.from.serialize(),
            })
            .add('account_ensure', {
                account: () => to.get(),
                id: toId,
                publicKey: data.to.serialize(),
            })
            .add('balances_transfer', {
                id: data.id,
                from: () => from.getOrFail(),
                to: () => to.getOrFail(),
                amount: data.amount,
                success: data.success,
            })
    }
}

const pallet_balances = new PalletBalances()

pallet_balances.events = {
    Transfer: new TransferEventMapper(pallet_balances),
}

export default pallet_balances
