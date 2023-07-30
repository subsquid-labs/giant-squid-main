import {Account} from '../model'
import {Action, ActionContext} from './action'

export interface AccountData {
    id: string
    publicKey: string
}

export class CreateAccount extends Action<AccountData> {
    async perform(ctx: ActionContext): Promise<void> {
        const account = new Account({
            id: this.data.id,
            publicKey: this.data.publicKey,
        })

        await ctx.store.insert(account)
    }
}
