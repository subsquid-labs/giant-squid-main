import {
    Account,
    NominatorData,
    PayeeType,
    Staker,
    StakingBond,
    StakingEra,
    StakingEraNomination,
    StakingEraNominator,
    StakingEraStatus,
    StakingEraValidator,
    StakingReward,
    StakingRole,
    StakingSlash,
    StakingUnlockChunk,
    ValidatorData,
} from '@gs/model'
import assert from 'assert'
import {Action, ActionContext} from './action'

export interface RewardData {
    id: string
    amount: bigint
    stakerId: string
    accountId?: string
    eraId?: string
    validatorId?: string
}

export class RewardAction extends Action<RewardData> {
    async perform(ctx: ActionContext): Promise<void> {
        const staker = await ctx.store.getOrFail(Staker, this.data.stakerId)
        const account = this.data.accountId ? await ctx.store.getOrFail(Account, this.data.accountId) : undefined

        const era = this.data.eraId ? await ctx.store.getOrFail(StakingEra, this.data.eraId) : undefined
        const validator = this.data.validatorId
            ? await ctx.store.getOrFail(StakingEraValidator, this.data.validatorId)
            : undefined

        const reward = new StakingReward({
            id: this.data.id,
            blockNumber: this.block.height,
            timestamp: new Date(this.block.timestamp ?? 0),
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
    stakerId: string
    accountId?: string
    amount: bigint
}

export class SlashAction extends Action<SlashData> {
    async perform(ctx: ActionContext): Promise<void> {
        const staker = await ctx.store.getOrFail(Staker, this.data.stakerId)
        const account = this.data.accountId ? await ctx.store.getOrFail(Account, this.data.accountId) : undefined

        const slash = new StakingSlash({
            id: this.data.id,
            blockNumber: this.block.height,
            timestamp: new Date(this.block.timestamp ?? 0),
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
    stakerId: string
    accountId: string
    amount: bigint
}

export class BondAction extends Action<BondData> {
    async perform(ctx: ActionContext): Promise<void> {
        const staker = await ctx.store.getOrFail(Staker, this.data.stakerId)
        const account = await ctx.store.getOrFail(Account, this.data.accountId)

        const bond = new StakingBond({
            id: this.data.id,
            blockNumber: this.block.height,
            timestamp: new Date(this.block.timestamp ?? 0),
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
    async perform(ctx: ActionContext): Promise<void> {
        const era = new StakingEra({
            id: this.data.id,
            index: this.data.index,
            startedAt: this.block.height,
            timestamp: new Date(this.block.timestamp ?? 0),
            nominatorsCount: 0,
            validatorsCount: 0,
            total: 0n,
            status: StakingEraStatus.Active,
        })

        await ctx.store.insert(era)
    }
}

export interface EndEraData {
    eraId: string
}

export class EndEraAction extends Action<EndEraData> {
    async perform(ctx: ActionContext): Promise<void> {
        const era = await ctx.store.getOrFail(StakingEra, this.data.eraId)

        era.status = StakingEraStatus.Ended
        era.endedAt = this.block.height

        await ctx.store.upsert(era)
    }
}
export interface SetEraRewardData {
    eraId: string
    reward: bigint
}

export class SetEraRewardAction extends Action<SetEraRewardData> {
    async perform(ctx: ActionContext): Promise<void> {
        const era = await ctx.store.getOrFail(StakingEra, this.data.eraId)

        era.status = StakingEraStatus.Ended

        await ctx.store.upsert(era)
    }
}

export interface NewEraValidatorData {
    id: string
    eraId: string
    stakerId: string
    total: bigint
    own: bigint
}

export class NewEraValidatorAction extends Action<NewEraValidatorData> {
    async perform(ctx: ActionContext): Promise<void> {
        const staker = await ctx.store.getOrFail(Staker, this.data.stakerId)
        const era = await ctx.store.getOrFail(StakingEra, this.data.eraId)

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
    eraId: string
    stakerId: string
    bonded: bigint
}

export class NewEraNominatorAction extends Action<NewEraNominatorData> {
    async perform(ctx: ActionContext): Promise<void> {
        const staker = await ctx.store.getOrFail(Staker, this.data.stakerId)
        const era = await ctx.store.getOrFail(StakingEra, this.data.eraId)

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
    eraId: string
    validatorId: string
    nominatorId: string
    vote: bigint
}

export class NewEraNominationAction extends Action<NewEraNominationData> {
    async perform(ctx: ActionContext): Promise<void> {
        const era = await ctx.store.getOrFail(StakingEra, this.data.eraId)
        const validator = await ctx.store.getOrFail(StakingEraValidator, this.data.validatorId)
        const nominator = await ctx.store.getOrFail(StakingEraNominator, this.data.nominatorId)

        const nomination = new StakingEraNomination({
            id: this.data.id,
            validator,
            nominator,
            vote: this.data.vote,
        })

        await ctx.store.insert(nomination)
    }
}

export interface CreateStakerData {
    id: string
    stashId: string
}

export class CreateStakerAction extends Action<CreateStakerData> {
    async perform(ctx: ActionContext): Promise<void> {
        const stash = await ctx.store.getOrFail(Account, this.data.stashId)

        const staker = new Staker({
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
    stakerId: string
    controllerId: string
}

export class SetControllerAction extends Action<SetControllerData> {
    async perform(ctx: ActionContext): Promise<void> {
        const staker = await ctx.store.getOrFail(Staker, this.data.stakerId)

        staker.controller = await ctx.store.getOrFail(Account, this.data.controllerId)

        if (staker.payeeType === PayeeType.Controller) {
            staker.payee = staker.controller
        }

        await ctx.store.upsert(staker)
    }
}

export interface SetPayeeData {
    stakerId: string
    type: PayeeType
    payeeId: string | undefined
}

export class SetPayeeAction extends Action<SetPayeeData> {
    async perform(ctx: ActionContext): Promise<void> {
        const staker = await ctx.store.getOrFail(Staker, this.data.stakerId)

        staker.payeeType = this.data.type
        staker.payee = this.data.payeeId ? await ctx.store.getOrFail(Account, this.data.payeeId) : null

        await ctx.store.upsert(staker)
    }
}

export interface KillStakerData {
    stakerId: string
}

export class KillStakerAction extends Action<KillStakerData> {
    async perform(ctx: ActionContext): Promise<void> {
        const staker = await ctx.store.getOrFail(Staker, this.data.stakerId)

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
    stakerId: string
    commission: number
}

export class StakerValidateAction extends Action<StakerValidateData> {
    async perform(ctx: ActionContext): Promise<void> {
        const staker = await ctx.store.getOrFail(Staker, this.data.stakerId)

        staker.role = StakingRole.Validator
        staker.data = new ValidatorData({
            commission: this.data.commission,
            blocked: false,
        })

        await ctx.store.upsert(staker)
    }
}

export interface StakerNominateData {
    stakerId: string
    targets: string[]
}

export class StakerNominateAction extends Action<StakerNominateData> {
    async perform(ctx: ActionContext): Promise<void> {
        const staker = await ctx.store.getOrFail(Staker, this.data.stakerId)

        staker.role = StakingRole.Nominator
        staker.data = new NominatorData({
            targets: this.data.targets,
        })

        await ctx.store.upsert(staker)
    }
}

export interface StakerIdleData {
    stakerId: string
}

export class StakerIdleAction extends Action<StakerIdleData> {
    async perform(ctx: ActionContext): Promise<void> {
        const staker = await ctx.store.getOrFail(Staker, this.data.stakerId)

        staker.role = StakingRole.Idle
        staker.data = null

        await ctx.store.upsert(staker)
    }
}

export interface ReviveStakerData {
    stakerId: string
}

export class ReviveStakerAction extends Action<ReviveStakerData> {
    async perform(ctx: ActionContext): Promise<void> {
        const staker = await ctx.store.getOrFail(Staker, this.data.stakerId)

        staker.isKilled = false

        await ctx.store.upsert(staker)
    }
}

export interface CreateUnlockChunkData {
    id: string
    stakerId: string
    amount: bigint
    lockedUntilEra: number
}

export class CreateUnlockChunkAction extends Action<CreateUnlockChunkData> {
    async perform(ctx: ActionContext): Promise<void> {
        const staker = await ctx.store.getOrFail(Staker, this.data.stakerId)

        const chunk = new StakingUnlockChunk({
            id: this.data.id,
            blockNumber: this.block.height,
            timestamp: new Date(this.block.timestamp ?? 0),
            staker,
            amount: this.data.amount,
            lockedUntilEra: this.data.lockedUntilEra,
            withdrawn: false,
        })

        await ctx.store.insert(chunk)
    }
}

export interface UpdateUnlockChunkData {
    chunkId: string
    value: bigint
}

export class UpdateUnlockChunkAction extends Action<UpdateUnlockChunkData> {
    async perform(ctx: ActionContext): Promise<void> {
        const chunk = await ctx.store.getOrFail(StakingUnlockChunk, this.data.chunkId)

        chunk.amount = this.data.value

        await ctx.store.upsert(chunk)
    }
}

export interface WithdrawUnlockChunkData {
    chunkId: string
}

export class WithdrawUnlockChunkAction extends Action<WithdrawUnlockChunkData> {
    async perform(ctx: ActionContext): Promise<void> {
        const chunk = await ctx.store.getOrFail(StakingUnlockChunk, this.data.chunkId)

        chunk.withdrawn = true

        await ctx.store.upsert(chunk)
    }
}

// export interface ChangeBondData {
//     stakerId: string
//     amount: bigint
// }

// export class ChangeBondAction extends Action<ChangeBondData> {
//     async perform(ctx: ActionContext): Promise<void> {
//         const staker =  await ctx.store.getOrFail(Staker, this.data.stakerId)

//         staker.activeBond += this.data.amount

//         await ctx.store.upsert(staker)
//     }
// }
