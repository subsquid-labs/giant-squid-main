import {Constructor} from 'type-fest'
import {Display, Lookup, Serialize, Parameter, From, Pallet} from '@gs/interfaces'

export interface Config {
    AccountId: Parameter<Uint8Array> & Display & Serialize & From
    Lookup: Lookup<Config['AccountId'], Constructor<unknown>>
}

export default () => {
    class P extends Pallet<Config>() {}

    return P
}
