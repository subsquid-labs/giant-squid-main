import {StoreWithCache} from '@belopash/squid-tools'
import {Account} from '@gs/model'
import {BalancesTransferEvent} from '@metadata/kusama/events'
import {Call, Event, EventMapper, EventType, MappingContext, Pallet, PalletSetup} from '../../interfaces'
import * as pallet_system from './system'

export interface Config extends pallet_system.Config {}

export type Events<T extends Config> = {
    Transfer: EventType<{
        from: InstanceType<T['AccountId']>
        to: InstanceType<T['AccountId']>
        amount: bigint
    }>
}

export function transfer<T extends Config>(
    this: Pallet<T>,
    ctx: MappingContext<StoreWithCache>,
    item: Call | Event,
    data: {
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
        .setBlock(item.block)
        .setExtrinsic(item.extrinsic)
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

export const TransferEvent = <T extends Config>(P: Pallet<T, {Events: Pick<Events<T>, 'Transfer'>}>) =>
    class TransferEvent {
        readonly from: InstanceType<T['AccountId']>
        readonly to: InstanceType<T['AccountId']>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new BalancesTransferEvent(event).asV1020

            this.from = new P.Config.AccountId(data[0]) as any
            this.to = new P.Config.AccountId(data[1]) as any
            this.amount = data[2]
        }
    }

export const TransferEventMapper = <T extends Config>(P: Pallet<T, {Events: Pick<Events<T>, 'Transfer'>}>) =>
    class TransferEventMapper implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, event: Event) {
            const data = new P.Events.Transfer(event)

            transfer.call(P, ctx, event, {
                id: event.id,
                from: data.to,
                to: data.to,
                amount: data.amount,
                success: true,
            })
        }
    }

// Pallet.events =
export default () => {
    class P extends Pallet<Config, {Events: Events<Config>}>() {}

    P.Events = {
        Transfer: TransferEvent(P),
    }

    P.EventMappers = {
        Transfer: TransferEventMapper(P),
    }

    return P
}
