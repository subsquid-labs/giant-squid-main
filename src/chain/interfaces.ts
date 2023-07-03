import type { SubstrateBatchProcessor } from '@subsquid/substrate-processor'

import type acala from './acala/api'
import type astar from './astar/api'
import type bifrost from './bifrost/api'
import type calamari from './calamari/api'
import type efinity from './efinity/api'
import type gmordie from './gmordie/api'
import type hydradx from './hydradx/api'
import type karura from './karura/api'
import type khala from './khala/api'
import type kusama from './kusama/api'
import type moonbeam from './moonbeam/api'
import type moonriver from './moonriver/api'
import type phala from './phala/api'
import type polkadot from './polkadot/api'
import type shiden from './shiden/api'
import type statemine from './statemine/api'
import type statemint from './statemint/api'
import type subsocial from './subsocial/api'


export type ChainApi =
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

export interface ProcessorConfig {
  chainName: string
  dataSource: Parameters<SubstrateBatchProcessor<any>['setDataSource']>[0]
  prefix?: number
  blockRange?: Parameters<SubstrateBatchProcessor<any>['setBlockRange']>[0],
  typesBundle?: Parameters<SubstrateBatchProcessor<any>['setTypesBundle']>[0]
}

export interface IChainData {
  prefix?: number
  network: string
  displayName: string
  symbols: string[]
  decimals: string[]
  archiveName: string
}
