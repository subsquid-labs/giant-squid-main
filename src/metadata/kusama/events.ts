import assert from 'assert'
import {Runtime, ChainContext, Event, Result, Option} from './support'

export class BalancesTransferEvent {
    constructor(private readonly event: Event) {
        assert(this.event.name === 'Balances.Transfer')
    }

    /**
     *  Transfer succeeded (from, to, value, fees).
     */
    get isV1020(): boolean {
        return this.event.block._runtime.getEventTypeHash('Balances.Transfer') === '72e6f0d399a72f77551d560f52df25d757e0643d0192b3bc837cbd91b6f36b27'
    }

    /**
     *  Transfer succeeded (from, to, value, fees).
     */
    get asV1020(): [Uint8Array, Uint8Array, bigint, bigint] {
        assert(this.isV1020)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     *  Transfer succeeded (from, to, value).
     */
    get isV1050(): boolean {
        return this.event.block._runtime.getEventTypeHash('Balances.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  Transfer succeeded (from, to, value).
     */
    get asV1050(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV1050)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV9130(): boolean {
        return this.event.block._runtime.getEventTypeHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
    }

    /**
     * Transfer succeeded.
     */
    get asV9130(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV9130)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }
}

export class IdentityIdentityClearedEvent {
    constructor(private readonly event: Event) {
        assert(this.event.name === 'Identity.IdentityCleared')
    }

    /**
     *  A name was cleared, and the given balance returned.
     */
    get isV1030(): boolean {
        return this.event.block._runtime.getEventTypeHash('Identity.IdentityCleared') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A name was cleared, and the given balance returned.
     */
    get asV1030(): [Uint8Array, bigint] {
        assert(this.isV1030)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get isV9130(): boolean {
        return this.event.block._runtime.getEventTypeHash('Identity.IdentityCleared') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get asV9130(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV9130)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }
}

export class IdentityIdentityKilledEvent {
    constructor(private readonly event: Event) {
        assert(this.event.name === 'Identity.IdentityKilled')
    }

    /**
     *  A name was removed and the given balance slashed.
     */
    get isV1030(): boolean {
        return this.event.block._runtime.getEventTypeHash('Identity.IdentityKilled') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  A name was removed and the given balance slashed.
     */
    get asV1030(): [Uint8Array, bigint] {
        assert(this.isV1030)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get isV9130(): boolean {
        return this.event.block._runtime.getEventTypeHash('Identity.IdentityKilled') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get asV9130(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV9130)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }
}

export class IdentitySubIdentityRemovedEvent {
    constructor(private readonly event: Event) {
        assert(this.event.name === 'Identity.SubIdentityRemoved')
    }

    /**
     *  A sub-identity (first) was removed from an identity (second) and the deposit freed.
     */
    get isV2015(): boolean {
        return this.event.block._runtime.getEventTypeHash('Identity.SubIdentityRemoved') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity (first) was removed from an identity (second) and the deposit freed.
     */
    get asV2015(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV2015)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get isV9130(): boolean {
        return this.event.block._runtime.getEventTypeHash('Identity.SubIdentityRemoved') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get asV9130(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV9130)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }
}

export class IdentitySubIdentityRevokedEvent {
    constructor(private readonly event: Event) {
        assert(this.event.name === 'Identity.SubIdentityRevoked')
    }

    /**
     *  A sub-identity (first arg) was cleared, and the given deposit repatriated from the
     *  main identity account (second arg) to the sub-identity account.
     */
    get isV2015(): boolean {
        return this.event.block._runtime.getEventTypeHash('Identity.SubIdentityRevoked') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  A sub-identity (first arg) was cleared, and the given deposit repatriated from the
     *  main identity account (second arg) to the sub-identity account.
     */
    get asV2015(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV2015)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get isV9130(): boolean {
        return this.event.block._runtime.getEventTypeHash('Identity.SubIdentityRevoked') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get asV9130(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV9130)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }
}

export class SessionNewSessionEvent {
    constructor(private readonly event: Event) {
        assert(this.event.name === 'Session.NewSession')
    }

    /**
     *  New session has happened. Note that the argument is the session index, not the block
     *  number as the type might suggest.
     */
    get isV1020(): boolean {
        return this.event.block._runtime.getEventTypeHash('Session.NewSession') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  New session has happened. Note that the argument is the session index, not the block
     *  number as the type might suggest.
     */
    get asV1020(): number {
        assert(this.isV1020)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get isV9130(): boolean {
        return this.event.block._runtime.getEventTypeHash('Session.NewSession') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get asV9130(): {sessionIndex: number} {
        assert(this.isV9130)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }
}

export class StakingBondedEvent {
    constructor(private readonly event: Event) {
        assert(this.event.name === 'Staking.Bonded')
    }

    /**
     *  An account has bonded this amount.
     * 
     *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     *  it will not be emitted for staking rewards when they are added to stake.
     */
    get isV1051(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.Bonded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has bonded this amount.
     * 
     *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     *  it will not be emitted for staking rewards when they are added to stake.
     */
    get asV1051(): [Uint8Array, bigint] {
        assert(this.isV1051)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    get isV9300(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.Bonded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    get asV9300(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV9300)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }
}

export class StakingEraPaidEvent {
    constructor(private readonly event: Event) {
        assert(this.event.name === 'Staking.EraPaid')
    }

    /**
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     *  \[era_index, validator_payout, remainder\]
     */
    get isV9090(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.EraPaid') === '1b75f96f7f74feed246668e0244abf707060018d56d88b1a638f75594d2a8005'
    }

    /**
     *  The era payout has been set; the first balance is the validator-payout; the second is
     *  the remainder from the maximum amount of reward.
     *  \[era_index, validator_payout, remainder\]
     */
    get asV9090(): [number, bigint, bigint] {
        assert(this.isV9090)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    get isV9300(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.EraPaid') === '940fb56de13a3a5bb887ff8bc3518465d73e48a2e4418a6edb32a9d338f0b44a'
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    get asV9300(): {eraIndex: number, validatorPayout: bigint, remainder: bigint} {
        assert(this.isV9300)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }
}

export class StakingPayoutStartedEvent {
    constructor(private readonly event: Event) {
        assert(this.event.name === 'Staking.PayoutStarted')
    }

    /**
     *  The stakers' rewards are getting paid. \[era_index, validator_stash\]
     */
    get isV9090(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.PayoutStarted') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     *  The stakers' rewards are getting paid. \[era_index, validator_stash\]
     */
    get asV9090(): [number, Uint8Array] {
        assert(this.isV9090)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     * The stakers' rewards are getting paid.
     */
    get isV9300(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.PayoutStarted') === 'd95599bb0ef0f714befa738223f11c2fc8127ccc863fcf601c59c2c90393c3cf'
    }

    /**
     * The stakers' rewards are getting paid.
     */
    get asV9300(): {eraIndex: number, validatorStash: Uint8Array} {
        assert(this.isV9300)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }
}

export class StakingRewardEvent {
    constructor(private readonly event: Event) {
        assert(this.event.name === 'Staking.Reward')
    }

    /**
     *  All validators have been rewarded by the first balance; the second is the remainder
     *  from the maximum amount of reward.
     */
    get isV1020(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.Reward') === 'f7d5bd1431cb954502149f64a8137986d660e0729a3d9731d421496b4298be52'
    }

    /**
     *  All validators have been rewarded by the first balance; the second is the remainder
     *  from the maximum amount of reward.
     */
    get asV1020(): [bigint, bigint] {
        assert(this.isV1020)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     *  The staker has been rewarded by this amount. AccountId is controller account.
     */
    get isV1050(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.Reward') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  The staker has been rewarded by this amount. AccountId is controller account.
     */
    get asV1050(): [Uint8Array, bigint] {
        assert(this.isV1050)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }
}

export class StakingRewardedEvent {
    constructor(private readonly event: Event) {
        assert(this.event.name === 'Staking.Rewarded')
    }

    /**
     *  The nominator has been rewarded by this amount. \[stash, amount\]
     */
    get isV9090(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.Rewarded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  The nominator has been rewarded by this amount. \[stash, amount\]
     */
    get asV9090(): [Uint8Array, bigint] {
        assert(this.isV9090)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     * The nominator has been rewarded by this amount.
     */
    get isV9300(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.Rewarded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * The nominator has been rewarded by this amount.
     */
    get asV9300(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV9300)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }
}

export class StakingSlashEvent {
    constructor(private readonly event: Event) {
        assert(this.event.name === 'Staking.Slash')
    }

    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     */
    get isV1020(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.Slash') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     */
    get asV1020(): [Uint8Array, bigint] {
        assert(this.isV1020)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }
}

export class StakingSlashedEvent {
    constructor(private readonly event: Event) {
        assert(this.event.name === 'Staking.Slashed')
    }

    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     *  \[validator, amount\]
     */
    get isV9090(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.Slashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  One validator (and its nominators) has been slashed by the given amount.
     *  \[validator, amount\]
     */
    get asV9090(): [Uint8Array, bigint] {
        assert(this.isV9090)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     * One staker (and potentially its nominators) has been slashed by the given amount.
     */
    get isV9300(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.Slashed') === '8043a273ae232adf290e1fbbd88711bdf078eb5beb2a947de455999b434e7896'
    }

    /**
     * One staker (and potentially its nominators) has been slashed by the given amount.
     */
    get asV9300(): {staker: Uint8Array, amount: bigint} {
        assert(this.isV9300)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }
}

export class StakingUnbondedEvent {
    constructor(private readonly event: Event) {
        assert(this.event.name === 'Staking.Unbonded')
    }

    /**
     *  An account has unbonded this amount.
     */
    get isV1051(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.Unbonded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has unbonded this amount.
     */
    get asV1051(): [Uint8Array, bigint] {
        assert(this.isV1051)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     * An account has unbonded this amount.
     */
    get isV9300(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.Unbonded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has unbonded this amount.
     */
    get asV9300(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV9300)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }
}

export class StakingWithdrawnEvent {
    constructor(private readonly event: Event) {
        assert(this.event.name === 'Staking.Withdrawn')
    }

    /**
     *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     *  from the unlocking queue.
     */
    get isV1051(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.Withdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     *  from the unlocking queue.
     */
    get asV1051(): [Uint8Array, bigint] {
        assert(this.isV1051)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }

    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    get isV9300(): boolean {
        return this.event.block._runtime.getEventTypeHash('Staking.Withdrawn') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    get asV9300(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV9300)
        return this.event.block._runtime.decodeJsonEvent(this.event)
    }
}
