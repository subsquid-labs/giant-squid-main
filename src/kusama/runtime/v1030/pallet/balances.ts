import * as parent from '../../v1020/pallet/balances'

export const {Pallet, TransferEvent, TransferEventMapper} = parent

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
