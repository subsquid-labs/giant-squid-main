import * as parent from '../../v1020/pallet/session'

export const {NewSessionEvent, NewSessionEventMapper, Pallet} = parent

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
