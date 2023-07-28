import {Config, PalletBalances, TransferEventMapper} from '../../v1020/pallet/balances'
export {Config, PalletBalances, TransferEventMapper}

export const pallet = new PalletBalances()

pallet.events = {
    Transfer: new TransferEventMapper(pallet),
}
