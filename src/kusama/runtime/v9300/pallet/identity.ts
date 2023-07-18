import {IdentityProvideJudgementCall} from '@metadata/calls'
import {CallItem, CallMapper, EventMapper, IPallet, MappingContext} from '../../../interfaces'
import {
    AddSubCallMapper,
    Config,
    Data,
    IdentityClearEventMapper,
    IdentityJudgement,
    IdentityKillEventMapper,
    RenameSubCallMapper,
    SetIdentityCallMapper,
    SetSubsCallMapper,
} from '../../v9130/pallet/identity'
import assert from 'assert'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {Identity, Judgement, Account} from '../../../../model/generated'

export {
    AddSubCallMapper,
    Config,
    Data,
    IdentityClearEventMapper,
    IdentityJudgement,
    IdentityKillEventMapper,
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

export class ProvideJudgmentCallMapper implements CallMapper {
    constructor(readonly config: Config) {}

    handle(ctx: MappingContext<any>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const judgementGivenData = new IdentityProvideJudgementCall(ctx, item.call).asV9300
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
