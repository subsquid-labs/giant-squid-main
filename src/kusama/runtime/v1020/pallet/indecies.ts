import {PalletBase, PalletSetup, StaticLookup, Type} from '../../../interfaces'
import {Address} from '../primitive'
import * as pallet_system from './system'

export type Config = pallet_system.Config & {}

export class Pallet<T extends Config, O = {}> extends PalletBase<T, {}> {}

StaticLookup(
    Pallet<Config>,
    class {
        static get Source(): Address<Config['AccountId']> {
            return Address(this.Config.AccountId)
        }
        static get Target(): Config['AccountId'] {
            return this.Config.AccountId
        }
        static lookup(s) {
            return s.match({
                AccountId: (v) => v,
            })
        }
        static unlookup(t) {
            throw new Error(`not impemented`)
        }
    }
)

export interface Pallet<T extends Config, O = {}> extends StaticLookup<T['AccountId'], Address<T['AccountId']>> {}

// Pallet.

export default () => {
    const pallet = new Pallet()

    return pallet
}
