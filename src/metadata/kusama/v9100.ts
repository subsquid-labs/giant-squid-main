import type {Result, Option} from './support'

export type Proposal = Proposal_System | Proposal_Babe | Proposal_Timestamp | Proposal_Indices | Proposal_Balances | Proposal_Authorship | Proposal_Staking | Proposal_Session | Proposal_Grandpa | Proposal_ImOnline | Proposal_Democracy | Proposal_Council | Proposal_TechnicalCommittee | Proposal_PhragmenElection | Proposal_TechnicalMembership | Proposal_Treasury | Proposal_Claims | Proposal_Utility | Proposal_Identity | Proposal_Society | Proposal_Recovery | Proposal_Vesting | Proposal_Scheduler | Proposal_Proxy | Proposal_Multisig | Proposal_Bounties | Proposal_Tips | Proposal_ElectionProviderMultiPhase | Proposal_Gilt | Proposal_Configuration | Proposal_ParasShared | Proposal_ParaInclusion | Proposal_ParaInherent | Proposal_Paras | Proposal_Initializer | Proposal_Dmp | Proposal_Ump | Proposal_Hrmp | Proposal_Registrar | Proposal_Slots | Proposal_Auctions | Proposal_Crowdloan | Proposal_XcmPallet

export interface Proposal_System {
    __kind: 'System'
    value: SystemCall
}

export interface Proposal_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Proposal_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Proposal_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Proposal_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Proposal_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Proposal_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Proposal_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Proposal_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Proposal_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Proposal_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Proposal_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Proposal_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Proposal_PhragmenElection {
    __kind: 'PhragmenElection'
    value: PhragmenElectionCall
}

export interface Proposal_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Proposal_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Proposal_Claims {
    __kind: 'Claims'
    value: ClaimsCall
}

export interface Proposal_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Proposal_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Proposal_Society {
    __kind: 'Society'
    value: SocietyCall
}

export interface Proposal_Recovery {
    __kind: 'Recovery'
    value: RecoveryCall
}

export interface Proposal_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Proposal_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Proposal_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Proposal_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Proposal_Bounties {
    __kind: 'Bounties'
    value: BountiesCall
}

export interface Proposal_Tips {
    __kind: 'Tips'
    value: TipsCall
}

export interface Proposal_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseCall
}

export interface Proposal_Gilt {
    __kind: 'Gilt'
    value: GiltCall
}

export interface Proposal_Configuration {
    __kind: 'Configuration'
    value: ConfigurationCall
}

export interface Proposal_ParasShared {
    __kind: 'ParasShared'
    value: ParasSharedCall
}

export interface Proposal_ParaInclusion {
    __kind: 'ParaInclusion'
    value: ParaInclusionCall
}

export interface Proposal_ParaInherent {
    __kind: 'ParaInherent'
    value: ParaInherentCall
}

export interface Proposal_Paras {
    __kind: 'Paras'
    value: ParasCall
}

export interface Proposal_Initializer {
    __kind: 'Initializer'
    value: InitializerCall
}

export interface Proposal_Dmp {
    __kind: 'Dmp'
    value: DmpCall
}

export interface Proposal_Ump {
    __kind: 'Ump'
    value: UmpCall
}

export interface Proposal_Hrmp {
    __kind: 'Hrmp'
    value: HrmpCall
}

export interface Proposal_Registrar {
    __kind: 'Registrar'
    value: RegistrarCall
}

export interface Proposal_Slots {
    __kind: 'Slots'
    value: SlotsCall
}

export interface Proposal_Auctions {
    __kind: 'Auctions'
    value: AuctionsCall
}

export interface Proposal_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanCall
}

export interface Proposal_XcmPallet {
    __kind: 'XcmPallet'
    value: XcmPalletCall
}

export interface Scheduled {
    maybeId: (Uint8Array | undefined)
    priority: number
    call: Type_138
    maybePeriodic: ([number, number] | undefined)
    origin: PalletsOrigin
}

export interface EventRecord {
    phase: Phase
    event: Event
    topics: Uint8Array[]
}

export type VersionedMultiLocation = VersionedMultiLocation_V0 | VersionedMultiLocation_V1 | VersionedMultiLocation_V2

export interface VersionedMultiLocation_V0 {
    __kind: 'V0'
    value: MultiLocationV0
}

export interface VersionedMultiLocation_V1 {
    __kind: 'V1'
    value: MultiLocationV1
}

export interface VersionedMultiLocation_V2 {
    __kind: 'V2'
    value: MultiLocationV2
}

export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_changes_trie_config | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 *  A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: number
}

/**
 *  Make some on-chain remark.
 * 
 *  # <weight>
 *  - `O(1)`
 *  # </weight>
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Uint8Array
}

/**
 *  Set the number of pages in the WebAssembly environment's heap.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write.
 *  - Base Weight: 1.405 µs
 *  - 1 write to HEAP_PAGES
 *  # </weight>
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 *  Set the new runtime code.
 * 
 *  # <weight>
 *  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime, but generally this is very expensive.
 *  We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
}

/**
 *  Set the new runtime code without doing any checks of the given `code`.
 * 
 *  # <weight>
 *  - `O(C)` where `C` length of `code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime. We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Uint8Array
}

/**
 *  Set the new changes trie configuration.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write or delete (codec `O(1)`).
 *  - 1 call to `deposit_log`: Uses `append` API, so O(1)
 *  - Base Weight: 7.218 µs
 *  - DB Weight:
 *      - Writes: Changes Trie, System Digest
 *  # </weight>
 */
export interface SystemCall_set_changes_trie_config {
    __kind: 'set_changes_trie_config'
    changesTrieConfig: (ChangesTrieConfiguration | undefined)
}

/**
 *  Set some items of storage.
 * 
 *  # <weight>
 *  - `O(I)` where `I` length of `items`
 *  - `I` storage writes (`O(1)`).
 *  - Base Weight: 0.568 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Uint8Array, Uint8Array][]
}

/**
 *  Kill some items from storage.
 * 
 *  # <weight>
 *  - `O(IK)` where `I` length of `keys` and `K` length of one key
 *  - `I` storage deletions.
 *  - Base Weight: .378 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Uint8Array[]
}

/**
 *  Kill all storage items with a key that starts with the given prefix.
 * 
 *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 *  the prefix we are removing to accurately calculate the weight of this function.
 * 
 *  # <weight>
 *  - `O(P)` where `P` amount of keys with prefix `prefix`
 *  - `P` storage deletions.
 *  - Base Weight: 0.834 * P µs
 *  - Writes: Number of subkeys + 1
 *  # </weight>
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Uint8Array
    subkeys: number
}

/**
 *  Make some on-chain remark and emit event.
 * 
 *  # <weight>
 *  - `O(b)` where b is the length of the remark.
 *  - 1 event.
 *  # </weight>
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Uint8Array
}

export type BabeCall = BabeCall_report_equivocation | BabeCall_report_equivocation_unsigned | BabeCall_plan_config_change

/**
 *  Report authority equivocation/misbehavior. This method will verify
 *  the equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence will
 *  be reported.
 */
export interface BabeCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: BabeEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

/**
 *  Report authority equivocation/misbehavior. This method will verify
 *  the equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence will
 *  be reported.
 *  This extrinsic must be called unsigned and it is expected that only
 *  block authors will call it (validated in `ValidateUnsigned`), as such
 *  if the block author is defined it will be defined as the equivocation
 *  reporter.
 */
export interface BabeCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: BabeEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

/**
 *  Plan an epoch config change. The epoch config change is recorded and will be enacted on
 *  the next call to `enact_epoch_change`. The config will be activated one epoch after.
 *  Multiple calls to this method will replace any existing planned config change that had
 *  not been enacted yet.
 */
export interface BabeCall_plan_config_change {
    __kind: 'plan_config_change'
    config: NextConfigDescriptor
}

export type TimestampCall = TimestampCall_set

/**
 *  Set the current time.
 * 
 *  This call should be invoked exactly once per block. It will panic at the finalization
 *  phase, if this call hasn't been invoked by that time.
 * 
 *  The timestamp should be greater than the previous one by the amount specified by
 *  `MinimumPeriod`.
 * 
 *  The dispatch origin for this call must be `Inherent`.
 * 
 *  # <weight>
 *  - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
 *  - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 *  # </weight>
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

export type IndicesCall = IndicesCall_claim | IndicesCall_transfer | IndicesCall_free | IndicesCall_force_transfer | IndicesCall_freeze

/**
 *  Assign an previously unassigned index.
 * 
 *  Payment: `Deposit` is reserved from the sender account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `index`: the index to be claimed. This must not be in use.
 * 
 *  Emits `IndexAssigned` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - One reserve operation.
 *  - One event.
 *  -------------------
 *  - DB Weight: 1 Read/Write (Accounts)
 *  # </weight>
 */
export interface IndicesCall_claim {
    __kind: 'claim'
    index: number
}

/**
 *  Assign an index already owned by the sender to another account. The balance reservation
 *  is effectively transferred to the new account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `index`: the index to be re-assigned. This must be owned by the sender.
 *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * 
 *  Emits `IndexAssigned` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - One transfer operation.
 *  - One event.
 *  -------------------
 *  - DB Weight:
 *     - Reads: Indices Accounts, System Account (recipient)
 *     - Writes: Indices Accounts, System Account (recipient)
 *  # </weight>
 */
export interface IndicesCall_transfer {
    __kind: 'transfer'
    new: Uint8Array
    index: number
}

/**
 *  Free up an index owned by the sender.
 * 
 *  Payment: Any previous deposit placed for the index is unreserved in the sender account.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must own the index.
 * 
 *  - `index`: the index to be freed. This must be owned by the sender.
 * 
 *  Emits `IndexFreed` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - One reserve operation.
 *  - One event.
 *  -------------------
 *  - DB Weight: 1 Read/Write (Accounts)
 *  # </weight>
 */
export interface IndicesCall_free {
    __kind: 'free'
    index: number
}

/**
 *  Force an index to an account. This doesn't require a deposit. If the index is already
 *  held, then any deposit is reimbursed to its current owner.
 * 
 *  The dispatch origin for this call must be _Root_.
 * 
 *  - `index`: the index to be (re-)assigned.
 *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 *  - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
 * 
 *  Emits `IndexAssigned` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - Up to one reserve operation.
 *  - One event.
 *  -------------------
 *  - DB Weight:
 *     - Reads: Indices Accounts, System Account (original owner)
 *     - Writes: Indices Accounts, System Account (original owner)
 *  # </weight>
 */
export interface IndicesCall_force_transfer {
    __kind: 'force_transfer'
    new: Uint8Array
    index: number
    freeze: boolean
}

/**
 *  Freeze an index so it will always point to the sender account. This consumes the deposit.
 * 
 *  The dispatch origin for this call must be _Signed_ and the signing account must have a
 *  non-frozen account `index`.
 * 
 *  - `index`: the index to be frozen in place.
 * 
 *  Emits `IndexFrozen` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - Up to one slash operation.
 *  - One event.
 *  -------------------
 *  - DB Weight: 1 Read/Write (Accounts)
 *  # </weight>
 */
export interface IndicesCall_freeze {
    __kind: 'freeze'
    index: number
}

export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all

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
 *  - Dependent on arguments but not critical, given proper implementations for
 *    input config types. See related functions below.
 *  - It contains a limited number of reads and writes internally and no complex computation.
 * 
 *  Related functions:
 * 
 *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *    - Transferring balances to accounts that did not exist before will cause
 *       `T::OnNewAccount::on_new_account` to be called.
 *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
 *      check that the transfer will not kill the origin account.
 *  ---------------------------------
 *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
 *  - DB Weight: 1 Read and 1 Write to destination account
 *  - Origin account is already in memory, so no DB operations for them.
 *  # </weight>
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: LookupSource
    value: bigint
}

/**
 *  Set the balances of a given account.
 * 
 *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 *  also decrease the total issuance of the system (`TotalIssuance`).
 *  If the new free or reserved balance is below the existential deposit,
 *  it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 *  The dispatch origin for this call is `root`.
 * 
 *  # <weight>
 *  - Independent of the arguments.
 *  - Contains a limited number of reads and writes.
 *  ---------------------
 *  - Base Weight:
 *      - Creating: 27.56 µs
 *      - Killing: 35.11 µs
 *  - DB Weight: 1 Read, 1 Write to `who`
 *  # </weight>
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: LookupSource
    newFree: bigint
    newReserved: bigint
}

/**
 *  Exactly as `transfer`, except the origin must be root and the source account may be
 *  specified.
 *  # <weight>
 *  - Same as transfer, but additional read and write because the source account is
 *    not assumed to be in the overlay.
 *  # </weight>
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: LookupSource
    dest: LookupSource
    value: bigint
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
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: LookupSource
    value: bigint
}

/**
 *  Transfer the entire transferable balance from the caller account.
 * 
 *  NOTE: This function only attempts to transfer _transferable_ balances. This means that
 *  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 *  transferred by this function. To ensure that this function results in a killed account,
 *  you might need to prepare the account by removing any reference counters, storage
 *  deposits, etc...
 * 
 *  The dispatch origin of this call must be Signed.
 * 
 *  - `dest`: The recipient of the transfer.
 *  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *    of the funds the account has, causing the sender account to be killed (false), or
 *    transfer everything except at least the existential deposit, which will guarantee to
 *    keep the sender account alive (true).
 *    # <weight>
 *  - O(1). Just like transfer, but reading the user's transferable balance first.
 *    #</weight>
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: LookupSource
    keepAlive: boolean
}

export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 *  Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
    __kind: 'set_uncles'
    newUncles: Header[]
}

export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_unbond | StakingCall_withdraw_unbonded | StakingCall_validate | StakingCall_nominate | StakingCall_chill | StakingCall_set_payee | StakingCall_set_controller | StakingCall_set_validator_count | StakingCall_increase_validator_count | StakingCall_scale_validator_count | StakingCall_force_no_eras | StakingCall_force_new_era | StakingCall_set_invulnerables | StakingCall_force_unstake | StakingCall_force_new_era_always | StakingCall_cancel_deferred_slash | StakingCall_payout_stakers | StakingCall_rebond | StakingCall_set_history_depth | StakingCall_reap_stash | StakingCall_kick | StakingCall_set_staking_limits | StakingCall_chill_other

/**
 *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
 *  be the account that controls it.
 * 
 *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash account.
 * 
 *  Emits `Bonded`.
 *  # <weight>
 *  - Independent of the arguments. Moderate complexity.
 *  - O(1).
 *  - Three extra DB entries.
 * 
 *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
 *  unless the `origin` falls below _existential deposit_ and gets removed as dust.
 *  ------------------
 *  # </weight>
 */
export interface StakingCall_bond {
    __kind: 'bond'
    controller: LookupSource
    value: bigint
    payee: RewardDestination
}

/**
 *  Add some extra amount that have appeared in the stash `free_balance` into the balance up
 *  for staking.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 *  Use this if there are additional funds in your stash account that you wish to bond.
 *  Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose any limitation
 *  on the amount that can be added.
 * 
 *  Emits `Bonded`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - O(1).
 *  # </weight>
 */
export interface StakingCall_bond_extra {
    __kind: 'bond_extra'
    maxAdditional: bigint
}

/**
 *  Schedule a portion of the stash to be unlocked ready for transfer out after the bond
 *  period ends. If this leaves an amount actively bonded less than
 *  T::Currency::minimum_balance(), then it is increased to the full amount.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  Once the unlock period is done, you can call `withdraw_unbonded` to actually move
 *  the funds out of management ready for transfer.
 * 
 *  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
 *  can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
 *  to be called first to remove some of the chunks (if possible).
 * 
 *  If a user encounters the `InsufficientBond` error when calling this extrinsic,
 *  they should call `chill` first in order to free up their bonded funds.
 * 
 *  Emits `Unbonded`.
 * 
 *  See also [`Call::withdraw_unbonded`].
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
}

/**
 *  Remove any unlocked chunks from the `unlocking` queue from our management.
 * 
 *  This essentially frees up that balance to be used by the stash account to do
 *  whatever it wants.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller.
 * 
 *  Emits `Withdrawn`.
 * 
 *  See also [`Call::unbond`].
 * 
 *  # <weight>
 *  Complexity O(S) where S is the number of slashing spans to remove
 *  NOTE: Weight annotation is the kill scenario, we refund otherwise.
 *  # </weight>
 */
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

/**
 *  Declare the desire to validate for the origin controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 */
export interface StakingCall_validate {
    __kind: 'validate'
    prefs: ValidatorPrefs
}

/**
 *  Declare the desire to nominate `targets` for the origin controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - The transaction's complexity is proportional to the size of `targets` (N)
 *  which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
 *  - Both the reads and writes follow a similar pattern.
 *  # </weight>
 */
export interface StakingCall_nominate {
    __kind: 'nominate'
    targets: LookupSource[]
}

/**
 *  Declare no desire to either validate or nominate.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains one read.
 *  - Writes are limited to the `origin` account key.
 *  # </weight>
 */
export interface StakingCall_chill {
    __kind: 'chill'
}

/**
 *  (Re-)set the payment target for a controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  ---------
 *  - Weight: O(1)
 *  - DB Weight:
 *      - Read: Ledger
 *      - Write: Payee
 *  # </weight>
 */
export interface StakingCall_set_payee {
    __kind: 'set_payee'
    payee: RewardDestination
}

/**
 *  (Re-)set the controller of a stash.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  ----------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: Bonded, Ledger New Controller, Ledger Old Controller
 *  - Write: Bonded, Ledger New Controller, Ledger Old Controller
 *  # </weight>
 */
export interface StakingCall_set_controller {
    __kind: 'set_controller'
    controller: LookupSource
}

/**
 *  Sets the ideal number of validators.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Weight: O(1)
 *  Write: Validator Count
 *  # </weight>
 */
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 *  Increments the ideal number of validators.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Same as [`Self::set_validator_count`].
 *  # </weight>
 */
export interface StakingCall_increase_validator_count {
    __kind: 'increase_validator_count'
    additional: number
}

/**
 *  Scale up the ideal number of validators by a factor.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Same as [`Self::set_validator_count`].
 *  # </weight>
 */
export interface StakingCall_scale_validator_count {
    __kind: 'scale_validator_count'
    factor: number
}

/**
 *  Force there to be no new eras indefinitely.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # Warning
 * 
 *  The election process starts multiple blocks before the end of the era.
 *  Thus the election process may be ongoing when this is called. In this case the
 *  election will continue until the next era is triggered.
 * 
 *  # <weight>
 *  - No arguments.
 *  - Weight: O(1)
 *  - Write: ForceEra
 *  # </weight>
 */
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
}

/**
 *  Force there to be a new era at the end of the next session. After this, it will be
 *  reset to normal (non-forced) behaviour.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # Warning
 * 
 *  The election process starts multiple blocks before the end of the era.
 *  If this is called just before a new era is triggered, the election process may not
 *  have enough blocks to get a result.
 * 
 *  # <weight>
 *  - No arguments.
 *  - Weight: O(1)
 *  - Write ForceEra
 *  # </weight>
 */
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 *  Set the validators who cannot be slashed (if any).
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - O(V)
 *  - Write: Invulnerables
 *  # </weight>
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: Uint8Array[]
}

/**
 *  Force a current staker to become completely unstaked, immediately.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  O(S) where S is the number of slashing spans to be removed
 *  Reads: Bonded, Slashing Spans, Account, Locks
 *  Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Account, Locks
 *  Writes Each: SpanSlash * S
 *  # </weight>
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: Uint8Array
    numSlashingSpans: number
}

/**
 *  Force there to be a new era at the end of sessions indefinitely.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # Warning
 * 
 *  The election process starts multiple blocks before the end of the era.
 *  If this is called just before a new era is triggered, the election process may not
 *  have enough blocks to get a result.
 * 
 *  # <weight>
 *  - Weight: O(1)
 *  - Write: ForceEra
 *  # </weight>
 */
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 *  Cancel enactment of a deferred slash.
 * 
 *  Can be called by the `T::SlashCancelOrigin`.
 * 
 *  Parameters: era and indices of the slashes for that era to kill.
 * 
 *  # <weight>
 *  Complexity: O(U + S)
 *  with U unapplied slashes weighted with U=1000
 *  and S is the number of slash indices to be canceled.
 *  - Read: Unapplied Slashes
 *  - Write: Unapplied Slashes
 *  # </weight>
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: number
    slashIndices: number[]
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
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: Uint8Array
    era: number
}

/**
 *  Rebond a portion of the stash scheduled to be unlocked.
 * 
 *  The dispatch origin must be signed by the controller.
 * 
 *  # <weight>
 *  - Time complexity: O(L), where L is unlocking chunks
 *  - Bounded by `MAX_UNLOCKING_CHUNKS`.
 *  - Storage changes: Can't increase storage, only decrease it.
 *  # </weight>
 */
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 *  Set `HistoryDepth` value. This function will delete any history information
 *  when `HistoryDepth` is reduced.
 * 
 *  Parameters:
 *  - `new_history_depth`: The new history depth you would like to set.
 *  - `era_items_deleted`: The number of items that will be deleted by this dispatch.
 *     This should report all the storage items that will be deleted by clearing old
 *     era history. Needed to report an accurate weight for the dispatch. Trusted by
 *     `Root` to report an accurate number.
 * 
 *  Origin must be root.
 * 
 *  # <weight>
 *  - E: Number of history depths removed, i.e. 10 -> 7 = 3
 *  - Weight: O(E)
 *  - DB Weight:
 *      - Reads: Current Era, History Depth
 *      - Writes: History Depth
 *      - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
 *      - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake, ErasStartSessionIndex
 *  # </weight>
 */
export interface StakingCall_set_history_depth {
    __kind: 'set_history_depth'
    newHistoryDepth: number
    eraItemsDeleted: number
}

/**
 *  Remove all data structure concerning a staker/stash once its balance is at the minimum.
 *  This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone
 *  and the target `stash` must have no funds left beyond the ED.
 * 
 *  This can be called from any origin.
 * 
 *  - `stash`: The stash account to reap. Its balance must be zero.
 * 
 *  # <weight>
 *  Complexity: O(S) where S is the number of slashing spans on the account.
 *  DB Weight:
 *  - Reads: Stash Account, Bonded, Slashing Spans, Locks
 *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Stash Account, Locks
 *  - Writes Each: SpanSlash * S
 *  # </weight>
 */
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: Uint8Array
    numSlashingSpans: number
}

/**
 *  Remove the given nominations from the calling validator.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  - `who`: A list of nominator stash accounts who are nominating this validator which
 *    should no longer be nominating this validator.
 * 
 *  Note: Making this call only makes sense if you first set the validator preferences to
 *  block any further nominations.
 */
export interface StakingCall_kick {
    __kind: 'kick'
    who: LookupSource[]
}

/**
 *  Update the various staking limits this pallet.
 * 
 *  * `min_nominator_bond`: The minimum active bond needed to be a nominator.
 *  * `min_validator_bond`: The minimum active bond needed to be a validator.
 *  * `max_nominator_count`: The max number of users who can be a nominator at once.
 *    When set to `None`, no limit is enforced.
 *  * `max_validator_count`: The max number of users who can be a validator at once.
 *    When set to `None`, no limit is enforced.
 * 
 *  Origin must be Root to call this function.
 * 
 *  NOTE: Existing nominators and validators will not be affected by this update.
 *  to kick people under the new limits, `chill_other` should be called.
 */
export interface StakingCall_set_staking_limits {
    __kind: 'set_staking_limits'
    minNominatorBond: bigint
    minValidatorBond: bigint
    maxNominatorCount: (number | undefined)
    maxValidatorCount: (number | undefined)
    threshold: (number | undefined)
}

/**
 *  Declare a `controller` to stop participating as either a validator or nominator.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_, but can be called by anyone.
 * 
 *  If the caller is the same as the controller being targeted, then no further checks are
 *  enforced, and this function behaves just like `chill`.
 * 
 *  If the caller is different than the controller being targeted, the following conditions
 *  must be met:
 *  * A `ChillThreshold` must be set and checked which defines how close to the max
 *    nominators or validators we must reach before users can start chilling one-another.
 *  * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
 *    how close we are to the threshold.
 *  * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
 *    if this is a person that should be chilled because they have not met the threshold
 *    bond required.
 * 
 *  This can be helpful if bond requirements are updated, and we need to remove old users
 *  who do not satisfy these requirements.
 */
export interface StakingCall_chill_other {
    __kind: 'chill_other'
    controller: Uint8Array
}

export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

/**
 *  Sets the session key(s) of the function caller to `keys`.
 *  Allows an account to set its session key prior to becoming a validator.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
 *  - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
 *  - DbWrites: `origin account`, `NextKeys`
 *  - DbReads per key id: `KeyOwner`
 *  - DbWrites per key id: `KeyOwner`
 *  # </weight>
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]
    proof: Uint8Array
}

/**
 *  Removes any session key(s) of the function caller.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - Complexity: `O(1)` in number of key types.
 *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
 *  - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
 *  - DbWrites: `NextKeys`, `origin account`
 *  - DbWrites per key id: `KeyOwner`
 *  # </weight>
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

export type GrandpaCall = GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned | GrandpaCall_note_stalled

/**
 *  Report voter equivocation/misbehavior. This method will verify the
 *  equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence
 *  will be reported.
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: GrandpaEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

/**
 *  Report voter equivocation/misbehavior. This method will verify the
 *  equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence
 *  will be reported.
 * 
 *  This extrinsic must be called unsigned and it is expected that only
 *  block authors will call it (validated in `ValidateUnsigned`), as such
 *  if the block author is defined it will be defined as the equivocation
 *  reporter.
 */
export interface GrandpaCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: GrandpaEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

/**
 *  Note that the current authority set of the GRANDPA finality gadget has
 *  stalled. This will trigger a forced authority set change at the beginning
 *  of the next session, to be enacted `delay` blocks after that. The delay
 *  should be high enough to safely assume that the block signalling the
 *  forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
 *  will start the new authority set using the given finalized block as base.
 *  Only callable by root.
 */
export interface GrandpaCall_note_stalled {
    __kind: 'note_stalled'
    delay: number
    bestFinalizedBlockNumber: number
}

export type ImOnlineCall = ImOnlineCall_heartbeat

/**
 *  # <weight>
 *  - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len)
 *    and E is length of `heartbeat.network_state.external_address`
 *    - `O(K)`: decoding of length `K`
 *    - `O(E)`: decoding/encoding of length `E`
 *  - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
 *    `ReceivedHeartbeats`
 *  - DbWrites: `ReceivedHeartbeats`
 *  # </weight>
 */
export interface ImOnlineCall_heartbeat {
    __kind: 'heartbeat'
    heartbeat: Heartbeat
    signature: Uint8Array
}

export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_cancel_queued | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_note_preimage | DemocracyCall_note_preimage_operational | DemocracyCall_note_imminent_preimage | DemocracyCall_note_imminent_preimage_operational | DemocracyCall_reap_preimage | DemocracyCall_unlock | DemocracyCall_remove_vote | DemocracyCall_remove_other_vote | DemocracyCall_enact_proposal | DemocracyCall_blacklist | DemocracyCall_cancel_proposal

/**
 *  Propose a sensitive action to be taken.
 * 
 *  The dispatch origin of this call must be _Signed_ and the sender must
 *  have funds to cover the deposit.
 * 
 *  - `proposal_hash`: The hash of the proposal preimage.
 *  - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 *  Emits `Proposed`.
 * 
 *  Weight: `O(p)`
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposalHash: Uint8Array
    value: bigint
}

/**
 *  Signals agreement with a particular proposal.
 * 
 *  The dispatch origin of this call must be _Signed_ and the sender
 *  must have funds to cover the deposit, equal to the original deposit.
 * 
 *  - `proposal`: The index of the proposal to second.
 *  - `seconds_upper_bound`: an upper bound on the current number of seconds on this
 *    proposal. Extrinsic is weighted according to this value with no refund.
 * 
 *  Weight: `O(S)` where S is the number of seconds a proposal already has.
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
    secondsUpperBound: number
}

/**
 *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 *  otherwise it is a vote to keep the status quo.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `ref_index`: The index of the referendum to vote for.
 *  - `vote`: The vote configuration.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter has voted on.
 */
export interface DemocracyCall_vote {
    __kind: 'vote'
    refIndex: number
    vote: AccountVote
}

