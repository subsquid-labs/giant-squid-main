import {UnknownVersionError} from '../../../../utils'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const Transfer = {
    decode(ctx: ChainContext, event: Event) {
        let e = new BalancesTransferEvent(ctx, event)
        if (e.isV5) {
            let [from, to, amount] = e.asV5
            return {from, to, amount}
        } else if (e.isV8) {
            return e.asV8
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
