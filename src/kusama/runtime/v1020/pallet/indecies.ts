import {Pallet, StaticLookup} from '../../../interfaces'
import {Address} from '../primitive'
import * as pallet_system from './system'

export interface Config extends pallet_system.Config {}

export class IndeciesPallet<C extends Config = Config>
    extends Pallet<C>
    implements StaticLookup<Address, InstanceType<Config['AccountId']>>
{
    lookup(s: Address) {
        return s.match({
            AccountId: (v) => new this.config.AccountId(v),
            _: () => {
                throw new Error()
            },
        })
    }

    unlookup(t: InstanceType<C['AccountId']>): Address {
        throw new Error(`not impemented`)
    }
}

const pallet_indecies = new IndeciesPallet()

export default pallet_indecies
