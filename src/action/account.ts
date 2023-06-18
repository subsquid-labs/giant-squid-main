import {toHex} from '@subsquid/substrate-processor'
import {Account} from '../model'
import {decodeAddress} from '../utils'
import {Action, ActionContext} from './base'

export interface AccountData {
    id: string
}

export class EnsureAccount extends Action<AccountData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        let account = await ctx.store.get(Account, this.data.id)
        if (account != null) return

        account = new Account({
            id: this.data.id,
            publicKey: toHex(decodeAddress(this.data.id)),
        })

        await ctx.store.insert(account)
    }
}
