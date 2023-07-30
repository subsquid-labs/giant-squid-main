import { UnknownVersionError } from '@gs/util/errors'
import { BalancesTransferEvent } from '../../types/events'
import { ChainContext, Event } from '../../types/support'

const Transfer = {
  decode(ctx: ChainContext, event: Event) {
    let e = new BalancesTransferEvent(ctx, event)
    if (e.isV1) {
      return e.asV1
    } else {
      throw new UnknownVersionError(e)
    }
  },
}

export default {
  Transfer,
}
