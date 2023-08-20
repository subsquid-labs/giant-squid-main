import {StoreWithCache} from '@belopash/squid-tools'
import {Account, Identity, IdentitySub, Judgement} from '~model'
import {getOriginAccountId} from '~util/misc'
import {toHex} from '@subsquid/substrate-processor'
import {
    Call,
    CallMapper,
    CallType,
    Enum,
    Event,
    EventMapper,
    EventType,
    MappingContext,
    Pallet,
    Parameter,
    Serialize,
} from '~interfaces'
import * as pallet_system from '~pallets/system/v1'
import {implements_} from '~util/decorator'
import {ValueOf} from 'type-fest'
import {Raw} from '~primitive'

/*********
 * TYPES *
 *********/

@implements_<Parameter<Uint8Array> & Serialize>()
export class Hash {
    constructor(readonly __value: Uint8Array) {}

    serialize() {
        return toHex(this.__value)
    }
}

type _1To32 =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32

export type DataRaw =
    | {
          __kind: 'None'
      }
    | ValueOf<{
          [K in `Raw${_1To32}`]: {
              __kind: K
              value: Uint8Array
          }
      }>
    | {
          __kind: 'BlakeTwo256'
          value: Uint8Array
      }
    | {
          __kind: 'Sha256'
          value: Uint8Array
      }
    | {
          __kind: 'Keccak256'
          value: Uint8Array
      }
    | {
          __kind: 'ShaThree256'
          value: Uint8Array
      }

@implements_<Parameter<DataRaw> & Serialize>()
export class Data extends Enum<DataRaw>()({
    BlakeTwo256: Hash,
    Keccak256: Hash,
    Sha256: Hash,
    ShaThree256: Hash,
    Raw0: Raw,
    Raw1: Raw,
    Raw2: Raw,
    Raw3: Raw,
    Raw4: Raw,
    Raw5: Raw,
    Raw6: Raw,
    Raw7: Raw,
    Raw8: Raw,
    Raw9: Raw,
    Raw10: Raw,
    Raw11: Raw,
    Raw12: Raw,
    Raw13: Raw,
    Raw14: Raw,
    Raw15: Raw,
    Raw16: Raw,
    Raw17: Raw,
    Raw18: Raw,
    Raw19: Raw,
    Raw20: Raw,
    Raw21: Raw,
    Raw22: Raw,
    Raw23: Raw,
    Raw24: Raw,
    Raw25: Raw,
    Raw26: Raw,
    Raw27: Raw,
    Raw28: Raw,
    Raw29: Raw,
    Raw30: Raw,
    Raw31: Raw,
    Raw32: Raw,
}) {
    serialize(): string {
        return this.match({
            None: () => 'null',
            BlakeTwo256: (b) => b.serialize(),
            Keccak256: (b) => b.serialize(),
            Sha256: (b) => b.serialize(),
            ShaThree256: (b) => b.serialize(),
            Raw0: (b) => b.serialize(),
            Raw1: (b) => b.serialize(),
            Raw2: (b) => b.serialize(),
            Raw3: (b) => b.serialize(),
            Raw4: (b) => b.serialize(),
            Raw5: (b) => b.serialize(),
            Raw6: (b) => b.serialize(),
            Raw7: (b) => b.serialize(),
            Raw8: (b) => b.serialize(),
            Raw9: (b) => b.serialize(),
            Raw10: (b) => b.serialize(),
            Raw11: (b) => b.serialize(),
            Raw12: (b) => b.serialize(),
            Raw13: (b) => b.serialize(),
            Raw14: (b) => b.serialize(),
            Raw15: (b) => b.serialize(),
            Raw16: (b) => b.serialize(),
            Raw17: (b) => b.serialize(),
            Raw18: (b) => b.serialize(),
            Raw19: (b) => b.serialize(),
            Raw20: (b) => b.serialize(),
            Raw21: (b) => b.serialize(),
            Raw22: (b) => b.serialize(),
            Raw23: (b) => b.serialize(),
            Raw24: (b) => b.serialize(),
            Raw25: (b) => b.serialize(),
            Raw26: (b) => b.serialize(),
            Raw27: (b) => b.serialize(),
            Raw28: (b) => b.serialize(),
            Raw29: (b) => b.serialize(),
            Raw30: (b) => b.serialize(),
            Raw31: (b) => b.serialize(),
            Raw32: (b) => b.serialize(),
        })
    }
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
}
@implements_<Parameter<IdentityInfoRaw>>()
export class IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint: Uint8Array | undefined
    image: Data

    constructor(readonly __value: IdentityInfoRaw) {
        this.display = new Data(__value.display)
        this.legal = new Data(__value.legal)
        this.web = new Data(__value.web)
        this.riot = new Data(__value.riot)
        this.email = new Data(__value.email)
        this.pgpFingerprint = __value.pgpFingerprint
        this.image = new Data(__value.image)
        this.additional = __value.additional.map((a) => [new Data(a[0]), new Data(a[1])])
    }
}

export type IdentityJudgementRaw =
    | {
          __kind: 'Unknown'
      }
    | {
          __kind: 'FeePaid'
          value: bigint
      }
    | {
          __kind: 'Reasonable'
      }
    | {
          __kind: 'KnownGood'
      }
    | {
          __kind: 'OutOfDate'
      }
    | {
          __kind: 'LowQuality'
      }
    | {
          __kind: 'Erroneous'
      }
@implements_<Parameter<IdentityJudgementRaw>>()
export class IdentityJudgement extends Enum<IdentityJudgementRaw>()({}) {}

/**********
 * PALLET *
 **********/

export interface Config extends pallet_system.Config {}

