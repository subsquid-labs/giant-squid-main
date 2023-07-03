import {StoreWithCache} from '@belopash/squid-tools'
import {DataHandlerContext, SubstrateBlock, SubstrateExtrinsic} from '@subsquid/substrate-processor'
import {Store} from '@subsquid/typeorm-store'
import assert from 'assert'

export type ActionContext = DataHandlerContext<StoreWithCache, unknown>

export abstract class Action<T = unknown> {
    static async process(ctx: ActionContext, actions: Action[]) {
        for (const action of actions) {
            const actionCtx = {
                ...ctx,
                log: ctx.log.child('actions', {
                    block: action.block.height,
                    extrinsic: action.extrinsic?.hash,
                }),
            }

            try {
                await action.perform(actionCtx)
            } catch (err) {
                ctx.log.fatal({err, block: action.block.height, extrinsic: action.extrinsic?.hash})
                throw err
            }
        }
    }

    protected performed = false

    constructor(
        readonly block: Pick<SubstrateBlock, 'id' | 'hash' | 'height' | 'timestamp'>,
        readonly extrinsic: Pick<SubstrateExtrinsic, 'id' | 'hash'> | undefined,
        readonly data: T
    ) {}

    async perform(ctx: ActionContext): Promise<void> {
        assert(!this.performed)
        await this._perform(ctx)
        this.performed = true
    }

    protected abstract _perform(ctx: ActionContext): Promise<void>
}

// export class LazyAction extends Action {
//     constructor(
//         block: Pick<BlockHeader, 'id' | 'hash' | 'height' | 'timestamp'>,
//         extrinsic: Pick<extrinsic, 'id' | 'hash'>,
//         readonly cb: (ctx: ActionContext) => Promise<Action[]>
//     ) {
//         super(block, extrinsic, {})
//     }

//     protected async _perform(ctx: DataHandlerContext<StoreWithCache, {}>): Promise<void> {
//         const actions = await this.cb(ctx)
//         await Action.process(ctx, actions)
//     }
// }
