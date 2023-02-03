import assert from 'assert'
import {assertNotNull} from '@subsquid/substrate-processor'
import acala from './acala'
import bifrost from './bifrost'
import hydradx from './hydradx'
import karura from './karura'
import kusama from './kusama'
import moonbeam from './moonbeam'
import moonriver from './moonriver'
import phala from './phala'
import polkadot from './polkadot'

const chains = {
    polkadot,
    kusama,
    moonbeam,
    moonriver,
    acala,
    karura,
    bifrost,
    hydradx,
    phala,
}

let chainName = assertNotNull(process.env.CHAIN, 'Missing env variable CHAIN') as keyof typeof chains
let chain = chains[chainName]
assert(chain != null, `Unknown chain "${process.env.CHAIN}"`)

export {chain}

// switch (process.env.CHAIN) {
//     case null:
//     case undefined:
//         throw new Error('Missing env variable CHAIN')
//     case 'polkadot':
//         return polkadot
//     case 'kusama':
//         return kusama
//     case 'acala':
//         return acala
//     case 'karura':
//         return karura
//     case 'moonbeam':
//         return moonbeam
//     case 'moonriver':
//         return moonriver
//     case 'bifrost':
//         return bifrost
//     case 'hydradx':
//         return hydradx
//     case 'phala':
//         return phala
//     default:
// }
