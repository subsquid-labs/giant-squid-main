import {In} from 'typeorm'
import {BatchContext, toHex} from '@subsquid/substrate-processor'
import {CallItem, EventItem} from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import {Store} from '@subsquid/typeorm-store'
import {chain} from '../chain'
import {Account, NativeTransfer, Transfer, TransferDirection} from '../model'
import {processItem, splitIntoBatches, toEntityMap} from '../utils'

type Item =
    | EventItem<
          'Balances.Transfer',
          {
              event: {
                  args: true
                  extrinsic: {hash: true}
              }
          }
      >
    | EventItem<'*', false>
    | CallItem<'*', false>

export interface TransferData {
    id: string
    blockNumber: number
    timestamp: Date
    extrinsicHash?: string
    fromId: string
    toId: string
    amount: bigint
    success: boolean
}

export async function saveTransfers(ctx: BatchContext<Store, Item>) {
    const transfersData: TransferData[] = []

    const accountIds = new Set<string>()

    processItem(ctx.blocks, (block, item) => {
        switch (item.name) {
            case 'Balances.Transfer':
                const {from, to, ...e} = chain.api.events.balances.Transfer.decode(ctx, item.event)
                const fromId = chain.encodeAddress(from)
                const toId = chain.encodeAddress(to)
                accountIds.add(fromId).add(toId)

                transfersData.push({
                    id: item.event.id,
                    blockNumber: block.height,
                    timestamp: new Date(block.timestamp),
                    extrinsicHash: item.event.extrinsic?.hash,
                    fromId,
                    toId,
                    ...e,
                    success: true,
                })
                return
        }
    })

    const a: Account[] = []
    for (let batch of splitIntoBatches([...accountIds], 1000)) {
        let res = await ctx.store.findBy(Account, {id: In(batch)})
        a.push(...res)
    }
    const accounts = toEntityMap(a)

    const transfers: NativeTransfer[] = []
    const accountTransfers: Transfer[] = []
    for (let {fromId, toId, ...data} of transfersData) {
        let from = accounts.get(fromId)
        if (!from) {
            from = createAccount(fromId)
            accounts.set(from.id, from)
        }

        let to = accounts.get(toId)
        if (!to) {
            to = createAccount(toId)
            accounts.set(to.id, to)
        }

        let transfer = new NativeTransfer({
            ...data,
            from,
            to,
        })

        transfers.push(transfer)

        accountTransfers.push(
            new Transfer({
                id: transfer.id + '-to',
                transfer,
                account: to,
                direction: TransferDirection.To,
            }),
            new Transfer({
                id: transfer.id + '-from',
                transfer,
                account: from,
                direction: TransferDirection.From,
            })
        )
    }

    await ctx.store.save([...accounts.values()])
    await ctx.store.insert(transfers)
    await ctx.store.insert(accountTransfers)
}

function createAccount(id: string) {
    return new Account({
        id: id,
        publicKey: toHex(chain.decodeAddress(id)),
    })
}
