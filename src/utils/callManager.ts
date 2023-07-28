import { Chain } from "@subsquid/substrate-processor/lib/chain";
import assert from "assert";
import { createHash } from "crypto";
import * as storage from "@subsquid/substrate-processor/lib/util/storage"

// TODO: write context type
type Context = any

type Block = string
type CallArgs<Args extends any[]> = [string, string, ...Args]
type BatchCallArgs = [CallArgs<any[]>, ...CallArgs<any[]>[]]
type CallResult = any[]

export class CallCache {
    private static managers: WeakMap<Chain, CallCache> = new WeakMap()
    private deferred: Map<Block, BatchCallArgs> = new Map()
    private cache: Map<Block, Map<string, CallResult>> = new Map()

    static get(ctx: Context): CallCache {
        let manager = this.managers.get(ctx._chain)
        if (manager == null) {
            manager = new CallCache(ctx._chain)
            this.managers.set(ctx._chain, manager)
        }

        return manager
    }

    private constructor(private chain: Chain) {}

    defer<Args extends any[]>(block: Block, req: CallArgs<Args>) {
        let _deferred = this.deferred.get(block)
        if (_deferred == null) {
            this.deferred.set(block, [req])
        } else {
            _deferred.push(req)
        }

        return new CallDeferredValue(this, block, req)
    }

    async call<Args extends any[], R>(block: Block, req: CallArgs<Args>): Promise<R> {
        await this.load(block)

        const hash = createRequestHash(req)

        const _cache = this.cache.get(block)
        let res = _cache?.get(hash)

        if (res == null) {
            const batch = await this.batchCall(block, [req])
            res = batch[0]
        }

        return res as R
    }

    async batchCall<Batch extends BatchCallArgs>(block: Block, batch: Batch): Promise<any[]> {
        const hashes = batch.map(createRequestHash)

        const response = new Map<string, CallResult>
        {
            let i = 0
            for (let call of batch) {
                response.set(hashes[i], await this.chain.queryStorage(block, ...call))
                i++
            }
        }

        for (let i = 0; i < batch.length; i++) {
            const hash = hashes[i]
            const result = response.get(hash)
            assert(result != null)

            let _cache = this.cache.get(block)
            if (_cache == null) {
                _cache = new Map()
                this.cache.set(block, _cache)
            }
            _cache.set(hash, result)
        }

        return [...response.values()] as any
    }

    private async load(block: Block) {
        const _deferred = this.deferred.get(block)
        if (_deferred == null || _deferred.length == 0) return

        await this.batchCall(block, _deferred)
    }
}

function createRequestHash(req: CallArgs<any[]>) {
    let [prefix, name, ...keys] = req;
    const hash = createHash('sha256')
    hash.update(JSON.stringify({keys}))
    return storage.getNameHash(prefix) + storage.getNameHash(name) + hash.digest().toString('hex')
}

export class CallDeferredValue<T> {
    constructor(private manager: CallCache, private block: Block, private opts: CallArgs<any[]>) {}

    async get(): Promise<T> {
        return this.manager.call(this.block, this.opts)
    }
}