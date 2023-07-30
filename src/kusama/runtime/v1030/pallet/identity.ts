import {StoreWithCache} from '@belopash/squid-tools'
import {Account, Identity, IdentitySub, Judgement} from '@gs/model'
import {getOriginAccountId} from '@gs/util/misc'
import {IdentityProvideJudgementCall, IdentitySetIdentityCall, IdentitySetSubsCall} from '@metadata/kusama/calls'
import {IdentityIdentityClearedEvent, IdentityIdentityKilledEvent} from '@metadata/kusama/events'
import * as metadata from '@metadata/kusama/v1030'
import {SubstrateBlock, toHex} from '@subsquid/substrate-processor'
import assert from 'assert'
import {
    CallItem,
    CallMapper,
    Enum,
    EventItem,
    EventMapper,
    MappingContext,
    Pallet,
    Serialize,
} from '../../../interfaces'
import * as system from './system'

export interface Config extends system.Config {}

export class PalletIdentity<C extends Config = Config> extends Pallet<C> {}

export class Data extends Enum<metadata.Data> implements InstanceType<Serialize<string | undefined>> {
    constructor(value: metadata.Data) {
        super(value)
    }

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

export class IdentityJudgement extends Enum<metadata.IdentityJudgement> {
    constructor(value: metadata.IdentityJudgement) {
        super(value)
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

    constructor(private value: metadata.IdentityInfo) {
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

export class SetSubsCallMapper extends CallMapper<PalletIdentity> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const setSubsData = new IdentitySetSubsCall(ctx, item.call).asV1030

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const accountAddress = new this.config.AccountId(origin)
        const accountId = accountAddress.format()
        ctx.store.defer(Account, accountId)

        const identityId = accountId
        ctx.store.defer(Identity, identityId)

        ctx.queue.setBlock(block).setExtrinsic(item.extrinsic)

        for (const subData of setSubsData.subs) {
            const subAccountAddress = new this.config.AccountId(subData[0])

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
                    name: new Data(subData[1]).serialize(),
                })
        }
    }
}

export class ProvideJudgmentCallMapper extends CallMapper<PalletIdentity> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const judgementGivenData = new IdentityProvideJudgementCall(ctx, item.call).asV1030
        assert(judgementGivenData.target.__kind === 'AccountId')

        const accountAddress = new this.config.AccountId(judgementGivenData.target.value)
        const accountId = accountAddress.format()
        const accountDeferred = ctx.store.defer(Account, accountId)

        const identityId = accountId
        const identityDeferred = ctx.store.defer(Identity, identityId)

        const judgement = new IdentityJudgement(judgementGivenData.judgement).match({
            Erroneous: () => Judgement.Erroneous,
            FeePaid: (fee) => Judgement.FeePaid,
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

export class SetIdentityCallMapper extends CallMapper<PalletIdentity> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const identitySetData = new IdentitySetIdentityCall(ctx, item.call).asV1030

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const accountAddress = new this.config.AccountId(origin)
        const accountId = accountAddress.format()
        const accountDeferred = ctx.store.defer(Account, accountId)

        const identityId = accountId
        const identityDeferred = ctx.store.defer(Identity, identityId)

        const info = new IdentityInfo(identitySetData.info)

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
                twitter: undefined,
                additional: info.additional.map((a) => ({
                    name: a[0].serialize(),
                    value: a[1].serialize(),
                })),
            })
    }
}

export class IdentityClearEventMapper extends EventMapper<PalletIdentity> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void {
        const data = new IdentityIdentityClearedEvent(ctx, item.event).asV1030

        const accountId = new this.config.AccountId(data[0]).format()
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

export class IdentityKillEventMapper extends EventMapper<PalletIdentity> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void {
        const data = new IdentityIdentityKilledEvent(ctx, item.event).asV1030

        const accountId = new this.config.AccountId(data[0]).format()
        const identityId = accountId
        ctx.store.defer(Identity, identityId, {subs: true})

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

const pallet = new PalletIdentity()

pallet.calls = {
    set_subs: new SetSubsCallMapper(pallet),
    provide_judgment: new ProvideJudgmentCallMapper(pallet),
    set_identity: new SetIdentityCallMapper(pallet),
}

pallet.events = {
    IdentityClear: new IdentityClearEventMapper(pallet),
    IdentityKill: new IdentityKillEventMapper(pallet),
}

export default pallet
