import {lookupArchive} from '@subsquid/archive-registry'
import {BatchContext, BatchProcessorItem, SubstrateBatchProcessor} from '@subsquid/substrate-processor'
import {Store, TypeormDatabase} from '@subsquid/typeorm-store'
import {saveRewards} from './core/rewards'
import {saveTransfers} from './core/transfers'

const processor = new SubstrateBatchProcessor()
    .setDataSource({
        archive: lookupArchive('kusama', {release: 'FireSquid'}),
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

type Item = BatchProcessorItem<typeof processor>
type Ctx = BatchContext<Store, Item>

processor.run(new TypeormDatabase(), async (ctx) => {
    await saveTransfers(ctx as any)
    await saveRewards(ctx as any)
})
