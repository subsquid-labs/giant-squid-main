import {UnknownVersionError} from '@gs/util/errors'
import {
    IdentityIdentityClearedEvent,
    IdentityIdentityKilledEvent,
    IdentityIdentitySubRemovedEvent,
    IdentityIdentitySubRevokedEvent,
} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const IdentityCleared = {
    decode(event: Event) {
        let e = new IdentityIdentityClearedEvent(event)
        if (e.isV5) {
            const [who, deposit] = e.asV5
            return {who, deposit}
        } else if (e.isV9140) {
            return e.asV9140
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const IdentityKilled = {
    decode(event: Event) {
        let e = new IdentityIdentityKilledEvent(event)
        if (e.isV5) {
            const [who, deposit] = e.asV5
            return {who, deposit}
        } else if (e.isV9140) {
            return e.asV9140
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const IdentitySubRemoved = {
    decode(event: Event) {
        let e = new IdentityIdentitySubRemovedEvent(event)
        if (e.isV15) {
            const [sub, main, deposit] = e.asV15
            return {sub, main, deposit}
        } else if (e.isV9140) {
            return e.asV9140
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const IdentitySubRevoked = {
    decode(event: Event) {
        let e = new IdentityIdentitySubRevokedEvent(event)
        if (e.isV15) {
            const [sub, main, deposit] = e.asV15
            return {sub, main, deposit}
        } else if (e.isV9140) {
            return e.asV9140
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    IdentityCleared,
    IdentityKilled,
    IdentitySubRemoved,
    IdentitySubRevoked,
}
