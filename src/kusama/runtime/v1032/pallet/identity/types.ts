import type * as types from '@metadata/v1032'
import {Data} from '../../../v1030/pallet/identity'

export {Data}

export class IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint: Uint8Array | undefined
    image: Data
    twitter: Data

    constructor(private value: types.IdentityInfo) {
        this.display = new Data(value.display)
        this.legal = new Data(value.legal)
        this.web = new Data(value.web)
        this.riot = new Data(value.riot)
        this.email = new Data(value.email)
        this.pgpFingerprint = value.pgpFingerprint
        this.image = new Data(value.image)
        this.twitter = new Data(value.twitter)
        this.additional = value.additional.map((a) => [new Data(a[0]), new Data(a[1])])
    }
}
