export interface Type<T, R> {
    new (value: T): R
}

export interface Encodable {
    encode(): string
}

export interface Decodable {
    decode(): Uint8Array
}

export interface Deserializable<T> {
    deserialize(): T
}

export interface Serializable<T> {
    serialize(): T
}

export abstract class Enum<U extends {__kind: string; value?: any}> {
    constructor(protected value: U) {}

    match<
        S extends {
            [K in U['__kind']]?: (value: Extract<U, {__kind: K}>['value']) => any
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
