import {encode} from '@subsquid/ss58'
import {Display, Enum, Serialize, StaticLookup, Type, TypeConstructor} from '../../../interfaces'
import {toHex} from '@subsquid/substrate-processor'
import * as metadata from '@metadata/kusama/v1020'
import {Class} from 'type-fest'

export const AccountId32 = (prefix: number) =>
    class AccountId32 extends Type<Uint8Array> implements Display<string>, Serialize<string> {
        protected prefix = prefix

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
