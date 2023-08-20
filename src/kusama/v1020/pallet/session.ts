import {SessionNewSessionEvent} from '~metadata/kusama/events'
import {Event, Pallet} from '~interfaces'
import Default from '~pallets/session/v1'

export class NewSessionEvent {
    readonly sessionIndex: number

    constructor(event: Event) {
        const data = new SessionNewSessionEvent(event).asV1020
        this.sessionIndex = data
    }
}

export default () =>
    Default(() => ({
        Events: {
            NewSession: NewSessionEvent,
        },
    }))
