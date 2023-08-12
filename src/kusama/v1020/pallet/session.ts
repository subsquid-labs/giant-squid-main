import {StoreWithCache} from '@belopash/squid-tools'
import {SessionNewSessionEvent} from '@metadata/kusama/events'
import {BlockHeader, Event, MappingContext, Pallet} from '../../interfaces'
import {EventType} from '../../interfaces/types'

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
            P.Config.OnSessionEnding.onSessionEnding(
                ctx,
                event.block,
                data.sessionIndex - 1,
                data.sessionIndex + 1
            )
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
