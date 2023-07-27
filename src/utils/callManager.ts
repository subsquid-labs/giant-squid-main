import { Chain } from "@subsquid/substrate-processor/lib/chain";
import assert from "assert";
import { createHash } from "crypto";

// TODO: write context type
type Context = any

type Block = string
type Request<Args extends any[]> = [string, any, ...Args]
type BatchRequest = [Request<any[]>, ...Request<any[]>[]]
type Cache = Map<string, any[]>

export class CallCache {
    private static managers: WeakMap<Chain, CallCache> = new WeakMap()
    private deferred: Map<Block, BatchRequest> = new Map()
    private cache: Map<Block, Cache> = new Map()

    static get(ctx: Context): CallCache {
        let manager = this.managers.get(ctx._chain)
        if (manager == null) {
            manager = new CallCache(ctx._chain)
            this.managers.set(ctx._chain, manager)
        }

        return manager
    }

    private constructor(private chain: Chain) {}

    defer<Args extends any[]>(block: Block, req: Request<Args>) {
        let _deferred = this.deferred.get(block)
        if (_deferred == null) {
            this.deferred.set(block, [req])
        } else {
            _deferred.push(req)
        }

        return new CallDeferredValue(this, block, req)
    }

    async call<Args extends any[], R>(block: Block, req: Request<Args>): Promise<R> {
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

    async batchCall<Batch extends BatchRequest>(block: Block, batch: Batch): Promise<any[]> {
        const client = this.chain.client;

        const rawHashes = batch.map(createRequestHash)
        const calls = new Map<string, Request<any[]>>()
        for (let i = 0; i < batch.length; i++) {
            calls.set(rawHashes[i], batch[i])
        }

        // TODO: make batches from request method and keys
        const response = new Map<string, any[]>
        for (let [key, value] of calls) {
            response.set(key, await client.call(value[0], value[2]))
        }

        for (let i = 0; i < batch.length; i++) {
            const hash = rawHashes[i]
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

function createRequestHash(req: Request<any[]>) {
    let [method, fieldArgs, ...keyList] = req;
    const hash = createHash('sha256')
    hash.update(
        JSON.stringify({
            method,
            fieldArgs,
            keyList
        })
    )
    return hash.digest().toString('hex')
}

export class CallDeferredValue<T> {
    constructor(private manager: CallCache, private block: Block, private opts: Request<any[]>) {}

    async get(): Promise<T> {
        return this.manager.call(this.block, this.opts)
    }
}