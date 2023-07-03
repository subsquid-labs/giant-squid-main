import {UnknownVersionError} from '../../../../utils'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const Transfer = {
    decode(ctx: ChainContext, event: Event) {
        let e = new BalancesTransferEvent(ctx, event)
        if (e.isV1008) {
            return e.asV1008
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
