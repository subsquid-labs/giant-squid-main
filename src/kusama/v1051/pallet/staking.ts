import {Event, Pallet, Parameter} from '~interfaces'
import Default, {Config} from '~pallets/staking/v3'
import {StakingBondedEvent, StakingUnbondedEvent, StakingWithdrawnEvent} from '~metadata/kusama/events'
import {
    BondCall,
    BondExtraCall,
    UnbondCall,
    ForceUnstakeCall,
    WithdrawUnbondedCall,
    SetControllerCall,
    SetPayeeCall,
    ValidateCall,
    NominateCall,
    RewardEvent,
    SlashEvent,
    ForceEraStorage,
    CurrentEraStorage,
    LedgerStorage,
    BondingDurationConstant,
    ActiveEra,
    EraElectedStorage,
    EraStakersStorage,
    ErasStartSessionIndex,
    ChillCall,
} from '../../v1050/pallet/staking'
import skipStakers from '../../skipStakers'

export {
    BondCall,
    BondExtraCall,
    UnbondCall,
    ForceUnstakeCall,
    WithdrawUnbondedCall,
    SetControllerCall,
    SetPayeeCall,
    ValidateCall,
    NominateCall,
    RewardEvent,
    SlashEvent,
    ForceEraStorage,
    CurrentEraStorage,
    LedgerStorage,
    BondingDurationConstant,
    ActiveEra,
    EraElectedStorage,
    EraStakersStorage,
    ErasStartSessionIndex,
    ChillCall,
}

/**********
 * EVENTS *
 **********/

export const BondedEvent = <AccountId extends Parameter>(AccountId: AccountId) =>
    class {
        readonly account: InstanceType<AccountId>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingBondedEvent(event).asV1051

            this.account = new AccountId(data[0]) as any
            this.amount = data[1]
        }
    }

export const UnbondedEvent = <AccountId extends Parameter>(AccountId: AccountId) =>
    class {
        readonly account: InstanceType<AccountId>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingUnbondedEvent(event).asV1051

            this.account = new AccountId(data[0]) as any
            this.amount = data[1]
        }
    }

export const WithdrawnEvent = <AccountId extends Parameter>(AccountId: AccountId) =>
    class {
        readonly account: InstanceType<AccountId>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingWithdrawnEvent(event).asV1051

            this.account = new AccountId(data[0]) as any
            this.amount = data[1]
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
