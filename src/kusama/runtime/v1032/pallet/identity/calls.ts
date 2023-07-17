import {IdentitySetIdentityCall} from '@metadata/calls'
import {SubstrateBlock, toHex} from '@subsquid/substrate-processor'
import {Account, Identity, Judgement} from '../../../../../model'
import {getOriginAccountId} from '../../../../../utils'
import {CallItem, CallMapper, MappingContext} from '../../../../interfaces'
import {Config} from './config'
import {IdentityInfo} from './types'

export {SetSubsCallMapper, ProvideJudgmentCallMapper} from '../../../v1030/pallet/identity'

export class SetIdentityCallMapper implements CallMapper {
    constructor(readonly config: Config) {}

    handle(ctx: MappingContext<any>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const identitySetData = new IdentitySetIdentityCall(ctx, item.call).asV1032

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const identityId = new this.config.AccountId(origin).encode()
        const identity = ctx.store.defer(Identity, identityId)
        const account = ctx.store.defer(Account, identityId)

        const info = new IdentityInfo(identitySetData.info)
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
                web: info.web.serialize(),
                display: info.display.serialize(),
                legal: info.legal.serialize(),
                email: info.email.serialize(),
                image: info.image.serialize(),
                pgpFingerprint: identitySetData.info.pgpFingerprint
                    ? toHex(identitySetData.info.pgpFingerprint)
                    : undefined,
                riot: info.riot.serialize(),
                twitter: info.twitter.serialize(),
                additional: info.additional.map((a) => ({
                    name: a[0].serialize(),
                    value: a[1].serialize(),
                })),
            })
    }
}
