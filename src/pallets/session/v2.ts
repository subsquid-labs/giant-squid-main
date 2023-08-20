import {StoreWithCache} from '@belopash/squid-tools'
import {BlockHeader, Event, MappingContext, Pallet} from '~interfaces'
import {NewSessionEventType, PalletSetup} from './v1'

export interface SessionManager {
    newSession(ctx: MappingContext<StoreWithCache>, block: BlockHeader, newIndex: number): void
    endSession(ctx: MappingContext<StoreWithCache>, block: BlockHeader, endIndex: number): void
    startSession(ctx: MappingContext<StoreWithCache>, block: BlockHeader, startIndex: number): void
}

export type Config = {
    SessionManager: SessionManager
}

export const NewSessionEventMapper = <T extends Pick<Config, 'SessionManager'>>(
    P: Pallet<T, {Events: {NewSession: NewSessionEventType}}>
) =>
    class Mapper {
        handle(ctx: MappingContext<StoreWithCache>, event: Event): void {
            const data = new P.Events.NewSession(event)
            P.Config.SessionManager.endSession(ctx, event.block, data.sessionIndex - 1)
            P.Config.SessionManager.startSession(ctx, event.block, data.sessionIndex)
            P.Config.SessionManager.newSession(ctx, event.block, data.sessionIndex + 1)
        }
    }

export default <T extends Config = Config, S extends PalletSetup = PalletSetup>(setup: (Config: T) => S) => {
    class P extends Pallet<T, S>(setup) {}

    P.EventMappers = {
        NewSession: NewSessionEventMapper(P),
    }

    return P
}
