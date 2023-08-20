import {Block, BlockHeader, Call, ChainContext, Event} from '.'
import {implements_} from '~util/decorator'
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

export interface From {
    new (...args: any[]): {}

    from(value: any): InstanceType<this>
}

export interface Lookup<Target extends Parameter = Parameter, Source extends Parameter = Parameter> {
    readonly Source: Source
    readonly Target: Target

    lookup(s: InstanceType<Source>): InstanceType<Target>
}

export interface StaticLookup<Target extends Parameter, Source extends Parameter> {
    Source: Source
    Target: Target

    lookup(s: InstanceType<Source>): InstanceType<Target>
    unlookup(t: InstanceType<Target>): InstanceType<Source>
}

// export const None = null
// export type None = null

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
    [K in T['__kind'] as EnumEntry<T, K> extends {value: any} ? K : never]?: Parameter
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
                                    ? E[K] extends Parameter
                                        ? InstanceType<E[K]>
                                        : U['value']
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
                        if (type == null) {
                            return fn(this.__value.value)
                        } else {
                            return fn(new type(this.__value.value) as any)
                        }
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
