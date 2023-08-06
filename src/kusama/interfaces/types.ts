import {Block, BlockHeader, Call, ChainContext, Event} from '.'
import {implements_} from '@gs/util/decorator'
import assert from 'assert'
import {ConditionalExcept, ConditionalKeys, ConditionalPick, Constructor, Except, Simplify, ValueOf} from 'type-fest'

export interface Parameter<T = any> {
    new (value: T): {
        readonly __value: T
    }
}

export type EventType<T> = {
    new (event: Event): T
}

export type CallType<T> = {
    new (call: Call): T
}

export type StorageType<K extends any[], V> = {
    new (ctx: ChainContext, block: BlockHeader, ...keys: K): {
        readonly value: Promise<V>
    }
}

export type ConstantType<T> = {
    new (block: BlockHeader): {
        readonly value: T
    }
}

export interface Display {
    new (...args: any[]): {
        format(): string
    }
}

export interface Serialize {
    new (...args: any[]): {
        serialize(): string
    }
}

export interface Lookup<Target extends Constructor<any>, Source extends Constructor<any>> {
    readonly Source: Source
    readonly Target: Target

    lookup(s: InstanceType<Source>): InstanceType<Target>
}

export interface StaticLookup<Target extends Constructor<any>, Source extends Constructor<any>> {
    readonly Source: Source
    readonly Target: Target

    lookup(s: InstanceType<Source>): InstanceType<Target>
    unlookup(t: InstanceType<Target>): InstanceType<Source>
}

// export const None = null
// export type None = null

type PrimitiveType = StringConstructor | NumberConstructor | BigIntConstructor | Uint8ArrayConstructor

type ConvertPrimitiveType<T> = T extends Uint8ArrayConstructor
    ? Uint8Array
    : T extends NumberConstructor
    ? number
    : T extends BigIntConstructor
    ? bigint
    : T extends StringConstructor
    ? string
    : never

type ConvertType<T> = T extends PrimitiveType ? ConvertPrimitiveType<T> : T extends Parameter<infer R> ? R : never

type EnumRaw =
    | {
          __kind: string
      }
    | {
          __kind: string
          value: any
      }

type EnumEntry<E extends EnumRaw, K> = Extract<E, {__kind: K}>

type EnumConfig<T extends EnumRaw> = {
    [K in T['__kind'] as EnumEntry<T, K> extends {value: any} ? K : never]?: Parameter<any>
}

// type EnumCase<T extends EnumRaw, K, P extends Parameter<any>> = EnumEntry<T, K> extends infer Entry
//     ? Entry extends {value: any}
//         ? (value: InstanceType<P>) => any
//         : never
//     : never

export const Enum =
    <T extends EnumRaw>() =>
    <E extends EnumConfig<T>>(config: E) => {
        @implements_<Parameter<T>>()
        class Enum {
            constructor(readonly __value: T) {}

            match<
                M extends {
                    [K in T['__kind']]?: (
                        value: EnumEntry<T, K> extends infer U
                            ? U extends {value: any}
                                ? K extends keyof E
                                    ? E[K] extends infer R
                                        ? R extends undefined
                                            ? U['value']
                                            : R extends Parameter<any>
                                            ? InstanceType<R>
                                            : never
                                        : never
                                    : never
                                : never
                            : never
                    ) => any
                } & {
                    _?: () => any
                }
            >(map: M): ReturnType<Exclude<M[keyof M], undefined>> {
                const kind = this.__value.__kind

                const fn = map[kind]
                if (fn != null) {
                    const type = config[kind]

                    const getValue = (t: EnumType, raw: any) => {
                        switch (t) {
                            case String:
                            case Number:
                            case BigInt:
                            case Uint8Array:
                                return this.__value.value
                            case null:
                            case undefined:
                                return null
                            default:
                                const c = t as Parameter<any>
                                assert('__value' in c.prototype) // TODO: need better check
                                return new c(raw)
                        }
                    }

                    return fn(getValue(type, this.__value.value) as any)
                } else {
                    assert(map._ != null)
                    return map._()
                }
            }

            eq(kind: keyof T) {
                return this.__value.__kind === kind
            }
        }

        return Enum
    }
export type Enum<T extends EnumRaw> = ReturnType<typeof Enum<T>>
