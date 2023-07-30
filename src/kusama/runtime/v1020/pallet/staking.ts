import {StoreWithCache} from '@belopash/squid-tools'
import {Account, PayeeType, Staker, StakingEra, StakingUnlockChunk} from '@gs/model'
import {createEraId, createEraNominationId, createEraStakerId} from '@gs/util/id'
import {getOriginAccountId} from '@gs/util/misc'
import {
    StakingBondCall,
    StakingBondExtraCall,
    StakingChillCall,
    StakingForceUnstakeCall,
    StakingNominateCall,
    StakingSetControllerCall,
    StakingSetPayeeCall,
    StakingUnbondCall,
    StakingValidateCall,
    StakingWithdrawUnbondedCall,
} from '@metadata/kusama/calls'
import {StakingBondingDurationConstant, StakingSessionsPerEraConstant} from '@metadata/kusama/constants'
import {StakingRewardEvent, StakingSlashEvent} from '@metadata/kusama/events'
import {
    StakingCurrentElectedStorage,
    StakingCurrentEraStartSessionIndexStorage,
    StakingCurrentEraStorage,
    StakingForceEraStorage,
    StakingLedgerStorage,
    StakingStakersStorage,
} from '@metadata/kusama/storage'
import * as metadata from '@metadata/kusama/v1020'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import assert from 'assert'
import * as MathBI from 'extra-bigint'
import {CallItem, CallMapper, Enum, EventItem, EventMapper, MappingContext, Pallet} from '../../../interfaces'
import {Address} from '../primitive'
import pallet_session from './session'
import * as pallet_system from './system'

export class RewardDestination extends Enum<metadata.RewardDestination> {}
export class Forcing extends Enum<metadata.Forcing> {}

export interface Config extends pallet_system.Config {}

export class StakingPallet<C extends Config = Config> extends Pallet<C> {
    newSession(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, sessionIndex: number) {
        ctx.queue
            .setBlock(block)
            .setExtrinsic(undefined)
            .lazy(async () => {
                const forceEra = await new StakingForceEraStorage(ctx, block).asV1020.get().then((f) => new Forcing(f))
                const currentEraStartSessionIndex = await new StakingCurrentEraStartSessionIndexStorage(
                    ctx,
                    block
                ).asV1020.get()

                const eraLength = sessionIndex - currentEraStartSessionIndex
                assert(eraLength >= 0)

                const sessionPerEra = new StakingSessionsPerEraConstant(ctx).asV1020

                let triggerNewEra = false
                forceEra.match({
                    ForceNew: () => (triggerNewEra = true),
                    ForceAlways: () => (triggerNewEra = true),
                    NotForcing: () => (triggerNewEra = eraLength == 0),
                    _: () => (triggerNewEra = false),
                })

                if (triggerNewEra) {
                    this.newEra(ctx, block, sessionIndex)
                }
            })
    }

