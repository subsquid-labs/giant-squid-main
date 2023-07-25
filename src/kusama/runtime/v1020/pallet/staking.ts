import {StoreWithCache} from '@belopash/squid-tools'
import {
    Account,
    PayeeType,
    Staker,
    StakingEra,
    StakingEraNominator,
    StakingEraValidator,
    StakingSlash,
    StakingUnlockChunk,
} from '@gs/model'
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
import {getOriginAccountId} from '../../../../utils/misc'
import {CallItem, CallMapper, Enum, EventItem, EventMapper, MappingContext, Pallet} from '../../../interfaces'
import {Address} from '../primitive'
import * as session from './session'
import * as system from './system'

export class RewardDestination extends Enum<metadata.RewardDestination> {}
export class Forcing extends Enum<metadata.Forcing> {}

export interface Config extends system.Config {}

export class StakingPallet extends Pallet<Config> {
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
                const currentEra = await new StakingCurrentEraStorage(ctx, block).asV1020.get()

                const prevEra = await ctx.store.get(StakingEra, {where: {}, order: {index: 'DESC'}})
                assert(prevEra?.index != currentEra)

                if (prevEra != null) {
                    ctx.queue.add('staking_endEra', {
                        era: () => prevEra,
                    })
                }

                const eraId = currentEra.toString()
                ctx.queue.add('staking_newEra', {
                    id: eraId,
                    index: currentEra,
                })

                const era = ctx.store.defer(StakingEra, eraId)

                const validatorAddresses = await new StakingCurrentElectedStorage(ctx, block).asV1020.get()
                const validatorsInfo = await new StakingStakersStorage(ctx, block).asV1020.getMany(validatorAddresses)

                const validators = new Map<string, {id: string; bonded: bigint; total: bigint}>()
                const nominators = new Map<string, {id: string; bonded: bigint}>()
                const nominations = new Map<string, {validatorId: string; nominatorId: string; vote: bigint}>()
                for (let i = 0; i < validatorAddresses.length; i++) {
                    const validatorId = new this.config.AccountId(validatorAddresses[i])
                    const validatorInfo = validatorsInfo[i]

                    const eraValidatorId = `${eraId}-${validatorId.format()}`
                    validators.set(eraValidatorId, {
                        id: validatorId.format(),
                        bonded: validatorInfo.own,
                        total: validatorInfo.total,
                    })

                    for (let nomination of validatorInfo.others) {
                        const nominatorId = new this.config.AccountId(nomination.who)

                        const eraNominatorId = `${currentEra}-${nominatorId.format()}`
                        let nominator = nominators.get(eraNominatorId)
                        if (nominator == null) {
                            nominator = {
                                id: nominatorId.format(),
                                bonded: 0n,
                            }
                            nominators.set(eraNominatorId, nominator)
                        }
                        nominator.bonded += nomination.value

                        const eraNominationId = `${currentEra}-${validatorId.format()}-${nominatorId.format()}`
                        nominations.set(eraNominationId, {
                            validatorId: eraValidatorId,
                            nominatorId: eraNominatorId,
                            vote: nomination.value,
                        })
                    }
                }

                for (const [id, validator] of validators) {
                    const staker = ctx.store.defer(Staker, validator.id)

                    ctx.queue.add('staking_newEraValidator', {
                        id,
                        era: () => era.getOrFail(),
                        staker: () => staker.getOrFail(),
                        total: validator.total,
                        own: validator.bonded,
                    })
                }

                for (const [id, nominator] of nominators) {
                    const staker = ctx.store.defer(Staker, nominator.id)

                    ctx.queue.add('staking_newEraNominator', {
                        id,
                        era: () => era.getOrFail(),
                        staker: () => staker.getOrFail(),
                        bonded: nominator.bonded,
                    })
                }

