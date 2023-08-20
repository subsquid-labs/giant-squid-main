import {StoreWithCache} from '@belopash/squid-tools'
import {BlockHeader, CallType, Event, EventMapper, MappingContext, Pallet, Setup} from '~interfaces'
import {Account, PayeeType, Staker, StakingEra, StakingEraValidator, StakingUnlockChunk} from '~model'
import {implements_} from '~util/decorator'
import {createEraId, createEraStakerId} from '~util/id'
import MathBI from 'extra-bigint'
import {SessionManager} from '../session/v2'
import {
    ActiveEraInfo,
    ActiveEraStorageType,
    BondCallMapper,
    BondCallType,
    BondedEventMapper,
    BondedEventType,
    BondExtraCallType,
    BondingDurationConstantType,
    ChillCallMapper,
    ChillCallType,
    Config,
    CurrentEraStorageType,
    endEra,
    endSession,
    EraElectedStorageType,
    ErasStartSessionIndexStorageType,
    EraStakersStorageType,
    Exposure,
    ForceEraStorageType,
    ForceUnstakeCallMapper,
    ForceUnstakeCallType,
    Forcing,
    LedgerStorageType,
    newEra,
    newSession,
    NominateCallMapper,
    NominateCallType,
    PalletOptions,
    RewardDestination,
    RewardEventType,
    SetControllerCallMapper,
    SetControllerCallType,
    SetPayeeCallMapper,
    SetPayeeCallType,
    SlashEventType,
    StakingLedger,
    startEra,
    startSession,
    UnbondCallType,
    UnbondedEventMapper,
    UnbondedEventType,
    ValidateCallMapper,
    ValidateCallType,
    WithdrawnEventMapper,
    WithdrawnEventType,
    WithdrawUnbondedCallType,
} from './v4'

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
    ActiveEraInfo,
    Exposure,
    Forcing,
    RewardDestination,
    StakingLedger,
    endEra,
    newEra,
    startEra,
}

export type PayoutStakersCallType<T extends Pick<Config, 'AccountId'>> = CallType<{
    validatorStash: InstanceType<T['AccountId']>
    era: number
}>

export interface PalletSetup<T extends Config> {
    Events: {
        Rewarded: RewardEventType<T>
        Slashed: SlashEventType<T>
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

export const RewardedEventMapper = <T extends Config>(
    P: Pallet<T, {Events: {Rewarded: RewardEventType<T>}; Calls: {payout_stakers: PayoutStakersCallType<T>}}> &
        PalletOptions
) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, item: Event): void {
            const data = new P.Events.Rewarded(item)

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

            const stashAddress = data.staker
            const stashId = stashAddress.format()
            if (P.skipStakers?.includes(stashId)) return

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

export const SlashedEventMapper = <T extends Config>(Pallet: Pallet<T, {Events: {Slashed: SlashEventType<T>}}>) =>
    class implements EventMapper {
        handle(ctx: MappingContext<StoreWithCache>, event: Event): void {
            const data = new Pallet.Events.Slashed(event)

            const stashAddress = data.staker
            const stashId = stashAddress.format()
            ctx.store.defer(Account, stashId)

            const stakerId = stashId
            const stakerDeferred = ctx.store.defer(Staker, stakerId)

            ctx.queue
                .setBlock(event.block)
                .setExtrinsic(event.extrinsic)
                .add('staking_slash', {
                    id: event.id,
                    stakerId,
                    accountId: stashId,
                    amount: data.amount,
                })
                .lazy(async () => {
                    const staker = await stakerDeferred.getOrFail()

                    let remainSlash = data.amount
                    const slashAmount = (balance: bigint) => {
                        const value = MathBI.min(remainSlash, balance)
                        remainSlash = MathBI.max(remainSlash - value, 0n)

                        return value
                    }

                    const bondDelta = slashAmount(staker.activeBond)
                    ctx.queue.add('staking_bond', {
                        id: event.id,
                        stakerId,
                        accountId: stashId,
                        amount: -bondDelta,
                    })

                    if (remainSlash > 0) {
                        const unlocking = await ctx.store.find(StakingUnlockChunk, {
                            where: {withdrawn: false},
                            order: {blockNumber: 'ASC'},
                        })

                        for (const chunk of unlocking) {
                            if (remainSlash <= 0) break

                            const newChunkAmount = chunk.amount - slashAmount(chunk.amount)
                            ctx.queue.add('staking_updateUnlockChunk', {
                                chunkId: chunk.id,
                                value: newChunkAmount,
                            })

                            if (newChunkAmount === 0n) {
                                ctx.queue.add('staking_withdrawUnlockChunk', {
                                    chunkId: chunk.id,
                                })
                            }
                        }
                    }
                })
        }
    }

export default <T extends Config = Config, S extends PalletSetup<T> = PalletSetup<T>>(
    setup: Setup<T, S>,
    opts?: PalletOptions
) => {
    @implements_<SessionManager & PalletOptions>()
    class P extends Pallet(setup) {
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
        Reward: RewardedEventMapper(P),
        Slash: SlashedEventMapper(P),
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