    newEra(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, sessionIndex: number) {
        ctx.queue
            .setBlock(block)
            .setExtrinsic(undefined)
            .lazy(async () => {
                const currentEraIndex = await new StakingCurrentEraStorage(ctx, block).asV1020.get()

                const prevEra = await ctx.store.get(StakingEra, {where: {}, order: {index: 'DESC'}})
                assert(prevEra?.index == null || prevEra.index < currentEraIndex)

                if (prevEra != null) {
                    ctx.queue.add('staking_endEra', {
                        eraId: prevEra.id,
                    })
                }

                const eraId = createEraId(currentEraIndex)
                ctx.queue.add('staking_newEra', {
                    id: eraId,
                    index: currentEraIndex,
                })

                const validatorAddresses = await new StakingCurrentElectedStorage(ctx, block).asV1020.get()
                const validatorsInfo = await new StakingStakersStorage(ctx, block).asV1020.getMany(validatorAddresses)

                const validators = new Map<string, {id: string; bonded: bigint; total: bigint}>()
                const nominators = new Map<string, {id: string; bonded: bigint}>()
                const nominations = new Map<string, {validatorId: string; nominatorId: string; vote: bigint}>()
                for (let i = 0; i < validatorAddresses.length; i++) {
                    const validatorAddress = new this.config.AccountId(validatorAddresses[i])
                    const validatorInfo = validatorsInfo[i]

                    const validatorId = validatorAddress.format()
                    const eraValidatorId = createEraStakerId(eraId, validatorId)
                    validators.set(eraValidatorId, {
                        id: validatorId,
                        bonded: validatorInfo.own,
                        total: validatorInfo.total,
                    })

                    for (let nomination of validatorInfo.others) {
                        const nominatorAddress = new this.config.AccountId(nomination.who)

                        const nominatorId = nominatorAddress.format()
                        const eraNominatorId = createEraStakerId(eraId, nominatorId)
                        let nominator = nominators.get(eraNominatorId)
                        if (nominator == null) {
                            nominator = {
                                id: nominatorId,
                                bonded: 0n,
                            }
                            nominators.set(eraNominatorId, nominator)
                        }
                        nominator.bonded += nomination.value

                        const eraNominationId = createEraNominationId(eraId, validatorId, nominatorId)
                        nominations.set(eraNominationId, {
                            validatorId: eraValidatorId,
                            nominatorId: eraNominatorId,
                            vote: nomination.value,
                        })
                    }
                }

                for (const [id, validator] of validators) {
                    ctx.queue.add('staking_newEraValidator', {
                        id,
                        eraId,
                        stakerId: validator.id,
                        total: validator.total,
                        own: validator.bonded,
                    })
                }

                for (const [id, nominator] of nominators) {
                    ctx.queue.add('staking_newEraNominator', {
                        id,
                        eraId,
                        stakerId: nominator.id,
                        bonded: nominator.bonded,
                    })
                }

                for (const [id, nomination] of nominations) {
                    ctx.queue.add('staking_newEraNomination', {
                        id,
                        eraId,
                        validatorId: nomination.validatorId,
                        nominatorId: nomination.nominatorId,
                        vote: nomination.vote,
                    })
                }
            })
    }

    // setForceEra(ctx: MappingContext<StoreWithCache>, forcing: Forcing) {
    //     this.forceEra = forcing
    // }

    // private async getForceEra(ctx: MappingContext<unknown>, block: SubstrateBlock) {
    //     if (this.forceEra == null) {
    //         this.forceEra = await new StakingForceEraStorage(ctx, block).asV1020.get().then((f) => new Forcing(f))
    //     }
    //     return this.forceEra!
    // }

    // private async getCurrentEraStartSessionIndex(ctx: MappingContext<unknown>, block: SubstrateBlock) {
    //     if (this.currentEraStartSessionIndex == null) {
    //         this.currentEraStartSessionIndex = await new StakingCurrentEraStartSessionIndexStorage(
    //             ctx,
    //             block
    //         ).asV1020.get()
    //     }
    //     return this.currentEraStartSessionIndex!
    // }
}

export class BondCallMapper extends CallMapper<StakingPallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingBondCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const stashAddress = new this.config.AccountId(origin)
        const stashId = stashAddress.format()
        const stashDeferred = ctx.store.defer(Account, stashId)

        const controllerAddress = this.config.Lookup.lookup(new Address(data.controller))
        const controllerId = controllerAddress.format()
        const controllerDeferred = ctx.store.defer(Account, controllerId)

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async () => {
                const stash = await stashDeferred.get()
                if (stash == null) {
                    ctx.queue.add('account_create', {
                        id: stashId,
                        publicKey: stashAddress.serialize(),
                    })
                }

                const controller = await controllerDeferred.get()
                if (controller == null) {
                    ctx.queue.add('account_create', {
                        id: controllerId,
                        publicKey: controllerAddress.serialize(),
                    })
                }
            })

        const {payeeType, payeeId} = new RewardDestination(data.payee).match({
            None: () => ({payeeType: PayeeType.None, payeeId: undefined}),
            Stash: () => ({payeeType: PayeeType.Stash, payeeId: stashId}),
            Staked: () => ({payeeType: PayeeType.Stash, payeeId: stashId}),
            Controller: () => ({payeeType: PayeeType.Controller, payeeId: controllerId}),
            Account: (account) => {
                const accountAddress = new this.config.AccountId(account)
                const payeeId = accountAddress.format()
                const payeeDeferred = ctx.store.defer(Account, payeeId)

                ctx.queue.lazy(async () => {
                    const payee = await payeeDeferred.get()
                    if (payee == null) {
                        ctx.queue.add('account_create', {
                            id: payeeId,
                            publicKey: accountAddress.serialize(),
                        })
                    }
                })

                return {payeeType: PayeeType.Account, payeeId}
            },
        })

        const stakerId = stashId
        const stakerDeferred = ctx.store.defer(Staker, stakerId)
        ctx.queue
            .lazy(async () => {
                const staker = await stakerDeferred.get()
                if (staker == null) {
                    ctx.queue.add('staker_create', {
                        id: stakerId,
                        stashId,
                    })
                }
            })
            .add('staker_revive', {
                stakerId,
            })
            .add('staker_setController', {
                stakerId,
                controllerId,
            })
            .add('staker_setPayee', {
                stakerId,
                type: payeeType,
                payeeId,
            })
            .add('staking_bond', {
                id: item.call.id,
                stakerId,
                accountId: stashId,
                amount: data.value,
            })
    }
}

