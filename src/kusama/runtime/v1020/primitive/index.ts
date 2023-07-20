import {encode} from '@subsquid/ss58'
import {Display, Enum, Serialize} from '../../../interfaces'
import {toHex} from '@subsquid/substrate-processor'
import * as metadata from '@metadata/v1020'

export abstract class AccountId32 implements InstanceType<Display<string> & Serialize<string>> {
    protected abstract prefix: number

    constructor(private value: Uint8Array) {}

    static withPrefix(prefix: number) {
        class AccountId32WithPrefix extends AccountId32 {
            protected prefix = prefix
        }

        return AccountId32WithPrefix
    }

    format(): string {
        return encode({
            bytes: this.value,
            prefix: this.prefix,
        })
    }

    serialize(): string {
        return toHex(this.value)
    }
}

export class Address extends Enum<metadata.LookupSource> {}
