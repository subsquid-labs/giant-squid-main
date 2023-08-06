import {UnknownVersionError} from '@gs/util/errors'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

export const Transfer = {
    decode(event: Event) {
        let e = new BalancesTransferEvent(event)
        if (e.isV1) {
            let [from, to, amount] = e.asV1
            return {from, to, amount}
        } else if (e.isV916) {
            return e.asV916
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
