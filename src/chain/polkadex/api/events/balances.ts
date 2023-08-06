import {UnknownVersionError} from '@gs/util/errors'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const Transfer = {
    decode(event: Event) {
        let e = new BalancesTransferEvent(event)
        if (e.isV268) {
            let [from, to, amount] = e.asV268
            return {from, to, amount}
        } else if (e.isV274) {
            return e.asV274
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
