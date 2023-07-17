import {StoreWithCache} from '@belopash/squid-tools'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {Account, Identity, Judgement} from '../../../../../model'
import {encodeAddress} from '../../../../subsocial'
import {CallItem, MappingContext, PalletCalls} from '../../../../interfaces'
import {IdentityProvideJudgementCall} from '@metadata/calls'
import {parent} from '../prev'

export const calls: PalletCalls = {
    ...parent.PalletIdentity.calls,
    provide_judgement: function (ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem) {
        if (!item.call.success) return

        const judgementGivenData = new IdentityProvideJudgementCall(ctx, item.call).asV1050

        const identityId = encodeAddress(judgementGivenData.target)
        const identity = ctx.store.defer(Identity, identityId)

        const getJudgment = () => {
            const kind = judgementGivenData.judgement.__kind
            switch (kind) {
                case Judgement.Erroneous:
                case Judgement.FeePaid:
                case Judgement.KnownGood:
                case Judgement.LowQuality:
                case Judgement.OutOfDate:
                case Judgement.Reasonable:
                case Judgement.Unknown:
                    return kind as Judgement
                default:
                    throw new Error(`Unknown judgement: ${kind}`)
            }
        }
        const judgement = getJudgment()

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
    },
}

export const PalletIdentity = {
    ...parent.PalletIdentity,
    calls,
}