/**
 *  Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 *  referendum.
 * 
 *  The dispatch origin of this call must be `CancellationOrigin`.
 * 
 *  -`ref_index`: The index of the referendum to cancel.
 * 
 *  Weight: `O(1)`.
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: number
}

/**
 *  Schedule a referendum to be tabled once it is legal to schedule an external
 *  referendum.
 * 
 *  The dispatch origin of this call must be `ExternalOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
 *    Decoding vec of length V. Charged as maximum
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposalHash: Uint8Array
}

/**
 *  Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 *  an external referendum.
 * 
 *  The dispatch of this call must be `ExternalMajorityOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposalHash: Uint8Array
}

/**
 *  Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 *  schedule an external referendum.
 * 
 *  The dispatch of this call must be `ExternalDefaultOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposalHash: Uint8Array
}

/**
 *  Schedule the currently externally-proposed majority-carries referendum to be tabled
 *  immediately. If there is no externally-proposed referendum currently, or if there is one
 *  but it is not a majority-carries referendum then it fails.
 * 
 *  The dispatch of this call must be `FastTrackOrigin`.
 * 
 *  - `proposal_hash`: The hash of the current external proposal.
 *  - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 *    `FastTrackVotingPeriod` if too low.
 *  - `delay`: The number of block after voting has ended in approval and this should be
 *    enacted. This doesn't have a minimum amount.
 * 
 *  Emits `Started`.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: Uint8Array
    votingPeriod: number
    delay: number
}

/**
 *  Veto and blacklist the external proposal hash.
 * 
 *  The dispatch origin of this call must be `VetoOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 * 
 *  Emits `Vetoed`.
 * 
 *  Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: Uint8Array
}

/**
 *  Remove a referendum.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  - `ref_index`: The index of the referendum to cancel.
 * 
 *  # Weight: `O(1)`.
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 *  Cancel a proposal queued for enactment.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  - `which`: The index of the referendum to cancel.
 * 
 *  Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
 */
export interface DemocracyCall_cancel_queued {
    __kind: 'cancel_queued'
    which: number
}

/**
 *  Delegate the voting power (with some given conviction) of the sending account.
 * 
 *  The balance delegated is locked for as long as it's delegated, and thereafter for the
 *  time appropriate for the conviction's lock period.
 * 
 *  The dispatch origin of this call must be _Signed_, and the signing account must either:
 *    - be delegating already; or
 *    - have no voting activity (if there is, then it will need to be removed/consolidated
 *      through `reap_vote` or `unvote`).
 * 
 *  - `to`: The account whose voting the `target` account's voting power will follow.
 *  - `conviction`: The conviction that will be attached to the delegated votes. When the
 *    account is undelegated, the funds will be locked for the corresponding period.
 *  - `balance`: The amount of the account's balance to be used in delegating. This must
 *    not be more than the account's current balance.
 * 
 *  Emits `Delegated`.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *    voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: Uint8Array
    conviction: Conviction
    balance: bigint
}

/**
 *  Undelegate the voting power of the sending account.
 * 
 *  Tokens may be unlocked following once an amount of time consistent with the lock period
 *  of the conviction with which the delegation was issued.
 * 
 *  The dispatch origin of this call must be _Signed_ and the signing account must be
 *  currently delegating.
 * 
 *  Emits `Undelegated`.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *    voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 *  Clears all public proposals.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 *  Register the preimage for an upcoming proposal. This doesn't require the proposal to be
 *  in the dispatch queue but does require a deposit, returned once enacted.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `encoded_proposal`: The preimage of a proposal.
 * 
 *  Emits `PreimageNoted`.
 * 
 *  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_preimage {
    __kind: 'note_preimage'
    encodedProposal: Uint8Array
}

/**
 *  Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_preimage_operational {
    __kind: 'note_preimage_operational'
    encodedProposal: Uint8Array
}

/**
 *  Register the preimage for an upcoming proposal. This requires the proposal to be
 *  in the dispatch queue. No deposit is needed. When this call is successful, i.e.
 *  the preimage has not been uploaded before and matches some imminent proposal,
 *  no fee is paid.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `encoded_proposal`: The preimage of a proposal.
 * 
 *  Emits `PreimageNoted`.
 * 
 *  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_imminent_preimage {
    __kind: 'note_imminent_preimage'
    encodedProposal: Uint8Array
}

/**
 *  Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_imminent_preimage_operational {
    __kind: 'note_imminent_preimage_operational'
    encodedProposal: Uint8Array
}

/**
 *  Remove an expired proposal preimage and collect the deposit.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `proposal_hash`: The preimage hash of a proposal.
 *  - `proposal_length_upper_bound`: an upper bound on length of the proposal.
 *    Extrinsic is weighted according to this value with no refund.
 * 
 *  This will only work after `VotingPeriod` blocks from the time that the preimage was
 *  noted, if it's the same account doing it. If it's a different account, then it'll only
 *  work an additional `EnactmentPeriod` later.
 * 
 *  Emits `PreimageReaped`.
 * 
 *  Weight: `O(D)` where D is length of proposal.
 */
export interface DemocracyCall_reap_preimage {
    __kind: 'reap_preimage'
    proposalHash: Uint8Array
    proposalLenUpperBound: number
}

/**
 *  Unlock tokens that have an expired lock.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `target`: The account to remove the lock on.
 * 
 *  Weight: `O(R)` with R number of vote of target.
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: Uint8Array
}

/**
 *  Remove a vote for a referendum.
 * 
 *  If:
 *  - the referendum was cancelled, or
 *  - the referendum is ongoing, or
 *  - the referendum has ended such that
 *    - the vote of the account was in opposition to the result; or
 *    - there was no conviction to the account's vote; or
 *    - the account made a split vote
 *  ...then the vote is removed cleanly and a following call to `unlock` may result in more
 *  funds being available.
 * 
 *  If, however, the referendum has ended and:
 *  - it finished corresponding to the vote of the account, and
 *  - the account made a standard vote with conviction, and
 *  - the lock period of the conviction is not over
 *  ...then the lock will be aggregated into the overall account's lock, which may involve
 *  *overlocking* (where the two locks are combined into a single lock that is the maximum
 *  of both the amount locked and the time is it locked for).
 * 
 *  The dispatch origin of this call must be _Signed_, and the signer must have a vote
 *  registered for referendum `index`.
 * 
 *  - `index`: The index of referendum of the vote to be removed.
 * 
 *  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: number
}

/**
 *  Remove a vote for a referendum.
 * 
 *  If the `target` is equal to the signer, then this function is exactly equivalent to
 *  `remove_vote`. If not equal to the signer, then the vote must have expired,
 *  either because the referendum was cancelled, because the voter lost the referendum or
 *  because the conviction period is over.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `target`: The account of the vote to be removed; this account must have voted for
 *    referendum `index`.
 *  - `index`: The index of referendum of the vote to be removed.
 * 
 *  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: Uint8Array
    index: number
}

/**
 *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
 */
export interface DemocracyCall_enact_proposal {
    __kind: 'enact_proposal'
    proposalHash: Uint8Array
    index: number
}

/**
 *  Permanently place a proposal into the blacklist. This prevents it from ever being
 *  proposed again.
 * 
 *  If called on a queued public or external proposal, then this will result in it being
 *  removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 *  then it will be cancelled.
 * 
 *  The dispatch origin of this call must be `BlacklistOrigin`.
 * 
 *  - `proposal_hash`: The proposal hash to blacklist permanently.
 *  - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 *  cancelled.
 * 
 *  Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *    reasonable value).
 */
export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: Uint8Array
    maybeRefIndex: (number | undefined)
}

/**
 *  Remove a proposal.
 * 
 *  The dispatch origin of this call must be `CancelProposalOrigin`.
 * 
 *  - `prop_index`: The index of the proposal to cancel.
 * 
 *  Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote | CouncilCall_close | CouncilCall_disapprove_proposal

/**
 *  Set the collective's membership.
 * 
 *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *  - `prime`: The prime member whose vote sets the default.
 *  - `old_count`: The upper bound for the previous number of members in storage.
 *                 Used for weight estimation.
 * 
 *  Requires root origin.
 * 
 *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *        the weight estimations rely on it to estimate dispatchable weight.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(MP + N)` where:
 *    - `M` old-members-count (code- and governance-bounded)
 *    - `N` new-members-count (code- and governance-bounded)
 *    - `P` proposals-count (code-bounded)
 *  - DB:
 *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
 *    - 1 storage read (codec `O(P)`) for reading the proposals
 *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 *  # </weight>
 */
export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: Uint8Array[]
    prime: (Uint8Array | undefined)
    oldCount: number
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
 *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 *  - 1 event
 *  # </weight>
 */
export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Proposal
    lengthBound: number
}

/**
 *  Add a new proposal to either be voted on or executed directly.
 * 
 *  Requires the sender to be member.
 * 
 *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 *  or put up for voting.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1)` or `O(B + M + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - branching is influenced by `threshold` where:
 *      - `P1` is proposal execution complexity (`threshold < 2`)
 *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 *  - DB:
 *    - 1 storage read `is_member` (codec `O(M)`)
 *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *    - DB accesses influenced by `threshold`:
 *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *      - OR proposal insertion (`threshold <= 2`)
 *        - 1 storage mutation `Proposals` (codec `O(P2)`)
 *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *        - 1 storage write `ProposalOf` (codec `O(B)`)
 *        - 1 storage write `Voting` (codec `O(M)`)
 *    - 1 event
 *  # </weight>
 */
export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Proposal
    lengthBound: number
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
 *  Transaction fees will be waived if the member is voting on any particular proposal
 *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
 *  # <weight>
 *  ## Weight
 *  - `O(M)` where `M` is members-count (code- and governance-bounded)
 *  - DB:
 *    - 1 storage read `Members` (codec `O(M)`)
 *    - 1 storage mutation `Voting` (codec `O(M)`)
 *  - 1 event
 *  # </weight>
 */
export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
}

/**
 *  Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 *  May be called by any signed account in order to finish voting and close the proposal.
 * 
 *  If called before the end of the voting period it will only close the vote if it is
 *  has enough votes to be approved or disapproved.
 * 
 *  If called after the end of the voting period abstentions are counted as rejections
 *  unless there is a prime member set and the prime member cast an approval.
 * 
 *  If the close operation completes successfully with disapproval, the transaction fee will
 *  be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
 *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1 + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - `P1` is the complexity of `proposal` preimage.
 *    - `P2` is proposal-count (code-bounded)
 *  - DB:
 *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
 *   - any mutations done while executing `proposal` (`P1`)
 *  - up to 3 events
 *  # </weight>
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
 * 
 *  Must be called by the Root origin.
 * 
 *  Parameters:
 *  * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 *  # <weight>
 *  Complexity: O(P) where P is the number of max proposals
 *  DB Weight:
 *  * Reads: Proposals
 *  * Writes: Voting, Proposals, ProposalOf
 *  # </weight>
 */
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
}

export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote | TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal

/**
 *  Set the collective's membership.
 * 
 *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *  - `prime`: The prime member whose vote sets the default.
 *  - `old_count`: The upper bound for the previous number of members in storage.
 *                 Used for weight estimation.
 * 
 *  Requires root origin.
 * 
 *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *        the weight estimations rely on it to estimate dispatchable weight.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(MP + N)` where:
 *    - `M` old-members-count (code- and governance-bounded)
 *    - `N` new-members-count (code- and governance-bounded)
 *    - `P` proposals-count (code-bounded)
 *  - DB:
 *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
 *    - 1 storage read (codec `O(P)`) for reading the proposals
 *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 *  # </weight>
 */
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: Uint8Array[]
    prime: (Uint8Array | undefined)
    oldCount: number
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
 *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 *  - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Proposal
    lengthBound: number
}

/**
 *  Add a new proposal to either be voted on or executed directly.
 * 
 *  Requires the sender to be member.
 * 
 *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 *  or put up for voting.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1)` or `O(B + M + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - branching is influenced by `threshold` where:
 *      - `P1` is proposal execution complexity (`threshold < 2`)
 *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 *  - DB:
 *    - 1 storage read `is_member` (codec `O(M)`)
 *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *    - DB accesses influenced by `threshold`:
 *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *      - OR proposal insertion (`threshold <= 2`)
 *        - 1 storage mutation `Proposals` (codec `O(P2)`)
 *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *        - 1 storage write `ProposalOf` (codec `O(B)`)
 *        - 1 storage write `Voting` (codec `O(M)`)
 *    - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Proposal
    lengthBound: number
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
 *  Transaction fees will be waived if the member is voting on any particular proposal
 *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
 *  # <weight>
 *  ## Weight
 *  - `O(M)` where `M` is members-count (code- and governance-bounded)
 *  - DB:
 *    - 1 storage read `Members` (codec `O(M)`)
 *    - 1 storage mutation `Voting` (codec `O(M)`)
 *  - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
}

/**
 *  Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 *  May be called by any signed account in order to finish voting and close the proposal.
 * 
 *  If called before the end of the voting period it will only close the vote if it is
 *  has enough votes to be approved or disapproved.
 * 
 *  If called after the end of the voting period abstentions are counted as rejections
 *  unless there is a prime member set and the prime member cast an approval.
 * 
 *  If the close operation completes successfully with disapproval, the transaction fee will
 *  be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
 *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1 + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - `P1` is the complexity of `proposal` preimage.
 *    - `P2` is proposal-count (code-bounded)
 *  - DB:
 *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
 *   - any mutations done while executing `proposal` (`P1`)
 *  - up to 3 events
 *  # </weight>
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
 * 
 *  Must be called by the Root origin.
 * 
 *  Parameters:
 *  * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 *  # <weight>
 *  Complexity: O(P) where P is the number of max proposals
 *  DB Weight:
 *  * Reads: Proposals
 *  * Writes: Voting, Proposals, ProposalOf
 *  # </weight>
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
}

export type PhragmenElectionCall = PhragmenElectionCall_vote | PhragmenElectionCall_remove_voter | PhragmenElectionCall_submit_candidacy | PhragmenElectionCall_renounce_candidacy | PhragmenElectionCall_remove_member | PhragmenElectionCall_clean_defunct_voters

/**
 *  Vote for a set of candidates for the upcoming round of election. This can be called to
 *  set the initial votes, or update already existing votes.
 * 
 *  Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
 *  reserved. The deposit is based on the number of votes and can be updated over time.
 * 
 *  The `votes` should:
 *    - not be empty.
 *    - be less than the number of possible candidates. Note that all current members and
 *      runners-up are also automatically candidates for the next round.
 * 
 *  If `value` is more than `who`'s total balance, then the maximum of the two is used.
 * 
 *  The dispatch origin of this call must be signed.
 * 
 *  ### Warning
 * 
 *  It is the responsibility of the caller to **NOT** place all of their balance into the
 *  lock and keep some for further operations.
 * 
 *  # <weight>
 *  We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
 *  # </weight>
 */
export interface PhragmenElectionCall_vote {
    __kind: 'vote'
    votes: Uint8Array[]
    value: bigint
}

/**
 *  Remove `origin` as a voter.
 * 
 *  This removes the lock and returns the deposit.
 * 
 *  The dispatch origin of this call must be signed and be a voter.
 */
export interface PhragmenElectionCall_remove_voter {
    __kind: 'remove_voter'
}

/**
 *  Submit oneself for candidacy. A fixed amount of deposit is recorded.
 * 
 *  All candidates are wiped at the end of the term. They either become a member/runner-up,
 *  or leave the system while their deposit is slashed.
 * 
 *  The dispatch origin of this call must be signed.
 * 
 *  ### Warning
 * 
 *  Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
 *  to get their deposit back. Losing the spot in an election will always lead to a slash.
 * 
 *  # <weight>
 *  The number of current candidates must be provided as witness data.
 *  # </weight>
 */
export interface PhragmenElectionCall_submit_candidacy {
    __kind: 'submit_candidacy'
    candidateCount: number
}

/**
 *  Renounce one's intention to be a candidate for the next election round. 3 potential
 *  outcomes exist:
 * 
 *  - `origin` is a candidate and not elected in any set. In this case, the deposit is
 *    unreserved, returned and origin is removed as a candidate.
 *  - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
 *    origin is removed as a runner-up.
 *  - `origin` is a current member. In this case, the deposit is unreserved and origin is
 *    removed as a member, consequently not being a candidate for the next round anymore.
 *    Similar to [`remove_member`](Self::remove_member), if replacement runners exists,
 *    they are immediately used. If the prime is renouncing, then no prime will exist until
 *    the next round.
 * 
 *  The dispatch origin of this call must be signed, and have one of the above roles.
 * 
 *  # <weight>
 *  The type of renouncing must be provided as witness data.
 *  # </weight>
 */
export interface PhragmenElectionCall_renounce_candidacy {
    __kind: 'renounce_candidacy'
    renouncing: Renouncing
}

/**
 *  Remove a particular member from the set. This is effective immediately and the bond of
 *  the outgoing member is slashed.
 * 
 *  If a runner-up is available, then the best runner-up will be removed and replaces the
 *  outgoing member. Otherwise, a new phragmen election is started.
 * 
 *  The dispatch origin of this call must be root.
 * 
 *  Note that this does not affect the designated block number of the next election.
 * 
 *  # <weight>
 *  If we have a replacement, we use a small weight. Else, since this is a root call and
 *  will go into phragmen, we assume full block for now.
 *  # </weight>
 */
export interface PhragmenElectionCall_remove_member {
    __kind: 'remove_member'
    who: LookupSource
    hasReplacement: boolean
}

/**
 *  Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
 *  deposit of the removed voters are returned.
 * 
 *  This is an root function to be used only for cleaning the state.
 * 
 *  The dispatch origin of this call must be root.
 * 
 *  # <weight>
 *  The total number of voters and those that are defunct must be provided as witness data.
 *  # </weight>
 */
export interface PhragmenElectionCall_clean_defunct_voters {
    __kind: 'clean_defunct_voters'
    numVoters: number
    numDefunct: number
}

export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_swap_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_change_key | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_clear_prime

/**
 *  Add a member `who` to the set.
 * 
 *  May only be called from `T::AddOrigin`.
 */
export interface TechnicalMembershipCall_add_member {
    __kind: 'add_member'
    who: Uint8Array
}

/**
 *  Remove a member `who` from the set.
 * 
 *  May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalMembershipCall_remove_member {
    __kind: 'remove_member'
    who: Uint8Array
}

/**
 *  Swap out one member `remove` for another `add`.
 * 
 *  May only be called from `T::SwapOrigin`.
 * 
 *  Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: Uint8Array
    add: Uint8Array
}

/**
 *  Change the membership to a new set, disregarding the existing membership. Be nice and
 *  pass `members` pre-sorted.
 * 
 *  May only be called from `T::ResetOrigin`.
 */
export interface TechnicalMembershipCall_reset_members {
    __kind: 'reset_members'
    members: Uint8Array[]
}

/**
 *  Swap out the sending member for some other key `new`.
 * 
 *  May only be called from `Signed` origin of a current member.
 * 
 *  Prime membership is passed from the origin account to `new`, if extant.
 */
export interface TechnicalMembershipCall_change_key {
    __kind: 'change_key'
    new: Uint8Array
}

/**
 *  Set the prime member. Must be a current member.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_set_prime {
    __kind: 'set_prime'
    who: Uint8Array
}

/**
 *  Remove the prime member if it exists.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal

/**
 *  Put forward a suggestion for spending. A deposit proportional to the value
 *  is reserved and slashed if the proposal is rejected. It is returned once the
 *  proposal is awarded.
 * 
 *  # <weight>
 *  - Complexity: O(1)
 *  - DbReads: `ProposalCount`, `origin account`
 *  - DbWrites: `ProposalCount`, `Proposals`, `origin account`
 *  # </weight>
 */
export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: LookupSource
}

/**
 *  Reject a proposed spend. The original deposit will be slashed.
 * 
 *  May only be called from `T::RejectOrigin`.
 * 
 *  # <weight>
 *  - Complexity: O(1)
 *  - DbReads: `Proposals`, `rejected proposer account`
 *  - DbWrites: `Proposals`, `rejected proposer account`
 *  # </weight>
 */
export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 *  Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 *  and the original deposit will be returned.
 * 
 *  May only be called from `T::ApproveOrigin`.
 * 
 *  # <weight>
 *  - Complexity: O(1).
 *  - DbReads: `Proposals`, `Approvals`
 *  - DbWrite: `Approvals`
 *  # </weight>
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

export type ClaimsCall = ClaimsCall_claim | ClaimsCall_mint_claim | ClaimsCall_claim_attest | ClaimsCall_attest | ClaimsCall_move_claim

/**
 *  Make a claim to collect your DOTs.
 * 
 *  The dispatch origin for this call must be _None_.
 * 
 *  Unsigned Validation:
 *  A call to claim is deemed valid if the signature provided matches
 *  the expected signed message of:
 * 
 *  > Ethereum Signed Message:
 *  > (configured prefix string)(address)
 * 
 *  and `address` matches the `dest` account.
 * 
 *  Parameters:
 *  - `dest`: The destination account to payout the claim.
 *  - `ethereum_signature`: The signature of an ethereum signed message
 *     matching the format described above.
 * 
 *  <weight>
 *  The weight of this call is invariant over the input parameters.
 *  Weight includes logic to validate unsigned `claim` call.
 * 
 *  Total Complexity: O(1)
 *  </weight>
 */
export interface ClaimsCall_claim {
    __kind: 'claim'
    dest: Uint8Array
    ethereumSignature: Uint8Array
}

/**
 *  Mint a new claim to collect DOTs.
 * 
 *  The dispatch origin for this call must be _Root_.
 * 
 *  Parameters:
 *  - `who`: The Ethereum address allowed to collect this claim.
 *  - `value`: The number of DOTs that will be claimed.
 *  - `vesting_schedule`: An optional vesting schedule for these DOTs.
 * 
 *  <weight>
 *  The weight of this call is invariant over the input parameters.
 *  We assume worst case that both vesting and statement is being inserted.
 * 
 *  Total Complexity: O(1)
 *  </weight>
 */
export interface ClaimsCall_mint_claim {
    __kind: 'mint_claim'
    who: Uint8Array
    value: bigint
    vestingSchedule: ([bigint, bigint, number] | undefined)
    statement: (StatementKind | undefined)
}

/**
 *  Make a claim to collect your DOTs by signing a statement.
 * 
 *  The dispatch origin for this call must be _None_.
 * 
 *  Unsigned Validation:
 *  A call to `claim_attest` is deemed valid if the signature provided matches
 *  the expected signed message of:
 * 
 *  > Ethereum Signed Message:
 *  > (configured prefix string)(address)(statement)
 * 
 *  and `address` matches the `dest` account; the `statement` must match that which is
 *  expected according to your purchase arrangement.
 * 
 *  Parameters:
 *  - `dest`: The destination account to payout the claim.
 *  - `ethereum_signature`: The signature of an ethereum signed message
 *     matching the format described above.
 *  - `statement`: The identity of the statement which is being attested to in the signature.
 * 
 *  <weight>
 *  The weight of this call is invariant over the input parameters.
 *  Weight includes logic to validate unsigned `claim_attest` call.
 * 
 *  Total Complexity: O(1)
 *  </weight>
 */
export interface ClaimsCall_claim_attest {
    __kind: 'claim_attest'
    dest: Uint8Array
    ethereumSignature: Uint8Array
    statement: Uint8Array
}

/**
 *  Attest to a statement, needed to finalize the claims process.
 * 
 *  WARNING: Insecure unless your chain includes `PrevalidateAttests` as a `SignedExtension`.
 * 
 *  Unsigned Validation:
 *  A call to attest is deemed valid if the sender has a `Preclaim` registered
 *  and provides a `statement` which is expected for the account.
 * 
 *  Parameters:
 *  - `statement`: The identity of the statement which is being attested to in the signature.
 * 
 *  <weight>
 *  The weight of this call is invariant over the input parameters.
 *  Weight includes logic to do pre-validation on `attest` call.
 * 
 *  Total Complexity: O(1)
 *  </weight>
 */
export interface ClaimsCall_attest {
    __kind: 'attest'
    statement: Uint8Array
}

export interface ClaimsCall_move_claim {
    __kind: 'move_claim'
    old: Uint8Array
    new: Uint8Array
    maybePreclaim: (Uint8Array | undefined)
}

export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all

/**
 *  Send a batch of dispatch calls.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *    exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 *  If origin is root then call are dispatch without checking origin filter. (This includes
 *  bypassing `frame_system::Config::BaseCallFilter`).
 * 
 *  # <weight>
 *  - Complexity: O(C) where C is the number of calls to be batched.
 *  # </weight>
 * 
 *  This will return `Ok` in all circumstances. To determine the success of the batch, an
 *  event is deposited. If a call failed and the batch was interrupted, then the
 *  `BatchInterrupted` event is deposited, along with the number of successful calls made
 *  and the error of the failed call. If all were successful, then the `BatchCompleted`
 *  event is deposited.
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Type_138[]
}

/**
 *  Send a call through an indexed pseudonym of the sender.
 * 
 *  Filter from origin are passed along. The call will be dispatched with an origin which
 *  use the same filter as the origin of this call.
 * 
 *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 *  because you expect `proxy` to have been used prior in the call stack and you do not want
 *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 *  in the Multisig pallet instead.
 * 
 *  NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 *  The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Type_138
}

/**
 *  Send a batch of dispatch calls and atomically execute them.
 *  The whole transaction will rollback and fail if any of the calls failed.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *    exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 *  If origin is root then call are dispatch without checking origin filter. (This includes
 *  bypassing `frame_system::Config::BaseCallFilter`).
 * 
 *  # <weight>
 *  - Complexity: O(C) where C is the number of calls to be batched.
 *  # </weight>
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Type_138[]
}

export type IdentityCall = IdentityCall_add_registrar | IdentityCall_set_identity | IdentityCall_set_subs | IdentityCall_clear_identity | IdentityCall_request_judgement | IdentityCall_cancel_request | IdentityCall_set_fee | IdentityCall_set_account_id | IdentityCall_set_fields | IdentityCall_provide_judgement | IdentityCall_kill_identity | IdentityCall_add_sub | IdentityCall_rename_sub | IdentityCall_remove_sub | IdentityCall_quit_sub

/**
 *  Add a registrar to the system.
 * 
 *  The dispatch origin for this call must be `T::RegistrarOrigin`.
 * 
 *  - `account`: the account of the registrar.
 * 
 *  Emits `RegistrarAdded` if successful.
 * 
 *  # <weight>
 *  - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
 *  - One storage mutation (codec `O(R)`).
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: Uint8Array
}

/**
 *  Set an account's identity information and reserve the appropriate deposit.
 * 
 *  If the account already has identity information, the deposit is taken as part payment
 *  for the new deposit.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `info`: The identity information.
 * 
 *  Emits `IdentitySet` if successful.
 * 
 *  # <weight>
 *  - `O(X + X' + R)`
 *    - where `X` additional-field-count (deposit-bounded and code-bounded)
 *    - where `R` judgements-count (registrar-count-bounded)
 *  - One balance reserve operation.
 *  - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 *  Set the sub-accounts of the sender.
 * 
 *  Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 *  and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  identity.
 * 
 *  - `subs`: The identity's (new) sub-accounts.
 * 
 *  # <weight>
 *  - `O(P + S)`
 *    - where `P` old-subs-count (hard- and deposit-bounded).
 *    - where `S` subs-count (hard- and deposit-bounded).
 *  - At most one balance operations.
 *  - DB:
 *    - `P + S` storage mutations (codec complexity `O(1)`)
 *    - One storage read (codec complexity `O(P)`).
 *    - One storage write (codec complexity `O(S)`).
 *    - One storage-exists (`IdentityOf::contains_key`).
 *  # </weight>
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [Uint8Array, Data][]
}

/**
 *  Clear an account's identity info and all sub-accounts and return all deposits.
 * 
 *  Payment: All reserved balances on the account are returned.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  identity.
 * 
 *  Emits `IdentityCleared` if successful.
 * 
 *  # <weight>
 *  - `O(R + S + X)`
 *    - where `R` registrar-count (governance-bounded).
 *    - where `S` subs-count (hard- and deposit-bounded).
 *    - where `X` additional-field-count (deposit-bounded and code-bounded).
 *  - One balance-unreserve operation.
 *  - `2` storage reads and `S + 2` storage deletions.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 *  Request a judgement from a registrar.
 * 
 *  Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 *  given.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a
 *  registered identity.
 * 
 *  - `reg_index`: The index of the registrar whose judgement is requested.
 *  - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 * 
 *  ```nocompile
 *  Self::registrars().get(reg_index).unwrap().fee
 *  ```
 * 
 *  Emits `JudgementRequested` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-reserve operation.
 *  - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 *  Cancel a previous request.
 * 
 *  Payment: A previously reserved deposit is returned on success.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a
 *  registered identity.
 * 
 *  - `reg_index`: The index of the registrar whose judgement is no longer requested.
 * 
 *  Emits `JudgementUnrequested` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-reserve operation.
 *  - One storage mutation `O(R + X)`.
 *  - One event
 *  # </weight>
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 *  Set the fee required for a judgement to be requested from a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `fee`: the new fee.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
 *  # </weight>
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 *  Change the account associated with a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `new`: the new account ID.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
 *  # </weight>
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: Uint8Array
}

/**
 *  Set the field information for a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `fields`: the fields that the registrar concerns themselves with.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
 *  # </weight>
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: bigint
}

/**
 *  Provide a judgement for an account's identity.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `reg_index`.
 * 
 *  - `reg_index`: the index of the registrar whose judgement is being made.
 *  - `target`: the account whose identity the judgement is upon. This must be an account
 *    with a registered identity.
 *  - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 * 
 *  Emits `JudgementGiven` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-transfer operation.
 *  - Up to one account-lookup operation.
 *  - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: LookupSource
    judgement: IdentityJudgement
}

/**
 *  Remove an account's identity and sub-account information and slash the deposits.
 * 
 *  Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 *  `Slash`. Verification request deposits are not returned; they should be cancelled
 *  manually using `cancel_request`.
 * 
 *  The dispatch origin for this call must match `T::ForceOrigin`.
 * 
 *  - `target`: the account whose identity the judgement is upon. This must be an account
 *    with a registered identity.
 * 
 *  Emits `IdentityKilled` if successful.
 * 
 *  # <weight>
 *  - `O(R + S + X)`.
 *  - One balance-reserve operation.
 *  - `S + 2` storage mutations.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: LookupSource
}

/**
 *  Add the given account to the sender's subs.
 * 
 *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *  to the sender.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  sub identity of `sub`.
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: LookupSource
    data: Data
}

/**
 *  Alter the associated name of the given sub-account.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  sub identity of `sub`.
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: LookupSource
    data: Data
}

/**
 *  Remove the given account from the sender's subs.
 * 
 *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *  to the sender.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  sub identity of `sub`.
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: LookupSource
}

/**
 *  Remove the sender as a sub-account.
 * 
 *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *  to the sender (*not* the original depositor).
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  super-identity.
 * 
 *  NOTE: This should not normally be used, but is provided in the case that the non-
 *  controller of an account is maliciously registered as a sub-account.
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

export type SocietyCall = SocietyCall_bid | SocietyCall_unbid | SocietyCall_vouch | SocietyCall_unvouch | SocietyCall_vote | SocietyCall_defender_vote | SocietyCall_payout | SocietyCall_found | SocietyCall_unfound | SocietyCall_judge_suspended_member | SocietyCall_judge_suspended_candidate | SocietyCall_set_max_members

/**
 *  A user outside of the society can make a bid for entry.
 * 
 *  Payment: `CandidateDeposit` will be reserved for making a bid. It is returned
 *  when the bid becomes a member, or if the bid calls `unbid`.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `value`: A one time payment the bid would like to receive when joining the society.
 * 
 *  # <weight>
 *  Key: B (len of bids), C (len of candidates), M (len of members), X (balance reserve)
 *  - Storage Reads:
 *  	- One storage read to check for suspended candidate. O(1)
 *  	- One storage read to check for suspended member. O(1)
 *  	- One storage read to retrieve all current bids. O(B)
 *  	- One storage read to retrieve all current candidates. O(C)
 *  	- One storage read to retrieve all members. O(M)
 *  - Storage Writes:
 *  	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization w/ read)
 *  	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
 *  - Notable Computation:
 *  	- O(B + C + log M) search to check user is not already a part of society.
 *  	- O(log B) search to insert the new bid sorted.
 *  - External Module Operations:
 *  	- One balance reserve operation. O(X)
 *  	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
 *  - Events:
 *  	- One event for new bid.
 *  	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
 * 
 *  Total Complexity: O(M + B + C + logM + logB + X)
 *  # </weight>
 */
