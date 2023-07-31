import {Display, PalletBase, Serialize, StaticLookup, Type} from '../../../interfaces'

export type Config = {
    AccountId: Type<Uint8Array> & Display<string> & Serialize<string>
    Lookup: StaticLookup<Config['AccountId']>
}

export class Pallet extends PalletBase<{
    Config: Config
}> {}

const pallet = new Pallet()

export default pallet
