import {Display, Pallet, Serialize, StaticLookup, Type} from '../../../interfaces'

export interface Config {
    AccountId: Type<Uint8Array> & Display<string> & Serialize<string>
    Lookup: StaticLookup<InstanceType<Config['AccountId']>>
}

export const pallet = new Pallet<Config>()
