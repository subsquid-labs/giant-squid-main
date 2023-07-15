import {encode} from '@subsquid/ss58'
import {Encodable} from '../../../interfaces'

export class AccountId32 implements Encodable {
    constructor(private prefix: number) {}

    encode(value: Uint8Array): string {
        return encode({
            bytes: value,
            prefix: this.prefix,
        })
    }
}
