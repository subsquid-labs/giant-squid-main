import {toHex} from '@subsquid/substrate-processor'
import {Enum, Serializable} from '../../../../interfaces'
import type * as types from '@metadata/v1030'

export class Data extends Enum<types.Data> implements Serializable<string | undefined> {
    constructor(value: types.Data) {
        super(value)
    }

    serialize(): string | undefined {
        return this.match({
            None: () => undefined,
            BlakeTwo256: (b) => this.serializeHash(b),
            Keccak256: (b) => this.serializeHash(b),
            Sha256: (b) => this.serializeHash(b),
            ShaThree256: (b) => this.serializeHash(b),
            Raw0: (b) => this.serializeRaw(b),
            Raw1: (b) => this.serializeRaw(b),
            Raw2: (b) => this.serializeRaw(b),
            Raw3: (b) => this.serializeRaw(b),
            Raw4: (b) => this.serializeRaw(b),
            Raw5: (b) => this.serializeRaw(b),
            Raw6: (b) => this.serializeRaw(b),
            Raw7: (b) => this.serializeRaw(b),
            Raw8: (b) => this.serializeRaw(b),
            Raw9: (b) => this.serializeRaw(b),
            Raw10: (b) => this.serializeRaw(b),
            Raw11: (b) => this.serializeRaw(b),
            Raw12: (b) => this.serializeRaw(b),
            Raw13: (b) => this.serializeRaw(b),
            Raw14: (b) => this.serializeRaw(b),
            Raw15: (b) => this.serializeRaw(b),
            Raw16: (b) => this.serializeRaw(b),
            Raw17: (b) => this.serializeRaw(b),
            Raw18: (b) => this.serializeRaw(b),
            Raw19: (b) => this.serializeRaw(b),
            Raw20: (b) => this.serializeRaw(b),
            Raw21: (b) => this.serializeRaw(b),
            Raw22: (b) => this.serializeRaw(b),
            Raw23: (b) => this.serializeRaw(b),
            Raw24: (b) => this.serializeRaw(b),
            Raw25: (b) => this.serializeRaw(b),
            Raw26: (b) => this.serializeRaw(b),
            Raw27: (b) => this.serializeRaw(b),
            Raw28: (b) => this.serializeRaw(b),
            Raw29: (b) => this.serializeRaw(b),
            Raw30: (b) => this.serializeRaw(b),
            Raw31: (b) => this.serializeRaw(b),
            Raw32: (b) => this.serializeRaw(b),
        })
        // switch (this.value.__kind) {
        //     case 'None':
        //         return undefined
        //     case 'BlakeTwo256':
        //     case 'Keccak256':
        //     case 'Sha256':
        //     case 'ShaThree256':
        //         return Buffer.from(this.value.value).toString('hex')
        //     case 'Raw0':
        //     case 'Raw1':
        //     case 'Raw2':
        //     case 'Raw3':
        //     case 'Raw4':
        //     case 'Raw5':
        //     case 'Raw6':
        //     case 'Raw7':
        //     case 'Raw8':
        //     case 'Raw9':
        //     case 'Raw10':
        //     case 'Raw11':
        //     case 'Raw12':
        //     case 'Raw13':
        //     case 'Raw14':
        //     case 'Raw15':
        //     case 'Raw16':
        //     case 'Raw17':
        //     case 'Raw18':
        //     case 'Raw19':
        //     case 'Raw20':
        //     case 'Raw21':
        //     case 'Raw22':
        //     case 'Raw23':
        //     case 'Raw24':
        //     case 'Raw25':
        //     case 'Raw26':
        //     case 'Raw27':
        //     case 'Raw28':
        //     case 'Raw29':
        //     case 'Raw30':
        //     case 'Raw31':
        //     case 'Raw32':
        //         Buffer.from(this.value.value)
        //             .toString('utf-8')
        //             .replace(/\u0000/g, '')
        //     default:
        //         throw new Error(`Unexpected case: ${this.value.__kind}`)
        // }
    }

    private serializeRaw(buffer: Uint8Array) {
        return Buffer.from(buffer)
            .toString('utf-8')
            .replace(/\u0000/g, '')
    }

    private serializeHash(buffer: Uint8Array) {
        return toHex(buffer)
    }
}

export class IdentityJudgement extends Enum<types.IdentityJudgement> {
    constructor(value: types.IdentityJudgement) {
        super(value)
    }
}

export class IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint: Uint8Array | undefined
    image: Data

    constructor(private value: types.IdentityInfo) {
        this.display = new Data(value.display)
        this.legal = new Data(value.legal)
        this.web = new Data(value.web)
        this.riot = new Data(value.riot)
        this.email = new Data(value.email)
        this.pgpFingerprint = value.pgpFingerprint
        this.image = new Data(value.image)
        this.additional = value.additional.map((a) => [new Data(a[0]), new Data(a[1])])
    }
}
