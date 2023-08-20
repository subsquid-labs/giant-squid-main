import {Event, Parameter} from '~interfaces'
import {StakingRewardedEvent, StakingSlashedEvent} from '~metadata/kusama/events'
import Default from '~pallets/staking/v5'
import skipStakers from '../../skipStakers'
import {
    ActiveEra,
    BondCall,
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
    NominateCall,
    PayoutStakersCall,
    SetControllerCall,
    SetPayeeCall,
    UnbondCall,
    UnbondedEvent,
    ValidateCall,
    WithdrawnEvent,
    WithdrawUnbondedCall,
} from '../../v2028/pallet/staking'

export {
    ActiveEra,
    BondCall,
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
    NominateCall,
    PayoutStakersCall,
    SetControllerCall,
    SetPayeeCall,
    UnbondCall,
    UnbondedEvent,
    ValidateCall,
    WithdrawnEvent,
    WithdrawUnbondedCall,
}

export function RewardedEvent<AccountId extends Parameter>(AccountId: AccountId) {
    return class SlashEvent {
        readonly staker: InstanceType<AccountId>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingRewardedEvent(event).asV9090

            this.staker = new AccountId(data[0]) as any
            this.amount = data[1]
        }
    }
}

export function SlashedEvent<AccountId extends Parameter>(AccountId: AccountId) {
    return class SlashEvent {
        readonly staker: InstanceType<AccountId>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingSlashedEvent(event).asV9090

            this.staker = new AccountId(data[0]) as any
            this.amount = data[1]
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
                Rewarded: RewardedEvent(Config.AccountId),
                Slashed: SlashedEvent(Config.AccountId),
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