export class BondExtraCall extends CallMapper<StakingPallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingBondExtraCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const stashAddress = new this.config.AccountId(origin)
        const stashId = stashAddress.format()
        ctx.store.defer(Account, stashId)

        const stakerId = stashId
        ctx.store.defer(Staker, stakerId)

        ctx.queue.setBlock(block).setExtrinsic(item.extrinsic).add('staking_bond', {
            id: item.call.id,
            accountId: stashId,
            stakerId,
            amount: data.maxAdditional,
        })
    }
}

export class UnbondCall extends CallMapper<StakingPallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingUnbondCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const controllerAddress = new this.config.AccountId(origin)
        const controllerId = controllerAddress.format()

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async () => {
                const controller = await ctx.store.getOrFail(Account, {
                    where: {id: controllerId},
                    relations: {controllerOf: {stash: true}},
                })
                const staker = controller.controllerOf
                assert(staker != null)

                const amount = data.value > staker.activeBond ? staker.activeBond : data.value
                if (amount === 0n) return

                const bondingDuration = new StakingBondingDurationConstant(ctx).asV1020
                const currentEra = await new StakingCurrentEraStorage(ctx, block).asV1020.get()

                ctx.queue
                    .add('staking_bond', {
                        id: item.call.id,
                        accountId: staker.stash.id,
                        stakerId: staker.id,
                        amount: -amount,
                    })
                    .add('staking_createUnlockChunk', {
                        id: item.call.id,
                        stakerId: staker.id,
                        amount,
                        lockedUntilEra: currentEra + bondingDuration,
                    })
            })
    }
}

export class ForceUnstakeCall extends CallMapper<StakingPallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingForceUnstakeCall(ctx, item.call).asV1020

        const stashAddress = new this.config.AccountId(data.stash)
        const stashId = stashAddress.format()
        const stakerId = stashId

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async () => {
                const staker = await ctx.store.getOrFail(Staker, {
                    where: {id: stakerId},
                    relations: {unlocking: true},
                })

                for (const chunk of staker.unlocking) {
                    ctx.queue.add('staking_withdrawUnlockChunk', {
                        chunkId: chunk.id,
                    })
                }
            })
            .add('staker_kill', {
                stakerId,
            })
    }
}

export class WithdrawUnbondedCall extends CallMapper<StakingPallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingWithdrawUnbondedCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const controllerAddress = new this.config.AccountId(origin)
        const controllerId = controllerAddress.format()

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async () => {
                const controller = await ctx.store.getOrFail(Account, {
                    where: {
                        id: controllerId,
                    },
                    relations: {controllerOf: {stash: true, unlocking: true}},
                })
                const staker = controller.controllerOf
                assert(staker != null)

                const currentEra = await new StakingCurrentEraStorage(ctx, block).asV1020.get()

                const withdrawable = staker.unlocking.filter((c) => c.lockedUntilEra <= currentEra)
                for (const chunk of withdrawable) {
                    ctx.queue.add('staking_withdrawUnlockChunk', {chunkId: chunk.id})
                }

                if (staker.activeBond === 0n && withdrawable.length == staker.unlocking.length) {
                    const ledger = await new StakingLedgerStorage(ctx, block).asV1020.get(origin)
                    const stashAddress = ledger ? new this.config.AccountId(ledger.stash) : undefined
                    const stashId = stashAddress?.format()

                    if (ledger == null || stashId !== staker.stash.id) {
                        ctx.queue.add('staker_kill', {
                            stakerId: staker.id,
                        })
                    }
                }
            })
    }
}

