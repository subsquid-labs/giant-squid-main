import {StoreWithCache} from '@belopash/squid-tools'
import {SubstrateBlock, toHex} from '@subsquid/substrate-processor'
import {Account, Identity, Judgement} from '../../../../../model'
import {getOriginAccountId, unwrapData} from '../../../../../utils'
import {encodeAddress} from '../../../../subsocial'
import {CallItem, MappingContext, PalletCalls} from '../../../interfaces'
import {IdentitySetIdentityCall} from '../../../types/calls'
import {parent} from '../parent'

const calls: PalletCalls = {
    ...parent.PalletIdentity.calls,
    set_identity: function (ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem) {
        if (!item.call.success) return

        const identitySetData = new IdentitySetIdentityCall(ctx, item.call).asV1032

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const identityId = encodeAddress(origin)
        const identity = ctx.store.defer(Identity, identityId)

        const account = ctx.store.defer(Account, identityId)

        ctx.queue
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
            .add('identity_judge', {
                identity: () => identity.getOrFail(),
                judgement: Judgement.Unknown,
            })
            .add('identity_set', {
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
            })
    },
}

export const PalletIdentity = {
    ...parent.PalletIdentity,
    calls,
}
