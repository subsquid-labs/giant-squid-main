import {UnknownVersionError} from '@gs/util/errors'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const Transfer = {
    decode(event: Event) {
        let e = new BalancesTransferEvent(event)
        if (e.isV9020) {
            return e.asV9020
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
