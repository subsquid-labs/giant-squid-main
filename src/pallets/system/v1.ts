import {Constructor} from 'type-fest'
import {Display, Lookup, Serialize, Parameter, From, Pallet} from '~interfaces'

export interface Config {
    AccountId: Parameter<Uint8Array> & Display & Serialize & From
    Lookup: Lookup<Config['AccountId'], Parameter>
}

export default <T extends Config = Config>(setup: (Config: T) => {}) => {
    class P extends Pallet(setup) {}

    return P
}
