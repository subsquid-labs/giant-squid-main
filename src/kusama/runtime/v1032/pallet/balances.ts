import {Config, Pallet, TransferEvent, TransferEventMapper} from '../../v1030/pallet/balances'

export {Pallet, TransferEvent, TransferEventMapper, Config}

/******************
 * IMPLEMENTATION *
 ******************/

const pallet = new Pallet()

pallet.Events = {
    Transfer: TransferEvent(pallet),
}

pallet.EventMappers = {
    Transfer: TransferEventMapper(pallet),
}

export default pallet
