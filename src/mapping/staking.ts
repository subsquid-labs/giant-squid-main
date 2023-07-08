import {StoreWithCache} from '@belopash/squid-tools'
import {DataHandlerContext, SubstrateBlock, assertNotNull} from '@subsquid/substrate-processor'
import {CallItem, EventItem} from '@subsquid/substrate-processor/lib/interfaces/data-selection'
import {Action, EnsureAccount, RewardAction, TransferAction} from '../action'
import {chain} from '../chain'
import {Account, Era, EraValidator, Staker} from '../model'
import {encodeAddress} from '../utils'
import assert from 'assert'

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

export function getStakingActions(
    ctx: DataHandlerContext<StoreWithCache, unknown>,
    block: SubstrateBlock,
    item: Item
) {
    const actions: Action[] = []

    const itemName = item.name.split('.')[1]
    switch (item.kind) {
        case 'event': {
            switch (itemName) {
                case 'Reward': {
                    const decodeEvent = () => {
                        assert('staking' in chain.api.events)
                        switch (item.name) {
                            case 'Staking.Reward':
                                return chain.api.events.staking.Rewarded.decode(ctx, item.event)
                            case 'Staking.Rewarded':
                                return chain.api.events.staking.Rewarded.decode(ctx, item.event)
                            default:
                                throw new Error()
                        }
                    }
                    const e = decodeEvent()
                    if (e == null) break

                    const stakerId = encodeAddress(e.stash)
                    const staker = ctx.store.defer(Staker, stakerId, {payee: true})

                    const getRewardInfo = () => {
                        assert('calls' in chain.api)
                        assert('staking' in chain.api.calls)

                        if (item.event.call?.name.split('.')[1] === 'payout_stakers') {
                            const c = chain.api.calls.staking.payout_stakers.decode(ctx, item.event.call)

                            const era = ctx.store.defer(Era, c.era.toString())
                            const validator = ctx.store.defer(
                                EraValidator,
                                `${era.toString()}-${encodeAddress(c.validatorStash)}}`
                            )

                            return {
                                era,
                                validator,
                            }
                        } else {
                            return undefined
                        }
                    }
                    const info = getRewardInfo()

                    actions.push(
                        new RewardAction(block, item.event.extrinsic, {
                            id: item.event.id,
                            staker: () => staker.getOrFail(),
                            account: () =>
                                staker
                                    .getOrFail()
                                    .then((s) => assertNotNull(s.payee, `Missing payee for staker ${stakerId}`)),
                            amount: e.amount,
                            era: () => info?.era.getOrFail(),
                            validator: () => info?.validator.getOrFail(),
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
