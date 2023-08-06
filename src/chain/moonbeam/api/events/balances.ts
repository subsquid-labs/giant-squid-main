import {UnknownVersionError} from '@gs/util/errors'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

export const Transfer = {
    decode(event: Event) {
        let e = new BalancesTransferEvent(event)
        if (e.isV900) {
            let [from, to, amount] = e.asV900
            return {from, to, amount}
        } else if (e.isV1201) {
            return e.asV1201
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
