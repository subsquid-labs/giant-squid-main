import {UnknownVersionError} from '../../../../utils'
import {
    IdentityIdentityClearedEvent,
    IdentityIdentityKilledEvent,
    IdentitySubIdentityRemovedEvent,
    IdentitySubIdentityRevokedEvent,
} from '../../types/events'
import {ChainContext, Event} from '../../types/support'

const IdentityCleared = {
    decode(ctx: ChainContext, event: Event) {
        let e = new IdentityIdentityClearedEvent(ctx, event)
        if (e.isV1030) {
            const [who, deposit] = e.asV1030
            return {who, deposit}
        } else if (e.isV9130) {
            return e.asV9130
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const IdentityKilled = {
    decode(ctx: ChainContext, event: Event) {
        let e = new IdentityIdentityKilledEvent(ctx, event)
        if (e.isV1030) {
            const [who, deposit] = e.asV1030
            return {who, deposit}
        } else if (e.isV9130) {
            return e.asV9130
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const SubIdentityRemoved = {
    decode(ctx: ChainContext, event: Event) {
        let e = new IdentitySubIdentityRemovedEvent(ctx, event)
        if (e.isV2015) {
            const [sub, main, deposit] = e.asV2015
            return {sub, main, deposit}
        } else if (e.isV9130) {
            return e.asV9130
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const SubIdentityRevoked = {
    decode(ctx: ChainContext, event: Event) {
        let e = new IdentitySubIdentityRevokedEvent(ctx, event)
        if (e.isV2015) {
            const [sub, main, deposit] = e.asV2015
            return {sub, main, deposit}
        } else if (e.isV9130) {
            return e.asV9130
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

export default {
    IdentityCleared,
    IdentityKilled,
    SubIdentityRemoved,
    SubIdentityRevoked,
}
