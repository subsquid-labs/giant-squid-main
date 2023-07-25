import type {Result, Option} from './support'

export interface StakingLedger {
    stash: Uint8Array
    total: bigint
    active: bigint
    unlocking: UnlockChunk[]
    claimedRewards: number[]
}

export interface UnlockChunk {
    value: bigint
    era: number
}
