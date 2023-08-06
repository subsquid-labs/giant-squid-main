import {StoreWithCache} from '@belopash/squid-tools'
import {Account, Identity, IdentitySub, Judgement} from '@gs/model'
import {getOriginAccountId} from '@gs/util/misc'
import {IdentityProvideJudgementCall, IdentitySetIdentityCall, IdentitySetSubsCall} from '@metadata/kusama/calls'
import {IdentityIdentityClearedEvent, IdentityIdentityKilledEvent} from '@metadata/kusama/events'
import * as metadata from '@metadata/kusama/v1030'
import {SubstrateBlock, toHex} from '@subsquid/substrate-processor'
import {
    Call,
    CallItem,
    CallMapper,
    CallType,
    ChainContext,
    Enum,
    Event,
    EventItem,
    EventMapper,
    EventType,
    MappingContext,
    PalletBase,
    PalletSetup,
    Serialize,
} from '../../../interfaces'
import * as pallet_system from './system'

/*********
 * TYPES *
 *********/

export class Data
    extends Enum({
        None: null,
        BlakeTwo256: Uint8Array,
        Keccak256: Uint8Array,
        Sha256: Uint8Array,
        ShaThree256: Uint8Array,
        Raw0: Uint8Array,
        Raw1: Uint8Array,
        Raw2: Uint8Array,
        Raw3: Uint8Array,
        Raw4: Uint8Array,
        Raw5: Uint8Array,
        Raw6: Uint8Array,
        Raw7: Uint8Array,
        Raw8: Uint8Array,
        Raw9: Uint8Array,
        Raw10: Uint8Array,
        Raw11: Uint8Array,
        Raw12: Uint8Array,
        Raw13: Uint8Array,
        Raw14: Uint8Array,
        Raw15: Uint8Array,
        Raw16: Uint8Array,
        Raw17: Uint8Array,
        Raw18: Uint8Array,
        Raw19: Uint8Array,
        Raw20: Uint8Array,
        Raw21: Uint8Array,
        Raw22: Uint8Array,
        Raw23: Uint8Array,
        Raw24: Uint8Array,
        Raw25: Uint8Array,
        Raw26: Uint8Array,
        Raw27: Uint8Array,
        Raw28: Uint8Array,
        Raw29: Uint8Array,
        Raw30: Uint8Array,
        Raw31: Uint8Array,
        Raw32: Uint8Array,
    })
    implements Serialize<string | undefined>
{
    serialize(): string | undefined {
        return this.match({
            None: () => undefined,
            BlakeTwo256: (b) => this.serializeHash(b),
            Keccak256: (b) => this.serializeHash(b),
            Sha256: (b) => this.serializeHash(b),
            ShaThree256: (b) => this.serializeHash(b),
            Raw0: (b) => this.serializeRaw(b),
            Raw1: (b) => this.serializeRaw(b),
            Raw2: (b) => this.serializeRaw(b),
            Raw3: (b) => this.serializeRaw(b),
            Raw4: (b) => this.serializeRaw(b),
            Raw5: (b) => this.serializeRaw(b),
            Raw6: (b) => this.serializeRaw(b),
            Raw7: (b) => this.serializeRaw(b),
            Raw8: (b) => this.serializeRaw(b),
            Raw9: (b) => this.serializeRaw(b),
            Raw10: (b) => this.serializeRaw(b),
            Raw11: (b) => this.serializeRaw(b),
            Raw12: (b) => this.serializeRaw(b),
            Raw13: (b) => this.serializeRaw(b),
            Raw14: (b) => this.serializeRaw(b),
            Raw15: (b) => this.serializeRaw(b),
            Raw16: (b) => this.serializeRaw(b),
            Raw17: (b) => this.serializeRaw(b),
            Raw18: (b) => this.serializeRaw(b),
            Raw19: (b) => this.serializeRaw(b),
            Raw20: (b) => this.serializeRaw(b),
            Raw21: (b) => this.serializeRaw(b),
            Raw22: (b) => this.serializeRaw(b),
            Raw23: (b) => this.serializeRaw(b),
            Raw24: (b) => this.serializeRaw(b),
            Raw25: (b) => this.serializeRaw(b),
            Raw26: (b) => this.serializeRaw(b),
            Raw27: (b) => this.serializeRaw(b),
            Raw28: (b) => this.serializeRaw(b),
            Raw29: (b) => this.serializeRaw(b),
            Raw30: (b) => this.serializeRaw(b),
            Raw31: (b) => this.serializeRaw(b),
            Raw32: (b) => this.serializeRaw(b),
        })
    }

    private serializeRaw(buffer: Uint8Array) {
        return Buffer.from(buffer)
            .toString('utf-8')
            .replace(/\u0000/g, '')
    }

    private serializeHash(buffer: Uint8Array) {
        return toHex(buffer)
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

export class IdentityJudgement extends Enum({
    Unknown: null,
    FeePaid: BigInt,
    Reasonable: null,
    KnownGood: null,
    OutOfDate: null,
    LowQuality: null,
    Erroneous: null,
}) {}

/**********
 * PALLET *
 **********/

export type Config = pallet_system.Config & {}

export type Calls<T extends Config> = {
    set_subs: CallType<{subs: [InstanceType<T['AccountId']>, Data][]}>
    provide_judgment: CallType<{
        target: ReturnType<T['Lookup']['unlookup']>
        judgement: IdentityJudgement
    }>
    set_identity: CallType<{info: IdentityInfo}>
}

export type Events<T extends Config> = {
    IdentityCleared: EventType<{who: InstanceType<T['AccountId']>}>
    IdentityKilled: EventType<{who: InstanceType<T['AccountId']>}>
}

export class Pallet<T extends Config, S extends PalletSetup = {}> extends PalletBase<T, S> {}

/*********
 * CALLS *
 *********/

export const SetSubsCall = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly subs: [InstanceType<T['AccountId']>, Data][]

        constructor(call: Call) {
            const data = new IdentitySetSubsCall(call).asV1030
            this.subs = data.subs.map((s) => [
                new pallet.Config.AccountId(s[0]) as InstanceType<T['AccountId']>,
                new Data(s[1]),
            ])
        }
    }

export const ProvideJudgmentCall = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly target: InstanceType<T['Lookup']['Source']>
        readonly judgement: IdentityJudgement

        constructor(call: Call) {
            const data = new IdentityProvideJudgementCall(call).asV1030
            this.target = new pallet.Config.Lookup.Source(data.target) as InstanceType<T['Lookup']['Source']>
            this.judgement = new IdentityJudgement(data.judgement)
        }
    }

