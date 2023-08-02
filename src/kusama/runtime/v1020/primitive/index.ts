import {encode} from '@subsquid/ss58'
import {Display, Enum, Serialize, StaticLookup, Type} from '../../../interfaces'
import {toHex} from '@subsquid/substrate-processor'
import * as metadata from '@metadata/kusama/v1020'

export const AccountId32 = (prefix: number) =>
    class AccountId32 implements Display<string>, Serialize<string> {
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
export type AccountId32 = ReturnType<typeof AccountId32>

export const Address = <AccountId extends typeof Type<any>>(AccountId: AccountId) =>
    class Address extends Enum({
        AccountId: AccountId,
    }) {}
export type Address<AccountId extends typeof Type<any>> = ReturnType<typeof Address<AccountId>>

export const IdentityLookup = <AccountId extends typeof Type<any>>(AccountId: AccountId) => {
    class IdentityLookup<AccountId extends typeof Type<any>> {}

    interface IdentityLookup<AccountId extends typeof Type<any>> extends StaticLookup<AccountId, AccountId> {}

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

    return IdentityLookup
}
export type IdentityLookup<AccountId extends typeof Type<any>> = ReturnType<typeof IdentityLookup<AccountId>>
