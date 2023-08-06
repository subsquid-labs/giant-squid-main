import {UnknownVersionError} from '@gs/util/errors'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

export const Transfer = {
    decode(event: Event) {
        let e = new BalancesTransferEvent(event)
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
