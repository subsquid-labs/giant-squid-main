import {SubstrateBlock} from '@subsquid/substrate-processor'
import {Identity, Judgement} from '../../../../../model'
import {EventItem, EventMapper, MappingContext} from '../../../../interfaces'
import {IdentityIdentityClearedEvent, IdentityIdentityKilledEvent} from '@metadata/events'
import {Config} from './config'

export class IdentityClearEventMapper implements EventMapper {
    constructor(readonly config: Config) {}

    handle(ctx: MappingContext<any>, block: SubstrateBlock, item: EventItem): void {
        const data = new IdentityIdentityClearedEvent(ctx, item.event).asV1030

        const identityId = new this.config.AccountId(data[0]).encode()
        const identity = ctx.store.defer(Identity, identityId, {subs: true})

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.event.extrinsic)
            .add('identity_clear', {
                identity: () => identity.getOrFail(),
            })
            .add('identity_judge', {
                identity: () => identity.getOrFail(),
                judgement: Judgement.Unknown,
            })
            .lazy(async (queue) => {
                const i = await identity.getOrFail()

                queue.setBlock(block).setExtrinsic(item.event.extrinsic)

                for (const s of i.subs) {
                    queue.add('identity_removeSub', {
                        sub: () => Promise.resolve(s),
                    })
                }
            })
    }
}

export class IdentityKillEventMapper implements EventMapper {
    constructor(readonly config: Config) {}

    handle(ctx: MappingContext<any>, block: SubstrateBlock, item: EventItem): void {
        const data = new IdentityIdentityKilledEvent(ctx, item.event).asV1030

        const identityId = new this.config.AccountId(data[0]).encode()
        const identity = ctx.store.defer(Identity, identityId, {subs: true})

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.event.extrinsic)
            .add('identity_clear', {
                identity: () => identity.getOrFail(),
            })
            .add('identity_judge', {
                identity: () => identity.getOrFail(),
                judgement: Judgement.Unknown,
            })
            .lazy(async (queue) => {
                const i = await identity.getOrFail()

                queue.setBlock(block).setExtrinsic(item.event.extrinsic)

                for (const s of i.subs) {
                    queue.add('identity_removeSub', {
                        sub: () => Promise.resolve(s),
                    })
                }
            })
            .add('identity_kill', {
                identity: () => identity.getOrFail(),
            })
    }
}
