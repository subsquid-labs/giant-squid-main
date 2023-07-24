import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result, Option} from './support'

export class StakingBondingDurationConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Number of eras that staked funds must remain bonded for.
     */
    get isV1020() {
        return this._chain.getConstantTypeHash('Staking', 'BondingDuration') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Number of eras that staked funds must remain bonded for.
     */
    get asV1020(): number {
        assert(this.isV1020)
        return this._chain.getConstant('Staking', 'BondingDuration')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Staking', 'BondingDuration') != null
    }
}

export class StakingSessionsPerEraConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Number of sessions per era.
     */
    get isV1020() {
        return this._chain.getConstantTypeHash('Staking', 'SessionsPerEra') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Number of sessions per era.
     */
    get asV1020(): number {
        assert(this.isV1020)
        return this._chain.getConstant('Staking', 'SessionsPerEra')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Staking', 'SessionsPerEra') != null
    }
}
