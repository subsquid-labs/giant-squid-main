import assert from 'assert'
import {assertNotNull} from '@subsquid/substrate-processor'
import type acala from './acala'
import type astar from './astar'
import type bifrost from './bifrost'
import type calamari from './calamari'
import type efinity from './efinity'
import type gmordie from './gmordie'
import type hydradx from './hydradx'
import type karura from './karura'
import type khala from './khala'
import type kusama from './kusama'
import type moonbeam from './moonbeam'
import type moonriver from './moonriver'
import type phala from './phala'
import type polkadot from './polkadot'
import type shiden from './shiden'
import type statemine from './statemine'
import type statemint from './statemint'
import type subsocial from './subsocial'

// const chains = {
//     acala,
//     astar,
//     bifrost,
//     calamari,
//     efinity,
//     gmordie,
//     hydradx,
//     karura,
//     khala,
//     kusama,
//     moonbeam,
//     moonriver,
//     phala,
//     polkadot,
//     shiden,
//     statemine,
//     statemint,
//     // subsocial,
// }

// let a: subsocial = ''

type Chain =
    | typeof acala
    | typeof astar
    | typeof bifrost
    | typeof calamari
    | typeof efinity
    | typeof gmordie
    | typeof hydradx
    | typeof karura
    | typeof khala
    | typeof kusama
    | typeof moonbeam
    | typeof moonriver
    | typeof phala
    | typeof polkadot
    | typeof shiden
    | typeof statemine
    | typeof statemint
    | typeof subsocial

function getChain(): Chain {
    let chainName = assertNotNull(process.env.CHAIN, 'Missing env variable CHAIN')
    return require(`./${chainName}`).default
    // switch (process.env.CHAIN) {
    //     case null:
    //     case undefined:
    //         throw new Error('Missing env variable CHAIN')
    //     case 'polkadot':
    //         return require('./polkadot')
    //     case 'kusama':
    //         return require('./kusama')
    //     case 'acala':
    //         return require('./acala')
    //     // case 'karura':
    //     //     return require('./karura')
    //     // case 'moonbeam':
    //     //     return require('./moonbeam')
    //     // case 'moonriver':
    //     //     return require('./moonriver')
    //     // case 'bifrost':
    //     //     return require('./bifrost')
    //     // case 'hydradx':
    //     //     return require('./hydradx')
    //     // case 'phala':
    //     //     return require('./phala')
    //     default:
    //         throw new Error(`Unknown chain "${process.env.CHAIN}"`)
    // }
}

export let chain = getChain()

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
