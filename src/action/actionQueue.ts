import {withErrorContext} from '@subsquid/util-internal'
import assert from 'assert'
import * as Account from './account'
import {Action, ActionBlock, ActionConstructor, ActionContext, ActionData, ActionExtrinsic, Awaitable} from './action'
import * as Identity from './identity'
import * as Staking from './staking'
import * as Transfer from './transfer'

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
    staking_slash: Staking.SlashAction,
    staking_bond: Staking.BondAction,
    staking_createUnlockChunk: Staking.CreateUnlockChunkAction,
    staking_updateUnlockChunk: Staking.UpdateUnlockChunkAction,
    staking_withdrawUnlockChunk: Staking.WithdrawUnlockChunkAction,
    staking_newEra: Staking.NewEraAction,
    staking_endEra: Staking.EndEraAction,
    staking_newEraValidator: Staking.NewEraValidatorAction,
    staking_newEraNominator: Staking.NewEraNominatorAction,
    staking_newEraNomination: Staking.NewEraNominationAction,

    staker_ensure: Staking.EnsureStakerAction,
    staker_setController: Staking.SetControllerAction,
    staker_setPayee: Staking.SetPayeeAction,
    staker_kill: Staking.KillStakerAction,
    staker_revive: Staking.ReviveStakerAction,
    staker_validate: Staking.StakerValidateAction,
    staker_nominate: Staking.StakerNominateAction,
    staker_idle: Staking.StakerIdleAction,
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

        const a = new Actions[action](this.block, this.extrinsic, data as any) // TODO: find if there is a proper way to pass typed parameter
        this.actions.push(a)

        return this
    }

    lazy(cb: () => Awaitable<void>) {
        assert(this.block != null)

        const a = new LazyAction(this.block, this.extrinsic, cb)
        this.actions.push(a)

        return this
    }

    async process(ctx: ActionContext) {
        return await this.processActions(ctx, this.actions)
    }

    private async processActions(ctx: ActionContext, actions: Action[]) {
        for (const action of actions) {
            const actionCtx = {
                ...ctx,
                log: ctx.log.child('action', {
                    block: action.block.height,
                    extrinsic: action.extrinsic?.hash,
                }),
            }

            await this.processAction(actionCtx, action).catch(
                withErrorContext({
                    block: action.block.height,
                    extrinsicHash: action.extrinsic?.hash,
                })
            )
        }
    }

    private async processAction(ctx: ActionContext, action: Action) {
        if (action instanceof LazyAction) {
            await this.processLazyAction(ctx, action)
        } else {
            await action.perform(ctx)
        }
    }

    private async processLazyAction(ctx: ActionContext, action: LazyAction) {
        const saved = {block: this.block, extrinsic: this.extrinsic, actions: this.actions}
        try {
            this.block = action.block
            this.extrinsic = action.extrinsic
            this.actions = []
            await action.perform(ctx)
            await this.processActions(ctx, this.actions)
        } finally {
            this.block = saved.block
            this.extrinsic = saved.extrinsic
            this.actions = saved.actions
        }
    }
}

class LazyAction extends Action<unknown> {
    constructor(
        readonly block: ActionBlock,
        readonly extrinsic: ActionExtrinsic | undefined,
        readonly cb: () => Awaitable<void>
    ) {
        super(block, extrinsic, {})
    }

    protected async _perform(): Promise<void> {
        await this.cb()
    }
}