export interface SocietyCall_bid {
    __kind: 'bid'
    value: bigint
}

/**
 *  A bidder can remove their bid for entry into society.
 *  By doing so, they will have their candidate deposit returned or
 *  they will unvouch their voucher.
 * 
 *  Payment: The bid deposit is unreserved if the user made a bid.
 * 
 *  The dispatch origin for this call must be _Signed_ and a bidder.
 * 
 *  Parameters:
 *  - `pos`: Position in the `Bids` vector of the bid who wants to unbid.
 * 
 *  # <weight>
 *  Key: B (len of bids), X (balance unreserve)
 *  - One storage read and write to retrieve and update the bids. O(B)
 *  - Either one unreserve balance action O(X) or one vouching storage removal. O(1)
 *  - One event.
 * 
 *  Total Complexity: O(B + X)
 *  # </weight>
 */
export interface SocietyCall_unbid {
    __kind: 'unbid'
    pos: number
}

/**
 *  As a member, vouch for someone to join society by placing a bid on their behalf.
 * 
 *  There is no deposit required to vouch for a new bid, but a member can only vouch for
 *  one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by
 *  the suspension judgement origin, the member will be banned from vouching again.
 * 
 *  As a vouching member, you can claim a tip if the candidate is accepted. This tip will
 *  be paid as a portion of the reward the member will receive for joining the society.
 * 
 *  The dispatch origin for this call must be _Signed_ and a member.
 * 
 *  Parameters:
 *  - `who`: The user who you would like to vouch for.
 *  - `value`: The total reward to be paid between you and the candidate if they become
 *  a member in the society.
 *  - `tip`: Your cut of the total `value` payout when the candidate is inducted into
 *  the society. Tips larger than `value` will be saturated upon payout.
 * 
 *  # <weight>
 *  Key: B (len of bids), C (len of candidates), M (len of members)
 *  - Storage Reads:
 *  	- One storage read to retrieve all members. O(M)
 *  	- One storage read to check member is not already vouching. O(1)
 *  	- One storage read to check for suspended candidate. O(1)
 *  	- One storage read to check for suspended member. O(1)
 *  	- One storage read to retrieve all current bids. O(B)
 *  	- One storage read to retrieve all current candidates. O(C)
 *  - Storage Writes:
 *  	- One storage write to insert vouching status to the member. O(1)
 *  	- One storage mutate to add a new bid to the vector O(B) (TODO: possible optimization w/ read)
 *  	- Up to one storage removal if bid.len() > MAX_BID_COUNT. O(1)
 *  - Notable Computation:
 *  	- O(log M) search to check sender is a member.
 *  	- O(B + C + log M) search to check user is not already a part of society.
 *  	- O(log B) search to insert the new bid sorted.
 *  - External Module Operations:
 *  	- One balance reserve operation. O(X)
 *  	- Up to one balance unreserve operation if bids.len() > MAX_BID_COUNT.
 *  - Events:
 *  	- One event for vouch.
 *  	- Up to one event for AutoUnbid if bid.len() > MAX_BID_COUNT.
 * 
 *  Total Complexity: O(M + B + C + logM + logB + X)
 *  # </weight>
 */
export interface SocietyCall_vouch {
    __kind: 'vouch'
    who: Uint8Array
    value: bigint
    tip: bigint
}

/**
 *  As a vouching member, unvouch a bid. This only works while vouched user is
 *  only a bidder (and not a candidate).
 * 
 *  The dispatch origin for this call must be _Signed_ and a vouching member.
 * 
 *  Parameters:
 *  - `pos`: Position in the `Bids` vector of the bid who should be unvouched.
 * 
 *  # <weight>
 *  Key: B (len of bids)
 *  - One storage read O(1) to check the signer is a vouching member.
 *  - One storage mutate to retrieve and update the bids. O(B)
 *  - One vouching storage removal. O(1)
 *  - One event.
 * 
 *  Total Complexity: O(B)
 *  # </weight>
 */
export interface SocietyCall_unvouch {
    __kind: 'unvouch'
    pos: number
}

/**
 *  As a member, vote on a candidate.
 * 
 *  The dispatch origin for this call must be _Signed_ and a member.
 * 
 *  Parameters:
 *  - `candidate`: The candidate that the member would like to bid on.
 *  - `approve`: A boolean which says if the candidate should be
 *               approved (`true`) or rejected (`false`).
 * 
 *  # <weight>
 *  Key: C (len of candidates), M (len of members)
 *  - One storage read O(M) and O(log M) search to check user is a member.
 *  - One account lookup.
 *  - One storage read O(C) and O(C) search to check that user is a candidate.
 *  - One storage write to add vote to votes. O(1)
 *  - One event.
 * 
 *  Total Complexity: O(M + logM + C)
 *  # </weight>
 */
export interface SocietyCall_vote {
    __kind: 'vote'
    candidate: LookupSource
    approve: boolean
}

/**
 *  As a member, vote on the defender.
 * 
 *  The dispatch origin for this call must be _Signed_ and a member.
 * 
 *  Parameters:
 *  - `approve`: A boolean which says if the candidate should be
 *  approved (`true`) or rejected (`false`).
 * 
 *  # <weight>
 *  - Key: M (len of members)
 *  - One storage read O(M) and O(log M) search to check user is a member.
 *  - One storage write to add vote to votes. O(1)
 *  - One event.
 * 
 *  Total Complexity: O(M + logM)
 *  # </weight>
 */
export interface SocietyCall_defender_vote {
    __kind: 'defender_vote'
    approve: boolean
}

/**
 *  Transfer the first matured payout for the sender and remove it from the records.
 * 
 *  NOTE: This extrinsic needs to be called multiple times to claim multiple matured payouts.
 * 
 *  Payment: The member will receive a payment equal to their first matured
 *  payout to their free balance.
 * 
 *  The dispatch origin for this call must be _Signed_ and a member with
 *  payouts remaining.
 * 
 *  # <weight>
 *  Key: M (len of members), P (number of payouts for a particular member)
 *  - One storage read O(M) and O(log M) search to check signer is a member.
 *  - One storage read O(P) to get all payouts for a member.
 *  - One storage read O(1) to get the current block number.
 *  - One currency transfer call. O(X)
 *  - One storage write or removal to update the member's payouts. O(P)
 * 
 *  Total Complexity: O(M + logM + P + X)
 *  # </weight>
 */
export interface SocietyCall_payout {
    __kind: 'payout'
}

/**
 *  Found the society.
 * 
 *  This is done as a discrete action in order to allow for the
 *  module to be included into a running chain and can only be done once.
 * 
 *  The dispatch origin for this call must be from the _FounderSetOrigin_.
 * 
 *  Parameters:
 *  - `founder` - The first member and head of the newly founded society.
 *  - `max_members` - The initial max number of members for the society.
 *  - `rules` - The rules of this society concerning membership.
 * 
 *  # <weight>
 *  - Two storage mutates to set `Head` and `Founder`. O(1)
 *  - One storage write to add the first member to society. O(1)
 *  - One event.
 * 
 *  Total Complexity: O(1)
 *  # </weight>
 */
export interface SocietyCall_found {
    __kind: 'found'
    founder: Uint8Array
    maxMembers: number
    rules: Uint8Array
}

/**
 *  Annul the founding of the society.
 * 
 *  The dispatch origin for this call must be Signed, and the signing account must be both
 *  the `Founder` and the `Head`. This implies that it may only be done when there is one
 *  member.
 * 
 *  # <weight>
 *  - Two storage reads O(1).
 *  - Four storage removals O(1).
 *  - One event.
 * 
 *  Total Complexity: O(1)
 *  # </weight>
 */
export interface SocietyCall_unfound {
    __kind: 'unfound'
}

/**
 *  Allow suspension judgement origin to make judgement on a suspended member.
 * 
 *  If a suspended member is forgiven, we simply add them back as a member, not affecting
 *  any of the existing storage items for that member.
 * 
 *  If a suspended member is rejected, remove all associated storage items, including
 *  their payouts, and remove any vouched bids they currently have.
 * 
 *  The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
 * 
 *  Parameters:
 *  - `who` - The suspended member to be judged.
 *  - `forgive` - A boolean representing whether the suspension judgement origin
 *                forgives (`true`) or rejects (`false`) a suspended member.
 * 
 *  # <weight>
 *  Key: B (len of bids), M (len of members)
 *  - One storage read to check `who` is a suspended member. O(1)
 *  - Up to one storage write O(M) with O(log M) binary search to add a member back to society.
 *  - Up to 3 storage removals O(1) to clean up a removed member.
 *  - Up to one storage write O(B) with O(B) search to remove vouched bid from bids.
 *  - Up to one additional event if unvouch takes place.
 *  - One storage removal. O(1)
 *  - One event for the judgement.
 * 
 *  Total Complexity: O(M + logM + B)
 *  # </weight>
 */
export interface SocietyCall_judge_suspended_member {
    __kind: 'judge_suspended_member'
    who: Uint8Array
    forgive: boolean
}

/**
 *  Allow suspended judgement origin to make judgement on a suspended candidate.
 * 
 *  If the judgement is `Approve`, we add them to society as a member with the appropriate
 *  payment for joining society.
 * 
 *  If the judgement is `Reject`, we either slash the deposit of the bid, giving it back
 *  to the society treasury, or we ban the voucher from vouching again.
 * 
 *  If the judgement is `Rebid`, we put the candidate back in the bid pool and let them go
 *  through the induction process again.
 * 
 *  The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
 * 
 *  Parameters:
 *  - `who` - The suspended candidate to be judged.
 *  - `judgement` - `Approve`, `Reject`, or `Rebid`.
 * 
 *  # <weight>
 *  Key: B (len of bids), M (len of members), X (balance action)
 *  - One storage read to check `who` is a suspended candidate.
 *  - One storage removal of the suspended candidate.
 *  - Approve Logic
 *  	- One storage read to get the available pot to pay users with. O(1)
 *  	- One storage write to update the available pot. O(1)
 *  	- One storage read to get the current block number. O(1)
 *  	- One storage read to get all members. O(M)
 *  	- Up to one unreserve currency action.
 *  	- Up to two new storage writes to payouts.
 *  	- Up to one storage write with O(log M) binary search to add a member to society.
 *  - Reject Logic
 *  	- Up to one repatriate reserved currency action. O(X)
 *  	- Up to one storage write to ban the vouching member from vouching again.
 *  - Rebid Logic
 *  	- Storage mutate with O(log B) binary search to place the user back into bids.
 *  - Up to one additional event if unvouch takes place.
 *  - One storage removal.
 *  - One event for the judgement.
 * 
 *  Total Complexity: O(M + logM + B + X)
 *  # </weight>
 */
export interface SocietyCall_judge_suspended_candidate {
    __kind: 'judge_suspended_candidate'
    who: Uint8Array
    judgement: SocietyJudgement
}

/**
 *  Allows root origin to change the maximum number of members in society.
 *  Max membership count must be greater than 1.
 * 
 *  The dispatch origin for this call must be from _ROOT_.
 * 
 *  Parameters:
 *  - `max` - The maximum number of members for the society.
 * 
 *  # <weight>
 *  - One storage write to update the max. O(1)
 *  - One event.
 * 
 *  Total Complexity: O(1)
 *  # </weight>
 */
export interface SocietyCall_set_max_members {
    __kind: 'set_max_members'
    max: number
}

export type RecoveryCall = RecoveryCall_as_recovered | RecoveryCall_set_recovered | RecoveryCall_create_recovery | RecoveryCall_initiate_recovery | RecoveryCall_vouch_recovery | RecoveryCall_claim_recovery | RecoveryCall_close_recovery | RecoveryCall_remove_recovery | RecoveryCall_cancel_recovered

/**
 *  Send a call through a recovered account.
 * 
 *  The dispatch origin for this call must be _Signed_ and registered to
 *  be able to make calls on behalf of the recovered account.
 * 
 *  Parameters:
 *  - `account`: The recovered account you want to make a call on-behalf-of.
 *  - `call`: The call you want to make with the recovered account.
 * 
 *  # <weight>
 *  - The weight of the `call` + 10,000.
 *  - One storage lookup to check account is recovered by `who`. O(1)
 *  # </weight>
 */
export interface RecoveryCall_as_recovered {
    __kind: 'as_recovered'
    account: Uint8Array
    call: Type_138
}

/**
 *  Allow ROOT to bypass the recovery process and set an a rescuer account
 *  for a lost account directly.
 * 
 *  The dispatch origin for this call must be _ROOT_.
 * 
 *  Parameters:
 *  - `lost`: The "lost account" to be recovered.
 *  - `rescuer`: The "rescuer account" which can call as the lost account.
 * 
 *  # <weight>
 *  - One storage write O(1)
 *  - One event
 *  # </weight>
 */
export interface RecoveryCall_set_recovered {
    __kind: 'set_recovered'
    lost: Uint8Array
    rescuer: Uint8Array
}

/**
 *  Create a recovery configuration for your account. This makes your account recoverable.
 * 
 *  Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance
 *  will be reserved for storing the recovery configuration. This deposit is returned
 *  in full when the user calls `remove_recovery`.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `friends`: A list of friends you trust to vouch for recovery attempts.
 *    Should be ordered and contain no duplicate values.
 *  - `threshold`: The number of friends that must vouch for a recovery attempt
 *    before the account can be recovered. Should be less than or equal to
 *    the length of the list of friends.
 *  - `delay_period`: The number of blocks after a recovery attempt is initialized
 *    that needs to pass before the account can be recovered.
 * 
 *  # <weight>
 *  - Key: F (len of friends)
 *  - One storage read to check that account is not already recoverable. O(1).
 *  - A check that the friends list is sorted and unique. O(F)
 *  - One currency reserve operation. O(X)
 *  - One storage write. O(1). Codec O(F).
 *  - One event.
 * 
 *  Total Complexity: O(F + X)
 *  # </weight>
 */
export interface RecoveryCall_create_recovery {
    __kind: 'create_recovery'
    friends: Uint8Array[]
    threshold: number
    delayPeriod: number
}

/**
 *  Initiate the process for recovering a recoverable account.
 * 
 *  Payment: `RecoveryDeposit` balance will be reserved for initiating the
 *  recovery process. This deposit will always be repatriated to the account
 *  trying to be recovered. See `close_recovery`.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `account`: The lost account that you want to recover. This account
 *    needs to be recoverable (i.e. have a recovery configuration).
 * 
 *  # <weight>
 *  - One storage read to check that account is recoverable. O(F)
 *  - One storage read to check that this recovery process hasn't already started. O(1)
 *  - One currency reserve operation. O(X)
 *  - One storage read to get the current block number. O(1)
 *  - One storage write. O(1).
 *  - One event.
 * 
 *  Total Complexity: O(F + X)
 *  # </weight>
 */
export interface RecoveryCall_initiate_recovery {
    __kind: 'initiate_recovery'
    account: Uint8Array
}

/**
 *  Allow a "friend" of a recoverable account to vouch for an active recovery
 *  process for that account.
 * 
 *  The dispatch origin for this call must be _Signed_ and must be a "friend"
 *  for the recoverable account.
 * 
 *  Parameters:
 *  - `lost`: The lost account that you want to recover.
 *  - `rescuer`: The account trying to rescue the lost account that you
 *    want to vouch for.
 * 
 *  The combination of these two parameters must point to an active recovery
 *  process.
 * 
 *  # <weight>
 *  Key: F (len of friends in config), V (len of vouching friends)
 *  - One storage read to get the recovery configuration. O(1), Codec O(F)
 *  - One storage read to get the active recovery process. O(1), Codec O(V)
 *  - One binary search to confirm caller is a friend. O(logF)
 *  - One binary search to confirm caller has not already vouched. O(logV)
 *  - One storage write. O(1), Codec O(V).
 *  - One event.
 * 
 *  Total Complexity: O(F + logF + V + logV)
 *  # </weight>
 */
export interface RecoveryCall_vouch_recovery {
    __kind: 'vouch_recovery'
    lost: Uint8Array
    rescuer: Uint8Array
}

/**
 *  Allow a successful rescuer to claim their recovered account.
 * 
 *  The dispatch origin for this call must be _Signed_ and must be a "rescuer"
 *  who has successfully completed the account recovery process: collected
 *  `threshold` or more vouches, waited `delay_period` blocks since initiation.
 * 
 *  Parameters:
 *  - `account`: The lost account that you want to claim has been successfully
 *    recovered by you.
 * 
 *  # <weight>
 *  Key: F (len of friends in config), V (len of vouching friends)
 *  - One storage read to get the recovery configuration. O(1), Codec O(F)
 *  - One storage read to get the active recovery process. O(1), Codec O(V)
 *  - One storage read to get the current block number. O(1)
 *  - One storage write. O(1), Codec O(V).
 *  - One event.
 * 
 *  Total Complexity: O(F + V)
 *  # </weight>
 */
export interface RecoveryCall_claim_recovery {
    __kind: 'claim_recovery'
    account: Uint8Array
}

/**
 *  As the controller of a recoverable account, close an active recovery
 *  process for your account.
 * 
 *  Payment: By calling this function, the recoverable account will receive
 *  the recovery deposit `RecoveryDeposit` placed by the rescuer.
 * 
 *  The dispatch origin for this call must be _Signed_ and must be a
 *  recoverable account with an active recovery process for it.
 * 
 *  Parameters:
 *  - `rescuer`: The account trying to rescue this recoverable account.
 * 
 *  # <weight>
 *  Key: V (len of vouching friends)
 *  - One storage read/remove to get the active recovery process. O(1), Codec O(V)
 *  - One balance call to repatriate reserved. O(X)
 *  - One event.
 * 
 *  Total Complexity: O(V + X)
 *  # </weight>
 */
export interface RecoveryCall_close_recovery {
    __kind: 'close_recovery'
    rescuer: Uint8Array
}

/**
 *  Remove the recovery process for your account. Recovered accounts are still accessible.
 * 
 *  NOTE: The user must make sure to call `close_recovery` on all active
 *  recovery attempts before calling this function else it will fail.
 * 
 *  Payment: By calling this function the recoverable account will unreserve
 *  their recovery configuration deposit.
 *  (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends)
 * 
 *  The dispatch origin for this call must be _Signed_ and must be a
 *  recoverable account (i.e. has a recovery configuration).
 * 
 *  # <weight>
 *  Key: F (len of friends)
 *  - One storage read to get the prefix iterator for active recoveries. O(1)
 *  - One storage read/remove to get the recovery configuration. O(1), Codec O(F)
 *  - One balance call to unreserved. O(X)
 *  - One event.
 * 
 *  Total Complexity: O(F + X)
 *  # </weight>
 */
export interface RecoveryCall_remove_recovery {
    __kind: 'remove_recovery'
}

/**
 *  Cancel the ability to use `as_recovered` for `account`.
 * 
 *  The dispatch origin for this call must be _Signed_ and registered to
 *  be able to make calls on behalf of the recovered account.
 * 
 *  Parameters:
 *  - `account`: The recovered account you are able to call on-behalf-of.
 * 
 *  # <weight>
 *  - One storage mutation to check account is recovered by `who`. O(1)
 *  # </weight>
 */
export interface RecoveryCall_cancel_recovered {
    __kind: 'cancel_recovered'
    account: Uint8Array
}

export type VestingCall = VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer | VestingCall_force_vested_transfer

/**
 *  Unlock any vested funds of the sender account.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have funds still
 *  locked under this pallet.
 * 
 *  Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - DbWeight: 2 Reads, 2 Writes
 *      - Reads: Vesting Storage, Balances Locks, [Sender Account]
 *      - Writes: Vesting Storage, Balances Locks, [Sender Account]
 *  # </weight>
 */
export interface VestingCall_vest {
    __kind: 'vest'
}

/**
 *  Unlock any vested funds of a `target` account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `target`: The account whose vested funds should be unlocked. Must have funds still
 *  locked under this pallet.
 * 
 *  Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - DbWeight: 3 Reads, 3 Writes
 *      - Reads: Vesting Storage, Balances Locks, Target Account
 *      - Writes: Vesting Storage, Balances Locks, Target Account
 *  # </weight>
 */
export interface VestingCall_vest_other {
    __kind: 'vest_other'
    target: LookupSource
}

/**
 *  Create a vested transfer.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `target`: The account that should be transferred the vested funds.
 *  - `amount`: The amount of funds to transfer and will be vested.
 *  - `schedule`: The vesting schedule attached to the transfer.
 * 
 *  Emits `VestingCreated`.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - DbWeight: 3 Reads, 3 Writes
 *      - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 *      - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 *  # </weight>
 */
export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    target: LookupSource
    schedule: VestingInfo
}

/**
 *  Force a vested transfer.
 * 
 *  The dispatch origin for this call must be _Root_.
 * 
 *  - `source`: The account whose funds should be transferred.
 *  - `target`: The account that should be transferred the vested funds.
 *  - `amount`: The amount of funds to transfer and will be vested.
 *  - `schedule`: The vesting schedule attached to the transfer.
 * 
 *  Emits `VestingCreated`.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - DbWeight: 4 Reads, 4 Writes
 *      - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
 *      - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
 *  # </weight>
 */
export interface VestingCall_force_vested_transfer {
    __kind: 'force_vested_transfer'
    source: LookupSource
    target: LookupSource
    schedule: VestingInfo
}

export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 *  Anonymously schedule a task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 22.29 + .126 * S µs
 *  - DB Weight:
 *      - Read: Agenda
 *      - Write: Agenda
 *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Type_138
}

/**
 *  Cancel an anonymously scheduled task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 22.15 + 2.869 * S µs
 *  - DB Weight:
 *      - Read: Agenda
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 *  Schedule a named task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 29.6 + .159 * S µs
 *  - DB Weight:
 *      - Read: Agenda, Lookup
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Uint8Array
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Type_138
}

/**
 *  Cancel a named scheduled task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 24.91 + 2.907 * S µs
 *  - DB Weight:
 *      - Read: Agenda, Lookup
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Uint8Array
}

/**
 *  Anonymously schedule a task after a delay.
 * 
 *  # <weight>
 *  Same as [`schedule`].
 *  # </weight>
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Type_138
}

/**
 *  Schedule a named task after a delay.
 * 
 *  # <weight>
 *  Same as [`schedule_named`](Self::schedule_named).
 *  # </weight>
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Uint8Array
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Type_138
}

export type ProxyCall = ProxyCall_proxy | ProxyCall_add_proxy | ProxyCall_remove_proxy | ProxyCall_remove_proxies | ProxyCall_anonymous | ProxyCall_kill_anonymous | ProxyCall_announce | ProxyCall_remove_announcement | ProxyCall_reject_announcement | ProxyCall_proxy_announced

/**
 *  Dispatch the given `call` from an account that the sender is authorised for through
 *  `add_proxy`.
 * 
 *  Removes any corresponding announcement(s).
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 *  - `call`: The call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: Uint8Array
    forceProxyType: (ProxyType | undefined)
    call: Type_138
}

/**
 *  Register a proxy account for the sender that is able to make calls on its behalf.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `proxy`: The account that the `caller` would like to make a proxy.
 *  - `proxy_type`: The permissions allowed for this proxy account.
 *  - `delay`: The announcement period required of the initial proxy. Will generally be
 *  zero.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: Uint8Array
    proxyType: ProxyType
    delay: number
}

/**
 *  Unregister a proxy account for the sender.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `proxy`: The account that the `caller` would like to remove as a proxy.
 *  - `proxy_type`: The permissions currently enabled for the removed proxy account.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_remove_proxy {
    __kind: 'remove_proxy'
    delegate: Uint8Array
    proxyType: ProxyType
    delay: number
}

/**
 *  Unregister all proxy accounts for the sender.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  WARNING: This may be called on accounts created by `anonymous`, however if done, then
 *  the unreserved fees will be inaccessible. **All access to this account will be lost.**
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_remove_proxies {
    __kind: 'remove_proxies'
}

/**
 *  Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 *  initialize it with a proxy of `proxy_type` for `origin` sender.
 * 
 *  Requires a `Signed` origin.
 * 
 *  - `proxy_type`: The type of the proxy that the sender will be registered as over the
 *  new account. This will almost always be the most permissive `ProxyType` possible to
 *  allow for maximum flexibility.
 *  - `index`: A disambiguation index, in case this is called multiple times in the same
 *  transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
 *  want to use `0`.
 *  - `delay`: The announcement period required of the initial proxy. Will generally be
 *  zero.
 * 
 *  Fails with `Duplicate` if this has already been called in this transaction, from the
 *  same sender, with the same parameters.
 * 
 *  Fails if there are insufficient funds to pay for deposit.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 *  TODO: Might be over counting 1 read
 */
export interface ProxyCall_anonymous {
    __kind: 'anonymous'
    proxyType: ProxyType
    delay: number
    index: number
}

