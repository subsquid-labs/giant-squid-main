import assert from 'assert'
import {DataHandlerContext, SubstrateBlock, SubstrateExtrinsic} from '@subsquid/substrate-processor'
import {StoreWithCache} from '@belopash/squid-tools'

export type ActionContext = DataHandlerContext<StoreWithCache, unknown>
export type ActionBlock = Pick<SubstrateBlock, 'id' | 'hash' | 'height' | 'timestamp'>
export type ActionExtrinsic = Pick<SubstrateExtrinsic, 'id' | 'hash'>

export type ActionData<A> = A extends Action<infer D> ? D : never

export interface ActionConstructor<A extends Action> {
    new (block: ActionBlock, extrinsic: ActionExtrinsic | undefined, data: A extends Action<infer R> ? R : never): A
}

export abstract class Action<T = any> {
    protected performed = false

    constructor(readonly block: ActionBlock, readonly extrinsic: ActionExtrinsic | undefined, readonly data: T) {}

    async perform(ctx: ActionContext): Promise<void> {
        assert(!this.performed)
        await this._perform(ctx)
        this.performed = true
    }

    protected abstract _perform(ctx: ActionContext): Promise<void>
}
