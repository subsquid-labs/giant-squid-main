import {StoreWithCache} from '@belopash/squid-tools'
import Default, {
    ActiveEraInfo,
    ChillCallMapper,
    Config,
    Exposure,
    SlashEventMapper,
    StakingLedger,
} from '@gs/pallets/staking/v2'
import {StakingRewardEvent} from '@metadata/kusama/events'
import {
    StakingActiveEraStorage,
    StakingCurrentEraStorage,
    StakingErasStakersStorage,
    StakingErasStartSessionIndexStorage,
    StakingLedgerStorage,
} from '@metadata/kusama/storage'
import {BlockHeader, ChainContext, Event, EventMapper, MappingContext, Pallet} from '../../../interfaces'
import {
    BondCall,
    BondExtraCall,
    BondingDurationConstant,
    ForceEraStorage,
    ForceUnstakeCall,
    NominateCall,
    SetControllerCall,
    SetPayeeCall,
    SlashEvent,
    UnbondCall,
    ValidateCall,
    WithdrawUnbondedCall,
} from '../../v1032/pallet/staking'
import skipStakers from '../../skipStakers'

export {
    BondCall,
    BondExtraCall,
    BondingDurationConstant,
    ForceEraStorage,
    ForceUnstakeCall,
    NominateCall,
    SetControllerCall,
    SetPayeeCall,
    SlashEvent,
    UnbondCall,
    ValidateCall,
    WithdrawUnbondedCall,
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
    const _AccountId = Pallet.Config.AccountId

    return class {
        readonly value: Promise<InstanceType<typeof _AccountId>[]>

        constructor(ctx: ChainContext, block: BlockHeader, era: number) {
            this.value = new StakingErasStakersStorage(ctx, block).asV1050
                .getKeys()
                .then((r) => r.map((k) => new _AccountId(k[1])))
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
    class P extends Default({skipStakers}) {}

    P.Events = {
        Reward: RewardEvent(P),
        Slash: SlashEvent(P),
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
        chill: ChillCallMapper(P),
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
