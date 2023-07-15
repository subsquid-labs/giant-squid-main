import {TypeormDatabase} from '@subsquid/typeorm-store'
import {processor} from './processor'
import {StoreWithCache} from '@belopash/squid-tools'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {ActionQueue} from '../../action'
import {Runtime} from './interfaces'

export function getRuntime(block: SubstrateBlock): Runtime<any> {
    const version = block.specId.split('@')[1]
    switch (version) {
        case '1020':
        case '1021':
        case '1022':
        case '1023':
        case '1024':
        case '1025':
        case '1026':
        case '1027':
        case '1028':
        case '1029':
            return require('./runtime/v1020').runtime
        case '1030':
        case '1031':
            return require('./runtime/v1030').runtime
        case '1032':
        case '1033':
        case '1038':
        case '1039':
        case '1040':
        case '1042':
        case '1045':
            return require('./runtime/v1032').runtime
        case '1050':
        case '1051':
        case '1052':
        case '1053':
        case '1054':
        case '1055':
        case '1058':
        case '1062':
        case '2005':
        case '2007':
        case '2008':
        case '2011':
        case '2012':
        case '2013':
            return require('./runtime/v1050').runtime
        case '2015':
        case '2019':
        case '2022':
        case '2023':
        case '2024':
        case '2025':
        case '2026':
        case '2027':
            return require('./runtime/v2015').runtime
        case '2028':
        case '2029':
        case '2030':
        case '9010':
        case '9030':
        case '9040':
            return require('./runtime/v2028').runtime
        case '9050':
        case '9070':
        case '9080':
        case '9090':
        case '9100':
            return require('./runtime/v9050').runtime
        case '9111':
        case '9122':
            return require('./runtime/v9111').runtime
        case '9130':
            return require('./runtime/v9130').runtime
        case '9300':
            return require('./runtime/v9300').runtime
        case '9430':
            return require('./runtime/v9430').runtime
        default:
            throw new Error(`Unknown runtime version: ${version}`)
    }
}

processor.run(new TypeormDatabase(), async (_ctx) => {
    const store = StoreWithCache.create(_ctx.store)
    const queue = new ActionQueue()

    const ctx = {..._ctx, store, queue}
    for (let block of ctx.blocks) {
        const runtime = getRuntime(block.header)

        for (const item of block.items) {
            if (item.name === '*') continue

            const [palletName, itemName] = item.name.split('.')

            const pallet = runtime.getPallet(palletName)
            if (pallet == null) continue

            switch (item.kind) {
                case 'event': {
                    const mapper = pallet.getEvent(itemName)
                    if (mapper == null) continue
                    mapper.handle(ctx, block.header, item)

                    break
                }
                case 'call': {
                    const mapper = pallet.getCall[itemName]
                    if (mapper == null) continue
                    mapper.handle(ctx, block.header, item)

                    break
                }
            }
        }
    }

    await queue.process(ctx)
    await ctx.store.flush()
})
