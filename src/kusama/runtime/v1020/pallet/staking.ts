import {StoreWithCache} from '@belopash/squid-tools'
import {Account, BondType, PayeeType, Staker, StakingEra, StakingEraNominator, StakingEraValidator} from '@gs/model'
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
import {
    StakingCurrentElectedStorage,
    StakingCurrentEraStartSessionIndexStorage,
    StakingCurrentEraStorage,
    StakingForceEraStorage,
    StakingStakersStorage,
} from '@metadata/kusama/storage'
import * as metadata from '@metadata/kusama/v1020'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import assert from 'assert'
import {getOriginAccountId} from '../../../../utils/misc'
import {CallItem, CallMapper, Enum, MappingContext, Pallet} from '../../../interfaces'
import {Address} from '../primitive'
import * as system from './system'
import * as session from './session'

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
                    NotForcing: () => (triggerNewEra = eraLength >= sessionPerEra),
                    _: () => (triggerNewEra = false),
                })

                console.log(triggerNewEra, forceEra)
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

                const nominatorIds = new Set<string>()
                for (let i = 0; i < validatorAddresses.length; i++) {
                    const validatorId = new this.config.AccountId(validatorAddresses[i])
                    const validatorStaker = ctx.store.defer(Staker, validatorId.format())

                    const validatorInfo = validatorsInfo[i]

                    const eraValidatorId = `${eraId}-${validatorId.format()}`

                    ctx.queue.add('staking_newEraValidator', {
                        id: eraValidatorId,
                        era: () => era.getOrFail(),
                        staker: () => validatorStaker.getOrFail(),
                        total: validatorInfo.total,
                        own: validatorInfo.own,
                    })

                    const eraValidator = ctx.store.defer(StakingEraValidator, eraValidatorId)

                    for (let nomination of validatorInfo.others) {
                        const nominatorId = new this.config.AccountId(nomination.who)
                        const nominatorStaker = ctx.store.defer(Staker, nominatorId.format())

                        const eraNominatorId = `${currentEra}-${nominatorId.format()}`

                        if (!nominatorIds.has(eraNominatorId)) {
                            ctx.queue.add('staking_newEraNominator', {
                                id: eraNominatorId,
                                era: () => era.getOrFail(),
                                staker: () => nominatorStaker.getOrFail(),
                            })
                            nominatorIds.add(eraNominatorId)
                        }

                        const eraNominator = ctx.store.defer(StakingEraNominator, eraNominatorId)

                        const eraNominationId = `${currentEra}-${validatorId.format()}-${nominatorId.format()}`

                        ctx.queue.add('staking_newEraNomination', {
                            id: eraNominationId,
                            era: () => era.getOrFail(),
                            validator: () => eraValidator.getOrFail(),
                            nominator: () => eraNominator.getOrFail(),
                            vote: nomination.value,
                        })
                    }
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
                type: BondType.Bond,
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
                type: BondType.Bond,
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
                        type: BondType.Unbond,
                        amount,
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
                    ctx.queue.add('staker_kill', {
                        staker: () => staker,
                    })
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

export class NominateCall extends CallMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingNominateCall(ctx, item.call).asV1020

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

                const targets =
                    item.call.id === '0000009689-000006-72916-000001'
                        ? []
                        : data.targets.map((t) => this.config.Lookup.lookup(new Address(t)).format())

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

session.pallet.sessionManager = {
    newSession: (...args) => pallet.newSession(...args),
}
