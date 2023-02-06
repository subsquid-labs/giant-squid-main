import {encode, decode, registry} from '@subsquid/ss58'

import api from './api'

export function encodeAddress(address: Uint8Array) {
    return encode({
        bytes: address,
        prefix: registry.get('phala').prefix,
    })
}

export function decodeAddress(address: string) {
    return decode(address).bytes
}

export default {
    api,
    decodeAddress,
    encodeAddress,
}