                for (const [id, nomination] of nominations) {
                    const validator = ctx.store.defer(StakingEraValidator, nomination.validatorId)
                    const nominator = ctx.store.defer(StakingEraNominator, nomination.nominatorId)

                    ctx.queue.add('staking_newEraNomination', {
                        id,
                        era: () => era.getOrFail(),
                        validator: () => validator.getOrFail(),
                        nominator: () => nominator.getOrFail(),
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

export const pallet = new StakingPallet()

export class BondCallMapper extends CallMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingBondCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const stashId = new this.config.AccountId(origin)
        const stash = ctx.store.defer(Account, stashId.format())

        const controllerId = this.config.Lookup.lookup(new Address(data.controller))
        const controller = ctx.store.defer(Account, controllerId.format())

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .add('account_ensure', {
                account: () => stash.get(),
                id: stashId.format(),
                publicKey: stashId.serialize(),
            })
            .add('account_ensure', {
                account: () => controller.get(),
                id: controllerId.format(),
                publicKey: controllerId.serialize(),
            })

        const {payeeType, payee} = new RewardDestination(data.payee).match({
            None: () => ({payeeType: PayeeType.None, payee: undefined}),
            Stash: () => ({payeeType: PayeeType.Stash, payee: stash}),
            Staked: () => ({payeeType: PayeeType.Stash, payee: stash}),
            Controller: () => ({payeeType: PayeeType.Controller, payee: controller}),
            Account: (account) => {
                const accountId = new this.config.AccountId(account)
                const payee = ctx.store.defer(Account, accountId.format())

                ctx.queue.add('account_ensure', {
                    account: () => payee.get(),
                    id: accountId.format(),
                    publicKey: accountId.serialize(),
                })

                return {payeeType: PayeeType.Account, payee}
            },
        })

        const staker = ctx.store.defer(Staker, stashId.format())

        ctx.queue
            .add('staker_ensure', {
                staker: () => staker.get(),
                id: stashId.format(),
                stash: () => stash.getOrFail(),
            })
            .add('staker_revive', {
                staker: () => staker.getOrFail(),
            })
            .add('staker_setController', {
                staker: () => staker.getOrFail(),
                constroller: () => controller.getOrFail(),
            })
            .add('staker_setPayee', {
                staker: () => staker.getOrFail(),
                type: payeeType,
                payee: () => payee?.getOrFail(),
            })
            .add('staking_bond', {
                id: item.call.id,
                staker: () => staker.getOrFail(),
                account: () => stash.getOrFail(),
                amount: data.value,
            })
    }
}

export class BondExtraCall extends CallMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingBondExtraCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const stashId = new this.config.AccountId(origin)
        const stash = ctx.store.defer(Account, stashId.format())

        const staker = ctx.store.defer(Staker, stashId.format())

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .add('staking_bond', {
                id: item.call.id,
                account: () => stash.getOrFail(),
                staker: () => staker.getOrFail(),
                amount: data.maxAdditional,
            })
    }
}

export class UnbondCall extends CallMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingUnbondCall(ctx, item.call).asV1020

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

                const amount = data.value > staker.activeBond ? staker.activeBond : data.value
                if (amount === 0n) return

                const bondingDuration = new StakingBondingDurationConstant(ctx).asV1020
                const currentEra = await new StakingCurrentEraStorage(ctx, block).asV1020.get()

                ctx.queue
                    .add('staking_bond', {
                        id: item.call.id,
                        account: () => staker.stash,
                        staker: () => staker,
                        amount: -amount,
                    })
                    .add('staking_createUnlockChunk', {
                        id: item.call.id,
                        staker: () => staker,
                        amount,
                        lockedUntilEra: currentEra + bondingDuration,
                    })
            })
    }
}

export class ForceUnstakeCall extends CallMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingForceUnstakeCall(ctx, item.call).asV1020

        const stashId = new this.config.AccountId(data.stash)

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async () => {
                const staker = await ctx.store.getOrFail(Staker, {
                    where: {id: stashId.format()},
                    relations: {unlocking: true},
                })

                ctx.queue.add('staker_kill', {
                    staker: () => staker,
                })

                for (const chunk of staker.unlocking) {
                    ctx.queue.add('staking_withdrawUnlockChunk', {
                        chunk: () => chunk,
                    })
                }
            })
    }
}

