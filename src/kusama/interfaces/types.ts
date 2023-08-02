import assert from 'assert'
import {Block, Call, ChainContext, Event} from '.'
import {applyMixins} from '@gs/util/misc'
import {
    Class,
    ConditionalExcept,
    ConditionalKeys,
    ConditionalPick,
    Constructor,
    Entries,
    Simplify,
    StringKeyOf,
    ValueOf,
} from 'type-fest'

export class Type<T> {
    constructor(readonly __value: T) {}
}

export type TypeConstructor<T = any> = Constructor<Type<T>>

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

export const Display = <C extends Constructor<any>>(
    base: C,
    implementation: Display<any> & ThisType<InstanceType<C>>
) => {
    applyMixins(base, implementation)
}
export interface Display<T> {
    format(): T
}

export const Serialize = <C extends Constructor<any>>(
    base: C,
    implementation: Serialize<any> & ThisType<InstanceType<C>>
) => {
    applyMixins(base, implementation)
}
export interface Serialize<T> {
    serialize(): T
}

export const StaticLookup = <C extends Constructor<any>>(
    base: C,
    implementation: StaticLookup<any, any> & ThisType<InstanceType<C>>
) => {
    applyMixins(base, implementation)
}
export interface StaticLookup<Target extends TypeConstructor, Source extends TypeConstructor> {
    readonly Source: Source
    readonly Target: Target

    lookup(s: InstanceType<Source>): InstanceType<Target>
    unlookup(t: InstanceType<Target>): InstanceType<Source>
}

type RawType =
    | TypeConstructor
    | StringConstructor
    | NumberConstructor
    | BigIntConstructor
    | Uint8ArrayConstructor
    | null
    | [RawType]

type ConvertType<T> = T extends TypeConstructor<infer V>
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
    [K: string]: RawType
}

export const Enum = <T extends EnumConfig>(config: T) => {
    abstract class Enum extends Type<EnumEntry<T>> {
        match<
            M extends {
                [K in keyof T]?: (...args: T[K] extends Constructor<any> ? [InstanceType<T[K]>] : []) => any
            } & {
                _?: () => any
            }
        >(map: M): ReturnType<Exclude<M[keyof M], undefined>> {
            const kind = this.__value.__kind as keyof T

            const fn = map[kind]
            if (fn != null) {
                const constructor = config[kind]

                switch (constructor) {
                    case String:
                    case Number:
                    case BigInt:
                    case Uint8Array:
                        return fn(this.__value.value)
                    case null:
                    case undefined:
                        return fn()
                    default:
                        const c = constructor as TypeConstructor
                        assert(c.prototype instanceof Type, `${c}`)
                        return fn(new c(this.__value.value) as any)
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
