import type {Result, Option} from './support'

export interface EventRecord {
    phase: Phase
    event: Event
    topics: Uint8Array[]
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

export type Event = Event_System | Event_Indices | Event_Balances | Event_TransactionPayment | Event_Staking | Event_Offences | Event_Session | Event_Grandpa | Event_ImOnline | Event_Democracy | Event_Council | Event_TechnicalCommittee | Event_PhragmenElection | Event_TechnicalMembership | Event_Treasury | Event_Claims | Event_Utility | Event_Identity | Event_Society | Event_Recovery | Event_Vesting | Event_Scheduler | Event_Proxy | Event_Multisig | Event_Preimage | Event_Bounties | Event_ChildBounties | Event_Tips | Event_ElectionProviderMultiPhase | Event_Gilt | Event_VoterList | Event_NominationPools | Event_ParaInclusion | Event_Paras | Event_Ump | Event_Hrmp | Event_ParasDisputes | Event_Registrar | Event_Slots | Event_Auctions | Event_Crowdloan | Event_XcmPallet

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

export interface Event_TransactionPayment {
    __kind: 'TransactionPayment'
    value: TransactionPaymentEvent
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

export interface Event_Preimage {
    __kind: 'Preimage'
    value: PreimageEvent
}

export interface Event_Bounties {
    __kind: 'Bounties'
    value: BountiesEvent
}

export interface Event_ChildBounties {
    __kind: 'ChildBounties'
    value: ChildBountiesEvent
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

export interface Event_VoterList {
    __kind: 'VoterList'
    value: VoterListEvent
}

export interface Event_NominationPools {
    __kind: 'NominationPools'
    value: NominationPoolsEvent
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

export interface Event_ParasDisputes {
    __kind: 'ParasDisputes'
    value: ParasDisputesEvent
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

/**
 * Event for the System pallet.
 */
export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount | SystemEvent_Remarked

/**
 * An extrinsic completed successfully.
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    dispatchInfo: DispatchInfo
}

/**
 * An extrinsic failed.
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    dispatchError: DispatchError
    dispatchInfo: DispatchInfo
}

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 * A new account was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    account: Uint8Array
}

/**
 * An account was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    account: Uint8Array
}

/**
 * On on-chain remark happened.
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    sender: Uint8Array
    hash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type IndicesEvent = IndicesEvent_IndexAssigned | IndicesEvent_IndexFreed | IndicesEvent_IndexFrozen

/**
 * A account index was assigned.
 */
export interface IndicesEvent_IndexAssigned {
    __kind: 'IndexAssigned'
    who: Uint8Array
    index: number
}

/**
 * A account index has been freed up (unassigned).
 */
export interface IndicesEvent_IndexFreed {
    __kind: 'IndexFreed'
    index: number
}

/**
 * A account index has been frozen to its current account ID.
 */
export interface IndicesEvent_IndexFrozen {
    __kind: 'IndexFrozen'
    index: number
    who: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated | BalancesEvent_Deposit | BalancesEvent_Withdraw | BalancesEvent_Slashed

/**
 * An account was created with some free balance.
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    account: Uint8Array
    freeBalance: bigint
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss.
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    account: Uint8Array
    amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

/**
 * A balance was set by root.
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    who: Uint8Array
    free: bigint
    reserved: bigint
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    from: Uint8Array
    to: Uint8Array
    amount: bigint
    destinationStatus: BalanceStatus
}

/**
 * Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees).
 */
export interface BalancesEvent_Withdraw {
    __kind: 'Withdraw'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was removed from the account (e.g. for misbehavior).
 */
export interface BalancesEvent_Slashed {
    __kind: 'Slashed'
    who: Uint8Array
    amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TransactionPaymentEvent = TransactionPaymentEvent_TransactionFeePaid

/**
 * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
 * has been paid by `who`.
 */
export interface TransactionPaymentEvent_TransactionFeePaid {
    __kind: 'TransactionFeePaid'
    who: Uint8Array
    actualFee: bigint
    tip: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type StakingEvent = StakingEvent_EraPaid | StakingEvent_Rewarded | StakingEvent_Slashed | StakingEvent_OldSlashingReportDiscarded | StakingEvent_StakersElected | StakingEvent_Bonded | StakingEvent_Unbonded | StakingEvent_Withdrawn | StakingEvent_Kicked | StakingEvent_StakingElectionFailed | StakingEvent_Chilled | StakingEvent_PayoutStarted | StakingEvent_ValidatorPrefsSet

/**
 * The era payout has been set; the first balance is the validator-payout; the second is
 * the remainder from the maximum amount of reward.
 * \[era_index, validator_payout, remainder\]
 */
export interface StakingEvent_EraPaid {
    __kind: 'EraPaid'
    value: [number, bigint, bigint]
}

/**
 * The nominator has been rewarded by this amount. \[stash, amount\]
 */
export interface StakingEvent_Rewarded {
    __kind: 'Rewarded'
    value: [Uint8Array, bigint]
}

/**
 * One validator (and its nominators) has been slashed by the given amount.
 * \[validator, amount\]
 */
export interface StakingEvent_Slashed {
    __kind: 'Slashed'
    value: [Uint8Array, bigint]
}

/**
 * An old slashing report from a prior era was discarded because it could
 * not be processed. \[session_index\]
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    value: number
}

/**
 * A new set of stakers was elected.
 */
export interface StakingEvent_StakersElected {
    __kind: 'StakersElected'
}

/**
 * An account has bonded this amount. \[stash, amount\]
 * 
 * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 * it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    value: [Uint8Array, bigint]
}

/**
 * An account has unbonded this amount. \[stash, amount\]
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    value: [Uint8Array, bigint]
}

/**
 * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 * from the unlocking queue. \[stash, amount\]
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [Uint8Array, bigint]
}

/**
 * A nominator has been kicked from a validator. \[nominator, stash\]
 */
export interface StakingEvent_Kicked {
    __kind: 'Kicked'
    value: [Uint8Array, Uint8Array]
}

/**
 * The election failed. No new era is planned.
 */
export interface StakingEvent_StakingElectionFailed {
    __kind: 'StakingElectionFailed'
}

/**
 * An account has stopped participating as either a validator or nominator.
 * \[stash\]
 */
export interface StakingEvent_Chilled {
    __kind: 'Chilled'
    value: Uint8Array
}

/**
 * The stakers' rewards are getting paid. \[era_index, validator_stash\]
 */
export interface StakingEvent_PayoutStarted {
    __kind: 'PayoutStarted'
    value: [number, Uint8Array]
}

/**
 * A validator has set their preferences.
 */
export interface StakingEvent_ValidatorPrefsSet {
    __kind: 'ValidatorPrefsSet'
    value: [Uint8Array, ValidatorPrefs]
}

/**
 * Events type.
 */
export type OffencesEvent = OffencesEvent_Offence

/**
 * There is an offence reported of the given `kind` happened at the `session_index` and
 * (kind-specific) time slot. This event is not deposited for duplicate slashes.
 * \[kind, timeslot\].
 */
export interface OffencesEvent_Offence {
    __kind: 'Offence'
    kind: Uint8Array
    timeslot: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SessionEvent = SessionEvent_NewSession

/**
 * New session has happened. Note that the argument is the session index, not the
 * block number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    sessionIndex: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 * New authority set has been applied.
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    authoritySet: [Uint8Array, bigint][]
}

/**
 * Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 * Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ImOnlineEvent = ImOnlineEvent_HeartbeatReceived | ImOnlineEvent_AllGood | ImOnlineEvent_SomeOffline

/**
 * A new heartbeat was received from `AuthorityId`.
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    authorityId: Uint8Array
}

/**
 * At the end of the session, no offence was committed.
 */
export interface ImOnlineEvent_AllGood {
    __kind: 'AllGood'
}

/**
 * At the end of the session, at least one validator was found to be offline.
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    offline: [Uint8Array, Exposure][]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type DemocracyEvent = DemocracyEvent_Proposed | DemocracyEvent_Tabled | DemocracyEvent_ExternalTabled | DemocracyEvent_Started | DemocracyEvent_Passed | DemocracyEvent_NotPassed | DemocracyEvent_Cancelled | DemocracyEvent_Executed | DemocracyEvent_Delegated | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed | DemocracyEvent_PreimageNoted | DemocracyEvent_PreimageUsed | DemocracyEvent_PreimageInvalid | DemocracyEvent_PreimageMissing | DemocracyEvent_PreimageReaped | DemocracyEvent_Blacklisted | DemocracyEvent_Voted | DemocracyEvent_Seconded | DemocracyEvent_ProposalCanceled

/**
 * A motion has been proposed by a public account.
 */
export interface DemocracyEvent_Proposed {
    __kind: 'Proposed'
    proposalIndex: number
    deposit: bigint
}

/**
 * A public proposal has been tabled for referendum vote.
 */
export interface DemocracyEvent_Tabled {
    __kind: 'Tabled'
    proposalIndex: number
    deposit: bigint
    depositors: Uint8Array[]
}

/**
 * An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
    __kind: 'ExternalTabled'
}

/**
 * A referendum has begun.
 */
export interface DemocracyEvent_Started {
    __kind: 'Started'
    refIndex: number
    threshold: VoteThreshold
}

/**
 * A proposal has been approved by referendum.
 */
export interface DemocracyEvent_Passed {
    __kind: 'Passed'
    refIndex: number
}

/**
 * A proposal has been rejected by referendum.
 */
export interface DemocracyEvent_NotPassed {
    __kind: 'NotPassed'
    refIndex: number
}

/**
 * A referendum has been cancelled.
 */
export interface DemocracyEvent_Cancelled {
    __kind: 'Cancelled'
    refIndex: number
}

/**
 * A proposal has been enacted.
 */
export interface DemocracyEvent_Executed {
    __kind: 'Executed'
    refIndex: number
    result: Type_56
}

/**
 * An account has delegated their vote to another account.
 */
export interface DemocracyEvent_Delegated {
    __kind: 'Delegated'
    who: Uint8Array
    target: Uint8Array
}

/**
 * An account has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
    __kind: 'Undelegated'
    account: Uint8Array
}

/**
 * An external proposal has been vetoed.
 */
export interface DemocracyEvent_Vetoed {
    __kind: 'Vetoed'
    who: Uint8Array
    proposalHash: Uint8Array
    until: number
}

/**
 * A proposal's preimage was noted, and the deposit taken.
 */
export interface DemocracyEvent_PreimageNoted {
    __kind: 'PreimageNoted'
    proposalHash: Uint8Array
    who: Uint8Array
    deposit: bigint
}

/**
 * A proposal preimage was removed and used (the deposit was returned).
 */
export interface DemocracyEvent_PreimageUsed {
    __kind: 'PreimageUsed'
    proposalHash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

/**
 * A proposal could not be executed because its preimage was invalid.
 */
export interface DemocracyEvent_PreimageInvalid {
    __kind: 'PreimageInvalid'
    proposalHash: Uint8Array
    refIndex: number
}

/**
 * A proposal could not be executed because its preimage was missing.
 */
export interface DemocracyEvent_PreimageMissing {
    __kind: 'PreimageMissing'
    proposalHash: Uint8Array
    refIndex: number
}

/**
 * A registered preimage was removed and the deposit collected by the reaper.
 */
export interface DemocracyEvent_PreimageReaped {
    __kind: 'PreimageReaped'
    proposalHash: Uint8Array
    provider: Uint8Array
    deposit: bigint
    reaper: Uint8Array
}

/**
 * A proposal_hash has been blacklisted permanently.
 */
export interface DemocracyEvent_Blacklisted {
    __kind: 'Blacklisted'
    proposalHash: Uint8Array
}

/**
 * An account has voted in a referendum
 */
export interface DemocracyEvent_Voted {
    __kind: 'Voted'
    voter: Uint8Array
    refIndex: number
    vote: AccountVote
}

/**
 * An account has secconded a proposal
 */
export interface DemocracyEvent_Seconded {
    __kind: 'Seconded'
    seconder: Uint8Array
    propIndex: number
}

/**
 * A proposal got canceled.
 */
export interface DemocracyEvent_ProposalCanceled {
    __kind: 'ProposalCanceled'
    propIndex: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CouncilEvent = CouncilEvent_Proposed | CouncilEvent_Voted | CouncilEvent_Approved | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Closed

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface CouncilEvent_Proposed {
    __kind: 'Proposed'
    account: Uint8Array
    proposalIndex: number
    proposalHash: Uint8Array
    threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface CouncilEvent_Voted {
    __kind: 'Voted'
    account: Uint8Array
    proposalHash: Uint8Array
    voted: boolean
    yes: number
    no: number
}

/**
 * A motion was approved by the required threshold.
 */
export interface CouncilEvent_Approved {
    __kind: 'Approved'
    proposalHash: Uint8Array
}

/**
 * A motion was not approved by the required threshold.
 */
export interface CouncilEvent_Disapproved {
    __kind: 'Disapproved'
    proposalHash: Uint8Array
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_Executed {
    __kind: 'Executed'
    proposalHash: Uint8Array
    result: Type_56
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    proposalHash: Uint8Array
    result: Type_56
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface CouncilEvent_Closed {
    __kind: 'Closed'
    proposalHash: Uint8Array
    yes: number
    no: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted | TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Closed

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Proposed {
    __kind: 'Proposed'
    account: Uint8Array
    proposalIndex: number
    proposalHash: Uint8Array
    threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Voted {
    __kind: 'Voted'
    account: Uint8Array
    proposalHash: Uint8Array
    voted: boolean
    yes: number
    no: number
}

/**
 * A motion was approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Approved {
    __kind: 'Approved'
    proposalHash: Uint8Array
}

/**
 * A motion was not approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Disapproved {
    __kind: 'Disapproved'
    proposalHash: Uint8Array
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_Executed {
    __kind: 'Executed'
    proposalHash: Uint8Array
    result: Type_56
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    proposalHash: Uint8Array
    result: Type_56
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface TechnicalCommitteeEvent_Closed {
    __kind: 'Closed'
    proposalHash: Uint8Array
    yes: number
    no: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PhragmenElectionEvent = PhragmenElectionEvent_NewTerm | PhragmenElectionEvent_EmptyTerm | PhragmenElectionEvent_ElectionError | PhragmenElectionEvent_MemberKicked | PhragmenElectionEvent_Renounced | PhragmenElectionEvent_CandidateSlashed | PhragmenElectionEvent_SeatHolderSlashed

/**
 * A new term with new_members. This indicates that enough candidates existed to run
 * the election, not that enough have has been elected. The inner value must be examined
 * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
 * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
 * begin with.
 */
export interface PhragmenElectionEvent_NewTerm {
    __kind: 'NewTerm'
    newMembers: [Uint8Array, bigint][]
}

/**
 * No (or not enough) candidates existed for this round. This is different from
 * `NewTerm(\[\])`. See the description of `NewTerm`.
 */
export interface PhragmenElectionEvent_EmptyTerm {
    __kind: 'EmptyTerm'
}

/**
 * Internal error happened while trying to perform election.
 */
export interface PhragmenElectionEvent_ElectionError {
    __kind: 'ElectionError'
}

/**
 * A member has been removed. This should always be followed by either `NewTerm` or
 * `EmptyTerm`.
 */
export interface PhragmenElectionEvent_MemberKicked {
    __kind: 'MemberKicked'
    member: Uint8Array
}

/**
 * Someone has renounced their candidacy.
 */
export interface PhragmenElectionEvent_Renounced {
    __kind: 'Renounced'
    candidate: Uint8Array
}

/**
 * A candidate was slashed by amount due to failing to obtain a seat as member or
 * runner-up.
 * 
 * Note that old members and runners-up are also candidates.
 */
export interface PhragmenElectionEvent_CandidateSlashed {
    __kind: 'CandidateSlashed'
    candidate: Uint8Array
    amount: bigint
}

/**
 * A seat holder was slashed by amount by being forcefully removed from the set.
 */
export interface PhragmenElectionEvent_SeatHolderSlashed {
    __kind: 'SeatHolderSlashed'
    seatHolder: Uint8Array
    amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TechnicalMembershipEvent = TechnicalMembershipEvent_MemberAdded | TechnicalMembershipEvent_MemberRemoved | TechnicalMembershipEvent_MembersSwapped | TechnicalMembershipEvent_MembersReset | TechnicalMembershipEvent_KeyChanged | TechnicalMembershipEvent_Dummy

/**
 * The given member was added; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberAdded {
    __kind: 'MemberAdded'
}

/**
 * The given member was removed; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberRemoved {
    __kind: 'MemberRemoved'
}

/**
 * Two members were swapped; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MembersSwapped {
    __kind: 'MembersSwapped'
}

/**
 * The membership was reset; see the transaction for who the new set is.
 */
export interface TechnicalMembershipEvent_MembersReset {
    __kind: 'MembersReset'
}

/**
 * One of the members' keys changed.
 */
export interface TechnicalMembershipEvent_KeyChanged {
    __kind: 'KeyChanged'
}

/**
 * Phantom member, never used.
 */
export interface TechnicalMembershipEvent_Dummy {
    __kind: 'Dummy'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TreasuryEvent = TreasuryEvent_Proposed | TreasuryEvent_Spending | TreasuryEvent_Awarded | TreasuryEvent_Rejected | TreasuryEvent_Burnt | TreasuryEvent_Rollover | TreasuryEvent_Deposit | TreasuryEvent_SpendApproved

/**
 * New proposal.
 */
export interface TreasuryEvent_Proposed {
    __kind: 'Proposed'
    proposalIndex: number
}

/**
 * We have ended a spend period and will now allocate funds.
 */
export interface TreasuryEvent_Spending {
    __kind: 'Spending'
    budgetRemaining: bigint
}

/**
 * Some funds have been allocated.
 */
export interface TreasuryEvent_Awarded {
    __kind: 'Awarded'
    proposalIndex: number
    award: bigint
    account: Uint8Array
}

/**
 * A proposal was rejected; funds were slashed.
 */
export interface TreasuryEvent_Rejected {
    __kind: 'Rejected'
    proposalIndex: number
    slashed: bigint
}

/**
 * Some of our funds have been burnt.
 */
export interface TreasuryEvent_Burnt {
    __kind: 'Burnt'
    burntFunds: bigint
}

/**
 * Spending has finished; this is the amount that rolls over until next spend.
 */
export interface TreasuryEvent_Rollover {
    __kind: 'Rollover'
    rolloverBalance: bigint
}

/**
 * Some funds have been deposited.
 */
export interface TreasuryEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

/**
 * A new spend proposal has been approved.
 */
export interface TreasuryEvent_SpendApproved {
    __kind: 'SpendApproved'
    proposalIndex: number
    amount: bigint
    beneficiary: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ClaimsEvent = ClaimsEvent_Claimed

/**
 * Someone claimed some DOTs.
 */
export interface ClaimsEvent_Claimed {
    __kind: 'Claimed'
    who: Uint8Array
    ethereumAddress: Uint8Array
    amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type UtilityEvent = UtilityEvent_BatchInterrupted | UtilityEvent_BatchCompleted | UtilityEvent_BatchCompletedWithErrors | UtilityEvent_ItemCompleted | UtilityEvent_ItemFailed | UtilityEvent_DispatchedAs

/**
 * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 * well as the error.
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    index: number
    error: DispatchError
}

/**
 * Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 * Batch of dispatches completed but has errors.
 */
export interface UtilityEvent_BatchCompletedWithErrors {
    __kind: 'BatchCompletedWithErrors'
}

/**
 * A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
    __kind: 'ItemCompleted'
}

/**
 * A single item within a Batch of dispatches has completed with error.
 */
export interface UtilityEvent_ItemFailed {
    __kind: 'ItemFailed'
    error: DispatchError
}

/**
 * A call was dispatched.
 */
export interface UtilityEvent_DispatchedAs {
    __kind: 'DispatchedAs'
    result: Type_56
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type IdentityEvent = IdentityEvent_IdentitySet | IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_JudgementGiven | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked

/**
 * A name was set or reset (which will remove all judgements).
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    who: Uint8Array
}

/**
 * A name was cleared, and the given balance returned.
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    who: Uint8Array
    deposit: bigint
}

/**
 * A name was removed and the given balance slashed.
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    who: Uint8Array
    deposit: bigint
}

/**
 * A judgement was asked from a registrar.
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    who: Uint8Array
    registrarIndex: number
}

/**
 * A judgement request was retracted.
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    who: Uint8Array
    registrarIndex: number
}

/**
 * A judgement was given by a registrar.
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    target: Uint8Array
    registrarIndex: number
}

/**
 * A registrar was added.
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    registrarIndex: number
}

/**
 * A sub-identity was added to an identity and the deposit paid.
 */
export interface IdentityEvent_SubIdentityAdded {
    __kind: 'SubIdentityAdded'
    sub: Uint8Array
    main: Uint8Array
    deposit: bigint
}

/**
 * A sub-identity was removed from an identity and the deposit freed.
 */
export interface IdentityEvent_SubIdentityRemoved {
    __kind: 'SubIdentityRemoved'
    sub: Uint8Array
    main: Uint8Array
    deposit: bigint
}

/**
 * A sub-identity was cleared, and the given deposit repatriated from the
 * main identity account to the sub-identity account.
 */
export interface IdentityEvent_SubIdentityRevoked {
    __kind: 'SubIdentityRevoked'
    sub: Uint8Array
    main: Uint8Array
    deposit: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SocietyEvent = SocietyEvent_Founded | SocietyEvent_Bid | SocietyEvent_Vouch | SocietyEvent_AutoUnbid | SocietyEvent_Unbid | SocietyEvent_Unvouch | SocietyEvent_Inducted | SocietyEvent_SuspendedMemberJudgement | SocietyEvent_CandidateSuspended | SocietyEvent_MemberSuspended | SocietyEvent_Challenged | SocietyEvent_Vote | SocietyEvent_DefenderVote | SocietyEvent_NewMaxMembers | SocietyEvent_Unfounded | SocietyEvent_Deposit

/**
 * The society is founded by the given identity.
 */
export interface SocietyEvent_Founded {
    __kind: 'Founded'
    founder: Uint8Array
}

/**
 * A membership bid just happened. The given account is the candidate's ID and their offer
 * is the second.
 */
export interface SocietyEvent_Bid {
    __kind: 'Bid'
    candidateId: Uint8Array
    offer: bigint
}

/**
 * A membership bid just happened by vouching. The given account is the candidate's ID and
 * their offer is the second. The vouching party is the third.
 */
export interface SocietyEvent_Vouch {
    __kind: 'Vouch'
    candidateId: Uint8Array
    offer: bigint
    vouching: Uint8Array
}

/**
 * A candidate was dropped (due to an excess of bids in the system).
 */
export interface SocietyEvent_AutoUnbid {
    __kind: 'AutoUnbid'
    candidate: Uint8Array
}

/**
 * A candidate was dropped (by their request).
 */
export interface SocietyEvent_Unbid {
    __kind: 'Unbid'
    candidate: Uint8Array
}

/**
 * A candidate was dropped (by request of who vouched for them).
 */
export interface SocietyEvent_Unvouch {
    __kind: 'Unvouch'
    candidate: Uint8Array
}

/**
 * A group of candidates have been inducted. The batch's primary is the first value, the
 * batch in full is the second.
 */
export interface SocietyEvent_Inducted {
    __kind: 'Inducted'
    primary: Uint8Array
    candidates: Uint8Array[]
}

/**
 * A suspended member has been judged.
 */
export interface SocietyEvent_SuspendedMemberJudgement {
    __kind: 'SuspendedMemberJudgement'
    who: Uint8Array
    judged: boolean
}

/**
 * A candidate has been suspended
 */
export interface SocietyEvent_CandidateSuspended {
    __kind: 'CandidateSuspended'
    candidate: Uint8Array
}

/**
 * A member has been suspended
 */
export interface SocietyEvent_MemberSuspended {
    __kind: 'MemberSuspended'
    member: Uint8Array
}

/**
 * A member has been challenged
 */
export interface SocietyEvent_Challenged {
    __kind: 'Challenged'
    member: Uint8Array
}

/**
 * A vote has been placed
 */
export interface SocietyEvent_Vote {
    __kind: 'Vote'
    candidate: Uint8Array
    voter: Uint8Array
    vote: boolean
}

/**
 * A vote has been placed for a defending member
 */
export interface SocietyEvent_DefenderVote {
    __kind: 'DefenderVote'
    voter: Uint8Array
    vote: boolean
}

/**
 * A new \[max\] member count has been set
 */
export interface SocietyEvent_NewMaxMembers {
    __kind: 'NewMaxMembers'
    max: number
}

/**
 * Society is unfounded.
 */
export interface SocietyEvent_Unfounded {
    __kind: 'Unfounded'
    founder: Uint8Array
}

/**
 * Some funds were deposited into the society account.
 */
export interface SocietyEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

/**
 * Events type.
 */
export type RecoveryEvent = RecoveryEvent_RecoveryCreated | RecoveryEvent_RecoveryInitiated | RecoveryEvent_RecoveryVouched | RecoveryEvent_RecoveryClosed | RecoveryEvent_AccountRecovered | RecoveryEvent_RecoveryRemoved

/**
 * A recovery process has been set up for an account.
 */
export interface RecoveryEvent_RecoveryCreated {
    __kind: 'RecoveryCreated'
    account: Uint8Array
}

/**
 * A recovery process has been initiated for lost account by rescuer account.
 */
export interface RecoveryEvent_RecoveryInitiated {
    __kind: 'RecoveryInitiated'
    lostAccount: Uint8Array
    rescuerAccount: Uint8Array
}

/**
 * A recovery process for lost account by rescuer account has been vouched for by sender.
 */
export interface RecoveryEvent_RecoveryVouched {
    __kind: 'RecoveryVouched'
    lostAccount: Uint8Array
    rescuerAccount: Uint8Array
    sender: Uint8Array
}

/**
 * A recovery process for lost account by rescuer account has been closed.
 */
export interface RecoveryEvent_RecoveryClosed {
    __kind: 'RecoveryClosed'
    lostAccount: Uint8Array
    rescuerAccount: Uint8Array
}

/**
 * Lost account has been successfully recovered by rescuer account.
 */
export interface RecoveryEvent_AccountRecovered {
    __kind: 'AccountRecovered'
    lostAccount: Uint8Array
    rescuerAccount: Uint8Array
}

/**
 * A recovery process has been removed for an account.
 */
export interface RecoveryEvent_RecoveryRemoved {
    __kind: 'RecoveryRemoved'
    lostAccount: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type VestingEvent = VestingEvent_VestingUpdated | VestingEvent_VestingCompleted

/**
 * The amount vested has been updated. This could indicate a change in funds available.
 * The balance given is the amount which is left unvested (and thus locked).
 */
export interface VestingEvent_VestingUpdated {
    __kind: 'VestingUpdated'
    account: Uint8Array
    unvested: bigint
}

/**
 * An \[account\] has become fully vested.
 */
export interface VestingEvent_VestingCompleted {
    __kind: 'VestingCompleted'
    account: Uint8Array
}

/**
 * Events type.
 */
export type SchedulerEvent = SchedulerEvent_Scheduled | SchedulerEvent_Canceled | SchedulerEvent_Dispatched | SchedulerEvent_CallLookupFailed

/**
 * Scheduled some task.
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    when: number
    index: number
}

/**
 * Canceled some task.
 */
export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    when: number
    index: number
}

/**
 * Dispatched some task.
 */
export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    task: [number, number]
    id: (Uint8Array | undefined)
    result: Type_56
}

/**
 * The call for the provided hash was not found so the task has been aborted.
 */
export interface SchedulerEvent_CallLookupFailed {
    __kind: 'CallLookupFailed'
    task: [number, number]
    id: (Uint8Array | undefined)
    error: LookupError
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ProxyEvent = ProxyEvent_ProxyExecuted | ProxyEvent_AnonymousCreated | ProxyEvent_Announced | ProxyEvent_ProxyAdded | ProxyEvent_ProxyRemoved

/**
 * A proxy was executed correctly, with the given.
 */
export interface ProxyEvent_ProxyExecuted {
    __kind: 'ProxyExecuted'
    result: Type_56
}

/**
 * Anonymous account has been created by new proxy with given
 * disambiguation index and proxy type.
 */
export interface ProxyEvent_AnonymousCreated {
    __kind: 'AnonymousCreated'
    anonymous: Uint8Array
    who: Uint8Array
    proxyType: ProxyType
    disambiguationIndex: number
}

/**
 * An announcement was placed to make a call in the future.
 */
export interface ProxyEvent_Announced {
    __kind: 'Announced'
    real: Uint8Array
    proxy: Uint8Array
    callHash: Uint8Array
}

/**
 * A proxy was added.
 */
export interface ProxyEvent_ProxyAdded {
    __kind: 'ProxyAdded'
    delegator: Uint8Array
    delegatee: Uint8Array
    proxyType: ProxyType
    delay: number
}

/**
 * A proxy was removed.
 */
export interface ProxyEvent_ProxyRemoved {
    __kind: 'ProxyRemoved'
    delegator: Uint8Array
    delegatee: Uint8Array
    proxyType: ProxyType
    delay: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type MultisigEvent = MultisigEvent_NewMultisig | MultisigEvent_MultisigApproval | MultisigEvent_MultisigExecuted | MultisigEvent_MultisigCancelled

/**
 * A new multisig operation has begun.
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    approving: Uint8Array
    multisig: Uint8Array
    callHash: Uint8Array
}

/**
 * A multisig operation has been approved by someone.
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    approving: Uint8Array
    timepoint: Timepoint
    multisig: Uint8Array
    callHash: Uint8Array
}

/**
 * A multisig operation has been executed.
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    approving: Uint8Array
    timepoint: Timepoint
    multisig: Uint8Array
    callHash: Uint8Array
    result: Type_56
}

/**
 * A multisig operation has been cancelled.
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    cancelling: Uint8Array
    timepoint: Timepoint
    multisig: Uint8Array
    callHash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PreimageEvent = PreimageEvent_Noted | PreimageEvent_Requested | PreimageEvent_Cleared

/**
 * A preimage has been noted.
 */
export interface PreimageEvent_Noted {
    __kind: 'Noted'
    hash: Uint8Array
}

/**
 * A preimage has been requested.
 */
export interface PreimageEvent_Requested {
    __kind: 'Requested'
    hash: Uint8Array
}

/**
 * A preimage has ben cleared.
 */
export interface PreimageEvent_Cleared {
    __kind: 'Cleared'
    hash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type BountiesEvent = BountiesEvent_BountyProposed | BountiesEvent_BountyRejected | BountiesEvent_BountyBecameActive | BountiesEvent_BountyAwarded | BountiesEvent_BountyClaimed | BountiesEvent_BountyCanceled | BountiesEvent_BountyExtended

/**
 * New bounty proposal.
 */
export interface BountiesEvent_BountyProposed {
    __kind: 'BountyProposed'
    index: number
}

/**
 * A bounty proposal was rejected; funds were slashed.
 */
export interface BountiesEvent_BountyRejected {
    __kind: 'BountyRejected'
    index: number
    bond: bigint
}

/**
 * A bounty proposal is funded and became active.
 */
export interface BountiesEvent_BountyBecameActive {
    __kind: 'BountyBecameActive'
    index: number
}

/**
 * A bounty is awarded to a beneficiary.
 */
export interface BountiesEvent_BountyAwarded {
    __kind: 'BountyAwarded'
    index: number
    beneficiary: Uint8Array
}

/**
 * A bounty is claimed by beneficiary.
 */
export interface BountiesEvent_BountyClaimed {
    __kind: 'BountyClaimed'
    index: number
    payout: bigint
    beneficiary: Uint8Array
}

/**
 * A bounty is cancelled.
 */
export interface BountiesEvent_BountyCanceled {
    __kind: 'BountyCanceled'
    index: number
}

/**
 * A bounty expiry is extended.
 */
export interface BountiesEvent_BountyExtended {
    __kind: 'BountyExtended'
    index: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ChildBountiesEvent = ChildBountiesEvent_Added | ChildBountiesEvent_Awarded | ChildBountiesEvent_Claimed | ChildBountiesEvent_Canceled

/**
 * A child-bounty is added.
 */
export interface ChildBountiesEvent_Added {
    __kind: 'Added'
    index: number
    childIndex: number
}

/**
 * A child-bounty is awarded to a beneficiary.
 */
export interface ChildBountiesEvent_Awarded {
    __kind: 'Awarded'
    index: number
    childIndex: number
    beneficiary: Uint8Array
}

/**
 * A child-bounty is claimed by beneficiary.
 */
export interface ChildBountiesEvent_Claimed {
    __kind: 'Claimed'
    index: number
    childIndex: number
    payout: bigint
    beneficiary: Uint8Array
}

/**
 * A child-bounty is cancelled.
 */
export interface ChildBountiesEvent_Canceled {
    __kind: 'Canceled'
    index: number
    childIndex: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TipsEvent = TipsEvent_NewTip | TipsEvent_TipClosing | TipsEvent_TipClosed | TipsEvent_TipRetracted | TipsEvent_TipSlashed

/**
 * A new tip suggestion has been opened.
 */
export interface TipsEvent_NewTip {
    __kind: 'NewTip'
    tipHash: Uint8Array
}

/**
 * A tip suggestion has reached threshold and is closing.
 */
export interface TipsEvent_TipClosing {
    __kind: 'TipClosing'
    tipHash: Uint8Array
}

/**
 * A tip suggestion has been closed.
 */
export interface TipsEvent_TipClosed {
    __kind: 'TipClosed'
    tipHash: Uint8Array
    who: Uint8Array
    payout: bigint
}

/**
 * A tip suggestion has been retracted.
 */
export interface TipsEvent_TipRetracted {
    __kind: 'TipRetracted'
    tipHash: Uint8Array
}

/**
 * A tip suggestion has been slashed.
 */
export interface TipsEvent_TipSlashed {
    __kind: 'TipSlashed'
    tipHash: Uint8Array
    finder: Uint8Array
    deposit: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ElectionProviderMultiPhaseEvent = ElectionProviderMultiPhaseEvent_SolutionStored | ElectionProviderMultiPhaseEvent_ElectionFinalized | ElectionProviderMultiPhaseEvent_Rewarded | ElectionProviderMultiPhaseEvent_Slashed | ElectionProviderMultiPhaseEvent_SignedPhaseStarted | ElectionProviderMultiPhaseEvent_UnsignedPhaseStarted

/**
 * A solution was stored with the given compute.
 * 
 * If the solution is signed, this means that it hasn't yet been processed. If the
 * solution is unsigned, this means that it has also been processed.
 * 
 * The `bool` is `true` when a previous solution was ejected to make room for this one.
 */
export interface ElectionProviderMultiPhaseEvent_SolutionStored {
    __kind: 'SolutionStored'
    electionCompute: ElectionCompute
    prevEjected: boolean
}

/**
 * The election has been finalized, with `Some` of the given computation, or else if the
 * election failed, `None`.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFinalized {
    __kind: 'ElectionFinalized'
    electionCompute: (ElectionCompute | undefined)
}

/**
 * An account has been rewarded for their signed submission being finalized.
 */
export interface ElectionProviderMultiPhaseEvent_Rewarded {
    __kind: 'Rewarded'
    account: Uint8Array
    value: bigint
}

/**
 * An account has been slashed for submitting an invalid signed submission.
 */
export interface ElectionProviderMultiPhaseEvent_Slashed {
    __kind: 'Slashed'
    account: Uint8Array
    value: bigint
}

/**
 * The signed phase of the given round has started.
 */
export interface ElectionProviderMultiPhaseEvent_SignedPhaseStarted {
    __kind: 'SignedPhaseStarted'
    round: number
}

/**
 * The unsigned phase of the given round has started.
 */
export interface ElectionProviderMultiPhaseEvent_UnsignedPhaseStarted {
    __kind: 'UnsignedPhaseStarted'
    round: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type GiltEvent = GiltEvent_BidPlaced | GiltEvent_BidRetracted | GiltEvent_GiltIssued | GiltEvent_GiltThawed

/**
 * A bid was successfully placed.
 */
export interface GiltEvent_BidPlaced {
    __kind: 'BidPlaced'
    who: Uint8Array
    amount: bigint
    duration: number
}

/**
 * A bid was successfully removed (before being accepted as a gilt).
 */
export interface GiltEvent_BidRetracted {
    __kind: 'BidRetracted'
    who: Uint8Array
    amount: bigint
    duration: number
}

/**
 * A bid was accepted as a gilt. The balance may not be released until expiry.
 */
export interface GiltEvent_GiltIssued {
    __kind: 'GiltIssued'
    index: number
    expiry: number
    who: Uint8Array
    amount: bigint
}

/**
 * An expired gilt has been thawed.
 */
export interface GiltEvent_GiltThawed {
    __kind: 'GiltThawed'
    index: number
    who: Uint8Array
    originalAmount: bigint
    additionalAmount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type VoterListEvent = VoterListEvent_Rebagged | VoterListEvent_ScoreUpdated

/**
 * Moved an account from one bag to another.
 */
export interface VoterListEvent_Rebagged {
    __kind: 'Rebagged'
    who: Uint8Array
    from: bigint
    to: bigint
}

/**
 * Updated the score of some account to the given amount.
 */
export interface VoterListEvent_ScoreUpdated {
    __kind: 'ScoreUpdated'
    who: Uint8Array
    newScore: bigint
}

/**
 * Events of this pallet.
 */
export type NominationPoolsEvent = NominationPoolsEvent_Created | NominationPoolsEvent_Bonded | NominationPoolsEvent_PaidOut | NominationPoolsEvent_Unbonded | NominationPoolsEvent_Withdrawn | NominationPoolsEvent_Destroyed | NominationPoolsEvent_StateChanged | NominationPoolsEvent_MemberRemoved | NominationPoolsEvent_RolesUpdated | NominationPoolsEvent_PoolSlashed | NominationPoolsEvent_UnbondingPoolSlashed

/**
 * A pool has been created.
 */
export interface NominationPoolsEvent_Created {
    __kind: 'Created'
    depositor: Uint8Array
    poolId: number
}

/**
 * A member has became bonded in a pool.
 */
export interface NominationPoolsEvent_Bonded {
    __kind: 'Bonded'
    member: Uint8Array
    poolId: number
    bonded: bigint
    joined: boolean
}

/**
 * A payout has been made to a member.
 */
export interface NominationPoolsEvent_PaidOut {
    __kind: 'PaidOut'
    member: Uint8Array
    poolId: number
    payout: bigint
}

/**
 * A member has unbonded from their pool.
 * 
 * - `balance` is the corresponding balance of the number of points that has been
 *   requested to be unbonded (the argument of the `unbond` transaction) from the bonded
 *   pool.
 * - `points` is the number of points that are issued as a result of `balance` being
 * dissolved into the corresponding unbonding pool.
 * 
 * In the absence of slashing, these values will match. In the presence of slashing, the
 * number of points that are issued in the unbonding pool will be less than the amount
 * requested to be unbonded.
 */
export interface NominationPoolsEvent_Unbonded {
    __kind: 'Unbonded'
    member: Uint8Array
    poolId: number
    balance: bigint
    points: bigint
}

/**
 * A member has withdrawn from their pool.
 * 
 * The given number of `points` have been dissolved in return of `balance`.
 * 
 * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
 * will be 1.
 */
export interface NominationPoolsEvent_Withdrawn {
    __kind: 'Withdrawn'
    member: Uint8Array
    poolId: number
    balance: bigint
    points: bigint
}

/**
 * A pool has been destroyed.
 */
export interface NominationPoolsEvent_Destroyed {
    __kind: 'Destroyed'
    poolId: number
}

/**
 * The state of a pool has changed
 */
export interface NominationPoolsEvent_StateChanged {
    __kind: 'StateChanged'
    poolId: number
    newState: PoolState
}

/**
 * A member has been removed from a pool.
 * 
 * The removal can be voluntary (withdrawn all unbonded funds) or involuntary (kicked).
 */
export interface NominationPoolsEvent_MemberRemoved {
    __kind: 'MemberRemoved'
    poolId: number
    member: Uint8Array
}

/**
 * The roles of a pool have been updated to the given new roles. Note that the depositor
 * can never change.
 */
export interface NominationPoolsEvent_RolesUpdated {
    __kind: 'RolesUpdated'
    root: (Uint8Array | undefined)
    stateToggler: (Uint8Array | undefined)
    nominator: (Uint8Array | undefined)
}

/**
 * The active balance of pool `pool_id` has been slashed to `balance`.
 */
export interface NominationPoolsEvent_PoolSlashed {
    __kind: 'PoolSlashed'
    poolId: number
    balance: bigint
}

/**
 * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
 */
export interface NominationPoolsEvent_UnbondingPoolSlashed {
    __kind: 'UnbondingPoolSlashed'
    poolId: number
    era: number
    balance: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ParaInclusionEvent = ParaInclusionEvent_CandidateBacked | ParaInclusionEvent_CandidateIncluded | ParaInclusionEvent_CandidateTimedOut

/**
 * A candidate was backed. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateBacked {
    __kind: 'CandidateBacked'
    value: [V2CandidateReceipt, Uint8Array, number, number]
}

/**
 * A candidate was included. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateIncluded {
    __kind: 'CandidateIncluded'
    value: [V2CandidateReceipt, Uint8Array, number, number]
}

/**
 * A candidate timed out. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateTimedOut {
    __kind: 'CandidateTimedOut'
    value: [V2CandidateReceipt, Uint8Array, number]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ParasEvent = ParasEvent_CurrentCodeUpdated | ParasEvent_CurrentHeadUpdated | ParasEvent_CodeUpgradeScheduled | ParasEvent_NewHeadNoted | ParasEvent_ActionQueued | ParasEvent_PvfCheckStarted | ParasEvent_PvfCheckAccepted | ParasEvent_PvfCheckRejected

/**
 * Current code has been updated for a Para. `para_id`
 */
export interface ParasEvent_CurrentCodeUpdated {
    __kind: 'CurrentCodeUpdated'
    value: number
}

/**
 * Current head has been updated for a Para. `para_id`
 */
export interface ParasEvent_CurrentHeadUpdated {
    __kind: 'CurrentHeadUpdated'
    value: number
}

/**
 * A code upgrade has been scheduled for a Para. `para_id`
 */
export interface ParasEvent_CodeUpgradeScheduled {
    __kind: 'CodeUpgradeScheduled'
    value: number
}

/**
 * A new head has been noted for a Para. `para_id`
 */
export interface ParasEvent_NewHeadNoted {
    __kind: 'NewHeadNoted'
    value: number
}

/**
 * A para has been queued to execute pending actions. `para_id`
 */
export interface ParasEvent_ActionQueued {
    __kind: 'ActionQueued'
    value: [number, number]
}

/**
 * The given para either initiated or subscribed to a PVF check for the given validation
 * code. `code_hash` `para_id`
 */
export interface ParasEvent_PvfCheckStarted {
    __kind: 'PvfCheckStarted'
    value: [Uint8Array, number]
}

/**
 * The given validation code was accepted by the PVF pre-checking vote.
 * `code_hash` `para_id`
 */
export interface ParasEvent_PvfCheckAccepted {
    __kind: 'PvfCheckAccepted'
    value: [Uint8Array, number]
}

/**
 * The given validation code was rejected by the PVF pre-checking vote.
 * `code_hash` `para_id`
 */
export interface ParasEvent_PvfCheckRejected {
    __kind: 'PvfCheckRejected'
    value: [Uint8Array, number]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type UmpEvent = UmpEvent_InvalidFormat | UmpEvent_UnsupportedVersion | UmpEvent_ExecutedUpward | UmpEvent_WeightExhausted | UmpEvent_UpwardMessagesReceived | UmpEvent_OverweightEnqueued | UmpEvent_OverweightServiced

/**
 * Upward message is invalid XCM.
 * \[ id \]
 */
export interface UmpEvent_InvalidFormat {
    __kind: 'InvalidFormat'
    value: Uint8Array
}

/**
 * Upward message is unsupported version of XCM.
 * \[ id \]
 */
export interface UmpEvent_UnsupportedVersion {
    __kind: 'UnsupportedVersion'
    value: Uint8Array
}

/**
 * Upward message executed with the given outcome.
 * \[ id, outcome \]
 */
export interface UmpEvent_ExecutedUpward {
    __kind: 'ExecutedUpward'
    value: [Uint8Array, V2Outcome]
}

/**
 * The weight limit for handling upward messages was reached.
 * \[ id, remaining, required \]
 */
export interface UmpEvent_WeightExhausted {
    __kind: 'WeightExhausted'
    value: [Uint8Array, bigint, bigint]
}

/**
 * Some upward messages have been received and will be processed.
 * \[ para, count, size \]
 */
export interface UmpEvent_UpwardMessagesReceived {
    __kind: 'UpwardMessagesReceived'
    value: [number, number, number]
}

/**
 * The weight budget was exceeded for an individual upward message.
 * 
 * This message can be later dispatched manually using `service_overweight` dispatchable
 * using the assigned `overweight_index`.
 * 
 * \[ para, id, overweight_index, required \]
 */
export interface UmpEvent_OverweightEnqueued {
    __kind: 'OverweightEnqueued'
    value: [number, Uint8Array, bigint, bigint]
}

/**
 * Upward message from the overweight queue was executed with the given actual weight
 * used.
 * 
 * \[ overweight_index, used \]
 */
export interface UmpEvent_OverweightServiced {
    __kind: 'OverweightServiced'
    value: [bigint, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type HrmpEvent = HrmpEvent_OpenChannelRequested | HrmpEvent_OpenChannelCanceled | HrmpEvent_OpenChannelAccepted | HrmpEvent_ChannelClosed

/**
 * Open HRMP channel requested.
 * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
 */
export interface HrmpEvent_OpenChannelRequested {
    __kind: 'OpenChannelRequested'
    value: [number, number, number, number]
}

/**
 * An HRMP channel request sent by the receiver was canceled by either party.
 * `[by_parachain, channel_id]`
 */
export interface HrmpEvent_OpenChannelCanceled {
    __kind: 'OpenChannelCanceled'
    value: [number, HrmpChannelId]
}

/**
 * Open HRMP channel accepted. `[sender, recipient]`
 */
export interface HrmpEvent_OpenChannelAccepted {
    __kind: 'OpenChannelAccepted'
    value: [number, number]
}

/**
 * HRMP channel closed. `[by_parachain, channel_id]`
 */
export interface HrmpEvent_ChannelClosed {
    __kind: 'ChannelClosed'
    value: [number, HrmpChannelId]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ParasDisputesEvent = ParasDisputesEvent_DisputeInitiated | ParasDisputesEvent_DisputeConcluded | ParasDisputesEvent_DisputeTimedOut | ParasDisputesEvent_Revert

/**
 * A dispute has been initiated. \[candidate hash, dispute location\]
 */
export interface ParasDisputesEvent_DisputeInitiated {
    __kind: 'DisputeInitiated'
    value: [Uint8Array, DisputeLocation]
}

/**
 * A dispute has concluded for or against a candidate.
 * `\[para id, candidate hash, dispute result\]`
 */
export interface ParasDisputesEvent_DisputeConcluded {
    __kind: 'DisputeConcluded'
    value: [Uint8Array, DisputeResult]
}

/**
 * A dispute has timed out due to insufficient participation.
 * `\[para id, candidate hash\]`
 */
export interface ParasDisputesEvent_DisputeTimedOut {
    __kind: 'DisputeTimedOut'
    value: Uint8Array
}

/**
 * A dispute has concluded with supermajority against a candidate.
 * Block authors should no longer build on top of this head and should
 * instead revert the block at the given height. This should be the
 * number of the child of the last known valid block in the chain.
 */
export interface ParasDisputesEvent_Revert {
    __kind: 'Revert'
    value: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type RegistrarEvent = RegistrarEvent_Registered | RegistrarEvent_Deregistered | RegistrarEvent_Reserved

export interface RegistrarEvent_Registered {
    __kind: 'Registered'
    paraId: number
    manager: Uint8Array
}

export interface RegistrarEvent_Deregistered {
    __kind: 'Deregistered'
    paraId: number
}

export interface RegistrarEvent_Reserved {
    __kind: 'Reserved'
    paraId: number
    who: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SlotsEvent = SlotsEvent_NewLeasePeriod | SlotsEvent_Leased

/**
 * A new `[lease_period]` is beginning.
 */
export interface SlotsEvent_NewLeasePeriod {
    __kind: 'NewLeasePeriod'
    leasePeriod: number
}

/**
 * A para has won the right to a continuous set of lease periods as a parachain.
 * First balance is any extra amount reserved on top of the para's existing deposit.
 * Second balance is the total amount reserved.
 */
export interface SlotsEvent_Leased {
    __kind: 'Leased'
    paraId: number
    leaser: Uint8Array
    periodBegin: number
    periodCount: number
    extraReserved: bigint
    totalAmount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type AuctionsEvent = AuctionsEvent_AuctionStarted | AuctionsEvent_AuctionClosed | AuctionsEvent_Reserved | AuctionsEvent_Unreserved | AuctionsEvent_ReserveConfiscated | AuctionsEvent_BidAccepted | AuctionsEvent_WinningOffset

/**
 * An auction started. Provides its index and the block number where it will begin to
 * close and the first lease period of the quadruplet that is auctioned.
 */
export interface AuctionsEvent_AuctionStarted {
    __kind: 'AuctionStarted'
    auctionIndex: number
    leasePeriod: number
    ending: number
}

/**
 * An auction ended. All funds become unreserved.
 */
export interface AuctionsEvent_AuctionClosed {
    __kind: 'AuctionClosed'
    auctionIndex: number
}

/**
 * Funds were reserved for a winning bid. First balance is the extra amount reserved.
 * Second is the total.
 */
export interface AuctionsEvent_Reserved {
    __kind: 'Reserved'
    bidder: Uint8Array
    extraReserved: bigint
    totalAmount: bigint
}

/**
 * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
 */
export interface AuctionsEvent_Unreserved {
    __kind: 'Unreserved'
    bidder: Uint8Array
    amount: bigint
}

/**
 * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
 * but no parachain slot has been leased.
 */
export interface AuctionsEvent_ReserveConfiscated {
    __kind: 'ReserveConfiscated'
    paraId: number
    leaser: Uint8Array
    amount: bigint
}

/**
 * A new bid has been accepted as the current winner.
 */
export interface AuctionsEvent_BidAccepted {
    __kind: 'BidAccepted'
    bidder: Uint8Array
    paraId: number
    amount: bigint
    firstSlot: number
    lastSlot: number
}

/**
 * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
 */
export interface AuctionsEvent_WinningOffset {
    __kind: 'WinningOffset'
    auctionIndex: number
    blockNumber: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CrowdloanEvent = CrowdloanEvent_Created | CrowdloanEvent_Contributed | CrowdloanEvent_Withdrew | CrowdloanEvent_PartiallyRefunded | CrowdloanEvent_AllRefunded | CrowdloanEvent_Dissolved | CrowdloanEvent_HandleBidResult | CrowdloanEvent_Edited | CrowdloanEvent_MemoUpdated | CrowdloanEvent_AddedToNewRaise

/**
 * Create a new crowdloaning campaign.
 */
export interface CrowdloanEvent_Created {
    __kind: 'Created'
    paraId: number
}

/**
 * Contributed to a crowd sale.
 */
export interface CrowdloanEvent_Contributed {
    __kind: 'Contributed'
    who: Uint8Array
    fundIndex: number
    amount: bigint
}

/**
 * Withdrew full balance of a contributor.
 */
export interface CrowdloanEvent_Withdrew {
    __kind: 'Withdrew'
    who: Uint8Array
    fundIndex: number
    amount: bigint
}

/**
 * The loans in a fund have been partially dissolved, i.e. there are some left
 * over child keys that still need to be killed.
 */
export interface CrowdloanEvent_PartiallyRefunded {
    __kind: 'PartiallyRefunded'
    paraId: number
}

/**
 * All loans in a fund have been refunded.
 */
export interface CrowdloanEvent_AllRefunded {
    __kind: 'AllRefunded'
    paraId: number
}

/**
 * Fund is dissolved.
 */
export interface CrowdloanEvent_Dissolved {
    __kind: 'Dissolved'
    paraId: number
}

/**
 * The result of trying to submit a new bid to the Slots pallet.
 */
export interface CrowdloanEvent_HandleBidResult {
    __kind: 'HandleBidResult'
    paraId: number
    result: Type_56
}

/**
 * The configuration to a crowdloan has been edited.
 */
export interface CrowdloanEvent_Edited {
    __kind: 'Edited'
    paraId: number
}

/**
 * A memo has been updated.
 */
export interface CrowdloanEvent_MemoUpdated {
    __kind: 'MemoUpdated'
    who: Uint8Array
    paraId: number
    memo: Uint8Array
}

/**
 * A parachain has been moved to `NewRaise`
 */
export interface CrowdloanEvent_AddedToNewRaise {
    __kind: 'AddedToNewRaise'
    paraId: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type XcmPalletEvent = XcmPalletEvent_Attempted | XcmPalletEvent_Sent | XcmPalletEvent_UnexpectedResponse | XcmPalletEvent_ResponseReady | XcmPalletEvent_Notified | XcmPalletEvent_NotifyOverweight | XcmPalletEvent_NotifyDispatchError | XcmPalletEvent_NotifyDecodeFailed | XcmPalletEvent_InvalidResponder | XcmPalletEvent_InvalidResponderVersion | XcmPalletEvent_ResponseTaken | XcmPalletEvent_AssetsTrapped | XcmPalletEvent_VersionChangeNotified | XcmPalletEvent_SupportedVersionChanged | XcmPalletEvent_NotifyTargetSendFail | XcmPalletEvent_NotifyTargetMigrationFail

/**
 * Execution of an XCM message was attempted.
 * 
 * \[ outcome \]
 */
export interface XcmPalletEvent_Attempted {
    __kind: 'Attempted'
    value: V2Outcome
}

/**
 * A XCM message was sent.
 * 
 * \[ origin, destination, message \]
 */
export interface XcmPalletEvent_Sent {
    __kind: 'Sent'
    value: [V1MultiLocation, V1MultiLocation, V2Instruction[]]
}

/**
 * Query response received which does not match a registered query. This may be because a
 * matching query was never registered, it may be because it is a duplicate response, or
 * because the query timed out.
 * 
 * \[ origin location, id \]
 */
export interface XcmPalletEvent_UnexpectedResponse {
    __kind: 'UnexpectedResponse'
    value: [V1MultiLocation, bigint]
}

/**
 * Query response has been received and is ready for taking with `take_response`. There is
 * no registered notification call.
 * 
 * \[ id, response \]
 */
export interface XcmPalletEvent_ResponseReady {
    __kind: 'ResponseReady'
    value: [bigint, V2Response]
}

/**
 * Query response has been received and query is removed. The registered notification has
 * been dispatched and executed successfully.
 * 
 * \[ id, pallet index, call index \]
 */
export interface XcmPalletEvent_Notified {
    __kind: 'Notified'
    value: [bigint, number, number]
}

/**
 * Query response has been received and query is removed. The registered notification could
 * not be dispatched because the dispatch weight is greater than the maximum weight
 * originally budgeted by this runtime for the query result.
 * 
 * \[ id, pallet index, call index, actual weight, max budgeted weight \]
 */
export interface XcmPalletEvent_NotifyOverweight {
    __kind: 'NotifyOverweight'
    value: [bigint, number, number, bigint, bigint]
}

/**
 * Query response has been received and query is removed. There was a general error with
 * dispatching the notification call.
 * 
 * \[ id, pallet index, call index \]
 */
export interface XcmPalletEvent_NotifyDispatchError {
    __kind: 'NotifyDispatchError'
    value: [bigint, number, number]
}

/**
 * Query response has been received and query is removed. The dispatch was unable to be
 * decoded into a `Call`; this might be due to dispatch function having a signature which
 * is not `(origin, QueryId, Response)`.
 * 
 * \[ id, pallet index, call index \]
 */
export interface XcmPalletEvent_NotifyDecodeFailed {
    __kind: 'NotifyDecodeFailed'
    value: [bigint, number, number]
}

/**
 * Expected query response has been received but the origin location of the response does
 * not match that expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 * 
 * \[ origin location, id, expected location \]
 */
export interface XcmPalletEvent_InvalidResponder {
    __kind: 'InvalidResponder'
    value: [V1MultiLocation, bigint, (V1MultiLocation | undefined)]
}

/**
 * Expected query response has been received but the expected origin location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 * 
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 * 
 * \[ origin location, id \]
 */
export interface XcmPalletEvent_InvalidResponderVersion {
    __kind: 'InvalidResponderVersion'
    value: [V1MultiLocation, bigint]
}

/**
 * Received query response has been read and removed.
 * 
 * \[ id \]
 */
export interface XcmPalletEvent_ResponseTaken {
    __kind: 'ResponseTaken'
    value: bigint
}

/**
 * Some assets have been placed in an asset trap.
 * 
 * \[ hash, origin, assets \]
 */
export interface XcmPalletEvent_AssetsTrapped {
    __kind: 'AssetsTrapped'
    value: [Uint8Array, V1MultiLocation, VersionedMultiAssets]
}

/**
 * An XCM version change notification message has been attempted to be sent.
 * 
 * \[ destination, result \]
 */
export interface XcmPalletEvent_VersionChangeNotified {
    __kind: 'VersionChangeNotified'
    value: [V1MultiLocation, number]
}

/**
 * The supported version of a location has been changed. This might be through an
 * automatic notification or a manual intervention.
 * 
 * \[ location, XCM version \]
 */
export interface XcmPalletEvent_SupportedVersionChanged {
    __kind: 'SupportedVersionChanged'
    value: [V1MultiLocation, number]
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * sending the notification to it.
 * 
 * \[ location, query ID, error \]
 */
export interface XcmPalletEvent_NotifyTargetSendFail {
    __kind: 'NotifyTargetSendFail'
    value: [V1MultiLocation, bigint, V2Error]
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * migrating the location to our new XCM format.
 * 
 * \[ location, query ID \]
 */
export interface XcmPalletEvent_NotifyTargetMigrationFail {
    __kind: 'NotifyTargetMigrationFail'
    value: [VersionedMultiLocation, bigint]
}

export interface DispatchInfo {
    weight: bigint
    class: DispatchClass
    paysFee: Pays
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_TooManyConsumers | DispatchError_Token | DispatchError_Arithmetic | DispatchError_Transactional

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
    value: ModuleError
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_TooManyConsumers {
    __kind: 'TooManyConsumers'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_Transactional {
    __kind: 'Transactional'
    value: TransactionalError
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export interface Exposure {
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

export type Type_56 = Type_56_Ok | Type_56_Err

export interface Type_56_Ok {
    __kind: 'Ok'
}

export interface Type_56_Err {
    __kind: 'Err'
    value: DispatchError
}

export type AccountVote = AccountVote_Standard | AccountVote_Split

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export type LookupError = LookupError_Unknown | LookupError_BadFormat

export interface LookupError_Unknown {
    __kind: 'Unknown'
}

export interface LookupError_BadFormat {
    __kind: 'BadFormat'
}

export type ProxyType = ProxyType_Any | ProxyType_NonTransfer | ProxyType_Governance | ProxyType_Staking | ProxyType_IdentityJudgement | ProxyType_CancelProxy | ProxyType_Auction | ProxyType_Society

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

export interface ProxyType_Society {
    __kind: 'Society'
}

export interface Timepoint {
    height: number
    index: number
}

export type ElectionCompute = ElectionCompute_OnChain | ElectionCompute_Signed | ElectionCompute_Unsigned | ElectionCompute_Fallback | ElectionCompute_Emergency

export interface ElectionCompute_OnChain {
    __kind: 'OnChain'
}

export interface ElectionCompute_Signed {
    __kind: 'Signed'
}

export interface ElectionCompute_Unsigned {
    __kind: 'Unsigned'
}

export interface ElectionCompute_Fallback {
    __kind: 'Fallback'
}

export interface ElectionCompute_Emergency {
    __kind: 'Emergency'
}

export type PoolState = PoolState_Open | PoolState_Blocked | PoolState_Destroying

export interface PoolState_Open {
    __kind: 'Open'
}

export interface PoolState_Blocked {
    __kind: 'Blocked'
}

export interface PoolState_Destroying {
    __kind: 'Destroying'
}

export interface V2CandidateReceipt {
    descriptor: V2CandidateDescriptor
    commitmentsHash: Uint8Array
}

export type V2Outcome = V2Outcome_Complete | V2Outcome_Incomplete | V2Outcome_Error

export interface V2Outcome_Complete {
    __kind: 'Complete'
    value: bigint
}

export interface V2Outcome_Incomplete {
    __kind: 'Incomplete'
    value: [bigint, V2Error]
}

export interface V2Outcome_Error {
    __kind: 'Error'
    value: V2Error
}

export interface HrmpChannelId {
    sender: number
    recipient: number
}

export type DisputeLocation = DisputeLocation_Local | DisputeLocation_Remote

export interface DisputeLocation_Local {
    __kind: 'Local'
}

export interface DisputeLocation_Remote {
    __kind: 'Remote'
}

export type DisputeResult = DisputeResult_Valid | DisputeResult_Invalid

export interface DisputeResult_Valid {
    __kind: 'Valid'
}

export interface DisputeResult_Invalid {
    __kind: 'Invalid'
}

export interface V1MultiLocation {
    parents: number
    interior: V1Junctions
}

export type V2Instruction = V2Instruction_WithdrawAsset | V2Instruction_ReserveAssetDeposited | V2Instruction_ReceiveTeleportedAsset | V2Instruction_QueryResponse | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Transact | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_ClearOrigin | V2Instruction_DescendOrigin | V2Instruction_ReportError | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_ExchangeAsset | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_BuyExecution | V2Instruction_RefundSurplus | V2Instruction_SetErrorHandler | V2Instruction_SetAppendix | V2Instruction_ClearError | V2Instruction_ClaimAsset | V2Instruction_Trap | V2Instruction_SubscribeVersion | V2Instruction_UnsubscribeVersion

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V1MultiAsset[]
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V1MultiAsset[]
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V1MultiAsset[]
}

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface V2Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V2Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V2Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V2Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V2Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V2Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V1Junctions
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V1MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface V2Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface V2Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
    maxResponseWeight: bigint
}

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weightLimit: V2WeightLimit
}

export interface V2Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V2Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V2Instruction[]
}

export interface V2Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V2Instruction[]
}

export interface V2Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V2Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V1MultiAsset[]
    ticket: V1MultiLocation
}

export interface V2Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V2Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type V2Response = V2Response_Null | V2Response_Assets | V2Response_ExecutionResult | V2Response_Version

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V1MultiAsset[]
}

export interface V2Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ([number, V2Error] | undefined)
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1

export interface VersionedMultiAssets_V0 {
    __kind: 'V0'
    value: V0MultiAsset[]
}

export interface VersionedMultiAssets_V1 {
    __kind: 'V1'
    value: V1MultiAsset[]
}

export type V2Error = V2Error_Overflow | V2Error_Unimplemented | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_BadOrigin | V2Error_InvalidLocation | V2Error_AssetNotFound | V2Error_FailedToTransactAsset | V2Error_NotWithdrawable | V2Error_LocationCannotHold | V2Error_ExceedsMaxMessageSize | V2Error_DestinationUnsupported | V2Error_Transport | V2Error_Unroutable | V2Error_UnknownClaim | V2Error_FailedToDecode | V2Error_MaxWeightInvalid | V2Error_NotHoldingFees | V2Error_TooExpensive | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_WeightLimitReached | V2Error_Barrier | V2Error_WeightNotComputable

export interface V2Error_Overflow {
    __kind: 'Overflow'
}

export interface V2Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V2Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
    __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V2Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V2Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V2Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V2Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V2Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V2Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V2Error_Transport {
    __kind: 'Transport'
}

export interface V2Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V2Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V2Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V2Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V2Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V2Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V2Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V2Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface V2Error_Barrier {
    __kind: 'Barrier'
}

export interface V2Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export type VersionedMultiLocation = VersionedMultiLocation_V0 | VersionedMultiLocation_V1

export interface VersionedMultiLocation_V0 {
    __kind: 'V0'
    value: V0MultiLocation
}

export interface VersionedMultiLocation_V1 {
    __kind: 'V1'
    value: V1MultiLocation
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

export interface ModuleError {
    index: number
    error: Uint8Array
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Unsupported

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

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
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

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
    __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
    __kind: 'NoLayer'
}

export interface IndividualExposure {
    who: Uint8Array
    value: bigint
}

export interface V2CandidateDescriptor {
    paraId: number
    relayParent: Uint8Array
    collator: Uint8Array
    persistedValidationDataHash: Uint8Array
    povHash: Uint8Array
    erasureRoot: Uint8Array
    signature: Uint8Array
    paraHead: Uint8Array
    validationCodeHash: Uint8Array
}

export type V1Junctions = V1Junctions_Here | V1Junctions_X1 | V1Junctions_X2 | V1Junctions_X3 | V1Junctions_X4 | V1Junctions_X5 | V1Junctions_X6 | V1Junctions_X7 | V1Junctions_X8

export interface V1Junctions_Here {
    __kind: 'Here'
}

export interface V1Junctions_X1 {
    __kind: 'X1'
    value: V1Junction
}

export interface V1Junctions_X2 {
    __kind: 'X2'
    value: [V1Junction, V1Junction]
}

export interface V1Junctions_X3 {
    __kind: 'X3'
    value: [V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X4 {
    __kind: 'X4'
    value: [V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X5 {
    __kind: 'X5'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X6 {
    __kind: 'X6'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X7 {
    __kind: 'X7'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X8 {
    __kind: 'X8'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1MultiAsset {
    id: V1AssetId
    fun: V1Fungibility
}

export type V0OriginKind = V0OriginKind_Native | V0OriginKind_SovereignAccount | V0OriginKind_Superuser | V0OriginKind_Xcm

export interface V0OriginKind_Native {
    __kind: 'Native'
}

export interface V0OriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface V0OriginKind_Superuser {
    __kind: 'Superuser'
}

export interface V0OriginKind_Xcm {
    __kind: 'Xcm'
}

export interface DoubleEncoded {
    encoded: Uint8Array
}

export type V1MultiAssetFilter = V1MultiAssetFilter_Definite | V1MultiAssetFilter_Wild

export interface V1MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V1MultiAsset[]
}

export interface V1MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V1WildMultiAsset
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export type V0MultiAsset = V0MultiAsset_None | V0MultiAsset_All | V0MultiAsset_AllFungible | V0MultiAsset_AllNonFungible | V0MultiAsset_AllAbstractFungible | V0MultiAsset_AllAbstractNonFungible | V0MultiAsset_AllConcreteFungible | V0MultiAsset_AllConcreteNonFungible | V0MultiAsset_AbstractFungible | V0MultiAsset_AbstractNonFungible | V0MultiAsset_ConcreteFungible | V0MultiAsset_ConcreteNonFungible

export interface V0MultiAsset_None {
    __kind: 'None'
}

export interface V0MultiAsset_All {
    __kind: 'All'
}

export interface V0MultiAsset_AllFungible {
    __kind: 'AllFungible'
}

export interface V0MultiAsset_AllNonFungible {
    __kind: 'AllNonFungible'
}

export interface V0MultiAsset_AllAbstractFungible {
    __kind: 'AllAbstractFungible'
    id: Uint8Array
}

export interface V0MultiAsset_AllAbstractNonFungible {
    __kind: 'AllAbstractNonFungible'
    class: Uint8Array
}

export interface V0MultiAsset_AllConcreteFungible {
    __kind: 'AllConcreteFungible'
    id: V0MultiLocation
}

export interface V0MultiAsset_AllConcreteNonFungible {
    __kind: 'AllConcreteNonFungible'
    class: V0MultiLocation
}

export interface V0MultiAsset_AbstractFungible {
    __kind: 'AbstractFungible'
    id: Uint8Array
    amount: bigint
}

export interface V0MultiAsset_AbstractNonFungible {
    __kind: 'AbstractNonFungible'
    class: Uint8Array
    instance: V1AssetInstance
}

export interface V0MultiAsset_ConcreteFungible {
    __kind: 'ConcreteFungible'
    id: V0MultiLocation
    amount: bigint
}

export interface V0MultiAsset_ConcreteNonFungible {
    __kind: 'ConcreteNonFungible'
    class: V0MultiLocation
    instance: V1AssetInstance
}

export type V0MultiLocation = V0MultiLocation_Null | V0MultiLocation_X1 | V0MultiLocation_X2 | V0MultiLocation_X3 | V0MultiLocation_X4 | V0MultiLocation_X5 | V0MultiLocation_X6 | V0MultiLocation_X7 | V0MultiLocation_X8

export interface V0MultiLocation_Null {
    __kind: 'Null'
}

export interface V0MultiLocation_X1 {
    __kind: 'X1'
    value: V0Junction
}

export interface V0MultiLocation_X2 {
    __kind: 'X2'
    value: [V0Junction, V0Junction]
}

export interface V0MultiLocation_X3 {
    __kind: 'X3'
    value: [V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X4 {
    __kind: 'X4'
    value: [V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X5 {
    __kind: 'X5'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X6 {
    __kind: 'X6'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X7 {
    __kind: 'X7'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X8 {
    __kind: 'X8'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export type V1Junction = V1Junction_Parachain | V1Junction_AccountId32 | V1Junction_AccountIndex64 | V1Junction_AccountKey20 | V1Junction_PalletInstance | V1Junction_GeneralIndex | V1Junction_GeneralKey | V1Junction_OnlyChild | V1Junction_Plurality

export interface V1Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V1Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V0NetworkId
    id: Uint8Array
}

export interface V1Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V0NetworkId
    index: bigint
}

export interface V1Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V0NetworkId
    key: Uint8Array
}

export interface V1Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V1Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V1Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface V1Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V1Junction_Plurality {
    __kind: 'Plurality'
    id: V0BodyId
    part: V0BodyPart
}

export type V1AssetId = V1AssetId_Concrete | V1AssetId_Abstract

export interface V1AssetId_Concrete {
    __kind: 'Concrete'
    value: V1MultiLocation
}

export interface V1AssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type V1Fungibility = V1Fungibility_Fungible | V1Fungibility_NonFungible

export interface V1Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V1Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V1AssetInstance
}

export type V1WildMultiAsset = V1WildMultiAsset_All | V1WildMultiAsset_AllOf

export interface V1WildMultiAsset_All {
    __kind: 'All'
}

export interface V1WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V1AssetId
    fun: V1WildFungibility
}

export type V1AssetInstance = V1AssetInstance_Undefined | V1AssetInstance_Index | V1AssetInstance_Array4 | V1AssetInstance_Array8 | V1AssetInstance_Array16 | V1AssetInstance_Array32 | V1AssetInstance_Blob

export interface V1AssetInstance_Undefined {
    __kind: 'Undefined'
}

export interface V1AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V1AssetInstance_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface V1AssetInstance_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface V1AssetInstance_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface V1AssetInstance_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface V1AssetInstance_Blob {
    __kind: 'Blob'
    value: Uint8Array
}

export type V0Junction = V0Junction_Parent | V0Junction_Parachain | V0Junction_AccountId32 | V0Junction_AccountIndex64 | V0Junction_AccountKey20 | V0Junction_PalletInstance | V0Junction_GeneralIndex | V0Junction_GeneralKey | V0Junction_OnlyChild | V0Junction_Plurality

export interface V0Junction_Parent {
    __kind: 'Parent'
}

export interface V0Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V0Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V0NetworkId
    id: Uint8Array
}

export interface V0Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V0NetworkId
    index: bigint
}

export interface V0Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V0NetworkId
    key: Uint8Array
}

export interface V0Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V0Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V0Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface V0Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V0Junction_Plurality {
    __kind: 'Plurality'
    id: V0BodyId
    part: V0BodyPart
}

export type V0NetworkId = V0NetworkId_Any | V0NetworkId_Named | V0NetworkId_Polkadot | V0NetworkId_Kusama

export interface V0NetworkId_Any {
    __kind: 'Any'
}

export interface V0NetworkId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V0NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V0NetworkId_Kusama {
    __kind: 'Kusama'
}

export type V0BodyId = V0BodyId_Unit | V0BodyId_Named | V0BodyId_Index | V0BodyId_Executive | V0BodyId_Technical | V0BodyId_Legislative | V0BodyId_Judicial

export interface V0BodyId_Unit {
    __kind: 'Unit'
}

export interface V0BodyId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V0BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V0BodyId_Executive {
    __kind: 'Executive'
}

export interface V0BodyId_Technical {
    __kind: 'Technical'
}

export interface V0BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V0BodyId_Judicial {
    __kind: 'Judicial'
}

export type V0BodyPart = V0BodyPart_Voice | V0BodyPart_Members | V0BodyPart_Fraction | V0BodyPart_AtLeastProportion | V0BodyPart_MoreThanProportion

export interface V0BodyPart_Voice {
    __kind: 'Voice'
}

export interface V0BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V0BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V0BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V0BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export type V1WildFungibility = V1WildFungibility_Fungible | V1WildFungibility_NonFungible

export interface V1WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V1WildFungibility_NonFungible {
    __kind: 'NonFungible'
}
