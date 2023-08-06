import {UnknownVersionError} from '@gs/util/errors'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const Transfer = {
    decode(event: Event) {
        let e = new BalancesTransferEvent(event)
        if (e.isV16) {
            let [from, to, amount] = e.asV16
            return {from, to, amount}
        } else if (e.isV38) {
            return e.asV38
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
