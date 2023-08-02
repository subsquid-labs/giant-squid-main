import {BalancesTransferEvent} from '@metadata/kusama/events'
import {Config, Pallet, TransferEventMapper} from '../../v1032/pallet/balances'
import {ChainContext} from '../../../interfaces'

export {Pallet, TransferEventMapper, Config}

/**********
 * EVENTS *
 **********/

export const TransferEvent = (pallet: Pallet) =>
    class TransferEvent {
        readonly from: InstanceType<Config['AccountId']>
        readonly to: InstanceType<Config['AccountId']>
        readonly amount: bigint

        constructor(ctx: ChainContext, event: {name: string; args: any}) {
            const data = new BalancesTransferEvent(ctx, event).asV1050

            this.from = new pallet.Config.AccountId(data[0])
            this.to = new pallet.Config.AccountId(data[1])
            this.amount = data[2]
        }
    }

/******************
 * IMPLEMENTATION *
 ******************/

const pallet = new Pallet()

pallet.Events = {
    Transfer: TransferEvent(pallet),
}

pallet.EventMappers = {
    Transfer: TransferEventMapper(pallet),
}

export default pallet
