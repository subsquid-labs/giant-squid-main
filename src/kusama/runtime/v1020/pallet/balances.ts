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
    PalletSetup,
    Display,
    Serialize,
    StaticLookup,
    Type,
} from '../../../interfaces'
import {StoreWithCache} from '@belopash/squid-tools'
import * as pallet_system from './system'
import {Class, Simplify} from 'type-fest'

export interface Config extends pallet_system.Config {}

export type Events<T extends Config> = {
    Transfer: EventType<{
        from: InstanceType<T['AccountId']>
        to: InstanceType<T['AccountId']>
        amount: bigint
    }>
}

export class Pallet<T extends Config, S extends PalletSetup = {}> extends PalletBase<T, S> {
    transfer(
        ctx: MappingContext<StoreWithCache>,
        data: {
            block: Block
            extrinsic?: Extrinsic
            id: string
            from: InstanceType<T['AccountId']>
            to: InstanceType<T['AccountId']>
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
                const from = await fromDeferred.get()
                if (from == null) {
                    ctx.queue.add('account_create', {
                        id: fromId,
                        publicKey: data.from.serialize(),
                    })
                }
            })
            .lazy(async () => {
                const to = await toDeferred.get()
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

export const TransferEvent = <T extends Config>(pallet: Pallet<T>) =>
    class TransferEvent {
        readonly from: InstanceType<T['AccountId']>
        readonly to: T['AccountId']
        readonly amount: bigint

        constructor(ctx: ChainContext, event: {name: string; args: any}) {
            const data = new BalancesTransferEvent(ctx, event).asV1020

            this.from = new pallet.Config.AccountId(data[0])
            this.to = new pallet.Config.AccountId(data[1])
            this.amount = data[2]
        }
    }

export const TransferEventMapper = <T extends Config>(pallet: Pallet<T, {Events: Pick<Events<T>, 'Transfer'>}>) =>
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

// Pallet.events =
export default () => {
    const pallet = new Pallet<Config, {Events: Events<Config>}>()

    pallet.Events = {
        Transfer: TransferEvent(pallet),
    }

    pallet.EventMappers = {
        Transfer: TransferEventMapper(pallet),
    }

    return pallet
}
