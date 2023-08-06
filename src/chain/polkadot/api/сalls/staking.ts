import {UnknownVersionError} from '@gs/util/errors'
import {StakingPayoutStakersCall} from '../../types/calls'
import {Call, ChainContext} from '../../types/support'

const payout_stakers = {
    decode(ctx: ChainContext, event: Call) {
        let e = new StakingPayoutStakersCall(event)
        if (e.isV0) {
            return e.asV0
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    payout_stakers,
}
