import {BlockHeader, Call, ChainContext, Event, Lookup, Parameter} from '~interfaces'
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
} from '~metadata/kusama/calls'
import {StakingBondingDurationConstant} from '~metadata/kusama/constants'
import {StakingRewardEvent, StakingSlashEvent} from '~metadata/kusama/events'
import {
    StakingCurrentElectedStorage,
    StakingCurrentEraStartSessionIndexStorage,
    StakingCurrentEraStorage,
    StakingForceEraStorage,
    StakingLedgerStorage,
    StakingStakersStorage,
} from '~metadata/kusama/storage'
import Default, {Config, Exposure, Forcing, RewardDestination, StakingLedger, ValidatorPrefs} from '~pallets/staking/v1'

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
            const data = new StakingBondCall(call).asV1020
            this.controller = new Lookup.Source(data.controller) as any
            this.value = data.value
            this.payee = new _RewardDestination(data.payee)
        }
    }
}

export class BondExtraCall {
    readonly maxAdditional: bigint

    constructor(call: Call) {
        const data = new StakingBondExtraCall(call).asV1020
        this.maxAdditional = data.maxAdditional
    }
}

export class UnbondCall {
    readonly value: bigint

    constructor(call: Call) {
        const data = new StakingUnbondCall(call).asV1020
        this.value = data.value
    }
}
export function ForceUnstakeCall<AccountId extends Parameter>(AccountId: AccountId) {
    return class ForceUnstakeCall {
        readonly stash: InstanceType<AccountId>

        constructor(call: Call) {
            const data = new StakingForceUnstakeCall(call).asV1020
            this.stash = new AccountId(data.stash) as any
        }
    }
}

export class WithdrawUnbondedCall {
    constructor(call: Call) {
        const data = new StakingWithdrawUnbondedCall(call).asV1020
    }
}

export function SetControllerCall<Lookup_ extends Lookup>(Lookup: Lookup_) {
    return class SetControllerCall {
        readonly controller: InstanceType<Lookup_['Source']>

        constructor(call: Call) {
            const data = new StakingSetControllerCall(call).asV1020
            this.controller = new Lookup.Source(data.controller) as any
        }
    }
}

export function SetPayeeCall<AccountId extends Parameter>(AccountId: AccountId) {
    const _RewardDestination = RewardDestination(AccountId)

    return class SetPayeeCall {
        readonly payee: RewardDestination<AccountId>

        constructor(call: Call) {
            const data = new StakingSetPayeeCall(call).asV1020
            this.payee = this.payee = new _RewardDestination(data.payee)
        }
    }
}

export class ValidateCall {
    readonly prefs: ValidatorPrefs

    constructor(call: Call) {
        const data = new StakingValidateCall(call).asV1020
        this.prefs = new ValidatorPrefs(data.prefs)
    }
}

export function NominateCall<Lookup_ extends Lookup>(Lookup: Lookup_) {
    return class NominateCall {
        readonly targets: InstanceType<Lookup_['Source']>[]

        constructor(call: Call) {
            const data = new StakingNominateCall(call).asV1020
            this.targets = data.targets.map((t) => new Lookup.Source(t) as any)
        }
    }
}

export class ChillCall {
    constructor(call: Call) {
        const data = new StakingChillCall(call).asV1020
    }
}

/**********
 * EVENTS *
 **********/

export class RewardEvent {
    readonly reward: bigint
    readonly remainer: bigint

    constructor(event: Event) {
        const data = new StakingRewardEvent(event).asV1020
        this.reward = data[0]
        this.remainer = data[1]
    }
}

export function SlashEvent<AccountId extends Parameter>(AccountId: AccountId) {
    return class SlashEvent {
        readonly staker: InstanceType<AccountId>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingSlashEvent(event).asV1020
            this.staker = new AccountId(data[0]) as any
            this.amount = data[1]
        }
    }
}

/***********
 * STORAGE *
 ***********/

export class ForceEraStorage {
    readonly value: Promise<Forcing>

    constructor(ctx: ChainContext, block: BlockHeader) {
        this.value = new StakingForceEraStorage(ctx, block).asV1020.get().then((v) => new Forcing(v))
    }
}

export class CurrentEraStartSessionIndexStorage {
    readonly value: Promise<number>

    constructor(ctx: ChainContext, block: BlockHeader) {
        this.value = new StakingCurrentEraStartSessionIndexStorage(ctx, block).asV1020.get()
    }
}

export class CurrentEraStorage {
    readonly value: Promise<number>

    constructor(ctx: ChainContext, block: BlockHeader) {
        this.value = new StakingCurrentEraStorage(ctx, block).asV1020.get()
    }
}

export function LedgerStorage<AccountId extends Parameter>(AccountId: AccountId) {
    const _StakingLedger = StakingLedger(AccountId)

    return class LedgerStorage {
        readonly value: Promise<InstanceType<StakingLedger<AccountId>> | undefined>

        constructor(ctx: ChainContext, block: BlockHeader, key: InstanceType<Config['AccountId']>) {
            this.value = new StakingLedgerStorage(ctx, block).asV1020
                .get(key.__value)
                .then((v) => (v == null ? undefined : new _StakingLedger(v)))
        }
    }
}

export function CurrentElectedStorage<AccountId extends Parameter>(AccountId: AccountId) {
    return class CurrentElectedStorage {
        readonly value: Promise<InstanceType<AccountId>[]>

        constructor(ctx: ChainContext, block: BlockHeader) {
            this.value = new StakingCurrentElectedStorage(ctx, block).asV1020
                .get()
                .then((r) => r.map((k) => new AccountId(k) as any))
        }
    }
}

export function StakersStorage<AccountId extends Parameter>(AccountId: AccountId) {
    const _Exposure = Exposure(AccountId)

    return class StakersStorage {
        readonly value: Promise<InstanceType<Exposure<AccountId>>[]>

        constructor(ctx: ChainContext, block: BlockHeader, key: InstanceType<AccountId>[]) {
            this.value = new StakingStakersStorage(ctx, block).asV1020
                .getMany(key.map((k) => k.__value))
                .then((r) => r.map((k) => new _Exposure(k)))
        }
    }
}

export class BondingDurationConstant {
    readonly value: number

    constructor(block: BlockHeader) {
        this.value = new StakingBondingDurationConstant(block).asV1020
    }
}

export default () =>
    Default((Config) => ({
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
            Reward: RewardEvent,
            Slash: SlashEvent(Config.AccountId),
        },
        Storage: {
            ForceEra: ForceEraStorage,
            CurrentEraStartSessionIndex: CurrentEraStartSessionIndexStorage,
            CurrentEra: CurrentEraStorage,
            Ledger: LedgerStorage(Config.AccountId),
            CurrentElected: CurrentElectedStorage(Config.AccountId),
            Stakers: StakersStorage(Config.AccountId),
        },
        Constants: {
            BondingDuration: BondingDurationConstant,
        },
    }))