export class WithdrawUnbondedCall extends CallMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingWithdrawUnbondedCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const controllerId = new this.config.AccountId(origin)

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async () => {
                const controller = await ctx.store.getOrFail(Account, {
                    where: {
                        id: controllerId.format(),
                    },
                    relations: {controllerOf: {stash: true, unlocking: true}},
                })
                const staker = controller.controllerOf
                assert(staker != null)

                const currentEra = await new StakingCurrentEraStorage(ctx, block).asV1020.get()

                const withdrawable = staker.unlocking.filter((c) => c.lockedUntilEra <= currentEra)
                for (const chunk of withdrawable) {
                    ctx.queue.add('staking_withdrawUnlockChunk', {chunk: () => chunk})
                }

                if (staker.activeBond === 0n && withdrawable.length == staker.unlocking.length) {
                    const ledger = await new StakingLedgerStorage(ctx, block).asV1020.get(origin)

                    if (ledger == null || new this.config.AccountId(ledger.stash).format() !== staker.id) {
                        ctx.queue.add('staker_kill', {
                            staker: () => staker,
                        })
                    }
                }
            })
    }
}

export class SetControllerCall extends CallMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingSetControllerCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const stashId = new this.config.AccountId(origin)

        const controllerId = this.config.Lookup.lookup(new Address(data.controller))
        const controller = ctx.store.defer(Account, controllerId.format())

        const staker = ctx.store.defer(Staker, stashId.format())

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .add('account_ensure', {
                account: () => controller.get(),
                id: controllerId.format(),
                publicKey: controllerId.serialize(),
            })
            .add('staker_setController', {
                staker: () => staker.getOrFail(),
                constroller: () => controller.getOrFail(),
            })
    }
}

export class SetPayeeCall extends CallMapper<typeof pallet> {
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

                new RewardDestination(data.payee).match({
                    None: () => {
                        ctx.queue.add('staker_setPayee', {
                            staker: () => staker,
                            type: PayeeType.None,
                            payee: () => undefined,
                        })
                    },
                    Stash: () => {
                        ctx.queue.add('staker_setPayee', {
                            staker: () => staker,
                            type: PayeeType.Stash,
                            payee: () => staker.stash,
                        })
                    },
                    Staked: () => {
                        ctx.queue.add('staker_setPayee', {
                            staker: () => staker,
                            type: PayeeType.Staked,
                            payee: () => staker.stash,
                        })
                    },
                    Controller: () => {
                        ctx.queue.add('staker_setPayee', {
                            staker: () => staker,
                            type: PayeeType.Controller,
                            payee: () => controller,
                        })
                    },
                    Account: (account) => {
                        const accountId = new this.config.AccountId(account)
                        const payee = ctx.store.defer(Account, accountId.format())

                        ctx.queue
                            .add('account_ensure', {
                                account: () => payee.get(),
                                id: accountId.format(),
                                publicKey: accountId.serialize(),
                            })
                            .add('staker_setPayee', {
                                staker: () => staker,
                                type: PayeeType.Account,
                                payee: () => payee.getOrFail(),
                            })

                        return {payeeType: PayeeType.Account, payee}
                    },
                })
            })
    }
}

export class ValidateCall extends CallMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingValidateCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const controllerId = new this.config.AccountId(origin)

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async () => {
                const controller = await ctx.store.getOrFail(Account, {
                    where: {
                        id: controllerId.format(),
                    },
                    relations: {controllerOf: true},
                })
                const staker = controller.controllerOf
                assert(staker != null)

                ctx.queue.add('staker_validate', {
                    staker: () => staker,
                    commission: data.prefs.commission,
                })
            })
    }
}

// const brokenNominations = ['0000009689-000006-72916-000001', '0000278674-000003-913cb', '0000318994-000003-7205c']

