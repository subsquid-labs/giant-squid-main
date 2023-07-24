import {Display, Pallet, Serialize, StaticLookup, Type} from '../../../interfaces'
import {Address} from '../primitive'

export interface Config {
    AccountId: Type<Uint8Array> & Display<string> & Serialize<string>
    Lookup: StaticLookup<Address, InstanceType<Config['AccountId']>>
}

export const pallet = new Pallet<Config>()
