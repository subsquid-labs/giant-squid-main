import {Config, TransferEventMapper, PalletBalances} from '../../v1032/pallet/balances'

export {Config, TransferEventMapper, PalletBalances}

export const pallet = new PalletBalances<Config>()

pallet.events = {
    Transfer: new TransferEventMapper(pallet),
}
