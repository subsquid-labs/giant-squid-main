import assert from 'assert'
import {In} from 'typeorm'
import {BatchContext, toHex} from '@subsquid/substrate-processor'
import {EventItem} from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import {Store} from '@subsquid/typeorm-store'
import {chain} from '../chain'
import {Account, StakingReward} from '../model'
import {processItem, toEntityMap, encodeAddress, decodeAddress} from '../utils'

type Item = EventItem<
    'Staking.Reward' | 'Staking.Rewarded',
    {
        event: {
            args: true
            extrinsic: {hash: true}
            call: {
                args: true
            }
        }
    }
>

interface RewardData {
    id: string
    blockNumber: number
    timestamp: Date
    extrinsicHash?: string
    amount: bigint
    accountId: string
    era?: number
    validatorId?: string
}

export async function saveRewards(ctx: BatchContext<Store, Item>) {
    const rewardsData: RewardData[] = []
    const accountIds = new Set<string>()

    processItem(ctx.blocks, (block, item) => {
        switch (item.name) {
            case 'Staking.Reward':
            case 'Staking.Rewarded': {
                
                assert('staking' in chain.api.events)
                assert('calls' in chain.api)
                assert('staking' in chain.api.calls)
            
                const e = chain.api.events.staking.Rewarded.decode(ctx, item.event)
                if (e == null) return // skip some old format rewards
                
                let accountId = encodeAddress(e.stash)
                accountIds.add(accountId)

                const data: RewardData = {
                    id: item.event.id,
                    blockNumber: block.height,
                    timestamp: new Date(block.timestamp),
                    extrinsicHash: item.event.extrinsic?.hash,
                    accountId,
                    amount: e.amount,
                }

                if (item.event.call?.name === 'Staking.payout_stakers') {
                    const c = chain.api.calls.staking.payout_stakers.decode(ctx, item.event.call)
                    data.validatorId = encodeAddress(c.validatorStash)
                    data.era = c.era
                }

                rewardsData.push(data)
                return
            }
        }
    })

    const accounts = await ctx.store.findBy(Account, {id: In([...accountIds])}).then(toEntityMap)

    const rewards: StakingReward[] = []
    for (let {accountId, ...data} of rewardsData) {
        let account = accounts.get(accountId)
        if (!account) {
            account = createAccount(accountId)
            accounts.set(account.id, account)
        }

        let reward = new StakingReward({
            ...data,
            account,
        })

        rewards.push(reward)
    }

    await ctx.store.save([...accounts.values()])
    await ctx.store.insert(rewards)
}

function createAccount(id: string) {
    return new Account({
        id: id,
        publicKey: toHex(decodeAddress(id)),
    })
}
