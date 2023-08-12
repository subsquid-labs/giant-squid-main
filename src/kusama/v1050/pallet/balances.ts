import {BalancesTransferEvent} from '@metadata/kusama/events'
import {Event, Pallet} from '../../interfaces'
import {Config, Events, transfer, TransferEventMapper} from '../../v1032/pallet/balances'

export {Pallet, TransferEventMapper, Config, transfer}

/**********
 * EVENTS *
 **********/

export const TransferEvent = <T extends Config>(P: Pallet<T, {Events: Pick<Events<T>, 'Transfer'>}>) =>
    class TransferEvent {
        readonly from: InstanceType<T['AccountId']>
        readonly to: InstanceType<T['AccountId']>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new BalancesTransferEvent(event).asV1050

            this.from = new P.Config.AccountId(data[0]) as any
            this.to = new P.Config.AccountId(data[1]) as any
            this.amount = data[2]
        }
    }

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
