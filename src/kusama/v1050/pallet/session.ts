import {StoreWithCache} from '@belopash/squid-tools'
import {BlockHeader, Event, MappingContext, Pallet} from '../../interfaces'
import {EventType} from '../../interfaces/types'
import {SessionNewSessionEvent} from '@metadata/kusama/events'

export interface SessionManager {
    newSession(ctx: MappingContext<StoreWithCache>, block: BlockHeader, newIndex: number): void
    endSession(ctx: MappingContext<StoreWithCache>, block: BlockHeader, endIndex: number): void
    startSession(ctx: MappingContext<StoreWithCache>, block: BlockHeader, startIndex: number): void
}

export type Config = {
    SessionManager: SessionManager
}

export type Events<T extends Config> = {
    NewSession: EventType<{sessionIndex: number}>
}

export const NewSessionEvent = <T extends Config>(P: Pallet<T>) =>
    class NewSessionEvent {
        readonly sessionIndex: number

        constructor(event: Event) {
            const data = new SessionNewSessionEvent(event).asV1020
            this.sessionIndex = data
        }
    }

export const NewSessionEventMapper = <T extends Config>(P: Pallet<T, {Events: Pick<Events<T>, 'NewSession'>}>) =>
    class Mapper {
        handle(ctx: MappingContext<StoreWithCache>, event: Event): void {
            const data = new P.Events.NewSession(event)
            P.Config.SessionManager.endSession(ctx, event.block, data.sessionIndex - 1)
            P.Config.SessionManager.startSession(ctx, event.block, data.sessionIndex)
            P.Config.SessionManager.newSession(ctx, event.block, data.sessionIndex + 1)
        }
    }

export default () => {
    class P extends Pallet<Config, {Events: Events<Config>}>() {}

    P.Events = {
        NewSession: NewSessionEvent(P),
    }

    P.EventMappers = {
        NewSession: NewSessionEventMapper(P),
    }

    return P
}
