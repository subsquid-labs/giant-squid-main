import {encode, decode} from '@subsquid/ss58'

import api from './api'

export function encodeAddress(address: Uint8Array) {
    return encode({
        bytes: address,
        prefix: __prefix__
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