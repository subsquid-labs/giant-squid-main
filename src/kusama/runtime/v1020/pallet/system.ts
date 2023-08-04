import {Class} from 'type-fest'
import {Display, PalletBase, Serialize, StaticLookup, Type} from '../../../interfaces'

export interface Config {
    AccountId: Type<Uint8Array> & Display<string> & Serialize<string>
    Lookup: StaticLookup<Config['AccountId']>
}

export class Pallet<T extends Config> extends PalletBase<T, {}> {}

export default () => {
    const pallet = new Pallet<Config>()

    return pallet
}
