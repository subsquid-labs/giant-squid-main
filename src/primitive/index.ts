import {Display, Enum, From, Lookup, Parameter, Serialize, StaticLookup} from '~interfaces'
import {implements_} from '~util/decorator'
import * as ss58 from '@subsquid/ss58'
import {decodeHex, toHex} from '@subsquid/substrate-processor'
import assert from 'assert'
import {Constructor} from 'type-fest'

export function AccountId32(prefix: number) {
    @implements_<Parameter<Uint8Array> & Display & Serialize & From>()
    class AccountId32 {
        readonly prefix = prefix

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

export type AddressRaw =
    | {
          __kind: `Idx${number}`
      }
    | {
          __kind: 'IdxU32'
          value: number
      }
    | {
          __kind: 'IdxU64'
          value: bigint
      }
    | {
          __kind: 'AccountId'
          value: Uint8Array
      }

export const Address = <AccountId extends Parameter>(AccountId: AccountId) =>
    class Address extends Enum<AddressRaw>()({
        AccountId: AccountId,
    }) {}

export type Address<AccountId extends Parameter> = ReturnType<typeof Address<AccountId>>

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

@implements_<Parameter<Uint8Array> & Serialize>()
export class Raw {
    constructor(readonly __value: Uint8Array) {}

    serialize() {
        return Buffer.from(this.__value)
            .toString('utf-8')
            .replace(/\u0000/g, '')
    }
}

export type MultiAddressRaw =
    | {
          __kind: 'Id'
          value: Uint8Array
      }
    | {
          __kind: 'Index'
          value: number
      }
    | {
          __kind: 'Raw'
          value: Uint8Array
      }
    | {
          __kind: 'Address32'
          value: Uint8Array
      }
    | {
          __kind: 'Address20'
          value: Uint8Array
      }
export const MultiAddress = <AccountId extends Parameter>(AccountId: AccountId) => {
    class MultiAddress extends Enum<MultiAddressRaw>()({
        Raw,
        Id: AccountId,
    }) {}

    return MultiAddress
}
export type MultiAddress<AccountId extends Parameter> = ReturnType<typeof MultiAddress<AccountId>>

export const AccountIdLookup = <AccountId extends Parameter>(AccountId: AccountId) => {
    @implements_<StaticLookup<AccountId, MultiAddress<AccountId>>>()
    class AccountIdLookup {
        static Source = MultiAddress(AccountId)
        static Target = AccountId

        static lookup(s: InstanceType<MultiAddress<AccountId>>): InstanceType<AccountId> {
            return s.match({
                Id: (v) => v as any,
                _: () => {
                    throw new Error()
                },
            })
        }

        static unlookup(): never {
            throw new Error()
        }
    }

    return AccountIdLookup
}
export type AccountIdLookup<AccountId extends Parameter> = ReturnType<typeof AccountIdLookup<AccountId>>
