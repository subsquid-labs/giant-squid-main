import {lookupArchive} from '@subsquid/archive-registry'
import {
    DataHandlerContext,
    BatchProcessorItem,
    SubstrateBatchProcessor,
    BatchProcessorCallItem,
    BatchProcessorEventItem,
    SubstrateBlock,
} from '@subsquid/substrate-processor'

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
    .setDataSource({
        archive: lookupArchive('kusama'),
        chain: 'wss://kusama.api.onfinality.io/public-ws',
    })
    .addEvent('Balances.Transfer', {
        data: {event: eventData},
    })
    .addEvent('Session.NewSession', {
        data: {event: eventData},
    })
    .addEvent('Staking.Slash', {
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
    .addCall('Staking.bond', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Staking.bond_extra', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Staking.unbond', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Staking.withdraw_unbonded', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Staking.force_unstake', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Staking.set_controller', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Staking.force_payee', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Staking.validate', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Staking.nominate', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Staking.chill', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Staking.force_no_eras', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Staking.force_new_era', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .addCall('Staking.force_new_era_always', {
        data: {call: callData, extrinsic: extrinsicData},
    })
    .setBlockRange({
        from: 0,
        // to: 277_710,
    })

type Simplify<T> = {[K in keyof T]: T[K]} & {}
type RemoveWildcard<T> = Exclude<T, {name: '*'}>
export type Item = BatchProcessorItem<typeof processor>
export type EventItem = RemoveWildcard<BatchProcessorEventItem<typeof processor>>
export type CallItem = RemoveWildcard<BatchProcessorCallItem<typeof processor>>
export type ProcessorContext<Store> = DataHandlerContext<Store, Item>

export type Call = Simplify<
    Omit<CallItem['call'], 'name'> & {
        name: string
    }
>
export type Extrinsic = Simplify<CallItem['extrinsic']>
export type Event = Simplify<
    Omit<EventItem['event'], 'name' | 'call' | 'extrinsic'> & {
        name: string
        call?: Call
        extrinsic?: Extrinsic
    }
>
export type Block = SubstrateBlock
