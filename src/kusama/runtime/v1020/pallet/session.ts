import {StoreWithCache} from '@belopash/squid-tools'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {ChainContext, EventItem, EventMapper, MappingContext, PalletBase, Event} from '../../../interfaces'
import {EventType} from '../../../interfaces/types'
import {SessionNewSessionEvent} from '@metadata/kusama/events'
import {applyMixins} from '@gs/util/misc'
import {Constructor, Class} from 'type-fest'

export const SessionManager = <C extends Class<any>>(
    base: C,
    implementation: SessionManager & ThisType<InstanceType<C>>
) => {
    applyMixins(base, implementation)
}

export interface SessionManager {
    newSession(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, sessionIndex: number): void
}

export type Config = {
    SessionManager: SessionManager
}

export class Pallet extends PalletBase<{
    Config: Config
    Events: {
        NewSession: EventType<{sessionIndex: number}>
    }
}> {}

export interface Pallet {}

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
            pallet.Config.SessionManager.newSession(ctx, block, data.sessionIndex)
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