/**
 *  Removes a previously spawned anonymous proxy.
 * 
 *  WARNING: **All access to this account will be lost.** Any funds held in it will be
 *  inaccessible.
 * 
 *  Requires a `Signed` origin, and the sender account must have been created by a call to
 *  `anonymous` with corresponding parameters.
 * 
 *  - `spawner`: The account that originally called `anonymous` to create this account.
 *  - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
 *  - `proxy_type`: The proxy type originally passed to `anonymous`.
 *  - `height`: The height of the chain when the call to `anonymous` was processed.
 *  - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
 * 
 *  Fails with `NoPermission` in case the caller is not a previously created anonymous
 *  account whose `anonymous` call has corresponding parameters.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_kill_anonymous {
    __kind: 'kill_anonymous'
    spawner: Uint8Array
    proxyType: ProxyType
    index: number
    height: number
    extIndex: number
}

/**
 *  Publish the hash of a proxy-call that will be made in the future.
 * 
 *  This must be called some number of blocks before the corresponding `proxy` is attempted
 *  if the delay associated with the proxy relationship is greater than zero.
 * 
 *  No more than `MaxPending` announcements may be made at any one time.
 * 
 *  This will take a deposit of `AnnouncementDepositFactor` as well as
 *  `AnnouncementDepositBase` if there are no other pending announcements.
 * 
 *  The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_announce {
    __kind: 'announce'
    real: Uint8Array
    callHash: Uint8Array
}

/**
 *  Remove a given announcement.
 * 
 *  May be called by a proxy account to remove a call they previously announced and return
 *  the deposit.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: Uint8Array
    callHash: Uint8Array
}

/**
 *  Remove the given announcement of a delegate.
 * 
 *  May be called by a target (proxied) account to remove a call that one of their delegates
 *  (`delegate`) has announced they want to execute. The deposit is returned.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `delegate`: The account that previously announced the call.
 *  - `call_hash`: The hash of the call to be made.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: Uint8Array
    callHash: Uint8Array
}

/**
 *  Dispatch the given `call` from an account that the sender is authorized for through
 *  `add_proxy`.
 * 
 *  Removes any corresponding announcement(s).
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 *  - `call`: The call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: Uint8Array
    real: Uint8Array
    forceProxyType: (ProxyType | undefined)
    call: Type_138
}

export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

/**
 *  Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `other_signatories`: The accounts (other than the sender) who are part of the
 *  multi-signature, but do not participate in the approval process.
 *  - `call`: The call to be executed.
 * 
 *  Result is equivalent to the dispatched result.
 * 
 *  # <weight>
 *  O(Z + C) where Z is the length of the call and C its execution weight.
 *  -------------------------------
 *  - DB Weight: None
 *  - Plus Call Weight
 *  # </weight>
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: Uint8Array[]
    call: Type_138
}

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  If there are enough, then dispatch the call.
 * 
 *  Payment: `DepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *  is cancelled.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *  not the first approval, then it must be `Some`, with the timepoint (block number and
 *  transaction index) of the first approval transaction.
 *  - `call`: The call to be executed.
 * 
 *  NOTE: Unless this is the final approval, you will generally want to use
 *  `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 *  on success, result is `Ok` and the result from the interior call, if it was executed,
 *  may be found in the deposited `MultisigExecuted` event.
 * 
 *  # <weight>
 *  - `O(S + Z + Call)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - Up to one binary search and insert (`O(logS + S)`).
 *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *  - One event.
 *  - The weight of the `call`.
 *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *    deposit taken for its lifetime of
 *    `DepositBase + threshold * DepositFactor`.
 *  -------------------------------
 *  - DB Weight:
 *      - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *      - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *  - Plus Call Weight
 *  # </weight>
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    call: Uint8Array
    storeCall: boolean
    maxWeight: bigint
}

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  Payment: `DepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *  is cancelled.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *  not the first approval, then it must be `Some`, with the timepoint (block number and
 *  transaction index) of the first approval transaction.
 *  - `call_hash`: The hash of the call to be executed.
 * 
 *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 *  # <weight>
 *  - `O(S)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - Up to one binary search and insert (`O(logS + S)`).
 *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *  - One event.
 *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *    deposit taken for its lifetime of
 *    `DepositBase + threshold * DepositFactor`.
 *  ----------------------------------
 *  - DB Weight:
 *      - Read: Multisig Storage, [Caller Account]
 *      - Write: Multisig Storage, [Caller Account]
 *  # </weight>
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    callHash: Uint8Array
    maxWeight: bigint
}

/**
 *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 *  for this operation will be unreserved on success.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
 *  transaction for this dispatch.
 *  - `call_hash`: The hash of the call to be executed.
 * 
 *  # <weight>
 *  - `O(S)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - One event.
 *  - I/O: 1 read `O(S)`, one remove.
 *  - Storage: removes one item.
 *  ----------------------------------
 *  - DB Weight:
 *      - Read: Multisig Storage, [Caller Account], Refund Account, Calls
 *      - Write: Multisig Storage, [Caller Account], Refund Account, Calls
 *  # </weight>
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    timepoint: Timepoint
    callHash: Uint8Array
}

export type BountiesCall = BountiesCall_propose_bounty | BountiesCall_approve_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator | BountiesCall_accept_curator | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry

/**
 *  Propose a new bounty.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 *  `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
 *  or slashed when rejected.
 * 
 *  - `curator`: The curator account whom will manage this bounty.
 *  - `fee`: The curator fee.
 *  - `value`: The total payment amount of this bounty, curator fee included.
 *  - `description`: The description of this bounty.
 */
export interface BountiesCall_propose_bounty {
    __kind: 'propose_bounty'
    value: bigint
    description: Uint8Array
}

/**
 *  Approve a bounty proposal. At a later time, the bounty will be funded and become active
 *  and the original deposit will be returned.
 * 
 *  May only be called from `T::ApproveOrigin`.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_approve_bounty {
    __kind: 'approve_bounty'
    bountyId: number
}

/**
 *  Assign a curator to a funded bounty.
 * 
 *  May only be called from `T::ApproveOrigin`.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_propose_curator {
    __kind: 'propose_curator'
    bountyId: number
    curator: LookupSource
    fee: bigint
}

/**
 *  Unassign curator from a bounty.
 * 
 *  This function can only be called by the `RejectOrigin` a signed origin.
 * 
 *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
 *  or inactive. As a result, we will slash the curator when possible.
 * 
 *  If the origin is the curator, we take this as a sign they are unable to do their job and
 *  they willingly give up. We could slash them, but for now we allow them to recover their
 *  deposit and exit without issue. (We may want to change this if it is abused.)
 * 
 *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
 *  anyone in the community to call out that a curator is not doing their due diligence, and
 *  we should pick a new curator. In this case the curator should also be slashed.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    bountyId: number
}

/**
 *  Accept the curator role for a bounty.
 *  A deposit will be reserved from curator and refund upon successful payout.
 * 
 *  May only be called from the curator.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_accept_curator {
    __kind: 'accept_curator'
    bountyId: number
}

/**
 *  Award bounty to a beneficiary account. The beneficiary will be able to claim the funds after a delay.
 * 
 *  The dispatch origin for this call must be the curator of this bounty.
 * 
 *  - `bounty_id`: Bounty ID to award.
 *  - `beneficiary`: The beneficiary account whom will receive the payout.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_award_bounty {
    __kind: 'award_bounty'
    bountyId: number
    beneficiary: LookupSource
}

/**
 *  Claim the payout from an awarded bounty after payout delay.
 * 
 *  The dispatch origin for this call must be the beneficiary of this bounty.
 * 
 *  - `bounty_id`: Bounty ID to claim.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_claim_bounty {
    __kind: 'claim_bounty'
    bountyId: number
}

/**
 *  Cancel a proposed or active bounty. All the funds will be sent to treasury and
 *  the curator deposit will be unreserved if possible.
 * 
 *  Only `T::RejectOrigin` is able to cancel a bounty.
 * 
 *  - `bounty_id`: Bounty ID to cancel.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_close_bounty {
    __kind: 'close_bounty'
    bountyId: number
}

/**
 *  Extend the expiry time of an active bounty.
 * 
 *  The dispatch origin for this call must be the curator of this bounty.
 * 
 *  - `bounty_id`: Bounty ID to extend.
 *  - `remark`: additional information.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_extend_bounty_expiry {
    __kind: 'extend_bounty_expiry'
    bountyId: number
    remark: Uint8Array
}

export type TipsCall = TipsCall_report_awesome | TipsCall_retract_tip | TipsCall_tip_new | TipsCall_tip | TipsCall_close_tip | TipsCall_slash_tip

/**
 *  Report something `reason` that deserves a tip and claim any eventual the finder's fee.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 *  `DataDepositPerByte` for each byte in `reason`.
 * 
 *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *    a UTF-8-encoded URL.
 *  - `who`: The account which should be credited for the tip.
 * 
 *  Emits `NewTip` if successful.
 * 
 *  # <weight>
 *  - Complexity: `O(R)` where `R` length of `reason`.
 *    - encoding and hashing of 'reason'
 *  - DbReads: `Reasons`, `Tips`
 *  - DbWrites: `Reasons`, `Tips`
 *  # </weight>
 */
export interface TipsCall_report_awesome {
    __kind: 'report_awesome'
    reason: Uint8Array
    who: Uint8Array
}

/**
 *  Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
 * 
 *  If successful, the original deposit will be unreserved.
 * 
 *  The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
 *  must have been reported by the signing account through `report_awesome` (and not
 *  through `tip_new`).
 * 
 *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 *  Emits `TipRetracted` if successful.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *    - Depends on the length of `T::Hash` which is fixed.
 *  - DbReads: `Tips`, `origin account`
 *  - DbWrites: `Reasons`, `Tips`, `origin account`
 *  # </weight>
 */
export interface TipsCall_retract_tip {
    __kind: 'retract_tip'
    hash: Uint8Array
}

/**
 *  Give a tip for something new; no finder's fee will be taken.
 * 
 *  The dispatch origin for this call must be _Signed_ and the signing account must be a
 *  member of the `Tippers` set.
 * 
 *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *    a UTF-8-encoded URL.
 *  - `who`: The account which should be credited for the tip.
 *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *    value of active tippers will be given to the `who`.
 * 
 *  Emits `NewTip` if successful.
 * 
 *  # <weight>
 *  - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
 *    - `O(T)`: decoding `Tipper` vec of length `T`
 *      `T` is charged as upper bound given by `ContainsLengthBound`.
 *      The actual cost depends on the implementation of `T::Tippers`.
 *    - `O(R)`: hashing and encoding of reason of length `R`
 *  - DbReads: `Tippers`, `Reasons`
 *  - DbWrites: `Reasons`, `Tips`
 *  # </weight>
 */
export interface TipsCall_tip_new {
    __kind: 'tip_new'
    reason: Uint8Array
    who: Uint8Array
    tipValue: bigint
}

/**
 *  Declare a tip value for an already-open tip.
 * 
 *  The dispatch origin for this call must be _Signed_ and the signing account must be a
 *  member of the `Tippers` set.
 * 
 *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
 *    account ID.
 *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *    value of active tippers will be given to the `who`.
 * 
 *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
 *  has started.
 * 
 *  # <weight>
 *  - Complexity: `O(T)` where `T` is the number of tippers.
 *    decoding `Tipper` vec of length `T`, insert tip and check closing,
 *    `T` is charged as upper bound given by `ContainsLengthBound`.
 *    The actual cost depends on the implementation of `T::Tippers`.
 * 
 *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
 *    is weighted as if almost full i.e of length `T-1`.
 *  - DbReads: `Tippers`, `Tips`
 *  - DbWrites: `Tips`
 *  # </weight>
 */
export interface TipsCall_tip {
    __kind: 'tip'
    hash: Uint8Array
    tipValue: bigint
}

/**
 *  Close and payout a tip.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  The tip identified by `hash` must have finished its countdown period.
 * 
 *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 *  # <weight>
 *  - Complexity: `O(T)` where `T` is the number of tippers.
 *    decoding `Tipper` vec of length `T`.
 *    `T` is charged as upper bound given by `ContainsLengthBound`.
 *    The actual cost depends on the implementation of `T::Tippers`.
 *  - DbReads: `Tips`, `Tippers`, `tip finder`
 *  - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
 *  # </weight>
 */
export interface TipsCall_close_tip {
    __kind: 'close_tip'
    hash: Uint8Array
}

/**
 *  Remove and slash an already-open tip.
 * 
 *  May only be called from `T::RejectOrigin`.
 * 
 *  As a result, the finder is slashed and the deposits are lost.
 * 
 *  Emits `TipSlashed` if successful.
 * 
 *  # <weight>
 *    `T` is charged as upper bound given by `ContainsLengthBound`.
 *    The actual cost depends on the implementation of `T::Tippers`.
 *  # </weight>
 */
export interface TipsCall_slash_tip {
    __kind: 'slash_tip'
    hash: Uint8Array
}

export type ElectionProviderMultiPhaseCall = ElectionProviderMultiPhaseCall_submit_unsigned | ElectionProviderMultiPhaseCall_set_minimum_untrusted_score | ElectionProviderMultiPhaseCall_set_emergency_election_result | ElectionProviderMultiPhaseCall_submit

/**
 *  Submit a solution for the unsigned phase.
 * 
 *  The dispatch origin fo this call must be __none__.
 * 
 *  This submission is checked on the fly. Moreover, this unsigned solution is only
 *  validated when submitted to the pool from the **local** node. Effectively, this means
 *  that only active validators can submit this transaction when authoring a block (similar
 *  to an inherent).
 * 
 *  To prevent any incorrect solution (and thus wasted time/weight), this transaction will
 *  panic if the solution submitted by the validator is invalid in any way, effectively
 *  putting their authoring reward at risk.
 * 
 *  No deposit or reward is associated with this submission.
 */
export interface ElectionProviderMultiPhaseCall_submit_unsigned {
    __kind: 'submit_unsigned'
    rawSolution: RawSolution
    witness: SolutionOrSnapshotSize
}

/**
 *  Set a new value for `MinimumUntrustedScore`.
 * 
 *  Dispatch origin must be aligned with `T::ForceOrigin`.
 * 
 *  This check can be turned off by setting the value to `None`.
 */
export interface ElectionProviderMultiPhaseCall_set_minimum_untrusted_score {
    __kind: 'set_minimum_untrusted_score'
    maybeNextScore: (bigint[] | undefined)
}

/**
 *  Set a solution in the queue, to be handed out to the client of this pallet in the next
 *  call to `ElectionProvider::elect`.
 * 
 *  This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
 * 
 *  The solution is not checked for any feasibility and is assumed to be trustworthy, as any
 *  feasibility check itself can in principle cause the election process to fail (due to
 *  memory/weight constrains).
 */
export interface ElectionProviderMultiPhaseCall_set_emergency_election_result {
    __kind: 'set_emergency_election_result'
    supports: [Uint8Array, SolutionSupport][]
}

/**
 *  Submit a solution for the signed phase.
 * 
 *  The dispatch origin fo this call must be __signed__.
 * 
 *  The solution is potentially queued, based on the claimed score and processed at the end
 *  of the signed phase.
 * 
 *  A deposit is reserved and recorded for the solution. Based on the outcome, the solution
 *  might be rewarded, slashed, or get all or a part of the deposit back.
 * 
 *  # <weight>
 *  Queue size must be provided as witness data.
 *  # </weight>
 */
export interface ElectionProviderMultiPhaseCall_submit {
    __kind: 'submit'
    rawSolution: RawSolution
    numSignedSubmissions: number
}

export type GiltCall = GiltCall_place_bid | GiltCall_retract_bid | GiltCall_set_target | GiltCall_thaw

/**
 *  Place a bid for a gilt to be issued.
 * 
 *  Origin must be Signed, and account must have at least `amount` in free balance.
 * 
 *  - `amount`: The amount of the bid; these funds will be reserved. If the bid is
 *  successfully elevated into an issued gilt, then these funds will continue to be
 *  reserved until the gilt expires. Must be at least `MinFreeze`.
 *  - `duration`: The number of periods for which the funds will be locked if the gilt is
 *  issued. It will expire only after this period has elapsed after the point of issuance.
 *  Must be greater than 1 and no more than `QueueCount`.
 * 
 *  Complexities:
 *  - `Queues[duration].len()` (just take max).
 */
export interface GiltCall_place_bid {
    __kind: 'place_bid'
    amount: bigint
    duration: number
}

/**
 *  Retract a previously placed bid.
 * 
 *  Origin must be Signed, and the account should have previously issued a still-active bid
 *  of `amount` for `duration`.
 * 
 *  - `amount`: The amount of the previous bid.
 *  - `duration`: The duration of the previous bid.
 */
export interface GiltCall_retract_bid {
    __kind: 'retract_bid'
    amount: bigint
    duration: number
}

/**
 *  Set target proportion of gilt-funds.
 * 
 *  Origin must be `AdminOrigin`.
 * 
 *  - `target`: The target proportion of effective issued funds that should be under gilts
 *  at any one time.
 */
export interface GiltCall_set_target {
    __kind: 'set_target'
    target: bigint
}

/**
 *  Remove an active but expired gilt. Reserved funds under gilt are freed and balance is
 *  adjusted to ensure that the funds grow or shrink to maintain the equivalent proportion
 *  of effective total issued funds.
 * 
 *  Origin must be Signed and the account must be the owner of the gilt of the given index.
 * 
 *  - `index`: The index of the gilt to be thawed.
 */
export interface GiltCall_thaw {
    __kind: 'thaw'
    index: number
}

export type ConfigurationCall = ConfigurationCall_set_validation_upgrade_frequency | ConfigurationCall_set_validation_upgrade_delay | ConfigurationCall_set_code_retention_period | ConfigurationCall_set_max_code_size | ConfigurationCall_set_max_pov_size | ConfigurationCall_set_max_head_data_size | ConfigurationCall_set_parathread_cores | ConfigurationCall_set_parathread_retries | ConfigurationCall_set_group_rotation_frequency | ConfigurationCall_set_chain_availability_period | ConfigurationCall_set_thread_availability_period | ConfigurationCall_set_scheduling_lookahead | ConfigurationCall_set_max_validators_per_core | ConfigurationCall_set_max_validators | ConfigurationCall_set_dispute_period | ConfigurationCall_set_dispute_post_conclusion_acceptance_period | ConfigurationCall_set_dispute_max_spam_slots | ConfigurationCall_set_dispute_conclusion_by_time_out_period | ConfigurationCall_set_no_show_slots | ConfigurationCall_set_n_delay_tranches | ConfigurationCall_set_zeroth_delay_tranche_width | ConfigurationCall_set_needed_approvals | ConfigurationCall_set_relay_vrf_modulo_samples | ConfigurationCall_set_max_upward_queue_count | ConfigurationCall_set_max_upward_queue_size | ConfigurationCall_set_max_downward_message_size | ConfigurationCall_set_ump_service_total_weight | ConfigurationCall_set_max_upward_message_size | ConfigurationCall_set_max_upward_message_num_per_candidate | ConfigurationCall_set_hrmp_open_request_ttl | ConfigurationCall_set_hrmp_sender_deposit | ConfigurationCall_set_hrmp_recipient_deposit | ConfigurationCall_set_hrmp_channel_max_capacity | ConfigurationCall_set_hrmp_channel_max_total_size | ConfigurationCall_set_hrmp_max_parachain_inbound_channels | ConfigurationCall_set_hrmp_max_parathread_inbound_channels | ConfigurationCall_set_hrmp_channel_max_message_size | ConfigurationCall_set_hrmp_max_parachain_outbound_channels | ConfigurationCall_set_hrmp_max_parathread_outbound_channels | ConfigurationCall_set_hrmp_max_message_num_per_candidate | ConfigurationCall_set_ump_max_individual_weight

/**
 *  Set the validation upgrade frequency.
 */
export interface ConfigurationCall_set_validation_upgrade_frequency {
    __kind: 'set_validation_upgrade_frequency'
    new: number
}

/**
 *  Set the validation upgrade delay.
 */
export interface ConfigurationCall_set_validation_upgrade_delay {
    __kind: 'set_validation_upgrade_delay'
    new: number
}

/**
 *  Set the acceptance period for an included candidate.
 */
export interface ConfigurationCall_set_code_retention_period {
    __kind: 'set_code_retention_period'
    new: number
}

/**
 *  Set the max validation code size for incoming upgrades.
 */
export interface ConfigurationCall_set_max_code_size {
    __kind: 'set_max_code_size'
    new: number
}

/**
 *  Set the max POV block size for incoming upgrades.
 */
export interface ConfigurationCall_set_max_pov_size {
    __kind: 'set_max_pov_size'
    new: number
}

/**
 *  Set the max head data size for paras.
 */
export interface ConfigurationCall_set_max_head_data_size {
    __kind: 'set_max_head_data_size'
    new: number
}

/**
 *  Set the number of parathread execution cores.
 */
export interface ConfigurationCall_set_parathread_cores {
    __kind: 'set_parathread_cores'
    new: number
}

/**
 *  Set the number of retries for a particular parathread.
 */
export interface ConfigurationCall_set_parathread_retries {
    __kind: 'set_parathread_retries'
    new: number
}

/**
 *  Set the parachain validator-group rotation frequency
 */
export interface ConfigurationCall_set_group_rotation_frequency {
    __kind: 'set_group_rotation_frequency'
    new: number
}

/**
 *  Set the availability period for parachains.
 */
export interface ConfigurationCall_set_chain_availability_period {
    __kind: 'set_chain_availability_period'
    new: number
}

/**
 *  Set the availability period for parathreads.
 */
export interface ConfigurationCall_set_thread_availability_period {
    __kind: 'set_thread_availability_period'
    new: number
}

/**
 *  Set the scheduling lookahead, in expected number of blocks at peak throughput.
 */
export interface ConfigurationCall_set_scheduling_lookahead {
    __kind: 'set_scheduling_lookahead'
    new: number
}

/**
 *  Set the maximum number of validators to assign to any core.
 */
export interface ConfigurationCall_set_max_validators_per_core {
    __kind: 'set_max_validators_per_core'
    new: (number | undefined)
}

/**
 *  Set the maximum number of validators to use in parachain consensus.
 */
export interface ConfigurationCall_set_max_validators {
    __kind: 'set_max_validators'
    new: (number | undefined)
}

/**
 *  Set the dispute period, in number of sessions to keep for disputes.
 */
export interface ConfigurationCall_set_dispute_period {
    __kind: 'set_dispute_period'
    new: number
}

/**
 *  Set the dispute post conclusion acceptance period.
 */
export interface ConfigurationCall_set_dispute_post_conclusion_acceptance_period {
    __kind: 'set_dispute_post_conclusion_acceptance_period'
    new: number
}

/**
 *  Set the maximum number of dispute spam slots.
 */
export interface ConfigurationCall_set_dispute_max_spam_slots {
    __kind: 'set_dispute_max_spam_slots'
    new: number
}

/**
 *  Set the dispute conclusion by time out period.
 */
export interface ConfigurationCall_set_dispute_conclusion_by_time_out_period {
    __kind: 'set_dispute_conclusion_by_time_out_period'
    new: number
}

/**
 *  Set the no show slots, in number of number of consensus slots.
 *  Must be at least 1.
 */
export interface ConfigurationCall_set_no_show_slots {
    __kind: 'set_no_show_slots'
    new: number
}

/**
 *  Set the total number of delay tranches.
 */
export interface ConfigurationCall_set_n_delay_tranches {
    __kind: 'set_n_delay_tranches'
    new: number
}

/**
 *  Set the zeroth delay tranche width.
 */
export interface ConfigurationCall_set_zeroth_delay_tranche_width {
    __kind: 'set_zeroth_delay_tranche_width'
    new: number
}

/**
 *  Set the number of validators needed to approve a block.
 */
export interface ConfigurationCall_set_needed_approvals {
    __kind: 'set_needed_approvals'
    new: number
}

/**
 *  Set the number of samples to do of the `RelayVRFModulo` approval assignment criterion.
 */
export interface ConfigurationCall_set_relay_vrf_modulo_samples {
    __kind: 'set_relay_vrf_modulo_samples'
    new: number
}

/**
 *  Sets the maximum items that can present in a upward dispatch queue at once.
 */
export interface ConfigurationCall_set_max_upward_queue_count {
    __kind: 'set_max_upward_queue_count'
    new: number
}

/**
 *  Sets the maximum total size of items that can present in a upward dispatch queue at once.
 */
export interface ConfigurationCall_set_max_upward_queue_size {
    __kind: 'set_max_upward_queue_size'
    new: number
}

/**
 *  Set the critical downward message size.
 */
export interface ConfigurationCall_set_max_downward_message_size {
    __kind: 'set_max_downward_message_size'
    new: number
}

/**
 *  Sets the soft limit for the phase of dispatching dispatchable upward messages.
 */
export interface ConfigurationCall_set_ump_service_total_weight {
    __kind: 'set_ump_service_total_weight'
    new: bigint
}

/**
 *  Sets the maximum size of an upward message that can be sent by a candidate.
 */
export interface ConfigurationCall_set_max_upward_message_size {
    __kind: 'set_max_upward_message_size'
    new: number
}

/**
 *  Sets the maximum number of messages that a candidate can contain.
 */
export interface ConfigurationCall_set_max_upward_message_num_per_candidate {
    __kind: 'set_max_upward_message_num_per_candidate'
    new: number
}

/**
 *  Sets the number of sessions after which an HRMP open channel request expires.
 */
export interface ConfigurationCall_set_hrmp_open_request_ttl {
    __kind: 'set_hrmp_open_request_ttl'
    new: number
}

/**
 *  Sets the amount of funds that the sender should provide for opening an HRMP channel.
 */
export interface ConfigurationCall_set_hrmp_sender_deposit {
    __kind: 'set_hrmp_sender_deposit'
    new: bigint
}

/**
 *  Sets the amount of funds that the recipient should provide for accepting opening an HRMP
 *  channel.
 */
export interface ConfigurationCall_set_hrmp_recipient_deposit {
    __kind: 'set_hrmp_recipient_deposit'
    new: bigint
}

/**
 *  Sets the maximum number of messages allowed in an HRMP channel at once.
 */
export interface ConfigurationCall_set_hrmp_channel_max_capacity {
    __kind: 'set_hrmp_channel_max_capacity'
    new: number
}

/**
 *  Sets the maximum total size of messages in bytes allowed in an HRMP channel at once.
 */
export interface ConfigurationCall_set_hrmp_channel_max_total_size {
    __kind: 'set_hrmp_channel_max_total_size'
    new: number
}

/**
 *  Sets the maximum number of inbound HRMP channels a parachain is allowed to accept.
 */
export interface ConfigurationCall_set_hrmp_max_parachain_inbound_channels {
    __kind: 'set_hrmp_max_parachain_inbound_channels'
    new: number
}

/**
 *  Sets the maximum number of inbound HRMP channels a parathread is allowed to accept.
 */
export interface ConfigurationCall_set_hrmp_max_parathread_inbound_channels {
    __kind: 'set_hrmp_max_parathread_inbound_channels'
    new: number
}

/**
 *  Sets the maximum size of a message that could ever be put into an HRMP channel.
 */
export interface ConfigurationCall_set_hrmp_channel_max_message_size {
    __kind: 'set_hrmp_channel_max_message_size'
    new: number
}

/**
 *  Sets the maximum number of outbound HRMP channels a parachain is allowed to open.
 */
export interface ConfigurationCall_set_hrmp_max_parachain_outbound_channels {
    __kind: 'set_hrmp_max_parachain_outbound_channels'
    new: number
}

/**
 *  Sets the maximum number of outbound HRMP channels a parathread is allowed to open.
 */
export interface ConfigurationCall_set_hrmp_max_parathread_outbound_channels {
    __kind: 'set_hrmp_max_parathread_outbound_channels'
    new: number
}

/**
 *  Sets the maximum number of outbound HRMP messages can be sent by a candidate.
 */
export interface ConfigurationCall_set_hrmp_max_message_num_per_candidate {
    __kind: 'set_hrmp_max_message_num_per_candidate'
    new: number
}

/**
 *  Sets the maximum amount of weight any individual upward message may consume.
 */
export interface ConfigurationCall_set_ump_max_individual_weight {
    __kind: 'set_ump_max_individual_weight'
    new: bigint
}

export type ParasSharedCall = never

export type ParaInclusionCall = never

export type ParaInherentCall = ParaInherentCall_enter

/**
 *  Enter the paras inherent. This will process bitfields and backed candidates.
 */
export interface ParaInherentCall_enter {
    __kind: 'enter'
    data: ParachainsInherentData
}

export type ParasCall = ParasCall_force_set_current_code | ParasCall_force_set_current_head | ParasCall_force_schedule_code_upgrade | ParasCall_force_note_new_head | ParasCall_force_queue_action

/**
 *  Set the storage for the parachain validation code immediately.
 */
export interface ParasCall_force_set_current_code {
    __kind: 'force_set_current_code'
    para: number
    newCode: Uint8Array
}

/**
 *  Set the storage for the current parachain head data immediately.
 */
export interface ParasCall_force_set_current_head {
    __kind: 'force_set_current_head'
    para: number
    newHead: Uint8Array
}

/**
 *  Schedule an upgrade as if it was scheduled in the given relay parent block.
 */
export interface ParasCall_force_schedule_code_upgrade {
    __kind: 'force_schedule_code_upgrade'
    para: number
    newCode: Uint8Array
    relayParentNumber: number
}

/**
 *  Note a new block head for para within the context of the current block.
 */
export interface ParasCall_force_note_new_head {
    __kind: 'force_note_new_head'
    para: number
    newHead: Uint8Array
}

/**
 *  Put a parachain directly into the next session's action queue.
 *  We can't queue it any sooner than this without going into the
 *  initializer...
 */
export interface ParasCall_force_queue_action {
    __kind: 'force_queue_action'
    para: number
}

export type InitializerCall = InitializerCall_force_approve

/**
 *  Issue a signal to the consensus engine to forcibly act as though all parachain
 *  blocks in all relay chain blocks up to and including the given number in the current
 *  chain are valid and should be finalized.
 */
export interface InitializerCall_force_approve {
    __kind: 'force_approve'
    upTo: number
}

export type DmpCall = never

export type UmpCall = UmpCall_service_overweight

/**
 *  Service a single overweight upward message.
 * 
 *  - `origin`: Must pass `ExecuteOverweightOrigin`.
 *  - `index`: The index of the overweight message to service.
 *  - `weight_limit`: The amount of weight that message execution may take.
 * 
 *  Errors:
 *  - `UnknownMessageIndex`: Message of `index` is unknown.
 *  - `WeightOverLimit`: Message execution may use greater than `weight_limit`.
 * 
 *  Events:
 *  - `OverweightServiced`: On success.
 */
