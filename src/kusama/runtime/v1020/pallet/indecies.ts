import {implements_} from '@gs/util/decorator'
import {PalletBase, PalletSetup, StaticLookup, Parameter} from '../../../interfaces'
import {Address} from '../primitive'
import * as pallet_system from './system'

export type Config = pallet_system.Config & {}

export const Pallet = <T extends Config, S extends PalletSetup = {}>(setup: S) => {
    @implements_<StaticLookup<T['AccountId'], Address<T['AccountId']>>>()
    abstract class Pallet extends PalletBase<T, S>() {
        static get Source() {
            return Address(this.Config.AccountId)
        }
        static get Target() {
            return this.Config.AccountId
        }

        static lookup(s: InstanceType<Address<T['AccountId']>>) {
            return s.match({
                AccountId: (v) => v,
            })
        }
        static unlookup(t: InstanceType<T['AccountId']>): never {
            throw new Error(`not impemented`)
        }
    }

    return Pallet
}
type Pallet<T extends Config, S extends PalletSetup> = ReturnType<typeof Pallet<T, S>>

// Pallet.

export default () => {
    const pallet = Pallet<Config>({})

    return pallet
}
