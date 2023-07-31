import {StoreWithCache} from '@belopash/squid-tools'
import {getOriginAccountId} from '@gs/util/misc'
import {IdentitySetIdentityCall} from '@metadata/kusama/calls'
import * as metadata from '@metadata/kusama/v1032'
import {SubstrateBlock, toHex} from '@subsquid/substrate-processor'
import {Account, Identity, Judgement} from '../../../../model/generated'
import {Call, CallItem, CallMapper, CallType, ChainContext, MappingContext, PalletSetup} from '../../../interfaces'
import {
    Data,
    IdentityClearedEvent,
    IdentityClearedEventMapper,
    IdentityKilledEvent,
    IdentityKilledEventMapper,
    Pallet as PalletOld,
    ProvideJudgmentCall,
    ProvideJudgmentCallMapper,
    SetSubsCall,
    SetSubsCallMapper,
} from '../../v1030/pallet/identity'

export {
    Data,
    IdentityClearedEvent,
    IdentityClearedEventMapper,
    IdentityKilledEvent,
    IdentityKilledEventMapper,
    ProvideJudgmentCall,
    ProvideJudgmentCallMapper,
    SetSubsCall,
    SetSubsCallMapper,
}

export class IdentityInfo {
    readonly additional: [Data, Data][]
    readonly display: Data
    readonly legal: Data
    readonly web: Data
    readonly riot: Data
    readonly email: Data
    readonly pgpFingerprint: Uint8Array | undefined
    readonly image: Data
    readonly twitter: Data

    constructor(readonly value: metadata.IdentityInfo) {
        this.display = new Data(value.display)
        this.legal = new Data(value.legal)
        this.web = new Data(value.web)
        this.riot = new Data(value.riot)
        this.email = new Data(value.email)
        this.pgpFingerprint = value.pgpFingerprint
        this.image = new Data(value.image)
        this.twitter = new Data(value.twitter)
        this.additional = value.additional.map((a) => [new Data(a[0]), new Data(a[1])])
    }
}

export class Pallet<T extends PalletSetup = {}> extends PalletOld<
    T & {
        Calls: {
            set_identity: CallType<{info: IdentityInfo}>
        }
    }
> {}

export const SetIdentityCall = (pallet: Pallet) =>
    class {
        readonly info: IdentityInfo

        constructor(ctx: ChainContext, call: Call) {
            const data = new IdentitySetIdentityCall(ctx, call).asV1032
            this.info = new IdentityInfo(data.info)
        }
    }

export const SetIdentityCallMapper = (pallet: Pallet, success?: true) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
            if (success != null && item.call.success != success) return

            const identitySetData = new pallet.Calls.set_identity(ctx, item.call)

            const origin = getOriginAccountId(item.call.origin)
            if (origin == null) return

            const accountAddress = new pallet.Config.AccountId(origin)
            const accountId = accountAddress.format()
            const accountDeferred = ctx.store.defer(Account, accountId)

            const identityId = accountId
            const identityDeferred = ctx.store.defer(Identity, identityId)

            const info = identitySetData.info

            ctx.queue
                .setBlock(block)
                .setExtrinsic(item.extrinsic)
                .lazy(async () => {
                    const identity = await identityDeferred.get()
                    if (identity == null) {
                        const account = await accountDeferred.get()
                        if (account == null) {
                            ctx.queue.add('account_create', {
                                id: accountId,
                                publicKey: accountAddress.serialize(),
                            })
                        }
                    }
                    ctx.queue.add('identity_create', {
                        id: identityId,
                        accountId,
                    })
                })
                .add('identity_judge', {
                    identityId,
                    judgement: Judgement.Unknown,
                })
                .add('identity_set', {
                    identityId,
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

/******************
 * IMPLEMENTATION *
 ******************/

const pallet = new Pallet()

pallet.Calls = {
    provide_judgment: ProvideJudgmentCall(pallet),
    set_identity: SetIdentityCall(pallet),
    set_subs: SetSubsCall(pallet),
}

pallet.Events = {
    IdentityCleared: IdentityClearedEvent(pallet),
    IdentityKilled: IdentityKilledEvent(pallet),
}

pallet.CallMappers = {
    set_subs: SetSubsCallMapper(pallet, true),
    provide_judgment: ProvideJudgmentCallMapper(pallet, true),
    set_identity: SetIdentityCallMapper(pallet, true),
}

pallet.EventMappers = {
    IdentityClear: IdentityClearedEventMapper(pallet),
    IdentityKill: IdentityKilledEventMapper(pallet),
}

export default pallet
