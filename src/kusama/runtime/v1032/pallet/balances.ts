import {Config, TransferEventMapper, PalletBalances} from '../../v1030/pallet/balances'

export {Config, TransferEventMapper, PalletBalances}

export const pallet = new PalletBalances<Config>()

pallet.events = {
    Transfer: new TransferEventMapper(pallet),
}
