import {UnknownVersionError} from '../../../../utils'
import {StakingPayoutStakersCall} from '../../types/calls'
import {Call, ChainContext} from '../../types/support'

const payout_stakers = {
    decode(ctx: ChainContext, event: Call) {
        let e = new StakingPayoutStakersCall(ctx, event)
        if (e.isV268) {
            return e.asV268
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    payout_stakers,
}
