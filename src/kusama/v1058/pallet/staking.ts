import Default, {Config} from '~pallets/staking/v4'
import {StakingPayoutStakersCall} from '~metadata/kusama/calls'
import {Call, Pallet, Parameter} from '~interfaces'
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
    RewardEvent,
    SetControllerCall,
    SetPayeeCall,
    SlashEvent,
    UnbondCall,
    UnbondedEvent,
    ValidateCall,
    WithdrawnEvent,
    WithdrawUnbondedCall,
} from '../../v1051/pallet/staking'
import skipStakers from '../../skipStakers'

export {
    ActiveEra,
    BondCall,
    BondedEvent,
    BondExtraCall,
    BondingDurationConstant,
    CurrentEraStorage,
    EraElectedStorage,
    ErasStartSessionIndex,
    EraStakersStorage,
    ForceEraStorage,
    ForceUnstakeCall,
    LedgerStorage,
    NominateCall,
    RewardEvent,
    SetControllerCall,
    SetPayeeCall,
    SlashEvent,
    UnbondCall,
    UnbondedEvent,
    ValidateCall,
    WithdrawnEvent,
    WithdrawUnbondedCall,
    ChillCall,
}

export const PayoutStakersCall = <AccountId extends Parameter>(AccountId: AccountId) =>
    class {
        readonly validatorStash: InstanceType<AccountId>
        readonly era: number

        constructor(call: Call) {
            const data = new StakingPayoutStakersCall(call).asV1058

            this.validatorStash = new AccountId(data.validatorStash) as any
            this.era = data.era
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
