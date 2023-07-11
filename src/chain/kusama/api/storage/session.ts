import {UnknownVersionError} from '../../../../utils'
import {SessionValidatorsStorage} from '../../types/storage'
import {Block, ChainContext} from '../../types/support'

const Validators = {
    async get(ctx: ChainContext, block: Block) {
        const s = new SessionValidatorsStorage(ctx, block)

        if (!s.isExists) {
            return undefined
        } else if (s.isV1020) {
            return s.asV1020.get()
        } else {
            throw new UnknownVersionError(s)
        }
    },
}

export default {
    Validators,
}
