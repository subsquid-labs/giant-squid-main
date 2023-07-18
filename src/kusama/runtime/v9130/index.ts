import {Runtime} from '../../interfaces'
import {balances, identity, system} from './pallet'
import {AccountId32} from './primitive'

const prefix = 1

const System = new system.Pallet({
    AccountId: AccountId32.withPrefix(prefix),
})

const Balances = new balances.Pallet({
    ...System.config,
})

const Identity = new identity.Pallet({
    ...System.config,
})

export const runtime: Runtime = {
    Balances,
    Identity,
    System,
}
