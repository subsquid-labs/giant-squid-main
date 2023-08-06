import {encode} from '@subsquid/ss58'
import {toHex} from '@subsquid/substrate-processor'
import {Constructor} from 'type-fest'
import {Display, Enum, Lookup, Serialize, StaticLookup, Parameter} from '../../../interfaces'
import {implements_} from '@gs/util/decorator'
import * as metadata from '@metadata/kusama/v1020'

export const AccountId32 = (prefix: number) => {
    @implements_<Parameter<Uint8Array> & Display & Serialize>()
    class AccountId32 {
        protected prefix = prefix

        constructor(readonly __value: Uint8Array) {}

        format(): string {
            return encode({
                bytes: this.__value,
                prefix: this.prefix,
            })
        }

        serialize(): string {
            return toHex(this.__value)
        }
    }

    return AccountId32
}
export type AccountId32 = ReturnType<typeof AccountId32>

const a = AccountId32(2)

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
