import assert from 'assert'
import {
    Account,
    StakingEra,
    StakingEraNomination,
    StakingEraNominator,
    StakingEraValidator,
    PayeeType,
    Staker,
    StakingBond,
    StakingReward,
    StakingRole,
    StakingUnlockChunk,
    StakingEraStatus,
    StakingData,
    ValidatorData,
    NominatorData,
    StakingSlash,
} from '@gs/model'
import {Action, ActionContext, Awaitable} from './action'

export interface RewardData {
    id: string
    amount: bigint
    account: () => Awaitable<Account | undefined>
    staker: () => Awaitable<Staker>
    era: () => Awaitable<StakingEra> | undefined
    validator: () => Awaitable<StakingEraValidator> | undefined
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

export interface SlashData {
    id: string
    amount: bigint
    account: () => Awaitable<Account | undefined>
    staker: () => Awaitable<Staker>
}

export class SlashAction extends Action<SlashData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const staker = await this.data.staker()
        const account = await this.data.account()

        const slash = new StakingSlash({
            id: this.data.id,
            blockNumber: this.block.height,
            timestamp: new Date(this.block.timestamp),
            extrinsicHash: this.extrinsic?.hash,
            account,
            staker,
            amount: this.data.amount,
        })

        staker.totalSlash += slash.amount

        await ctx.store.insert(slash)
        await ctx.store.upsert(staker)
    }
}

export interface BondData {
    id: string
    amount: bigint
    staker: () => Awaitable<Staker>
    account: () => Awaitable<Account>
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
        })

        staker.activeBond += this.data.amount

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
        const era = new StakingEra({
            id: this.data.id,
            index: this.data.index,
            startedAt: this.block.height,
            timestamp: new Date(this.block.timestamp),
            nominatorsCount: 0,
            validatorsCount: 0,
            total: 0n,
            status: StakingEraStatus.Active,
        })

        await ctx.store.insert(era)
    }
}

export interface EndEraData {
    era: () => Awaitable<StakingEra>
}

export class EndEraAction extends Action<EndEraData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const era = await this.data.era()

        era.status = StakingEraStatus.Ended
        era.endedAt = this.block.height

        await ctx.store.upsert(era)
    }
}
export interface SetEraRewardData {
    era: () => Awaitable<StakingEra>
    reward: bigint
}

export class SetEraRewardAction extends Action<SetEraRewardData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const era = await this.data.era()

        era.status = StakingEraStatus.Ended

        await ctx.store.upsert(era)
    }
}

export interface NewEraValidatorData {
    id: string
    era: () => Awaitable<StakingEra>
    staker: () => Awaitable<Staker>
    total: bigint
    own: bigint
}

export class NewEraValidatorAction extends Action<NewEraValidatorData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const staker = await this.data.staker()
        const era = await this.data.era()

        assert(staker.data instanceof ValidatorData, `Staker ${staker.id} has to be validator`)
        const validatorData = staker.data

        const validator = new StakingEraValidator({
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
            staker.activeBond = validator.bonded
            await ctx.store.upsert(staker)
        }

        await ctx.store.insert(validator)

        era.validatorsCount += 1
        era.total += validator.totalBonded

        await ctx.store.upsert(era)
    }
}

export interface NewEraNominatorData {
    id: string
    era: () => Awaitable<StakingEra>
    staker: () => Awaitable<Staker>
    bonded: bigint
}

export class NewEraNominatorAction extends Action<NewEraNominatorData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const staker = await this.data.staker()
        const era = await this.data.era()

        const nominator = new StakingEraNominator({
            id: this.data.id,
            era,
            staker,
            eraReward: 0n,
            bonded: this.data.bonded,
        })

        if (nominator.bonded != staker.activeBond) {
            ctx.log.warn(`Staker bonded value noq equal value in storage (${staker.activeBond}, ${nominator.bonded})`)
            staker.activeBond = nominator.bonded
            await ctx.store.upsert(staker)
        }

        await ctx.store.insert(nominator)

        era.nominatorsCount += 1

        await ctx.store.upsert(era)
    }
}

export interface NewEraNominationData {
    id: string
    era: () => Awaitable<StakingEra>
    validator: () => Awaitable<StakingEraValidator>
    nominator: () => Awaitable<StakingEraNominator>
    vote: bigint
}

export class NewEraNominationAction extends Action<NewEraNominationData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const validator = await this.data.validator()
        const nominator = await this.data.nominator()

        const nomination = new StakingEraNomination({
            id: this.data.id,
            validator,
            nominator,
            vote: this.data.vote,
        })

        await ctx.store.insert(nomination)
    }
}

export interface EnsureStakerData {
    id: string
    staker: () => Awaitable<Staker | undefined>
    stash: () => Awaitable<Account>
}

