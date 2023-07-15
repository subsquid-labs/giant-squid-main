import {Runtime} from '../../interfaces'
import {BalancesPalletV1020} from './balances'
import {AccountId32} from './primitives'

const prefix = 1

export const runtime: Runtime = {
    Balances: new BalancesPalletV1020({
        AccountId: new AccountId32(prefix),
    }),
}
