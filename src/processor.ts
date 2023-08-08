import {KnownArchivesSubstrate, lookupArchive} from '@subsquid/archive-registry'
import {BatchContext, BatchProcessorItem, SubstrateBatchProcessor} from '@subsquid/substrate-processor'
import {Store, TypeormDatabase} from '@subsquid/typeorm-store'
import {saveRewards} from './core/rewards'
import {saveTransfers} from './core/transfers'
import { saveExtrinsics } from './core/extrinsics'

let chainName = process.env.CHAIN as KnownArchivesSubstrate | 'subsocial'
chainName = chainName == 'subsocial' ? 'subsocial-parachain' : chainName

const processor = new SubstrateBatchProcessor()
    .setBlockRange({
      from: 17_000_000
    })
    .setDataSource({
        archive: lookupArchive(chainName, {release: 'FireSquid'}),
    })
    
    .addEvent('Balances.Transfer', {
        data: {
            event: {
                args: true,
                extrinsic: {
                    hash: true,
                },
            },
        },
    } as const)
    .addEvent('Staking.Reward', {
        data: {
            event: {
                args: true,
                extrinsic: {
                    hash: true,
                },
                call: {
                    args: true,
                },
            },
        },
    } as const)
    .addEvent('Staking.Rewarded', {
        data: {
            event: {
                args: true,
                extrinsic: {
                    hash: true,
                },
                call: {
                    args: true,
                },
            },
        },
    } as const)
    .addCall('*', {
        data: {
          extrinsic: true
        }
      } as const)

type Item = BatchProcessorItem<typeof processor>
type Ctx = BatchContext<Store, Item>

processor.run(new TypeormDatabase(), async (ctx) => {
    await saveTransfers(ctx as any)
    await saveRewards(ctx as any)
    await saveExtrinsics(ctx as any)
})
