import { In } from 'typeorm'
import { BatchContext, decodeHex, toHex } from '@subsquid/substrate-processor'
import {
  CallItem,
  EventItem,
} from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { chain } from '../chain'
import { Account, SignedExtrinsic } from '../model'
import { processItem, splitIntoBatches, toEntityMap } from '../utils'

type Item = CallItem<
  '*',
  {
    call: {}
    extrinsic: true
  }
>

export async function saveExtrinsics(ctx: BatchContext<Store, Item>) {
  const accounts = new Map<string, Account>()
  const extrinsics = new Map<string, SignedExtrinsic>()

  processItem(ctx.blocks, (block, item) => {
    switch (item.kind) {
      case 'call': {
        const { extrinsic }: Item = item
        const rawAddress =
          extrinsic.signature?.address?.value || extrinsic?.signature?.address

        if (rawAddress) {
          const encodedAddress = chain.encodeAddress(decodeHex(rawAddress))
          const account = new Account({
            id: encodedAddress,
            publicKey: rawAddress,
          })
          accounts.set(account.id, account)

          const extrinsicId = item.extrinsic.id
          if (!extrinsics.get(extrinsicId))
            extrinsics.set(
              extrinsicId,
              new SignedExtrinsic({
                id: item.extrinsic.id,
                timestamp: new Date(block.timestamp),
                blockNumber: block.height,
                extrinsicHash: extrinsic.hash,
                callName: item.call.name,
                fee: extrinsic.fee,
                account,
              })
            )
        }
      }
    }
  })
  
  await ctx.store.save([...accounts.values()])
  await ctx.store.insert([...extrinsics.values()])
}