export interface UmpCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: bigint
}

export type HrmpCall = HrmpCall_hrmp_init_open_channel | HrmpCall_hrmp_accept_open_channel | HrmpCall_hrmp_close_channel | HrmpCall_force_clean_hrmp | HrmpCall_force_process_hrmp_open | HrmpCall_force_process_hrmp_close | HrmpCall_hrmp_cancel_open_request

/**
 *  Initiate opening a channel from a parachain to a given recipient with given channel
 *  parameters.
 * 
 *  - `proposed_max_capacity` - specifies how many messages can be in the channel at once.
 *  - `proposed_max_message_size` - specifies the maximum size of any of the messages.
 * 
 *  These numbers are a subject to the relay-chain configuration limits.
 * 
 *  The channel can be opened only after the recipient confirms it and only on a session
 *  change.
 */
export interface HrmpCall_hrmp_init_open_channel {
    __kind: 'hrmp_init_open_channel'
    recipient: number
    proposedMaxCapacity: number
    proposedMaxMessageSize: number
}

/**
 *  Accept a pending open channel request from the given sender.
 * 
 *  The channel will be opened only on the next session boundary.
 */
export interface HrmpCall_hrmp_accept_open_channel {
    __kind: 'hrmp_accept_open_channel'
    sender: number
}

/**
 *  Initiate unilateral closing of a channel. The origin must be either the sender or the
 *  recipient in the channel being closed.
 * 
 *  The closure can only happen on a session change.
 */
export interface HrmpCall_hrmp_close_channel {
    __kind: 'hrmp_close_channel'
    channelId: HrmpChannelId
}

/**
 *  This extrinsic triggers the cleanup of all the HRMP storage items that
 *  a para may have. Normally this happens once per session, but this allows
 *  you to trigger the cleanup immediately for a specific parachain.
 * 
 *  Origin must be Root.
 */
export interface HrmpCall_force_clean_hrmp {
    __kind: 'force_clean_hrmp'
    para: number
}

/**
 *  Force process HRMP open channel requests.
 * 
 *  If there are pending HRMP open channel requests, you can use this
 *  function process all of those requests immediately.
 */
export interface HrmpCall_force_process_hrmp_open {
    __kind: 'force_process_hrmp_open'
}

/**
 *  Force process HRMP close channel requests.
 * 
 *  If there are pending HRMP close channel requests, you can use this
 *  function process all of those requests immediately.
 */
export interface HrmpCall_force_process_hrmp_close {
    __kind: 'force_process_hrmp_close'
}

/**
 *  This cancels a pending open channel request. It can be canceled be either of the sender
 *  or the recipient for that request. The origin must be either of those.
 * 
 *  The cancelling happens immediately. It is not possible to cancel the request if it is
 *  already accepted.
 */
export interface HrmpCall_hrmp_cancel_open_request {
    __kind: 'hrmp_cancel_open_request'
    channelId: HrmpChannelId
}

export type RegistrarCall = RegistrarCall_register | RegistrarCall_force_register | RegistrarCall_deregister | RegistrarCall_swap | RegistrarCall_force_remove_lock | RegistrarCall_reserve

/**
 *  Register head data and validation code for a reserved Para Id.
 * 
 *  ## Arguments
 *  - `origin`: Must be called by a `Signed` origin.
 *  - `id`: The para ID. Must be owned/managed by the `origin` signing account.
 *  - `genesis_head`: The genesis head data of the parachain/thread.
 *  - `validation_code`: The initial validation code of the parachain/thread.
 * 
 *  ## Deposits/Fees
 *  The origin signed account must reserve a corresponding deposit for the registration. Anything already
 *  reserved previously for this para ID is accounted for.
 * 
 *  ## Events
 *  The `Registered` event is emitted in case of success.
 */
export interface RegistrarCall_register {
    __kind: 'register'
    id: number
    genesisHead: Uint8Array
    validationCode: Uint8Array
}

/**
 *  Force the registration of a Para Id on the relay chain.
 * 
 *  This function must be called by a Root origin.
 * 
 *  The deposit taken can be specified for this registration. Any `ParaId`
 *  can be registered, including sub-1000 IDs which are System Parachains.
 */
export interface RegistrarCall_force_register {
    __kind: 'force_register'
    who: Uint8Array
    deposit: bigint
    id: number
    genesisHead: Uint8Array
    validationCode: Uint8Array
}

/**
 *  Deregister a Para Id, freeing all data and returning any deposit.
 * 
 *  The caller must be Root, the `para` owner, or the `para` itself. The para must be a parathread.
 */
export interface RegistrarCall_deregister {
    __kind: 'deregister'
    id: number
}

/**
 *  Swap a parachain with another parachain or parathread.
 * 
 *  The origin must be Root, the `para` owner, or the `para` itself.
 * 
 *  The swap will happen only if there is already an opposite swap pending. If there is not,
 *  the swap will be stored in the pending swaps map, ready for a later confirmatory swap.
 * 
 *  The `ParaId`s remain mapped to the same head data and code so external code can rely on
 *  `ParaId` to be a long-term identifier of a notional "parachain". However, their
 *  scheduling info (i.e. whether they're a parathread or parachain), auction information
 *  and the auction deposit are switched.
 */
export interface RegistrarCall_swap {
    __kind: 'swap'
    id: number
    other: number
}

/**
 *  Remove a manager lock from a para. This will allow the manager of a
 *  previously locked para to deregister or swap a para without using governance.
 * 
 *  Can only be called by the Root origin.
 */
export interface RegistrarCall_force_remove_lock {
    __kind: 'force_remove_lock'
    para: number
}

/**
 *  Reserve a Para Id on the relay chain.
 * 
 *  This function will reserve a new Para Id to be owned/managed by the origin account.
 *  The origin account is able to register head data and validation code using `register` to create
 *  a parathread. Using the Slots pallet, a parathread can then be upgraded to get a parachain slot.
 * 
 *  ## Arguments
 *  - `origin`: Must be called by a `Signed` origin. Becomes the manager/owner of the new para ID.
 * 
 *  ## Deposits/Fees
 *  The origin must reserve a deposit of `ParaDeposit` for the registration.
 * 
 *  ## Events
 *  The `Reserved` event is emitted in case of success, which provides the ID reserved for use.
 */
export interface RegistrarCall_reserve {
    __kind: 'reserve'
}

export type SlotsCall = SlotsCall_force_lease | SlotsCall_clear_all_leases | SlotsCall_trigger_onboard

/**
 *  Just a connect into the `lease_out` call, in case Root wants to force some lease to happen
 *  independently of any other on-chain mechanism to use it.
 * 
 *  Can only be called by the Root origin.
 */
export interface SlotsCall_force_lease {
    __kind: 'force_lease'
    para: number
    leaser: Uint8Array
    amount: bigint
    periodBegin: number
    periodCount: number
}

/**
 *  Clear all leases for a Para Id, refunding any deposits back to the original owners.
 * 
 *  Can only be called by the Root origin.
 */
export interface SlotsCall_clear_all_leases {
    __kind: 'clear_all_leases'
    para: number
}

/**
 *  Try to onboard a parachain that has a lease for the current lease period.
 * 
 *  This function can be useful if there was some state issue with a para that should
 *  have onboarded, but was unable to. As long as they have a lease period, we can
 *  let them onboard from here.
 * 
 *  Origin must be signed, but can be called by anyone.
 */
export interface SlotsCall_trigger_onboard {
    __kind: 'trigger_onboard'
    para: number
}

export type AuctionsCall = AuctionsCall_new_auction | AuctionsCall_bid | AuctionsCall_cancel_auction

/**
 *  Create a new auction.
 * 
 *  This can only happen when there isn't already an auction in progress and may only be
 *  called by the root origin. Accepts the `duration` of this auction and the
 *  `lease_period_index` of the initial lease period of the four that are to be auctioned.
 */
export interface AuctionsCall_new_auction {
    __kind: 'new_auction'
    duration: number
    leasePeriodIndex: number
}

/**
 *  Make a new bid from an account (including a parachain account) for deploying a new
 *  parachain.
 * 
 *  Multiple simultaneous bids from the same bidder are allowed only as long as all active
 *  bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
 * 
 *  - `sub` is the sub-bidder ID, allowing for multiple competing bids to be made by (and
 *  funded by) the same account.
 *  - `auction_index` is the index of the auction to bid on. Should just be the present
 *  value of `AuctionCounter`.
 *  - `first_slot` is the first lease period index of the range to bid on. This is the
 *  absolute lease period index value, not an auction-specific offset.
 *  - `last_slot` is the last lease period index of the range to bid on. This is the
 *  absolute lease period index value, not an auction-specific offset.
 *  - `amount` is the amount to bid to be held as deposit for the parachain should the
 *  bid win. This amount is held throughout the range.
 */
export interface AuctionsCall_bid {
    __kind: 'bid'
    para: number
    auctionIndex: number
    firstSlot: number
    lastSlot: number
    amount: bigint
}

/**
 *  Cancel an in-progress auction.
 * 
 *  Can only be called by Root origin.
 */
export interface AuctionsCall_cancel_auction {
    __kind: 'cancel_auction'
}

export type CrowdloanCall = CrowdloanCall_create | CrowdloanCall_contribute | CrowdloanCall_withdraw | CrowdloanCall_refund | CrowdloanCall_dissolve | CrowdloanCall_edit | CrowdloanCall_add_memo | CrowdloanCall_poke

/**
 *  Create a new crowdloaning campaign for a parachain slot with the given lease period range.
 * 
 *  This applies a lock to your parachain configuration, ensuring that it cannot be changed
 *  by the parachain manager.
 */
export interface CrowdloanCall_create {
    __kind: 'create'
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
    verifier: (MultiSigner | undefined)
}

/**
 *  Contribute to a crowd sale. This will transfer some balance over to fund a parachain
 *  slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
 */
export interface CrowdloanCall_contribute {
    __kind: 'contribute'
    index: number
    value: bigint
    signature: (MultiSignature | undefined)
}

/**
 *  Withdraw full balance of a specific contributor.
 * 
 *  Origin must be signed, but can come from anyone.
 * 
 *  The fund must be either in, or ready for, retirement. For a fund to be *in* retirement, then the retirement
 *  flag must be set. For a fund to be ready for retirement, then:
 *  - it must not already be in retirement;
 *  - the amount of raised funds must be bigger than the _free_ balance of the account;
 *  - and either:
 *    - the block number must be at least `end`; or
 *    - the current lease period must be greater than the fund's `last_period`.
 * 
 *  In this case, the fund's retirement flag is set and its `end` is reset to the current block
 *  number.
 * 
 *  - `who`: The account whose contribution should be withdrawn.
 *  - `index`: The parachain to whose crowdloan the contribution was made.
 */
export interface CrowdloanCall_withdraw {
    __kind: 'withdraw'
    who: Uint8Array
    index: number
}

/**
 *  Automatically refund contributors of an ended crowdloan.
 *  Due to weight restrictions, this function may need to be called multiple
 *  times to fully refund all users. We will refund `RemoveKeysLimit` users at a time.
 * 
 *  Origin must be signed, but can come from anyone.
 */
export interface CrowdloanCall_refund {
    __kind: 'refund'
    index: number
}

/**
 *  Remove a fund after the retirement period has ended and all funds have been returned.
 */
export interface CrowdloanCall_dissolve {
    __kind: 'dissolve'
    index: number
}

/**
 *  Edit the configuration for an in-progress crowdloan.
 * 
 *  Can only be called by Root origin.
 */
export interface CrowdloanCall_edit {
    __kind: 'edit'
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
    verifier: (MultiSigner | undefined)
}

/**
 *  Add an optional memo to an existing crowdloan contribution.
 * 
 *  Origin must be Signed, and the user must have contributed to the crowdloan.
 */
export interface CrowdloanCall_add_memo {
    __kind: 'add_memo'
    index: number
    memo: Uint8Array
}

/**
 *  Poke the fund into `NewRaise`
 * 
 *  Origin must be Signed, and the fund has non-zero raise.
 */
export interface CrowdloanCall_poke {
    __kind: 'poke'
    index: number
}

export type XcmPalletCall = XcmPalletCall_send | XcmPalletCall_teleport_assets | XcmPalletCall_reserve_transfer_assets | XcmPalletCall_execute

export interface XcmPalletCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 *  Teleport some assets from the local chain to some destination chain.
 * 
 *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *    an `AccountId32` value.
 *  - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *    `dest` side. May not be empty.
 *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *    `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 */
export interface XcmPalletCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    destWeight: bigint
}

/**
 *  Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 *  a notification XCM.
 * 
 *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *    an `AccountId32` value.
 *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *    `dest` side.
 *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *    `ReserveAssetDeposited { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 */
export interface XcmPalletCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    destWeight: bigint
}

/**
 *  Execute an XCM message from a local, signed, origin.
 * 
 *  An event is deposited indicating whether `msg` could be executed completely or only
 *  partially.
 * 
 *  No more than `max_weight` will be used in its attempted execution. If this is less than the
 *  maximum amount of weight that the message could take to be executed, then no execution
 *  attempt will be made.
 * 
 *  NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
 *  to completion; only that *some* of it was executed.
 */
export interface XcmPalletCall_execute {
    __kind: 'execute'
    message: VersionedXcm
    maxWeight: bigint
}

export type Type_138 = Type_138_System | Type_138_Babe | Type_138_Timestamp | Type_138_Indices | Type_138_Balances | Type_138_Authorship | Type_138_Staking | Type_138_Session | Type_138_Grandpa | Type_138_ImOnline | Type_138_Democracy | Type_138_Council | Type_138_TechnicalCommittee | Type_138_PhragmenElection | Type_138_TechnicalMembership | Type_138_Treasury | Type_138_Claims | Type_138_Utility | Type_138_Identity | Type_138_Society | Type_138_Recovery | Type_138_Vesting | Type_138_Scheduler | Type_138_Proxy | Type_138_Multisig | Type_138_Bounties | Type_138_Tips | Type_138_ElectionProviderMultiPhase | Type_138_Gilt | Type_138_Configuration | Type_138_ParasShared | Type_138_ParaInclusion | Type_138_ParaInherent | Type_138_Paras | Type_138_Initializer | Type_138_Dmp | Type_138_Ump | Type_138_Hrmp | Type_138_Registrar | Type_138_Slots | Type_138_Auctions | Type_138_Crowdloan | Type_138_XcmPallet

export interface Type_138_System {
    __kind: 'System'
    value: SystemCall
}

export interface Type_138_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Type_138_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Type_138_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Type_138_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Type_138_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Type_138_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Type_138_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Type_138_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Type_138_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Type_138_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Type_138_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Type_138_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Type_138_PhragmenElection {
    __kind: 'PhragmenElection'
    value: PhragmenElectionCall
}

export interface Type_138_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Type_138_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Type_138_Claims {
    __kind: 'Claims'
    value: ClaimsCall
}

export interface Type_138_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Type_138_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Type_138_Society {
    __kind: 'Society'
    value: SocietyCall
}

export interface Type_138_Recovery {
    __kind: 'Recovery'
    value: RecoveryCall
}

export interface Type_138_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Type_138_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Type_138_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Type_138_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Type_138_Bounties {
    __kind: 'Bounties'
    value: BountiesCall
}

export interface Type_138_Tips {
    __kind: 'Tips'
    value: TipsCall
}

export interface Type_138_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseCall
}

export interface Type_138_Gilt {
    __kind: 'Gilt'
    value: GiltCall
}

export interface Type_138_Configuration {
    __kind: 'Configuration'
    value: ConfigurationCall
}

export interface Type_138_ParasShared {
    __kind: 'ParasShared'
    value: ParasSharedCall
}

export interface Type_138_ParaInclusion {
    __kind: 'ParaInclusion'
    value: ParaInclusionCall
}

export interface Type_138_ParaInherent {
    __kind: 'ParaInherent'
    value: ParaInherentCall
}

export interface Type_138_Paras {
    __kind: 'Paras'
    value: ParasCall
}

export interface Type_138_Initializer {
    __kind: 'Initializer'
    value: InitializerCall
}

export interface Type_138_Dmp {
    __kind: 'Dmp'
    value: DmpCall
}

export interface Type_138_Ump {
    __kind: 'Ump'
    value: UmpCall
}

export interface Type_138_Hrmp {
    __kind: 'Hrmp'
    value: HrmpCall
}

export interface Type_138_Registrar {
    __kind: 'Registrar'
    value: RegistrarCall
}

export interface Type_138_Slots {
    __kind: 'Slots'
    value: SlotsCall
}

export interface Type_138_Auctions {
    __kind: 'Auctions'
    value: AuctionsCall
}

export interface Type_138_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanCall
}

export interface Type_138_XcmPallet {
    __kind: 'XcmPallet'
    value: XcmPalletCall
}

export type PalletsOrigin = PalletsOrigin_System | PalletsOrigin_Council | PalletsOrigin_TechnicalCommittee | PalletsOrigin_XcmPallet

export interface PalletsOrigin_System {
    __kind: 'System'
    value: SystemOrigin
}

export interface PalletsOrigin_Council {
    __kind: 'Council'
    value: CollectiveOrigin
}

export interface PalletsOrigin_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: CollectiveOrigin
}

export interface PalletsOrigin_XcmPallet {
    __kind: 'XcmPallet'
    value: XcmOrigin
}

export type Phase = Phase_ApplyExtrinsic | Phase_Finalization | Phase_Initialization

export interface Phase_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Phase_Finalization {
    __kind: 'Finalization'
}

export interface Phase_Initialization {
    __kind: 'Initialization'
}

export type Event = Event_System | Event_Indices | Event_Balances | Event_Staking | Event_Offences | Event_Session | Event_Grandpa | Event_ImOnline | Event_Democracy | Event_Council | Event_TechnicalCommittee | Event_PhragmenElection | Event_TechnicalMembership | Event_Treasury | Event_Claims | Event_Utility | Event_Identity | Event_Society | Event_Recovery | Event_Vesting | Event_Scheduler | Event_Proxy | Event_Multisig | Event_Bounties | Event_Tips | Event_ElectionProviderMultiPhase | Event_Gilt | Event_ParaInclusion | Event_Paras | Event_Ump | Event_Hrmp | Event_Registrar | Event_Slots | Event_Auctions | Event_Crowdloan | Event_XcmPallet

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_Indices {
    __kind: 'Indices'
    value: IndicesEvent
}

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_Staking {
    __kind: 'Staking'
    value: StakingEvent
}

export interface Event_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Event_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Event_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Event_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineEvent
}

export interface Event_Democracy {
    __kind: 'Democracy'
    value: DemocracyEvent
}

export interface Event_Council {
    __kind: 'Council'
    value: CouncilEvent
}

export interface Event_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeEvent
}

export interface Event_PhragmenElection {
    __kind: 'PhragmenElection'
    value: PhragmenElectionEvent
}

export interface Event_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipEvent
}

export interface Event_Treasury {
    __kind: 'Treasury'
    value: TreasuryEvent
}

export interface Event_Claims {
    __kind: 'Claims'
    value: ClaimsEvent
}

export interface Event_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Event_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface Event_Society {
    __kind: 'Society'
    value: SocietyEvent
}

export interface Event_Recovery {
    __kind: 'Recovery'
    value: RecoveryEvent
}

export interface Event_Vesting {
    __kind: 'Vesting'
    value: VestingEvent
}

export interface Event_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Event_Proxy {
    __kind: 'Proxy'
    value: ProxyEvent
}

export interface Event_Multisig {
    __kind: 'Multisig'
    value: MultisigEvent
}

export interface Event_Bounties {
    __kind: 'Bounties'
    value: BountiesEvent
}

export interface Event_Tips {
    __kind: 'Tips'
    value: TipsEvent
}

export interface Event_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseEvent
}

export interface Event_Gilt {
    __kind: 'Gilt'
    value: GiltEvent
}

export interface Event_ParaInclusion {
    __kind: 'ParaInclusion'
    value: ParaInclusionEvent
}

export interface Event_Paras {
    __kind: 'Paras'
    value: ParasEvent
}

export interface Event_Ump {
    __kind: 'Ump'
    value: UmpEvent
}

export interface Event_Hrmp {
    __kind: 'Hrmp'
    value: HrmpEvent
}

export interface Event_Registrar {
    __kind: 'Registrar'
    value: RegistrarEvent
}

export interface Event_Slots {
    __kind: 'Slots'
    value: SlotsEvent
}

export interface Event_Auctions {
    __kind: 'Auctions'
    value: AuctionsEvent
}

export interface Event_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanEvent
}

export interface Event_XcmPallet {
    __kind: 'XcmPallet'
    value: XcmPalletEvent
}

export type MultiLocationV0 = MultiLocationV0_Here | MultiLocationV0_X1 | MultiLocationV0_X2 | MultiLocationV0_X3 | MultiLocationV0_X4 | MultiLocationV0_X5 | MultiLocationV0_X6 | MultiLocationV0_X7 | MultiLocationV0_X8

export interface MultiLocationV0_Here {
    __kind: 'Here'
}

export interface MultiLocationV0_X1 {
    __kind: 'X1'
    value: JunctionV0
}

