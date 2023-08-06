import {UnknownVersionError} from '@gs/util/errors'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const Transfer = {
    decode(event: Event) {
        let e = new BalancesTransferEvent(event)
        if (e.isV23) {
            let [from, to, amount] = e.asV23
            return {from, to, amount}
        } else if (e.isV34) {
            return e.asV34
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
