import {StoreWithCache} from '@belopash/squid-tools'
import {ActionQueue} from '@gs/action'
import {DataHandlerContext, SubstrateBlock} from '@subsquid/substrate-processor'
import assert from 'assert'
import {CallItem, EventItem, Call, Event, Block, Extrinsic} from '../processor'
import {CallType, ConstantType, EventType, StorageType} from './types'

export {CallItem, EventItem, Call, Event, Block, Extrinsic}

export * from './types'

export type MappingContext<Store> = Omit<DataHandlerContext<Store, unknown>, 'blocks'> & {queue: ActionQueue}

export interface EventMapper {
    // protected get config(): P extends Pallet<infer C> ? C : never {
    //     return this.pallet.config
    // }

    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void
}

export interface CallMapper {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void
}

export interface PalletSetup {
    Config?: Record<string, any>
    Events?: Record<string, EventType<any>>
    Calls?: Record<string, CallType<any>>
    Storage?: Record<string, StorageType<any, any>>
    Constants?: Record<string, ConstantType<any>>
}

export abstract class PalletBase<T extends PalletSetup> {
    Config!: T['Config']
    Events!: T['Events']
    Calls!: T['Calls']
    Storage!: T['Storage']
    Constants!: T['Constants']

    EventMappers: Record<string, new () => EventMapper> = {}
    CallMappers: Record<string, new () => CallMapper> = {}

    // constructor(setup: T) {
    //     this.Config = setup.Config
    //     this.Events = setup.Events
    //     this.Calls = setup.Calls
    //     this.Storage = setup.Storage
    //     this.Constants = setup.Constants
    // }
    // get events() {
    //     return this._events ?? {}
    // }

    // set events(map: Record<string, EventMapper<this>>) {
    //     this._events = map
    // }

    // get calls() {
    //     return this._calls ?? {}
    // }

    // set calls(map: Record<string, CallMapper<this>>) {
    //     this._calls = map
    // }
}

export interface Runtime {
    readonly [k: string]: PalletBase<any>
}

export interface Chain {
    getEventHash(eventName: string): string
    decodeEvent(event: Event): any
    getCallHash(name: string): string
    decodeCall(call: Call): any
    getStorageItemTypeHash(prefix: string, name: string): string | undefined
    getStorage(blockHash: string, prefix: string, name: string, ...args: any[]): Promise<any>
    queryStorage2(blockHash: string, prefix: string, name: string, keyList?: any[]): Promise<any[]>
    getKeys(blockHash: string, prefix: string, name: string, ...args: any[]): Promise<any[]>
    getPairs(blockHash: string, prefix: string, name: string, ...args: any[]): Promise<any[]>
    getKeysPaged(
        pageSize: number,
        blockHash: string,
        prefix: string,
        name: string,
        ...args: any[]
    ): AsyncIterable<any[]>
    getPairsPaged(
        pageSize: number,
        blockHash: string,
        prefix: string,
        name: string,
        ...args: any[]
    ): AsyncIterable<[key: any, value: any][]>
    getConstantTypeHash(pallet: string, name: string): string | undefined
    getConstant(pallet: string, name: string): any
}

export interface ChainContext {
    _chain: Chain
}
