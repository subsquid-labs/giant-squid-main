import {UnknownVersionError} from '@gs/util/errors'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const Transfer = {
    decode(event: Event) {
        let e = new BalancesTransferEvent(event)
        if (e.isV9000) {
            let [from, to, amount] = e.asV9000
            return {from, to, amount}
        } else if (e.isV9071) {
            return e.asV9071
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
