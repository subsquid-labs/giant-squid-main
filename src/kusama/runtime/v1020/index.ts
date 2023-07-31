import {Runtime} from '../../interfaces'
import pallet_balances from './pallet/balances'
import pallet_indecies from './pallet/indecies'
import pallet_session from './pallet/session'
import pallet_staking from './pallet/staking'
import pallet_system from './pallet/system'
import {AccountId32} from './primitive'

const prefix = 2

pallet_system.Config = {
    AccountId: AccountId32(prefix),
    Lookup: pallet_indecies,
}

pallet_indecies.Config = {
    ...pallet_system.Config,
}

pallet_balances.Config = {
    ...pallet_system.Config,
}

pallet_staking.Config = {
    ...pallet_system.Config,
}

pallet_session.Config = {}

export const runtime: Runtime = {
    Balances: pallet_balances,
    System: pallet_system,
    Indecies: pallet_indecies,
    Staking: pallet_staking,
    Session: pallet_session,
}