export interface MultiLocationV0_X2 {
    __kind: 'X2'
    value: [JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X3 {
    __kind: 'X3'
    value: [JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X4 {
    __kind: 'X4'
    value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X5 {
    __kind: 'X5'
    value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X6 {
    __kind: 'X6'
    value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X7 {
    __kind: 'X7'
    value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X8 {
    __kind: 'X8'
    value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV1 {
    parents: number
    interior: JunctionsV1
}

export interface MultiLocationV2 {
    parents: number
    interior: JunctionsV1
}

export interface ChangesTrieConfiguration {
    digestInterval: number
    digestLevels: number
}

export interface BabeEquivocationProof {
    offender: Uint8Array
    slotNumber: bigint
    firstHeader: Header
    secondHeader: Header
}

export interface KeyOwnerProof {
    session: number
    trieNodes: Uint8Array[]
    validatorCount: number
}

export type NextConfigDescriptor = NextConfigDescriptor_V0 | NextConfigDescriptor_V1

export interface NextConfigDescriptor_V0 {
    __kind: 'V0'
}

export interface NextConfigDescriptor_V1 {
    __kind: 'V1'
    value: NextConfigDescriptorV1
}

export type LookupSource = LookupSource_Id | LookupSource_Index | LookupSource_Raw | LookupSource_Address32 | LookupSource_Address20

export interface LookupSource_Id {
    __kind: 'Id'
    value: Uint8Array
}

export interface LookupSource_Index {
    __kind: 'Index'
    value: number
}

export interface LookupSource_Raw {
    __kind: 'Raw'
    value: Uint8Array
}

export interface LookupSource_Address32 {
    __kind: 'Address32'
    value: Uint8Array
}

export interface LookupSource_Address20 {
    __kind: 'Address20'
    value: Uint8Array
}

export interface Header {
    parentHash: Uint8Array
    number: number
    stateRoot: Uint8Array
    extrinsicsRoot: Uint8Array
    digest: Digest
}

export type RewardDestination = RewardDestination_Staked | RewardDestination_Stash | RewardDestination_Controller | RewardDestination_Account | RewardDestination_None

export interface RewardDestination_Staked {
    __kind: 'Staked'
}

export interface RewardDestination_Stash {
    __kind: 'Stash'
}

export interface RewardDestination_Controller {
    __kind: 'Controller'
}

export interface RewardDestination_Account {
    __kind: 'Account'
    value: Uint8Array
}

export interface RewardDestination_None {
    __kind: 'None'
}

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export interface GrandpaEquivocationProof {
    setId: bigint
    equivocation: GrandpaEquivocation
}

export interface Heartbeat {
    blockNumber: number
    networkState: OpaqueNetworkState
    sessionIndex: number
    authorityIndex: number
    validatorsLen: number
}

export type AccountVote = AccountVote_Standard | AccountVote_Split

export interface AccountVote_Standard {
    __kind: 'Standard'
    value: AccountVoteStandard
}

export interface AccountVote_Split {
    __kind: 'Split'
    value: AccountVoteSplit
}

export type Conviction = Conviction_None | Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x

export interface Conviction_None {
    __kind: 'None'
}

export interface Conviction_Locked1x {
    __kind: 'Locked1x'
}

export interface Conviction_Locked2x {
    __kind: 'Locked2x'
}

export interface Conviction_Locked3x {
    __kind: 'Locked3x'
}

export interface Conviction_Locked4x {
    __kind: 'Locked4x'
}

export interface Conviction_Locked5x {
    __kind: 'Locked5x'
}

export interface Conviction_Locked6x {
    __kind: 'Locked6x'
}

export type Renouncing = Renouncing_Member | Renouncing_RunnerUp | Renouncing_Candidate

export interface Renouncing_Member {
    __kind: 'Member'
}

export interface Renouncing_RunnerUp {
    __kind: 'RunnerUp'
}

export interface Renouncing_Candidate {
    __kind: 'Candidate'
    value: number
}

export type StatementKind = StatementKind_Regular | StatementKind_Saft

export interface StatementKind_Regular {
    __kind: 'Regular'
}

export interface StatementKind_Saft {
    __kind: 'Saft'
}

export interface IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint: (Uint8Array | undefined)
    image: Data
    twitter: Data
}

export type Data = Data_None | Data_Raw0 | Data_Raw1 | Data_Raw2 | Data_Raw3 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_BlakeTwo256 | Data_Sha256 | Data_Keccak256 | Data_ShaThree256

export interface Data_None {
    __kind: 'None'
}

export interface Data_Raw0 {
    __kind: 'Raw0'
    value: Uint8Array
}

export interface Data_Raw1 {
    __kind: 'Raw1'
    value: Uint8Array
}

export interface Data_Raw2 {
    __kind: 'Raw2'
    value: Uint8Array
}

export interface Data_Raw3 {
    __kind: 'Raw3'
    value: Uint8Array
}

export interface Data_Raw4 {
    __kind: 'Raw4'
    value: Uint8Array
}

export interface Data_Raw5 {
    __kind: 'Raw5'
    value: Uint8Array
}

export interface Data_Raw6 {
    __kind: 'Raw6'
    value: Uint8Array
}

export interface Data_Raw7 {
    __kind: 'Raw7'
    value: Uint8Array
}

export interface Data_Raw8 {
    __kind: 'Raw8'
    value: Uint8Array
}

export interface Data_Raw9 {
    __kind: 'Raw9'
    value: Uint8Array
}

export interface Data_Raw10 {
    __kind: 'Raw10'
    value: Uint8Array
}

export interface Data_Raw11 {
    __kind: 'Raw11'
    value: Uint8Array
}

export interface Data_Raw12 {
    __kind: 'Raw12'
    value: Uint8Array
}

export interface Data_Raw13 {
    __kind: 'Raw13'
    value: Uint8Array
}

export interface Data_Raw14 {
    __kind: 'Raw14'
    value: Uint8Array
}

export interface Data_Raw15 {
    __kind: 'Raw15'
    value: Uint8Array
}

export interface Data_Raw16 {
    __kind: 'Raw16'
    value: Uint8Array
}

export interface Data_Raw17 {
    __kind: 'Raw17'
    value: Uint8Array
}

export interface Data_Raw18 {
    __kind: 'Raw18'
    value: Uint8Array
}

export interface Data_Raw19 {
    __kind: 'Raw19'
    value: Uint8Array
}

export interface Data_Raw20 {
    __kind: 'Raw20'
    value: Uint8Array
}

export interface Data_Raw21 {
    __kind: 'Raw21'
    value: Uint8Array
}

export interface Data_Raw22 {
    __kind: 'Raw22'
    value: Uint8Array
}

export interface Data_Raw23 {
    __kind: 'Raw23'
    value: Uint8Array
}

export interface Data_Raw24 {
    __kind: 'Raw24'
    value: Uint8Array
}

export interface Data_Raw25 {
    __kind: 'Raw25'
    value: Uint8Array
}

export interface Data_Raw26 {
    __kind: 'Raw26'
    value: Uint8Array
}

export interface Data_Raw27 {
    __kind: 'Raw27'
    value: Uint8Array
}

export interface Data_Raw28 {
    __kind: 'Raw28'
    value: Uint8Array
}

export interface Data_Raw29 {
    __kind: 'Raw29'
    value: Uint8Array
}

export interface Data_Raw30 {
    __kind: 'Raw30'
    value: Uint8Array
}

export interface Data_Raw31 {
    __kind: 'Raw31'
    value: Uint8Array
}

export interface Data_Raw32 {
    __kind: 'Raw32'
    value: Uint8Array
}

export interface Data_BlakeTwo256 {
    __kind: 'BlakeTwo256'
    value: Uint8Array
}

export interface Data_Sha256 {
    __kind: 'Sha256'
    value: Uint8Array
}

export interface Data_Keccak256 {
    __kind: 'Keccak256'
    value: Uint8Array
}

export interface Data_ShaThree256 {
    __kind: 'ShaThree256'
    value: Uint8Array
}

export type IdentityJudgement = IdentityJudgement_Unknown | IdentityJudgement_FeePaid | IdentityJudgement_Reasonable | IdentityJudgement_KnownGood | IdentityJudgement_OutOfDate | IdentityJudgement_LowQuality | IdentityJudgement_Erroneous

export interface IdentityJudgement_Unknown {
    __kind: 'Unknown'
}

export interface IdentityJudgement_FeePaid {
    __kind: 'FeePaid'
    value: bigint
}

export interface IdentityJudgement_Reasonable {
    __kind: 'Reasonable'
}

export interface IdentityJudgement_KnownGood {
    __kind: 'KnownGood'
}

export interface IdentityJudgement_OutOfDate {
    __kind: 'OutOfDate'
}

export interface IdentityJudgement_LowQuality {
    __kind: 'LowQuality'
}

export interface IdentityJudgement_Erroneous {
    __kind: 'Erroneous'
}

export type SocietyJudgement = SocietyJudgement_Rebid | SocietyJudgement_Reject | SocietyJudgement_Approve

export interface SocietyJudgement_Rebid {
    __kind: 'Rebid'
}

export interface SocietyJudgement_Reject {
    __kind: 'Reject'
}

export interface SocietyJudgement_Approve {
    __kind: 'Approve'
}

export interface VestingInfo {
    locked: bigint
    perBlock: bigint
    startingBlock: number
}

export type ProxyType = ProxyType_Any | ProxyType_NonTransfer | ProxyType_Governance | ProxyType_Staking | ProxyType_IdentityJudgement | ProxyType_CancelProxy | ProxyType_Auction

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_Staking {
    __kind: 'Staking'
}

export interface ProxyType_IdentityJudgement {
    __kind: 'IdentityJudgement'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_Auction {
    __kind: 'Auction'
}

export interface Timepoint {
    height: number
    index: number
}

export interface RawSolution {
    compact: CompactAssignmentsWith24
    score: bigint[]
    round: number
}

export interface SolutionOrSnapshotSize {
    voters: number
    targets: number
}

export interface SolutionSupport {
    total: bigint
    voters: [Uint8Array, bigint][]
}

export interface ParachainsInherentData {
    bitfields: SignedAvailabilityBitfield[]
    backedCandidates: BackedCandidate[]
    disputes: DisputeStatementSet[]
    parentHeader: Header
}

export interface HrmpChannelId {
    sender: number
    receiver: number
}

export type MultiSigner = MultiSigner_Ed25519 | MultiSigner_Sr25519 | MultiSigner_Ecdsa

export interface MultiSigner_Ed25519 {
    __kind: 'Ed25519'
    value: Uint8Array
}

export interface MultiSigner_Sr25519 {
    __kind: 'Sr25519'
    value: Uint8Array
}

export interface MultiSigner_Ecdsa {
    __kind: 'Ecdsa'
    value: Uint8Array
}

export type MultiSignature = MultiSignature_Ed25519 | MultiSignature_Sr25519 | MultiSignature_Ecdsa

export interface MultiSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Uint8Array
}

export interface MultiSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Uint8Array
}

export interface MultiSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Uint8Array
}

export type VersionedXcm = VersionedXcm_V0 | VersionedXcm_V1 | VersionedXcm_V2

export interface VersionedXcm_V0 {
    __kind: 'V0'
    value: XcmV0
}

export interface VersionedXcm_V1 {
    __kind: 'V1'
    value: XcmV1
}

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: InstructionV2[]
}

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1 | VersionedMultiAssets_V2

export interface VersionedMultiAssets_V0 {
    __kind: 'V0'
    value: MultiAssetV0[]
}

export interface VersionedMultiAssets_V1 {
    __kind: 'V1'
    value: MultiAssetV1[]
}

export interface VersionedMultiAssets_V2 {
    __kind: 'V2'
    value: MultiAssetV1[]
}

export type SystemOrigin = SystemOrigin_Root | SystemOrigin_Signed | SystemOrigin_None

export interface SystemOrigin_Root {
    __kind: 'Root'
}

export interface SystemOrigin_Signed {
    __kind: 'Signed'
    value: Uint8Array
}

export interface SystemOrigin_None {
    __kind: 'None'
}

export type CollectiveOrigin = CollectiveOrigin_Members | CollectiveOrigin_Member

export interface CollectiveOrigin_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface CollectiveOrigin_Member {
    __kind: 'Member'
    value: Uint8Array
}

export type XcmOrigin = XcmOrigin_Xcm

export interface XcmOrigin_Xcm {
    __kind: 'Xcm'
    value: MultiLocation
}

export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount | SystemEvent_Remarked

/**
 *  An extrinsic completed successfully. \[info\]
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    value: DispatchInfo
}

/**
 *  An extrinsic failed. \[error, info\]
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    value: [DispatchError, DispatchInfo]
}

/**
 *  `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 *  A new \[account\] was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    value: Uint8Array
}

/**
 *  An \[account\] was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    value: Uint8Array
}

/**
 *  On on-chain remark happened. \[origin, remark_hash\]
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    value: [Uint8Array, Uint8Array]
}

export type IndicesEvent = IndicesEvent_IndexAssigned | IndicesEvent_IndexFreed | IndicesEvent_IndexFrozen

/**
 *  A account index was assigned. \[index, who\]
 */
export interface IndicesEvent_IndexAssigned {
    __kind: 'IndexAssigned'
    value: [Uint8Array, number]
}

/**
 *  A account index has been freed up (unassigned). \[index\]
 */
export interface IndicesEvent_IndexFreed {
    __kind: 'IndexFreed'
    value: number
}

/**
 *  A account index has been frozen to its current account ID. \[index, who\]
 */
export interface IndicesEvent_IndexFrozen {
    __kind: 'IndexFrozen'
    value: [number, Uint8Array]
}

export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated

/**
 *  An account was created with some free balance. \[account, free_balance\]
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    value: [Uint8Array, bigint]
}

/**
 *  An account was removed whose balance was non-zero but below ExistentialDeposit,
 *  resulting in an outright loss. \[account, balance\]
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    value: [Uint8Array, bigint]
}

/**
 *  Transfer succeeded. \[from, to, value\]
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A balance was set by root. \[who, free, reserved\]
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    value: [Uint8Array, bigint, bigint]
}

/**
 *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    value: [Uint8Array, bigint]
}

/**
 *  Some balance was reserved (moved from free to reserved). \[who, value\]
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    value: [Uint8Array, bigint]
}

/**
 *  Some balance was unreserved (moved from reserved to free). \[who, value\]
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    value: [Uint8Array, bigint]
}

/**
 *  Some balance was moved from the reserve of the first account to the second account.
 *  Final argument indicates the destination balance type.
 *  \[from, to, balance, destination_status\]
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    value: [Uint8Array, Uint8Array, bigint, BalanceStatus]
}

export type StakingEvent = StakingEvent_EraPaid | StakingEvent_Rewarded | StakingEvent_Slashed | StakingEvent_OldSlashingReportDiscarded | StakingEvent_StakersElected | StakingEvent_Bonded | StakingEvent_Unbonded | StakingEvent_Withdrawn | StakingEvent_Kicked | StakingEvent_StakingElectionFailed | StakingEvent_Chilled | StakingEvent_PayoutStarted

/**
 *  The era payout has been set; the first balance is the validator-payout; the second is
 *  the remainder from the maximum amount of reward.
 *  \[era_index, validator_payout, remainder\]
 */
export interface StakingEvent_EraPaid {
    __kind: 'EraPaid'
    value: [number, bigint, bigint]
}

/**
 *  The nominator has been rewarded by this amount. \[stash, amount\]
 */
export interface StakingEvent_Rewarded {
    __kind: 'Rewarded'
    value: [Uint8Array, bigint]
}

/**
 *  One validator (and its nominators) has been slashed by the given amount.
 *  \[validator, amount\]
 */
export interface StakingEvent_Slashed {
    __kind: 'Slashed'
    value: [Uint8Array, bigint]
}

/**
 *  An old slashing report from a prior era was discarded because it could
 *  not be processed. \[session_index\]
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    value: number
}

/**
 *  A new set of stakers was elected.
 */
export interface StakingEvent_StakersElected {
    __kind: 'StakersElected'
}

/**
 *  An account has bonded this amount. \[stash, amount\]
 * 
 *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 *  it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    value: [Uint8Array, bigint]
}

/**
 *  An account has unbonded this amount. \[stash, amount\]
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    value: [Uint8Array, bigint]
}

/**
 *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 *  from the unlocking queue. \[stash, amount\]
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [Uint8Array, bigint]
}

/**
 *  A nominator has been kicked from a validator. \[nominator, stash\]
 */
export interface StakingEvent_Kicked {
    __kind: 'Kicked'
    value: [Uint8Array, Uint8Array]
}

/**
 *  The election failed. No new era is planned.
 */
export interface StakingEvent_StakingElectionFailed {
    __kind: 'StakingElectionFailed'
}

/**
 *  An account has stopped participating as either a validator or nominator.
 *  \[stash\]
 */
export interface StakingEvent_Chilled {
    __kind: 'Chilled'
    value: Uint8Array
}

/**
 *  The stakers' rewards are getting paid. \[era_index, validator_stash\]
 */
export interface StakingEvent_PayoutStarted {
    __kind: 'PayoutStarted'
    value: [number, Uint8Array]
}

export type OffencesEvent = OffencesEvent_Offence

/**
 *  There is an offence reported of the given `kind` happened at the `session_index` and
 *  (kind-specific) time slot. This event is not deposited for duplicate slashes.
 *  \[kind, timeslot\].
 */
export interface OffencesEvent_Offence {
    __kind: 'Offence'
    value: [Uint8Array, Uint8Array]
}

export type SessionEvent = SessionEvent_NewSession

/**
 *  New session has happened. Note that the argument is the \[session_index\], not the block
 *  number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    value: number
}

export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 *  New authority set has been applied. \[authority_set\]
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    value: [Uint8Array, bigint][]
}

/**
 *  Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 *  Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
}

export type ImOnlineEvent = ImOnlineEvent_HeartbeatReceived | ImOnlineEvent_AllGood | ImOnlineEvent_SomeOffline

/**
 *  A new heartbeat was received from `AuthorityId` \[authority_id\]
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    value: Uint8Array
}

/**
 *  At the end of the session, no offence was committed.
 */
export interface ImOnlineEvent_AllGood {
    __kind: 'AllGood'
}

/**
 *  At the end of the session, at least one validator was found to be \[offline\].
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    value: [Uint8Array, FullIdentification][]
}

export type DemocracyEvent = DemocracyEvent_Proposed | DemocracyEvent_Tabled | DemocracyEvent_ExternalTabled | DemocracyEvent_Started | DemocracyEvent_Passed | DemocracyEvent_NotPassed | DemocracyEvent_Cancelled | DemocracyEvent_Executed | DemocracyEvent_Delegated | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed | DemocracyEvent_PreimageNoted | DemocracyEvent_PreimageUsed | DemocracyEvent_PreimageInvalid | DemocracyEvent_PreimageMissing | DemocracyEvent_PreimageReaped | DemocracyEvent_Blacklisted

/**
 *  A motion has been proposed by a public account. \[proposal_index, deposit\]
 */
export interface DemocracyEvent_Proposed {
    __kind: 'Proposed'
    value: [number, bigint]
}

/**
 *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
 */
export interface DemocracyEvent_Tabled {
    __kind: 'Tabled'
    value: [number, bigint, Uint8Array[]]
}

/**
 *  An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
    __kind: 'ExternalTabled'
}

/**
 *  A referendum has begun. \[ref_index, threshold\]
 */
export interface DemocracyEvent_Started {
    __kind: 'Started'
    value: [number, VoteThreshold]
}

/**
 *  A proposal has been approved by referendum. \[ref_index\]
 */
export interface DemocracyEvent_Passed {
    __kind: 'Passed'
    value: number
}

/**
 *  A proposal has been rejected by referendum. \[ref_index\]
 */
export interface DemocracyEvent_NotPassed {
    __kind: 'NotPassed'
    value: number
}

/**
 *  A referendum has been cancelled. \[ref_index\]
 */
export interface DemocracyEvent_Cancelled {
    __kind: 'Cancelled'
    value: number
}

/**
 *  A proposal has been enacted. \[ref_index, result\]
 */
export interface DemocracyEvent_Executed {
    __kind: 'Executed'
    value: [number, DispatchResult]
}

/**
 *  An account has delegated their vote to another account. \[who, target\]
 */
export interface DemocracyEvent_Delegated {
    __kind: 'Delegated'
    value: [Uint8Array, Uint8Array]
}

/**
 *  An \[account\] has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
    __kind: 'Undelegated'
    value: Uint8Array
}

/**
 *  An external proposal has been vetoed. \[who, proposal_hash, until\]
 */
export interface DemocracyEvent_Vetoed {
    __kind: 'Vetoed'
    value: [Uint8Array, Uint8Array, number]
}

/**
 *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
 */
export interface DemocracyEvent_PreimageNoted {
    __kind: 'PreimageNoted'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A proposal preimage was removed and used (the deposit was returned).
 *  \[proposal_hash, provider, deposit\]
 */
export interface DemocracyEvent_PreimageUsed {
    __kind: 'PreimageUsed'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A proposal could not be executed because its preimage was invalid.
 *  \[proposal_hash, ref_index\]
 */
export interface DemocracyEvent_PreimageInvalid {
    __kind: 'PreimageInvalid'
    value: [Uint8Array, number]
}

/**
 *  A proposal could not be executed because its preimage was missing.
 *  \[proposal_hash, ref_index\]
 */
export interface DemocracyEvent_PreimageMissing {
    __kind: 'PreimageMissing'
    value: [Uint8Array, number]
}

/**
 *  A registered preimage was removed and the deposit collected by the reaper.
 *  \[proposal_hash, provider, deposit, reaper\]
 */
export interface DemocracyEvent_PreimageReaped {
    __kind: 'PreimageReaped'
    value: [Uint8Array, Uint8Array, bigint, Uint8Array]
}

/**
 *  A proposal \[hash\] has been blacklisted permanently.
 */
export interface DemocracyEvent_Blacklisted {
    __kind: 'Blacklisted'
    value: Uint8Array
}

export type CouncilEvent = CouncilEvent_Proposed | CouncilEvent_Voted | CouncilEvent_Approved | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Closed

/**
 *  A motion (given hash) has been proposed (by given account) with a threshold (given
 *  `MemberCount`).
 *  \[account, proposal_index, proposal_hash, threshold\]
 */
export interface CouncilEvent_Proposed {
    __kind: 'Proposed'
    value: [Uint8Array, number, Uint8Array, number]
}

/**
 *  A motion (given hash) has been voted on by given account, leaving
 *  a tally (yes votes and no votes given respectively as `MemberCount`).
 *  \[account, proposal_hash, voted, yes, no\]
 */
export interface CouncilEvent_Voted {
    __kind: 'Voted'
    value: [Uint8Array, Uint8Array, boolean, number, number]
}

/**
 *  A motion was approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface CouncilEvent_Approved {
    __kind: 'Approved'
    value: Uint8Array
}

/**
 *  A motion was not approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface CouncilEvent_Disapproved {
    __kind: 'Disapproved'
    value: Uint8Array
}

/**
 *  A motion was executed; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface CouncilEvent_Executed {
    __kind: 'Executed'
    value: [Uint8Array, DispatchResult]
}

/**
 *  A single member did some action; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface CouncilEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [Uint8Array, DispatchResult]
}

/**
 *  A proposal was closed because its threshold was reached or after its duration was up.
 *  \[proposal_hash, yes, no\]
 */
export interface CouncilEvent_Closed {
    __kind: 'Closed'
    value: [Uint8Array, number, number]
}

export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted | TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Closed

/**
 *  A motion (given hash) has been proposed (by given account) with a threshold (given
 *  `MemberCount`).
 *  \[account, proposal_index, proposal_hash, threshold\]
 */
export interface TechnicalCommitteeEvent_Proposed {
    __kind: 'Proposed'
    value: [Uint8Array, number, Uint8Array, number]
}

/**
 *  A motion (given hash) has been voted on by given account, leaving
 *  a tally (yes votes and no votes given respectively as `MemberCount`).
 *  \[account, proposal_hash, voted, yes, no\]
 */
export interface TechnicalCommitteeEvent_Voted {
    __kind: 'Voted'
    value: [Uint8Array, Uint8Array, boolean, number, number]
}

/**
 *  A motion was approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface TechnicalCommitteeEvent_Approved {
    __kind: 'Approved'
    value: Uint8Array
}

/**
 *  A motion was not approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface TechnicalCommitteeEvent_Disapproved {
    __kind: 'Disapproved'
    value: Uint8Array
}

/**
 *  A motion was executed; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface TechnicalCommitteeEvent_Executed {
    __kind: 'Executed'
    value: [Uint8Array, DispatchResult]
}

/**
 *  A single member did some action; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [Uint8Array, DispatchResult]
}

/**
 *  A proposal was closed because its threshold was reached or after its duration was up.
 *  \[proposal_hash, yes, no\]
 */
export interface TechnicalCommitteeEvent_Closed {
    __kind: 'Closed'
    value: [Uint8Array, number, number]
}

export type PhragmenElectionEvent = PhragmenElectionEvent_NewTerm | PhragmenElectionEvent_EmptyTerm | PhragmenElectionEvent_ElectionError | PhragmenElectionEvent_MemberKicked | PhragmenElectionEvent_Renounced | PhragmenElectionEvent_CandidateSlashed | PhragmenElectionEvent_SeatHolderSlashed

/**
 *  A new term with \[new_members\]. This indicates that enough candidates existed to run
 *  the election, not that enough have has been elected. The inner value must be examined
 *  for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
 *  slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
 *  begin with.
 */
export interface PhragmenElectionEvent_NewTerm {
    __kind: 'NewTerm'
    value: [Uint8Array, bigint][]
}

/**
 *  No (or not enough) candidates existed for this round. This is different from
 *  `NewTerm(\[\])`. See the description of `NewTerm`.
 */
export interface PhragmenElectionEvent_EmptyTerm {
    __kind: 'EmptyTerm'
}

/**
 *  Internal error happened while trying to perform election.
 */
export interface PhragmenElectionEvent_ElectionError {
    __kind: 'ElectionError'
}

/**
 *  A \[member\] has been removed. This should always be followed by either `NewTerm` or
 *  `EmptyTerm`.
 */
export interface PhragmenElectionEvent_MemberKicked {
    __kind: 'MemberKicked'
    value: Uint8Array
}

/**
 *  Someone has renounced their candidacy.
 */
export interface PhragmenElectionEvent_Renounced {
    __kind: 'Renounced'
    value: Uint8Array
}

/**
 *  A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
 *  runner-up.
 * 
 *  Note that old members and runners-up are also candidates.
 */
export interface PhragmenElectionEvent_CandidateSlashed {
    __kind: 'CandidateSlashed'
    value: [Uint8Array, bigint]
}

/**
 *  A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
 */
export interface PhragmenElectionEvent_SeatHolderSlashed {
    __kind: 'SeatHolderSlashed'
    value: [Uint8Array, bigint]
}

export type TechnicalMembershipEvent = TechnicalMembershipEvent_MemberAdded | TechnicalMembershipEvent_MemberRemoved | TechnicalMembershipEvent_MembersSwapped | TechnicalMembershipEvent_MembersReset | TechnicalMembershipEvent_KeyChanged | TechnicalMembershipEvent_Dummy

/**
 *  The given member was added; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberAdded {
    __kind: 'MemberAdded'
}

/**
 *  The given member was removed; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberRemoved {
    __kind: 'MemberRemoved'
}

/**
 *  Two members were swapped; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MembersSwapped {
    __kind: 'MembersSwapped'
}

/**
 *  The membership was reset; see the transaction for who the new set is.
 */
export interface TechnicalMembershipEvent_MembersReset {
    __kind: 'MembersReset'
}

/**
 *  One of the members' keys changed.
 */
export interface TechnicalMembershipEvent_KeyChanged {
    __kind: 'KeyChanged'
}

/**
 *  Phantom member, never used.
 */
export interface TechnicalMembershipEvent_Dummy {
    __kind: 'Dummy'
}

export type TreasuryEvent = TreasuryEvent_Proposed | TreasuryEvent_Spending | TreasuryEvent_Awarded | TreasuryEvent_Rejected | TreasuryEvent_Burnt | TreasuryEvent_Rollover | TreasuryEvent_Deposit

/**
 *  New proposal. \[proposal_index\]
 */
export interface TreasuryEvent_Proposed {
    __kind: 'Proposed'
    value: number
}

/**
 *  We have ended a spend period and will now allocate funds. \[budget_remaining\]
 */
export interface TreasuryEvent_Spending {
    __kind: 'Spending'
    value: bigint
}

/**
 *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
 */
export interface TreasuryEvent_Awarded {
    __kind: 'Awarded'
    value: [number, bigint, Uint8Array]
}

/**
 *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
 */
export interface TreasuryEvent_Rejected {
    __kind: 'Rejected'
    value: [number, bigint]
}

/**
 *  Some of our funds have been burnt. \[burn\]
 */
export interface TreasuryEvent_Burnt {
    __kind: 'Burnt'
    value: bigint
}

/**
 *  Spending has finished; this is the amount that rolls over until next spend.
 *  \[budget_remaining\]
 */
export interface TreasuryEvent_Rollover {
    __kind: 'Rollover'
    value: bigint
}

/**
 *  Some funds have been deposited. \[deposit\]
 */
export interface TreasuryEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

export type ClaimsEvent = ClaimsEvent_Claimed

/**
 *  Someone claimed some DOTs. `[who, ethereum_address, amount]`
 */
export interface ClaimsEvent_Claimed {
    __kind: 'Claimed'
    value: [Uint8Array, Uint8Array, bigint]
}

export type UtilityEvent = UtilityEvent_BatchInterrupted | UtilityEvent_BatchCompleted | UtilityEvent_ItemCompleted

/**
 *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 *  well as the error. \[index, error\]
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    value: [number, DispatchError]
}

/**
 *  Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 *  A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
    __kind: 'ItemCompleted'
}

export type IdentityEvent = IdentityEvent_IdentitySet | IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_JudgementGiven | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked

/**
 *  A name was set or reset (which will remove all judgements). \[who\]
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    value: Uint8Array
}

/**
 *  A name was cleared, and the given balance returned. \[who, deposit\]
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    value: [Uint8Array, bigint]
}

/**
 *  A name was removed and the given balance slashed. \[who, deposit\]
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    value: [Uint8Array, bigint]
}

/**
 *  A judgement was asked from a registrar. \[who, registrar_index\]
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    value: [Uint8Array, number]
}

/**
 *  A judgement request was retracted. \[who, registrar_index\]
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    value: [Uint8Array, number]
}

/**
 *  A judgement was given by a registrar. \[target, registrar_index\]
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    value: [Uint8Array, number]
}

/**
 *  A registrar was added. \[registrar_index\]
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    value: number
}

/**
 *  A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityAdded {
    __kind: 'SubIdentityAdded'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A sub-identity was removed from an identity and the deposit freed.
 *  \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityRemoved {
    __kind: 'SubIdentityRemoved'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A sub-identity was cleared, and the given deposit repatriated from the
 *  main identity account to the sub-identity account. \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityRevoked {
    __kind: 'SubIdentityRevoked'
    value: [Uint8Array, Uint8Array, bigint]
}

export type SocietyEvent = SocietyEvent_Founded | SocietyEvent_Bid | SocietyEvent_Vouch | SocietyEvent_AutoUnbid | SocietyEvent_Unbid | SocietyEvent_Unvouch | SocietyEvent_Inducted | SocietyEvent_SuspendedMemberJudgement | SocietyEvent_CandidateSuspended | SocietyEvent_MemberSuspended | SocietyEvent_Challenged | SocietyEvent_Vote | SocietyEvent_DefenderVote | SocietyEvent_NewMaxMembers | SocietyEvent_Unfounded | SocietyEvent_Deposit

/**
 *  The society is founded by the given identity. \[founder\]
 */
export interface SocietyEvent_Founded {
    __kind: 'Founded'
    value: Uint8Array
}

/**
 *  A membership bid just happened. The given account is the candidate's ID and their offer
 *  is the second. \[candidate_id, offer\]
 */
export interface SocietyEvent_Bid {
    __kind: 'Bid'
    value: [Uint8Array, bigint]
}

/**
 *  A membership bid just happened by vouching. The given account is the candidate's ID and
 *  their offer is the second. The vouching party is the third. \[candidate_id, offer, vouching\]
 */
export interface SocietyEvent_Vouch {
    __kind: 'Vouch'
    value: [Uint8Array, bigint, Uint8Array]
}

/**
 *  A \[candidate\] was dropped (due to an excess of bids in the system).
 */
export interface SocietyEvent_AutoUnbid {
    __kind: 'AutoUnbid'
    value: Uint8Array
}

/**
 *  A \[candidate\] was dropped (by their request).
 */
export interface SocietyEvent_Unbid {
    __kind: 'Unbid'
    value: Uint8Array
}

/**
 *  A \[candidate\] was dropped (by request of who vouched for them).
 */
export interface SocietyEvent_Unvouch {
    __kind: 'Unvouch'
    value: Uint8Array
}

/**
 *  A group of candidates have been inducted. The batch's primary is the first value, the
 *  batch in full is the second. \[primary, candidates\]
 */
export interface SocietyEvent_Inducted {
    __kind: 'Inducted'
    value: [Uint8Array, Uint8Array[]]
}

/**
 *  A suspended member has been judged. \[who, judged\]
 */
export interface SocietyEvent_SuspendedMemberJudgement {
    __kind: 'SuspendedMemberJudgement'
    value: [Uint8Array, boolean]
}

/**
 *  A \[candidate\] has been suspended
 */
export interface SocietyEvent_CandidateSuspended {
    __kind: 'CandidateSuspended'
    value: Uint8Array
}

/**
 *  A \[member\] has been suspended
 */
export interface SocietyEvent_MemberSuspended {
    __kind: 'MemberSuspended'
    value: Uint8Array
}

/**
 *  A \[member\] has been challenged
 */
export interface SocietyEvent_Challenged {
    __kind: 'Challenged'
    value: Uint8Array
}

/**
 *  A vote has been placed \[candidate, voter, vote\]
 */
export interface SocietyEvent_Vote {
    __kind: 'Vote'
    value: [Uint8Array, Uint8Array, boolean]
}

/**
 *  A vote has been placed for a defending member \[voter, vote\]
 */
export interface SocietyEvent_DefenderVote {
    __kind: 'DefenderVote'
    value: [Uint8Array, boolean]
}

/**
 *  A new \[max\] member count has been set
 */
export interface SocietyEvent_NewMaxMembers {
    __kind: 'NewMaxMembers'
    value: number
}

/**
 *  Society is unfounded. \[founder\]
 */
export interface SocietyEvent_Unfounded {
    __kind: 'Unfounded'
    value: Uint8Array
}

/**
 *  Some funds were deposited into the society account. \[value\]
 */
export interface SocietyEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

export type RecoveryEvent = RecoveryEvent_RecoveryCreated | RecoveryEvent_RecoveryInitiated | RecoveryEvent_RecoveryVouched | RecoveryEvent_RecoveryClosed | RecoveryEvent_AccountRecovered | RecoveryEvent_RecoveryRemoved

/**
 *  A recovery process has been set up for an \[account\].
 */
export interface RecoveryEvent_RecoveryCreated {
    __kind: 'RecoveryCreated'
    value: Uint8Array
}

/**
 *  A recovery process has been initiated for lost account by rescuer account.
 *  \[lost, rescuer\]
 */
export interface RecoveryEvent_RecoveryInitiated {
    __kind: 'RecoveryInitiated'
    value: [Uint8Array, Uint8Array]
}

/**
 *  A recovery process for lost account by rescuer account has been vouched for by sender.
 *  \[lost, rescuer, sender\]
 */
export interface RecoveryEvent_RecoveryVouched {
    __kind: 'RecoveryVouched'
    value: [Uint8Array, Uint8Array, Uint8Array]
}

/**
 *  A recovery process for lost account by rescuer account has been closed.
 *  \[lost, rescuer\]
 */
export interface RecoveryEvent_RecoveryClosed {
    __kind: 'RecoveryClosed'
    value: [Uint8Array, Uint8Array]
}

/**
 *  Lost account has been successfully recovered by rescuer account.
 *  \[lost, rescuer\]
 */
export interface RecoveryEvent_AccountRecovered {
    __kind: 'AccountRecovered'
    value: [Uint8Array, Uint8Array]
}

/**
 *  A recovery process has been removed for an \[account\].
 */
export interface RecoveryEvent_RecoveryRemoved {
    __kind: 'RecoveryRemoved'
    value: Uint8Array
}

export type VestingEvent = VestingEvent_VestingUpdated | VestingEvent_VestingCompleted

/**
 *  The amount vested has been updated. This could indicate more funds are available. The
 *  balance given is the amount which is left unvested (and thus locked).
 *  \[account, unvested\]
 */
export interface VestingEvent_VestingUpdated {
    __kind: 'VestingUpdated'
    value: [Uint8Array, bigint]
}

/**
 *  An \[account\] has become fully vested. No further vesting can happen.
 */
export interface VestingEvent_VestingCompleted {
    __kind: 'VestingCompleted'
    value: Uint8Array
}

export type SchedulerEvent = SchedulerEvent_Scheduled | SchedulerEvent_Canceled | SchedulerEvent_Dispatched

/**
 *  Scheduled some task. \[when, index\]
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    value: [number, number]
}

/**
 *  Canceled some task. \[when, index\]
 */
export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    value: [number, number]
}

/**
 *  Dispatched some task. \[task, id, result\]
 */
export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    value: [[number, number], (Uint8Array | undefined), DispatchResult]
}

export type ProxyEvent = ProxyEvent_ProxyExecuted | ProxyEvent_AnonymousCreated | ProxyEvent_Announced

/**
 *  A proxy was executed correctly, with the given \[result\].
 */
export interface ProxyEvent_ProxyExecuted {
    __kind: 'ProxyExecuted'
    value: DispatchResult
}

/**
 *  Anonymous account has been created by new proxy with given
 *  disambiguation index and proxy type. \[anonymous, who, proxy_type, disambiguation_index\]
 */
export interface ProxyEvent_AnonymousCreated {
    __kind: 'AnonymousCreated'
    value: [Uint8Array, Uint8Array, ProxyType, number]
}

/**
 *  An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
 */
export interface ProxyEvent_Announced {
    __kind: 'Announced'
    value: [Uint8Array, Uint8Array, Uint8Array]
}

export type MultisigEvent = MultisigEvent_NewMultisig | MultisigEvent_MultisigApproval | MultisigEvent_MultisigExecuted | MultisigEvent_MultisigCancelled

/**
 *  A new multisig operation has begun. \[approving, multisig, call_hash\]
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    value: [Uint8Array, Uint8Array, Uint8Array]
}

/**
 *  A multisig operation has been approved by someone.
 *  \[approving, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    value: [Uint8Array, Timepoint, Uint8Array, Uint8Array]
}

/**
 *  A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    value: [Uint8Array, Timepoint, Uint8Array, Uint8Array, DispatchResult]
}

/**
 *  A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    value: [Uint8Array, Timepoint, Uint8Array, Uint8Array]
}

export type BountiesEvent = BountiesEvent_BountyProposed | BountiesEvent_BountyRejected | BountiesEvent_BountyBecameActive | BountiesEvent_BountyAwarded | BountiesEvent_BountyClaimed | BountiesEvent_BountyCanceled | BountiesEvent_BountyExtended

/**
 *  New bounty proposal. \[index\]
 */
export interface BountiesEvent_BountyProposed {
    __kind: 'BountyProposed'
    value: number
}

/**
 *  A bounty proposal was rejected; funds were slashed. \[index, bond\]
 */
export interface BountiesEvent_BountyRejected {
    __kind: 'BountyRejected'
    value: [number, bigint]
}

/**
 *  A bounty proposal is funded and became active. \[index\]
 */
export interface BountiesEvent_BountyBecameActive {
    __kind: 'BountyBecameActive'
    value: number
}

/**
 *  A bounty is awarded to a beneficiary. \[index, beneficiary\]
 */
export interface BountiesEvent_BountyAwarded {
    __kind: 'BountyAwarded'
    value: [number, Uint8Array]
}

/**
 *  A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
 */
export interface BountiesEvent_BountyClaimed {
    __kind: 'BountyClaimed'
    value: [number, bigint, Uint8Array]
}

/**
 *  A bounty is cancelled. \[index\]
 */
export interface BountiesEvent_BountyCanceled {
    __kind: 'BountyCanceled'
    value: number
}

/**
 *  A bounty expiry is extended. \[index\]
 */
export interface BountiesEvent_BountyExtended {
    __kind: 'BountyExtended'
    value: number
}

export type TipsEvent = TipsEvent_NewTip | TipsEvent_TipClosing | TipsEvent_TipClosed | TipsEvent_TipRetracted | TipsEvent_TipSlashed

/**
 *  A new tip suggestion has been opened. \[tip_hash\]
 */
export interface TipsEvent_NewTip {
    __kind: 'NewTip'
    value: Uint8Array
}

/**
 *  A tip suggestion has reached threshold and is closing. \[tip_hash\]
 */
export interface TipsEvent_TipClosing {
    __kind: 'TipClosing'
    value: Uint8Array
}

/**
 *  A tip suggestion has been closed. \[tip_hash, who, payout\]
 */
export interface TipsEvent_TipClosed {
    __kind: 'TipClosed'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A tip suggestion has been retracted. \[tip_hash\]
 */
export interface TipsEvent_TipRetracted {
    __kind: 'TipRetracted'
    value: Uint8Array
}

/**
 *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
 */
export interface TipsEvent_TipSlashed {
    __kind: 'TipSlashed'
    value: [Uint8Array, Uint8Array, bigint]
}

export type ElectionProviderMultiPhaseEvent = ElectionProviderMultiPhaseEvent_SolutionStored | ElectionProviderMultiPhaseEvent_ElectionFinalized | ElectionProviderMultiPhaseEvent_Rewarded | ElectionProviderMultiPhaseEvent_Slashed | ElectionProviderMultiPhaseEvent_SignedPhaseStarted | ElectionProviderMultiPhaseEvent_UnsignedPhaseStarted

/**
 *  A solution was stored with the given compute.
 * 
 *  If the solution is signed, this means that it hasn't yet been processed. If the
 *  solution is unsigned, this means that it has also been processed.
 * 
 *  The `bool` is `true` when a previous solution was ejected to make room for this one.
 */
export interface ElectionProviderMultiPhaseEvent_SolutionStored {
    __kind: 'SolutionStored'
    value: [ElectionCompute, boolean]
}

/**
 *  The election has been finalized, with `Some` of the given computation, or else if the
 *  election failed, `None`.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFinalized {
    __kind: 'ElectionFinalized'
    value: (ElectionCompute | undefined)
}

/**
 *  An account has been rewarded for their signed submission being finalized.
 */
export interface ElectionProviderMultiPhaseEvent_Rewarded {
    __kind: 'Rewarded'
    value: [Uint8Array, bigint]
}

/**
 *  An account has been slashed for submitting an invalid signed submission.
 */
export interface ElectionProviderMultiPhaseEvent_Slashed {
    __kind: 'Slashed'
    value: [Uint8Array, bigint]
}

/**
 *  The signed phase of the given round has started.
 */
export interface ElectionProviderMultiPhaseEvent_SignedPhaseStarted {
    __kind: 'SignedPhaseStarted'
    value: number
}

/**
 *  The unsigned phase of the given round has started.
 */
export interface ElectionProviderMultiPhaseEvent_UnsignedPhaseStarted {
    __kind: 'UnsignedPhaseStarted'
    value: number
}

export type GiltEvent = GiltEvent_BidPlaced | GiltEvent_BidRetracted | GiltEvent_GiltIssued | GiltEvent_GiltThawed

/**
 *  A bid was successfully placed.
 *  \[ who, amount, duration \]
 */
export interface GiltEvent_BidPlaced {
    __kind: 'BidPlaced'
    value: [Uint8Array, bigint, number]
}

/**
 *  A bid was successfully removed (before being accepted as a gilt).
 *  \[ who, amount, duration \]
 */
export interface GiltEvent_BidRetracted {
    __kind: 'BidRetracted'
    value: [Uint8Array, bigint, number]
}

/**
 *  A bid was accepted as a gilt. The balance may not be released until expiry.
 *  \[ index, expiry, who, amount \]
 */
export interface GiltEvent_GiltIssued {
    __kind: 'GiltIssued'
    value: [number, number, Uint8Array, bigint]
}

/**
 *  An expired gilt has been thawed.
 *  \[ index, who, original_amount, additional_amount \]
 */
export interface GiltEvent_GiltThawed {
    __kind: 'GiltThawed'
    value: [number, Uint8Array, bigint, bigint]
}

export type ParaInclusionEvent = ParaInclusionEvent_CandidateBacked | ParaInclusionEvent_CandidateIncluded | ParaInclusionEvent_CandidateTimedOut

/**
 *  A candidate was backed. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateBacked {
    __kind: 'CandidateBacked'
    value: [CandidateReceipt, Uint8Array, number, number]
}

/**
 *  A candidate was included. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateIncluded {
    __kind: 'CandidateIncluded'
    value: [CandidateReceipt, Uint8Array, number, number]
}

/**
 *  A candidate timed out. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateTimedOut {
    __kind: 'CandidateTimedOut'
    value: [CandidateReceipt, Uint8Array, number]
}

export type ParasEvent = ParasEvent_CurrentCodeUpdated | ParasEvent_CurrentHeadUpdated | ParasEvent_CodeUpgradeScheduled | ParasEvent_NewHeadNoted | ParasEvent_ActionQueued

/**
 *  Current code has been updated for a Para. `para_id`
 */
export interface ParasEvent_CurrentCodeUpdated {
    __kind: 'CurrentCodeUpdated'
    value: number
}

/**
 *  Current head has been updated for a Para. `para_id`
 */
export interface ParasEvent_CurrentHeadUpdated {
    __kind: 'CurrentHeadUpdated'
    value: number
}

/**
 *  A code upgrade has been scheduled for a Para. `para_id`
 */
export interface ParasEvent_CodeUpgradeScheduled {
    __kind: 'CodeUpgradeScheduled'
    value: number
}

/**
 *  A new head has been noted for a Para. `para_id`
 */
export interface ParasEvent_NewHeadNoted {
    __kind: 'NewHeadNoted'
    value: number
}

/**
 *  A para has been queued to execute pending actions. `para_id`
 */
export interface ParasEvent_ActionQueued {
    __kind: 'ActionQueued'
    value: [number, number]
}

export type UmpEvent = UmpEvent_InvalidFormat | UmpEvent_UnsupportedVersion | UmpEvent_ExecutedUpward | UmpEvent_WeightExhausted | UmpEvent_UpwardMessagesReceived | UmpEvent_OverweightEnqueued | UmpEvent_OverweightServiced

/**
 *  Upward message is invalid XCM.
 *  \[ id \]
 */
export interface UmpEvent_InvalidFormat {
    __kind: 'InvalidFormat'
    value: Uint8Array
}

/**
 *  Upward message is unsupported version of XCM.
 *  \[ id \]
 */
export interface UmpEvent_UnsupportedVersion {
    __kind: 'UnsupportedVersion'
    value: Uint8Array
}

/**
 *  Upward message executed with the given outcome.
 *  \[ id, outcome \]
 */
export interface UmpEvent_ExecutedUpward {
    __kind: 'ExecutedUpward'
    value: [Uint8Array, Outcome]
}

/**
 *  The weight limit for handling downward messages was reached.
 *  \[ id, remaining, required \]
 */
export interface UmpEvent_WeightExhausted {
    __kind: 'WeightExhausted'
    value: [Uint8Array, bigint, bigint]
}

/**
 *  Some downward messages have been received and will be processed.
 *  \[ para, count, size \]
 */
export interface UmpEvent_UpwardMessagesReceived {
    __kind: 'UpwardMessagesReceived'
    value: [number, number, number]
}

/**
 *  The weight budget was exceeded for an individual downward message.
 * 
 *  This message can be later dispatched manually using `service_overweight` dispatchable
 *  using the assigned `overweight_index`.
 * 
 *  \[ para, id, overweight_index, required \]
 */
export interface UmpEvent_OverweightEnqueued {
    __kind: 'OverweightEnqueued'
    value: [number, Uint8Array, bigint, bigint]
}

/**
 *  Downward message from the overweight queue was executed with the given actual weight
 *  used.
 * 
 *  \[ overweight_index, used \]
 */
export interface UmpEvent_OverweightServiced {
    __kind: 'OverweightServiced'
    value: [bigint, bigint]
}

export type HrmpEvent = HrmpEvent_OpenChannelRequested | HrmpEvent_OpenChannelCanceled | HrmpEvent_OpenChannelAccepted | HrmpEvent_ChannelClosed

/**
 *  Open HRMP channel requested.
 *  `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
 */
export interface HrmpEvent_OpenChannelRequested {
    __kind: 'OpenChannelRequested'
    value: [number, number, number, number]
}

/**
 *  An HRMP channel request sent by the receiver was canceled by either party.
 *  `[by_parachain, channel_id]`
 */
export interface HrmpEvent_OpenChannelCanceled {
    __kind: 'OpenChannelCanceled'
    value: [number, HrmpChannelId]
}

/**
 *  Open HRMP channel accepted. `[sender, recipient]`
 */
export interface HrmpEvent_OpenChannelAccepted {
    __kind: 'OpenChannelAccepted'
    value: [number, number]
}

/**
 *  HRMP channel closed. `[by_parachain, channel_id]`
 */
export interface HrmpEvent_ChannelClosed {
    __kind: 'ChannelClosed'
    value: [number, HrmpChannelId]
}

export type RegistrarEvent = RegistrarEvent_Registered | RegistrarEvent_Deregistered | RegistrarEvent_Reserved

export interface RegistrarEvent_Registered {
    __kind: 'Registered'
    value: [number, Uint8Array]
}

export interface RegistrarEvent_Deregistered {
    __kind: 'Deregistered'
    value: number
}

export interface RegistrarEvent_Reserved {
    __kind: 'Reserved'
    value: [number, Uint8Array]
}

export type SlotsEvent = SlotsEvent_NewLeasePeriod | SlotsEvent_Leased

/**
 *  A new `[lease_period]` is beginning.
 */
export interface SlotsEvent_NewLeasePeriod {
    __kind: 'NewLeasePeriod'
    value: number
}

/**
 *  A para has won the right to a continuous set of lease periods as a parachain.
 *  First balance is any extra amount reserved on top of the para's existing deposit.
 *  Second balance is the total amount reserved.
 *  `[parachain_id, leaser, period_begin, period_count, extra_reserved, total_amount]`
 */
export interface SlotsEvent_Leased {
    __kind: 'Leased'
    value: [number, Uint8Array, number, number, bigint, bigint]
}

export type AuctionsEvent = AuctionsEvent_AuctionStarted | AuctionsEvent_AuctionClosed | AuctionsEvent_Reserved | AuctionsEvent_Unreserved | AuctionsEvent_ReserveConfiscated | AuctionsEvent_BidAccepted | AuctionsEvent_WinningOffset

/**
 *  An auction started. Provides its index and the block number where it will begin to
 *  close and the first lease period of the quadruplet that is auctioned.
 *  `[auction_index, lease_period, ending]`
 */
export interface AuctionsEvent_AuctionStarted {
    __kind: 'AuctionStarted'
    value: [number, number, number]
}

/**
 *  An auction ended. All funds become unreserved. `[auction_index]`
 */
export interface AuctionsEvent_AuctionClosed {
    __kind: 'AuctionClosed'
    value: number
}

/**
 *  Funds were reserved for a winning bid. First balance is the extra amount reserved.
 *  Second is the total. `[bidder, extra_reserved, total_amount]`
 */
export interface AuctionsEvent_Reserved {
    __kind: 'Reserved'
    value: [Uint8Array, bigint, bigint]
}

/**
 *  Funds were unreserved since bidder is no longer active. `[bidder, amount]`
 */
export interface AuctionsEvent_Unreserved {
    __kind: 'Unreserved'
    value: [Uint8Array, bigint]
}

/**
 *  Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
 *  but no parachain slot has been leased.
 *  `[parachain_id, leaser, amount]`
 */
export interface AuctionsEvent_ReserveConfiscated {
    __kind: 'ReserveConfiscated'
    value: [number, Uint8Array, bigint]
}

/**
 *  A new bid has been accepted as the current winner.
 *  `[who, para_id, amount, first_slot, last_slot]`
 */
export interface AuctionsEvent_BidAccepted {
    __kind: 'BidAccepted'
    value: [Uint8Array, number, bigint, number, number]
}

/**
 *  The winning offset was chosen for an auction. This will map into the `Winning` storage map.
 *  `[auction_index, block_number]`
 */
export interface AuctionsEvent_WinningOffset {
    __kind: 'WinningOffset'
    value: [number, number]
}

export type CrowdloanEvent = CrowdloanEvent_Created | CrowdloanEvent_Contributed | CrowdloanEvent_Withdrew | CrowdloanEvent_PartiallyRefunded | CrowdloanEvent_AllRefunded | CrowdloanEvent_Dissolved | CrowdloanEvent_HandleBidResult | CrowdloanEvent_Edited | CrowdloanEvent_MemoUpdated | CrowdloanEvent_AddedToNewRaise

/**
 *  Create a new crowdloaning campaign. `[fund_index]`
 */
export interface CrowdloanEvent_Created {
    __kind: 'Created'
    value: number
}

/**
 *  Contributed to a crowd sale. `[who, fund_index, amount]`
 */
export interface CrowdloanEvent_Contributed {
    __kind: 'Contributed'
    value: [Uint8Array, number, bigint]
}

/**
 *  Withdrew full balance of a contributor. `[who, fund_index, amount]`
 */
export interface CrowdloanEvent_Withdrew {
    __kind: 'Withdrew'
    value: [Uint8Array, number, bigint]
}

/**
 *  The loans in a fund have been partially dissolved, i.e. there are some left
 *  over child keys that still need to be killed. `[fund_index]`
 */
export interface CrowdloanEvent_PartiallyRefunded {
    __kind: 'PartiallyRefunded'
    value: number
}

/**
 *  All loans in a fund have been refunded. `[fund_index]`
 */
export interface CrowdloanEvent_AllRefunded {
    __kind: 'AllRefunded'
    value: number
}

/**
 *  Fund is dissolved. `[fund_index]`
 */
export interface CrowdloanEvent_Dissolved {
    __kind: 'Dissolved'
    value: number
}

/**
 *  The result of trying to submit a new bid to the Slots pallet.
 */
export interface CrowdloanEvent_HandleBidResult {
    __kind: 'HandleBidResult'
    value: [number, DispatchResult]
}

/**
 *  The configuration to a crowdloan has been edited. `[fund_index]`
 */
export interface CrowdloanEvent_Edited {
    __kind: 'Edited'
    value: number
}

/**
 *  A memo has been updated. `[who, fund_index, memo]`
 */
export interface CrowdloanEvent_MemoUpdated {
    __kind: 'MemoUpdated'
    value: [Uint8Array, number, Uint8Array]
}

/**
 *  A parachain has been moved to `NewRaise`
 */
export interface CrowdloanEvent_AddedToNewRaise {
    __kind: 'AddedToNewRaise'
    value: number
}

export type XcmPalletEvent = XcmPalletEvent_Attempted | XcmPalletEvent_Sent

export interface XcmPalletEvent_Attempted {
    __kind: 'Attempted'
    value: Outcome
}

export interface XcmPalletEvent_Sent {
    __kind: 'Sent'
    value: [MultiLocation, MultiLocation, Xcm]
}

export type JunctionV0 = JunctionV0_Parent | JunctionV0_Parachain | JunctionV0_AccountId32 | JunctionV0_AccountIndex64 | JunctionV0_AccountKey20 | JunctionV0_PalletInstance | JunctionV0_GeneralIndex | JunctionV0_GeneralKey | JunctionV0_OnlyChild | JunctionV0_Plurality

export interface JunctionV0_Parent {
    __kind: 'Parent'
}

export interface JunctionV0_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface JunctionV0_AccountId32 {
    __kind: 'AccountId32'
    network: NetworkId
    id: Uint8Array
}

export interface JunctionV0_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: NetworkId
    index: bigint
}

export interface JunctionV0_AccountKey20 {
    __kind: 'AccountKey20'
    network: NetworkId
    key: Uint8Array
}

export interface JunctionV0_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface JunctionV0_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface JunctionV0_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface JunctionV0_OnlyChild {
    __kind: 'OnlyChild'
}

export interface JunctionV0_Plurality {
    __kind: 'Plurality'
    id: BodyId
    part: BodyPart
}

export type JunctionsV1 = JunctionsV1_Here | JunctionsV1_X1 | JunctionsV1_X2 | JunctionsV1_X3 | JunctionsV1_X4 | JunctionsV1_X5 | JunctionsV1_X6 | JunctionsV1_X7 | JunctionsV1_X8

export interface JunctionsV1_Here {
    __kind: 'Here'
}

export interface JunctionsV1_X1 {
    __kind: 'X1'
    value: JunctionV1
}

export interface JunctionsV1_X2 {
    __kind: 'X2'
    value: [JunctionV1, JunctionV1]
}

export interface JunctionsV1_X3 {
    __kind: 'X3'
    value: [JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X4 {
    __kind: 'X4'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X5 {
    __kind: 'X5'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X6 {
    __kind: 'X6'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X7 {
    __kind: 'X7'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X8 {
    __kind: 'X8'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface NextConfigDescriptorV1 {
    c: [bigint, bigint]
    allowedSlots: AllowedSlots
}

export interface Digest {
    logs: DigestItem[]
}

export type GrandpaEquivocation = GrandpaEquivocation_Prevote | GrandpaEquivocation_Precommit

export interface GrandpaEquivocation_Prevote {
    __kind: 'Prevote'
    value: GrandpaEquivocationValue
}

export interface GrandpaEquivocation_Precommit {
    __kind: 'Precommit'
    value: GrandpaEquivocationValue
}

export interface OpaqueNetworkState {
    peerId: Uint8Array
    externalAddresses: Uint8Array[]
}

export interface AccountVoteStandard {
    vote: number
    balance: bigint
}

export interface AccountVoteSplit {
    aye: bigint
    nay: bigint
}

export interface CompactAssignmentsWith24 {
    votes1: [number, number][]
    votes2: [number, [number, number], number][]
    votes3: [number, [number, number][], number][]
    votes4: [number, [number, number][], number][]
    votes5: [number, [number, number][], number][]
    votes6: [number, [number, number][], number][]
    votes7: [number, [number, number][], number][]
    votes8: [number, [number, number][], number][]
    votes9: [number, [number, number][], number][]
    votes10: [number, [number, number][], number][]
    votes11: [number, [number, number][], number][]
    votes12: [number, [number, number][], number][]
    votes13: [number, [number, number][], number][]
    votes14: [number, [number, number][], number][]
    votes15: [number, [number, number][], number][]
    votes16: [number, [number, number][], number][]
    votes17: [number, [number, number][], number][]
    votes18: [number, [number, number][], number][]
    votes19: [number, [number, number][], number][]
    votes20: [number, [number, number][], number][]
    votes21: [number, [number, number][], number][]
    votes22: [number, [number, number][], number][]
    votes23: [number, [number, number][], number][]
    votes24: [number, [number, number][], number][]
}

export interface SignedAvailabilityBitfield {
    payload: Uint8Array
    validatorIndex: number
    signature: Uint8Array
}

export interface BackedCandidate {
    candidate: CommittedCandidateReceipt
    validityVotes: ValidityAttestation[]
    validatorIndices: Uint8Array
}

export interface DisputeStatementSet {
    candidateHash: Uint8Array
    session: number
    statements: [DisputeStatement, number, Uint8Array][]
}

export type XcmV0 = XcmV0_WithdrawAsset | XcmV0_ReserveAssetDeposit | XcmV0_ReceiveTeleportedAsset | XcmV0_QueryResponse | XcmV0_TransferAsset | XcmV0_TransferReserveAsset | XcmV0_Transact | XcmV0_HrmpNewChannelOpenRequest | XcmV0_HrmpChannelAccepted | XcmV0_HrmpChannelClosing | XcmV0_RelayedFrom

export interface XcmV0_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: MultiAssetV0[]
    effects: XcmOrderV0[]
}

export interface XcmV0_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: MultiAssetV0[]
    effects: XcmOrderV0[]
}

export interface XcmV0_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: MultiAssetV0[]
    effects: XcmOrderV0[]
}

export interface XcmV0_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: ResponseV0
}

export interface XcmV0_TransferAsset {
    __kind: 'TransferAsset'
    assets: MultiAssetV0[]
    dest: MultiLocationV0
}

export interface XcmV0_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: MultiAssetV0[]
    dest: MultiLocationV0
    effects: XcmOrderV0[]
}

export interface XcmV0_Transact {
    __kind: 'Transact'
    originType: XcmOriginKind
    requireWeightAtMost: bigint
    call: DoubleEncodedCall
}

export interface XcmV0_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface XcmV0_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface XcmV0_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface XcmV0_RelayedFrom {
    __kind: 'RelayedFrom'
    who: MultiLocationV0
    message: XcmV0
}

export type XcmV1 = XcmV1_WithdrawAsset | XcmV1_ReserveAssetDeposit | XcmV1_ReceiveTeleportedAsset | XcmV1_QueryResponse | XcmV1_TransferAsset | XcmV1_TransferReserveAsset | XcmV1_Transact | XcmV1_HrmpNewChannelOpenRequest | XcmV1_HrmpChannelAccepted | XcmV1_HrmpChannelClosing | XcmV1_RelayedFrom

export interface XcmV1_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: MultiAssetV1[]
    effects: XcmOrderV1[]
}

export interface XcmV1_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: MultiAssetV1[]
    effects: XcmOrderV1[]
}

export interface XcmV1_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: MultiAssetV1[]
    effects: XcmOrderV1[]
}

export interface XcmV1_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: ResponseV1
}

export interface XcmV1_TransferAsset {
    __kind: 'TransferAsset'
    assets: MultiAssetV1[]
    dest: MultiLocationV1
}

export interface XcmV1_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: MultiAssetV1[]
    dest: MultiLocationV1
    effects: XcmOrderV1[]
}

export interface XcmV1_Transact {
    __kind: 'Transact'
    originType: XcmOriginKind
    requireWeightAtMost: bigint
    call: DoubleEncodedCall
}

export interface XcmV1_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface XcmV1_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface XcmV1_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface XcmV1_RelayedFrom {
    __kind: 'RelayedFrom'
    who: MultiLocationV1
    message: XcmV1
}

export type InstructionV2 = InstructionV2_WithdrawAsset | InstructionV2_ReserveAssetDeposited | InstructionV2_ReceiveTeleportedAsset | InstructionV2_QueryResponse | InstructionV2_TransferAsset | InstructionV2_TransferReserveAsset | InstructionV2_Transact | InstructionV2_HrmpNewChannelOpenRequest | InstructionV2_HrmpChannelAccepted | InstructionV2_HrmpChannelClosing | InstructionV2_ClearOrigin | InstructionV2_DescendOrigin | InstructionV2_ReportError | InstructionV2_DepositAsset | InstructionV2_DepositReserveAsset | InstructionV2_ExchangeAsset | InstructionV2_InitiateReserveWithdraw | InstructionV2_InitiateTeleport | InstructionV2_QueryHolding | InstructionV2_BuyExecution | InstructionV2_RefundSurplus | InstructionV2_SetErrorHandler | InstructionV2_SetAppendix | InstructionV2_ClearError | InstructionV2_ClaimAsset | InstructionV2_Trap

export interface InstructionV2_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: MultiAssetV1[]
}

export interface InstructionV2_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: MultiAssetV1[]
}

