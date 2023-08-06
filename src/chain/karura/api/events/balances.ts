import {UnknownVersionError} from '@gs/util/errors'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

export const Transfer = {
    decode(event: Event) {
        let e = new BalancesTransferEvent(event)
        if (e.isV1000) {
            let [from, to, amount] = e.asV1000
            return {from, to, amount}
        } else if (e.isV2010) {
            return e.asV2010
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
