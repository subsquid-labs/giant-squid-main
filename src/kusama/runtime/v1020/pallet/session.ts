import {StoreWithCache} from '@belopash/squid-tools'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {ChainContext, EventItem, EventMapper, MappingContext, PalletBase, Event} from '../../../interfaces'
import {EventType} from '../../../interfaces/types'
import {SessionNewSessionEvent} from '@metadata/kusama/events'

export type Config = {}

export type SessionManager = {
    newSession(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, sessionIndex: number): void
}

export class Pallet extends PalletBase<{
    Config: Config
    Events: {
        NewSession: EventType<{sessionIndex: number}>
    }
}> {
    SessionManager!: SessionManager

    newSession(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, sessionIndex: number) {
        this.SessionManager.newSession(ctx, block, sessionIndex)
    }
}

export const NewSessionEvent = (pallet: Pallet) =>
    class NewSessionEvent {
        readonly sessionIndex: number

        constructor(ctx: ChainContext, event: Event) {
            const data = new SessionNewSessionEvent(ctx, event).asV1020
            this.sessionIndex = data
        }
    }

export const NewSessionEventMapper = (pallet: Pallet) =>
    class Mapper {
        handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void {
            const data = new pallet.Events.NewSession(ctx, item.event)
            pallet.newSession(ctx, block, data.sessionIndex)
        }
    }

const pallet = new Pallet()

pallet.Events = {
    NewSession: NewSessionEvent(pallet),
}

pallet.EventMappers = {
    NewSession: NewSessionEventMapper(pallet),
}

export default pallet