export class EnsureStakerAction extends Action<EnsureStakerData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        let staker = await this.data.staker()
        if (staker != null) return

        const stash = await this.data.stash()

        staker = new Staker({
            id: this.data.id,
            stash,
            activeBond: 0n,
            totalBond: 0n,
            totalReward: 0n,
            totalSlash: 0n,
            payeeType: PayeeType.None,
            role: StakingRole.Unknown,
        })

        await ctx.store.insert(staker)
    }
}

export interface SetControllerData {
    staker: () => Awaitable<Staker>
    constroller: () => Awaitable<Account>
}

export class SetControllerAction extends Action<SetControllerData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const staker = await this.data.staker()

        staker.controller = await this.data.constroller()

        if (staker.payeeType === PayeeType.Controller) {
            staker.payee = staker.controller
        }

        await ctx.store.upsert(staker)
    }
}

export interface SetPayeeData {
    staker: () => Awaitable<Staker>
    type: PayeeType
    payee: () => Awaitable<Account> | undefined
}

export class SetPayeeAction extends Action<SetPayeeData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const staker = await this.data.staker()

        staker.payeeType = this.data.type
        staker.payee = await this.data.payee()

        await ctx.store.upsert(staker)
    }
}

export interface KillStakerData {
    staker: () => Awaitable<Staker>
}

export class KillStakerAction extends Action<KillStakerData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const staker = await this.data.staker()

        staker.isKilled = true
        staker.controller = null
        staker.payeeType = PayeeType.None
        staker.payee = null
        staker.activeBond = 0n
        staker.role = StakingRole.Unknown
        staker.data = null

        await ctx.store.upsert(staker)
    }
}

export interface StakerValidateData {
    staker: () => Awaitable<Staker>
    commission: number
}

export class StakerValidateAction extends Action<StakerValidateData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const staker = await this.data.staker()

        staker.role = StakingRole.Validator
        staker.data = new ValidatorData({
            commission: this.data.commission,
            blocked: false,
        })

        await ctx.store.upsert(staker)
    }
}

export interface StakerNominateData {
    staker: () => Awaitable<Staker>
    targets: string[]
}

export class StakerNominateAction extends Action<StakerNominateData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const staker = await this.data.staker()

        staker.role = StakingRole.Nominator
        staker.data = new NominatorData({
            targets: this.data.targets,
        })

        await ctx.store.upsert(staker)
    }
}

export interface StakerIdleData {
    staker: () => Awaitable<Staker>
}

export class StakerIdleAction extends Action<StakerIdleData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const staker = await this.data.staker()

        staker.role = StakingRole.Idle
        staker.data = null

        await ctx.store.upsert(staker)
    }
}

export interface ReviveStakerData {
    staker: () => Awaitable<Staker>
}

export class ReviveStakerAction extends Action<ReviveStakerData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const staker = await this.data.staker()

        staker.isKilled = false

        await ctx.store.upsert(staker)
    }
}

export interface CreateUnlockChunkData {
    id: string
    staker: () => Awaitable<Staker>
    amount: bigint
    lockedUntilEra: number
}

export class CreateUnlockChunkAction extends Action<CreateUnlockChunkData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const staker = await this.data.staker()

        const chunk = new StakingUnlockChunk({
            id: this.data.id,
            blockNumber: this.block.height,
            timestamp: new Date(this.block.timestamp),
            staker,
            amount: this.data.amount,
            lockedUntilEra: this.data.lockedUntilEra,
            withdrawn: false,
        })

        await ctx.store.insert(chunk)
    }
}

export interface UpdateUnlockChunkData {
    chunk: () => Awaitable<StakingUnlockChunk>
    value: bigint
}

export class UpdateUnlockChunkAction extends Action<UpdateUnlockChunkData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const chunk = await this.data.chunk()

        chunk.amount = this.data.value

        await ctx.store.upsert(chunk)
    }
}

export interface WithdrawUnlockChunkData {
    chunk: () => Awaitable<StakingUnlockChunk>
}

export class WithdrawUnlockChunkAction extends Action<WithdrawUnlockChunkData> {
    protected async _perform(ctx: ActionContext): Promise<void> {
        const chunk = await this.data.chunk()

        chunk.withdrawn = true

        await ctx.store.upsert(chunk)
    }
}

// export interface ChangeBondData {
//     staker: () => Awaitable<Staker>
//     amount: bigint
// }

// export class ChangeBondAction extends Action<ChangeBondData> {
//     protected async _perform(ctx: ActionContext): Promise<void> {
//         const staker = await this.data.staker()

//         staker.activeBond += this.data.amount

//         await ctx.store.upsert(staker)
//     }
// }
