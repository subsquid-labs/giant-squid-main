import {Account, Identity, IdentityAdditionalField, Judgement, SubIdentity} from '../model'
import {Action, ActionContext} from './base'

export interface RenameSubIdentityData {
    sub: () => Promise<SubIdentity>
    name: string | null
}

export class RenameSubAction extends Action<RenameSubIdentityData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const sub = await this.data.sub()

        sub.name = this.data.name

        await ctx.store.upsert(sub)
    }
}

export interface EnsureIdentityData {
    identity: () => Promise<Identity | undefined>
    id: string
    account: () => Promise<Account>
}

export class EnsureIdentityAction extends Action<EnsureIdentityData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        let identity = await this.data.identity()
        if (identity != null) return

        const account = await this.data.account()

        identity = new Identity({
            id: this.data.id,
            account,
            isKilled: false,
            judgement: Judgement.Unknown,
        })

        await ctx.store.insert(identity)
    }
}

export interface SetIdentityData {
    identity: () => Promise<Identity>
    display: string | null
    email: string | null
    twitter: string | null
    riot: string | null
    image: string | null
    web: string | null
    pgpFingerprint: string | null
    legal: string | null
    additional: {
        name: string | null
        value: string | null
    }[]
}

export class SetIdentityAction extends Action<SetIdentityData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        let identity = await this.data.identity()

        identity.display = this.data.display
        identity.email = this.data.display
        identity.twitter = this.data.display
        identity.riot = this.data.display
        identity.image = this.data.display
        identity.web = this.data.display
        identity.pgpFingerprint = this.data.display
        identity.legal = this.data.display
        identity.additional = this.data.additional.map((a) => new IdentityAdditionalField(a))

        await ctx.store.upsert(identity)
    }
}

export interface GiveJudgementData {
    identity: () => Promise<Identity>
    judgement: Judgement
}

export class GiveJudgementAction extends Action<GiveJudgementData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const identity = await this.data.identity()

        identity.judgement = this.data.judgement

        await ctx.store.upsert(identity)
    }
}

export interface EnsureSubIdentityData {
    sub: () => Promise<SubIdentity | undefined>
    account: () => Promise<Account>
    id: string
}

export class EnsureSubIdentityAction extends Action<EnsureSubIdentityData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const account = await this.data.account()

        let sub = await this.data.sub()
        if (sub != null) return

        sub = new SubIdentity({
            id: this.data.id,
            account,
        })

        await ctx.store.insert(sub)
    }
}

export interface AddSubIdentityData {
    identity: () => Promise<Identity>
    sub: () => Promise<SubIdentity>
}

export class AddSubIdentityAction extends Action<AddSubIdentityData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const identity = await this.data.identity()

        let sub = await this.data.sub()

        sub.super = identity

        await ctx.store.upsert(sub)
    }
}

export interface ClearIdentityData {
    identity: () => Promise<Identity>
}

export class ClearIdentityAction extends Action<ClearIdentityData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const identity = await this.data.identity()

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
    identity: () => Promise<Identity>
}

export class KillIdentityAction extends Action<IdentityKilledData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const identity = await this.data.identity()

        identity.isKilled = true

        await ctx.store.upsert(identity)
    }
}

export interface RemoveSubIdentityData {
    sub: () => Promise<SubIdentity>
}

export class RemoveSubIdentityAction extends Action<RemoveSubIdentityData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const sub = await this.data.sub()

        sub.name = null
        sub.super = null

        await ctx.store.upsert(sub)
    }
}
