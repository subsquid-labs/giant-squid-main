import {StoreWithCache} from '@belopash/squid-tools'
import {Pallet, EventMapper, MappingContext, Event, CallType, BlockHeader} from '@gs/interfaces'
import {createEraId, createEraStakerId} from '@gs/util/id'
import {StakingEra, StakingEraValidator, Staker, PayeeType} from '../../model/generated'
import {
    ActiveEraStorageType,
    BondCallMapper,
    BondCallType,
    BondExtraCallType,
    BondedEventMapper,
    BondedEventType,
    BondingDurationConstantType,
    ChillCallMapper,
    ChillCallType,
    Config,
    CurrentEraStorageType,
    EraElectedStorageType,
    EraStakersStorageType,
    ErasStartSessionIndexStorageType,
    ForceEraStorageType,
    ForceUnstakeCallMapper,
    ForceUnstakeCallType,
    LedgerStorageType,
    NominateCallMapper,
    NominateCallType,
    PalletOptions,
    RewardEventType,
    SetControllerCallMapper,
    SetControllerCallType,
    SetPayeeCallMapper,
    SetPayeeCallType,
    SlashEventMapper,
    SlashEventType,
    UnbondCallType,
    UnbondedEventMapper,
    UnbondedEventType,
    ValidateCallMapper,
    ValidateCallType,
    WithdrawUnbondedCallType,
    WithdrawnEventMapper,
    WithdrawnEventType,
    endSession,
    newSession,
    startSession,
} from './v3'
import {implements_} from '@gs/util/decorator'
import {SessionManager} from '../session/v2'

export {
    ActiveEraStorageType,
    BondCallMapper,
    BondCallType,
    BondExtraCallType,
    BondedEventMapper,
    BondedEventType,
    BondingDurationConstantType,
    ChillCallMapper,
    ChillCallType,
    Config,
    CurrentEraStorageType,
    EraElectedStorageType,
    EraStakersStorageType,
    ErasStartSessionIndexStorageType,
    ForceEraStorageType,
    ForceUnstakeCallMapper,
    ForceUnstakeCallType,
    LedgerStorageType,
    NominateCallMapper,
    NominateCallType,
    PalletOptions,
    RewardEventType,
    SetControllerCallMapper,
    SetControllerCallType,
    SetPayeeCallMapper,
    SetPayeeCallType,
    SlashEventMapper,
    SlashEventType,
    UnbondCallType,
    UnbondedEventMapper,
    UnbondedEventType,
    ValidateCallMapper,
    ValidateCallType,
    WithdrawUnbondedCallType,
    WithdrawnEventMapper,
    WithdrawnEventType,
    endSession,
    newSession,
    startSession,
}

export type PayoutStakersCallType<T extends Pick<Config, 'AccountId'>> = CallType<{
    validatorStash: InstanceType<T['AccountId']>
    era: number
}>

export interface PalletSetup<T extends Config> {
    Events: {
        Reward: RewardEventType<T>
        Slash: SlashEventType<T>
        Bonded: BondedEventType<T>
        Unbonded: UnbondedEventType<T>
        Withdrawn: WithdrawnEventType<T>
    }
    Calls: {
        bond: BondCallType<T>
        bond_extra: BondExtraCallType
        unbond: UnbondCallType
        force_unstake: ForceUnstakeCallType<T>
        withdraw_unbonded: WithdrawUnbondedCallType
        set_controller: SetControllerCallType<T>
        set_payee: SetPayeeCallType<T>
        validate: ValidateCallType
        nominate: NominateCallType<T>
        chill: ChillCallType
        payout_stakers: PayoutStakersCallType<T>
    }
    Storage: {
        CurrentEra: CurrentEraStorageType
        ActiveEra: ActiveEraStorageType
        ForceEra: ForceEraStorageType
        ErasStartSessionIndex: ErasStartSessionIndexStorageType
        Ledger: LedgerStorageType<T>
        EraElected: EraElectedStorageType<T>
        EraStakers: EraStakersStorageType<T>
    }
    Constants: {
        BondingDuration: BondingDurationConstantType
    }
}

export const RewardEventMapper = <T extends Config>(
    P: Pallet<T, {Events: {Reward: RewardEventType<T>}; Calls: {payout_stakers: PayoutStakersCallType<T>}}>
) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, item: Event): void {
            const data = new P.Events.Reward(item)

            const getRewardInfo = () => {
                if (item.call && item.call.name === 'Staking.payout_stakers') {
                    const data = new P.Calls.payout_stakers(item.call)

                    const eraId = createEraId(data.era)
                    ctx.store.defer(StakingEra, eraId)

                    const validatorId = createEraStakerId(eraId, data.validatorStash.format())
                    ctx.store.defer(StakingEraValidator, validatorId)

                    return {
                        validatorId,
                        eraId,
                    }
                } else {
                    return {
                        validatorId: undefined,
                        eraId: undefined,
                    }
                }
            }

            const {eraId, validatorId} = getRewardInfo()

            const stashAddress = data.account
            const stashId = stashAddress.format()
            const stakerId = stashId
            const stakerDeferred = ctx.store.defer(Staker, stakerId, {stash: true, payee: true})

            ctx.queue
                .setBlock(item.block)
                .setExtrinsic(item.extrinsic)
                .lazy(async () => {
                    const staker = await stakerDeferred.getOrFail()
                    const payee = staker.payee

                    ctx.queue.add('staking_reward', {
                        id: item.id,
                        stakerId,
                        accountId: payee?.id,
                        amount: data.amount,
                        eraId,
                        validatorId,
                    })

                    if (staker.payeeType === PayeeType.Staked) {
                        ctx.queue.add('staking_bond', {
                            id: item.id,
                            stakerId,
                            accountId: stashId,
                            amount: data.amount,
                        })
                    }
                })
        }
    }

export default <T extends Config = Config, S extends PalletSetup<T> = PalletSetup<T>>(opts?: PalletOptions) => {
    @implements_<SessionManager & PalletOptions>()
    class P extends Pallet<Config, S>() {
        static skipStakers = opts?.skipStakers

        static newSession(ctx: MappingContext<StoreWithCache>, block: BlockHeader, newIndex: number): void {
            newSession.call(this, ctx, block, newIndex)
        }
        static endSession(ctx: MappingContext<StoreWithCache>, block: BlockHeader, endIndex: number): void {
            endSession.call(this, ctx, block, endIndex)
        }
        static startSession(ctx: MappingContext<StoreWithCache>, block: BlockHeader, startIndex: number): void {
            startSession.call(this, ctx, block, startIndex)
        }
    }

    P.EventMappers = {
        Reward: RewardEventMapper(P),
        Slash: SlashEventMapper(P),
        Bonded: BondedEventMapper(P),
        Unbonded: UnbondedEventMapper(P),
        Withdrawn: WithdrawnEventMapper(P),
    }

    P.CallMappers = {
        bond: BondCallMapper(P, true),
        force_unstake: ForceUnstakeCallMapper(P, true),
        set_controller: SetControllerCallMapper(P, true),
        set_payee: SetPayeeCallMapper(P, true),
        validate: ValidateCallMapper(P, true),
        nominate: NominateCallMapper(P, true),
        chill: ChillCallMapper(P, true),
    }

    return P
}
