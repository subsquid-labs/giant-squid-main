import {SubstrateBlock} from '@subsquid/substrate-processor'
import {Identity, Judgement} from '../../../../model/generated'
import {CallMapper, EventItem, EventMapper, IPallet, MappingContext} from '../../../interfaces'
import {
    AddSubCallMapper,
    Config,
    Data,
    IdentityJudgement,
    ProvideJudgmentCallMapper,
    RenameSubCallMapper,
    SetIdentityCallMapper,
    SetSubsCallMapper,
} from '../../v9111/pallet/identity'
import {IdentityIdentityClearedEvent, IdentityIdentityKilledEvent} from '@metadata/events'

export {
    AddSubCallMapper,
    Config,
    Data,
    IdentityJudgement,
    ProvideJudgmentCallMapper,
    RenameSubCallMapper,
    SetIdentityCallMapper,
    SetSubsCallMapper,
}

export class Pallet implements IPallet<Config> {
    constructor(readonly config: Config) {}

    readonly events: Record<string, EventMapper> = {
        IdentityClear: new IdentityClearEventMapper(this.config),
        IdentityKill: new IdentityKillEventMapper(this.config),
    }

    readonly calls: Record<string, CallMapper> = {
        set_subs: new SetSubsCallMapper(this.config),
        provide_judgment: new ProvideJudgmentCallMapper(this.config),
        set_identity: new SetIdentityCallMapper(this.config),
        rename_sub: new RenameSubCallMapper(this.config),
        add_sub: new AddSubCallMapper(this.config),
    }
}

export class IdentityClearEventMapper implements EventMapper {
    constructor(readonly config: Config) {}

    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void {
        const data = new IdentityIdentityClearedEvent(ctx, item.event).asV9130

        const identityId = new this.config.AccountId(data.who).encode()
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

    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void {
        const data = new IdentityIdentityKilledEvent(ctx, item.event).asV9130

        const identityId = new this.config.AccountId(data.who).encode()
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
