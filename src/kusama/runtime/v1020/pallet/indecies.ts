import {PalletBase, StaticLookup, Type} from '../../../interfaces'
import {Address} from '../primitive'
import pallet_system from './system'

export type Config = typeof pallet_system.Config & {}

export class Pallet extends PalletBase<{
    Config: Config
}> {}

StaticLookup(Pallet, {
    get Source() {
        return Address(this.Config.AccountId)
    },
    get Target() {
        return this.Config.AccountId
    },
    lookup(s: InstanceType<Address<Config['AccountId']>>) {
        return s.match({
            AccountId: (v) => v,
        })
    },
    unlookup(t: InstanceType<Config['AccountId']>): Address<Config['AccountId']> {
        throw new Error(`not impemented`)
    },
})

export interface Pallet extends StaticLookup<Config['AccountId'], Address<Config['AccountId']>> {}

const pallet = new Pallet()

// pallet.

export default pallet
