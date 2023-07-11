import {StakingActiveEraStorage, StakingCurrentEraStorage, StakingErasStakersStorage} from '../../types/storage'
import {Block, ChainContext} from '../../types/support'
import {UnknownVersionError} from '../../../../utils'

const ActiveEra = {
    async get(ctx: ChainContext, block: Block) {
        const s = new StakingActiveEraStorage(ctx, block)

        if (!s.isExists) {
            return undefined
        } else if (s.isV1050) {
            return s.asV1050.get()
        } else {
            throw new UnknownVersionError(s)
        }
    },
}

const CurrentEra = {
    async get(ctx: ChainContext, block: Block) {
        const s = new StakingCurrentEraStorage(ctx, block)

        if (!s.isExists) {
            return undefined
        } else if (s.isV1020) {
            return s.asV1020.get()
        } else if (s.isV1050) {
            return s.asV1050.get()
        } else {
            throw new UnknownVersionError(s)
        }
    },
}

const EraStakers = {
    async getMany(ctx: ChainContext, block: Block, eraIndex: number, validatorIds: Uint8Array[]) {
        const s = new StakingErasStakersStorage(ctx, block)

        if (!s.isExists) {
            return undefined
        } else if (s.isV1050) {
            return s.asV1050.getMany(validatorIds.map((v) => [eraIndex, v]))
        } else {
            throw new UnknownVersionError(s)
        }
    },
}

export default {
    ActiveEra,
    CurrentEra,
    EraStakers,
}
