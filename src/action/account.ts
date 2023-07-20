import {toHex} from '@subsquid/substrate-processor'
import {Account} from '../model'
import {Action, ActionContext} from './action'

export interface AccountData {
    account: () => Promise<Account | undefined>
    id: string
    publicKey: string
}

export class EnsureAccount extends Action<AccountData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        let account = await this.data.account()
        if (account != null) return

        account = new Account({
            id: this.data.id,
            publicKey: this.data.publicKey,
        })

        await ctx.store.insert(account)
    }
}
