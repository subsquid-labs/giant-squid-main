import {DataHandlerContext} from '@subsquid/substrate-processor'
import {StoreWithCache} from '@belopash/squid-tools'
import type {BlockHeader, Extrinsic} from '@subsquid/substrate-data'

export type Awaitable<T> = T | PromiseLike<T>

export type ActionContext = DataHandlerContext<StoreWithCache, {}>
export type ActionBlock = Pick<BlockHeader, 'hash' | 'height' | 'timestamp'>
export type ActionExtrinsic = Pick<Extrinsic, 'hash'>

export type ActionData<A> = A extends Action<infer D> ? D : never

export interface ActionConstructor<A extends Action> {
    new (block: ActionBlock, extrinsic: ActionExtrinsic | undefined, data: A extends Action<infer R> ? R : never): A
}

export abstract class Action<T = any> {
    protected performed = false

    constructor(readonly block: ActionBlock, readonly extrinsic: ActionExtrinsic | undefined, readonly data: T) {}

    abstract perform(ctx: ActionContext): Promise<void>
}
