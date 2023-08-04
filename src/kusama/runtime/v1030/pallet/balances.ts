// import {Pallet, TransferEvent, TransferEventMapper, Config, Events} from '../../v1020/pallet/balances'

// export {Pallet, TransferEvent, TransferEventMapper, Config}

// /******************
//  * IMPLEMENTATION *
//  ******************/

// const pallet = new Pallet<Config, {Events: Events<Config>}>()

// pallet.Events = {
//     Transfer: TransferEvent(pallet),
// }

// pallet.EventMappers = {
//     Transfer: TransferEventMapper(pallet),
// }

// export default pallet

export * from '../../v1020/pallet/balances'
export {default} from '../../v1020/pallet/balances'
