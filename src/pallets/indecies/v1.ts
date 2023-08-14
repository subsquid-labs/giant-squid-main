import {Pallet, StaticLookup} from '@gs/interfaces'
import type * as pallet_system from '@gs/pallets/system/v1'
import {implements_} from '@gs/util/decorator'
import {Address} from '@gs/primitive'

export interface Config extends pallet_system.Config {}

export default <T extends Config = Config>() => {
    @implements_<StaticLookup<T['AccountId'], Address<T['AccountId']>>>()
    class P extends Pallet<T>() {
        static get Source() {
            return Address(this.Config.AccountId)
        }
        static get Target() {
            return this.Config.AccountId
        }

        static lookup(s: InstanceType<Address<T['AccountId']>>) {
            return s.match({
                AccountId: (v) => v as any,
            })
        }

        static unlookup(t: InstanceType<T['AccountId']>): never {
            throw new Error(`not impemented`)
        }
    }

    return P
}
