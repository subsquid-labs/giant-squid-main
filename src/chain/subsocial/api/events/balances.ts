import {UnknownVersionError} from '@gs/util/errors'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

export const Transfer = {
    decode(ctx: ChainContext, event: Event) {
        let e = new BalancesTransferEvent(ctx, event)
        if (e.isV1) {
            let [from, to, amount] = e.asV1
            return {from, to, amount}
        } else if (e.isV2) {
            return e.asV2
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
