import {Display, Enum, From, Lookup, Parameter, Serialize} from '@gs/interfaces'
import {implements_} from '@gs/util/decorator'
import * as metadata from '@metadata/kusama/v1020'
import * as ss58 from '@subsquid/ss58'
import {decodeHex, toHex} from '@subsquid/substrate-processor'
import assert from 'assert'
import {Constructor} from 'type-fest'

export function AccountId32(prefix: number) {
    @implements_<Parameter<Uint8Array> & Display & Serialize & From>()
    class AccountId32 {
        prefix = prefix

        constructor(readonly __value: Uint8Array) {}

        format(): string {
            return ss58.encode({
                bytes: this.__value,
                prefix: this.prefix,
            })
        }

        serialize(): string {
            return toHex(this.__value)
        }

        static from(value: any): AccountId32 {
            assert(typeof value === 'string')

            if (value.startsWith('0x')) {
                return new AccountId32(decodeHex(value))
            } else {
                return new AccountId32(ss58.decode(value).bytes)
            }
        }
    }

    return AccountId32
}
export type AccountId32 = ReturnType<typeof AccountId32>

export const Address = <AccountId extends Parameter<any>>(AccountId: AccountId) =>
    class Address extends Enum<metadata.LookupSource>()({
        AccountId: AccountId,
    }) {}

export type Address<AccountId extends Parameter<any>> = ReturnType<typeof Address<AccountId>>

export const IdentityLookup = <AccountId extends Constructor<any>>(AccountId: AccountId) => {
    @implements_<Lookup<AccountId, AccountId>>()
    class IdentityLookup {
        static Source = AccountId
        static Target = AccountId

        static lookup(s: InstanceType<AccountId>) {
            return s
        }
    }

    return IdentityLookup
}
export type IdentityLookup<AccountId extends Constructor<any>> = ReturnType<typeof IdentityLookup<AccountId>>
