import {DataNotDecodableError, UnknownVersionError} from '@gs/util/errors'
import {IdentityClearIdentityCall} from '../../types/calls'
import {
    IdentityAddSubCall,
    IdentityProvideJudgementCall,
    IdentityRenameSubCall,
    IdentitySetIdentityCall,
    IdentitySetSubsCall,
} from '../../types/calls'
import {ChainContext, Call} from '../../types/support'

const set_identity = {
    decode(ctx: ChainContext, call: Call) {
        let e = new IdentitySetIdentityCall(ctx, call)
        if (e.isV5) {
            return e.asV5.info
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const set_subs = {
    decode(ctx: ChainContext, call: Call) {
        let e = new IdentitySetSubsCall(ctx, call)
        if (e.isV5) {
            return e.asV5
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const provide_judgement = {
    decode(ctx: ChainContext, call: Call) {
        let e = new IdentityProvideJudgementCall(ctx, call)
        if (e.isV5) {
            return e.asV5
        } else if (e.isV28) {
            const data = e.asV28
            if (data.target.__kind === 'Id') return {...data, target: data.target.value}
            else throw new DataNotDecodableError(e, data)
        } else if (e.isV9110) {
            const data = e.asV9110
            if (data.target.__kind === 'Id') return {...data, target: data.target.value}
            else throw new DataNotDecodableError(e, data)
        } else if (e.isV9300) {
            const data = e.asV9300
            if (data.target.__kind === 'Id') return {...data, target: data.target.value}
            else throw new DataNotDecodableError(e, data)
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const add_sub = {
    decode(ctx: ChainContext, call: Call) {
        let e = new IdentityAddSubCall(ctx, call)
        if (e.isV15) {
            return e.asV15
        } else if (e.isV28) {
            const data = e.asV28
            if (data.sub.__kind !== 'Index') return {...data, sub: data.sub.value}
            else throw new DataNotDecodableError(e, data)
        } else if (e.isV9110) {
            const data = e.asV9110
            if (data.sub.__kind !== 'Index') return {...data, sub: data.sub.value}
            else throw new DataNotDecodableError(e, data)
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

const rename_sub = {
    decode(ctx: ChainContext, call: Call) {
        let e = new IdentityRenameSubCall(ctx, call)
        if (e.isV15) {
            return e.asV15
        } else if (e.isV28) {
            const data = e.asV28
            if (data.sub.__kind !== 'Index') return {...data, sub: data.sub.value}
            else throw new DataNotDecodableError(e, data)
        } else if (e.isV9110) {
            const data = e.asV9110
            if (data.sub.__kind !== 'Index') return {...data, sub: data.sub.value}
            else throw new DataNotDecodableError(e, data)
        } else {
            throw new UnknownVersionError(e)
        }
    },
}

// const clear_identity = {
//     decode(ctx: ChainContext, call: Call) {
//         let e = new IdentityClearIdentityCall(ctx, call)
//         if (e.isV1030) {
//             return e.asV1030
//         } else if (e.isV28) {
//             const data = e.asV28
//             if (data.sub.__kind !== 'Index') return {...data, sub: data.sub.value}
//             else throw new DataNotDecodableError(e, data)
//         } else if (e.isV9110) {
//             const data = e.asV9110
//             if (data.sub.__kind !== 'Index') return {...data, sub: data.sub.value}
//             else throw new DataNotDecodableError(e, data)
//         } else {
//             throw new UnknownVersionError(e)
//         }
//     },
// }

export default {
    set_identity,
    set_subs,
    add_sub,
    rename_sub,
    provide_judgement,
}
