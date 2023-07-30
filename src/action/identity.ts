import {Account, Identity, IdentityAdditionalField, IdentitySub, Judgement} from '@gs/model'
import {Action, ActionContext} from './action'

export interface RenameIdentitySubData {
    subId: string
    name: string | undefined
}

export class RenameSubAction extends Action<RenameIdentitySubData> {
    async perform(ctx: ActionContext): Promise<void> {
        const sub = await ctx.store.getOrFail(IdentitySub, this.data.subId)

        sub.name = this.data.name

        await ctx.store.upsert(sub)
    }
}

export interface CreateIdentityData {
    id: string
    accountId: string
}

export class CreateIdentityAction extends Action<CreateIdentityData> {
    async perform(ctx: ActionContext): Promise<void> {
        const account = await ctx.store.getOrFail(Account, this.data.accountId)

        const identity = new Identity({
            id: this.data.id,
            account,
            isKilled: false,
            judgement: Judgement.Unknown,
        })

        await ctx.store.insert(identity)
    }
}

export interface SetIdentityData {
    identityId: string
    display: string | undefined
    email: string | undefined
    twitter: string | undefined
    riot: string | undefined
    image: string | undefined
    web: string | undefined
    pgpFingerprint: string | undefined
    legal: string | undefined
    additional: {
        name: string | undefined
        value: string | undefined
    }[]
}

export class SetIdentityAction extends Action<SetIdentityData> {
    async perform(ctx: ActionContext): Promise<void> {
        const identity = await ctx.store.getOrFail(Identity, this.data.identityId)

        identity.display = this.data.display
        identity.email = this.data.email
        identity.twitter = this.data.twitter
        identity.riot = this.data.riot
        identity.image = this.data.image
        identity.web = this.data.web
        identity.pgpFingerprint = this.data.pgpFingerprint
        identity.legal = this.data.legal
        identity.additional = this.data.additional.map((a) => new IdentityAdditionalField(a))

        await ctx.store.upsert(identity)
    }
}

export interface GiveJudgementData {
    identityId: string
    judgement: Judgement
}

export class GiveJudgementAction extends Action<GiveJudgementData> {
    async perform(ctx: ActionContext): Promise<void> {
        const identity = await ctx.store.getOrFail(Identity, this.data.identityId)

        identity.judgement = this.data.judgement

        await ctx.store.upsert(identity)
    }
}

export interface CreateIdentitySubData {
    id: string
    accountId: string
}

export class CreateIdentitySubAction extends Action<CreateIdentitySubData> {
    async perform(ctx: ActionContext): Promise<void> {
        const account = await ctx.store.getOrFail(Account, this.data.accountId)

        const sub = new IdentitySub({
            id: this.data.id,
            account,
        })

        await ctx.store.insert(sub)
    }
}

export interface AddIdentitySubData {
    identityId: string
    subId: string
}

export class AddIdentitySubAction extends Action<AddIdentitySubData> {
    async perform(ctx: ActionContext): Promise<void> {
        const identity = await ctx.store.getOrFail(Identity, this.data.identityId)
        const sub = await ctx.store.getOrFail(IdentitySub, this.data.subId)

        sub.super = identity

        await ctx.store.upsert(sub)
    }
}

export interface ClearIdentityData {
    identityId: string
}

export class ClearIdentityAction extends Action<ClearIdentityData> {
    async perform(ctx: ActionContext): Promise<void> {
        const identity = await ctx.store.getOrFail(Identity, this.data.identityId)

        identity.display = null
        identity.email = null
        identity.twitter = null
        identity.riot = null
        identity.image = null
        identity.web = null
        identity.pgpFingerprint = null
        identity.legal = null
        identity.additional = null

        await ctx.store.upsert(identity)
    }
}

export interface IdentityKilledData {
    identityId: string
}

export class KillIdentityAction extends Action<IdentityKilledData> {
    async perform(ctx: ActionContext): Promise<void> {
        const identity = await ctx.store.getOrFail(Identity, this.data.identityId)

        identity.isKilled = true

        await ctx.store.upsert(identity)
    }
}

export interface RemoveIdentitySubData {
    subId: string
}

export class RemoveIdentitySubAction extends Action<RemoveIdentitySubData> {
    async perform(ctx: ActionContext): Promise<void> {
        const sub = await ctx.store.getOrFail(IdentitySub, this.data.subId)

        sub.name = null
        sub.super = null

        await ctx.store.upsert(sub)
    }
}
