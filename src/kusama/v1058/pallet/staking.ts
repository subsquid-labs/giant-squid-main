import Default, {ChillCallMapper, Config} from '@gs/pallets/staking/v4'
import {StakingPayoutStakersCall} from '@metadata/kusama/calls'
import {Call, Pallet} from '../../../interfaces'
import {
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
}

export const PayoutStakersCall = <T extends Config>(P: Pallet<T>) =>
    class {
        readonly validatorStash: InstanceType<T['AccountId']>
        readonly era: number

        constructor(call: Call) {
            const data = new StakingPayoutStakersCall(call).asV1058

            this.validatorStash = new P.Config.AccountId(data.validatorStash) as any
            this.era = data.era
        }
    }

export default () => {
    class P extends Default({skipStakers}) {}

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
        chill: ChillCallMapper(P),
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
