import {encode} from '@subsquid/ss58'
import {Encodable, Serializable} from '../../../interfaces'
import {toHex} from '@subsquid/substrate-processor'

export abstract class AccountId32 implements Encodable, Serializable<string> {
    protected abstract prefix: number

    constructor(private value: Uint8Array) {}

    static withPrefix(prefix: number) {
        class AccountId32WithPrefix extends AccountId32 {
            protected prefix = prefix
        }

        return AccountId32WithPrefix
    }

    encode(): string {
        return encode({
            bytes: this.value,
            prefix: this.prefix,
        })
    }

    serialize(): string {
        return toHex(this.value)
    }
}
