import {Constructor} from 'type-fest'
import {Display, PalletBase, Serialize, StaticLookup, Type} from '../../../interfaces'

export type Config = {
    AccountId: typeof Type<Uint8Array> & Constructor<Display<string> & Serialize<string>>
    Lookup: StaticLookup<Config['AccountId'], typeof Type<unknown>>
}

export class Pallet extends PalletBase<{
    Config: Config
}> {}

const pallet = new Pallet()

export default pallet
