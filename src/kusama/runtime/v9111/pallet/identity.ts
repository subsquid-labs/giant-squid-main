import {Account, Identity, IdentitySub, Judgement} from '@gs/model'
import {getOriginAccountId} from '@gs/util'
import {IdentityAddSubCall, IdentityProvideJudgementCall, IdentityRenameSubCall} from '@metadata/calls'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import assert from 'assert'
import {CallItem, CallMapper, EventMapper, IPallet, MappingContext} from '../../../interfaces'
import {
    Config,
    Data,
    IdentityClearEventMapper,
    IdentityJudgement,
    IdentityKillEventMapper,
    SetIdentityCallMapper,
    SetSubsCallMapper,
} from '../../v9050/pallet/identity'

export {
    Config,
    Data,
    IdentityClearEventMapper,
    IdentityJudgement,
    IdentityKillEventMapper,
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

        const renameSubData = new IdentityRenameSubCall(ctx, item.call).asV9111
        assert(renameSubData.sub.__kind === 'Address32')

        const subId = new this.config.AccountId(renameSubData.sub.value).encode()
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

        const subAddedCallData = new IdentityAddSubCall(ctx, item.call).asV9111
        assert(subAddedCallData.sub.__kind === 'Address32')

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const identityId = new this.config.AccountId(origin).encode()
        const identity = ctx.store.defer(Identity, identityId)

        const subId = new this.config.AccountId(subAddedCallData.sub.value).encode()
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

export class ProvideJudgmentCallMapper implements CallMapper {
    constructor(readonly config: Config) {}

    handle(ctx: MappingContext<any>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const judgementGivenData = new IdentityProvideJudgementCall(ctx, item.call).asV9111
        assert(judgementGivenData.target.__kind === 'Address32')

        const identityId = new this.config.AccountId(judgementGivenData.target.value).encode()
        const identity = ctx.store.defer(Identity, identityId, {account: true})

        const judgement = new IdentityJudgement(judgementGivenData.judgement).match({
            Erroneous: () => Judgement.Erroneous,
            FeePaid: (fee) => Judgement.FeePaid,
            KnownGood: () => Judgement.KnownGood,
            LowQuality: () => Judgement.LowQuality,
            OutOfDate: () => Judgement.OutOfDate,
            Reasonable: () => Judgement.Reasonable,
            Unknown: () => Judgement.Reasonable,
        })

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async (queue) => {
                const account = ctx.store.defer(Account, identityId)

                queue
                    .setBlock(block)
                    .setExtrinsic(item.extrinsic)
                    .add('account_ensure', {
                        account: () => account.get(),
                        id: identityId,
                    })
                    .add('identity_ensure', {
                        identity: () => identity.get(),
                        account: () => account.getOrFail(),
                        id: identityId,
                    })
            })
            .add('identity_judge', {
                identity: () => identity.getOrFail(),
                judgement,
            })
    }
}
