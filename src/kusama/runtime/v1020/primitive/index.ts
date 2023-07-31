import {encode} from '@subsquid/ss58'
import {Display, Enum, Serialize} from '../../../interfaces'
import {toHex} from '@subsquid/substrate-processor'
import * as metadata from '@metadata/kusama/v1020'

export const AccountId32 = (prefix: number) =>
    class AccountId32 implements InstanceType<Display<string> & Serialize<string>> {
        protected prefix = prefix

        constructor(readonly value: Uint8Array) {}

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
