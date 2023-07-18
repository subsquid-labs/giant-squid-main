import {Account, Identity, IdentitySub} from '@gs/model'
import {getOriginAccountId} from '@gs/util'
import {IdentityAddSubCall, IdentityRenameSubCall} from '@metadata/calls'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {CallItem, CallMapper, EventMapper, IPallet, MappingContext} from '../../../interfaces'
import {
    Config,
    Data,
    IdentityClearEventMapper,
    IdentityJudgement,
    IdentityKillEventMapper,
    ProvideJudgmentCallMapper,
    SetIdentityCallMapper,
    SetSubsCallMapper,
} from '../../v1050/pallet/identity'

export {
    Config,
    Data,
    IdentityClearEventMapper,
    IdentityJudgement,
    IdentityKillEventMapper,
    ProvideJudgmentCallMapper,
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

export class RenameSubCallMapper implements CallMapper {
    constructor(readonly config: Config) {}

    handle(ctx: MappingContext<any>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const renameSubData = new IdentityRenameSubCall(ctx, item.call).asV2015

        const subId = new this.config.AccountId(renameSubData.sub).encode()
        const sub = ctx.store.defer(IdentitySub, subId)

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .add('identity_renameSub', {
                sub: () => sub.getOrFail(),
                name: new Data(renameSubData.data).serialize(),
            })
    }
}

export class AddSubCallMapper implements CallMapper {
    constructor(readonly config: Config) {}

    handle(ctx: MappingContext<any>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const subAddedCallData = new IdentityAddSubCall(ctx, item.call).asV2015

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const identityId = new this.config.AccountId(origin).encode()
        const identity = ctx.store.defer(Identity, identityId)

        const subId = new this.config.AccountId(subAddedCallData.sub).encode()
        const sub = ctx.store.defer(IdentitySub, subId)

        const account = ctx.store.defer(Account, subId)

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .add('account_ensure', {
                account: () => account.get(),
                id: subId,
            })
            .add('identity_ensureSub', {
                sub: () => sub.get(),
                account: () => account.getOrFail(),
                id: subId,
            })
            .add('identity_addSub', {
                identity: () => identity.getOrFail(),
                sub: () => sub.getOrFail(),
            })
            .add('identity_renameSub', {
                sub: () => sub.getOrFail(),
                name: new Data(subAddedCallData.data).serialize(),
            })
    }
}
