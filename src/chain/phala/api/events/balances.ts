import {UnknownVersionError} from '../../../../utils'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

export const Transfer = {
    decode(ctx: ChainContext, event: Event) {
        let e = new BalancesTransferEvent(ctx, event)
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
