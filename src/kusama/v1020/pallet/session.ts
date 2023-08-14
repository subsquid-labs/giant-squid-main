import {SessionNewSessionEvent} from '@metadata/kusama/events'
import {Event, Pallet} from '../../../interfaces'
import Default from '@gs/pallets/session/v1'

export const NewSessionEvent = (P: Pallet<{}>) =>
    class NewSessionEvent {
        readonly sessionIndex: number

        constructor(event: Event) {
            const data = new SessionNewSessionEvent(event).asV1020
            this.sessionIndex = data
        }
    }

export default () => {
    class P extends Default() {}

    P.Events = {
        NewSession: NewSessionEvent(P),
    }

    return P
}
