import {Pallet} from '../../../interfaces'
import {BondCallMapper, BondExtraCall, Config, UnbondCall} from '../../v1020/pallet/staking'

export {BondCallMapper, BondExtraCall, Config, UnbondCall}

export const pallet = new Pallet<Config>()

pallet.calls = {
    bond: new BondCallMapper(pallet),
    bond_extra: new BondExtraCall(pallet),
    unbond: new UnbondCall(pallet),
}
