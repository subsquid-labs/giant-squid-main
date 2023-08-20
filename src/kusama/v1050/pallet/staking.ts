import Default, {ActiveEraInfo, Config, Exposure, StakingLedger, RewardDestination} from '~pallets/staking/v2'
import {StakingRewardEvent} from '~metadata/kusama/events'
import {
    StakingActiveEraStorage,
    StakingCurrentEraStorage,
    StakingErasStakersStorage,
    StakingErasStartSessionIndexStorage,
    StakingLedgerStorage,
} from '~metadata/kusama/storage'
import {BlockHeader, Call, ChainContext, Event, Lookup, Pallet, Parameter} from '~interfaces'
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

export function BondCall<Lookup_ extends Lookup, AccountId extends Parameter>(Lookup: Lookup_, AccountId: AccountId) {
    const _RewardDestination = RewardDestination(AccountId)

    return class BondCall {
        readonly controller: InstanceType<Lookup_['Source']>
        readonly value: bigint
        readonly payee: RewardDestination<AccountId>

        constructor(call: Call) {
            const data = new StakingBondCall(call).asV1050
            this.controller = new Lookup.Source(data.controller) as any
            this.value = data.value
            this.payee = new _RewardDestination(data.payee)
        }
    }
}

export function SetControllerCall<Lookup_ extends Lookup>(Lookup: Lookup_) {
    return class SetControllerCall {
        readonly controller: InstanceType<Lookup_['Source']>

        constructor(call: Call) {
            const data = new StakingSetControllerCall(call).asV1050
            this.controller = new Lookup.Source(data.controller) as any
        }
    }
}

export function NominateCall<Lookup_ extends Lookup>(Lookup: Lookup_) {
    return class NominateCall {
        readonly targets: InstanceType<Lookup_['Source']>[]

        constructor(call: Call) {
            const data = new StakingNominateCall(call).asV1050
            this.targets = data.targets.map((t) => new Lookup.Source(t) as any)
        }
    }
}

/**********
 * EVENTS *
 **********/

export function RewardEvent<AccountId extends Parameter>(AccountId: AccountId) {
    return class SlashEvent {
        readonly staker: InstanceType<AccountId>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingRewardEvent(event).asV1050

            this.staker = new AccountId(data[0]) as any
            this.amount = data[1]
        }
    }
}

/***********
 * STORAGE *
 ***********/

export class ActiveEra {
    readonly value: Promise<ActiveEraInfo | undefined>

    constructor(ctx: ChainContext, block: BlockHeader) {
        this.value = new StakingActiveEraStorage(ctx, block).asV1050.get().then((v) => v && new ActiveEraInfo(v))
    }
}

export class ErasStartSessionIndex {
    readonly value: Promise<number | undefined>

    constructor(ctx: ChainContext, block: BlockHeader, index: number) {
        this.value = new StakingErasStartSessionIndexStorage(ctx, block).asV1050.get(index)
    }
}

export class CurrentEraStorage {
    readonly value: Promise<number | undefined>

    constructor(ctx: ChainContext, block: BlockHeader) {
        this.value = new StakingCurrentEraStorage(ctx, block).asV1050.get()
    }
}

export function LedgerStorage<AccountId extends Parameter>(AccountId: AccountId) {
    const _StakingLedger = StakingLedger(AccountId)

    return class LedgerStorage {
        readonly value: Promise<InstanceType<StakingLedger<AccountId>> | undefined>

        constructor(ctx: ChainContext, block: BlockHeader, key: InstanceType<Config['AccountId']>) {
            this.value = new StakingLedgerStorage(ctx, block).asV1050
                .get(key.__value)
                .then((v) => (v == null ? undefined : new _StakingLedger(v)))
        }
    }
}

export function EraElectedStorage<AccountId extends Parameter>(AccountId: AccountId) {
    return class EraElectedStorage {
        readonly value: Promise<InstanceType<AccountId>[]>

        constructor(ctx: ChainContext, block: BlockHeader, era: number) {
            this.value = new StakingErasStakersStorage(ctx, block).asV1050
                .getKeys(era)
                .then((r) => r.map((k) => new AccountId(k[1]) as any))
        }
    }
}

export const EraStakersStorage = <AccountId extends Parameter>(AccountId: AccountId) => {
    const _Exposure = Exposure(AccountId)

    return class {
        readonly value: Promise<InstanceType<Exposure<AccountId>>[]>

        constructor(ctx: ChainContext, block: BlockHeader, keys: [number, InstanceType<AccountId>][]) {
            this.value = new StakingErasStakersStorage(ctx, block).asV1050
                .getMany(keys.map((k) => [k[0], k[1].__value]))
                .then((r) => r.map((s) => new _Exposure(s)))
        }
    }
}

export default () =>
    Default(
        (Config) => ({
            Calls: {
                bond: BondCall(Config.Lookup, Config.AccountId),
                bond_extra: BondExtraCall,
                unbond: UnbondCall,
                force_unstake: ForceUnstakeCall(Config.AccountId),
                withdraw_unbonded: WithdrawUnbondedCall,
                set_controller: SetControllerCall(Config.Lookup),
                set_payee: SetPayeeCall(Config.AccountId),
                validate: ValidateCall,
                nominate: NominateCall(Config.Lookup),
                chill: ChillCall,
            },
            Events: {
                Reward: RewardEvent(Config.AccountId),
                Slash: SlashEvent(Config.AccountId),
            },
            Storage: {
                ForceEra: ForceEraStorage,
                CurrentEra: CurrentEraStorage,
                Ledger: LedgerStorage(Config.AccountId),
                ActiveEra: ActiveEra,
                ErasStartSessionIndex: ErasStartSessionIndex,
                EraElected: EraElectedStorage(Config.AccountId),
                EraStakers: EraStakersStorage(Config.AccountId),
            },
            Constants: {
                BondingDuration: BondingDurationConstant,
            },
        }),
        {skipStakers}
    )
