import {UnknownVersionError} from '@gs/util/errors'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const Transfer = {
    decode(event: Event) {
        let e = new BalancesTransferEvent(event)
        if (e.isV3) {
            return e.asV3
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
