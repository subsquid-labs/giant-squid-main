import {Event, Pallet} from '~interfaces'
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

export const BondedEvent = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly account: InstanceType<T['AccountId']>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingBondedEvent(event).asV1051

            this.account = new P.Config.AccountId(data[0]) as any
            this.amount = data[1]
        }
    }

export const UnbondedEvent = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly account: InstanceType<T['AccountId']>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingUnbondedEvent(event).asV1051

            this.account = new P.Config.AccountId(data[0]) as any
            this.amount = data[1]
        }
    }

export const WithdrawnEvent = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly account: InstanceType<T['AccountId']>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new StakingWithdrawnEvent(event).asV1051

            this.account = new P.Config.AccountId(data[0]) as any
            this.amount = data[1]
        }
    }

export default () => {
    const P = Default({skipStakers})

    P.Events = {
        Reward: RewardEvent(P),
        Slash: SlashEvent({AccountId: P}),
        Bonded: BondedEvent(P),
        Unbonded: UnbondedEvent(P),
        Withdrawn: WithdrawnEvent(P),
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
