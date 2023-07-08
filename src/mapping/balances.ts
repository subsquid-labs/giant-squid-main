import {StoreWithCache} from '@belopash/squid-tools'
import {DataHandlerContext, SubstrateBlock} from '@subsquid/substrate-processor'
import {CallItem, EventItem} from '@subsquid/substrate-processor/lib/interfaces/data-selection'
import {Action, EnsureAccount, TransferAction} from '../action'
import {chain} from '../chain'
import {Account} from '../model'
import {encodeAddress} from '../utils'

type Item =
    | EventItem<
          string,
          {
              event: {
                  name: string
                  args: true
                  extrinsic: {
                      hash: true
                  }
              }
          }
      >
    | CallItem<
          string,
          {
              call: {
                  name: string
                  args: true
              }
              extrinsic: {
                  hash: true
              }
          }
      >

export function getBalancesActions(
    ctx: DataHandlerContext<StoreWithCache, unknown>,
    block: SubstrateBlock,
    item: Item
) {
    const actions: Action[] = []

    const itemName = item.name.split('.')[1]
    switch (item.kind) {
        case 'event': {
            switch (itemName) {
                case 'Transfer': {
                    const data = chain.api.events.balances.Transfer.decode(ctx, item.event)

                    const fromId = encodeAddress(data.from)
                    const from = ctx.store.defer(Account, fromId)

                    const toId = encodeAddress(data.to)
                    const to = ctx.store.defer(Account, toId)

                    actions.push(
                        new EnsureAccount(block, item.event.extrinsic, {
                            account: () => from.get(),
                            id: fromId,
                        }),
                        new EnsureAccount(block, item.event.extrinsic, {
                            account: () => to.get(),
                            id: toId,
                        }),
                        new TransferAction(block, item.event.extrinsic, {
                            id: item.event.id,
                            fromId,
                            toId,
                            amount: data.amount,
                            success: true,
                        })
                    )
                    break
                }
            }
            break
        }
        case 'call': {
            break
        }
    }

    return actions
}
