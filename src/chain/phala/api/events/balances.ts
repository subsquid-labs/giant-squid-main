import {UnknownVersionError} from '@gs/util/errors'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

export const Transfer = {
    decode(event: Event) {
        let e = new BalancesTransferEvent(event)
        if (e.isV1090) {
            return e.asV1090
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
