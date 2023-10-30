import assert from 'assert'
import { createHash } from 'crypto'
import * as storage from '@subsquid/substrate-processor/lib/util/storage'
import {
  StakingActiveEraStorage,
  StakingErasStakersStorage,
  StakingLedgerStorage,
} from '@metadata/kusama/storage'
import { Chain } from '@subsquid/substrate-processor/lib/chain'
import { StorageItem } from '@subsquid/substrate-metadata'
import { getNameHash } from '@subsquid/substrate-processor/lib/util/storage'

interface Block {
  hash: string
}

interface Context {
  _chain: Chain
}

interface StorageVersion<K extends any[], R> {
  get(...keys: K): Promise<R>
}

type Storage<S> = {
  getPrefix(): string
  getName(): string
} & {
  [K in keyof S & `isV${number}`]: boolean
} & {
  [K in keyof S & `asV${number}`]: S[K]
}

type StorageConstructor<S> = { new (...args: any[]): S }

type GetVersions<S extends Storage<any>> = {
  [K in keyof S]: K extends `isV${infer V}`
    ? V extends `${number}`
      ? V
      : never
    : never
}[keyof S]

type GetStorageVersion<S extends Storage<any>, V> = V extends GetVersions<S>
  ? Pick<S, `asV${V}`>[`asV${V}`]
  : never

type StorageRequest<S, V extends GetVersions<Storage<S>>> = {
  storage: StorageConstructor<S>
  version: V
  keys: GetStorageVersion<Storage<S>, V> extends StorageVersion<infer K, any>
    ? K
    : never
}

type StorageResult<S, V extends GetVersions<Storage<S>>> = GetStorageVersion<
  Storage<S>,
  V
> extends StorageVersion<any, infer R>
  ? R
  : never

export class CallManager {
  private static managers: WeakMap<Chain, CallManager> = new WeakMap()
  private deferred: Map<Block, StorageRequest<any, any>[]> = new Map()
  private cache: WeakMap<Block, Map<string, any>> = new WeakMap()

  static get(ctx: Context): CallManager {
    let manager = this.managers.get(ctx._chain)
    if (manager == null) {
      manager = new CallManager(ctx._chain)
      this.managers.set(ctx._chain, manager)
    }

    return manager
  }

  private constructor(private chain: Chain) {}

  private getStorageItem(prefix: string, name: string): StorageItem {
    return (this.chain as any).getStorageItem(prefix, name)
  }

  private decodeStorageValue(item: StorageItem, value: any): any {
    return (this.chain as any).decodeStorageValue(item, value)
  }

  private getStorageItemKeysHash(item: StorageItem, keys: any[]): string {
    return (this.chain as any).getStorageItemKeysHash(item, keys)
  }

  defer<S, V extends GetVersions<Storage<S>>>(
    block: Block,
    req: StorageRequest<S, V>
  ) {
    let _deferred = this.deferred.get(block)
    if (_deferred == null) {
      this.deferred.set(block, [req])
    } else {
      _deferred.push(req)
    }

    return new Defer((resolve, reject) => {
      this.call(block, req).then(resolve).catch(reject)
    })
  }

  async call<S, V extends GetVersions<Storage<S>>>(
    block: Block,
    req: StorageRequest<S, V>
  ): Promise<StorageResult<S, V>> {
    await this.load(block)

    const storage = new req.storage(
      { chain: this.chain },
      block
    ) as Storage<any>
    const prefix = storage.getPrefix()
    const name = storage.getName()
    assert(storage[`isV${req.version}`])

    const item = this.getStorageItem(prefix, name)
    const hash =
      getNameHash(prefix) +
      getNameHash(name).slice(2) +
      this.getStorageItemKeysHash(item, req.keys)

    let _cache = this.cache.get(block)

    let value = _cache?.get(hash)
    if (value == null) {
      const raw = await this.chain.client.call('state_getStorageAt', [
        hash,
        block.hash,
      ])
      value = this.decodeStorageValue(item, raw)
      if (_cache == null) {
        _cache = new Map()
        this.cache.set(block, _cache)
      }
      _cache.set(hash, value)
    }

    return value
  }

  async batchCall<Batch extends StorageRequest<any, any>[]>(
    block: Block,
    batch: Batch
  ): Promise<any[]> {
    const hashes: string[] = []
    const items = new Map<string, StorageItem>()
    for (const req of batch) {
      const storage = new req.storage(
        { chain: this.chain },
        block
      ) as Storage<any>
      const prefix = storage.getPrefix()
      const name = storage.getName()
      assert(storage[`isV${req.version}`])

      const item = this.getStorageItem(prefix, name)
      const hash =
        getNameHash(prefix) +
        getNameHash(name).slice(2) +
        this.getStorageItemKeysHash(item, req.keys)
      items.set(hash, item)
      hashes.push(hash)
    }

    const res = await this.chain.client.call('state_queryStorageAt', [
      hashes,
      block.hash,
    ])
    const changes = new Map(res[0].changes)
    const values: any[] = []
    for (let i = 0; i < batch.length; i++) {
      const hash = hashes[i]
      const item = items.get(hash)!
      const raw = changes.get(hash)

      const value = this.decodeStorageValue(item, raw)

      let _cache = this.cache.get(block)
      if (_cache == null) {
        _cache = new Map()
        this.cache.set(block, _cache)
      }
      _cache.set(hash, value)
    }

    return values
  }

  private async load(block: Block) {
    const _deferred = this.deferred.get(block)
    if (_deferred == null || _deferred.length == 0) return

    await this.batchCall(block, _deferred)
  }
}

export class CallDeferredValue<S, V extends GetVersions<Storage<S>>> {
  constructor(
    private manager: CallManager,
    private block: Block,
    private opts: StorageRequest<S, V>
  ) {}

  async get(): Promise<StorageResult<S, V>> {
    return this.manager.call(this.block, this.opts)
  }
}

// class DependentValue<T> {
//   private _promise: Promise<T>
//   private _resolve!: (value: T) => void

//   constructor(fn: () => void)
//   constructor(
//     fn: (depsVals: any) => void,
//     deps?: DependentValue<any>[] | DependentValue<any>
//   ) {
//     this._promise = new Promise<T>((resolve, reject) => {
//       this._resolve = resolve
//     })
//     if (deps != null) {
//       if (Array.isArray(deps)) {
//         Promise.all(deps.map((dep) => dep.get())).then(fn)
//       } else {
//         deps.get().then(fn)
//       }
//     }
//     else fn()
//   }

//   async get() {
//     return this._promise.then((val: T) => val)
//   }
// }

class Defer<T> {
  private _callPromise: Promise<T> | undefined
  private _readinessPromise: Promise<T>
  private _readinessManager!: {
    resolve: (value: any) => void
    reject: () => void
  }

  constructor(
    private fn: (
      res: (value: any) => void,
      rej: (reason?: any) => void
    ) => void,
    private parent?: Defer<any>
  ) {
    this._readinessPromise = new Promise((resolve, reject) => {
      this._readinessManager = { resolve, reject }
    })
  }

  then<R>(fn: (v: T) => R): Defer<R> {
    return new Defer((resolve, reject) => {
      this._readinessPromise.then(fn).then(resolve).catch(reject)
    })
  }

  async get() {
      if (this.parent != null) {
        await this.parent.get
      }
        this._callPromise = (new Promise((resolve, reject) => 
        this.fn(resolve, reject))).then(this._readinessManager.resolve(()=>{}).catch((err:any)=> reject()) ).
      }
    
    }

    return this._Promise
  }
}
