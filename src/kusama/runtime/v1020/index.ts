import {Runtime} from '../../interfaces'
import {AccountId32} from './primitive'
import {balances, system} from './pallet'

const prefix = 1

const System = new system.Pallet({
    AccountId: AccountId32.withPrefix(prefix),
})

const Balances = new balances.Pallet({
    ...System.config,
})

export const runtime: Runtime = {
    Balances,
    System,
}