export interface InstructionV2_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: MultiAssetV1[]
}

export interface InstructionV2_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: ResponseV2
    maxWeight: bigint
}

export interface InstructionV2_TransferAsset {
    __kind: 'TransferAsset'
    assets: MultiAssetV1[]
    beneficiary: MultiLocationV2
}

export interface InstructionV2_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: MultiAssetV1[]
    dest: MultiLocationV2
    xcm: InstructionV2[]
}

export interface InstructionV2_Transact {
    __kind: 'Transact'
    originType: OriginKindV2
    requireWeightAtMost: bigint
    call: DoubleEncodedCall
}

export interface InstructionV2_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface InstructionV2_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface InstructionV2_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface InstructionV2_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface InstructionV2_DescendOrigin {
    __kind: 'DescendOrigin'
    value: InteriorMultiLocation
}

export interface InstructionV2_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: MultiLocationV2
    maxResponseWeight: bigint
}

export interface InstructionV2_DepositAsset {
    __kind: 'DepositAsset'
    assets: MultiAssetFilterV2
    maxAssets: number
    beneficiary: MultiLocationV2
}

export interface InstructionV2_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: MultiAssetFilterV2
    maxAssets: number
    dest: MultiLocationV2
    xcm: InstructionV2[]
}

export interface InstructionV2_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: MultiAssetFilterV2
    receive: MultiAssetV1[]
}

export interface InstructionV2_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: MultiAssetFilterV2
    reserve: MultiLocationV2
    xcm: InstructionV2[]
}

export interface InstructionV2_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: MultiAssetFilterV2
    dest: MultiLocationV2
    xcm: InstructionV2[]
}

export interface InstructionV2_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: MultiLocationV2
    assets: MultiAssetFilterV2
    maxResponseWeight: bigint
}

export interface InstructionV2_BuyExecution {
    __kind: 'BuyExecution'
    fees: MultiAssetV2
    weightLimit: WeightLimitV2
}

export interface InstructionV2_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface InstructionV2_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: InstructionV2[]
}

