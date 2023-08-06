import {UnknownVersionError} from '@gs/util/errors'
import {StakingRewardedEvent, StakingRewardEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const Reward = {
    decode(event: Event) {
        let e = new StakingRewardEvent(event)
        if (e.isV0) {
            let [stash, amount] = e.asV0
            return {stash, amount}
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const Rewarded = {
    decode(event: Event) {
        let e = new StakingRewardedEvent(event)
        if (e.isV9090) {
            let [stash, amount] = e.asV9090
            return {stash, amount}
        } else if (e.isV9300) {
            return e.asV9300
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    Reward,
    Rewarded,
}