export const SetIdentityCall = <T extends Config>(pallet: Pallet<T>) =>
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

export const IdentityClearedEvent = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly who: InstanceType<Config['AccountId']>

        constructor(event: Event) {
            const data = new IdentityIdentityClearedEvent(event).asV1030
            this.who = new pallet.Config.AccountId(data[0])
        }
    }

export const IdentityKilledEvent = <T extends Config>(pallet: Pallet<T>) =>
    class {
        readonly who: InstanceType<Config['AccountId']>

        constructor(event: Event) {
            const data = new IdentityIdentityKilledEvent(event).asV1030
            this.who = new pallet.Config.AccountId(data[0])
        }
    }

/***********
 * MAPPERS *
 ***********/

export const SetSubsCallMapper = <T extends Config>(
    pallet: Pallet<T, {Calls: Pick<Calls<T>, 'set_subs'>}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && item.call.success != success) return

            const setSubsData = new pallet.Calls.set_subs(ctx, item.call)

            const origin = getOriginAccountId(item.call.origin)
            if (origin == null) return

            const accountAddress = new pallet.Config.AccountId(origin)
            const accountId = accountAddress.format()
            ctx.store.defer(Account, accountId)

            const identityId = accountId
            ctx.store.defer(Identity, identityId)

            ctx.queue.setBlock(block).setExtrinsic(item.extrinsic)

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
    pallet: Pallet<T, {Calls: Pick<Calls<T>, 'provide_judgment'>}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
            if (success != null && item.call.success != success) return

            const judgementGivenData = new pallet.Calls.provide_judgment(ctx, item.call)

            const accountAddress = pallet.Config.Lookup.lookup(judgementGivenData.target)
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
                    judgement,
                })
        }
    }

export const SetIdentityCallMapper = <T extends Config>(
    pallet: Pallet<T, {Calls: Pick<Calls<T>, 'set_identity'>}>,
    success?: boolean
) =>
    class implements CallMapper {
        handle(ctx: MappingContext<StoreWithCache>, call: Call): void {
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
    pallet: Pallet<T, {Events: Pick<Events<T>, 'IdentityCleared'>}>
) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void {
            const data = new pallet.Events.IdentityCleared(ctx, item.event)

            const accountId = data.who.format()
            const identityId = accountId
            ctx.store.defer(Identity, identityId)

            ctx.queue
                .setBlock(block)
                .setExtrinsic(item.event.extrinsic)
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
    pallet: Pallet<T, {Events: Pick<Events<T>, 'IdentityKilled'>}>
) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void {
            const data = new pallet.Events.IdentityKilled(ctx, item.event)

            const accountId = data.who.format()
            const identityId = accountId
            ctx.store.defer(Identity, identityId)

            ctx.queue
                .setBlock(block)
                .setExtrinsic(item.event.extrinsic)
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
    const pallet = new Pallet<
        Config,
        {
            Calls: Calls<Config>
            Events: Events<Config>
        }
    >()

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

    return pallet
}
