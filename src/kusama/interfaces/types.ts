import {Block, Call, ChainContext, Event} from '.'

export interface Type<T> {
    new (value: T): unknown
}

export type EventType<T> = {
    new (ctx: ChainContext, event: Event): T
}

export type CallType<T> = {
    new (ctx: ChainContext, call: Call): T
}

export type StorageType<K extends any[], V> = {
    new (ctx: ChainContext, block: Block): {
        get(...keys: K): Promise<V>
    }
}

export type ConstantType<T> = {
    new (ctx: ChainContext): T
}

export interface Display<T> {
    new (...args: any): {
        format(): T
    }
}

export interface Serialize<T> {
    new (...args: any): {
        serialize(): T
    }
}

export interface StaticLookup<Target extends Type<any>> {
    lookup(s: unknown): InstanceType<Target>
    unlookup(t: InstanceType<Target>): unknown
}

type EnumEntry<K extends string, V> = {__kind: K; value?: V}

export abstract class Enum<U extends EnumEntry<string, any>> {
    constructor(protected value: U) {}

    match<
        S extends {
            [K in U['__kind']]?: (value: Extract<U, EnumEntry<K, any>>['value']) => any
        } & {
            _?: () => any
        }
    >(s: S): ReturnType<Exclude<S[keyof S], undefined>> {
        const fn = s[this.value.__kind as U['__kind']]
        if (fn == null) {
            const _ = s._
            if (_ == null) {
                throw new Error()
            } else {
                return _()
            }
        } else {
            return fn(this.value.value)
        }
    }

    eq(kind: keyof U) {
        return this.value.__kind === kind
    }
}
