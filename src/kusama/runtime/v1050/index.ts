import {Runtime} from '../../interfaces'
import {PalletBalances} from './balances'
import {PalletIdentity} from './pallet/identity'

export const runtime: Runtime = {
    PalletBalances,
    PalletIdentity,
}
