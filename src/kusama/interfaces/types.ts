import assert from 'assert'
import {Block, Call, ChainContext, Event} from '.'
import {applyMixins} from '@gs/util/misc'
import {ConditionalExcept, ConditionalPick, Class, Simplify, ValueOf, Constructor} from 'type-fest'

// export class Type<T> {
//     constructor(readonly __value: T) {}
// }

export interface Type<T = any> {
    new (__value: T): {
        __value: T
    }
}

// export type Type<any><T = any> = Type<T>

// export type TypeConstructor<T extends any> = Type

// export type InstanceSubstrateType<T extends Type<any>> = T['prototype']

export type EventType<T> = {
    new (ctx: ChainContext, event: Event): T
}

export type CallType<T> = {
    new (ctx: ChainContext, call: Call): T
}

export type StorageType<K extends any[], V> = {
    new (ctx: ChainContext, block: Block, ...keys: K): {
        readonly value: Promise<V>
    }
}

export type ConstantType<T> = {
    new (ctx: ChainContext): {
        readonly value: T
    }
}

export const Display = <C extends Class<any>>(base: C, implementation: Display<any> & ThisType<InstanceType<C>>) => {
    applyMixins(base, implementation)
}
export interface Display {
    new (...args: any[]): {
        format(): string
    }
}

// export const Serialize = <C extends Class<any>>(
//     base: C,
//     implementation: Serialize<any> & ThisType<InstanceType<C>>
// ) => {
//     applyMixins(base, implementation)
// }
export interface Serialize {
    new (...args: any[]): {
        serialize(): string
    }
}

export const StaticLookup = <C extends Class<any>, Target extends Type<any>, Source extends Type<any> = Type<unknown>>(
    base: C,
    implementation: StaticLookup<Target, Source> & ThisType<InstanceType<C>>
) => {
    applyMixins(base, implementation)
}
export interface StaticLookup<Target extends Type<any>, Source extends Type<any> = Type<unknown>> {
    readonly Source: Source
    readonly Target: Target

    new (): any

    lookup(s: InstanceType<Source>): InstanceType<Target>
    unlookup(t: InstanceType<Target>): InstanceType<Source>
}

type EnumType =
    | Type<any>
    | StringConstructor
    | NumberConstructor
    | BigIntConstructor
    | Uint8ArrayConstructor
    | null
    | [EnumType]

type ConvertType<T> = T extends Type<infer V>
    ? V
    : T extends Uint8ArrayConstructor
    ? Uint8Array
    : T extends NumberConstructor
    ? number
    : T extends BigIntConstructor
    ? bigint
    : T extends StringConstructor
    ? string
    : T extends [infer R]
    ? ConvertType<R>[]
    : never

type EnumEntry<E extends EnumConfig> = Simplify<
    ValueOf<
        {
            [K in keyof ConditionalExcept<E, null>]: {
                __kind: K
                value: ConvertType<E[K]>
            }
        } & {
            [K in keyof ConditionalPick<E, null>]: {
                __kind: K
            }
        }
    >
>

// type EnumEntry<K, V> = {
//     __kind: K
//     value?: V
// }

type EnumConfig = {
    [K: string]: EnumType
}

export const Enum = <T extends EnumConfig>(config: T) => {
    abstract class Enum extends Type<EnumEntry<T>> {
        match<
            M extends {
                [K in keyof T]?: (value: T[K] extends Type<any> ? InstanceType<T[K]> : never) => any
            } & {
                _?: () => any
            }
        >(map: M): ReturnType<Exclude<M[keyof M], undefined>> {
            const kind = this.__value.__kind as keyof T

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
                            const c = t as Type<any>
                            assert(c.prototype instanceof Type, `${c}`)
                            return new c(raw)
                    }
                }

                if (Array.isArray(type)) {
                    return fn(this.__value.value.map((v: any) => getValue(type[0], v)))
                } else {
                    return fn(getValue(type, this.__value.value) as any)
                }
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
