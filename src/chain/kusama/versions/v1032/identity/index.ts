import {Account, Identity, Judgement} from '../../../../../model'
import {CallItem, PalletCalls} from '../../../interfaces'
import {DataHandlerContext, SubstrateBlock, toHex} from '@subsquid/substrate-processor'
import {encodeAddress} from '../../../../subsocial'
import {EnsureAccount, EnsureIdentityAction, GiveJudgementAction, SetIdentityAction} from '../../../../../action'
import {getOriginAccountId, unwrapData} from '../../../../../utils'
import {IdentitySetIdentityCall} from '../../../types/calls'
import {parent} from '../parent'
import {StoreWithCache} from '@belopash/squid-tools'

const calls: PalletCalls = {
    ...parent.PalletIdentity.calls,
    set_identity: function (ctx: DataHandlerContext<StoreWithCache, unknown>, block: SubstrateBlock, item: CallItem) {
        if (!item.call.success) return

        const identitySetData = new IdentitySetIdentityCall(ctx, item.call).asV1032

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const identityId = encodeAddress(origin)
        const identity = ctx.store.defer(Identity, identityId)

        const account = ctx.store.defer(Account, identityId)

        return [
            new EnsureAccount(block, item.extrinsic, {
                account: () => account.get(),
                id: identityId,
            }),
            new EnsureIdentityAction(block, item.extrinsic, {
                identity: () => identity.get(),
                account: () => account.getOrFail(),
                id: identityId,
            }),
            new GiveJudgementAction(block, item.extrinsic, {
                identity: () => identity.getOrFail(),
                judgement: Judgement.Unknown,
            }),
            new SetIdentityAction(block, item.extrinsic, {
                identity: () => identity.getOrFail(),
                web: unwrapData(identitySetData.info.web),
                display: unwrapData(identitySetData.info.display),
                legal: unwrapData(identitySetData.info.legal),
                email: unwrapData(identitySetData.info.email),
                image: unwrapData(identitySetData.info.image),
                pgpFingerprint: identitySetData.info.pgpFingerprint ? toHex(identitySetData.info.pgpFingerprint) : null,
                riot: unwrapData(identitySetData.info.riot),
                twitter: unwrapData(identitySetData.info.twitter),
                additional: identitySetData.info.additional.map((a) => ({
                    name: unwrapData(a[0])!,
                    value: unwrapData(a[1]),
                })),
            }),
        ]
    },
}

export const PalletIdentity = {
    ...parent.PalletIdentity,
    calls,
}
