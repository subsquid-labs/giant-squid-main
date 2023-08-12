import {Class} from 'type-fest'
import {Display, Lookup, Pallet, Serialize, Parameter, PalletSetup, From} from '../../interfaces'

export interface Config {
    AccountId: Parameter<Uint8Array> & Display & Serialize & From
    Lookup: Lookup<Config['AccountId'], Class<unknown>>
}

export default () => {
    class P extends Pallet<Config>() {}

    return P
}
