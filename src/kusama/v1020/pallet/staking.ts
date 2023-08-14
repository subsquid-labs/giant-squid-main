import {
    StakingBondCall,
    StakingBondExtraCall,
    StakingForceUnstakeCall,
    StakingNominateCall,
    StakingSetControllerCall,
    StakingSetPayeeCall,
    StakingUnbondCall,
    StakingValidateCall,
    StakingWithdrawUnbondedCall,
} from '@metadata/kusama/calls'
import {StakingBondingDurationConstant} from '@metadata/kusama/constants'
import {StakingRewardEvent, StakingSlashEvent} from '@metadata/kusama/events'
import {
    StakingCurrentElectedStorage,
    StakingCurrentEraStartSessionIndexStorage,
    StakingCurrentEraStorage,
    StakingForceEraStorage,
    StakingLedgerStorage,
    StakingStakersStorage,
} from '@metadata/kusama/storage'
import {BlockHeader, Call, ChainContext, Event, Pallet} from '../../../interfaces'
import Default, {
    ChillCallMapper,
    Config,
    Exposure,
    Forcing,
    RewardDestination,
    StakingLedger,
    ValidatorPrefs,
} from '@gs/pallets/staking/v1'

/*********
 * CALLS *
 *********/

export const BondCall = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly controller: InstanceType<T['Lookup']['Source']>
        readonly value: bigint
        readonly payee: RewardDestination<T['AccountId']>

        constructor(call: Call) {
            const data = new StakingBondCall(call).asV1020

            this.controller = new Pallet.Config.Lookup.Source(data.controller) as any
            this.value = data.value
            this.payee = new (RewardDestination(Pallet.Config.AccountId))(data.payee)
        }
    }

export const BondExtraCall = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly maxAdditional: bigint

        constructor(call: Call) {
            const data = new StakingBondExtraCall(call).asV1020
            this.maxAdditional = data.maxAdditional
        }
    }

export const UnbondCall = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly value: bigint

        constructor(call: Call) {
            const data = new StakingUnbondCall(call).asV1020
            this.value = data.value
        }
    }

export const ForceUnstakeCall = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly stash: InstanceType<T['AccountId']>

        constructor(call: Call) {
            const data = new StakingForceUnstakeCall(call).asV1020
            this.stash = new Pallet.Config.AccountId(data.stash) as any
        }
    }

export const WithdrawUnbondedCall = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        constructor(call: Call) {
            const data = new StakingWithdrawUnbondedCall(call).asV1020
        }
    }

export const SetControllerCall = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly controller: InstanceType<T['Lookup']['Source']>

        constructor(call: Call) {
            const data = new StakingSetControllerCall(call).asV1020

            this.controller = new Pallet.Config.Lookup.Source(data.controller) as any
        }
    }

export const SetPayeeCall = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly payee: RewardDestination<T['AccountId']>

        constructor(call: Call) {
            const data = new StakingSetPayeeCall(call).asV1020

            this.payee = this.payee = new (RewardDestination(Pallet.Config.AccountId))(data.payee)
        }
    }

export const ValidateCall = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly prefs: ValidatorPrefs

        constructor(call: Call) {
            const data = new StakingValidateCall(call).asV1020
            this.prefs = new ValidatorPrefs(data.prefs)
        }
    }

export const NominateCall = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly targets: InstanceType<T['Lookup']['Source']>[]

        constructor(call: Call) {
            const data = new StakingNominateCall(call).asV1020
            this.targets = data.targets.map((t) => new Pallet.Config.Lookup.Source(t)) as any
        }
    }

/**********
 * EVENTS *
 **********/

export const RewardEvent = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly reward: bigint
        readonly remainer: bigint

        constructor(event: Event) {
            const data = new StakingRewardEvent(event).asV1020
            this.reward = data[0]
            this.remainer = data[1]
        }
    }

export const SlashEvent = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly staker: InstanceType<Config['AccountId']>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingSlashEvent(event).asV1020
            this.staker = new Pallet.Config.AccountId(data[0])
            this.amount = data[1]
        }
    }

/***********
 * STORAGE *
 ***********/

export const ForceEraStorage = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly value: Promise<Forcing>

        constructor(ctx: ChainContext, block: BlockHeader) {
            this.value = new StakingForceEraStorage(ctx, block).asV1020.get().then((v) => new Forcing(v))
        }
    }

export const CurrentEraStartSessionIndexStorage = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly value: Promise<number>

        constructor(ctx: ChainContext, block: BlockHeader) {
            this.value = new StakingCurrentEraStartSessionIndexStorage(ctx, block).asV1020.get()
        }
    }

export const CurrentEraStorage = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly value: Promise<number>

        constructor(ctx: ChainContext, block: BlockHeader) {
            this.value = new StakingCurrentEraStorage(ctx, block).asV1020.get()
        }
    }

export const LedgerStorage = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly value: Promise<InstanceType<StakingLedger<T['AccountId']>> | undefined>

        constructor(ctx: ChainContext, block: BlockHeader, key: InstanceType<Config['AccountId']>) {
            const Ledger = StakingLedger(Pallet.Config.AccountId)
            this.value = new StakingLedgerStorage(ctx, block).asV1020
                .get(key.__value)
                .then((v) => (v == null ? undefined : (new Ledger(v) as any)))
        }
    }

export const CurrentElectedStorage = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly value: Promise<InstanceType<T['AccountId']>[]>

        constructor(ctx: ChainContext, block: BlockHeader) {
            this.value = new StakingCurrentElectedStorage(ctx, block).asV1020
                .get()
                .then((r) => r.map((k) => new Pallet.Config.AccountId(k) as any))
        }
    }

export const StakersStorage = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly value: Promise<InstanceType<Exposure<T['AccountId']>>[]>

        constructor(ctx: ChainContext, block: BlockHeader, key: InstanceType<T['AccountId']>[]) {
            const _Exposure = Exposure(Pallet.Config.AccountId)

            this.value = new StakingStakersStorage(ctx, block).asV1020
                .getMany(key.map((k) => k.__value))
                .then((r) => r.map((k) => new _Exposure(k)))
        }
    }

export const BondingDurationConstant = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly value: number

        constructor(block: BlockHeader) {
            this.value = new StakingBondingDurationConstant(block).asV1020
        }
    }

export default () => {
    class P extends Default() {}

    P.Calls = {
        bond: BondCall(P),
        bond_extra: BondExtraCall(P),
        unbond: UnbondCall(P),
        force_unstake: ForceUnstakeCall(P),
        withdraw_unbonded: WithdrawUnbondedCall(P),
        set_controller: SetControllerCall(P),
        set_payee: SetPayeeCall(P),
        validate: ValidateCall(P),
        nominate: NominateCall(P),
        chill: ChillCallMapper(P),
    }

    P.Events = {
        Reward: RewardEvent(P),
        Slash: SlashEvent(P),
    }

    P.Storage = {
        ForceEra: ForceEraStorage(P),
        CurrentEraStartSessionIndex: CurrentEraStartSessionIndexStorage(P),
        CurrentEra: CurrentEraStorage(P),
        Ledger: LedgerStorage(P),
        CurrentElected: CurrentElectedStorage(P),
        Stakers: StakersStorage(P),
    }

    P.Constants = {
        BondingDuration: BondingDurationConstant(P),
    }

    return P
}
