import Default, {Config, RewardDestination} from '~pallets/staking/v4'
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
    PayoutStakersCall,
    RewardEvent,
    SetPayeeCall,
    SlashEvent,
    UnbondCall,
    UnbondedEvent,
    ValidateCall,
    WithdrawnEvent,
    WithdrawUnbondedCall,
} from '../../v1058/pallet/staking'
import skipStakers from '../../skipStakers'
import {StakingBondCall, StakingNominateCall, StakingSetControllerCall} from '~metadata/kusama/calls'
import {Call, Pallet} from '~interfaces'

export {
    ActiveEra,
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
    RewardEvent,
    SetPayeeCall,
    SlashEvent,
    UnbondCall,
    UnbondedEvent,
    ValidateCall,
    WithdrawnEvent,
    WithdrawUnbondedCall,
    ChillCall,
}

export const BondCall = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly controller: InstanceType<T['Lookup']['Source']>
        readonly value: bigint
        readonly payee: RewardDestination<T['AccountId']>

        constructor(call: Call) {
            const data = new StakingBondCall(call).asV2028

            this.controller = new Pallet.Config.Lookup.Source(data.controller) as any
            this.value = data.value
            this.payee = new (RewardDestination(Pallet.Config.AccountId))(data.payee)
        }
    }

export const SetControllerCall = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly controller: InstanceType<T['Lookup']['Source']>

        constructor(call: Call) {
            const data = new StakingSetControllerCall(call).asV2028

            this.controller = new Pallet.Config.Lookup.Source(data.controller) as any
        }
    }

export const NominateCall = <T extends Config>(Pallet: Pallet<T>) =>
    class {
        readonly targets: InstanceType<T['Lookup']['Source']>[]

        constructor(call: Call) {
            const data = new StakingNominateCall(call).asV2028
            this.targets = data.targets.map((t) => new Pallet.Config.Lookup.Source(t)) as any
        }
    }

export default () => {
    const P = Default({skipStakers})

    P.Events = {
        Reward: RewardEvent(P),
        Slash: SlashEvent(P),
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
        payout_stakers: PayoutStakersCall(P),
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
