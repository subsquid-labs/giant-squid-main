import {UnknownVersionError} from '../../../../utils'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

export const Transfer = {
    decode(ctx: ChainContext, event: Event) {
        let e = new BalancesTransferEvent(ctx, event)
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
