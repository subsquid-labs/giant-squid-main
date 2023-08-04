import {encode} from '@subsquid/ss58'
import {Display, Enum, Serialize, StaticLookup, Type} from '../../../interfaces'
import {toHex} from '@subsquid/substrate-processor'
import * as metadata from '@metadata/kusama/v1020'
import {Class} from 'type-fest'

function implements_<T>() {
    return <U extends T>(constructor: U) => constructor
}

function enum_<T extends Class<any>>() {
    return (constructor: T) => constructor as T & Class<{a(): number}>
}

export const AccountId32 = (prefix: number) => {
    @enum_()
    @implements_<Type<Uint8Array> & Display & Serialize>()
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

export const Address = <AccountId extends TypeConstructor>(AccountId: AccountId) =>
    class Address extends Enum({
        AccountId: AccountId,
    }) {}
export type Address<AccountId extends TypeConstructor> = ReturnType<typeof Address<AccountId>>

export const IdentityLookup = <AccountId extends TypeConstructor>(AccountId: AccountId) => {
    class IdentityLookup<AccountId extends TypeConstructor> {}

    interface IdentityLookup<AccountId extends TypeConstructor> extends StaticLookup<AccountId, AccountId> {}

    StaticLookup(IdentityLookup, {
        Source: AccountId,
        Target: AccountId,
        lookup(s: InstanceType<AccountId>) {
            return s
        },
        unlookup(t: InstanceType<AccountId>) {
            return t
        },
    })

    return IdentityLookup<AccountId>
}
export type IdentityLookup<AccountId extends TypeConstructor> = ReturnType<typeof IdentityLookup<AccountId>>

new (AccountId32(2))().format()
