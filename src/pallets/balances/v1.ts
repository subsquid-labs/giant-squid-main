import {StoreWithCache} from '@belopash/squid-tools'
import {Call, Event, EventMapper, EventType, MappingContext, Pallet} from '~interfaces'
import {Account} from '~model'
import type * as pallet_system from '~pallets/system/v1'

export interface Config extends pallet_system.Config {}

export type TransferEventType<T extends Pick<Config, 'AccountId'>> = EventType<{
    from: InstanceType<T['AccountId']>
    to: InstanceType<T['AccountId']>
    amount: bigint
}>

export interface PalletSetup<T extends Config> {
    Events: {
        Transfer: TransferEventType<T>
    }
}

export function transfer<T extends Pick<Config, 'AccountId'>>(
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

export const TransferEventMapper = <T extends Config>(P: Pallet<T, {Events: {Transfer: TransferEventType<T>}}>) =>
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

export const Default = <T extends Config = Config, S extends PalletSetup<T> = PalletSetup<T>>(
    setup: (config: T) => S
) => {
    class P extends Pallet<T, S>(setup) {}

    P.EventMappers = {
        Transfer: TransferEventMapper(P),
    }

    return P
}
export default Default
