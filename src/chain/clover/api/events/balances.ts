import {UnknownVersionError} from '../../../../utils'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const Transfer = {
    decode(ctx: ChainContext, event: Event) {
        let e = new BalancesTransferEvent(ctx, event)
        if (e.isV16) {
            let [from, to, amount] = e.asV16
            return {from, to, amount}
        } else if (e.isV19) {
            return e.asV19
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
