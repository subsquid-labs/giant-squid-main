import {PalletBase, StaticLookup} from '../../../interfaces'
import {Address} from '../primitive'
import pallet_system from './system'

export type Config = typeof pallet_system.Config & {}

export class Pallet
    extends PalletBase<{
        Config: Config
    }>
    implements StaticLookup<Config['AccountId']>
{
    lookup(s: Address) {
        return s.match({
            AccountId: (v) => new this.Config.AccountId(v),
            _: () => {
                throw new Error()
            },
        })
    }

    unlookup(t: InstanceType<Config['AccountId']>): Address {
        throw new Error(`not impemented`)
    }
}

const pallet = new Pallet()

export default pallet
