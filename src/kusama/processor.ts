import {
    SubstrateBatchProcessor,
    SubstrateBatchProcessorFields,
    Block as Block_,
    BlockHeader as BlockHeader_,
    Event as Event_,
    Extrinsic as Extrinsic_,
    Call as Call_,
    DataHandlerContext,
} from '@subsquid/substrate-processor'

export const processor = new SubstrateBatchProcessor()
    .setDataSource({
        archive: 'https://v2.archive.subsquid.io/network/kusama',
        chain: 'wss://kusama-rpc.polkadot.io',
    })
    .setFields({
        block: {
            timestamp: true,
        },
        call: {
            name: true,
            args: true,
            origin: true,
            success: true,
        },
        event: {
            name: true,
            args: true,
        },
        extrinsic: {
            hash: true,
            success: true,
        },
    })
    .addEvent({
        name: [
            'Balances.Transfer',

            'Session.NewSession',

            'Staking.Slash',
            'Staking.Slashed',
            'Staking.Reward',
            'Staking.Rewarded',

            'Identity.IdentitySubRemoved',
            'Identity.IdentitySubRevoked',
        ],
        call: true,
        extrinsic: true,
    })
    .addCall({
        name: [
            'Identity.set_identity',
            'Identity.provide_judgement',
            'Identity.set_subs',
            'Identity.rename_sub',
            'Identity.add_sub',
            'Identity.clear_identity',
            'Identity.kill_identity',

            'Staking.bond',
            'Staking.bond_extra',
            'Staking.unbond',
            'Staking.withdraw_unbonded',
            'Staking.force_unstake',
            'Staking.set_controller',
            'Staking.force_payee',
            'Staking.validate',
            'Staking.nominate',
            'Staking.chill',
        ],
        extrinsic: true,
    })
    .setBlockRange({
        from: 1038250,
        // to: 1775826,
    })

export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type Call = Call_<Fields>
export type Event = Event_<Fields>
export type Extrinsic = Extrinsic_<Fields>
export type Block = Block_<Fields>
export type BlockHeader = BlockHeader_<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
