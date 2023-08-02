import {Pallet, TransferEvent, TransferEventMapper} from '../../v1020/pallet/balances'

export {Pallet, TransferEvent, TransferEventMapper}

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
