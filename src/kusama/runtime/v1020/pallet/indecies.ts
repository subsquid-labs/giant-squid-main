import assert from 'assert'
import {CallMapper, EventMapper, Pallet, StaticLookup} from '../../../interfaces'
import {Address} from '../primitive'
import * as system from './system'

export interface Config extends system.Config {}

export class IndeciesPallet extends Pallet<Config> implements StaticLookup<InstanceType<Config['AccountId']>> {
    lookup(s: Address) {
        return s.match({
            AccountId: (v) => new this.config.AccountId(v),
            _: () => {
                throw new Error()
            },
        })
    }

    unlookup(t: InstanceType<Config['AccountId']>): Address {
        throw new Error(`not impemented`)
    }
}

export const pallet = new IndeciesPallet()

export default pallet
