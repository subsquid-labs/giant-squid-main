import {StoreWithCache} from '@belopash/squid-tools'
import {Account, Identity, IdentitySub, Judgement} from '@gs/model'
import {getOriginAccountId} from '@gs/util/misc'
import {IdentityProvideJudgementCall, IdentitySetIdentityCall, IdentitySetSubsCall} from '@metadata/kusama/calls'
import {IdentityIdentityClearedEvent, IdentityIdentityKilledEvent} from '@metadata/kusama/events'
import * as metadata from '@metadata/kusama/v1030'
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
    PalletSetup,
    Parameter,
    Serialize,
} from '../../interfaces'
import * as pallet_system from './system'
import {implements_} from '@gs/util/decorator'

/*********
 * TYPES *
 *********/

@implements_<Parameter<Uint8Array> & Serialize>()
export class Raw {
    constructor(readonly __value: Uint8Array) {}

    serialize() {
        return Buffer.from(this.__value)
            .toString('utf-8')
            .replace(/\u0000/g, '')
    }
}

@implements_<Parameter<Uint8Array> & Serialize>()
export class Hash {
    constructor(readonly __value: Uint8Array) {}

    serialize() {
        return toHex(this.__value)
    }
}

@implements_<Parameter<metadata.Data> & Serialize>()
export class Data extends Enum<metadata.Data>()({
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

export class IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint: Uint8Array | undefined
    image: Data

    constructor(readonly value: metadata.IdentityInfo) {
        this.display = new Data(value.display)
        this.legal = new Data(value.legal)
        this.web = new Data(value.web)
        this.riot = new Data(value.riot)
        this.email = new Data(value.email)
        this.pgpFingerprint = value.pgpFingerprint
        this.image = new Data(value.image)
        this.additional = value.additional.map((a) => [new Data(a[0]), new Data(a[1])])
    }
}

export class IdentityJudgement extends Enum<metadata.IdentityJudgement>()({}) {}

/**********
 * PALLET *
 **********/

export type Config = pallet_system.Config & {}

export type Calls<T extends Config> = {
    set_subs: CallType<{subs: [InstanceType<T['AccountId']>, Data][]}>
    provide_judgment: CallType<{
        target: InstanceType<T['Lookup']['Source']>
        judgement: IdentityJudgement
    }>
    set_identity: CallType<{info: IdentityInfo}>
}

export type Events<T extends Config> = {
    IdentityCleared: EventType<{who: InstanceType<T['AccountId']>}>
    IdentityKilled: EventType<{who: InstanceType<T['AccountId']>}>
}

/*********
 * CALLS *
 *********/

export const SetSubsCall = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly subs: [InstanceType<T['AccountId']>, Data][]

        constructor(call: Call) {
            const data = new IdentitySetSubsCall(call).asV1030
            this.subs = data.subs.map((s) => [new P.Config.AccountId(s[0]) as any, new Data(s[1])])
        }
    }

export const ProvideJudgmentCall = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly target: InstanceType<T['Lookup']['Source']>
        readonly judgement: IdentityJudgement

        constructor(call: Call) {
            const data = new IdentityProvideJudgementCall(call).asV1030
            this.target = new P.Config.Lookup.Source(data.target) as any
            this.judgement = new IdentityJudgement(data.judgement)
        }
    }

export const SetIdentityCall = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly info: IdentityInfo

        constructor(call: Call) {
            const data = new IdentitySetIdentityCall(call).asV1030
            this.info = new IdentityInfo(data.info)
        }
    }

/**********
 * EVENTS *
 **********/

export const IdentityClearedEvent = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly who: InstanceType<Config['AccountId']>

        constructor(event: Event) {
            const data = new IdentityIdentityClearedEvent(event).asV1030
            this.who = new P.Config.AccountId(data[0])
        }
    }

export const IdentityKilledEvent = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly who: InstanceType<Config['AccountId']>

        constructor(event: Event) {
            const data = new IdentityIdentityKilledEvent(event).asV1030
            this.who = new P.Config.AccountId(data[0])
        }
    }

/***********
 * MAPPERS *
 ***********/

export const SetSubsCallMapper = <T extends Config>(
    P: Pallet<T, {Calls: Pick<Calls<T>, 'set_subs'>}>,
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
    P: Pallet<T, {Calls: Pick<Calls<T>, 'provide_judgment'>}>,
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
    P: Pallet<T, {Calls: Pick<Calls<T>, 'set_identity'>}>,
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
    P: Pallet<T, {Events: Pick<Events<T>, 'IdentityCleared'>}>
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
    P: Pallet<T, {Events: Pick<Events<T>, 'IdentityKilled'>}>
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

export default () => {
    class P extends Pallet<
        Config,
        {
            Calls: Calls<Config>
            Events: Events<Config>
        }
    >() {}

    P.Calls = {
        provide_judgment: ProvideJudgmentCall(P),
        set_identity: SetIdentityCall(P),
        set_subs: SetSubsCall(P),
    }

    P.Events = {
        IdentityCleared: IdentityClearedEvent(P),
        IdentityKilled: IdentityKilledEvent(P),
    }

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
