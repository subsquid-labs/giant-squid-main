import {StoreWithCache} from '@belopash/squid-tools'
import {applyMixins} from '@gs/util/misc'
import {SessionNewSessionEvent} from '@metadata/kusama/events'
import {Class} from 'type-fest'
import {BlockHeader, Event, MappingContext, PalletBase, PalletSetup} from '../../../interfaces'
import {EventType} from '../../../interfaces/types'

export const SessionManager = <C extends Class<any>>(
    base: C,
    implementation: SessionManager & ThisType<InstanceType<C>>
) => {
    applyMixins(base, implementation)
}

export interface SessionManager {
    newSession(ctx: MappingContext<StoreWithCache>, block: BlockHeader, sessionIndex: number): void
}

export type Config = {
    SessionManager: SessionManager
}

export type Events<T extends Config> = {
    NewSession: EventType<{sessionIndex: number}>
}

export const Pallet = <T extends Config, S extends PalletSetup = {}>() => {
    abstract class Pallet extends PalletBase<T, S>() {}

    return Pallet
}
type Pallet<T extends Config, S extends PalletSetup = {}> = ReturnType<typeof Pallet<T, S>>

export const NewSessionEvent = <T extends Config>(pallet: Pallet<T>) =>
    class NewSessionEvent {
        readonly sessionIndex: number

        constructor(event: Event) {
            const data = new SessionNewSessionEvent(event).asV1020
            this.sessionIndex = data
        }
    }

export const NewSessionEventMapper = <T extends Config>(pallet: Pallet<T, {Events: Pick<Events<T>, 'NewSession'>}>) =>
    class Mapper {
        handle(ctx: MappingContext<StoreWithCache>, event: Event): void {
            const data = new pallet.Events.NewSession(event)
            pallet.Config.SessionManager.newSession(ctx, event.block, data.sessionIndex)
        }
    }

export default () => {
    const pallet = Pallet<Config, {Events: Events<Config>}>()

    pallet.Events = {
        NewSession: NewSessionEvent(pallet),
    }

    pallet.EventMappers = {
        NewSession: NewSessionEventMapper(pallet),
    }

    return pallet
}
