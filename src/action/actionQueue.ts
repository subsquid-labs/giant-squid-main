import assert from 'assert'
import {StoreWithCache} from '@belopash/squid-tools'
import {DataHandlerContext} from '@subsquid/substrate-processor'
import {withErrorContext} from '@subsquid/util-internal'
import * as Account from './account'
import {Action, ActionBlock, ActionConstructor, ActionContext, ActionData, ActionExtrinsic} from './action'
import * as Identity from './identity'
import * as Transfer from './transfer'
import * as Staking from './staking'

const Actions = {
    account_ensure: Account.EnsureAccount,

    identity_ensure: Identity.EnsureIdentityAction,
    identity_set: Identity.SetIdentityAction,
    identity_judge: Identity.GiveJudgementAction,
    identity_clear: Identity.ClearIdentityAction,
    identity_kill: Identity.KillIdentityAction,
    identity_ensureSub: Identity.EnsureIdentitySubAction,
    identity_addSub: Identity.AddIdentitySubAction,
    identity_renameSub: Identity.RenameSubAction,
    identity_removeSub: Identity.RemoveIdentitySubAction,

    balances_transfer: Transfer.TransferAction,

    staking_reward: Staking.RewardAction,
    staking_bond: Staking.BondAction,

    staker_ensure: Staking.EnsureStakerAction,
    staker_setController: Staking.SetControllerAction,
    staker_setPayee: Staking.SetPayeeAction,
}

type CreateActionRegistry<T extends {[k: string]: ActionConstructor<Action<any>>}> = {
    [K in keyof T]: T[K] extends ActionConstructor<infer A> ? A : never
}
type ActionRegistry = CreateActionRegistry<typeof Actions>

export class ActionQueue {
    private actions: Action[] = []

    private block: ActionBlock | undefined
    private extrinsic: ActionExtrinsic | undefined

    setBlock(block: ActionBlock) {
        this.block = block

        return this
    }

    setExtrinsic(extrinsic: ActionExtrinsic | undefined) {
        this.extrinsic = extrinsic

        return this
    }

    add<A extends keyof ActionRegistry>(action: A, data: ActionData<ActionRegistry[A]>): this {
        assert(this.block != null)

        const a = new Actions[action](this.block, this.extrinsic, data)
        this.actions.push(a)

        return this
    }

    lazy(cb: (queue: ActionQueue) => Promise<void>) {
        assert(this.block != null)

        const a = new LazyAction(this.block, this.extrinsic, cb)
        this.actions.push(a)

        return this
    }

    async process(ctx: ActionContext) {
        for (const action of this.actions) {
            const actionCtx = {
                ...ctx,
                log: ctx.log.child('actions', {
                    block: action.block.height,
                    extrinsic: action.extrinsic?.hash,
                }),
            }

            await action.perform(actionCtx).catch(
                withErrorContext({
                    block: action.block.height,
                    extrinsicHash: action.extrinsic?.hash,
                })
            )
        }
    }
}

export class LazyAction extends Action {
    constructor(
        readonly block: ActionBlock,
        readonly extrinsic: ActionExtrinsic | undefined,
        readonly cb: (queue: ActionQueue) => Promise<void>
    ) {
        super(block, extrinsic, {})
    }

    protected async _perform(ctx: DataHandlerContext<StoreWithCache, {}>): Promise<void> {
        const queue = new ActionQueue()
        await this.cb(queue)
        await queue.process(ctx)
    }
}
