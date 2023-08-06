import {StoreWithCache} from '@belopash/squid-tools'
import {ActionQueue} from '@gs/action'
import {Call, Event, Block, Extrinsic, BlockHeader} from '../processor'
import {CallType, ConstantType, EventType, StorageType} from './types'
import {DataHandlerContext} from '@subsquid/substrate-processor'

export {Call, Event, Block, Extrinsic, BlockHeader}

export * from './types'

export type MappingContext<Store> = Omit<DataHandlerContext<Store, {}>, 'blocks'> & {queue: ActionQueue}

export interface EventMapper {
    // protected get config(): P extends Pallet<infer C> ? C : never {
    //     return this.pallet.config
    // }

    handle(ctx: MappingContext<StoreWithCache>, item: Event): void
}

export interface CallMapper {
    handle(ctx: MappingContext<StoreWithCache>, call: Call): void
}

// export type PalletSetup<
//     T extends {
//         Events?: Record<string, EventType<any>>
//         Calls?: Record<string, CallType<any>>
//         Storage?: Record<string, StorageType<any, any>>
//         Constants?: Record<string, ConstantType<any>>
//     },
//     R = {}
// > = {
//     [K in keyof T as K extends keyof R ? never : K]: T[K]
// } & {
//     [K in keyof R as K extends keyof T ? never : K]: R[K]
// } & {
//     [K in keyof T as K extends keyof R ? K : never]: K extends keyof R ? Merge<T[K], R[K]> : never
// }

export interface PalletSetup {
    Events?: Record<string, EventType<any>>
    Calls?: Record<string, CallType<any>>
    Storage?: Record<string, StorageType<any, any>>
    Constants?: Record<string, ConstantType<any>>
}

// export interface PalletBase<T, S extends PalletSetup> {
//     Config: T
//     Events?: S['Events']
//     Calls?: S['Calls']
//     Storage?: S['Storage']
//     Constants?: S['Constants']

//     EventMappers: Record<string, new () => EventMapper>
//     CallMappers: Record<string, new () => CallMapper>
// }
export const PalletBase = <T, S extends PalletSetup>() => {
    abstract class PalletBase {
        static Config: T

        static Events: S['Events']
        static Calls: S['Calls']
        static Storage: S['Storage']
        static Constants: S['Constants']

        static EventMappers: Record<string, new () => EventMapper>
        static CallMappers: Record<string, new () => CallMapper>

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

    return PalletBase
}
export type PalletBase<T, S extends PalletSetup> = ReturnType<typeof PalletBase<T, S>>

export const Runtime = <
    T extends {
        readonly [k: string]: PalletBase<any, any>
    }
>(
    config: T
) => config
export type Runtime<
    T extends {
        readonly [k: string]: PalletBase<any, any>
    }
> = ReturnType<typeof Runtime<T>>

export interface ChainContext {
    _chain: Chain
}

export interface Chain {
    rpc: RpcClient
}

interface RpcClient {
    call(method: string, params?: any[]): Promise<any>
    batchCall(calls: {method: string; params?: any[]}[]): Promise<any[]>
}
