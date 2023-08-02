import {NewSessionEvent, NewSessionEventMapper, Pallet} from '../../v1020/pallet/session'

export {NewSessionEvent, NewSessionEventMapper, Pallet}

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
