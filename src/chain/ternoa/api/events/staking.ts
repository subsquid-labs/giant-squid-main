import { UnknownVersionError } from '@gs/util/errors'
import { StakingRewardedEvent } from '../../types/events'
import { ChainContext, Event } from '../../types/support'

const Rewarded = {
  decode(event: Event) {
    let e = new StakingRewardedEvent(event)
    if (e.isV1) {
      let [stash, amount] = e.asV1
      return { stash, amount }
    } else if (e.isV11) {
      return e.asV11
    } else {
      throw new UnknownVersionError(e)
    }
  },
}

export default {
  Rewarded,
}
