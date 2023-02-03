import {decodeHex, toHex} from '@subsquid/substrate-processor'

import api from './api'

export function encodeAddress(address: Uint8Array) {
    return toHex(address)
}

export function decodeAddress(address: string) {
    return Uint8Array.from(decodeHex(address))
}

export default {
    api,
    decodeAddress,
    encodeAddress,
}
