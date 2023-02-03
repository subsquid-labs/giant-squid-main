import {UnknownVersionError} from '../../../../utils'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

export const Transfer = {
    decode(ctx: ChainContext, event: Event) {
        let e = new BalancesTransferEvent(ctx, event)
        if (e.isV49) {
            let [from, to, amount] = e.asV49
            return {from, to, amount}
        } else if (e.isV1201) {
            return e.asV1201
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
