import {StoreWithCache} from '@belopash/squid-tools'
import {DataHandlerContext, SubstrateBlock} from '@subsquid/substrate-processor'
import {Action, EnsureAccount, EnsureIdentityAction, GiveJudgementAction, LazyAction} from '../../../../../action'
import {Account, Identity, Judgement} from '../../../../../model'
import {encodeAddress} from '../../../../subsocial'
import {CallItem, PalletCalls} from '../../../interfaces'
import {IdentityProvideJudgementCall} from '../../../types/calls'
import {parent} from '../parent'

export const calls: PalletCalls = {
    ...parent.PalletIdentity.calls,
    provide_judgement: function (
        ctx: DataHandlerContext<StoreWithCache, unknown>,
        block: SubstrateBlock,
        item: CallItem
    ) {
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

        return [
            new LazyAction(block, item.extrinsic, async (ctx) => {
                const a: Action[] = []

                const account = ctx.store.defer(Account, identityId)

                a.push(
                    new EnsureAccount(block, item.extrinsic, {
                        account: () => account.get(),
                        id: identityId,
                    }),
                    new EnsureIdentityAction(block, item.extrinsic, {
                        identity: () => identity.get(),
                        account: () => account.getOrFail(),
                        id: identityId,
                    })
                )

                return a
            }),
            new GiveJudgementAction(block, item.extrinsic, {
                identity: () => identity.getOrFail(),
                judgement,
            }),
        ]
    },
}

export const PalletIdentity = {
    ...parent.PalletIdentity,
    calls,
}
