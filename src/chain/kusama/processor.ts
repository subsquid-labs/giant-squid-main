import {DataHandlerContext, BatchProcessorItem, SubstrateBatchProcessor} from '@subsquid/substrate-processor'
import {chain} from '../../chain'

const extrinsicData = {
    hash: true,
} as const

const callData = {
    args: true,
    origin: true,
} as const

const eventData = {
    args: true,
    call: callData,
    extrinsic: extrinsicData,
} as const

export const processor = new SubstrateBatchProcessor()
    .setDataSource(chain.config.dataSource)
    .addEvent('Balances.Transfer', {
        data: {event: eventData},
    })
    .addEvent('Staking.Reward', {
        data: {event: eventData},
    })
    .addEvent('Staking.Rewarded', {
        data: {event: eventData},
    })
    .addEvent('Identity.IdentitySubRemoved', {
        data: {event: eventData},
    })
    .addEvent('Identity.IdentitySubRevoked', {
        data: {event: eventData},
    })
    .addCall('Identity.set_identity', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Identity.provide_judgement', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Identity.set_subs', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Identity.rename_sub', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Identity.add_sub', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Identity.clear_identity', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Identity.kill_identity', {
        data: {call: callData, extrinsic: extrinsicData},
    })

if (chain.config.blockRange) processor.setBlockRange(chain.config.blockRange)
if (chain.config.typesBundle) processor.setTypesBundle(chain.config.typesBundle)

export type Item = BatchProcessorItem<typeof processor>
export type ProcessorContext<Store> = DataHandlerContext<Store, Item>