export class SetControllerCall extends CallMapper<StakingPallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingSetControllerCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const stashAddress = new this.config.AccountId(origin)
        const stashId = stashAddress.format()
        const stakerId = stashId
        ctx.store.defer(Staker, stakerId)

        const controllerAddress = this.config.Lookup.lookup(new Address(data.controller))
        const controllerId = controllerAddress.format()
        const controllerDeferred = ctx.store.defer(Account, controllerId)

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async () => {
                const controller = await controllerDeferred.get()
                if (controller == null) {
                    ctx.queue.add('account_create', {
                        id: controllerId,
                        publicKey: controllerAddress.serialize(),
                    })
                }
            })
            .add('staker_setController', {
                stakerId,
                controllerId,
            })
    }
}

export class SetPayeeCall extends CallMapper<StakingPallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingSetPayeeCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const controllerId = new this.config.AccountId(origin)

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async () => {
                const controller = await ctx.store.getOrFail(Account, {
                    where: {id: controllerId.format()},
                    relations: {controllerOf: {stash: true}},
                })
                const staker = controller.controllerOf
                assert(staker != null)

                const {payeeType, payeeId} = await new RewardDestination(data.payee).match({
                    None: () => ({payeeType: PayeeType.None, payeeId: undefined}),
                    Stash: () => ({payeeType: PayeeType.Stash, payeeId: staker.stash.id}),
                    Staked: () => ({payeeType: PayeeType.Staked, payeeId: staker.stash.id}),
                    Controller: () => ({payeeType: PayeeType.Controller, payeeId: controller.id}),
                    Account: async (account) => {
                        const accountAddress = new this.config.AccountId(account)
                        const payeeId = accountAddress.format()
                        const payeeDeferred = ctx.store.defer(Account, payeeId)

                        ctx.queue.lazy(async () => {
                            const payee = await payeeDeferred.get()
                            if (payee == null) {
                                ctx.queue.add('account_create', {
                                    id: payeeId,
                                    publicKey: accountAddress.serialize(),
                                })
                            }
                        })

                        return {payeeType: PayeeType.Account, payeeId}
                    },
                })

                ctx.queue.add('staker_setPayee', {
                    stakerId: staker.id,
                    type: payeeType,
                    payeeId,
                })
            })
    }
}

export class ValidateCall extends CallMapper<StakingPallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingValidateCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const controllerAddress = new this.config.AccountId(origin)
        const controllerId = controllerAddress.serialize()

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async () => {
                const controller = await ctx.store.getOrFail(Account, {
                    where: {id: controllerId},
                    relations: {controllerOf: true},
                })
                const staker = controller.controllerOf
                assert(staker != null)

                ctx.queue.add('staker_validate', {
                    stakerId: staker.id,
                    commission: data.prefs.commission,
                })
            })
    }
}

export class NominateCall extends CallMapper<StakingPallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingNominateCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const controllerAddress = new this.config.AccountId(origin)
        const controllerId = controllerAddress.serialize()

        let targets: string[]
        try {
            targets = data.targets.map((t) => this.config.Lookup.lookup(new Address(t)).format())
        } catch (err) {
            ctx.log.error({err}, `Unable to get nomitations at extrinsic ${item.extrinsic.hash}`)
            targets = []
        }

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async () => {
                const controller = await ctx.store.getOrFail(Account, {
                    where: {id: controllerId},
                    relations: {controllerOf: true},
                })
                const staker = controller.controllerOf
                assert(staker != null)

                ctx.queue.add('staker_nominate', {
                    stakerId: staker.id,
                    targets,
                })
            })
    }
}

export class ChillCall extends CallMapper<StakingPallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingChillCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const controllerAddress = new this.config.AccountId(origin)
        const controllerId = controllerAddress.serialize()

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async () => {
                const controller = await ctx.store.getOrFail(Account, {
                    where: {id: controllerId},
                    relations: {controllerOf: true},
                })

                const staker = controller.controllerOf
                assert(staker != null)

                ctx.queue.add('staker_idle', {
                    stakerId: staker.id,
                })
            })
    }
}

