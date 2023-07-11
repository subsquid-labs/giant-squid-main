import {UnknownVersionError} from '../../../../utils'
import {StakingBondedEvent, StakingRewardedEvent, StakingRewardEvent, StakingUnbondedEvent} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const Reward = {
    decode(ctx: ChainContext, event: Event) {
        let e = new StakingRewardEvent(ctx, event)
        if (e.isV1020) {
            return undefined
        } else if (e.isV1050) {
            let [stash, amount] = e.asV1050
            return {stash, amount}
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const Rewarded = {
    decode(ctx: ChainContext, event: Event) {
        let e = new StakingRewardedEvent(ctx, event)
        if (e.isV9090) {
            return undefined
        } else if (e.isV9090) {
            let [stash, amount] = e.asV9090
            return {stash, amount}
        } else if (e.isV9300) {
            return e.asV9300
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const Bonded = {
    decode(ctx: ChainContext, event: Event) {
        let e = new StakingBondedEvent(ctx, event)
        if (e.isV1051) {
            let [stash, amount] = e.asV1051
            return {stash, amount}
        } else if (e.isV9300) {
            return e.asV9300
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const Unbonded = {
    decode(ctx: ChainContext, event: Event) {
        let e = new StakingUnbondedEvent(ctx, event)
        if (e.isV1051) {
            let [stash, amount] = e.asV1051
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
    Bonded,
    Unbonded,
}
