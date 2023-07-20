import {StoreWithCache} from '@belopash/squid-tools'
import {SubstrateBlock} from '@subsquid/substrate-processor'
import {CallItem, CallMapper, Enum, MappingContext, Pallet} from '../../../interfaces'
import * as system from './system'
import {StakingBondCall, StakingBondExtraCall, StakingUnbondCall} from '@metadata/calls'
import * as metadata from '@metadata/v1020'
import {Account, BondType, PayeeType, Staker} from '../../../../model/generated'
import {getOriginAccountId} from '../../../../utils/misc'
import assert from 'assert'

export interface Config extends system.Config {}

export const pallet = new Pallet<Config>()

export class RewardDestination extends Enum<metadata.RewardDestination> {}

export class BondCallMapper extends CallMapper<typeof pallet> {
    handle(ctx: MappingContext<StoreWithCache>, block: SubstrateBlock, item: CallItem): void {
        const data = new StakingBondCall(ctx, item.call).asV1020

        const origin = getOriginAccountId(item.call.origin)
        if (origin == null) return

        const stashId = new this.config.AccountId(origin)
        const stash = ctx.store.defer(Account, stashId.format())

        const controllerId = this.config.Lookup.lookup(data.controller)
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
                staker: () => Promise.resolve(undefined), // must not exist before this call
                id: stashId.format(),
                stash: () => stash.getOrFail(),
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
        const controller = ctx.store.defer(Account, controllerId.format(), {controllerOf: {stash: true}})

        ctx.queue
            .setBlock(block)
            .setExtrinsic(item.extrinsic)
            .lazy(async (queue) => {
                const staker = await controller.getOrFail().then((account) => account.controllerOf)
                assert(staker != null)

                queue.add('staking_bond', {
                    id: item.call.id,
                    account: () => Promise.resolve(staker.stash),
                    staker: () => Promise.resolve(staker),
                    type: BondType.Unbond,
                    amount: data.value > staker.activeBond ? staker.activeBond : data.value,
                })
            })
    }
}

pallet.calls = {
    bond: new BondCallMapper(pallet),
    bond_extra: new BondExtraCall(pallet),
    unbond: new UnbondCall(pallet),
}
