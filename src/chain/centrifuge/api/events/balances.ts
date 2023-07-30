import {UnknownVersionError} from '@gs/util/errors'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const Transfer = {
    decode(ctx: ChainContext, event: Event) {
        let e = new BalancesTransferEvent(ctx, event)
        if (e.isV1000) {
            let [from, to, amount] = e.asV1000
            return {from, to, amount}
        } else if (e.isV1002) {
            return e.asV1002
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Transfer,
}
