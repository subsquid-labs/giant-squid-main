import {implements_} from '@gs/util/decorator'
import {Pallet, PalletSetup, StaticLookup, Parameter} from '../../interfaces'
import {Address} from '../primitive'
import * as pallet_system from './system'

export type Config = pallet_system.Config & {}

// Pallet.

export default () => {
    @implements_<StaticLookup<Config['AccountId'], Address<Config['AccountId']>>>()
    class P extends Pallet<Config>() {
        static get Source() {
            return Address(this.Config.AccountId)
        }
        static get Target() {
            return this.Config.AccountId
        }

        static lookup(s: InstanceType<Address<Config['AccountId']>>) {
            return s.match({
                AccountId: (v) => v,
            })
        }

        static unlookup(t: InstanceType<Config['AccountId']>): never {
            throw new Error(`not impemented`)
        }
    }

    return P
}