export interface InstructionV2_SetAppendix {
    __kind: 'SetAppendix'
    value: InstructionV2[]
}

export interface InstructionV2_ClearError {
    __kind: 'ClearError'
}

export interface InstructionV2_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: MultiAssetV1[]
    ticket: MultiLocationV2
}

export interface InstructionV2_Trap {
    __kind: 'Trap'
    value: bigint
}

export type MultiAssetV0 = MultiAssetV0_None | MultiAssetV0_All | MultiAssetV0_AllFungible | MultiAssetV0_AllNonFungible | MultiAssetV0_AllAbstractFungible | MultiAssetV0_AllAbstractNonFungible | MultiAssetV0_AllConcreteFungible | MultiAssetV0_AllConcreteNonFungible | MultiAssetV0_AbstractFungible | MultiAssetV0_AbstractNonFungible | MultiAssetV0_ConcreteFungible | MultiAssetV0_ConcreteNonFungible

export interface MultiAssetV0_None {
    __kind: 'None'
}

export interface MultiAssetV0_All {
    __kind: 'All'
}

export interface MultiAssetV0_AllFungible {
    __kind: 'AllFungible'
}

export interface MultiAssetV0_AllNonFungible {
    __kind: 'AllNonFungible'
}

export interface MultiAssetV0_AllAbstractFungible {
    __kind: 'AllAbstractFungible'
    value: Uint8Array
}

export interface MultiAssetV0_AllAbstractNonFungible {
    __kind: 'AllAbstractNonFungible'
    value: Uint8Array
}

export interface MultiAssetV0_AllConcreteFungible {
    __kind: 'AllConcreteFungible'
    value: MultiLocationV0
}

export interface MultiAssetV0_AllConcreteNonFungible {
    __kind: 'AllConcreteNonFungible'
    value: MultiLocationV0
}

export interface MultiAssetV0_AbstractFungible {
    __kind: 'AbstractFungible'
    id: Uint8Array
    instance: bigint
}

export interface MultiAssetV0_AbstractNonFungible {
    __kind: 'AbstractNonFungible'
    class: Uint8Array
    instance: AssetInstanceV0
}

export interface MultiAssetV0_ConcreteFungible {
    __kind: 'ConcreteFungible'
    id: MultiLocationV0
    amount: bigint
}

export interface MultiAssetV0_ConcreteNonFungible {
    __kind: 'ConcreteNonFungible'
    class: MultiLocationV0
    instance: AssetInstanceV0
}

export interface MultiAssetV1 {
    id: XcmAssetId
    fungibility: FungibilityV1
}

export interface MultiLocation {
    parents: number
    interior: JunctionsV1
}

export interface DispatchInfo {
    weight: bigint
    class: DispatchClass
    paysFee: Pays
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_Token | DispatchError_Arithmetic

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: DispatchErrorModule
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export interface FullIdentification {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

export type VoteThreshold = VoteThreshold_SuperMajorityApprove | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SimpleMajority

export interface VoteThreshold_SuperMajorityApprove {
    __kind: 'SuperMajorityApprove'
}

export interface VoteThreshold_SuperMajorityAgainst {
    __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SimpleMajority {
    __kind: 'SimpleMajority'
}

export type DispatchResult = DispatchResult_Ok | DispatchResult_Err

export interface DispatchResult_Ok {
    __kind: 'Ok'
}

export interface DispatchResult_Err {
    __kind: 'Err'
    value: DispatchError
}

export type ElectionCompute = ElectionCompute_OnChain | ElectionCompute_Signed | ElectionCompute_Unsigned

export interface ElectionCompute_OnChain {
    __kind: 'OnChain'
}

export interface ElectionCompute_Signed {
    __kind: 'Signed'
}

export interface ElectionCompute_Unsigned {
    __kind: 'Unsigned'
}

export interface CandidateReceipt {
    descriptor: CandidateDescriptor
    commitmentsHash: Uint8Array
}

export type Outcome = Outcome_Complete | Outcome_Incomplete | Outcome_Error

export interface Outcome_Complete {
    __kind: 'Complete'
    value: bigint
}

export interface Outcome_Incomplete {
    __kind: 'Incomplete'
    value: [bigint, XcmErrorV0]
}

export interface Outcome_Error {
    __kind: 'Error'
    value: XcmErrorV0
}

export type Xcm = Xcm_WithdrawAsset | Xcm_ReserveAssetDeposit | Xcm_ReceiveTeleportedAsset | Xcm_QueryResponse | Xcm_TransferAsset | Xcm_TransferReserveAsset | Xcm_Transact | Xcm_HrmpNewChannelOpenRequest | Xcm_HrmpChannelAccepted | Xcm_HrmpChannelClosing | Xcm_RelayedFrom

export interface Xcm_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: MultiAssetV1[]
    effects: XcmOrderV1[]
}

export interface Xcm_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: MultiAssetV1[]
    effects: XcmOrderV1[]
}

export interface Xcm_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: MultiAssetV1[]
    effects: XcmOrderV1[]
}

export interface Xcm_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: ResponseV1
}

export interface Xcm_TransferAsset {
    __kind: 'TransferAsset'
    assets: MultiAssetV1[]
    dest: MultiLocationV1
}

export interface Xcm_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: MultiAssetV1[]
    dest: MultiLocationV1
    effects: XcmOrderV1[]
}

export interface Xcm_Transact {
    __kind: 'Transact'
    originType: XcmOriginKind
    requireWeightAtMost: bigint
    call: DoubleEncodedCall
}

export interface Xcm_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Xcm_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Xcm_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Xcm_RelayedFrom {
    __kind: 'RelayedFrom'
    who: MultiLocationV1
    message: XcmV1
}

export type NetworkId = NetworkId_Any | NetworkId_Named | NetworkId_Polkadot | NetworkId_Kusama

export interface NetworkId_Any {
    __kind: 'Any'
}

export interface NetworkId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface NetworkId_Kusama {
    __kind: 'Kusama'
}

export type BodyId = BodyId_Unit | BodyId_Named | BodyId_Index | BodyId_Executive | BodyId_Technical | BodyId_Legislative | BodyId_Judicial

export interface BodyId_Unit {
    __kind: 'Unit'
}

export interface BodyId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface BodyId_Executive {
    __kind: 'Executive'
}

export interface BodyId_Technical {
    __kind: 'Technical'
}

export interface BodyId_Legislative {
    __kind: 'Legislative'
}

export interface BodyId_Judicial {
    __kind: 'Judicial'
}

export type BodyPart = BodyPart_Voice | BodyPart_Members | BodyPart_Fraction | BodyPart_AtLeastProportion | BodyPart_MoreThanProportion

export interface BodyPart_Voice {
    __kind: 'Voice'
}

export interface BodyPart_Members {
    __kind: 'Members'
    value: number
}

export interface BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export type JunctionV1 = JunctionV1_Parachain | JunctionV1_AccountId32 | JunctionV1_AccountIndex64 | JunctionV1_AccountKey20 | JunctionV1_PalletInstance | JunctionV1_GeneralIndex | JunctionV1_GeneralKey | JunctionV1_OnlyChild | JunctionV1_Plurality

export interface JunctionV1_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface JunctionV1_AccountId32 {
    __kind: 'AccountId32'
    network: NetworkId
    id: Uint8Array
}

export interface JunctionV1_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: NetworkId
    index: bigint
}

export interface JunctionV1_AccountKey20 {
    __kind: 'AccountKey20'
    network: NetworkId
    key: Uint8Array
}

export interface JunctionV1_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface JunctionV1_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface JunctionV1_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface JunctionV1_OnlyChild {
    __kind: 'OnlyChild'
}

export interface JunctionV1_Plurality {
    __kind: 'Plurality'
    id: BodyId
    part: BodyPart
}

export type AllowedSlots = AllowedSlots_PrimarySlots | AllowedSlots_PrimaryAndSecondaryPlainSlots | AllowedSlots_PrimaryAndSecondaryVRFSlots

export interface AllowedSlots_PrimarySlots {
    __kind: 'PrimarySlots'
}

export interface AllowedSlots_PrimaryAndSecondaryPlainSlots {
    __kind: 'PrimaryAndSecondaryPlainSlots'
}

export interface AllowedSlots_PrimaryAndSecondaryVRFSlots {
    __kind: 'PrimaryAndSecondaryVRFSlots'
}

export type DigestItem = DigestItem_Other | DigestItem_AuthoritiesChange | DigestItem_ChangesTrieRoot | DigestItem_SealV0 | DigestItem_Consensus | DigestItem_Seal | DigestItem_PreRuntime | DigestItem_ChangesTrieSignal | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_Other {
    __kind: 'Other'
    value: Uint8Array
}

export interface DigestItem_AuthoritiesChange {
    __kind: 'AuthoritiesChange'
    value: Uint8Array[]
}

export interface DigestItem_ChangesTrieRoot {
    __kind: 'ChangesTrieRoot'
    value: Uint8Array
}

export interface DigestItem_SealV0 {
    __kind: 'SealV0'
    value: [bigint, Uint8Array]
}

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_ChangesTrieSignal {
    __kind: 'ChangesTrieSignal'
    value: ChangesTrieSignal
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface GrandpaEquivocationValue {
    roundNumber: bigint
    identity: Uint8Array
    first: [GrandpaPrevote, Uint8Array]
    second: [GrandpaPrevote, Uint8Array]
}

export interface CommittedCandidateReceipt {
    descriptor: CandidateDescriptor
    commitments: CandidateCommitments
}

export type ValidityAttestation = ValidityAttestation_Never | ValidityAttestation_Implicit | ValidityAttestation_Explicit

export interface ValidityAttestation_Never {
    __kind: 'Never'
}

export interface ValidityAttestation_Implicit {
    __kind: 'Implicit'
    value: Uint8Array
}

export interface ValidityAttestation_Explicit {
    __kind: 'Explicit'
    value: Uint8Array
}

export type DisputeStatement = DisputeStatement_Valid | DisputeStatement_Invalid

export interface DisputeStatement_Valid {
    __kind: 'Valid'
    value: ValidDisputeStatementKind
}

export interface DisputeStatement_Invalid {
    __kind: 'Invalid'
    value: InvalidDisputeStatementKind
}

export type XcmOrderV0 = XcmOrderV0_Null | XcmOrderV0_DepositAsset | XcmOrderV0_DepositReserveAsset | XcmOrderV0_ExchangeAsset | XcmOrderV0_InitiateReserveWithdraw | XcmOrderV0_InitiateTeleport | XcmOrderV0_QueryHolding | XcmOrderV0_BuyExecution

export interface XcmOrderV0_Null {
    __kind: 'Null'
}

export interface XcmOrderV0_DepositAsset {
    __kind: 'DepositAsset'
    assets: MultiAssetV0[]
    dest: MultiLocationV0
}

export interface XcmOrderV0_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: MultiAssetV0[]
    dest: MultiLocationV0
    effects: XcmOrderV0[]
}

export interface XcmOrderV0_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: MultiAssetV0[]
    receive: MultiAssetV0[]
}

export interface XcmOrderV0_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: MultiAssetV0[]
    reserve: MultiLocationV0
    effects: XcmOrderV0[]
}

export interface XcmOrderV0_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: MultiAsset[]
    dest: MultiLocationV0
    effects: XcmOrderV0[]
}

export interface XcmOrderV0_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: MultiLocationV0
    assets: MultiAssetV0[]
}

export interface XcmOrderV0_BuyExecution {
    __kind: 'BuyExecution'
    fees: MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    xcm: XcmV0[]
}

export type ResponseV0 = ResponseV0_Assets

export interface ResponseV0_Assets {
    __kind: 'Assets'
    value: MultiAssetV0[]
}

export type XcmOriginKind = XcmOriginKind_Native | XcmOriginKind_SovereignAccount | XcmOriginKind_Superuser | XcmOriginKind_Xcm

export interface XcmOriginKind_Native {
    __kind: 'Native'
}

export interface XcmOriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface XcmOriginKind_Superuser {
    __kind: 'Superuser'
}

export interface XcmOriginKind_Xcm {
    __kind: 'Xcm'
}

export interface DoubleEncodedCall {
    encoded: Uint8Array
}

export type XcmOrderV1 = XcmOrderV1_Noop | XcmOrderV1_DepositAsset | XcmOrderV1_DepositReserveAsset | XcmOrderV1_ExchangeAsset | XcmOrderV1_InitiateReserveWithdraw | XcmOrderV1_InitiateTeleport | XcmOrderV1_QueryHolding | XcmOrderV1_BuyExecution

export interface XcmOrderV1_Noop {
    __kind: 'Noop'
}

export interface XcmOrderV1_DepositAsset {
    __kind: 'DepositAsset'
    assets: MultiAssetFilterV1
    maxAssets: number
    beneficiary: MultiLocationV1
}

export interface XcmOrderV1_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: MultiAssetFilterV1
    maxAssets: number
    dest: MultiLocationV1
    effects: XcmOrderV1[]
}

export interface XcmOrderV1_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: MultiAssetFilterV1
    receive: MultiAssetV1[]
}

export interface XcmOrderV1_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: MultiAssetFilterV1
    reserve: MultiLocationV1
    effects: XcmOrderV1[]
}

export interface XcmOrderV1_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: MultiAssetFilterV1
    dest: MultiLocationV1
    effects: XcmOrderV1[]
}

export interface XcmOrderV1_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: MultiLocationV1
    assets: MultiAssetFilterV1
}

export interface XcmOrderV1_BuyExecution {
    __kind: 'BuyExecution'
    fees: MultiAssetV1
    weight: bigint
    debt: bigint
    haltOnError: boolean
    instructions: XcmV1[]
}

export type ResponseV1 = ResponseV1_Assets

export interface ResponseV1_Assets {
    __kind: 'Assets'
    value: MultiAssetV1[]
}

export type ResponseV2 = ResponseV2_Null | ResponseV2_Assets | ResponseV2_ExecutionResult

export interface ResponseV2_Null {
    __kind: 'Null'
}

export interface ResponseV2_Assets {
    __kind: 'Assets'
    value: MultiAssetV1[]
}

export interface ResponseV2_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ResponseV2Result
}

export type OriginKindV2 = OriginKindV2_Native | OriginKindV2_SovereignAccount | OriginKindV2_Superuser | OriginKindV2_Xcm

export interface OriginKindV2_Native {
    __kind: 'Native'
}

export interface OriginKindV2_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface OriginKindV2_Superuser {
    __kind: 'Superuser'
}

export interface OriginKindV2_Xcm {
    __kind: 'Xcm'
}

export type InteriorMultiLocation = InteriorMultiLocation_Here | InteriorMultiLocation_X1 | InteriorMultiLocation_X2 | InteriorMultiLocation_X3 | InteriorMultiLocation_X4 | InteriorMultiLocation_X5 | InteriorMultiLocation_X6 | InteriorMultiLocation_X7 | InteriorMultiLocation_X8

export interface InteriorMultiLocation_Here {
    __kind: 'Here'
}

export interface InteriorMultiLocation_X1 {
    __kind: 'X1'
    value: JunctionV1
}

export interface InteriorMultiLocation_X2 {
    __kind: 'X2'
    value: [JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X3 {
    __kind: 'X3'
    value: [JunctionV1, JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X4 {
    __kind: 'X4'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X5 {
    __kind: 'X5'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X6 {
    __kind: 'X6'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X7 {
    __kind: 'X7'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X8 {
    __kind: 'X8'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export type MultiAssetFilterV2 = MultiAssetFilterV2_Definite | MultiAssetFilterV2_Wild

export interface MultiAssetFilterV2_Definite {
    __kind: 'Definite'
    value: MultiAssetV1[]
}

export interface MultiAssetFilterV2_Wild {
    __kind: 'Wild'
    value: WildMultiAssetV1
}

export interface MultiAssetV2 {
    id: XcmAssetId
    fungibility: FungibilityV1
}

export type WeightLimitV2 = WeightLimitV2_Unlimited | WeightLimitV2_Limited

export interface WeightLimitV2_Unlimited {
    __kind: 'Unlimited'
}

export interface WeightLimitV2_Limited {
    __kind: 'Limited'
    value: bigint
}

export type AssetInstanceV0 = AssetInstanceV0_Undefined | AssetInstanceV0_Index8 | AssetInstanceV0_Index16 | AssetInstanceV0_Index32 | AssetInstanceV0_Index64 | AssetInstanceV0_Index128 | AssetInstanceV0_Array4 | AssetInstanceV0_Array8 | AssetInstanceV0_Array16 | AssetInstanceV0_Array32 | AssetInstanceV0_Blob

export interface AssetInstanceV0_Undefined {
    __kind: 'Undefined'
}

export interface AssetInstanceV0_Index8 {
    __kind: 'Index8'
    value: number
}

export interface AssetInstanceV0_Index16 {
    __kind: 'Index16'
    value: number
}

export interface AssetInstanceV0_Index32 {
    __kind: 'Index32'
    value: number
}

export interface AssetInstanceV0_Index64 {
    __kind: 'Index64'
    value: bigint
}

export interface AssetInstanceV0_Index128 {
    __kind: 'Index128'
    value: bigint
}

export interface AssetInstanceV0_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface AssetInstanceV0_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface AssetInstanceV0_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface AssetInstanceV0_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface AssetInstanceV0_Blob {
    __kind: 'Blob'
    value: Uint8Array
}

export type XcmAssetId = XcmAssetId_Concrete | XcmAssetId_Abstract

export interface XcmAssetId_Concrete {
    __kind: 'Concrete'
    value: MultiLocation
}

export interface XcmAssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type FungibilityV1 = FungibilityV1_Fungible | FungibilityV1_NonFungible

export interface FungibilityV1_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface FungibilityV1_NonFungible {
    __kind: 'NonFungible'
    value: AssetInstanceV1
}

export type DispatchClass = DispatchClass_Normal | DispatchClass_Operational | DispatchClass_Mandatory

export interface DispatchClass_Normal {
    __kind: 'Normal'
}

export interface DispatchClass_Operational {
    __kind: 'Operational'
}

export interface DispatchClass_Mandatory {
    __kind: 'Mandatory'
}

export type Pays = Pays_Yes | Pays_No

export interface Pays_Yes {
    __kind: 'Yes'
}

export interface Pays_No {
    __kind: 'No'
}

export interface DispatchErrorModule {
    index: number
    error: number
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Underflow | TokenError_Overflow

export interface TokenError_NoFunds {
    __kind: 'NoFunds'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_Underflow {
    __kind: 'Underflow'
}

export interface TokenError_Overflow {
    __kind: 'Overflow'
}

export type ArithmeticError = ArithmeticError_Underflow | ArithmeticError_Overflow | ArithmeticError_DivisionByZero

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export interface IndividualExposure {
    who: Uint8Array
    value: bigint
}

export interface CandidateDescriptor {
    paraId: number
    relayParent: Uint8Array
    collatorId: Uint8Array
    persistedValidationDataHash: Uint8Array
    povHash: Uint8Array
    erasureRoot: Uint8Array
    signature: Uint8Array
    paraHead: Uint8Array
    validationCodeHash: Uint8Array
}

export type XcmErrorV0 = XcmErrorV0_Undefined | XcmErrorV0_Overflow | XcmErrorV0_Unimplemented | XcmErrorV0_UnhandledXcmVersion | XcmErrorV0_UnhandledXcmMessage | XcmErrorV0_UnhandledEffect | XcmErrorV0_EscalationOfPrivilege | XcmErrorV0_UntrustedReserveLocation | XcmErrorV0_UntrustedTeleportLocation | XcmErrorV0_DestinationBufferOverflow | XcmErrorV0_SendFailed | XcmErrorV0_CannotReachDestination | XcmErrorV0_MultiLocationFull | XcmErrorV0_FailedToDecode | XcmErrorV0_BadOrigin | XcmErrorV0_ExceedsMaxMessageSize | XcmErrorV0_FailedToTransactAsset | XcmErrorV0_WeightLimitReached | XcmErrorV0_Wildcard | XcmErrorV0_TooMuchWeightRequired | XcmErrorV0_NotHoldingFees | XcmErrorV0_WeightNotComputable | XcmErrorV0_Barrier | XcmErrorV0_NotWithdrawable | XcmErrorV0_LocationCannotHold | XcmErrorV0_TooExpensive | XcmErrorV0_AssetNotFound | XcmErrorV0_RecursionLimitReached

export interface XcmErrorV0_Undefined {
    __kind: 'Undefined'
}

export interface XcmErrorV0_Overflow {
    __kind: 'Overflow'
}

export interface XcmErrorV0_Unimplemented {
    __kind: 'Unimplemented'
}

export interface XcmErrorV0_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface XcmErrorV0_UnhandledXcmMessage {
    __kind: 'UnhandledXcmMessage'
}

export interface XcmErrorV0_UnhandledEffect {
    __kind: 'UnhandledEffect'
}

export interface XcmErrorV0_EscalationOfPrivilege {
    __kind: 'EscalationOfPrivilege'
}

export interface XcmErrorV0_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface XcmErrorV0_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface XcmErrorV0_DestinationBufferOverflow {
    __kind: 'DestinationBufferOverflow'
}

export interface XcmErrorV0_SendFailed {
    __kind: 'SendFailed'
}

export interface XcmErrorV0_CannotReachDestination {
    __kind: 'CannotReachDestination'
    value: [MultiLocation, Xcm]
}

export interface XcmErrorV0_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface XcmErrorV0_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface XcmErrorV0_BadOrigin {
    __kind: 'BadOrigin'
}

export interface XcmErrorV0_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface XcmErrorV0_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface XcmErrorV0_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface XcmErrorV0_Wildcard {
    __kind: 'Wildcard'
}

export interface XcmErrorV0_TooMuchWeightRequired {
    __kind: 'TooMuchWeightRequired'
}

export interface XcmErrorV0_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface XcmErrorV0_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export interface XcmErrorV0_Barrier {
    __kind: 'Barrier'
}

export interface XcmErrorV0_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface XcmErrorV0_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface XcmErrorV0_TooExpensive {
    __kind: 'TooExpensive'
}

export interface XcmErrorV0_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface XcmErrorV0_RecursionLimitReached {
    __kind: 'RecursionLimitReached'
}

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
    __kind: 'NewConfiguration'
    value: (ChangesTrieConfiguration | undefined)
}

export interface GrandpaPrevote {
    targetHash: Uint8Array
    targetNumber: number
}

export interface CandidateCommitments {
    upwardMessages: Uint8Array[]
    horizontalMessages: OutboundHrmpMessage[]
    newValidationCode: (Uint8Array | undefined)
    headData: Uint8Array
    processedDownwardMessages: number
    hrmpWatermark: number
}

export type ValidDisputeStatementKind = ValidDisputeStatementKind_Explicit | ValidDisputeStatementKind_BackingSeconded | ValidDisputeStatementKind_BackingValid | ValidDisputeStatementKind_ApprovalChecking

export interface ValidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export interface ValidDisputeStatementKind_BackingSeconded {
    __kind: 'BackingSeconded'
    value: Uint8Array
}

export interface ValidDisputeStatementKind_BackingValid {
    __kind: 'BackingValid'
    value: Uint8Array
}

export interface ValidDisputeStatementKind_ApprovalChecking {
    __kind: 'ApprovalChecking'
}

export type InvalidDisputeStatementKind = InvalidDisputeStatementKind_Explicit

export interface InvalidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export interface MultiAsset {
    id: XcmAssetId
    fungibility: FungibilityV1
}

export type MultiAssetFilterV1 = MultiAssetFilterV1_Definite | MultiAssetFilterV1_Wild

export interface MultiAssetFilterV1_Definite {
    __kind: 'Definite'
    value: MultiAssetV1[]
}

export interface MultiAssetFilterV1_Wild {
    __kind: 'Wild'
    value: WildMultiAssetV1
}

export type ResponseV2Result = ResponseV2Result_Ok | ResponseV2Result_Err

export interface ResponseV2Result_Ok {
    __kind: 'Ok'
}

export interface ResponseV2Result_Err {
    __kind: 'Err'
    value: [number, XcmErrorV2]
}

export type WildMultiAssetV1 = WildMultiAssetV1_All | WildMultiAssetV1_AllOf

export interface WildMultiAssetV1_All {
    __kind: 'All'
}

export interface WildMultiAssetV1_AllOf {
    __kind: 'AllOf'
    id: XcmAssetId
    fungibility: WildFungibilityV1
}

export type AssetInstanceV1 = AssetInstanceV1_Undefined | AssetInstanceV1_Index | AssetInstanceV1_Array4 | AssetInstanceV1_Array8 | AssetInstanceV1_Array16 | AssetInstanceV1_Array32 | AssetInstanceV1_Blob

export interface AssetInstanceV1_Undefined {
    __kind: 'Undefined'
}

export interface AssetInstanceV1_Index {
    __kind: 'Index'
    value: bigint
}

export interface AssetInstanceV1_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface AssetInstanceV1_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface AssetInstanceV1_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface AssetInstanceV1_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface AssetInstanceV1_Blob {
    __kind: 'Blob'
    value: Uint8Array
}

export interface OutboundHrmpMessage {
    recipient: number
    data: Uint8Array
}

export type XcmErrorV2 = XcmErrorV2_Undefined | XcmErrorV2_Overflow | XcmErrorV2_Unimplemented | XcmErrorV2_UnhandledXcmVersion | XcmErrorV2_UnhandledXcmMessage | XcmErrorV2_UnhandledEffect | XcmErrorV2_EscalationOfPrivilege | XcmErrorV2_UntrustedReserveLocation | XcmErrorV2_UntrustedTeleportLocation | XcmErrorV2_DestinationBufferOverflow | XcmErrorV2_MultiLocationFull | XcmErrorV2_MultiLocationNotInvertible | XcmErrorV2_FailedToDecode | XcmErrorV2_BadOrigin | XcmErrorV2_ExceedsMaxMessageSize | XcmErrorV2_FailedToTransactAsset | XcmErrorV2_WeightLimitReached | XcmErrorV2_Wildcard | XcmErrorV2_TooMuchWeightRequired | XcmErrorV2_NotHoldingFees | XcmErrorV2_WeightNotComputable | XcmErrorV2_Barrier | XcmErrorV2_NotWithdrawable | XcmErrorV2_LocationCannotHold | XcmErrorV2_TooExpensive | XcmErrorV2_AssetNotFound | XcmErrorV2_DestinationUnsupported | XcmErrorV2_RecursionLimitReached | XcmErrorV2_Transport | XcmErrorV2_Unroutable | XcmErrorV2_UnknownWeightRequired | XcmErrorV2_Trap | XcmErrorV2_UnknownClaim | XcmErrorV2_InvalidLocation

export interface XcmErrorV2_Undefined {
    __kind: 'Undefined'
}

export interface XcmErrorV2_Overflow {
    __kind: 'Overflow'
}

export interface XcmErrorV2_Unimplemented {
    __kind: 'Unimplemented'
}

export interface XcmErrorV2_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface XcmErrorV2_UnhandledXcmMessage {
    __kind: 'UnhandledXcmMessage'
}

export interface XcmErrorV2_UnhandledEffect {
    __kind: 'UnhandledEffect'
}

export interface XcmErrorV2_EscalationOfPrivilege {
    __kind: 'EscalationOfPrivilege'
}

export interface XcmErrorV2_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface XcmErrorV2_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface XcmErrorV2_DestinationBufferOverflow {
    __kind: 'DestinationBufferOverflow'
}

export interface XcmErrorV2_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface XcmErrorV2_MultiLocationNotInvertible {
    __kind: 'MultiLocationNotInvertible'
}

export interface XcmErrorV2_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface XcmErrorV2_BadOrigin {
    __kind: 'BadOrigin'
}

export interface XcmErrorV2_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface XcmErrorV2_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface XcmErrorV2_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface XcmErrorV2_Wildcard {
    __kind: 'Wildcard'
}

export interface XcmErrorV2_TooMuchWeightRequired {
    __kind: 'TooMuchWeightRequired'
}

export interface XcmErrorV2_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface XcmErrorV2_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export interface XcmErrorV2_Barrier {
    __kind: 'Barrier'
}

export interface XcmErrorV2_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface XcmErrorV2_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface XcmErrorV2_TooExpensive {
    __kind: 'TooExpensive'
}

export interface XcmErrorV2_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface XcmErrorV2_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface XcmErrorV2_RecursionLimitReached {
    __kind: 'RecursionLimitReached'
}

export interface XcmErrorV2_Transport {
    __kind: 'Transport'
}

export interface XcmErrorV2_Unroutable {
    __kind: 'Unroutable'
}

export interface XcmErrorV2_UnknownWeightRequired {
    __kind: 'UnknownWeightRequired'
}

export interface XcmErrorV2_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface XcmErrorV2_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface XcmErrorV2_InvalidLocation {
    __kind: 'InvalidLocation'
}

export type WildFungibilityV1 = WildFungibilityV1_Fungible | WildFungibilityV1_NonFungible

export interface WildFungibilityV1_Fungible {
    __kind: 'Fungible'
}

export interface WildFungibilityV1_NonFungible {
    __kind: 'NonFungible'
}
