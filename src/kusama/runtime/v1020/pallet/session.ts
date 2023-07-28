import {StoreWithCache} from '@belopash/squid-tools'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {EventItem, EventMapper, MappingContext, Pallet} from '../../../interfaces'
import {SessionNewSessionEvent} from '@metadata/kusama/events'

export interface Config {}

export type NewSessionHandler = (
    ctx: MappingContext<StoreWithCache>,
    block: SubstrateBlock,
    sessionIndex: number
) => void

export class SessionPallet extends Pallet<Config> {
    private handlers: {newSession: NewSessionHandler[]} = {newSession: []}

    set sessionManager(handlers: {newSession: NewSessionHandler}) {
        this.handlers.newSession.push(handlers.newSession)
    }

    newSession(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, sessionIndex: number) {
        for (const handler of this.handlers.newSession) {
            handler(ctx, block, sessionIndex)
        }
    }
}

export class NewSessionEventMapper extends EventMapper<SessionPallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void {
        const data = new SessionNewSessionEvent(ctx, item.event).asV1020
        this.pallet.newSession(ctx, block, data)
    }
}

const pallet_session = new SessionPallet()

pallet_session.events = {
    NewSession: new NewSessionEventMapper(pallet_session),
}

export default pallet_session
