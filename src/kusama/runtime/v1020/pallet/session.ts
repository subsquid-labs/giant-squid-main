import {StoreWithCache} from '@belopash/squid-tools'
import {applyMixins} from '@gs/util/misc'
import {SessionNewSessionEvent} from '@metadata/kusama/events'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {Class} from 'type-fest'
import {ChainContext, Event, EventItem, MappingContext, PalletBase, PalletSetup} from '../../../interfaces'
import {EventType} from '../../../interfaces/types'

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

export type Events<T extends Config> = {
    NewSession: EventType<{sessionIndex: number}>
}

export class Pallet<T extends Config, S extends PalletSetup = {}> extends PalletBase<T, S> {}

export const NewSessionEvent = <T extends Config>(pallet: Pallet<T>) =>
    class NewSessionEvent {
        readonly sessionIndex: number

        constructor(ctx: ChainContext, event: Event) {
            const data = new SessionNewSessionEvent(ctx, event).asV1020
            this.sessionIndex = data
        }
    }

export const NewSessionEventMapper = <T extends Config>(pallet: Pallet<T, {Events: Pick<Events<T>, 'NewSession'>}>) =>
    class Mapper {
        handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void {
            const data = new pallet.Events.NewSession(ctx, item.event)
            pallet.Config.SessionManager.newSession(ctx, block, data.sessionIndex)
        }
    }

export default () => {
    const pallet = new Pallet<
        Config,
        {
            Events: Events<Config>
        }
    >()

    pallet.Events = {
        NewSession: NewSessionEvent(pallet),
    }

    pallet.EventMappers = {
        NewSession: NewSessionEventMapper(pallet),
    }

    return pallet
}
