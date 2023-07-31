import {Display, PalletBase, Serialize, StaticLookup, Type} from '../../../interfaces'

export type Config = {
    AccountId: Type<Uint8Array> & Display<string> & Serialize<string>
    Lookup: StaticLookup<Config['AccountId']>
}

class Pallet<T extends Config> extends PalletBase<{
    Config: T
}> {}

const pallet = new Pallet()

export default pallet