export type SetSubsCallType<T extends Pick<Config, 'AccountId'>> = CallType<{
    subs: [InstanceType<T['AccountId']>, Data][]
}>
export type ProvideJudgmentCallType<T extends Pick<Config, 'Lookup'>> = CallType<{
    target: InstanceType<T['Lookup']['Source']>
    judgement: IdentityJudgement
}>
export type SetIdentityCallType = CallType<{info: IdentityInfo}>

export type IdentityClearedEventType<T extends Pick<Config, 'AccountId'>> = EventType<{
    who: InstanceType<T['AccountId']>
}>
export type IdentityKilledEventType<T extends Pick<Config, 'AccountId'>> = EventType<{
    who: InstanceType<T['AccountId']>
}>

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

/***********
 * MAPPERS *
 ***********/

export const SetSubsCallMapper = <T extends Config>(
    P: Pallet<T, {Calls: {set_subs: SetSubsCallType<T>}}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const setSubsData = new P.Calls.set_subs(call)

            const origin = getOriginAccountId(call.origin)
            if (origin == null) return

            const accountAddress = new P.Config.AccountId(origin)
            const accountId = accountAddress.format()
            ctx.store.defer(Account, accountId)

            const identityId = accountId
            ctx.store.defer(Identity, identityId)

            ctx.queue.setBlock(call.block).setExtrinsic(call.extrinsic)

            for (const subData of setSubsData.subs) {
                const subAccountAddress = subData[0]

                const subAccountId = subAccountAddress.format()
                const subAccountDeferred = ctx.store.defer(Account, subAccountId)

                const subId = subAccountId
                const subDeferred = ctx.store.defer(IdentitySub, subId)

                ctx.queue
                    .lazy(async () => {
                        const sub = await subDeferred.get()
                        if (sub == null) {
                            const subAccount = await subAccountDeferred.get()
                            if (subAccount == null) {
                                ctx.queue.add('account_create', {
                                    id: subAccountId,
                                    publicKey: subAccountAddress.serialize(),
                                })
                            }

                            ctx.queue.add('identity_createSub', {
                                id: subId,
                                accountId: subAccountId,
                            })
                        }
                    })
                    .add('identity_addSub', {
                        identityId,
                        subId,
                    })
                    .add('identity_renameSub', {
                        subId,
                        name: subData[1].serialize(),
                    })
            }
        }
    }

export const ProvideJudgmentCallMapper = <T extends Config>(
    P: Pallet<T, {Calls: {provide_judgment: ProvideJudgmentCallType<T>}}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && call.success != success) return

            const judgementGivenData = new P.Calls.provide_judgment(call)

            const accountAddress = P.Config.Lookup.lookup(judgementGivenData.target)
            const accountId = accountAddress.format()
            const accountDeferred = ctx.store.defer(Account, accountId)

            const identityId = accountId
            const identityDeferred = ctx.store.defer(Identity, identityId)

            const judgement = judgementGivenData.judgement.match({
                Erroneous: () => Judgement.Erroneous,
                FeePaid: () => Judgement.FeePaid,
                KnownGood: () => Judgement.KnownGood,
                LowQuality: () => Judgement.LowQuality,
                OutOfDate: () => Judgement.OutOfDate,
                Reasonable: () => Judgement.Reasonable,
                Unknown: () => Judgement.Reasonable,
            })

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
                    }
                    ctx.queue.add('identity_create', {
                        id: identityId,
                        accountId,
                    })
                })
                .add('identity_judge', {
                    identityId,
                    judgement,
                })
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
                    twitter: undefined,
                    additional: info.additional.map((a) => ({
                        name: a[0].serialize(),
                        value: a[1].serialize(),
                    })),
                })
        }
    }

export const IdentityClearedEventMapper = <T extends Config>(
    P: Pallet<T, {Events: {IdentityCleared: IdentityClearedEventType<T>}}>
) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, event: Event): void {
            const data = new P.Events.IdentityCleared(event)

            const accountId = data.who.format()
            const identityId = accountId
            ctx.store.defer(Identity, identityId)

            ctx.queue
                .setBlock(event.block)
                .setExtrinsic(event.extrinsic)
                .add('identity_clear', {
                    identityId,
                })
                .add('identity_judge', {
                    identityId,
                    judgement: Judgement.Unknown,
                })
                .lazy(async () => {
                    const subs = await ctx.store.find(IdentitySub, {where: {super: {id: identityId}}})

                    for (const s of subs) {
                        ctx.queue.add('identity_removeSub', {
                            subId: s.id,
                        })
                    }
                })
        }
    }

export const IdentityKilledEventMapper = <T extends Config>(
    P: Pallet<T, {Events: {IdentityKilled: IdentityKilledEventType<T>}}>
) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, event: Event): void {
            const data = new P.Events.IdentityKilled(event)

            const accountId = data.who.format()
            const identityId = accountId
            ctx.store.defer(Identity, identityId)

            ctx.queue
                .setBlock(event.block)
                .setExtrinsic(event.extrinsic)
                .add('identity_clear', {
                    identityId,
                })
                .add('identity_judge', {
                    identityId,
                    judgement: Judgement.Unknown,
                })
                .lazy(async () => {
                    const subs = await ctx.store.find(IdentitySub, {where: {super: {id: identityId}}})

                    for (const s of subs) {
                        ctx.queue.add('identity_removeSub', {
                            subId: s.id,
                        })
                    }
                })
                .add('identity_kill', {
                    identityId,
                })
        }
    }

export default <T extends Config = Config, S extends PalletSetup<T> = PalletSetup<T>>(setup: (Config: T) => S) => {
    class P extends Pallet<T, S>(setup) {}

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
