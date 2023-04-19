import {UnknownVersionError} from '../../../../utils'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const Transfer = {
    decode(ctx: ChainContext, event: Event) {
        let e = new BalancesTransferEvent(ctx, event)
        if (e.isV6) {
            return e.asV6
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
