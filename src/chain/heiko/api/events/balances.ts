import {UnknownVersionError} from '../../../../utils'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const Transfer = {
    decode(ctx: ChainContext, event: Event) {
        let e = new BalancesTransferEvent(ctx, event)
        if (e.isV160) {
            let [from, to, amount] = e.asV160
            return {from, to, amount}
        } else if (e.isV176) {
            return e.asV176
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
