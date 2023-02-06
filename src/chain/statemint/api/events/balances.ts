import {UnknownVersionError} from '../../../../utils'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

export const Transfer = {
    decode(ctx: ChainContext, event: Event) {
        let e = new BalancesTransferEvent(ctx, event)
        if (e.isV601) {
            let [from, to, amount] = e.asV601
            return {from, to, amount}
        } else if (e.isV700) {
            return e.asV700
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
