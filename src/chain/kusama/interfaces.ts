import {DataHandlerContext, SubstrateBlock} from '@subsquid/substrate-processor'
import {Action} from '../../action'
import {
    EventItem as _EventItem,
    CallItem as _CallItem,
} from '@subsquid/substrate-processor/lib/interfaces/data-selection'

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

export interface PalletEvents {
    [k: string]: (ctx: DataHandlerContext<any, unknown>, block: SubstrateBlock, item: EventItem) => Action[] | undefined
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

export interface PalletCalls {
    [k: string]: (
        ctx: DataHandlerContext<any, unknown>,
        block: SubstrateBlock,
        item: CallItem
    ) => Action[] | undefined
}

export interface Pallet {
    events: PalletEvents
    calls: PalletCalls
}

export interface Runtime {
    [k: string]: Pallet
}
