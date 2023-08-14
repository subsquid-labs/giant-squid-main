import {StoreWithCache} from '@belopash/squid-tools'
import {BlockHeader, Event, EventType, MappingContext, Pallet} from '@gs/interfaces'

export interface OnSessionEnding {
    onSessionEnding(
        ctx: MappingContext<StoreWithCache>,
        block: BlockHeader,
        endingIndex: number,
        willApplyAt: number
    ): void
}

export type Config = {
    OnSessionEnding: OnSessionEnding
}

export type NewSessionEventType = EventType<{sessionIndex: number}>

export interface PalletSetup {
    Events: {
        NewSession: NewSessionEventType
    }
}

export const NewSessionEventMapper = <T extends Config>(P: Pallet<T, {Events: {NewSession: NewSessionEventType}}>) =>
    class Mapper {
        handle(ctx: MappingContext<StoreWithCache>, event: Event): void {
            const data = new P.Events.NewSession(event)
            P.Config.OnSessionEnding.onSessionEnding(ctx, event.block, data.sessionIndex - 1, data.sessionIndex + 1)
        }
    }

export default <T extends Config = Config, S extends PalletSetup = PalletSetup>() => {
    class P extends Pallet<T, S>() {}

    P.EventMappers = {
        NewSession: NewSessionEventMapper(P),
    }

    return P
}
