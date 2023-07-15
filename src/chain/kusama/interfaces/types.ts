export interface Encodable {
    encode(value: Uint8Array): string
}

export interface Decodable {
    decode(value: string): Uint8Array
}
