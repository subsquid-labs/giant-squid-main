import {UnknownVersionError} from '@gs/util/errors'
import {
    BalancesForceTransferCall,
    BalancesTransferAllCall,
    BalancesTransferCall,
    BalancesTransferKeepAliveCall,
} from '../../types/calls'
import {Call, ChainContext} from '../../types/support'

const transfer = {
    decode(call: Call) {
        let e = new BalancesTransferCall(call)
        if (e.isV1) {
            return e.asV1
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const transfer_all = {
    decode(call: Call) {
        let e = new BalancesTransferAllCall(call)
        if (e.isV1) {
            return e.asV1
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const force_transfer = {
    decode(call: Call) {
        let e = new BalancesForceTransferCall(call)
        if (e.isV1) {
            return e.asV1
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const transfer_keep_alive = {
    decode(call: Call) {
        let e = new BalancesTransferKeepAliveCall(call)
        if (e.isV1) {
            return e.asV1
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    transfer,
    transfer_all,
    transfer_keep_alive,
    force_transfer,
}
