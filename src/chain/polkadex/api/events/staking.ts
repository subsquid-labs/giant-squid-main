import { UnknownVersionError } from '@gs/util/errors'
import { StakingRewardedEvent } from '../../types/events'
import { ChainContext, Event } from '../../types/support'

const Rewarded = {
  decode(event: Event) {
    let e = new StakingRewardedEvent(event)
    if (e.isV268) {
        let [stash, amount] = e.asV268
        return {stash, amount}
    } else {
        throw new UnknownVersionError(e)
    }
  },
}

export default {
  Rewarded,
}
