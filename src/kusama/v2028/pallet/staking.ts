import Default, {RewardDestination} from '~pallets/staking/v4'
import {
    ActiveEra,
    BondedEvent,
    BondExtraCall,
    BondingDurationConstant,
    ChillCall,
    CurrentEraStorage,
    EraElectedStorage,
    ErasStartSessionIndex,
    EraStakersStorage,
    ForceEraStorage,
    ForceUnstakeCall,
    LedgerStorage,
    RewardEvent,
    SetPayeeCall,
    SlashEvent,
    UnbondCall,
    UnbondedEvent,
    ValidateCall,
    WithdrawnEvent,
    WithdrawUnbondedCall,
    PayoutStakersCall,
} from '../../v1058/pallet/staking'
import skipStakers from '../../skipStakers'
import {StakingBondCall, StakingNominateCall, StakingSetControllerCall} from '~metadata/kusama/calls'
import {Call, Lookup, Parameter} from '~interfaces'

export {
    ActiveEra,
    BondedEvent,
    BondExtraCall,
    BondingDurationConstant,
    ChillCall,
    CurrentEraStorage,
    EraElectedStorage,
    ErasStartSessionIndex,
    EraStakersStorage,
    ForceEraStorage,
    ForceUnstakeCall,
    LedgerStorage,
    RewardEvent,
    SetPayeeCall,
    SlashEvent,
    UnbondCall,
    UnbondedEvent,
    ValidateCall,
    WithdrawnEvent,
    WithdrawUnbondedCall,
    PayoutStakersCall,
}

export function BondCall<Lookup_ extends Lookup, AccountId extends Parameter>(Lookup: Lookup_, AccountId: AccountId) {
    const _RewardDestination = RewardDestination(AccountId)

    return class BondCall {
        readonly controller: InstanceType<Lookup_['Source']>
        readonly value: bigint
        readonly payee: RewardDestination<AccountId>

        constructor(call: Call) {
            const data = new StakingBondCall(call).asV2028
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
            const data = new StakingSetControllerCall(call).asV2028
            this.controller = new Lookup.Source(data.controller) as any
        }
    }
}

export function NominateCall<Lookup_ extends Lookup>(Lookup: Lookup_) {
    return class NominateCall {
        readonly targets: InstanceType<Lookup_['Source']>[]

        constructor(call: Call) {
            const data = new StakingNominateCall(call).asV2028
            this.targets = data.targets.map((t) => new Lookup.Source(t) as any)
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
                payout_stakers: PayoutStakersCall(Config.AccountId),
            },
            Events: {
                Reward: RewardEvent(Config.AccountId),
                Slash: SlashEvent(Config.AccountId),
                Bonded: BondedEvent(Config.AccountId),
                Unbonded: UnbondedEvent(Config.AccountId),
                Withdrawn: WithdrawnEvent(Config.AccountId),
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
