import {Pallet} from '../../../interfaces'
import {Config, TransferEventMapper} from '../../v1020/pallet/balances'

export {Config, TransferEventMapper}

export const pallet = new Pallet<Config>()

pallet.events = {
    Transfer: new TransferEventMapper(pallet),
}
