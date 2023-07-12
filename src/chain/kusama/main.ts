import {TypeormDatabase} from '@subsquid/typeorm-store'
import {ProcessorContext, processor} from './processor'
import {StoreWithCache} from '@belopash/squid-tools'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {Action} from '../../action'
import {Runtime} from './interfaces'

export function getRuntime(ctx: ProcessorContext<unknown>, block: SubstrateBlock): Runtime {
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
            return require('./versions/v1020')
        case '1030':
        case '1031':
            return require('./versions/v1030')
        case '1032':
        case '1033':
        case '1038':
        case '1039':
        case '1040':
        case '1042':
        case '1045':
            return require('./versions/v1032')
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
            return require('./versions/v1050')
        case '2015':
        case '2019':
        case '2022':
        case '2023':
        case '2024':
        case '2025':
        case '2026':
        case '2027':
            return require('./versions/v2015')
        case '2028':
        case '2029':
        case '2030':
        case '9010':
        case '9030':
        case '9040':
            return require('./versions/v2028')
        case '9050':
        case '9070':
        case '9080':
        case '9090':
        case '9100':
            return require('./versions/v9050')
        case '9111':
        case '9122':
            return require('./versions/v9111')
        case '9130':
            return require('./versions/v9130')
        case '9300':
            return require('./versions/v9300')
        case '9430':
            return require('./versions/v9430')
        default:
            throw new Error(`Unknown runtime version: ${version}`)
    }
}

export function getActions(ctx: ProcessorContext<StoreWithCache>): Action[] {
    const actions: Action[] = []

    for (let block of ctx.blocks) {
        const runtime = getRuntime(ctx, block.header)

        for (const item of block.items) {
            if (item.name === '*') continue

            const [palletName, itemName] = item.name.split('.')

            const pallet = runtime['Pallet' + palletName]
            console.log(pallet)
            if (pallet == null) continue

            switch (item.kind) {
                case 'event': {
                    const mapper = pallet.events[itemName]
                    if (mapper == null) continue

                    const a = mapper(ctx, block.header, item)
                    if (a != null) {
                        actions.push(...a)
                    }

                    break
                }
                case 'call': {
                    const mapper = pallet.calls[itemName]
                    if (mapper == null) continue

                    const a = mapper(ctx, block.header, item)
                    if (a != null) {
                        actions.push(...a)
                    }

                    break
                }
            }
        }
    }

    return actions
}

processor.run(new TypeormDatabase(), async (_ctx) => {
    let store = StoreWithCache.create(_ctx.store)
    let ctx = {..._ctx, store}

    const actions = getActions(ctx)

    await Action.process(ctx, actions)
    await ctx.store.flush()
})
