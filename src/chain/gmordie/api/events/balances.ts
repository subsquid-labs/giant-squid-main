import {UnknownVersionError} from '../../../../utils'
import {BalancesTransferEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

export const Transfer = {
    decode(ctx: ChainContext, event: Event) {
        let e = new BalancesTransferEvent(ctx, event)
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
