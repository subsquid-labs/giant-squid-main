import {Account} from '@gs/model'
import {BalancesTransferEvent} from '@metadata/kusama/events'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {
    EventItem,
    EventMapper,
    MappingContext,
    Extrinsic,
    Block,
    ChainContext,
    EventType,
    PalletBase,
} from '../../../interfaces'
import {StoreWithCache} from '@belopash/squid-tools'
import pallet_system from './system'

export type Config = typeof pallet_system.Config & {}

export class Pallet extends PalletBase<{
    Config: Config
    Events: {
        Transfer: EventType<{
            from: InstanceType<Config['AccountId']>
            to: InstanceType<Config['AccountId']>
            amount: bigint
        }>
    }
}> {
    transfer(
        ctx: MappingContext<StoreWithCache>,
        data: {
            block: Block
            extrinsic?: Extrinsic
            id: string
            from: InstanceType<Config['AccountId']>
            to: InstanceType<Config['AccountId']>
            amount: bigint
            success: boolean
        }
    ) {
        const fromId = data.from.format()
        const toId = data.to.format()

        const fromDeferred = ctx.store.defer(Account, fromId)
        const toDeferred = ctx.store.defer(Account, toId)

        ctx.queue
            .setBlock(data.block)
            .setExtrinsic(data.extrinsic)
            .lazy(async () => {
                const from = fromDeferred.get()
                if (from == null) {
                    ctx.queue.add('account_create', {
                        id: fromId,
                        publicKey: data.from.serialize(),
                    })
                }

                const to = toDeferred.get()
                if (to == null) {
                    ctx.queue.add('account_create', {
                        id: toId,
                        publicKey: data.to.serialize(),
                    })
                }
            })
            .lazy(async () => {
                ctx.queue.add('balances_transfer', {
                    id: data.id,
                    fromId,
                    toId,
                    amount: data.amount,
                    success: data.success,
                })
            })
    }
}

export const TransferEvent = (pallet: Pallet) =>
    class TransferEvent {
        readonly from: InstanceType<Config['AccountId']>
        readonly to: InstanceType<Config['AccountId']>
        readonly amount: bigint

        constructor(ctx: ChainContext, event: {name: string; args: any}) {
            const data = new BalancesTransferEvent(ctx, event).asV1020

            this.from = new pallet.Config.AccountId(data[0])
            this.to = new pallet.Config.AccountId(data[1])
            this.amount = data[2]
        }
    }

export const TransferEventMapper = (pallet: Pallet) =>
    class TransferEventMapper implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem) {
            const data = new pallet.Events.Transfer(ctx, item.event)

            pallet.transfer(ctx, {
                block,
                extrinsic: item.event.extrinsic,
                id: item.event.id,
                from: data.to,
                to: data.to,
                amount: data.amount,
                success: true,
            })
        }
    }

const pallet = new Pallet()

pallet.Events = {
    Transfer: TransferEvent(pallet),
}

pallet.EventMappers = {
    Transfer: TransferEventMapper(pallet),
}

// Pallet.events =
export default pallet
