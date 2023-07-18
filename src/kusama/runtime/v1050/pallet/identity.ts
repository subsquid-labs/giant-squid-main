import {IdentityProvideJudgementCall} from '@metadata/calls'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {Account, Identity, Judgement} from '../../../../model/generated'
import {CallItem, CallMapper, EventMapper, IPallet, MappingContext} from '../../../interfaces'
import {
    Config,
    Data,
    IdentityClearEventMapper,
    IdentityJudgement,
    IdentityKillEventMapper,
    SetIdentityCallMapper,
    SetSubsCallMapper,
} from '../../v1032/pallet/identity'

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
    }
}

export class ProvideJudgmentCallMapper implements CallMapper {
    constructor(readonly config: Config) {}

    handle(ctx: MappingContext<any>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const judgementGivenData = new IdentityProvideJudgementCall(ctx, item.call).asV1050

        const identityId = new this.config.AccountId(judgementGivenData.target).encode()
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
