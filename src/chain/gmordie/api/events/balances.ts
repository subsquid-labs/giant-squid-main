import {UnknownVersionError} from '@gs/util/errors'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

export const Transfer = {
    decode(event: Event) {
        let e = new BalancesTransferEvent(event)
        if (e.isTemplateParachainV3) {
            return e.asTemplateParachainV3
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
