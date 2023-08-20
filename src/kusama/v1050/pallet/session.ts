import Default, {Config} from '~pallets/session/v2'
import {SessionNewSessionEvent} from '~metadata/kusama/events'
import {Event, Pallet} from '~interfaces'

export const NewSessionEvent = <T extends Config>(P: Pallet<T>) =>
    class NewSessionEvent {
        readonly sessionIndex: number

        constructor(event: Event) {
            const data = new SessionNewSessionEvent(event).asV1020
            this.sessionIndex = data
        }
    }

export default () => {
    const P = Default()

    P.Events = {
        NewSession: NewSessionEvent(P),
    }

    return P
}
