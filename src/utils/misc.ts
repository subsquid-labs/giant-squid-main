import {BatchBlock, decodeHex, SubstrateBlock} from '@subsquid/substrate-processor'

export function processItem<I>(blocks: BatchBlock<I>[], fn: (block: SubstrateBlock, item: I) => void) {
    for (let block of blocks) {
        for (let item of block.items) {
            fn(block.header, item)
        }
    }
}

export function getOriginAccountId(origin: any): Uint8Array | undefined {
    if (origin && origin.__kind === 'system' && origin.value.__kind === 'Signed') {
        const id = origin.value.value
        if (id.__kind === 'Id') {
            return decodeHex(id.value)
        } else {
            return decodeHex(id)
        }
    } else {
        return undefined
    }
}

export function toEntityMap<T extends {id: string}>(entities: T[]): Map<string, T> {
    return new Map(entities.map((e) => [e.id, e]))
}
