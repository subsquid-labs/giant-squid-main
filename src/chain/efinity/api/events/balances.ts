import {UnknownVersionError} from '../../../../utils'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

export const Transfer = {
    decode(ctx: ChainContext, event: Event) {
        let e = new BalancesTransferEvent(ctx, event)
        if (e.isV3014) {
            return e.asV3014
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
