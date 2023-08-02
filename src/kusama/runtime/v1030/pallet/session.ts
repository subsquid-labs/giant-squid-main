import {NewSessionEvent, NewSessionEventMapper, Pallet, Config, SessionManager} from '../../v1020/pallet/session'

export {NewSessionEvent, NewSessionEventMapper, Pallet, Config, SessionManager}

/******************
 * IMPLEMENTATION *
 ******************/

const pallet = new Pallet()

pallet.Events = {
    NewSession: NewSessionEvent(pallet),
}

pallet.EventMappers = {
    NewSession: NewSessionEventMapper(pallet),
}

export default pallet
