import {BalancesTransferEvent} from '@metadata/kusama/events'
import {Config, Events, Pallet, TransferEventMapper} from '../../v1032/pallet/balances'
import {ChainContext, Event} from '../../../interfaces'

export {Pallet, TransferEventMapper, Config}

/**********
 * EVENTS *
 **********/

export const TransferEvent = <T extends Config>(pallet: Pallet<T, {Events: Pick<Events<T>, 'Transfer'>}>) =>
    class TransferEvent {
        readonly from: InstanceType<T['AccountId']>
        readonly to: InstanceType<T['AccountId']>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new BalancesTransferEvent(event).asV1050

            this.from = new pallet.Config.AccountId(data[0]) as any
            this.to = new pallet.Config.AccountId(data[1]) as any
            this.amount = data[2]
        }
    }

/******************
 * IMPLEMENTATION *
 ******************/

export default () => {
    const pallet = Pallet<Config, {Events: Events<Config>}>()

    pallet.Events = {
        Transfer: TransferEvent(pallet),
    }

    pallet.EventMappers = {
        Transfer: TransferEventMapper(pallet),
    }

    return pallet
}
