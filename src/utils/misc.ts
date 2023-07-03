import {
  BlockData,
  decodeHex,
  SubstrateBlock,
  toHex,
} from '@subsquid/substrate-processor'
import { encode, decode, registry } from '@subsquid/ss58'
import { chain } from '../chain'

export function encodeAddress(address: Uint8Array) {
  if (chain.config.prefix) {
    return encode({
      bytes: address,
      prefix: chain.config.prefix,
    })
  } else {
    return toHex(address)
  }
}

export function decodeAddress(address: string) {
  if (chain.config.prefix) {
    return decode(address).bytes
  }
  else {
    return Uint8Array.from(decodeHex(address))
  }
}

export function processItem<I>(
  blocks: BlockData<I>[],
  fn: (block: SubstrateBlock, item: I) => void
) {
  for (let block of blocks) {
    for (let item of block.items) {
      fn(block.header, item)
    }
  }
}

export function getOriginAccountId(origin: any): Uint8Array | undefined {
  if (
    origin &&
    origin.__kind === 'system' &&
    origin.value.__kind === 'Signed'
  ) {
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

export function toEntityMap<T extends { id: string }>(
  entities: T[]
): Map<string, T> {
  return new Map(entities.map((e) => [e.id, e]))
}

export function* splitIntoBatches<T>(
  list: T[],
  maxBatchSize: number
): Generator<T[]> {
  if (list.length <= maxBatchSize) {
    yield list
  } else {
    let offset = 0
    while (list.length - offset > maxBatchSize) {
      yield list.slice(offset, offset + maxBatchSize)
      offset += maxBatchSize
    }
    yield list.slice(offset)
  }
}
