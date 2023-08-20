import {StoreWithCache} from '@belopash/squid-tools'
import {Call, CallMapper, CallType, MappingContext, Pallet, Parameter} from '~interfaces'
import {Account, Identity, Judgement} from '~model'
import {implements_} from '~util/decorator'
import {getOriginAccountId} from '~util/misc'
import {toHex} from '@subsquid/substrate-processor'
import {
    Config,
    Data,
    DataRaw,
    Hash,
    IdentityClearedEventMapper,
    IdentityClearedEventType,
    IdentityJudgement,
    IdentityJudgementRaw,
    IdentityKilledEventMapper,
    IdentityKilledEventType,
    ProvideJudgmentCallMapper,
    ProvideJudgmentCallType,
    SetSubsCallMapper,
    SetSubsCallType,
} from './v1'

export {
    Config,
    Data,
    DataRaw,
    Hash,
    IdentityClearedEventMapper,
    IdentityClearedEventType,
    IdentityJudgement,
    IdentityJudgementRaw,
    IdentityKilledEventMapper,
    IdentityKilledEventType,
    ProvideJudgmentCallMapper,
    ProvideJudgmentCallType,
    SetSubsCallMapper,
    SetSubsCallType,
}

export type IdentityInfoRaw = {
    additional: [DataRaw, DataRaw][]
    display: DataRaw
    legal: DataRaw
    web: DataRaw
    riot: DataRaw
    email: DataRaw
    pgpFingerprint: Uint8Array | undefined
    image: DataRaw
    twitter: DataRaw
}
@implements_<Parameter<IdentityInfoRaw>>()
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

    constructor(readonly __value: IdentityInfoRaw) {
        this.display = new Data(__value.display)
        this.legal = new Data(__value.legal)
        this.web = new Data(__value.web)
        this.riot = new Data(__value.riot)
        this.email = new Data(__value.email)
        this.pgpFingerprint = __value.pgpFingerprint
        this.image = new Data(__value.image)
        this.twitter = new Data(__value.twitter)
        this.additional = __value.additional.map((a) => [new Data(a[0]), new Data(a[1])])
    }
}

export type SetIdentityCallType = CallType<{info: IdentityInfo}>

export interface PalletSetup<T extends Config> {
    Events: {
        IdentityCleared: IdentityClearedEventType<T>
        IdentityKilled: IdentityKilledEventType<T>
    }
    Calls: {
        set_subs: SetSubsCallType<T>
        provide_judgment: ProvideJudgmentCallType<T>
        set_identity: SetIdentityCallType
    }
}

export const SetIdentityCallMapper = <T extends Config>(
    P: Pallet<T, {Calls: {set_identity: SetIdentityCallType}}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const identitySetData = new P.Calls.set_identity(call)

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const accountAddress = new P.Config.AccountId(origin)
            const accountId = accountAddress.format()
            const accountDeferred = ctx.store.defer(Account, accountId)

            const identityId = accountId
            const identityDeferred = ctx.store.defer(Identity, identityId)

            const info = identitySetData.info

            ctx.queue
                .setBlock(call.block)
                .setExtrinsic(call.extrinsic)
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
                        ctx.queue.add('identity_create', {
                            id: identityId,
                            accountId,
                        })
                    }
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

export default <T extends Config = Config, S extends PalletSetup<T> = PalletSetup<T>>(setup: (Config: T) => S) => {
    class P extends Pallet(setup) {}

    P.CallMappers = {
        set_subs: SetSubsCallMapper(P, true),
        provide_judgment: ProvideJudgmentCallMapper(P, true),
        set_identity: SetIdentityCallMapper(P, true),
    }

    P.EventMappers = {
        IdentityClear: IdentityClearedEventMapper(P),
        IdentityKill: IdentityKilledEventMapper(P),
    }

    return P
}
