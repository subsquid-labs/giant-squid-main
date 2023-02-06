import {encode, decode, registry} from '@subsquid/ss58'
import api from './api'

function encodeAddress(address: Uint8Array) {
    return encode({
        bytes: address,
        prefix: registry.get('kusama').prefix,
    })
}

function decodeAddress(address: string) {
    return decode(address).bytes
}

let kusama = {
    api,
    decodeAddress,
    encodeAddress,
}

export default kusama