export class NominateCall extends CallMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingNominateCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const controllerId = new this.config.AccountId(origin)

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
                    where: {
                        id: controllerId.format(),
                    },
                    relations: {controllerOf: true},
                })
                const staker = controller.controllerOf
                assert(staker != null)

                ctx.queue.add('staker_nominate', {
                    staker: () => staker,
                    targets,
                })
            })
    }
}

export class ChillCall extends CallMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingChillCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const controllerId = new this.config.AccountId(origin)

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async () => {
                const controller = await ctx.store.getOrFail(Account, {
                    where: {
                        id: controllerId.format(),
                    },
                    relations: {controllerOf: true},
                })

                const staker = controller.controllerOf
                assert(staker != null)

                ctx.queue.add('staker_idle', {
                    staker: () => staker,
                })
            })
    }
}

export class RewardEvent extends EventMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void {
        const data = new StakingRewardEvent(ctx, item.event).asV1020
    }
}

export class SlashEvent extends EventMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: EventItem): void {
        const data = new StakingSlashEvent(ctx, item.event).asV1020

        const stashId = new this.config.AccountId(data[0])
        const staker = ctx.store.defer(Staker, stashId.format())
        const account = ctx.store.defer(Account, stashId.format())

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.event.extrinsic)
            .add('staking_slash', {
                id: item.event.id,
                account: () => account.getOrFail(),
                staker: () => staker.getOrFail(),
                amount: data[1],
            })
            .lazy(async () => {
                const s = await staker.getOrFail()

                let remainSlash = data[1]
                const slashAmount = (balance: bigint) => {
                    const value = MathBI.min(remainSlash, balance)
                    remainSlash = MathBI.max(remainSlash - value, 0n)

                    return value
                }

                ctx.queue.add('staking_bond', {
                    id: item.event.id,
                    staker: () => s,
                    account: () => account.getOrFail(),
                    amount: -slashAmount(s.activeBond),
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
                            chunk: () => chunk,
                            value: newChunkAmount,
                        })

                        if (newChunkAmount === 0n) {
                            ctx.queue.add('staking_withdrawUnlockChunk', {
                                chunk: () => chunk,
                            })
                        }
                    }
                }
            })
    }
}

// export class ForceNoErasCall extends CallMapper<typeof pallet> {
//     handle(ctx: MappingContext<StoreWithCache>): void {
//         pallet.setForceEra(ctx, new Forcing({__kind: 'ForceNone'}))
//     }
// }

// export class ForceNewEraCall extends CallMapper<typeof pallet> {
//     handle(ctx: MappingContext<StoreWithCache>): void {
//         pallet.setForceEra(ctx, new Forcing({__kind: 'ForceNew'}))
//     }
// }

// export class ForceNewEraAlwaysCall extends CallMapper<typeof pallet> {
//     handle(ctx: MappingContext<StoreWithCache>): void {
//         pallet.setForceEra(ctx, new Forcing({__kind: 'ForceAlways'}))
//     }
// }

pallet.calls = {
    bond: new BondCallMapper(pallet, true),
    bond_extra: new BondExtraCall(pallet, true),
    unbond: new UnbondCall(pallet, true),
    withdraw_unbonded: new WithdrawUnbondedCall(pallet, true),
    force_unstake: new ForceUnstakeCall(pallet, true),
    set_controller: new SetControllerCall(pallet, true),
    set_payee: new SetPayeeCall(pallet, true),
    validate: new ValidateCall(pallet, true),
    nominate: new NominateCall(pallet, true),
    chill: new ChillCall(pallet, true),
    // force_no_eras: new ForceNoErasCall(pallet, true),
    // force_new_era: new ForceNewEraCall(pallet, true),
    // force_new_era_always: new ForceNewEraAlwaysCall(pallet, true),
}

pallet.events = {
    Reward: new RewardEvent(pallet),
    Slash: new SlashEvent(pallet),
}

session.pallet.sessionManager = {
    newSession: (...args) => pallet.newSession(...args),
}
