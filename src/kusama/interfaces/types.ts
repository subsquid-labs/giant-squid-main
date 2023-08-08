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
    Source: Source
    Target: Target

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
    [K in T['__kind'] as EnumEntry<T, K> extends {value: any} ? K : never]: Parameter<any>
}

export const Enum =
    <T extends EnumRaw>() =>
    <E extends EnumConfig<T>>(config: E) => {
        @implements_<Parameter<T>>()
        class Enum {
            constructor(readonly __value: T) {}

            // FIXME: needs rework
            match<
                M extends {
                    [K in T['__kind']]?: (
                        value: EnumEntry<T, K> extends infer U
                            ? U extends {value: any}
                                ? K extends keyof E
                                    ? InstanceType<E[K]>
                                    : null
                                : null
                            : null
                    ) => any
                } & {
                    _?: () => any
                }
            >(map: M): ReturnType<Exclude<M[keyof M], undefined>> {
                const kind = this.__value.__kind as T['__kind']

                const fn = map[kind]
                if (fn != null) {
                    if (isKeyOf(config, kind)) {
                        assert('value' in this.__value)
                        const type = config[kind]
                        return fn(new type(this.__value.value) as any)
                    } else {
                        return fn(null as any)
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
export type Enum<T extends EnumRaw> = ReturnType<typeof Enum<T>>

function isKeyOf<T extends {}>(obj: T, key: string | number | symbol): key is keyof T {
    return key in obj
}