export class RewardEvent extends EventMapper<StakingPallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void {
        const data = new StakingRewardEvent(ctx, item.event).asV1020

        // ctx.queue.lazy(async () => {
        //     const era = await ctx.store.getOrFail(StakingEra, {where: {}, order: {index: 'DESC'}})

        //     ctx.queue.add()
        // })
    }
}

export class SlashEvent extends EventMapper<StakingPallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void {
        const data = new StakingSlashEvent(ctx, item.event).asV1020

        const stashAddress = new this.config.AccountId(data[0])
        const stashId = stashAddress.format()
        ctx.store.defer(Account, stashId)

        const stakerId = stashId
        const stakerDeferred = ctx.store.defer(Staker, stakerId)

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.event.extrinsic)
            .add('staking_slash', {
                id: item.event.id,
                stakerId,
                accountId: stashId,
                amount: data[1],
            })
            .lazy(async () => {
                const staker = await stakerDeferred.getOrFail()

                let remainSlash = data[1]
                const slashAmount = (balance: bigint) => {
                    const value = MathBI.min(remainSlash, balance)
                    remainSlash = MathBI.max(remainSlash - value, 0n)

                    return value
                }

                const bondDelta = slashAmount(staker.activeBond)
                ctx.queue.add('staking_bond', {
                    id: item.event.id,
                    stakerId,
                    accountId: stashId,
                    amount: -bondDelta,
                })

                if (remainSlash > 0) {
                    const unlocking = await ctx.store.find(StakingUnlockChunk, {
                        where: {withdrawn: false},
                        order: {blockNumber: 'ASC'},
                    })

                    for (const chunk of unlocking) {
                        if (remainSlash <= 0) break

                        const newChunkAmount = chunk.amount - slashAmount(chunk.amount)
                        ctx.queue.add('staking_updateUnlockChunk', {
                            chunkId: chunk.id,
                            value: newChunkAmount,
                        })

                        if (newChunkAmount === 0n) {
                            ctx.queue.add('staking_withdrawUnlockChunk', {
                                chunkId: chunk.id,
                            })
                        }
                    }
                }
            })
    }
}

// export class ForceNoErasCall extends CallMapper<StakingPallet> {
//     handle(ctx: MappingContext<StoreWithCache>): void {
//         pallet.setForceEra(ctx, new Forcing({__kind: 'ForceNone'}))
//     }
// }

// export class ForceNewEraCall extends CallMapper<StakingPallet> {
//     handle(ctx: MappingContext<StoreWithCache>): void {
//         pallet.setForceEra(ctx, new Forcing({__kind: 'ForceNew'}))
//     }
// }

// export class ForceNewEraAlwaysCall extends CallMapper<StakingPallet> {
//     handle(ctx: MappingContext<StoreWithCache>): void {
//         pallet.setForceEra(ctx, new Forcing({__kind: 'ForceAlways'}))
//     }
// }

const pallet_staking = new StakingPallet()

pallet_staking.calls = {
    bond: new BondCallMapper(pallet_staking, true),
    bond_extra: new BondExtraCall(pallet_staking, true),
    unbond: new UnbondCall(pallet_staking, true),
    withdraw_unbonded: new WithdrawUnbondedCall(pallet_staking, true),
    force_unstake: new ForceUnstakeCall(pallet_staking, true),
    set_controller: new SetControllerCall(pallet_staking, true),
    set_payee: new SetPayeeCall(pallet_staking, true),
    validate: new ValidateCall(pallet_staking, true),
    nominate: new NominateCall(pallet_staking, true),
    chill: new ChillCall(pallet_staking, true),
    // force_no_eras: new ForceNoErasCall(pallet, true),
    // force_new_era: new ForceNewEraCall(pallet, true),
    // force_new_era_always: new ForceNewEraAlwaysCall(pallet, true),
}

pallet_staking.events = {
    Reward: new RewardEvent(pallet_staking),
    Slash: new SlashEvent(pallet_staking),
}

pallet_session.sessionManager = {
    newSession: (...args) => pallet_staking.newSession(...args),
}

export default pallet_staking
