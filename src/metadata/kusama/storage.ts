import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v1020 from './v1020'
import * as v1050 from './v1050'

export class SessionValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The current set of validators.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of validators.
     */
    get asV1020(): SessionValidatorsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The current set of validators.
 */
export interface SessionValidatorsStorageV1020 {
    get(): Promise<Uint8Array[]>
}

export class StakingActiveEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ActiveEra'
    }

    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era currently rewarded.
     *  Validator set of this era must be equal to `SessionInterface::validators`.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '2bb946dd9c19de9f4332897005d1255528c610172f7418fae165b5dafd3cfbfe'
    }

    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era currently rewarded.
     *  Validator set of this era must be equal to `SessionInterface::validators`.
     */
    get asV1050(): StakingActiveEraStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  The active era information, it holds index and start.
 * 
 *  The active era is the era currently rewarded.
 *  Validator set of this era must be equal to `SessionInterface::validators`.
 */
export interface StakingActiveEraStorageV1050 {
    get(): Promise<(v1050.ActiveEraInfo | undefined)>
}

export class StakingCurrentElectedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentElected'
    }

    /**
     *  The currently elected validator set keyed by stash account ID.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The currently elected validator set keyed by stash account ID.
     */
    get asV1020(): StakingCurrentElectedStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The currently elected validator set keyed by stash account ID.
 */
export interface StakingCurrentElectedStorageV1020 {
    get(): Promise<Uint8Array[]>
}

export class StakingCurrentEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentEra'
    }

    /**
     *  The current era index.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current era index.
     */
    get asV1020(): StakingCurrentEraStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how session module queues the validator
     *  set, it might be active or not.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how session module queues the validator
     *  set, it might be active or not.
     */
    get asV1050(): StakingCurrentEraStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  The current era index.
 */
export interface StakingCurrentEraStorageV1020 {
    get(): Promise<number>
}

/**
 *  The current era index.
 * 
 *  This is the latest planned era, depending on how session module queues the validator
 *  set, it might be active or not.
 */
export interface StakingCurrentEraStorageV1050 {
    get(): Promise<(number | undefined)>
}

export class StakingCurrentEraStartSessionIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentEraStartSessionIndex'
    }

    /**
     *  The session index at which the current era started.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The session index at which the current era started.
     */
    get asV1020(): StakingCurrentEraStartSessionIndexStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The session index at which the current era started.
 */
export interface StakingCurrentEraStartSessionIndexStorageV1020 {
    get(): Promise<number>
}

export class StakingErasStakersStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStakers'
    }

    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === 'f3f726cc814cef290657008054cd10667b250a01d2842ff3bbbcca24c98abf5b'
    }

    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get asV1050(): StakingErasStakersStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  Exposure of validator at era.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface StakingErasStakersStorageV1050 {
    get(key1: number, key2: Uint8Array): Promise<v1050.Exposure>
    getAll(): Promise<v1050.Exposure[]>
    getMany(keys: [number, Uint8Array][]): Promise<v1050.Exposure[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v1050.Exposure][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v1050.Exposure][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v1050.Exposure][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v1050.Exposure][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v1050.Exposure][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v1050.Exposure][]>
}

export class StakingForceEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ForceEra'
    }

    /**
     *  True if the next session change will be a new era regardless of index.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'b7c79f26737f4e7aed039b709a4e473b3e4912bf8a2efbe7cc8c5fc9f7531c81'
    }

    /**
     *  True if the next session change will be a new era regardless of index.
     */
    get asV1020(): StakingForceEraStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  True if the next session change will be a new era regardless of index.
 */
export interface StakingForceEraStorageV1020 {
    get(): Promise<v1020.Forcing>
}

export class StakingStakersStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Stakers'
    }

    /**
     *  Nominators for a particular account that is in action right now. You can't iterate
     *  through validators here, but you can find them in the Session module.
     * 
     *  This is keyed by the stash account.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'd3eee9271023eb9c766a48fd0a709136d59d1bde5407acf940037ad950c8900d'
    }

    /**
     *  Nominators for a particular account that is in action right now. You can't iterate
     *  through validators here, but you can find them in the Session module.
     * 
     *  This is keyed by the stash account.
     */
    get asV1020(): StakingStakersStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Nominators for a particular account that is in action right now. You can't iterate
 *  through validators here, but you can find them in the Session module.
 * 
 *  This is keyed by the stash account.
 */
export interface StakingStakersStorageV1020 {
    get(key: Uint8Array): Promise<v1020.Exposure>
    getAll(): Promise<v1020.Exposure[]>
    getMany(keys: Uint8Array[]): Promise<v1020.Exposure[]>
}
