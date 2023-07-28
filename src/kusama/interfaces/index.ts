import {StoreWithCache} from '@belopash/squid-tools'
import {ActionQueue} from '@gs/action'
import {DataHandlerContext, SubstrateBlock} from '@subsquid/substrate-processor'
import assert from 'assert'
import {CallItem, EventItem} from '../processor'

export {CallItem, EventItem}

export type MappingContext<Store> = Omit<DataHandlerContext<Store, unknown>, 'blocks'> & {queue: ActionQueue}

export abstract class EventMapper<P extends Pallet<any>> {
    constructor(protected pallet: P) {}

    protected get config(): P extends Pallet<infer C> ? C : never {
        return this.pallet.config
    }

    abstract handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void
}

export abstract class CallMapper<P extends Pallet<any>> {
    constructor(protected pallet: P, readonly result?: boolean) {}

    protected get config(): P extends Pallet<infer C> ? C : never {
        return this.pallet.config
    }

    abstract handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void
}

export class Pallet<C extends {}> {
    private _config: C | undefined

    get config(): C {
        assert(this._config != null, 'config is not defined')
        return this._config
    }

    set config(c: C) {
        this._config = c
    }

    private _events: Record<string, EventMapper<this>> | undefined

    get events() {
        return this._events ?? {}
    }

    set events(map: Record<string, EventMapper<this>>) {
        this._events = map
    }

    private _calls: Record<string, CallMapper<this>> | undefined

    get calls() {
        return this._calls ?? {}
    }

    set calls(map: Record<string, CallMapper<this>>) {
        this._calls = map
    }
}

export interface Runtime {
    readonly [k: string]: Pallet<any>
}

export * from './types'
export {Call, Event, Block, Extrinsic} from '../processor'
