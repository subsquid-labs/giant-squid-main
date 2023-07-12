import assert from 'assert'
import {
    Account,
    BondType,
    Era,
    EraNomination,
    EraNominator,
    EraValidator,
    Staker,
    StakingBond,
    StakingReward,
} from '../model'
import {Action, ActionContext} from './action'

export interface RewardData {
    id: string
    amount: bigint
    account: () => Promise<Account | undefined>
    staker: () => Promise<Staker>
    era: () => Promise<Era> | undefined
    validator: () => Promise<EraValidator> | undefined
}

export class RewardAction extends Action<RewardData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const staker = await this.data.staker()
        const account = await this.data.account()

        const era = await this.data.era()
        const validator = await this.data.validator()

        const reward = new StakingReward({
            id: this.data.id,
            blockNumber: this.block.height,
            timestamp: new Date(this.block.timestamp),
            extrinsicHash: this.extrinsic?.hash,
            account,
            staker,
            amount: this.data.amount,
            era: era?.index,
            validator,
        })

        staker.totalReward += this.data.amount

        await ctx.store.insert(reward)
        await ctx.store.upsert(staker)
    }
}

export interface BondData {
    id: string
    amount: bigint
    type: BondType
    staker: () => Promise<Staker>
    account: () => Promise<Account>
}

export class BondAction extends Action<BondData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const staker = await this.data.staker()
        const account = await this.data.account()

        const bond = new StakingBond({
            id: this.data.id,
            blockNumber: this.block.height,
            timestamp: new Date(this.block.timestamp),
            extrinsicHash: this.extrinsic?.hash,
            staker,
            account,
            amount: this.data.amount,
            type: this.data.type,
        })

        switch (this.data.type) {
            case BondType.Bond:
            case BondType.Reward:
                staker.activeBond += this.data.amount
                break
            case BondType.Unbond:
                staker.activeBond -= this.data.amount
                break
            default:
                throw new Error(`Unexpected bond type: ${this.data.type}`)
        }

        await ctx.store.insert(bond)
        await ctx.store.upsert(staker)
    }
}

export interface NewEraData {
    id: string
    index: number
}

export class NewEraAction extends Action<NewEraData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const era = new Era({
            id: this.data.id,
            index: this.data.index,
            startedAt: this.block.height,
            timestamp: new Date(this.block.timestamp),
            nominatorsCount: 0,
            validatorsCount: 0,
            total: 0n,
        })

        await ctx.store.insert(era)
    }
}

export interface NewEraValidatorData {
    id: string
    era: () => Promise<Era>
    staker: () => Promise<Staker>
    total: bigint
    own: bigint
}

export class NewEraValidatorAction extends Action<NewEraValidatorData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const staker = await this.data.staker()
        const era = await this.data.era()

        assert(staker.data?.isTypeOf === 'ValidatorData')
        const validatorData = staker.data

        const validator = new EraValidator({
            id: this.data.id,
            era,
            staker,
            commission: validatorData.commission,
            eraReward: 0n,
            bonded: this.data.own,
            totalBonded: this.data.total,
        })

        if (validator.bonded != staker.activeBond) {
            ctx.log.warn(`Staker bonded value noq equal value in storage (${staker.activeBond}, ${validator.bonded})`)
        }

        await ctx.store.insert(validator)
    }
}

export interface NewEraNominatorData {
    id: string
    era: () => Promise<Era>
    staker: () => Promise<Staker>
}

export class NewEraNominatorAction extends Action<NewEraNominatorData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const staker = await this.data.staker()
        const era = await this.data.era()

        const nominator = new EraNominator({
            id: this.data.id,
            era,
            staker,
            eraReward: 0n,
            bonded: 0n,
        })

        await ctx.store.insert(nominator)
    }
}

export interface NewEraNominationData {
    id: string
    era: () => Promise<Era>
    validator: () => Promise<EraValidator>
    nominator: () => Promise<EraNominator>
    vote: bigint
}

export class NewEraNominationAction extends Action<NewEraNominationData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const validator = await this.data.validator()
        const nominator = await this.data.nominator()

        const nomination = new EraNomination({
            id: this.data.id,
            validator,
            nominator,
            vote: this.data.vote,
        })

        await ctx.store.insert(nomination)
    }
}
