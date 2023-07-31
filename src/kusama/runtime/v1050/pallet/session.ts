import {NewSessionEventMapper, SessionPallet} from '../../v1032/pallet/session'

export {NewSessionEventMapper, SessionPallet}

export const pallet = new SessionPallet()

pallet.events = {
    NewSession: new NewSessionEventMapper(pallet),
}
