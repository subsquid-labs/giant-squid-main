import {Class} from 'type-fest'
import {Display, Lookup, PalletBase, Serialize, Parameter, PalletSetup} from '../../../interfaces'

export interface Config {
    AccountId: Parameter<Uint8Array> & Display & Serialize
    Lookup: Lookup<Config['AccountId'], Class<unknown>>
}

export const Pallet = <T extends Config, S extends PalletSetup = {}>() => {
    abstract class Pallet extends PalletBase<T, S>() {}

    return Pallet
}
type Pallet<T extends Config, S extends PalletSetup> = ReturnType<typeof Pallet<T, S>>

export default () => {
    const pallet = Pallet<Config>()

    return pallet
}
