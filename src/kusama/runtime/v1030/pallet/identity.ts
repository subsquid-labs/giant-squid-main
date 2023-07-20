import {StoreWithCache} from '@belopash/squid-tools'
import {Account, Identity, IdentitySub, Judgement} from '@gs/model'
import {getOriginAccountId} from '@gs/util'
import {IdentityProvideJudgementCall, IdentitySetIdentityCall, IdentitySetSubsCall} from '@metadata/calls'
import {IdentityIdentityClearedEvent, IdentityIdentityKilledEvent} from '@metadata/events'
import * as metadata from '@metadata/v1030'
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

export const pallet = new Pallet<Config>()

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
        // switch (this.value.__kind) {
        //     case 'None':
        //         return undefined
        //     case 'BlakeTwo256':
        //     case 'Keccak256':
        //     case 'Sha256':
        //     case 'ShaThree256':
        //         return Buffer.from(this.value.value).toString('hex')
        //     case 'Raw0':
        //     case 'Raw1':
        //     case 'Raw2':
        //     case 'Raw3':
        //     case 'Raw4':
        //     case 'Raw5':
        //     case 'Raw6':
        //     case 'Raw7':
        //     case 'Raw8':
        //     case 'Raw9':
        //     case 'Raw10':
        //     case 'Raw11':
        //     case 'Raw12':
        //     case 'Raw13':
        //     case 'Raw14':
        //     case 'Raw15':
        //     case 'Raw16':
        //     case 'Raw17':
        //     case 'Raw18':
        //     case 'Raw19':
        //     case 'Raw20':
        //     case 'Raw21':
        //     case 'Raw22':
        //     case 'Raw23':
        //     case 'Raw24':
        //     case 'Raw25':
        //     case 'Raw26':
        //     case 'Raw27':
        //     case 'Raw28':
        //     case 'Raw29':
        //     case 'Raw30':
        //     case 'Raw31':
        //     case 'Raw32':
        //         Buffer.from(this.value.value)
        //             .toString('utf-8')
        //             .replace(/\u0000/g, '')
        //     default:
        //         throw new Error(`Unexpected case: ${this.value.__kind}`)
        // }
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

export class SetSubsCallMapper extends CallMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const setSubsData = new IdentitySetSubsCall(ctx, item.call).asV1030

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const identityId = new this.config.AccountId(origin)
        const identity = ctx.store.defer(Identity, identityId.format())

        ctx.queue.setBlock(block).setExtrinsic(item.extrinsic)
        for (const subData of setSubsData.subs) {
            const subId = new this.config.AccountId(subData[0])
            const sub = ctx.store.defer(IdentitySub, subId.format())

            const account = ctx.store.defer(Account, subId.format())

            ctx.queue
                .add('account_ensure', {
                    account: () => account.get(),
                    id: subId.format(),
                    publicKey: subId.serialize(),
                })
                .add('identity_ensureSub', {
                    sub: () => sub.get(),
                    account: () => account.getOrFail(),
                    id: subId.format(),
                })
                .add('identity_addSub', {
                    identity: () => identity.getOrFail(),
                    sub: () => sub.getOrFail(),
                })
                .add('identity_renameSub', {
                    sub: () => sub.getOrFail(),
                    name: new Data(subData[1]).serialize(),
                })
        }
    }
}

export class ProvideJudgmentCallMapper extends CallMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const judgementGivenData = new IdentityProvideJudgementCall(ctx, item.call).asV1030
        assert(judgementGivenData.target.__kind === 'AccountId')

        const identityId = new this.config.AccountId(judgementGivenData.target.value)
        const identity = ctx.store.defer(Identity, identityId.format(), {account: true})

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
            .lazy(async (queue) => {
                const account = ctx.store.defer(Account, identityId.format())

                queue
                    .setBlock(block)
                    .setExtrinsic(item.extrinsic)
                    .add('account_ensure', {
                        account: () => account.get(),
                        id: identityId.format(),
                        publicKey: identityId.serialize(),
                    })
                    .add('identity_ensure', {
                        identity: () => identity.get(),
                        account: () => account.getOrFail(),
                        id: identityId.format(),
                    })
            })
            .add('identity_judge', {
                identity: () => identity.getOrFail(),
                judgement,
            })
    }
}

export class SetIdentityCallMapper extends CallMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        if (!item.call.success) return

        const identitySetData = new IdentitySetIdentityCall(ctx, item.call).asV1030

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const identityId = new this.config.AccountId(origin)
        const identity = ctx.store.defer(Identity, identityId.format())
        const account = ctx.store.defer(Account, identityId.format())

        const info = new IdentityInfo(identitySetData.info)
        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .add('account_ensure', {
                account: () => account.get(),
                id: identityId.format(),
                publicKey: identityId.serialize(),
            })
            .add('identity_ensure', {
                identity: () => identity.get(),
                account: () => account.getOrFail(),
                id: identityId.format(),
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
                twitter: undefined,
                additional: info.additional.map((a) => ({
                    name: a[0].serialize(),
                    value: a[1].serialize(),
                })),
            })
    }
}

pallet.calls = {
    set_subs: new SetSubsCallMapper(pallet),
    provide_judgment: new ProvideJudgmentCallMapper(pallet),
    set_identity: new SetIdentityCallMapper(pallet),
}

export class IdentityClearEventMapper extends EventMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void {
        const data = new IdentityIdentityClearedEvent(ctx, item.event).asV1030

        const identityId = new this.config.AccountId(data[0]).format()
        const identity = ctx.store.defer(Identity, identityId, {subs: true})

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.event.extrinsic)
            .add('identity_clear', {
                identity: () => identity.getOrFail(),
            })
            .add('identity_judge', {
                identity: () => identity.getOrFail(),
                judgement: Judgement.Unknown,
            })
            .lazy(async (queue) => {
                const i = await identity.getOrFail()

                queue.setBlock(block).setExtrinsic(item.event.extrinsic)

                for (const s of i.subs) {
                    queue.add('identity_removeSub', {
                        sub: () => Promise.resolve(s),
                    })
                }
            })
    }
}

export class IdentityKillEventMapper extends EventMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void {
        const data = new IdentityIdentityKilledEvent(ctx, item.event).asV1030

        const identityId = new this.config.AccountId(data[0]).format()
        const identity = ctx.store.defer(Identity, identityId, {subs: true})

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.event.extrinsic)
            .add('identity_clear', {
                identity: () => identity.getOrFail(),
            })
            .add('identity_judge', {
                identity: () => identity.getOrFail(),
                judgement: Judgement.Unknown,
            })
            .lazy(async (queue) => {
                const i = await identity.getOrFail()

                queue.setBlock(block).setExtrinsic(item.event.extrinsic)

                for (const s of i.subs) {
                    queue.add('identity_removeSub', {
                        sub: () => Promise.resolve(s),
                    })
                }
            })
            .add('identity_kill', {
                identity: () => identity.getOrFail(),
            })
    }
}

pallet.events = {
    IdentityClear: new IdentityClearEventMapper(pallet),
    IdentityKill: new IdentityKillEventMapper(pallet),
}
