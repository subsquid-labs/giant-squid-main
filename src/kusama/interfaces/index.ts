import {ActionQueue} from '@gs/action'
import {DataHandlerContext, SubstrateBlock} from '@subsquid/substrate-processor'
import {
    CallItem as _CallItem,
    EventItem as _EventItem,
} from '@subsquid/substrate-processor/lib/interfaces/data-selection'

export type MappingContext<Store> = Omit<DataHandlerContext<Store, unknown>, 'blocks'> & {queue: ActionQueue}

export type EventItem = _EventItem<
    string,
    {
        event: {
            name: string
            args: true
            extrinsic: {
                hash: true
            }
        }
    }
>

export interface EventMapper {
    handle(ctx: MappingContext<any>, block: SubstrateBlock, item: EventItem): void
}

export interface PalletEvents {
    readonly [k: string]: EventMapper
}

export type CallItem = _CallItem<
    string,
    {
        call: {
            name: string
            args: true
            origin: true
        }
        extrinsic: {
            hash: true
        }
    }
>

export interface CallMapper {
    handle(ctx: MappingContext<any>, block: SubstrateBlock, item: CallItem): void
}

export interface PalletCalls {
    readonly [k: string]: CallMapper
}

export interface PalletConfig {
    // readonly events: PalletEvents
    // readonly calls: PalletCalls
}

export interface IPallet<C extends {}> {
    readonly config: C
    readonly events: Record<string, EventMapper>
    readonly calls: Record<string, CallMapper>
}

export interface Runtime {
    readonly [k: string]: Pallet<any>
}

// export class Runtime<C extends RuntimeConfig> {
//     constructor(private config: C) {}

//     getPallet<N extends keyof C>(name: N): C[N] {
//         return this.config[name]
//     }
// }

export * from './types'
