import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v268 from './v268'

export class BalancesForceTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.force_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Exactly as `transfer`, except the origin must be root and the source account may be
     *  specified.
     *  # <weight>
     *  - Same as transfer, but additional read and write because the source account is not
     *    assumed to be in the overlay.
     *  # </weight>
     */
    get isV268(): boolean {
        return this._chain.getCallHash('Balances.force_transfer') === '906df11f4f65ebd03a2b87ba248e1fba11c3a0bca42c892bee828bac3ec80348'
    }

    /**
     *  Exactly as `transfer`, except the origin must be root and the source account may be
     *  specified.
     *  # <weight>
     *  - Same as transfer, but additional read and write because the source account is not
     *    assumed to be in the overlay.
     *  # </weight>
     */
    get asV268(): {source: v268.LookupSource, dest: v268.LookupSource, value: bigint} {
        assert(this.isV268)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Transfer some liquid free balance to another account.
     * 
     *  `transfer` will set the `FreeBalance` of the sender and receiver.
     *  It will decrease the total issuance of the system by the `TransferFee`.
     *  If the sender's account is below the existential deposit as a result
     *  of the transfer, the account will be reaped.
     * 
     *  The dispatch origin for this call must be `Signed` by the transactor.
     * 
     *  # <weight>
     *  - Dependent on arguments but not critical, given proper implementations for input config
     *    types. See related functions below.
     *  - It contains a limited number of reads and writes internally and no complex
     *    computation.
     * 
     *  Related functions:
     * 
     *    - `create_can_withdraw` is always called internally but has a bounded complexity.
     *    - Transferring balances to accounts that did not exist before will cause
     *      `T::OnNewAccount::on_new_account` to be called.
     *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
     *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
     *      that the transfer will not kill the origin account.
     *  ---------------------------------
     *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
     *  - DB Weight: 1 Read and 1 Write to destination account
     *  - Origin account is already in memory, so no DB operations for them.
     *  # </weight>
     */
    get isV268(): boolean {
        return this._chain.getCallHash('Balances.transfer') === 'c3f0f475940fc4bef49b298f76ba345680f20fc48d5899b4678314a07e2ce090'
    }

    /**
     *  Transfer some liquid free balance to another account.
     * 
     *  `transfer` will set the `FreeBalance` of the sender and receiver.
     *  It will decrease the total issuance of the system by the `TransferFee`.
     *  If the sender's account is below the existential deposit as a result
     *  of the transfer, the account will be reaped.
     * 
     *  The dispatch origin for this call must be `Signed` by the transactor.
     * 
     *  # <weight>
     *  - Dependent on arguments but not critical, given proper implementations for input config
     *    types. See related functions below.
     *  - It contains a limited number of reads and writes internally and no complex
     *    computation.
     * 
     *  Related functions:
     * 
     *    - `create_can_withdraw` is always called internally but has a bounded complexity.
     *    - Transferring balances to accounts that did not exist before will cause
     *      `T::OnNewAccount::on_new_account` to be called.
     *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
     *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
     *      that the transfer will not kill the origin account.
     *  ---------------------------------
     *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
     *  - DB Weight: 1 Read and 1 Write to destination account
     *  - Origin account is already in memory, so no DB operations for them.
     *  # </weight>
     */
    get asV268(): {dest: v268.LookupSource, value: bigint} {
        assert(this.isV268)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Transfer the entire transferable balance from the caller account.
     * 
     *  NOTE: This function only attempts to transfer _transferable_ balances. This means that
     *  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     *  transferred by this function. To create that this function results in a killed account,
     *  you might need to prepare the account by removing any reference counters, storage
     *  deposits, etc...
     * 
     *  The dispatch origin of this call must be Signed.
     * 
     *  - `dest`: The recipient of the transfer.
     *  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *    of the funds the account has, causing the sender account to be killed (false), or
     *    transfer everything except at least the existential deposit, which will guarantee to
     *    keep the sender account alive (true). # <weight>
     *  - O(1). Just like transfer, but reading the user's transferable balance first.
     *    #</weight>
     */
    get isV268(): boolean {
        return this._chain.getCallHash('Balances.transfer_all') === '56952003e07947f758a9928d8462037abffea6a7fa991c0d3451f5c47d45f254'
    }

    /**
     *  Transfer the entire transferable balance from the caller account.
     * 
     *  NOTE: This function only attempts to transfer _transferable_ balances. This means that
     *  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     *  transferred by this function. To create that this function results in a killed account,
     *  you might need to prepare the account by removing any reference counters, storage
     *  deposits, etc...
     * 
     *  The dispatch origin of this call must be Signed.
     * 
     *  - `dest`: The recipient of the transfer.
     *  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *    of the funds the account has, causing the sender account to be killed (false), or
     *    transfer everything except at least the existential deposit, which will guarantee to
     *    keep the sender account alive (true). # <weight>
     *  - O(1). Just like transfer, but reading the user's transferable balance first.
     *    #</weight>
     */
    get asV268(): {dest: v268.LookupSource, keepAlive: boolean} {
        assert(this.isV268)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferKeepAliveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_keep_alive')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
     *  origin account.
     * 
     *  99% of the time you want [`transfer`] instead.
     * 
     *  [`transfer`]: struct.Pallet.html#method.transfer
     *  # <weight>
     *  - Cheaper than transfer because account cannot be killed.
     *  - Base Weight: 51.4 µs
     *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
     *  #</weight>
     */
    get isV268(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === 'c3f0f475940fc4bef49b298f76ba345680f20fc48d5899b4678314a07e2ce090'
    }

    /**
     *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
     *  origin account.
     * 
     *  99% of the time you want [`transfer`] instead.
     * 
     *  [`transfer`]: struct.Pallet.html#method.transfer
     *  # <weight>
     *  - Cheaper than transfer because account cannot be killed.
     *  - Base Weight: 51.4 µs
     *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
     *  #</weight>
     */
    get asV268(): {dest: v268.LookupSource, value: bigint} {
        assert(this.isV268)
        return this._chain.decodeCall(this.call)
    }
}

export class StakingPayoutStakersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Staking.payout_stakers')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Pay out all the stakers behind a single validator for a single era.
     * 
     *  - `validator_stash` is the stash account of the validator. Their nominators, up to
     *    `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
     *  - `era` may be any era between `[current_era - history_depth; current_era]`.
     * 
     *  The origin of this call must be _Signed_. Any account can call this function, even if
     *  it is not one of the stakers.
     * 
     *  # <weight>
     *  - Time complexity: at most O(MaxNominatorRewardedPerValidator).
     *  - Contains a limited number of reads and writes.
     *  -----------
     *  N is the Number of payouts for the validator (including the validator)
     *  Weight:
     *  - Reward Destination Staked: O(N)
     *  - Reward Destination Controller (Creating): O(N)
     * 
     *    NOTE: weights are assuming that payouts are made to alive stash account (Staked).
     *    Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
     *  # </weight>
     */
    get isV268(): boolean {
        return this._chain.getCallHash('Staking.payout_stakers') === '1a09dc413ed4b8ce5cbcdc282b798636ca24268cca001e43fc92d892de3b6a5f'
    }

    /**
     *  Pay out all the stakers behind a single validator for a single era.
     * 
     *  - `validator_stash` is the stash account of the validator. Their nominators, up to
     *    `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
     *  - `era` may be any era between `[current_era - history_depth; current_era]`.
     * 
     *  The origin of this call must be _Signed_. Any account can call this function, even if
     *  it is not one of the stakers.
     * 
     *  # <weight>
     *  - Time complexity: at most O(MaxNominatorRewardedPerValidator).
     *  - Contains a limited number of reads and writes.
     *  -----------
     *  N is the Number of payouts for the validator (including the validator)
     *  Weight:
     *  - Reward Destination Staked: O(N)
     *  - Reward Destination Controller (Creating): O(N)
     * 
     *    NOTE: weights are assuming that payouts are made to alive stash account (Staked).
     *    Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
     *  # </weight>
     */
    get asV268(): {validatorStash: Uint8Array, era: number} {
        assert(this.isV268)
        return this._chain.decodeCall(this.call)
    }
}
