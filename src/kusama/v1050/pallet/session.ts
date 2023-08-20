import Default from '~pallets/session/v2'
import {NewSessionEvent} from '../../v1032/pallet/session'

export {NewSessionEvent}

export default () =>
    Default(() => ({
        Events: {
            NewSession: NewSessionEvent,
        },
    }))
