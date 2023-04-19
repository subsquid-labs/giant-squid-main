import { UnknownVersionError } from '../../../../utils'
import { StakingRewardedEvent } from '../../types/events'
import { ChainContext, Event } from '../../types/support'

const Rewarded = {
  decode(ctx: ChainContext, event: Event) {
    let e = new StakingRewardedEvent(ctx, event)
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
