import {BalancesTransferEvent} from '@metadata/kusama/events'
import {Event, Pallet} from '../../../interfaces'
import Default, {Config, TransferEventMapper} from '@gs/pallets/balances/v1'

export const TransferEvent = <T extends Config>(P: Pallet<T>) =>
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

export default () => {
    class P extends Default() {}

    P.Events = {
        Transfer: TransferEvent(P),
    }

    return P
}
