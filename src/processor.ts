import {DataHandlerContext, BatchProcessorItem, SubstrateBatchProcessor} from '@subsquid/substrate-processor'
import {chain} from './chain'

export const processor = new SubstrateBatchProcessor()
    .setDataSource(chain.config.dataSource)
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
    .addEvent('Identity.SubIdentityRemoved', {
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
    .addEvent('Identity.SubIdentityRevoked', {
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
    .addCall('Identity.set_identity', {
        data: {
            call: {
                args: true,
                origin: true,
            },
            extrinsic: {
                hash: true,
            },
        },
    })
    .addCall('Identity.provide_judgement', {
        data: {
            call: {
                args: true,
                origin: true,
            },
            extrinsic: {
                hash: true,
            },
        },
    })
    .addCall('Identity.set_subs', {
        data: {
            call: {
                args: true,
                origin: true,
            },
            extrinsic: {
                hash: true,
            },
        },
    })
    .addCall('Identity.rename_sub', {
        data: {
            call: {
                args: true,
                origin: true,
            },
            extrinsic: {
                hash: true,
            },
        },
    })
    .addCall('Identity.add_sub', {
        data: {
            call: {
                args: true,
                origin: true,
            },
            extrinsic: {
                hash: true,
            },
        },
    })
    .addCall('Identity.clear_identity', {
        data: {
            call: {
                args: true,
                origin: true,
            },
            extrinsic: {
                hash: true,
            },
        },
    })
    .addCall('Identity.kill_identity', {
        data: {
            call: {
                args: true,
                origin: true,
            },
            extrinsic: {
                hash: true,
            },
        },
    })

if (chain.config.blockRange) processor.setBlockRange(chain.config.blockRange)
if (chain.config.typesBundle) processor.setTypesBundle(chain.config.typesBundle)

export type Item = BatchProcessorItem<typeof processor>
export type ProcessorContext<Store> = DataHandlerContext<Store, Item>
