import Default, {ActiveEraInfo, Config, Exposure, StakingLedger, RewardDestination} from '~pallets/staking/v2'
import {StakingRewardEvent} from '~metadata/kusama/events'
import {
    StakingActiveEraStorage,
    StakingCurrentEraStorage,
    StakingErasStakersStorage,
    StakingErasStartSessionIndexStorage,
    StakingLedgerStorage,
} from '~metadata/kusama/storage'
import {BlockHeader, Call, ChainContext, Event, Pallet} from '~interfaces'
import {
    BondExtraCall,
    BondingDurationConstant,
    ChillCall,
    ForceEraStorage,
    ForceUnstakeCall,
    SetPayeeCall,
    SlashEvent,
    UnbondCall,
    ValidateCall,
    WithdrawUnbondedCall,
} from '../../v1032/pallet/staking'
import skipStakers from '../../skipStakers'
import {StakingBondCall, StakingNominateCall, StakingSetControllerCall} from '~metadata/kusama/calls'

export {
    BondExtraCall,
    BondingDurationConstant,
    ForceEraStorage,
    ForceUnstakeCall,
    SetPayeeCall,
    SlashEvent,
    UnbondCall,
    ValidateCall,
    WithdrawUnbondedCall,
    ChillCall,
}

/*********
 * CALLS *
 *********/

export const BondCall = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly controller: InstanceType<T['Lookup']['Source']>
        readonly value: bigint
        readonly payee: RewardDestination<T['AccountId']>

        constructor(call: Call) {
            const data = new StakingBondCall(call).asV1050

            this.controller = new Pallet.Config.Lookup.Source(data.controller) as any
            this.value = data.value
            this.payee = new (RewardDestination(Pallet.Config.AccountId))(data.payee)
        }
    }

export const SetControllerCall = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly controller: InstanceType<T['Lookup']['Source']>

        constructor(call: Call) {
            const data = new StakingSetControllerCall(call).asV1050

            this.controller = new Pallet.Config.Lookup.Source(data.controller) as any
        }
    }

export const NominateCall = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly targets: InstanceType<T['Lookup']['Source']>[]

        constructor(call: Call) {
            const data = new StakingNominateCall(call).asV1050
            this.targets = data.targets.map((t) => new Pallet.Config.Lookup.Source(t)) as any
        }
    }

/**********
 * EVENTS *
 **********/

export const RewardEvent = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly account: InstanceType<T['AccountId']>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingRewardEvent(event).asV1050

            this.account = new P.Config.AccountId(data[0]) as any
            this.amount = data[1]
        }
    }

/***********
 * STORAGE *
 ***********/

export const ActiveEra = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly value: Promise<ActiveEraInfo | undefined>

        constructor(ctx: ChainContext, block: BlockHeader) {
            this.value = new StakingActiveEraStorage(ctx, block).asV1050.get().then((v) => v && new ActiveEraInfo(v))
        }
    }

export const ErasStartSessionIndex = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly value: Promise<number | undefined>

        constructor(ctx: ChainContext, block: BlockHeader, index: number) {
            this.value = new StakingErasStartSessionIndexStorage(ctx, block).asV1050.get(index)
        }
    }

export const CurrentEraStorage = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly value: Promise<number | undefined>

        constructor(ctx: ChainContext, block: BlockHeader) {
            this.value = new StakingCurrentEraStorage(ctx, block).asV1050.get()
        }
    }

export const LedgerStorage = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly value: Promise<InstanceType<StakingLedger<T['AccountId']>> | undefined>

        constructor(ctx: ChainContext, block: BlockHeader, key: InstanceType<Config['AccountId']>) {
            const Ledger = StakingLedger(Pallet.Config.AccountId)
            this.value = new StakingLedgerStorage(ctx, block).asV1050
                .get(key.__value)
                .then((v) => (v == null ? undefined : new Ledger(v)))
        }
    }

export const EraElectedStorage = <T extends Config>(Pallet: Pallet<T>) => {
    return class {
        readonly value: Promise<InstanceType<T['AccountId']>[]>

        constructor(ctx: ChainContext, block: BlockHeader, era: number) {
            this.value = new StakingErasStakersStorage(ctx, block).asV1050
                .getKeys(era)
                .then((r) => r.map((k) => new Pallet.Config.AccountId(k[1]) as any))
        }
    }
}

export const EraStakersStorage = <T extends Config>(Pallet: Pallet<T>) => {
    return class {
        readonly value: Promise<InstanceType<Exposure<T['AccountId']>>[]>

        constructor(ctx: ChainContext, block: BlockHeader, keys: [number, InstanceType<T['AccountId']>][]) {
            const _Exposure = Exposure(Pallet.Config.AccountId)

            this.value = new StakingErasStakersStorage(ctx, block).asV1050
                .getMany(keys.map((k) => [k[0], k[1].__value]))
                .then((r) => r.map((s) => new _Exposure(s)))
        }
    }
}

export default () => {
    const P = Default({skipStakers})

    P.Events = {
        Reward: RewardEvent(P),
        Slash: SlashEvent({AccountId: P}),
    }

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
        chill: ChillCall(P),
    }

    P.Storage = {
        ForceEra: ForceEraStorage(P),
        CurrentEra: CurrentEraStorage(P),
        Ledger: LedgerStorage(P),
        ActiveEra: ActiveEra(P),
        ErasStartSessionIndex: ErasStartSessionIndex(P),
        EraElected: EraElectedStorage(P),
        EraStakers: EraStakersStorage(P),
    }

    P.Constants = {
        BondingDuration: BondingDurationConstant(P),
    }

    return P
}
