import {UnknownVersionError} from '@gs/util/errors'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const Transfer = {
    decode(ctx: ChainContext, event: Event) {
        let e = new BalancesTransferEvent(ctx, event)
        if (e.isV1003) {
            let [from, to, amount] = e.asV1003
            return {from, to, amount}
        } else if (e.isV1009) {
            return e.asV1009
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
