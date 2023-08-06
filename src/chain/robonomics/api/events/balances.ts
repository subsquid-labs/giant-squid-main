import {UnknownVersionError} from '@gs/util/errors'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const Transfer = {
    decode(event: Event) {
        let e = new BalancesTransferEvent(event)
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
