import {NewSessionEventMapper, SessionPallet} from '../../v1030/pallet/session'

export {NewSessionEventMapper, SessionPallet}

export const pallet = new SessionPallet()

pallet.events = {
    NewSession: new NewSessionEventMapper(pallet),
}
