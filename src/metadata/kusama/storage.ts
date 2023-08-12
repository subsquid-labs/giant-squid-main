import assert from 'assert'
import {StorageBase} from './support'
import * as v1020 from './v1020'
import * as v1022 from './v1022'
import * as v1024 from './v1024'
import * as v1027 from './v1027'
import * as v1029 from './v1029'
import * as v1030 from './v1030'
import * as v1031 from './v1031'
import * as v1032 from './v1032'
import * as v1038 from './v1038'
import * as v1039 from './v1039'
import * as v1040 from './v1040'
import * as v1042 from './v1042'
import * as v1045 from './v1045'
import * as v1050 from './v1050'
import * as v1051 from './v1051'
import * as v1052 from './v1052'
import * as v1053 from './v1053'
import * as v1054 from './v1054'
import * as v1055 from './v1055'
import * as v1058 from './v1058'
import * as v1062 from './v1062'
import * as v2005 from './v2005'
import * as v2007 from './v2007'
import * as v2008 from './v2008'
import * as v2011 from './v2011'
import * as v2013 from './v2013'
import * as v2015 from './v2015'
import * as v2022 from './v2022'
import * as v2023 from './v2023'
import * as v2024 from './v2024'
import * as v2025 from './v2025'
import * as v2026 from './v2026'
import * as v2027 from './v2027'
import * as v2028 from './v2028'
import * as v2029 from './v2029'
import * as v2030 from './v2030'
import * as v9010 from './v9010'
import * as v9030 from './v9030'
import * as v9040 from './v9040'
import * as v9050 from './v9050'
import * as v9080 from './v9080'
import * as v9090 from './v9090'
import * as v9100 from './v9100'
import * as v9111 from './v9111'
import * as v9122 from './v9122'
import * as v9130 from './v9130'
import * as v9160 from './v9160'
import * as v9170 from './v9170'
import * as v9180 from './v9180'
import * as v9190 from './v9190'
import * as v9200 from './v9200'
import * as v9220 from './v9220'
import * as v9230 from './v9230'
import * as v9250 from './v9250'
import * as v9260 from './v9260'
import * as v9271 from './v9271'
import * as v9291 from './v9291'
import * as v9300 from './v9300'
import * as v9320 from './v9320'
import * as v9340 from './v9340'
import * as v9350 from './v9350'
import * as v9370 from './v9370'
import * as v9381 from './v9381'
import * as v9420 from './v9420'
import * as v9430 from './v9430'

export class AttestationsDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Attestations'
    }

    protected getName() {
        return 'DidUpdate'
    }

    get isV1020(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    get asV1020(): AttestationsDidUpdateStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

export interface AttestationsDidUpdateStorageV1020 {
    get(): Promise<boolean>
}

export class AttestationsParaBlockAttestationsStorage extends StorageBase {
    protected getPrefix() {
        return 'Attestations'
    }

    protected getName() {
        return 'ParaBlockAttestations'
    }

    /**
     *  Attestations on a recent parachain block.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'ad8a198a3d01e7d75d496c087e6ab07e033e442693b2dae9a0a735e7162a2bf3'
    }

    /**
     *  Attestations on a recent parachain block.
     */
    get asV1020(): AttestationsParaBlockAttestationsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Attestations on a recent parachain block.
 */
export interface AttestationsParaBlockAttestationsStorageV1020 {
    get(key1: number, key2: Uint8Array): Promise<(v1020.BlockAttestations | undefined)>
    getAll(): Promise<v1020.BlockAttestations[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v1020.BlockAttestations | undefined)[]>
}

export class AttestationsRecentParaBlocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Attestations'
    }

    protected getName() {
        return 'RecentParaBlocks'
    }

    /**
     *  A mapping from modular block number (n % AttestationPeriod)
     *  to session index and the list of candidate hashes.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '331d739c1970fe15863a9470a57f354521e1e32b4c88a325098ff6848b5044ec'
    }

    /**
     *  A mapping from modular block number (n % AttestationPeriod)
     *  to session index and the list of candidate hashes.
     */
    get asV1020(): AttestationsRecentParaBlocksStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  A mapping from modular block number (n % AttestationPeriod)
 *  to session index and the list of candidate hashes.
 */
export interface AttestationsRecentParaBlocksStorageV1020 {
    get(key: number): Promise<(v1020.IncludedBlocks | undefined)>
    getAll(): Promise<v1020.IncludedBlocks[]>
    getMany(keys: number[]): Promise<(v1020.IncludedBlocks | undefined)[]>
}

export class AuctionsAuctionCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'Auctions'
    }

    protected getName() {
        return 'AuctionCounter'
    }

    /**
     *  Number of auctions started so far.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of auctions started so far.
     */
    get asV9010(): AuctionsAuctionCounterStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  Number of auctions started so far.
 */
export interface AuctionsAuctionCounterStorageV9010 {
    get(): Promise<number>
}

export class AuctionsAuctionInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'Auctions'
    }

    protected getName() {
        return 'AuctionInfo'
    }

    /**
     *  Information relating to the current auction, if there is one.
     * 
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  Information relating to the current auction, if there is one.
     * 
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    get asV9010(): AuctionsAuctionInfoStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  Information relating to the current auction, if there is one.
 * 
 *  The first item in the tuple is the lease period index that the first of the four
 *  contiguous lease periods on auction is for. The second is the block number when the
 *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
 */
export interface AuctionsAuctionInfoStorageV9010 {
    get(): Promise<([number, number] | undefined)>
}

export class AuctionsReservedAmountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Auctions'
    }

    protected getName() {
        return 'ReservedAmounts'
    }

    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'fda6a5cc800624ef757b3d079b088c0eebe85aa8e842b133f55d4d490b10f527'
    }

    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    get asV9010(): AuctionsReservedAmountsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  Amounts currently reserved in the accounts of the bidders currently winning
 *  (sub-)ranges.
 */
export interface AuctionsReservedAmountsStorageV9010 {
    get(key: [Uint8Array, number]): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [Uint8Array, number][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: bigint][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: bigint][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: bigint][]>
}

export class AuctionsWinningStorage extends StorageBase {
    protected getPrefix() {
        return 'Auctions'
    }

    protected getName() {
        return 'Winning'
    }

    /**
     *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Sample Size. The
     *  first sample of the ending period is 0; the last is `Sample Size - 1`.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'ccec52f96cdd97c91b3c9b4297f402aec9614e99b08967c8c604f74277944587'
    }

    /**
     *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Sample Size. The
     *  first sample of the ending period is 0; the last is `Sample Size - 1`.
     */
    get asV9010(): AuctionsWinningStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Sample Size. The
     *  first sample of the ending period is 0; the last is `Sample Size - 1`.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '50afa484f0cd0b49800ca936e6d5aef816fcfd7b469149f3f61b1d41d4e2bd86'
    }

    /**
     *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Sample Size. The
     *  first sample of the ending period is 0; the last is `Sample Size - 1`.
     */
    get asV9111(): AuctionsWinningStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
 *  the current auction. The map's key is the 0-based index into the Sample Size. The
 *  first sample of the ending period is 0; the last is `Sample Size - 1`.
 */
export interface AuctionsWinningStorageV9010 {
    get(key: number): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)>
    getAll(): Promise<([Uint8Array, number, bigint] | undefined)[][]>
    getMany(keys: number[]): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
}

/**
 *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
 *  the current auction. The map's key is the 0-based index into the Sample Size. The
 *  first sample of the ending period is 0; the last is `Sample Size - 1`.
 */
export interface AuctionsWinningStorageV9111 {
    get(key: number): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)>
    getAll(): Promise<([Uint8Array, number, bigint] | undefined)[][]>
    getMany(keys: number[]): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
}

export class AuthorshipAuthorStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Author'
    }

    /**
     *  Author of current block.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Author of current block.
     */
    get asV1020(): AuthorshipAuthorStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Author of current block.
 */
export interface AuthorshipAuthorStorageV1020 {
    get(): Promise<(Uint8Array | undefined)>
}

export class AuthorshipDidSetUnclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'DidSetUncles'
    }

    /**
     *  Whether uncles were already set in this block.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether uncles were already set in this block.
     */
    get asV1020(): AuthorshipDidSetUnclesStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Whether uncles were already set in this block.
 */
export interface AuthorshipDidSetUnclesStorageV1020 {
    get(): Promise<boolean>
}

export class AuthorshipUnclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Uncles'
    }

    /**
     *  Uncles
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'e10c952327a3967ba23352da69594b66914b44ebcef7e4703bb69fed952ecdd6'
    }

    /**
     *  Uncles
     */
    get asV1020(): AuthorshipUnclesStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Uncles
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '320be201dc467df78c8912d3a5ad0cb57cd9b25ab8bff2e738597ffc0a83b551'
    }

    /**
     *  Uncles
     */
    get asV9111(): AuthorshipUnclesStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Uncles
 */
export interface AuthorshipUnclesStorageV1020 {
    get(): Promise<v1020.UncleEntryItem[]>
}

/**
 *  Uncles
 */
export interface AuthorshipUnclesStorageV9111 {
    get(): Promise<v9111.UncleEntryItem[]>
}

export class BabeAuthorVrfRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'AuthorVrfRandomness'
    }

    /**
     *  Temporary value (cleared at block finalization) that includes the VRF output generated
     *  at this block. This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     */
    get isV2026(): boolean {
        return this.getTypeHash() === '10a2769b0f42175702ad26b83248cff46d4c3e32ecee58ea6ff2417630585d13'
    }

    /**
     *  Temporary value (cleared at block finalization) that includes the VRF output generated
     *  at this block. This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     */
    get asV2026(): BabeAuthorVrfRandomnessStorageV2026 {
        assert(this.isV2026)
        return this as any
    }
}

/**
 *  Temporary value (cleared at block finalization) that includes the VRF output generated
 *  at this block. This field should always be populated during block processing unless
 *  secondary plain slots are enabled (which don't contain a VRF output).
 */
export interface BabeAuthorVrfRandomnessStorageV2026 {
    get(): Promise<(Uint8Array | undefined)>
}

export class BabeAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  Current epoch authorities.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
    }

    /**
     *  Current epoch authorities.
     */
    get asV1020(): BabeAuthoritiesStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Current epoch authorities.
 */
export interface BabeAuthoritiesStorageV1020 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class BabeCurrentSlotStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'CurrentSlot'
    }

    /**
     *  Current slot number.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current slot number.
     */
    get asV1020(): BabeCurrentSlotStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Current slot number.
 */
export interface BabeCurrentSlotStorageV1020 {
    get(): Promise<bigint>
}

export class BabeEpochConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochConfig'
    }

    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in genesis.
     */
    get isV2030(): boolean {
        return this.getTypeHash() === '02679d53f6edd683908cd84a1275afad3bb8d1f4b9cb9af0b08cd3d89027b3ef'
    }

    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in genesis.
     */
    get asV2030(): BabeEpochConfigStorageV2030 {
        assert(this.isV2030)
        return this as any
    }
}

/**
 *  The configuration for the current epoch. Should never be `None` as it is initialized in genesis.
 */
export interface BabeEpochConfigStorageV2030 {
    get(): Promise<(v2030.BabeEpochConfiguration | undefined)>
}

export class BabeEpochIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochIndex'
    }

    /**
     *  Current epoch index.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current epoch index.
     */
    get asV1020(): BabeEpochIndexStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Current epoch index.
 */
export interface BabeEpochIndexStorageV1020 {
    get(): Promise<bigint>
}

export class BabeEpochStartStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochStart'
    }

    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    get isV2030(): boolean {
        return this.getTypeHash() === '21d7691711cd2bd6f3fc4d179c912487bf24c02c8e4e5fd183103936340b5cc5'
    }

    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    get asV2030(): BabeEpochStartStorageV2030 {
        assert(this.isV2030)
        return this as any
    }
}

/**
 *  The block numbers when the last and current epoch have started, respectively `N-1` and
 *  `N`.
 *  NOTE: We track this is in order to annotate the block number when a given pool of
 *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
 *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
 */
export interface BabeEpochStartStorageV2030 {
    get(): Promise<[number, number]>
}

export class BabeGenesisSlotStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'GenesisSlot'
    }

    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    get asV1020(): BabeGenesisSlotStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The slot at which the first epoch actually started. This is 0
 *  until the first block of the chain.
 */
export interface BabeGenesisSlotStorageV1020 {
    get(): Promise<bigint>
}

export class BabeInitializedStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Initialized'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'baa8b35cc3c4f9962c8e7906c4e027bf52bf107cfe165d1c64edc4d8707f6b83'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get asV1020(): BabeInitializedStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '16ccca942b9cb8220d11bc4ab1a33375a3c8ed33a2e69b60561f6e99a60ae492'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get asV9220(): BabeInitializedStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'd640aa265bbc697c1d06e978513ab478b54cefe16a2b8b11b22c93e5a17fb0de'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get asV9420(): BabeInitializedStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface BabeInitializedStorageV1020 {
    get(): Promise<((Uint8Array | undefined) | undefined)>
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface BabeInitializedStorageV9220 {
    get(): Promise<((v9220.PreDigest | undefined) | undefined)>
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface BabeInitializedStorageV9420 {
    get(): Promise<((v9420.PreDigest | undefined) | undefined)>
}

export class BabeLatenessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Lateness'
    }

    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    get asV1058(): BabeLatenessStorageV1058 {
        assert(this.isV1058)
        return this as any
    }
}

/**
 *  How late the current block is compared to its parent.
 * 
 *  This entry is populated as part of block execution and is cleaned up
 *  on block finalization. Querying this storage entry outside of block
 *  execution context should always yield zero.
 */
export interface BabeLatenessStorageV1058 {
    get(): Promise<number>
}

export class BabeNextAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextAuthorities'
    }

    /**
     *  Next epoch authorities.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
    }

    /**
     *  Next epoch authorities.
     */
    get asV2028(): BabeNextAuthoritiesStorageV2028 {
        assert(this.isV2028)
        return this as any
    }
}

/**
 *  Next epoch authorities.
 */
export interface BabeNextAuthoritiesStorageV2028 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class BabeNextEpochConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextEpochConfig'
    }

    /**
     *  Next epoch configuration, if changed.
     */
    get isV2005(): boolean {
        return this.getTypeHash() === '007656ed996dcee130efb3a698c60ea276980e9b755810b4328f802b3398dbc6'
    }

    /**
     *  Next epoch configuration, if changed.
     */
    get asV2005(): BabeNextEpochConfigStorageV2005 {
        assert(this.isV2005)
        return this as any
    }

    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    get isV2030(): boolean {
        return this.getTypeHash() === '02679d53f6edd683908cd84a1275afad3bb8d1f4b9cb9af0b08cd3d89027b3ef'
    }

    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    get asV2030(): BabeNextEpochConfigStorageV2030 {
        assert(this.isV2030)
        return this as any
    }
}

/**
 *  Next epoch configuration, if changed.
 */
export interface BabeNextEpochConfigStorageV2005 {
    get(): Promise<(v2005.NextConfigDescriptor | undefined)>
}

/**
 *  The configuration for the next epoch, `None` if the config will not change
 *  (you can fallback to `EpochConfig` instead in that case).
 */
export interface BabeNextEpochConfigStorageV2030 {
    get(): Promise<(v2030.BabeEpochConfiguration | undefined)>
}

export class BabeNextRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextRandomness'
    }

    /**
     *  Next epoch randomness.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Next epoch randomness.
     */
    get asV1020(): BabeNextRandomnessStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Next epoch randomness.
 */
export interface BabeNextRandomnessStorageV1020 {
    get(): Promise<Uint8Array>
}

export class BabePendingEpochConfigChangeStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'PendingEpochConfigChange'
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get isV2030(): boolean {
        return this.getTypeHash() === '007656ed996dcee130efb3a698c60ea276980e9b755810b4328f802b3398dbc6'
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get asV2030(): BabePendingEpochConfigChangeStorageV2030 {
        assert(this.isV2030)
        return this as any
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'f5cc4c82ad97d6c0a6152a4f85104de3d2cb7e03288f50c7291e3d6fd9a88b9c'
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get asV9111(): BabePendingEpochConfigChangeStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface BabePendingEpochConfigChangeStorageV2030 {
    get(): Promise<(v2030.NextConfigDescriptor | undefined)>
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface BabePendingEpochConfigChangeStorageV9111 {
    get(): Promise<(v9111.NextConfigDescriptor | undefined)>
}

export class BabeRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Randomness'
    }

    /**
     *  The epoch randomness for the *current* epoch.
     * 
     *  # Security
     * 
     *  This MUST NOT be used for gambling, as it can be influenced by a
     *  malicious validator in the short term. It MAY be used in many
     *  cryptographic protocols, however, so long as one remembers that this
     *  (like everything else on-chain) it is public. For example, it can be
     *  used where a number is needed that cannot have been chosen by an
     *  adversary, for purposes such as public-coin zero-knowledge proofs.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The epoch randomness for the *current* epoch.
     * 
     *  # Security
     * 
     *  This MUST NOT be used for gambling, as it can be influenced by a
     *  malicious validator in the short term. It MAY be used in many
     *  cryptographic protocols, however, so long as one remembers that this
     *  (like everything else on-chain) it is public. For example, it can be
     *  used where a number is needed that cannot have been chosen by an
     *  adversary, for purposes such as public-coin zero-knowledge proofs.
     */
    get asV1020(): BabeRandomnessStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The epoch randomness for the *current* epoch.
 * 
 *  # Security
 * 
 *  This MUST NOT be used for gambling, as it can be influenced by a
 *  malicious validator in the short term. It MAY be used in many
 *  cryptographic protocols, however, so long as one remembers that this
 *  (like everything else on-chain) it is public. For example, it can be
 *  used where a number is needed that cannot have been chosen by an
 *  adversary, for purposes such as public-coin zero-knowledge proofs.
 */
export interface BabeRandomnessStorageV1020 {
    get(): Promise<Uint8Array>
}

export class BabeSegmentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'SegmentIndex'
    }

    /**
     *  Randomness under construction.
     * 
     *  We make a tradeoff between storage accesses and list length.
     *  We store the under-construction randomness in segments of up to
     *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
     * 
     *  Once a segment reaches this length, we begin the next one.
     *  We reset all segments and return to `0` at the beginning of every
     *  epoch.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Randomness under construction.
     * 
     *  We make a tradeoff between storage accesses and list length.
     *  We store the under-construction randomness in segments of up to
     *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
     * 
     *  Once a segment reaches this length, we begin the next one.
     *  We reset all segments and return to `0` at the beginning of every
     *  epoch.
     */
    get asV1020(): BabeSegmentIndexStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Randomness under construction.
 * 
 *  We make a tradeoff between storage accesses and list length.
 *  We store the under-construction randomness in segments of up to
 *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
 * 
 *  Once a segment reaches this length, we begin the next one.
 *  We reset all segments and return to `0` at the beginning of every
 *  epoch.
 */
export interface BabeSegmentIndexStorageV1020 {
    get(): Promise<number>
}

export class BabeSkippedEpochsStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'SkippedEpochs'
    }

    /**
     *  A list of the last 100 skipped epochs and the corresponding session index
     *  when the epoch was skipped.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof
     *  must contains a key-ownership proof for a given session, therefore we need a
     *  way to tie together sessions and epoch indices, i.e. we need to validate that
     *  a validator was the owner of a given key on a given session, and what the
     *  active epoch index was during that session.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '3df30e4db0015157d5d69bc8676ac0eac9290eba6d0cca73267e7c398c14a688'
    }

    /**
     *  A list of the last 100 skipped epochs and the corresponding session index
     *  when the epoch was skipped.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof
     *  must contains a key-ownership proof for a given session, therefore we need a
     *  way to tie together sessions and epoch indices, i.e. we need to validate that
     *  a validator was the owner of a given key on a given session, and what the
     *  active epoch index was during that session.
     */
    get asV9420(): BabeSkippedEpochsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  A list of the last 100 skipped epochs and the corresponding session index
 *  when the epoch was skipped.
 * 
 *  This is only used for validating equivocation proofs. An equivocation proof
 *  must contains a key-ownership proof for a given session, therefore we need a
 *  way to tie together sessions and epoch indices, i.e. we need to validate that
 *  a validator was the owner of a given key on a given session, and what the
 *  active epoch index was during that session.
 */
export interface BabeSkippedEpochsStorageV9420 {
    get(): Promise<[bigint, number][]>
}

export class BabeUnderConstructionStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'UnderConstruction'
    }

    get isV1020(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    get asV1020(): BabeUnderConstructionStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

export interface BabeUnderConstructionStorageV1020 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
}

export class BagsListCounterForListNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'BagsList'
    }

    protected getName() {
        return 'CounterForListNodes'
    }

    /**
     *  How many ids are registered.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  How many ids are registered.
     */
    get asV9111(): BagsListCounterForListNodesStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  How many ids are registered.
 */
export interface BagsListCounterForListNodesStorageV9111 {
    get(): Promise<number>
}

export class BagsListListBagsStorage extends StorageBase {
    protected getPrefix() {
        return 'BagsList'
    }

    protected getName() {
        return 'ListBags'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '5e403bdbad581142351437d955e87280596a0c5b07d7b18a98a2f9d2fb3469cf'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get asV9111(): BagsListListBagsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  A bag stored in storage.
 * 
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface BagsListListBagsStorageV9111 {
    get(key: bigint): Promise<(v9111.Bag | undefined)>
    getAll(): Promise<v9111.Bag[]>
    getMany(keys: bigint[]): Promise<(v9111.Bag | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v9111.Bag][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v9111.Bag][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v9111.Bag][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v9111.Bag][]>
}

export class BagsListListNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'BagsList'
    }

    protected getName() {
        return 'ListNodes'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'e07d9d0de844ae72bdfc2a5781243a5d680dcb863542337f28bae8b21536e8d2'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get asV9111(): BagsListListNodesStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  A single node, within some bag.
 * 
 *  Nodes store links forward and back within their respective bags.
 */
export interface BagsListListNodesStorageV9111 {
    get(key: Uint8Array): Promise<(v9111.Node | undefined)>
    getAll(): Promise<v9111.Node[]>
    getMany(keys: Uint8Array[]): Promise<(v9111.Node | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9111.Node][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9111.Node][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9111.Node][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9111.Node][]>
}

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
     *  is ever zero, then the entry *MUST* be removed.
     * 
     *  NOTE: This is only used in the case that this module is used to store balances.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
     *  is ever zero, then the entry *MUST* be removed.
     * 
     *  NOTE: This is only used in the case that this module is used to store balances.
     */
    get asV1050(): BalancesAccountStorageV1050 {
        assert(this.isV1050)
        return this as any
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '12d9e780c790f66e9c340b94cabd98da447e1087819d4acb4b1fe22bbb2783fb'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV9420(): BalancesAccountStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
 *  is ever zero, then the entry *MUST* be removed.
 * 
 *  NOTE: This is only used in the case that this module is used to store balances.
 */
export interface BalancesAccountStorageV1050 {
    get(key: Uint8Array): Promise<v1050.AccountData>
    getAll(): Promise<v1050.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v1050.AccountData[]>
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV9420 {
    get(key: Uint8Array): Promise<v9420.AccountData>
    getAll(): Promise<v9420.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v9420.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.AccountData][]>
}

export class BalancesFreeBalanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'FreeBalance'
    }

    /**
     *  The 'free' balance of a given account.
     * 
     *  This is the only balance that matters in terms of most operations on tokens. It
     *  alone is used to determine the balance when in the contract execution environment. When this
     *  balance falls below the value of `ExistentialDeposit`, then the 'current account' is
     *  deleted: specifically `FreeBalance`. Further, the `OnFreeBalanceZero` callback
     *  is invoked, giving a chance to external modules to clean up data associated with
     *  the deleted account.
     * 
     *  `system::AccountNonce` is also deleted if `ReservedBalance` is also zero (it also gets
     *  collapsed to zero if it ever becomes less than `ExistentialDeposit`.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '0bac40afaf72ceea5a87ae2baaa5fe7f69915323f3293bdd970e7790a9d968c0'
    }

    /**
     *  The 'free' balance of a given account.
     * 
     *  This is the only balance that matters in terms of most operations on tokens. It
     *  alone is used to determine the balance when in the contract execution environment. When this
     *  balance falls below the value of `ExistentialDeposit`, then the 'current account' is
     *  deleted: specifically `FreeBalance`. Further, the `OnFreeBalanceZero` callback
     *  is invoked, giving a chance to external modules to clean up data associated with
     *  the deleted account.
     * 
     *  `system::AccountNonce` is also deleted if `ReservedBalance` is also zero (it also gets
     *  collapsed to zero if it ever becomes less than `ExistentialDeposit`.
     */
    get asV1020(): BalancesFreeBalanceStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The 'free' balance of a given account.
 * 
 *  This is the only balance that matters in terms of most operations on tokens. It
 *  alone is used to determine the balance when in the contract execution environment. When this
 *  balance falls below the value of `ExistentialDeposit`, then the 'current account' is
 *  deleted: specifically `FreeBalance`. Further, the `OnFreeBalanceZero` callback
 *  is invoked, giving a chance to external modules to clean up data associated with
 *  the deleted account.
 * 
 *  `system::AccountNonce` is also deleted if `ReservedBalance` is also zero (it also gets
 *  collapsed to zero if it ever becomes less than `ExistentialDeposit`.
 */
export interface BalancesFreeBalanceStorageV1020 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
}

export class BalancesFreezesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Freezes'
    }

    /**
     *  Freeze locks on account balances.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Freeze locks on account balances.
     */
    get asV9420(): BalancesFreezesStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Freeze locks on account balances.
 */
export interface BalancesFreezesStorageV9420 {
    get(key: Uint8Array): Promise<v9420.Type_544[]>
    getAll(): Promise<v9420.Type_544[][]>
    getMany(keys: Uint8Array[]): Promise<v9420.Type_544[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.Type_544[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.Type_544[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.Type_544[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.Type_544[]][]>
}

export class BalancesHoldsStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Holds'
    }

    /**
     *  Holds on account balances.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '1357a5028f02dbeaef3cb8194f41eb4771aedae42de3395d2fdea7b8de0dfa4d'
    }

    /**
     *  Holds on account balances.
     */
    get asV9420(): BalancesHoldsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Holds on account balances.
 */
export interface BalancesHoldsStorageV9420 {
    get(key: Uint8Array): Promise<v9420.IdAmount[]>
    getAll(): Promise<v9420.IdAmount[][]>
    getMany(keys: Uint8Array[]): Promise<v9420.IdAmount[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.IdAmount[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.IdAmount[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.IdAmount[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.IdAmount[]][]>
}

export class BalancesInactiveIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'InactiveIssuance'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV9340(): BalancesInactiveIssuanceStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageV9340 {
    get(): Promise<bigint>
}

export class BalancesLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks on some account balances.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '329862747441bc673e51ce6a50e7fd4e419560625c603bf3cee1e4cbf5404f36'
    }

    /**
     *  Any liquidity locks on some account balances.
     */
    get asV1020(): BalancesLocksStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV1050(): BalancesLocksStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 */
export interface BalancesLocksStorageV1020 {
    get(key: Uint8Array): Promise<v1020.BalanceLock[]>
    getAll(): Promise<v1020.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<v1020.BalanceLock[][]>
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageV1050 {
    get(key: Uint8Array): Promise<v1050.BalanceLock[]>
    getAll(): Promise<v1050.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<v1050.BalanceLock[][]>
}

export class BalancesNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isV1020(): boolean {
        return this.getTypeHash() === '3c9260c078e57deb94e3d10dca1995a3263c48d53634c311a3537412486bb35e'
    }

    get asV1020(): BalancesNextFeeMultiplierStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

export interface BalancesNextFeeMultiplierStorageV1020 {
    get(): Promise<bigint>
}

export class BalancesReservedBalanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'ReservedBalance'
    }

    /**
     *  The amount of the balance of a given account that is externally reserved; this can still get
     *  slashed, but gets slashed last of all.
     * 
     *  This balance is a 'reserve' balance that other subsystems use in order to set aside tokens
     *  that are still 'owned' by the account holder, but which are suspendable.
     * 
     *  When this balance falls below the value of `ExistentialDeposit`, then this 'reserve account'
     *  is deleted: specifically, `ReservedBalance`.
     * 
     *  `system::AccountNonce` is also deleted if `FreeBalance` is also zero (it also gets
     *  collapsed to zero if it ever becomes less than `ExistentialDeposit`.)
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '0bac40afaf72ceea5a87ae2baaa5fe7f69915323f3293bdd970e7790a9d968c0'
    }

    /**
     *  The amount of the balance of a given account that is externally reserved; this can still get
     *  slashed, but gets slashed last of all.
     * 
     *  This balance is a 'reserve' balance that other subsystems use in order to set aside tokens
     *  that are still 'owned' by the account holder, but which are suspendable.
     * 
     *  When this balance falls below the value of `ExistentialDeposit`, then this 'reserve account'
     *  is deleted: specifically, `ReservedBalance`.
     * 
     *  `system::AccountNonce` is also deleted if `FreeBalance` is also zero (it also gets
     *  collapsed to zero if it ever becomes less than `ExistentialDeposit`.)
     */
    get asV1020(): BalancesReservedBalanceStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The amount of the balance of a given account that is externally reserved; this can still get
 *  slashed, but gets slashed last of all.
 * 
 *  This balance is a 'reserve' balance that other subsystems use in order to set aside tokens
 *  that are still 'owned' by the account holder, but which are suspendable.
 * 
 *  When this balance falls below the value of `ExistentialDeposit`, then this 'reserve account'
 *  is deleted: specifically, `ReservedBalance`.
 * 
 *  `system::AccountNonce` is also deleted if `FreeBalance` is also zero (it also gets
 *  collapsed to zero if it ever becomes less than `ExistentialDeposit`.)
 */
export interface BalancesReservedBalanceStorageV1020 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
}

export class BalancesReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV9050(): BalancesReservesStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageV9050 {
    get(key: Uint8Array): Promise<v9050.ReserveData[]>
    getAll(): Promise<v9050.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v9050.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9050.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9050.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9050.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9050.ReserveData[]][]>
}

export class BalancesStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asV1050(): BalancesStorageVersionStorageV1050 {
        assert(this.isV1050)
        return this as any
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asV9111(): BalancesStorageVersionStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageV1050 {
    get(): Promise<v1050.Releases>
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageV9111 {
    get(): Promise<v9111.Releases>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV1020(): BalancesTotalIssuanceStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV1020 {
    get(): Promise<bigint>
}

export class BalancesVestingStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Vesting'
    }

    /**
     *  Information regarding the vesting of a given account.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '70ea21851f5b3aaf2fe97373762ec4196dec739099ef671cf4f20dd079aa66b4'
    }

    /**
     *  Information regarding the vesting of a given account.
     */
    get asV1020(): BalancesVestingStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Information regarding the vesting of a given account.
 */
export interface BalancesVestingStorageV1020 {
    get(key: Uint8Array): Promise<(v1020.VestingSchedule | undefined)>
    getAll(): Promise<v1020.VestingSchedule[]>
    getMany(keys: Uint8Array[]): Promise<(v1020.VestingSchedule | undefined)[]>
}

export class BountiesBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'Bounties'
    }

    /**
     *  Bounties that have been made.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asV9111(): BountiesBountiesStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageV9111 {
    get(key: number): Promise<(v9111.Bounty | undefined)>
    getAll(): Promise<v9111.Bounty[]>
    getMany(keys: number[]): Promise<(v9111.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9111.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v9111.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9111.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9111.Bounty][]>
}

export class BountiesBountyApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyApprovals'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get asV9111(): BountiesBountyApprovalsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Bounty indices that have been approved but not yet funded.
 */
export interface BountiesBountyApprovalsStorageV9111 {
    get(): Promise<number[]>
}

export class BountiesBountyCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyCount'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get asV9111(): BountiesBountyCountStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Number of bounty proposals that have been made.
 */
export interface BountiesBountyCountStorageV9111 {
    get(): Promise<number>
}

export class BountiesBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyDescriptions'
    }

    /**
     *  The description of each bounty.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV9111(): BountiesBountyDescriptionsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageV9111 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ChildBountiesChildBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildBounties'
    }

    /**
     *  Child-bounties that have been added.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '27265a54e9a270a9e783aa4baa7a1318433a77722a99de466a3afe5e9d56ba7d'
    }

    /**
     *  Child-bounties that have been added.
     */
    get asV9190(): ChildBountiesChildBountiesStorageV9190 {
        assert(this.isV9190)
        return this as any
    }
}

/**
 *  Child-bounties that have been added.
 */
export interface ChildBountiesChildBountiesStorageV9190 {
    get(key1: number, key2: number): Promise<(v9190.ChildBounty | undefined)>
    getAll(): Promise<v9190.ChildBounty[]>
    getMany(keys: [number, number][]): Promise<(v9190.ChildBounty | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v9190.ChildBounty][]>
    getPairs(key1: number): Promise<[k: [number, number], v: v9190.ChildBounty][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: v9190.ChildBounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v9190.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: v9190.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: v9190.ChildBounty][]>
}

export class ChildBountiesChildBountyCountStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildBountyCount'
    }

    /**
     *  Number of total child bounties.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of total child bounties.
     */
    get asV9190(): ChildBountiesChildBountyCountStorageV9190 {
        assert(this.isV9190)
        return this as any
    }
}

/**
 *  Number of total child bounties.
 */
export interface ChildBountiesChildBountyCountStorageV9190 {
    get(): Promise<number>
}

export class ChildBountiesChildBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildBountyDescriptions'
    }

    /**
     *  The description of each child-bounty.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each child-bounty.
     */
    get asV9190(): ChildBountiesChildBountyDescriptionsStorageV9190 {
        assert(this.isV9190)
        return this as any
    }
}

/**
 *  The description of each child-bounty.
 */
export interface ChildBountiesChildBountyDescriptionsStorageV9190 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ChildBountiesChildrenCuratorFeesStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildrenCuratorFees'
    }

    /**
     *  The cumulative child-bounty curator fee for each parent bounty.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The cumulative child-bounty curator fee for each parent bounty.
     */
    get asV9190(): ChildBountiesChildrenCuratorFeesStorageV9190 {
        assert(this.isV9190)
        return this as any
    }
}

/**
 *  The cumulative child-bounty curator fee for each parent bounty.
 */
export interface ChildBountiesChildrenCuratorFeesStorageV9190 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class ChildBountiesParentChildBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ParentChildBounties'
    }

    /**
     *  Number of child-bounties per parent bounty.
     *  Map of parent bounty index to number of child bounties.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
    }

    /**
     *  Number of child-bounties per parent bounty.
     *  Map of parent bounty index to number of child bounties.
     */
    get asV9190(): ChildBountiesParentChildBountiesStorageV9190 {
        assert(this.isV9190)
        return this as any
    }
}

/**
 *  Number of child-bounties per parent bounty.
 *  Map of parent bounty index to number of child bounties.
 */
export interface ChildBountiesParentChildBountiesStorageV9190 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class ClaimsClaimsStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Claims'
    }

    get isV1020(): boolean {
        return this.getTypeHash() === 'a4e45b744228821d2d599c2e7bd1993b9bd523df83f8ee660f73e52be555e75c'
    }

    get asV1020(): ClaimsClaimsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

export interface ClaimsClaimsStorageV1020 {
    get(key: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<(bigint | undefined)[]>
}

export class ClaimsPreclaimsStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Preclaims'
    }

    /**
     *  Pre-claimed Ethereum accounts, by the Account ID that they are claimed to.
     */
    get isV2005(): boolean {
        return this.getTypeHash() === 'aedc9d9adf78c2e711b858d1696263a8b674eb7b149cc3ba7ab036d78ef5720d'
    }

    /**
     *  Pre-claimed Ethereum accounts, by the Account ID that they are claimed to.
     */
    get asV2005(): ClaimsPreclaimsStorageV2005 {
        assert(this.isV2005)
        return this as any
    }
}

/**
 *  Pre-claimed Ethereum accounts, by the Account ID that they are claimed to.
 */
export interface ClaimsPreclaimsStorageV2005 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class ClaimsSigningStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Signing'
    }

    /**
     *  The statement kind that must be signed, if any.
     */
    get isV2005(): boolean {
        return this.getTypeHash() === '6f2974b0bc6719581bb9f20af8ac8795a47255266687127e2ee37f8df92bfb51'
    }

    /**
     *  The statement kind that must be signed, if any.
     */
    get asV2005(): ClaimsSigningStorageV2005 {
        assert(this.isV2005)
        return this as any
    }
}

/**
 *  The statement kind that must be signed, if any.
 */
export interface ClaimsSigningStorageV2005 {
    get(key: Uint8Array): Promise<(v2005.StatementKind | undefined)>
    getAll(): Promise<v2005.StatementKind[]>
    getMany(keys: Uint8Array[]): Promise<(v2005.StatementKind | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2005.StatementKind][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2005.StatementKind][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2005.StatementKind][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2005.StatementKind][]>
}

export class ClaimsTotalStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Total'
    }

    get isV1020(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV1020(): ClaimsTotalStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

export interface ClaimsTotalStorageV1020 {
    get(): Promise<bigint>
}

export class ClaimsVestingStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Vesting'
    }

    /**
     *  Vesting schedule for a claim.
     *  First balance is the total amount that should be held for vesting.
     *  Second balance is how much should be unlocked per block.
     *  The block number is when the vesting should start.
     */
    get isV1024(): boolean {
        return this.getTypeHash() === 'fb6e9345088f9784f1d027b11eaa907f04187e59dea733acc7ff1be7dd341d6f'
    }

    /**
     *  Vesting schedule for a claim.
     *  First balance is the total amount that should be held for vesting.
     *  Second balance is how much should be unlocked per block.
     *  The block number is when the vesting should start.
     */
    get asV1024(): ClaimsVestingStorageV1024 {
        assert(this.isV1024)
        return this as any
    }
}

/**
 *  Vesting schedule for a claim.
 *  First balance is the total amount that should be held for vesting.
 *  Second balance is how much should be unlocked per block.
 *  The block number is when the vesting should start.
 */
export interface ClaimsVestingStorageV1024 {
    get(key: Uint8Array): Promise<([bigint, bigint, number] | undefined)>
    getAll(): Promise<[bigint, bigint, number][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, bigint, number] | undefined)[]>
}

export class ConfigurationActiveConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Configuration'
    }

    protected getName() {
        return 'ActiveConfig'
    }

    /**
     *  The active configuration for the current session.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'c083cec301f8abae0215094a7d3f838418d1b61c82eaf8f51690d126aa7bab3e'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV9010(): ConfigurationActiveConfigStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  The active configuration for the current session.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '3b411eb762090842fcb3eb731a73f8155fb7e5c0aab9d12d8afab26e199e7e4b'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV9111(): ConfigurationActiveConfigStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  The active configuration for the current session.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === '2f8b682bb3ba64c97cf407fce38c85cea560822df61abded7d790568ae6783d5'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV9160(): ConfigurationActiveConfigStorageV9160 {
        assert(this.isV9160)
        return this as any
    }

    /**
     *  The active configuration for the current session.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === 'ca162b5f811d7cd7a6777d1aecb2fa039f74633179010c8cf0e0d1630dbce770'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV9291(): ConfigurationActiveConfigStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  The active configuration for the current session.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === 'fe0de4fbd530b95b6c08c4919a8b39228534fb996d2be1fe672434d68b4a8eb1'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV9320(): ConfigurationActiveConfigStorageV9320 {
        assert(this.isV9320)
        return this as any
    }

    /**
     *  The active configuration for the current session.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === 'cf652c18f01bf19a2433f416ea01f8cb5359f558fae8b079f28f8569f8cb2350'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV9370(): ConfigurationActiveConfigStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  The active configuration for the current session.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'ca24d99f8fea569d11276f4c694f1c66e82ffea6823784cf4985d47aa472b537'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV9420(): ConfigurationActiveConfigStorageV9420 {
        assert(this.isV9420)
        return this as any
    }

    /**
     *  The active configuration for the current session.
     */
    get isV9430(): boolean {
        return this.getTypeHash() === '24f593f62af5132d4398465549747162bc59bf53c6747b027b6e9da9a173b00e'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV9430(): ConfigurationActiveConfigStorageV9430 {
        assert(this.isV9430)
        return this as any
    }
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV9010 {
    get(): Promise<v9010.HostConfiguration>
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV9111 {
    get(): Promise<v9111.HostConfiguration>
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV9160 {
    get(): Promise<v9160.HostConfiguration>
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV9291 {
    get(): Promise<v9291.HostConfiguration>
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV9320 {
    get(): Promise<v9320.HostConfiguration>
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV9370 {
    get(): Promise<v9370.HostConfiguration>
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV9420 {
    get(): Promise<v9420.HostConfiguration>
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV9430 {
    get(): Promise<v9430.HostConfiguration>
}

export class ConfigurationBypassConsistencyCheckStorage extends StorageBase {
    protected getPrefix() {
        return 'Configuration'
    }

    protected getName() {
        return 'BypassConsistencyCheck'
    }

    /**
     *  If this is set, then the configuration setters will bypass the consistency checks. This
     *  is meant to be used only as the last resort.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  If this is set, then the configuration setters will bypass the consistency checks. This
     *  is meant to be used only as the last resort.
     */
    get asV9160(): ConfigurationBypassConsistencyCheckStorageV9160 {
        assert(this.isV9160)
        return this as any
    }
}

/**
 *  If this is set, then the configuration setters will bypass the consistency checks. This
 *  is meant to be used only as the last resort.
 */
export interface ConfigurationBypassConsistencyCheckStorageV9160 {
    get(): Promise<boolean>
}

export class ConfigurationPendingConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Configuration'
    }

    protected getName() {
        return 'PendingConfig'
    }

    /**
     *  Pending configuration (if any) for the next session.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'df282e2976abbcac8359f05072ed80135ebc9760900f21d932fe5a29c921168b'
    }

    /**
     *  Pending configuration (if any) for the next session.
     */
    get asV9010(): ConfigurationPendingConfigStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  Pending configuration (if any) for the next session.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '260f6403d8b6c797e03fa4606d6d2021dcd15ad353b2cd28c6ed27230e602897'
    }

    /**
     *  Pending configuration (if any) for the next session.
     */
    get asV9111(): ConfigurationPendingConfigStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Pending configuration (if any) for the next session.
 */
export interface ConfigurationPendingConfigStorageV9010 {
    get(key: number): Promise<(v9010.HostConfiguration | undefined)>
    getAll(): Promise<v9010.HostConfiguration[]>
    getMany(keys: number[]): Promise<(v9010.HostConfiguration | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9010.HostConfiguration][]>
    getPairs(key: number): Promise<[k: number, v: v9010.HostConfiguration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9010.HostConfiguration][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9010.HostConfiguration][]>
}

/**
 *  Pending configuration (if any) for the next session.
 */
export interface ConfigurationPendingConfigStorageV9111 {
    get(key: number): Promise<(v9111.HostConfiguration | undefined)>
    getAll(): Promise<v9111.HostConfiguration[]>
    getMany(keys: number[]): Promise<(v9111.HostConfiguration | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9111.HostConfiguration][]>
    getPairs(key: number): Promise<[k: number, v: v9111.HostConfiguration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9111.HostConfiguration][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9111.HostConfiguration][]>
}

export class ConfigurationPendingConfigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Configuration'
    }

    protected getName() {
        return 'PendingConfigs'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === '64b626b1a713b38b2912ea906474713d0426d98b496a254dedaf0d5664daef62'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV9160(): ConfigurationPendingConfigsStorageV9160 {
        assert(this.isV9160)
        return this as any
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === 'e66df23f56745228fac9a39b351a614d8d7cd03a234ef02643504298936edf39'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV9291(): ConfigurationPendingConfigsStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '91cb7e3a0586dbf96a643a52ea4d45084f65a5fe46383e910f9ee36275d9baea'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV9320(): ConfigurationPendingConfigsStorageV9320 {
        assert(this.isV9320)
        return this as any
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '7e1cf5dcc03b8629ac374a7ef87cf4c04216a6b720c26877b65e525f2bde0fbd'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV9370(): ConfigurationPendingConfigsStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '7e133ae8bb548ce7f1c88397dd27ac1808948dafcc866287775db507703d05aa'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV9420(): ConfigurationPendingConfigsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV9430(): boolean {
        return this.getTypeHash() === 'effacbdd6b4609dc6facb4c783561c64a8ff31afbe4522f854216f3780d31010'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV9430(): ConfigurationPendingConfigsStorageV9430 {
        assert(this.isV9430)
        return this as any
    }
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV9160 {
    get(): Promise<[number, v9160.HostConfiguration][]>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV9291 {
    get(): Promise<[number, v9291.HostConfiguration][]>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV9320 {
    get(): Promise<[number, v9320.HostConfiguration][]>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV9370 {
    get(): Promise<[number, v9370.HostConfiguration][]>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV9420 {
    get(): Promise<[number, v9420.HostConfiguration][]>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV9430 {
    get(): Promise<[number, v9430.HostConfiguration][]>
}

export class ConvictionVotingClassLocksForStorage extends StorageBase {
    protected getPrefix() {
        return 'ConvictionVoting'
    }

    protected getName() {
        return 'ClassLocksFor'
    }

    /**
     *  The voting classes which have a non-zero lock requirement and the lock amounts which they
     *  require. The actual amount locked on behalf of this pallet should always be the maximum of
     *  this list.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '82641f40f081979db4386ae71b3895881f193f9a8e6fe1a5537661ac52af877c'
    }

    /**
     *  The voting classes which have a non-zero lock requirement and the lock amounts which they
     *  require. The actual amount locked on behalf of this pallet should always be the maximum of
     *  this list.
     */
    get asV9320(): ConvictionVotingClassLocksForStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The voting classes which have a non-zero lock requirement and the lock amounts which they
 *  require. The actual amount locked on behalf of this pallet should always be the maximum of
 *  this list.
 */
export interface ConvictionVotingClassLocksForStorageV9320 {
    get(key: Uint8Array): Promise<[number, bigint][]>
    getAll(): Promise<[number, bigint][][]>
    getMany(keys: Uint8Array[]): Promise<[number, bigint][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, bigint][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, bigint][]][]>
}

export class ConvictionVotingVotingForStorage extends StorageBase {
    protected getPrefix() {
        return 'ConvictionVoting'
    }

    protected getName() {
        return 'VotingFor'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === 'f5718a9729b93e5dd0b421ab8274a5e99a7a8bced5ee0a817ed2c995cdfb78d0'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV9320(): ConvictionVotingVotingForStorageV9320 {
        assert(this.isV9320)
        return this as any
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'df291b3d7624eee0e92994a913b5e2134fd7795d7b03d5af2a82d38f2d2e4fd7'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV9340(): ConvictionVotingVotingForStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV9320 {
    get(key1: Uint8Array, key2: number): Promise<v9320.Type_608>
    getAll(): Promise<v9320.Type_608[]>
    getMany(keys: [Uint8Array, number][]): Promise<v9320.Type_608[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v9320.Type_608][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v9320.Type_608][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v9320.Type_608][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v9320.Type_608][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v9320.Type_608][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v9320.Type_608][]>
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV9340 {
    get(key1: Uint8Array, key2: number): Promise<v9340.Type_608>
    getAll(): Promise<v9340.Type_608[]>
    getMany(keys: [Uint8Array, number][]): Promise<v9340.Type_608[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v9340.Type_608][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v9340.Type_608][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v9340.Type_608][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v9340.Type_608][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v9340.Type_608][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v9340.Type_608][]>
}

export class CouncilMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV9111(): CouncilMembersStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV9111 {
    get(): Promise<Uint8Array[]>
}

export class CouncilPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV9111(): CouncilPrimeStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface CouncilPrimeStorageV9111 {
    get(): Promise<(Uint8Array | undefined)>
}

export class CouncilProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV9111(): CouncilProposalCountStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV9111 {
    get(): Promise<number>
}

export class CouncilProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '54e55db1bed5771689c23398470e3d79c164300b3002e905baf8a07324946142'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9111(): CouncilProposalOfStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9122(): boolean {
        return this.getTypeHash() === '35e9c06eaf393488c6b16cf365c09693bf1c81cc6d198b6016c29648cb8b11db'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9122(): CouncilProposalOfStorageV9122 {
        assert(this.isV9122)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9130(): boolean {
        return this.getTypeHash() === '000fa9eac9f34fd52e1de16af6c8184e689b16aff5b69e5b770310c6592b9a23'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9130(): CouncilProposalOfStorageV9130 {
        assert(this.isV9130)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === 'ae191f57edfafa0ed77684f6c6956e661698f7626fcceabc35fc02aa204fc327'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9160(): CouncilProposalOfStorageV9160 {
        assert(this.isV9160)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === '92131b74d89cee349edae227d67d4039f396e38796421ef6ccad698229d1be87'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9170(): CouncilProposalOfStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '75d269266869aab19a7c849bd16e82439d759218a7ceb76d9d44ca8913eac77b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9180(): CouncilProposalOfStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === 'ad90492cf87d0e7973eb29afcc4224fdcd5cea7edbc9f874a78e09ffb7af764a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9190(): CouncilProposalOfStorageV9190 {
        assert(this.isV9190)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '4364e985a64c3f6addf377d90f061349553d92fcbc29839df8b7cde1ec346b0c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9220(): CouncilProposalOfStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === '60a712e8f852a3af336091a63ce735a781e9f17a09e4fb3ea560e93a76c19d2e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9230(): CouncilProposalOfStorageV9230 {
        assert(this.isV9230)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9250(): boolean {
        return this.getTypeHash() === 'c62c655cbb15038afffc766086c6f698f366a8695bacaa50b3b5b2d97d4b89f5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9250(): CouncilProposalOfStorageV9250 {
        assert(this.isV9250)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9271(): boolean {
        return this.getTypeHash() === 'b6f7b824ac82eac6e00f10809e508dfaacd22dda3aeafc8c9374020bd69d27ad'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9271(): CouncilProposalOfStorageV9271 {
        assert(this.isV9271)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === '15ce1541499aecffbe2bf8eeafc64023633a5d282a468972bd6c44aa77b52ce3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9291(): CouncilProposalOfStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '4489558a261f014c524a3fa533244e852a4234f4db9aba95f960d069aa1a2db7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9300(): CouncilProposalOfStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === 'e264f3acf17bae2089248c1b5be4b79c3766ff552e8565a925e0bceaa16c973b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9320(): CouncilProposalOfStorageV9320 {
        assert(this.isV9320)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'bac834a064b49e90d7838a7a187b8909126f18547277b5d8053bc5274c87c1c7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9340(): CouncilProposalOfStorageV9340 {
        assert(this.isV9340)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9350(): boolean {
        return this.getTypeHash() === '325aefbc233caff71e364b31bec3a78cdea40e407dacdb91f8743a0cd5529b7d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9350(): CouncilProposalOfStorageV9350 {
        assert(this.isV9350)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '02ea96d1290feb9231e11e833e8eb92c5f4c7bf8bc9033921415b61ac5e1e4b5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9370(): CouncilProposalOfStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === 'ee93cb7fd8840a07d97e1ae677ebb2b5785cefc002cf463089a970a4ada757f3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9381(): CouncilProposalOfStorageV9381 {
        assert(this.isV9381)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9111 {
    get(key: Uint8Array): Promise<(v9111.Call | undefined)>
    getAll(): Promise<v9111.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9111.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9111.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9111.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9111.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9111.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9122 {
    get(key: Uint8Array): Promise<(v9122.Call | undefined)>
    getAll(): Promise<v9122.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9122.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9122.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9122.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9122.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9122.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9130 {
    get(key: Uint8Array): Promise<(v9130.Call | undefined)>
    getAll(): Promise<v9130.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9130.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9130.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9130.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9130.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9130.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9160 {
    get(key: Uint8Array): Promise<(v9160.Call | undefined)>
    getAll(): Promise<v9160.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9160.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9160.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9160.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9160.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9160.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9170 {
    get(key: Uint8Array): Promise<(v9170.Call | undefined)>
    getAll(): Promise<v9170.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9170.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9170.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9170.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9170.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9170.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9180 {
    get(key: Uint8Array): Promise<(v9180.Call | undefined)>
    getAll(): Promise<v9180.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9180.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9180.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9180.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9180.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9180.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9190 {
    get(key: Uint8Array): Promise<(v9190.Call | undefined)>
    getAll(): Promise<v9190.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9190.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9190.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9190.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9190.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9190.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9220 {
    get(key: Uint8Array): Promise<(v9220.Call | undefined)>
    getAll(): Promise<v9220.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9220.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9220.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9220.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9220.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9220.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9230 {
    get(key: Uint8Array): Promise<(v9230.Call | undefined)>
    getAll(): Promise<v9230.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9230.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9230.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9230.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9230.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9230.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9250 {
    get(key: Uint8Array): Promise<(v9250.Call | undefined)>
    getAll(): Promise<v9250.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9250.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9250.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9250.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9250.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9250.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9271 {
    get(key: Uint8Array): Promise<(v9271.Call | undefined)>
    getAll(): Promise<v9271.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9271.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9271.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9271.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9271.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9271.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9291 {
    get(key: Uint8Array): Promise<(v9291.Call | undefined)>
    getAll(): Promise<v9291.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9291.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9291.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9291.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9291.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9291.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9300 {
    get(key: Uint8Array): Promise<(v9300.Call | undefined)>
    getAll(): Promise<v9300.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9300.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9300.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9300.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9300.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9300.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9320 {
    get(key: Uint8Array): Promise<(v9320.Call | undefined)>
    getAll(): Promise<v9320.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9320.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9320.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9320.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9320.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9320.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9340 {
    get(key: Uint8Array): Promise<(v9340.Call | undefined)>
    getAll(): Promise<v9340.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9340.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9340.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9340.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9340.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9340.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9350 {
    get(key: Uint8Array): Promise<(v9350.Call | undefined)>
    getAll(): Promise<v9350.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9350.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9350.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9350.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9350.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9350.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9370 {
    get(key: Uint8Array): Promise<(v9370.Call | undefined)>
    getAll(): Promise<v9370.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9370.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9381 {
    get(key: Uint8Array): Promise<(v9381.Call | undefined)>
    getAll(): Promise<v9381.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9381.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9381.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9381.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9381.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9381.Call][]>
}

export class CouncilProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV9111(): CouncilProposalsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface CouncilProposalsStorageV9111 {
    get(): Promise<Uint8Array[]>
}

export class CouncilVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV9111(): CouncilVotingStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface CouncilVotingStorageV9111 {
    get(key: Uint8Array): Promise<(v9111.Votes | undefined)>
    getAll(): Promise<v9111.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v9111.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9111.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9111.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9111.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9111.Votes][]>
}

export class CrowdloanEndingsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'EndingsCount'
    }

    /**
     *  The number of auctions that have entered into their ending period so far.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of auctions that have entered into their ending period so far.
     */
    get asV9010(): CrowdloanEndingsCountStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The number of auctions that have entered into their ending period so far.
 */
export interface CrowdloanEndingsCountStorageV9010 {
    get(): Promise<number>
}

export class CrowdloanFundsStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'Funds'
    }

    /**
     *  Info on all of the funds.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '12ab1ac19ae156d5acf61b3bdb7d29a147b5793947baca0144497ee7e32553c2'
    }

    /**
     *  Info on all of the funds.
     */
    get asV9010(): CrowdloanFundsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  Info on all of the funds.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === 'e837aa8c7af80bff126d455e0237189b2b62b5bf6586a1f2e67a22edfaf5a596'
    }

    /**
     *  Info on all of the funds.
     */
    get asV9180(): CrowdloanFundsStorageV9180 {
        assert(this.isV9180)
        return this as any
    }
}

/**
 *  Info on all of the funds.
 */
export interface CrowdloanFundsStorageV9010 {
    get(key: number): Promise<(v9010.FundInfo | undefined)>
    getAll(): Promise<v9010.FundInfo[]>
    getMany(keys: number[]): Promise<(v9010.FundInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9010.FundInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9010.FundInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9010.FundInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9010.FundInfo][]>
}

/**
 *  Info on all of the funds.
 */
export interface CrowdloanFundsStorageV9180 {
    get(key: number): Promise<(v9180.FundInfo | undefined)>
    getAll(): Promise<v9180.FundInfo[]>
    getMany(keys: number[]): Promise<(v9180.FundInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9180.FundInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9180.FundInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9180.FundInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9180.FundInfo][]>
}

export class CrowdloanNewRaiseStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'NewRaise'
    }

    /**
     *  The funds that have had additional contributions during the last block. This is used
     *  in order to determine which funds should submit new or updated bids.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  The funds that have had additional contributions during the last block. This is used
     *  in order to determine which funds should submit new or updated bids.
     */
    get asV9010(): CrowdloanNewRaiseStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The funds that have had additional contributions during the last block. This is used
 *  in order to determine which funds should submit new or updated bids.
 */
export interface CrowdloanNewRaiseStorageV9010 {
    get(): Promise<number[]>
}

export class CrowdloanNextFundIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'NextFundIndex'
    }

    /**
     *  Tracker for the next available fund index
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Tracker for the next available fund index
     */
    get asV9180(): CrowdloanNextFundIndexStorageV9180 {
        assert(this.isV9180)
        return this as any
    }
}

/**
 *  Tracker for the next available fund index
 */
export interface CrowdloanNextFundIndexStorageV9180 {
    get(): Promise<number>
}

export class CrowdloanNextTrieIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'NextTrieIndex'
    }

    /**
     *  Tracker for the next available trie index
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Tracker for the next available trie index
     */
    get asV9010(): CrowdloanNextTrieIndexStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  Tracker for the next available trie index
 */
export interface CrowdloanNextTrieIndexStorageV9010 {
    get(): Promise<number>
}

export class DemocracyBlacklistStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Blacklist'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get asV1020(): DemocracyBlacklistStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface DemocracyBlacklistStorageV1020 {
    get(key: Uint8Array): Promise<([number, Uint8Array[]] | undefined)>
    getAll(): Promise<[number, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<([number, Uint8Array[]] | undefined)[]>
}

export class DemocracyCancellationsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Cancellations'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get asV1020(): DemocracyCancellationsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface DemocracyCancellationsStorageV1020 {
    get(key: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<boolean[]>
}

export class DemocracyDelegationsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Delegations'
    }

    /**
     *  Get the account (and lock periods) to which another account is delegating vote.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'a8c56ca27cefe7fc41a2a363a935c8042399b85c552b937e8e5a006f0a9cc4aa'
    }

    /**
     *  Get the account (and lock periods) to which another account is delegating vote.
     */
    get asV1020(): DemocracyDelegationsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Get the account (and lock periods) to which another account is delegating vote.
 */
export interface DemocracyDelegationsStorageV1020 {
    get(key: Uint8Array): Promise<[Uint8Array, v1020.Conviction]>
    getAll(): Promise<[Uint8Array, v1020.Conviction][]>
    getMany(keys: Uint8Array[]): Promise<[Uint8Array, v1020.Conviction][]>
}

export class DemocracyDepositOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'DepositOf'
    }

    /**
     *  Those who have locked a deposit.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '83cec356b097452496e9033ac60105a18a989e0451716fcebdf5ada22fdda33a'
    }

    /**
     *  Those who have locked a deposit.
     */
    get asV1020(): DemocracyDepositOfStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get isV2005(): boolean {
        return this.getTypeHash() === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get asV2005(): DemocracyDepositOfStorageV2005 {
        assert(this.isV2005)
        return this as any
    }
}

/**
 *  Those who have locked a deposit.
 */
export interface DemocracyDepositOfStorageV1020 {
    get(key: number): Promise<([bigint, Uint8Array[]] | undefined)>
    getAll(): Promise<[bigint, Uint8Array[]][]>
    getMany(keys: number[]): Promise<([bigint, Uint8Array[]] | undefined)[]>
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DemocracyDepositOfStorageV2005 {
    get(key: number): Promise<([Uint8Array[], bigint] | undefined)>
    getAll(): Promise<[Uint8Array[], bigint][]>
    getMany(keys: number[]): Promise<([Uint8Array[], bigint] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
}

export class DemocracyDispatchQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'DispatchQueue'
    }

    /**
     *  Queue of successful referenda to be dispatched.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'c33c6badb55a73b7938675ebc1ab41fbc158dd042d187b071870f934cebf0258'
    }

    /**
     *  Queue of successful referenda to be dispatched.
     */
    get asV1020(): DemocracyDispatchQueueStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Queue of successful referenda to be dispatched.
     */
    get isV1022(): boolean {
        return this.getTypeHash() === '857f0787f9dd09673d3dff9d1087d2ba779e2fd2d63c8dd0ef4fc24b0e9f8e58'
    }

    /**
     *  Queue of successful referenda to be dispatched.
     */
    get asV1022(): DemocracyDispatchQueueStorageV1022 {
        assert(this.isV1022)
        return this as any
    }

    /**
     *  Queue of successful referenda to be dispatched. Stored ordered by block number.
     */
    get isV1030(): boolean {
        return this.getTypeHash() === '11ee03d6bb6c669f52ca4d2d69396c941dc13acd7557ace6bccfba659b340697'
    }

    /**
     *  Queue of successful referenda to be dispatched. Stored ordered by block number.
     */
    get asV1030(): DemocracyDispatchQueueStorageV1030 {
        assert(this.isV1030)
        return this as any
    }
}

/**
 *  Queue of successful referenda to be dispatched.
 */
export interface DemocracyDispatchQueueStorageV1020 {
    get(key: number): Promise<([v1020.Proposal, number] | undefined)[]>
    getAll(): Promise<([v1020.Proposal, number] | undefined)[][]>
    getMany(keys: number[]): Promise<([v1020.Proposal, number] | undefined)[][]>
}

/**
 *  Queue of successful referenda to be dispatched.
 */
export interface DemocracyDispatchQueueStorageV1022 {
    get(key: number): Promise<([Uint8Array, number] | undefined)[]>
    getAll(): Promise<([Uint8Array, number] | undefined)[][]>
    getMany(keys: number[]): Promise<([Uint8Array, number] | undefined)[][]>
}

/**
 *  Queue of successful referenda to be dispatched. Stored ordered by block number.
 */
export interface DemocracyDispatchQueueStorageV1030 {
    get(): Promise<[number, Uint8Array, number][]>
}

export class DemocracyLastTabledWasExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LastTabledWasExternal'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get asV1020(): DemocracyLastTabledWasExternalStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface DemocracyLastTabledWasExternalStorageV1020 {
    get(): Promise<boolean>
}

export class DemocracyLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Accounts for which there are locks in action which may be removed at some point in the
     *  future. The value is the block number at which the lock expires and may be removed.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  Accounts for which there are locks in action which may be removed at some point in the
     *  future. The value is the block number at which the lock expires and may be removed.
     */
    get asV1050(): DemocracyLocksStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  Accounts for which there are locks in action which may be removed at some point in the
 *  future. The value is the block number at which the lock expires and may be removed.
 */
export interface DemocracyLocksStorageV1050 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
}

export class DemocracyLowestUnbakedStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LowestUnbaked'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get isV1030(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get asV1030(): DemocracyLowestUnbakedStorageV1030 {
        assert(this.isV1030)
        return this as any
    }
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface DemocracyLowestUnbakedStorageV1030 {
    get(): Promise<number>
}

export class DemocracyNextExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'NextExternal'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '49186e9ca5ae5686b2e57772873120d23e911a081cd8b00f62f7f57e1225da57'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asV1020(): DemocracyNextExternalStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isV1022(): boolean {
        return this.getTypeHash() === 'a0dc59850ecbf888b39265215bce88e2141aafdd4f4300c99be6819a82e4ef15'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asV1022(): DemocracyNextExternalStorageV1022 {
        assert(this.isV1022)
        return this as any
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '5ae273b3f6176aae8ebabb6d92e749499c9e5de5bc8e85ade788f86e508314ea'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asV9320(): DemocracyNextExternalStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageV1020 {
    get(): Promise<([v1020.Proposal, v1020.VoteThreshold] | undefined)>
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageV1022 {
    get(): Promise<([Uint8Array, v1022.VoteThreshold] | undefined)>
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageV9320 {
    get(): Promise<([v9320.Bounded, v9320.VoteThreshold] | undefined)>
}

export class DemocracyNextTallyStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'NextTally'
    }

    /**
     *  The next referendum index that should be tallied.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next referendum index that should be tallied.
     */
    get asV1020(): DemocracyNextTallyStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The next referendum index that should be tallied.
 */
export interface DemocracyNextTallyStorageV1020 {
    get(): Promise<number>
}

export class DemocracyPreimagesStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Preimages'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV1022(): boolean {
        return this.getTypeHash() === '8d49bec84532cce5991ad4c420ddf4ab792644a27de5f8450488e36a6c1c40ef'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV1022(): DemocracyPreimagesStorageV1022 {
        assert(this.isV1022)
        return this as any
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV1058(): DemocracyPreimagesStorageV1058 {
        assert(this.isV1058)
        return this as any
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV9111(): DemocracyPreimagesStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV1022 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, bigint, number] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, bigint, number][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint, number] | undefined)[]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV1058 {
    get(key: Uint8Array): Promise<(v1058.PreimageStatus | undefined)>
    getAll(): Promise<v1058.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v1058.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1058.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1058.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1058.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1058.PreimageStatus][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV9111 {
    get(key: Uint8Array): Promise<(v9111.PreimageStatus | undefined)>
    getAll(): Promise<v9111.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9111.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9111.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9111.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9111.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9111.PreimageStatus][]>
}

export class DemocracyProxyStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Proxy'
    }

    /**
     *  Who is able to vote for whom. Value is the fund-holding account, key is the
     *  vote-transaction-sending account.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
    }

    /**
     *  Who is able to vote for whom. Value is the fund-holding account, key is the
     *  vote-transaction-sending account.
     */
    get asV1020(): DemocracyProxyStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Who is able to vote for whom. Value is the fund-holding account, key is the
     *  vote-transaction-sending account.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '7dacebc1dda0c0fa943af0a92ddcef80bfdec3130fe68515a8c3d4e861021b19'
    }

    /**
     *  Who is able to vote for whom. Value is the fund-holding account, key is the
     *  vote-transaction-sending account.
     */
    get asV1050(): DemocracyProxyStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  Who is able to vote for whom. Value is the fund-holding account, key is the
 *  vote-transaction-sending account.
 */
export interface DemocracyProxyStorageV1020 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
}

/**
 *  Who is able to vote for whom. Value is the fund-holding account, key is the
 *  vote-transaction-sending account.
 */
export interface DemocracyProxyStorageV1050 {
    get(key: Uint8Array): Promise<(v1050.ProxyState | undefined)>
    getAll(): Promise<v1050.ProxyState[]>
    getMany(keys: Uint8Array[]): Promise<(v1050.ProxyState | undefined)[]>
}

export class DemocracyPublicPropCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicPropCount'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV1020(): DemocracyPublicPropCountStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV1020 {
    get(): Promise<number>
}

export class DemocracyPublicPropsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicProps'
    }

    /**
     *  The public proposals. Unsorted.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '0da61e381ba5d7090741171fee74491d6e5f0d3b420709a45911270de6f4da0a'
    }

    /**
     *  The public proposals. Unsorted.
     */
    get asV1020(): DemocracyPublicPropsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get isV1022(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV1022(): DemocracyPublicPropsStorageV1022 {
        assert(this.isV1022)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV9320(): DemocracyPublicPropsStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted.
 */
export interface DemocracyPublicPropsStorageV1020 {
    get(): Promise<[number, v1020.Proposal, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV1022 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV9320 {
    get(): Promise<[number, v9320.Bounded, Uint8Array][]>
}

export class DemocracyReferendumCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumCount'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asV1020(): DemocracyReferendumCountStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface DemocracyReferendumCountStorageV1020 {
    get(): Promise<number>
}

export class DemocracyReferendumInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumInfoOf'
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'b841a2a79796892945d8a9256375f0a9e422926b95cb3e85c8edae023ec07300'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV1020(): DemocracyReferendumInfoOfStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV1055(): boolean {
        return this.getTypeHash() === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV1055(): DemocracyReferendumInfoOfStorageV1055 {
        assert(this.isV1055)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV9111(): DemocracyReferendumInfoOfStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV9320(): DemocracyReferendumInfoOfStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface DemocracyReferendumInfoOfStorageV1020 {
    get(key: number): Promise<(v1020.Type_283 | undefined)>
    getAll(): Promise<v1020.Type_283[]>
    getMany(keys: number[]): Promise<(v1020.Type_283 | undefined)[]>
}

/**
 *  Information concerning any given referendum.
 */
export interface DemocracyReferendumInfoOfStorageV1055 {
    get(key: number): Promise<(v1055.ReferendumInfo | undefined)>
    getAll(): Promise<v1055.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v1055.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1055.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v1055.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1055.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1055.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV9111 {
    get(key: number): Promise<(v9111.ReferendumInfo | undefined)>
    getAll(): Promise<v9111.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v9111.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9111.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9111.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9111.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9111.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV9320 {
    get(key: number): Promise<(v9320.ReferendumInfo | undefined)>
    getAll(): Promise<v9320.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v9320.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9320.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9320.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9320.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9320.ReferendumInfo][]>
}

export class DemocracyStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV2005(): boolean {
        return this.getTypeHash() === 'd0303e1bae0fc34655f81e27ee4b2eb0fb0d3ce283cc0e6cd4de7efaeb1119f2'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV2005(): DemocracyStorageVersionStorageV2005 {
        assert(this.isV2005)
        return this as any
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '6db8ed5d5df9fd63b90aeccdc02dcd10fe08fc684dc39aff8104b09be9ab54e9'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV9111(): DemocracyStorageVersionStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface DemocracyStorageVersionStorageV2005 {
    get(): Promise<(v2005.Releases | undefined)>
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface DemocracyStorageVersionStorageV9111 {
    get(): Promise<(v9111.Type_294 | undefined)>
}

export class DemocracyVoteOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'VoteOf'
    }

    /**
     *  Get the vote in a given referendum of a particular voter. The result is meaningful only
     *  if `voters_for` includes the voter when called with the referendum (you'll get the
     *  default `Vote` value otherwise). If you don't want to check `voters_for`, then you can
     *  also check for simple existence with `VoteOf::exists` first.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '57c21b4880a2ddcb9e3340146f5c62306203c4eddbe632b68c77043d251a21df'
    }

    /**
     *  Get the vote in a given referendum of a particular voter. The result is meaningful only
     *  if `voters_for` includes the voter when called with the referendum (you'll get the
     *  default `Vote` value otherwise). If you don't want to check `voters_for`, then you can
     *  also check for simple existence with `VoteOf::exists` first.
     */
    get asV1020(): DemocracyVoteOfStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Get the vote in a given referendum of a particular voter. The result is meaningful only
 *  if `voters_for` includes the voter when called with the referendum (you'll get the
 *  default `Vote` value otherwise). If you don't want to check `voters_for`, then you can
 *  also check for simple existence with `VoteOf::exists` first.
 */
export interface DemocracyVoteOfStorageV1020 {
    get(key: [number, Uint8Array]): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<number[]>
}

export class DemocracyVotersForStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'VotersFor'
    }

    /**
     *  Get the voters for the current proposal.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  Get the voters for the current proposal.
     */
    get asV1020(): DemocracyVotersForStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Get the voters for the current proposal.
 */
export interface DemocracyVotersForStorageV1020 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
}

export class DemocracyVotingOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'VotingOf'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     */
    get isV1055(): boolean {
        return this.getTypeHash() === '1b8d82fbf262dcaeba801105bb1e0dcfa6b2f7c3b76feb5fa9d27716f50903d2'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     */
    get asV1055(): DemocracyVotingOfStorageV1055 {
        assert(this.isV1055)
        return this as any
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asV9111(): DemocracyVotingOfStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 */
export interface DemocracyVotingOfStorageV1055 {
    get(key: Uint8Array): Promise<v1055.Voting>
    getAll(): Promise<v1055.Voting[]>
    getMany(keys: Uint8Array[]): Promise<v1055.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1055.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1055.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1055.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1055.Voting][]>
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageV9111 {
    get(key: Uint8Array): Promise<v9111.Voting>
    getAll(): Promise<v9111.Voting[]>
    getMany(keys: Uint8Array[]): Promise<v9111.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9111.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9111.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9111.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9111.Voting][]>
}

export class DmpDeliveryFeeFactorStorage extends StorageBase {
    protected getPrefix() {
        return 'Dmp'
    }

    protected getName() {
        return 'DeliveryFeeFactor'
    }

    /**
     *  The number to multiply the base delivery fee by.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The number to multiply the base delivery fee by.
     */
    get asV9420(): DmpDeliveryFeeFactorStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The number to multiply the base delivery fee by.
 */
export interface DmpDeliveryFeeFactorStorageV9420 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class DmpDownwardMessageQueueHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'Dmp'
    }

    protected getName() {
        return 'DownwardMessageQueueHeads'
    }

    /**
     *  A mapping that stores the downward message queue MQC head for each para.
     * 
     *  Each link in this chain has a form:
     *  `(prev_head, B, H(M))`, where
     *  - `prev_head`: is the previous head hash or zero if none.
     *  - `B`: is the relay-chain block number in which a message was appended.
     *  - `H(M)`: is the hash of the message being appended.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  A mapping that stores the downward message queue MQC head for each para.
     * 
     *  Each link in this chain has a form:
     *  `(prev_head, B, H(M))`, where
     *  - `prev_head`: is the previous head hash or zero if none.
     *  - `B`: is the relay-chain block number in which a message was appended.
     *  - `H(M)`: is the hash of the message being appended.
     */
    get asV9010(): DmpDownwardMessageQueueHeadsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  A mapping that stores the downward message queue MQC head for each para.
 * 
 *  Each link in this chain has a form:
 *  `(prev_head, B, H(M))`, where
 *  - `prev_head`: is the previous head hash or zero if none.
 *  - `B`: is the relay-chain block number in which a message was appended.
 *  - `H(M)`: is the hash of the message being appended.
 */
export interface DmpDownwardMessageQueueHeadsStorageV9010 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class DmpDownwardMessageQueuesStorage extends StorageBase {
    protected getPrefix() {
        return 'Dmp'
    }

    protected getName() {
        return 'DownwardMessageQueues'
    }

    /**
     *  The downward messages addressed for a certain para.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '08d1b4bd179dcf7c4beee379a02b1ca5f5922b402537221dd59a21604576605c'
    }

    /**
     *  The downward messages addressed for a certain para.
     */
    get asV9010(): DmpDownwardMessageQueuesStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  The downward messages addressed for a certain para.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'e425c5091a0f36e0ae5ace2a5590775033870437355c96c2667307bf868e3248'
    }

    /**
     *  The downward messages addressed for a certain para.
     */
    get asV9111(): DmpDownwardMessageQueuesStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The downward messages addressed for a certain para.
 */
export interface DmpDownwardMessageQueuesStorageV9010 {
    get(key: number): Promise<v9010.InboundDownwardMessage[]>
    getAll(): Promise<v9010.InboundDownwardMessage[][]>
    getMany(keys: number[]): Promise<v9010.InboundDownwardMessage[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9010.InboundDownwardMessage[]][]>
    getPairs(key: number): Promise<[k: number, v: v9010.InboundDownwardMessage[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9010.InboundDownwardMessage[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9010.InboundDownwardMessage[]][]>
}

/**
 *  The downward messages addressed for a certain para.
 */
export interface DmpDownwardMessageQueuesStorageV9111 {
    get(key: number): Promise<v9111.InboundDownwardMessage[]>
    getAll(): Promise<v9111.InboundDownwardMessage[][]>
    getMany(keys: number[]): Promise<v9111.InboundDownwardMessage[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9111.InboundDownwardMessage[]][]>
    getPairs(key: number): Promise<[k: number, v: v9111.InboundDownwardMessage[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9111.InboundDownwardMessage[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9111.InboundDownwardMessage[]][]>
}

export class ElectionProviderMultiPhaseCurrentPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'CurrentPhase'
    }

    /**
     *  Current phase.
     */
    get isV2029(): boolean {
        return this.getTypeHash() === 'd43c46e1fdaabf223f7ddc55f3636b227c163ebca9bccdb6f6aca606816cba64'
    }

    /**
     *  Current phase.
     */
    get asV2029(): ElectionProviderMultiPhaseCurrentPhaseStorageV2029 {
        assert(this.isV2029)
        return this as any
    }
}

/**
 *  Current phase.
 */
export interface ElectionProviderMultiPhaseCurrentPhaseStorageV2029 {
    get(): Promise<v2029.ElectionPhase>
}

export class ElectionProviderMultiPhaseDesiredTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'DesiredTargets'
    }

    /**
     *  Desired number of targets to elect for this round.
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get isV2029(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Desired number of targets to elect for this round.
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get asV2029(): ElectionProviderMultiPhaseDesiredTargetsStorageV2029 {
        assert(this.isV2029)
        return this as any
    }
}

/**
 *  Desired number of targets to elect for this round.
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface ElectionProviderMultiPhaseDesiredTargetsStorageV2029 {
    get(): Promise<(number | undefined)>
}

export class ElectionProviderMultiPhaseMinimumUntrustedScoreStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'MinimumUntrustedScore'
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get isV9040(): boolean {
        return this.getTypeHash() === 'fc5a4796e3467f3450c1f03819f4fe9e47a6e584803699b23c3072af283f03fa'
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get asV9040(): ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV9040 {
        assert(this.isV9040)
        return this as any
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '54808e3ff7550c21d1fb18cb6c67f1e6942e127345058749baa91d8c1651bd60'
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get asV9180(): ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV9180 {
        assert(this.isV9180)
        return this as any
    }
}

/**
 *  The minimum score that each 'untrusted' solution must attain in order to be considered
 *  feasible.
 * 
 *  Can be set via `set_minimum_untrusted_score`.
 */
export interface ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV9040 {
    get(): Promise<(bigint[] | undefined)>
}

/**
 *  The minimum score that each 'untrusted' solution must attain in order to be considered
 *  feasible.
 * 
 *  Can be set via `set_minimum_untrusted_score`.
 */
export interface ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV9180 {
    get(): Promise<(v9180.ElectionScore | undefined)>
}

export class ElectionProviderMultiPhaseQueuedSolutionStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'QueuedSolution'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get isV2029(): boolean {
        return this.getTypeHash() === '6191b733a7e979b485b303212b77f08705ed46238cccf8c2cb5b35969c170456'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get asV2029(): ElectionProviderMultiPhaseQueuedSolutionStorageV2029 {
        assert(this.isV2029)
        return this as any
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '5e071efa6b1ccd8ce3910346a833fa82ee925fd24f0d5aaef4d236d7e949c210'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get asV9111(): ElectionProviderMultiPhaseQueuedSolutionStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === 'cf8250c7935545f78c3fca062506caaa5d94dab6e6950381bca2b336b9f8876e'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     */
    get asV9180(): ElectionProviderMultiPhaseQueuedSolutionStorageV9180 {
        assert(this.isV9180)
        return this as any
    }
}

/**
 *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
 */
export interface ElectionProviderMultiPhaseQueuedSolutionStorageV2029 {
    get(): Promise<(v2029.ReadySolution | undefined)>
}

/**
 *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
 */
export interface ElectionProviderMultiPhaseQueuedSolutionStorageV9111 {
    get(): Promise<(v9111.ReadySolution | undefined)>
}

/**
 *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
 */
export interface ElectionProviderMultiPhaseQueuedSolutionStorageV9180 {
    get(): Promise<(v9180.ReadySolution | undefined)>
}

export class ElectionProviderMultiPhaseRoundStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'Round'
    }

    /**
     *  Internal counter for the number of rounds.
     * 
     *  This is useful for de-duplication of transactions submitted to the pool, and general
     *  diagnostics of the pallet.
     * 
     *  This is merely incremented once per every time that an upstream `elect` is called.
     */
    get isV2029(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Internal counter for the number of rounds.
     * 
     *  This is useful for de-duplication of transactions submitted to the pool, and general
     *  diagnostics of the pallet.
     * 
     *  This is merely incremented once per every time that an upstream `elect` is called.
     */
    get asV2029(): ElectionProviderMultiPhaseRoundStorageV2029 {
        assert(this.isV2029)
        return this as any
    }
}

/**
 *  Internal counter for the number of rounds.
 * 
 *  This is useful for de-duplication of transactions submitted to the pool, and general
 *  diagnostics of the pallet.
 * 
 *  This is merely incremented once per every time that an upstream `elect` is called.
 */
export interface ElectionProviderMultiPhaseRoundStorageV2029 {
    get(): Promise<number>
}

export class ElectionProviderMultiPhaseSignedSubmissionIndicesStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionIndices'
    }

    /**
     *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
     *  `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === '299aaf991151d8c21e928a476d85e16f7f46492399aeddc4115950dbe539017a'
    }

    /**
     *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
     *  `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get asV9080(): ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV9080 {
        assert(this.isV9080)
        return this as any
    }

    /**
     *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
     *  `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '3f17ed71261965bef8416121d1476aed24762a50bcf247a57343826d7a119a46'
    }

    /**
     *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
     *  `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get asV9180(): ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
     *  value in `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'aecbdca3369396b8f7ae7da45a210e0b48c62258a15e0f7c1a7cb29c941f666c'
    }

    /**
     *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
     *  value in `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get asV9340(): ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
 *  `SignedSubmissions`.
 * 
 *  We never need to process more than a single signed submission at a time. Signed submissions
 *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
 *  them one at a time instead of reading and decoding all of them at once.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV9080 {
    get(): Promise<[bigint[], number][]>
}

/**
 *  A sorted, bounded set of `(score, index)`, where each `index` points to a value in
 *  `SignedSubmissions`.
 * 
 *  We never need to process more than a single signed submission at a time. Signed submissions
 *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
 *  them one at a time instead of reading and decoding all of them at once.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV9180 {
    get(): Promise<[v9180.ElectionScore, number][]>
}

/**
 *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
 *  value in `SignedSubmissions`.
 * 
 *  We never need to process more than a single signed submission at a time. Signed submissions
 *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
 *  them one at a time instead of reading and decoding all of them at once.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV9340 {
    get(): Promise<[v9340.ElectionScore, number, number][]>
}

export class ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionNextIndex'
    }

    /**
     *  The next index to be assigned to an incoming signed submission.
     * 
     *  Every accepted submission is assigned a unique index; that index is bound to that particular
     *  submission for the duration of the election. On election finalization, the next index is
     *  reset to 0.
     * 
     *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
     *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
     *  because iteration is slow. Instead, we store the value here.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next index to be assigned to an incoming signed submission.
     * 
     *  Every accepted submission is assigned a unique index; that index is bound to that particular
     *  submission for the duration of the election. On election finalization, the next index is
     *  reset to 0.
     * 
     *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
     *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
     *  because iteration is slow. Instead, we store the value here.
     */
    get asV9080(): ElectionProviderMultiPhaseSignedSubmissionNextIndexStorageV9080 {
        assert(this.isV9080)
        return this as any
    }
}

/**
 *  The next index to be assigned to an incoming signed submission.
 * 
 *  Every accepted submission is assigned a unique index; that index is bound to that particular
 *  submission for the duration of the election. On election finalization, the next index is
 *  reset to 0.
 * 
 *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
 *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
 *  because iteration is slow. Instead, we store the value here.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionNextIndexStorageV9080 {
    get(): Promise<number>
}

export class ElectionProviderMultiPhaseSignedSubmissionsMapStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionsMap'
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === '16dfef1a71eeb812bcf9043204001925a6a217567b898246dbccde92a0a07ed3'
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get asV9080(): ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9080 {
        assert(this.isV9080)
        return this as any
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'fdea1268433835e6bd0300ac1e98b8c039efba8f951fc0f3aa5545cfcae70275'
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get asV9111(): ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === '6402673c0e140b0153d91c905fedebfa4c54b578ccc07e3848d1d3dcaa1c40d4'
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get asV9160(): ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9160 {
        assert(this.isV9160)
        return this as any
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === 'dd990644564a8bf41b154f8130d7817d731fdbe50bdf105fd5a02d533251a069'
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get asV9180(): ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '860f23403a5b9592ac7098f4a1420d32719bc8612e4102bb2e54d1fa53040870'
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get asV9220(): ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9080 {
    get(key: number): Promise<v9080.SignedSubmissionOf>
    getAll(): Promise<v9080.SignedSubmissionOf[]>
    getMany(keys: number[]): Promise<v9080.SignedSubmissionOf[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9080.SignedSubmissionOf][]>
    getPairs(key: number): Promise<[k: number, v: v9080.SignedSubmissionOf][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9080.SignedSubmissionOf][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9080.SignedSubmissionOf][]>
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9111 {
    get(key: number): Promise<v9111.SignedSubmission>
    getAll(): Promise<v9111.SignedSubmission[]>
    getMany(keys: number[]): Promise<v9111.SignedSubmission[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9111.SignedSubmission][]>
    getPairs(key: number): Promise<[k: number, v: v9111.SignedSubmission][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9111.SignedSubmission][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9111.SignedSubmission][]>
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9160 {
    get(key: number): Promise<(v9160.SignedSubmission | undefined)>
    getAll(): Promise<v9160.SignedSubmission[]>
    getMany(keys: number[]): Promise<(v9160.SignedSubmission | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9160.SignedSubmission][]>
    getPairs(key: number): Promise<[k: number, v: v9160.SignedSubmission][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9160.SignedSubmission][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9160.SignedSubmission][]>
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9180 {
    get(key: number): Promise<(v9180.SignedSubmission | undefined)>
    getAll(): Promise<v9180.SignedSubmission[]>
    getMany(keys: number[]): Promise<(v9180.SignedSubmission | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9180.SignedSubmission][]>
    getPairs(key: number): Promise<[k: number, v: v9180.SignedSubmission][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9180.SignedSubmission][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9180.SignedSubmission][]>
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionsMapStorageV9220 {
    get(key: number): Promise<(v9220.SignedSubmission | undefined)>
    getAll(): Promise<v9220.SignedSubmission[]>
    getMany(keys: number[]): Promise<(v9220.SignedSubmission | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9220.SignedSubmission][]>
    getPairs(key: number): Promise<[k: number, v: v9220.SignedSubmission][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9220.SignedSubmission][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9220.SignedSubmission][]>
}

export class ElectionProviderMultiPhaseSnapshotStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'Snapshot'
    }

    /**
     *  Snapshot data of the round.
     * 
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    get isV2029(): boolean {
        return this.getTypeHash() === '0a57d7483519dd2d24b03dc8b9cb8e5dd9fde6a07e5c2d586f430184184c3b75'
    }

    /**
     *  Snapshot data of the round.
     * 
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    get asV2029(): ElectionProviderMultiPhaseSnapshotStorageV2029 {
        assert(this.isV2029)
        return this as any
    }
}

/**
 *  Snapshot data of the round.
 * 
 *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
 */
export interface ElectionProviderMultiPhaseSnapshotStorageV2029 {
    get(): Promise<(v2029.RoundSnapshot | undefined)>
}

export class ElectionProviderMultiPhaseSnapshotMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SnapshotMetadata'
    }

    /**
     *  The metadata of the [`RoundSnapshot`]
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get isV2029(): boolean {
        return this.getTypeHash() === '4bc67c3d694c467e93d2d551db48f7b2d0497a44b4acaecfdc842a49ce699da7'
    }

    /**
     *  The metadata of the [`RoundSnapshot`]
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get asV2029(): ElectionProviderMultiPhaseSnapshotMetadataStorageV2029 {
        assert(this.isV2029)
        return this as any
    }
}

/**
 *  The metadata of the [`RoundSnapshot`]
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface ElectionProviderMultiPhaseSnapshotMetadataStorageV2029 {
    get(): Promise<(v2029.SolutionOrSnapshotSize | undefined)>
}

export class FastUnstakeCounterForQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'FastUnstake'
    }

    protected getName() {
        return 'CounterForQueue'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9300(): FastUnstakeCounterForQueueStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface FastUnstakeCounterForQueueStorageV9300 {
    get(): Promise<number>
}

export class FastUnstakeErasToCheckPerBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'FastUnstake'
    }

    protected getName() {
        return 'ErasToCheckPerBlock'
    }

    /**
     *  Number of eras to check per block.
     * 
     *  If set to 0, this pallet does absolutely nothing.
     * 
     *  Based on the amount of weight available at `on_idle`, up to this many eras of a single
     *  nominator might be checked.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of eras to check per block.
     * 
     *  If set to 0, this pallet does absolutely nothing.
     * 
     *  Based on the amount of weight available at `on_idle`, up to this many eras of a single
     *  nominator might be checked.
     */
    get asV9300(): FastUnstakeErasToCheckPerBlockStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  Number of eras to check per block.
 * 
 *  If set to 0, this pallet does absolutely nothing.
 * 
 *  Based on the amount of weight available at `on_idle`, up to this many eras of a single
 *  nominator might be checked.
 */
export interface FastUnstakeErasToCheckPerBlockStorageV9300 {
    get(): Promise<number>
}

export class FastUnstakeHeadStorage extends StorageBase {
    protected getPrefix() {
        return 'FastUnstake'
    }

    protected getName() {
        return 'Head'
    }

    /**
     *  The current "head of the queue" being unstaked.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '9e110b529129d2bf445e71d5f73e7f43fc91ac729a4db9536cfc0fb67d92e6cf'
    }

    /**
     *  The current "head of the queue" being unstaked.
     */
    get asV9300(): FastUnstakeHeadStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  The current "head of the queue" being unstaked.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '53adfbb7f77e458b9628e98623c2b4f4eb2804878ca690d531d2e10861e2f759'
    }

    /**
     *  The current "head of the queue" being unstaked.
     */
    get asV9340(): FastUnstakeHeadStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The current "head of the queue" being unstaked.
 */
export interface FastUnstakeHeadStorageV9300 {
    get(): Promise<(v9300.UnstakeRequest | undefined)>
}

/**
 *  The current "head of the queue" being unstaked.
 */
export interface FastUnstakeHeadStorageV9340 {
    get(): Promise<(v9340.UnstakeRequest | undefined)>
}

export class FastUnstakeQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'FastUnstake'
    }

    protected getName() {
        return 'Queue'
    }

    /**
     *  The map of all accounts wishing to be unstaked.
     * 
     *  Keeps track of `AccountId` wishing to unstake and it's corresponding deposit.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '009da6de235ea9f0b5ac0b37d404d4fe998946da2f8f3e9c0899035c6d182a52'
    }

    /**
     *  The map of all accounts wishing to be unstaked.
     * 
     *  Keeps track of `AccountId` wishing to unstake and it's corresponding deposit.
     */
    get asV9300(): FastUnstakeQueueStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  The map of all accounts wishing to be unstaked.
 * 
 *  Keeps track of `AccountId` wishing to unstake and it's corresponding deposit.
 */
export interface FastUnstakeQueueStorageV9300 {
    get(key: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class FellowshipCollectiveIdToIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipCollective'
    }

    protected getName() {
        return 'IdToIndex'
    }

    /**
     *  The index of each ranks's member into the group of members who have at least that rank.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '67b0fac305c176b999788fde10f74baea68d2152b7d296978e0a74990c1b7ed1'
    }

    /**
     *  The index of each ranks's member into the group of members who have at least that rank.
     */
    get asV9320(): FellowshipCollectiveIdToIndexStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The index of each ranks's member into the group of members who have at least that rank.
 */
export interface FellowshipCollectiveIdToIndexStorageV9320 {
    get(key1: number, key2: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

export class FellowshipCollectiveIndexToIdStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipCollective'
    }

    protected getName() {
        return 'IndexToId'
    }

    /**
     *  The members in the collective by index. All indices in the range `0..MemberCount` will
     *  return `Some`, however a member's index is not guaranteed to remain unchanged over time.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '3898d28b3a87fb9c6c757faf07a03c0902aaa0485168c5cc4bf0aaaaf6df9331'
    }

    /**
     *  The members in the collective by index. All indices in the range `0..MemberCount` will
     *  return `Some`, however a member's index is not guaranteed to remain unchanged over time.
     */
    get asV9320(): FellowshipCollectiveIndexToIdStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The members in the collective by index. All indices in the range `0..MemberCount` will
 *  return `Some`, however a member's index is not guaranteed to remain unchanged over time.
 */
export interface FellowshipCollectiveIndexToIdStorageV9320 {
    get(key1: number, key2: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class FellowshipCollectiveMemberCountStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipCollective'
    }

    protected getName() {
        return 'MemberCount'
    }

    /**
     *  The number of members in the collective who have at least the rank according to the index
     *  of the vec.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '1b8a61a1a77f8c4a893b856d3455f1f9ced6f6e4bfe87bb8b1390b14318a4333'
    }

    /**
     *  The number of members in the collective who have at least the rank according to the index
     *  of the vec.
     */
    get asV9320(): FellowshipCollectiveMemberCountStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The number of members in the collective who have at least the rank according to the index
 *  of the vec.
 */
export interface FellowshipCollectiveMemberCountStorageV9320 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class FellowshipCollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipCollective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === 'd95386a32a2255ec60d17f52bc22c1cb6efed6254df24f0b8dbec46c5f6bef52'
    }

    /**
     *  The current members of the collective.
     */
    get asV9320(): FellowshipCollectiveMembersStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The current members of the collective.
 */
export interface FellowshipCollectiveMembersStorageV9320 {
    get(key: Uint8Array): Promise<(v9320.MemberRecord | undefined)>
    getAll(): Promise<v9320.MemberRecord[]>
    getMany(keys: Uint8Array[]): Promise<(v9320.MemberRecord | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9320.MemberRecord][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9320.MemberRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9320.MemberRecord][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9320.MemberRecord][]>
}

export class FellowshipCollectiveVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipCollective'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '86d2faf8b5d77a999750c18089275cdc40d9d653cb2242d978fb841e0999d838'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV9320(): FellowshipCollectiveVotingStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface FellowshipCollectiveVotingStorageV9320 {
    get(key1: number, key2: Uint8Array): Promise<(v9320.VoteRecord | undefined)>
    getAll(): Promise<v9320.VoteRecord[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v9320.VoteRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v9320.VoteRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v9320.VoteRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v9320.VoteRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v9320.VoteRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v9320.VoteRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v9320.VoteRecord][]>
}

export class FellowshipCollectiveVotingCleanupStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipCollective'
    }

    protected getName() {
        return 'VotingCleanup'
    }

    get isV9320(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    get asV9320(): FellowshipCollectiveVotingCleanupStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

export interface FellowshipCollectiveVotingCleanupStorageV9320 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class FellowshipReferendaDecidingCountStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipReferenda'
    }

    protected getName() {
        return 'DecidingCount'
    }

    /**
     *  The number of referenda being decided currently.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '1b8a61a1a77f8c4a893b856d3455f1f9ced6f6e4bfe87bb8b1390b14318a4333'
    }

    /**
     *  The number of referenda being decided currently.
     */
    get asV9320(): FellowshipReferendaDecidingCountStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The number of referenda being decided currently.
 */
export interface FellowshipReferendaDecidingCountStorageV9320 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class FellowshipReferendaMetadataOfStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipReferenda'
    }

    protected getName() {
        return 'MetadataOf'
    }

    /**
     *  The metadata is a general information concerning the referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  The metadata is a general information concerning the referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get asV9420(): FellowshipReferendaMetadataOfStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The metadata is a general information concerning the referendum.
 *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
 *  dump or IPFS hash of a JSON file.
 * 
 *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
 *  large preimages.
 */
export interface FellowshipReferendaMetadataOfStorageV9420 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class FellowshipReferendaReferendumCountStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipReferenda'
    }

    protected getName() {
        return 'ReferendumCount'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asV9320(): FellowshipReferendaReferendumCountStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface FellowshipReferendaReferendumCountStorageV9320 {
    get(): Promise<number>
}

export class FellowshipReferendaReferendumInfoForStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipReferenda'
    }

    protected getName() {
        return 'ReferendumInfoFor'
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '8a990b6f7846d554858f1d8393cc54fb83824334598c3e96b4c4724d09d3d6c2'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9320(): FellowshipReferendaReferendumInfoForStorageV9320 {
        assert(this.isV9320)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9350(): boolean {
        return this.getTypeHash() === 'aabc81c1452cdb0de49a229561d543d385d7d642ee1e7780c9625a85ff113aa4'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9350(): FellowshipReferendaReferendumInfoForStorageV9350 {
        assert(this.isV9350)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '94d97d6312dcca8e8b83b102ca6ece367c8a23b89f39bef9faa78f5e68a93333'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9370(): FellowshipReferendaReferendumInfoForStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === '66ce814ce6829f0f86b4fbdc3c4d3336f4c25072d7ed8a54ab0a62e15c2190d9'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9381(): FellowshipReferendaReferendumInfoForStorageV9381 {
        assert(this.isV9381)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'b07ce7a9e25b52e042041a9d4b4fdbc37cae4e71a1484beaa001e17a9b8857e4'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9420(): FellowshipReferendaReferendumInfoForStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV9320 {
    get(key: number): Promise<(v9320.Type_643 | undefined)>
    getAll(): Promise<v9320.Type_643[]>
    getMany(keys: number[]): Promise<(v9320.Type_643 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9320.Type_643][]>
    getPairs(key: number): Promise<[k: number, v: v9320.Type_643][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9320.Type_643][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9320.Type_643][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV9350 {
    get(key: number): Promise<(v9350.Type_643 | undefined)>
    getAll(): Promise<v9350.Type_643[]>
    getMany(keys: number[]): Promise<(v9350.Type_643 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9350.Type_643][]>
    getPairs(key: number): Promise<[k: number, v: v9350.Type_643][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9350.Type_643][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9350.Type_643][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV9370 {
    get(key: number): Promise<(v9370.Type_644 | undefined)>
    getAll(): Promise<v9370.Type_644[]>
    getMany(keys: number[]): Promise<(v9370.Type_644 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9370.Type_644][]>
    getPairs(key: number): Promise<[k: number, v: v9370.Type_644][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9370.Type_644][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9370.Type_644][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV9381 {
    get(key: number): Promise<(v9381.Type_649 | undefined)>
    getAll(): Promise<v9381.Type_649[]>
    getMany(keys: number[]): Promise<(v9381.Type_649 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9381.Type_649][]>
    getPairs(key: number): Promise<[k: number, v: v9381.Type_649][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9381.Type_649][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9381.Type_649][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV9420 {
    get(key: number): Promise<(v9420.Type_632 | undefined)>
    getAll(): Promise<v9420.Type_632[]>
    getMany(keys: number[]): Promise<(v9420.Type_632 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9420.Type_632][]>
    getPairs(key: number): Promise<[k: number, v: v9420.Type_632][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9420.Type_632][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9420.Type_632][]>
}

export class FellowshipReferendaTrackQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipReferenda'
    }

    protected getName() {
        return 'TrackQueue'
    }

    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     * 
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === 'b2efb85b7225fbdea5c80c4afda7babcfa0569947ac63eb97788ff9a18c7aa5c'
    }

    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     * 
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    get asV9320(): FellowshipReferendaTrackQueueStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
 *  conviction-weighted approvals.
 * 
 *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
 */
export interface FellowshipReferendaTrackQueueStorageV9320 {
    get(key: number): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: number[]): Promise<[number, number][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, number][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, number][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, number][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, number][]][]>
}

export class FinalityTrackerInitializedStorage extends StorageBase {
    protected getPrefix() {
        return 'FinalityTracker'
    }

    protected getName() {
        return 'Initialized'
    }

    get isV1052(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    get asV1052(): FinalityTrackerInitializedStorageV1052 {
        assert(this.isV1052)
        return this as any
    }
}

export interface FinalityTrackerInitializedStorageV1052 {
    get(): Promise<boolean>
}

export class FinalityTrackerMedianStorage extends StorageBase {
    protected getPrefix() {
        return 'FinalityTracker'
    }

    protected getName() {
        return 'Median'
    }

    /**
     *  The median.
     */
    get isV1052(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The median.
     */
    get asV1052(): FinalityTrackerMedianStorageV1052 {
        assert(this.isV1052)
        return this as any
    }
}

/**
 *  The median.
 */
export interface FinalityTrackerMedianStorageV1052 {
    get(): Promise<number>
}

export class FinalityTrackerOrderedHintsStorage extends StorageBase {
    protected getPrefix() {
        return 'FinalityTracker'
    }

    protected getName() {
        return 'OrderedHints'
    }

    /**
     *  Ordered recent hints.
     */
    get isV1052(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Ordered recent hints.
     */
    get asV1052(): FinalityTrackerOrderedHintsStorageV1052 {
        assert(this.isV1052)
        return this as any
    }
}

/**
 *  Ordered recent hints.
 */
export interface FinalityTrackerOrderedHintsStorageV1052 {
    get(): Promise<number[]>
}

export class FinalityTrackerRecentHintsStorage extends StorageBase {
    protected getPrefix() {
        return 'FinalityTracker'
    }

    protected getName() {
        return 'RecentHints'
    }

    /**
     *  Recent hints.
     */
    get isV1052(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Recent hints.
     */
    get asV1052(): FinalityTrackerRecentHintsStorageV1052 {
        assert(this.isV1052)
        return this as any
    }
}

/**
 *  Recent hints.
 */
export interface FinalityTrackerRecentHintsStorageV1052 {
    get(): Promise<number[]>
}

export class FinalityTrackerUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'FinalityTracker'
    }

    protected getName() {
        return 'Update'
    }

    /**
     *  Final hint to apply in the block. `None` means "same as parent".
     */
    get isV1052(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Final hint to apply in the block. `None` means "same as parent".
     */
    get asV1052(): FinalityTrackerUpdateStorageV1052 {
        assert(this.isV1052)
        return this as any
    }
}

/**
 *  Final hint to apply in the block. `None` means "same as parent".
 */
export interface FinalityTrackerUpdateStorageV1052 {
    get(): Promise<(number | undefined)>
}

export class GiltActiveStorage extends StorageBase {
    protected getPrefix() {
        return 'Gilt'
    }

    protected getName() {
        return 'Active'
    }

    /**
     *  The currently active gilts, indexed according to the order of creation.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'b2c834c719dbb22b7e22532e6d5a1e472c7a2f7ad0853df02e647be08f292c03'
    }

    /**
     *  The currently active gilts, indexed according to the order of creation.
     */
    get asV9010(): GiltActiveStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The currently active gilts, indexed according to the order of creation.
 */
export interface GiltActiveStorageV9010 {
    get(key: number): Promise<(v9010.ActiveGilt | undefined)>
    getAll(): Promise<v9010.ActiveGilt[]>
    getMany(keys: number[]): Promise<(v9010.ActiveGilt | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9010.ActiveGilt][]>
    getPairs(key: number): Promise<[k: number, v: v9010.ActiveGilt][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9010.ActiveGilt][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9010.ActiveGilt][]>
}

export class GiltActiveTotalStorage extends StorageBase {
    protected getPrefix() {
        return 'Gilt'
    }

    protected getName() {
        return 'ActiveTotal'
    }

    /**
     *  Information relating to the gilts currently active.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'c669047de180d01cb964c4e9e526c25c411b8aef8c9471b9c490f933cc2811fd'
    }

    /**
     *  Information relating to the gilts currently active.
     */
    get asV9010(): GiltActiveTotalStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  Information relating to the gilts currently active.
 */
export interface GiltActiveTotalStorageV9010 {
    get(): Promise<v9010.ActiveGiltsTotal>
}

export class GiltQueueTotalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Gilt'
    }

    protected getName() {
        return 'QueueTotals'
    }

    /**
     *  The totals of items and balances within each queue. Saves a lot of storage reads in the
     *  case of sparsely packed queues.
     * 
     *  The vector is indexed by duration in `Period`s, offset by one, so information on the queue
     *  whose duration is one `Period` would be storage `0`.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '67637cf79fb2042d6f9976100af5ca8921a580769459271f2902d29698078547'
    }

    /**
     *  The totals of items and balances within each queue. Saves a lot of storage reads in the
     *  case of sparsely packed queues.
     * 
     *  The vector is indexed by duration in `Period`s, offset by one, so information on the queue
     *  whose duration is one `Period` would be storage `0`.
     */
    get asV9010(): GiltQueueTotalsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The totals of items and balances within each queue. Saves a lot of storage reads in the
 *  case of sparsely packed queues.
 * 
 *  The vector is indexed by duration in `Period`s, offset by one, so information on the queue
 *  whose duration is one `Period` would be storage `0`.
 */
export interface GiltQueueTotalsStorageV9010 {
    get(): Promise<[number, bigint][]>
}

export class GiltQueuesStorage extends StorageBase {
    protected getPrefix() {
        return 'Gilt'
    }

    protected getName() {
        return 'Queues'
    }

    /**
     *  The queues of bids ready to become gilts. Indexed by duration (in `Period`s).
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '70c5b3f30abfea02e22acf4a0d93299c0781d870ea5f30525742e4cb4712fea6'
    }

    /**
     *  The queues of bids ready to become gilts. Indexed by duration (in `Period`s).
     */
    get asV9010(): GiltQueuesStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The queues of bids ready to become gilts. Indexed by duration (in `Period`s).
 */
export interface GiltQueuesStorageV9010 {
    get(key: number): Promise<v9010.GiltBid[]>
    getAll(): Promise<v9010.GiltBid[][]>
    getMany(keys: number[]): Promise<v9010.GiltBid[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9010.GiltBid[]][]>
    getPairs(key: number): Promise<[k: number, v: v9010.GiltBid[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9010.GiltBid[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9010.GiltBid[]][]>
}

export class GrandpaCurrentSetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'CurrentSetId'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get isV9040(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get asV9040(): GrandpaCurrentSetIdStorageV9040 {
        assert(this.isV9040)
        return this as any
    }
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface GrandpaCurrentSetIdStorageV9040 {
    get(): Promise<bigint>
}

export class GrandpaNextForcedStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'NextForced'
    }

    /**
     *  next block number where we can force a change.
     */
    get isV9040(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  next block number where we can force a change.
     */
    get asV9040(): GrandpaNextForcedStorageV9040 {
        assert(this.isV9040)
        return this as any
    }
}

/**
 *  next block number where we can force a change.
 */
export interface GrandpaNextForcedStorageV9040 {
    get(): Promise<(number | undefined)>
}

export class GrandpaPendingChangeStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'PendingChange'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get isV9040(): boolean {
        return this.getTypeHash() === '13755304b861af7343de28e9c0f8c93252785a6950a8ef864736ceb88092a3c7'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get asV9040(): GrandpaPendingChangeStorageV9040 {
        assert(this.isV9040)
        return this as any
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'd8fc2937fb26b147a79b5d1c609ef3bb0386ef95a7bac7b1d42b218773058c3b'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get asV9111(): GrandpaPendingChangeStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface GrandpaPendingChangeStorageV9040 {
    get(): Promise<(v9040.StoredPendingChange | undefined)>
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface GrandpaPendingChangeStorageV9111 {
    get(): Promise<(v9111.StoredPendingChange | undefined)>
}

export class GrandpaSetIdSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'SetIdSession'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get isV9040(): boolean {
        return this.getTypeHash() === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get asV9040(): GrandpaSetIdSessionStorageV9040 {
        assert(this.isV9040)
        return this as any
    }
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  TWOX-NOTE: `SetId` is not under user control.
 */
export interface GrandpaSetIdSessionStorageV9040 {
    get(key: bigint): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: number][]>
    getPairs(key: bigint): Promise<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: number][]>
}

export class GrandpaStalledStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'Stalled'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get isV9040(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get asV9040(): GrandpaStalledStorageV9040 {
        assert(this.isV9040)
        return this as any
    }
}

/**
 *  `true` if we are currently stalled.
 */
export interface GrandpaStalledStorageV9040 {
    get(): Promise<([number, number] | undefined)>
}

export class GrandpaStateStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'State'
    }

    /**
     *  State of the current authority set.
     */
    get isV9040(): boolean {
        return this.getTypeHash() === 'd29e1b762b13b4994e98ec10b0ecf04d5e9132829fb105fd6b9bc2a98b77ee17'
    }

    /**
     *  State of the current authority set.
     */
    get asV9040(): GrandpaStateStorageV9040 {
        assert(this.isV9040)
        return this as any
    }

    /**
     *  State of the current authority set.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '7e7a7e0912740b55ac7227f3f2a3612d23a3fefb1cd7f6da52f12f322350a0ce'
    }

    /**
     *  State of the current authority set.
     */
    get asV9111(): GrandpaStateStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  State of the current authority set.
 */
export interface GrandpaStateStorageV9040 {
    get(): Promise<v9040.StoredState>
}

/**
 *  State of the current authority set.
 */
export interface GrandpaStateStorageV9111 {
    get(): Promise<v9111.StoredState>
}

export class GrandpaFinalityAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  DEPRECATED
     * 
     *  This used to store the current authority set, which has been migrated to the well-known
     *  GRANDPA_AUTHORITES_KEY unhashed key.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
    }

    /**
     *  DEPRECATED
     * 
     *  This used to store the current authority set, which has been migrated to the well-known
     *  GRANDPA_AUTHORITES_KEY unhashed key.
     */
    get asV1020(): GrandpaFinalityAuthoritiesStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  DEPRECATED
 * 
 *  This used to store the current authority set, which has been migrated to the well-known
 *  GRANDPA_AUTHORITES_KEY unhashed key.
 */
export interface GrandpaFinalityAuthoritiesStorageV1020 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class GrandpaFinalityCurrentSetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'CurrentSetId'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get asV1020(): GrandpaFinalityCurrentSetIdStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface GrandpaFinalityCurrentSetIdStorageV1020 {
    get(): Promise<bigint>
}

export class GrandpaFinalityNextForcedStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'NextForced'
    }

    /**
     *  next block number where we can force a change.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  next block number where we can force a change.
     */
    get asV1020(): GrandpaFinalityNextForcedStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  next block number where we can force a change.
 */
export interface GrandpaFinalityNextForcedStorageV1020 {
    get(): Promise<(number | undefined)>
}

export class GrandpaFinalityPendingChangeStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'PendingChange'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '13755304b861af7343de28e9c0f8c93252785a6950a8ef864736ceb88092a3c7'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get asV1020(): GrandpaFinalityPendingChangeStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface GrandpaFinalityPendingChangeStorageV1020 {
    get(): Promise<(v1020.StoredPendingChange | undefined)>
}

export class GrandpaFinalitySetIdSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'SetIdSession'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its members were responsible.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its members were responsible.
     */
    get asV1020(): GrandpaFinalitySetIdSessionStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its members were responsible.
 */
export interface GrandpaFinalitySetIdSessionStorageV1020 {
    get(key: bigint): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: bigint[]): Promise<(number | undefined)[]>
}

export class GrandpaFinalityStalledStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'Stalled'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get asV1020(): GrandpaFinalityStalledStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  `true` if we are currently stalled.
 */
export interface GrandpaFinalityStalledStorageV1020 {
    get(): Promise<([number, number] | undefined)>
}

export class GrandpaFinalityStateStorage extends StorageBase {
    protected getPrefix() {
        return 'GrandpaFinality'
    }

    protected getName() {
        return 'State'
    }

    /**
     *  State of the current authority set.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'd29e1b762b13b4994e98ec10b0ecf04d5e9132829fb105fd6b9bc2a98b77ee17'
    }

    /**
     *  State of the current authority set.
     */
    get asV1020(): GrandpaFinalityStateStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  State of the current authority set.
 */
export interface GrandpaFinalityStateStorageV1020 {
    get(): Promise<v1020.StoredState>
}

export class HrmpHrmpAcceptedChannelRequestCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpAcceptedChannelRequestCount'
    }

    /**
     *  This mapping tracks how many open channel requests were accepted by a given recipient para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
     *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
    }

    /**
     *  This mapping tracks how many open channel requests were accepted by a given recipient para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
     *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
     */
    get asV9010(): HrmpHrmpAcceptedChannelRequestCountStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  This mapping tracks how many open channel requests were accepted by a given recipient para.
 *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
 *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
 */
export interface HrmpHrmpAcceptedChannelRequestCountStorageV9010 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class HrmpHrmpChannelContentsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpChannelContents'
    }

    /**
     *  Storage for the messages for each channel.
     *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'ba3a0ca70f01a0a72b27bbec1b8e5531a01075c5f49381d9542ac00ee8646cb8'
    }

    /**
     *  Storage for the messages for each channel.
     *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
     */
    get asV9010(): HrmpHrmpChannelContentsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  Storage for the messages for each channel.
     *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '6cd143ae2730de334efd938bdf6af5805612dab0823423596dcf6bbbeddccfb3'
    }

    /**
     *  Storage for the messages for each channel.
     *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
     */
    get asV9111(): HrmpHrmpChannelContentsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Storage for the messages for each channel.
 *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
 */
export interface HrmpHrmpChannelContentsStorageV9010 {
    get(key: v9010.HrmpChannelId): Promise<v9010.InboundHrmpMessage[]>
    getAll(): Promise<v9010.InboundHrmpMessage[][]>
    getMany(keys: v9010.HrmpChannelId[]): Promise<v9010.InboundHrmpMessage[][]>
    getKeys(): Promise<v9010.HrmpChannelId[]>
    getKeys(key: v9010.HrmpChannelId): Promise<v9010.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v9010.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v9010.HrmpChannelId): AsyncIterable<v9010.HrmpChannelId[]>
    getPairs(): Promise<[k: v9010.HrmpChannelId, v: v9010.InboundHrmpMessage[]][]>
    getPairs(key: v9010.HrmpChannelId): Promise<[k: v9010.HrmpChannelId, v: v9010.InboundHrmpMessage[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v9010.HrmpChannelId, v: v9010.InboundHrmpMessage[]][]>
    getPairsPaged(pageSize: number, key: v9010.HrmpChannelId): AsyncIterable<[k: v9010.HrmpChannelId, v: v9010.InboundHrmpMessage[]][]>
}

/**
 *  Storage for the messages for each channel.
 *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
 */
export interface HrmpHrmpChannelContentsStorageV9111 {
    get(key: v9111.HrmpChannelId): Promise<v9111.InboundHrmpMessage[]>
    getAll(): Promise<v9111.InboundHrmpMessage[][]>
    getMany(keys: v9111.HrmpChannelId[]): Promise<v9111.InboundHrmpMessage[][]>
    getKeys(): Promise<v9111.HrmpChannelId[]>
    getKeys(key: v9111.HrmpChannelId): Promise<v9111.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v9111.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v9111.HrmpChannelId): AsyncIterable<v9111.HrmpChannelId[]>
    getPairs(): Promise<[k: v9111.HrmpChannelId, v: v9111.InboundHrmpMessage[]][]>
    getPairs(key: v9111.HrmpChannelId): Promise<[k: v9111.HrmpChannelId, v: v9111.InboundHrmpMessage[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v9111.HrmpChannelId, v: v9111.InboundHrmpMessage[]][]>
    getPairsPaged(pageSize: number, key: v9111.HrmpChannelId): AsyncIterable<[k: v9111.HrmpChannelId, v: v9111.InboundHrmpMessage[]][]>
}

export class HrmpHrmpChannelDigestsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpChannelDigests'
    }

    /**
     *  Maintains a mapping that can be used to answer the question:
     *  What paras sent a message at the given block number for a given reciever.
     *  Invariants:
     *  - The inner `Vec<ParaId>` is never empty.
     *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
     *  - The outer vector is sorted ascending by block number and cannot store two items with the same
     *    block number.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '8b00bb4a27873ea090234c4f7aeea8dbf9ae2628a4945d4910f497ed81c5e21f'
    }

    /**
     *  Maintains a mapping that can be used to answer the question:
     *  What paras sent a message at the given block number for a given reciever.
     *  Invariants:
     *  - The inner `Vec<ParaId>` is never empty.
     *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
     *  - The outer vector is sorted ascending by block number and cannot store two items with the same
     *    block number.
     */
    get asV9010(): HrmpHrmpChannelDigestsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  Maintains a mapping that can be used to answer the question:
 *  What paras sent a message at the given block number for a given reciever.
 *  Invariants:
 *  - The inner `Vec<ParaId>` is never empty.
 *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
 *  - The outer vector is sorted ascending by block number and cannot store two items with the same
 *    block number.
 */
export interface HrmpHrmpChannelDigestsStorageV9010 {
    get(key: number): Promise<[number, number[]][]>
    getAll(): Promise<[number, number[]][][]>
    getMany(keys: number[]): Promise<[number, number[]][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, number[]][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, number[]][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, number[]][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, number[]][]][]>
}

export class HrmpHrmpChannelsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpChannels'
    }

    /**
     *  HRMP channel data associated with each para.
     *  Invariant:
     *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '194777781ab9502f73851a7f429a7f2001a8d6e3c328767ca1adad832af65bbf'
    }

    /**
     *  HRMP channel data associated with each para.
     *  Invariant:
     *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
     */
    get asV9010(): HrmpHrmpChannelsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  HRMP channel data associated with each para.
     *  Invariant:
     *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'd5f877f4add6df244ed0d4f20e980d9cbb8f6ecb91c8f56abca84b72441b6447'
    }

    /**
     *  HRMP channel data associated with each para.
     *  Invariant:
     *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
     */
    get asV9111(): HrmpHrmpChannelsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  HRMP channel data associated with each para.
 *  Invariant:
 *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpHrmpChannelsStorageV9010 {
    get(key: v9010.HrmpChannelId): Promise<(v9010.HrmpChannel | undefined)>
    getAll(): Promise<v9010.HrmpChannel[]>
    getMany(keys: v9010.HrmpChannelId[]): Promise<(v9010.HrmpChannel | undefined)[]>
    getKeys(): Promise<v9010.HrmpChannelId[]>
    getKeys(key: v9010.HrmpChannelId): Promise<v9010.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v9010.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v9010.HrmpChannelId): AsyncIterable<v9010.HrmpChannelId[]>
    getPairs(): Promise<[k: v9010.HrmpChannelId, v: v9010.HrmpChannel][]>
    getPairs(key: v9010.HrmpChannelId): Promise<[k: v9010.HrmpChannelId, v: v9010.HrmpChannel][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v9010.HrmpChannelId, v: v9010.HrmpChannel][]>
    getPairsPaged(pageSize: number, key: v9010.HrmpChannelId): AsyncIterable<[k: v9010.HrmpChannelId, v: v9010.HrmpChannel][]>
}

/**
 *  HRMP channel data associated with each para.
 *  Invariant:
 *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpHrmpChannelsStorageV9111 {
    get(key: v9111.HrmpChannelId): Promise<(v9111.HrmpChannel | undefined)>
    getAll(): Promise<v9111.HrmpChannel[]>
    getMany(keys: v9111.HrmpChannelId[]): Promise<(v9111.HrmpChannel | undefined)[]>
    getKeys(): Promise<v9111.HrmpChannelId[]>
    getKeys(key: v9111.HrmpChannelId): Promise<v9111.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v9111.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v9111.HrmpChannelId): AsyncIterable<v9111.HrmpChannelId[]>
    getPairs(): Promise<[k: v9111.HrmpChannelId, v: v9111.HrmpChannel][]>
    getPairs(key: v9111.HrmpChannelId): Promise<[k: v9111.HrmpChannelId, v: v9111.HrmpChannel][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v9111.HrmpChannelId, v: v9111.HrmpChannel][]>
    getPairsPaged(pageSize: number, key: v9111.HrmpChannelId): AsyncIterable<[k: v9111.HrmpChannelId, v: v9111.HrmpChannel][]>
}

export class HrmpHrmpCloseChannelRequestsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpCloseChannelRequests'
    }

    /**
     *  A set of pending HRMP close channel requests that are going to be closed during the session change.
     *  Used for checking if a given channel is registered for closure.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '11c2cd559ad10664bf5b9bd5c9f6057de0dbe329d8ad99799edf2affa48a44f9'
    }

    /**
     *  A set of pending HRMP close channel requests that are going to be closed during the session change.
     *  Used for checking if a given channel is registered for closure.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get asV9010(): HrmpHrmpCloseChannelRequestsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  A set of pending HRMP close channel requests that are going to be closed during the session change.
     *  Used for checking if a given channel is registered for closure.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '7755b93c00c932e936c6bfaff914a35cc38f873e39a57ea414c8be676db098d8'
    }

    /**
     *  A set of pending HRMP close channel requests that are going to be closed during the session change.
     *  Used for checking if a given channel is registered for closure.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get asV9111(): HrmpHrmpCloseChannelRequestsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  A set of pending HRMP close channel requests that are going to be closed during the session change.
 *  Used for checking if a given channel is registered for closure.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpHrmpCloseChannelRequestsStorageV9010 {
    get(key: v9010.HrmpChannelId): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: v9010.HrmpChannelId[]): Promise<(null | undefined)[]>
    getKeys(): Promise<v9010.HrmpChannelId[]>
    getKeys(key: v9010.HrmpChannelId): Promise<v9010.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v9010.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v9010.HrmpChannelId): AsyncIterable<v9010.HrmpChannelId[]>
    getPairs(): Promise<[k: v9010.HrmpChannelId, v: null][]>
    getPairs(key: v9010.HrmpChannelId): Promise<[k: v9010.HrmpChannelId, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v9010.HrmpChannelId, v: null][]>
    getPairsPaged(pageSize: number, key: v9010.HrmpChannelId): AsyncIterable<[k: v9010.HrmpChannelId, v: null][]>
}

/**
 *  A set of pending HRMP close channel requests that are going to be closed during the session change.
 *  Used for checking if a given channel is registered for closure.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpHrmpCloseChannelRequestsStorageV9111 {
    get(key: v9111.HrmpChannelId): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: v9111.HrmpChannelId[]): Promise<(null | undefined)[]>
    getKeys(): Promise<v9111.HrmpChannelId[]>
    getKeys(key: v9111.HrmpChannelId): Promise<v9111.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v9111.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v9111.HrmpChannelId): AsyncIterable<v9111.HrmpChannelId[]>
    getPairs(): Promise<[k: v9111.HrmpChannelId, v: null][]>
    getPairs(key: v9111.HrmpChannelId): Promise<[k: v9111.HrmpChannelId, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v9111.HrmpChannelId, v: null][]>
    getPairsPaged(pageSize: number, key: v9111.HrmpChannelId): AsyncIterable<[k: v9111.HrmpChannelId, v: null][]>
}

export class HrmpHrmpCloseChannelRequestsListStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpCloseChannelRequestsList'
    }

    get isV9010(): boolean {
        return this.getTypeHash() === 'd792901ff7d249c8c5461debb906b34443587045441c21bcbca439e1c6939deb'
    }

    get asV9010(): HrmpHrmpCloseChannelRequestsListStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    get isV9111(): boolean {
        return this.getTypeHash() === '9025c13f17e5df7d9188b5eb2c97a89f4ef8e04b9492613cba216a0d8d672b8f'
    }

    get asV9111(): HrmpHrmpCloseChannelRequestsListStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

export interface HrmpHrmpCloseChannelRequestsListStorageV9010 {
    get(): Promise<v9010.HrmpChannelId[]>
}

export interface HrmpHrmpCloseChannelRequestsListStorageV9111 {
    get(): Promise<v9111.HrmpChannelId[]>
}

export class HrmpHrmpEgressChannelsIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpEgressChannelsIndex'
    }

    get isV9010(): boolean {
        return this.getTypeHash() === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
    }

    get asV9010(): HrmpHrmpEgressChannelsIndexStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

export interface HrmpHrmpEgressChannelsIndexStorageV9010 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class HrmpHrmpIngressChannelsIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpIngressChannelsIndex'
    }

    /**
     *  Ingress/egress indexes allow to find all the senders and receivers given the opposite
     *  side. I.e.
     * 
     *  (a) ingress index allows to find all the senders for a given recipient.
     *  (b) egress index allows to find all the recipients for a given sender.
     * 
     *  Invariants:
     *  - for each ingress index entry for `P` each item `I` in the index should present in `HrmpChannels`
     *    as `(I, P)`.
     *  - for each egress index entry for `P` each item `E` in the index should present in `HrmpChannels`
     *    as `(P, E)`.
     *  - there should be no other dangling channels in `HrmpChannels`.
     *  - the vectors are sorted.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
    }

    /**
     *  Ingress/egress indexes allow to find all the senders and receivers given the opposite
     *  side. I.e.
     * 
     *  (a) ingress index allows to find all the senders for a given recipient.
     *  (b) egress index allows to find all the recipients for a given sender.
     * 
     *  Invariants:
     *  - for each ingress index entry for `P` each item `I` in the index should present in `HrmpChannels`
     *    as `(I, P)`.
     *  - for each egress index entry for `P` each item `E` in the index should present in `HrmpChannels`
     *    as `(P, E)`.
     *  - there should be no other dangling channels in `HrmpChannels`.
     *  - the vectors are sorted.
     */
    get asV9010(): HrmpHrmpIngressChannelsIndexStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  Ingress/egress indexes allow to find all the senders and receivers given the opposite
 *  side. I.e.
 * 
 *  (a) ingress index allows to find all the senders for a given recipient.
 *  (b) egress index allows to find all the recipients for a given sender.
 * 
 *  Invariants:
 *  - for each ingress index entry for `P` each item `I` in the index should present in `HrmpChannels`
 *    as `(I, P)`.
 *  - for each egress index entry for `P` each item `E` in the index should present in `HrmpChannels`
 *    as `(P, E)`.
 *  - there should be no other dangling channels in `HrmpChannels`.
 *  - the vectors are sorted.
 */
export interface HrmpHrmpIngressChannelsIndexStorageV9010 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class HrmpHrmpOpenChannelRequestCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpOpenChannelRequestCount'
    }

    /**
     *  This mapping tracks how many open channel requests are inititated by a given sender para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has `(X, _)`
     *  as the number of `HrmpOpenChannelRequestCount` for `X`.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
    }

    /**
     *  This mapping tracks how many open channel requests are inititated by a given sender para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has `(X, _)`
     *  as the number of `HrmpOpenChannelRequestCount` for `X`.
     */
    get asV9010(): HrmpHrmpOpenChannelRequestCountStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  This mapping tracks how many open channel requests are inititated by a given sender para.
 *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has `(X, _)`
 *  as the number of `HrmpOpenChannelRequestCount` for `X`.
 */
export interface HrmpHrmpOpenChannelRequestCountStorageV9010 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class HrmpHrmpOpenChannelRequestsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpOpenChannelRequests'
    }

    /**
     *  The set of pending HRMP open channel requests.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '489913b7e9dd8ceaf3f82192ca3508b6427deae6da32f6c0e54f3d4389e4c734'
    }

    /**
     *  The set of pending HRMP open channel requests.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get asV9010(): HrmpHrmpOpenChannelRequestsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  The set of pending HRMP open channel requests.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '14e894f64f4951bc0cda7e287037e971a9cfbd68c302fa59695038b358ef76b9'
    }

    /**
     *  The set of pending HRMP open channel requests.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get asV9111(): HrmpHrmpOpenChannelRequestsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The set of pending HRMP open channel requests.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpHrmpOpenChannelRequestsStorageV9010 {
    get(key: v9010.HrmpChannelId): Promise<(v9010.HrmpOpenChannelRequest | undefined)>
    getAll(): Promise<v9010.HrmpOpenChannelRequest[]>
    getMany(keys: v9010.HrmpChannelId[]): Promise<(v9010.HrmpOpenChannelRequest | undefined)[]>
    getKeys(): Promise<v9010.HrmpChannelId[]>
    getKeys(key: v9010.HrmpChannelId): Promise<v9010.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v9010.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v9010.HrmpChannelId): AsyncIterable<v9010.HrmpChannelId[]>
    getPairs(): Promise<[k: v9010.HrmpChannelId, v: v9010.HrmpOpenChannelRequest][]>
    getPairs(key: v9010.HrmpChannelId): Promise<[k: v9010.HrmpChannelId, v: v9010.HrmpOpenChannelRequest][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v9010.HrmpChannelId, v: v9010.HrmpOpenChannelRequest][]>
    getPairsPaged(pageSize: number, key: v9010.HrmpChannelId): AsyncIterable<[k: v9010.HrmpChannelId, v: v9010.HrmpOpenChannelRequest][]>
}

/**
 *  The set of pending HRMP open channel requests.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpHrmpOpenChannelRequestsStorageV9111 {
    get(key: v9111.HrmpChannelId): Promise<(v9111.HrmpOpenChannelRequest | undefined)>
    getAll(): Promise<v9111.HrmpOpenChannelRequest[]>
    getMany(keys: v9111.HrmpChannelId[]): Promise<(v9111.HrmpOpenChannelRequest | undefined)[]>
    getKeys(): Promise<v9111.HrmpChannelId[]>
    getKeys(key: v9111.HrmpChannelId): Promise<v9111.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v9111.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v9111.HrmpChannelId): AsyncIterable<v9111.HrmpChannelId[]>
    getPairs(): Promise<[k: v9111.HrmpChannelId, v: v9111.HrmpOpenChannelRequest][]>
    getPairs(key: v9111.HrmpChannelId): Promise<[k: v9111.HrmpChannelId, v: v9111.HrmpOpenChannelRequest][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v9111.HrmpChannelId, v: v9111.HrmpOpenChannelRequest][]>
    getPairsPaged(pageSize: number, key: v9111.HrmpChannelId): AsyncIterable<[k: v9111.HrmpChannelId, v: v9111.HrmpOpenChannelRequest][]>
}

export class HrmpHrmpOpenChannelRequestsListStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpOpenChannelRequestsList'
    }

    get isV9010(): boolean {
        return this.getTypeHash() === 'd792901ff7d249c8c5461debb906b34443587045441c21bcbca439e1c6939deb'
    }

    get asV9010(): HrmpHrmpOpenChannelRequestsListStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    get isV9111(): boolean {
        return this.getTypeHash() === '9025c13f17e5df7d9188b5eb2c97a89f4ef8e04b9492613cba216a0d8d672b8f'
    }

    get asV9111(): HrmpHrmpOpenChannelRequestsListStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

export interface HrmpHrmpOpenChannelRequestsListStorageV9010 {
    get(): Promise<v9010.HrmpChannelId[]>
}

export interface HrmpHrmpOpenChannelRequestsListStorageV9111 {
    get(): Promise<v9111.HrmpChannelId[]>
}

export class HrmpHrmpWatermarksStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpWatermarks'
    }

    /**
     *  The HRMP watermark associated with each para.
     *  Invariant:
     *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The HRMP watermark associated with each para.
     *  Invariant:
     *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
     */
    get asV9010(): HrmpHrmpWatermarksStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The HRMP watermark associated with each para.
 *  Invariant:
 *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpHrmpWatermarksStorageV9010 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class IdentityIdentityOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'IdentityOf'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     */
    get isV1052(): boolean {
        return this.getTypeHash() === 'eee9529c5197f7a5f8200e155d78bab0a612de49bd6c8941e539265edf54c3aa'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     */
    get asV1052(): IdentityIdentityOfStorageV1052 {
        assert(this.isV1052)
        return this as any
    }
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 */
export interface IdentityIdentityOfStorageV1052 {
    get(key: Uint8Array): Promise<(v1052.Registration | undefined)>
    getAll(): Promise<v1052.Registration[]>
    getMany(keys: Uint8Array[]): Promise<(v1052.Registration | undefined)[]>
}

export class IdentityRegistrarsStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'Registrars'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get isV1052(): boolean {
        return this.getTypeHash() === 'd53feea500c88336983c65706eeb51794b1fc991a17d6d33663d49aeb47b12b6'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get asV1052(): IdentityRegistrarsStorageV1052 {
        assert(this.isV1052)
        return this as any
    }
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface IdentityRegistrarsStorageV1052 {
    get(): Promise<(v1052.RegistrarInfo | undefined)[]>
}

export class IdentitySubsOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SubsOf'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     */
    get isV1052(): boolean {
        return this.getTypeHash() === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     */
    get asV1052(): IdentitySubsOfStorageV1052 {
        assert(this.isV1052)
        return this as any
    }
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 */
export interface IdentitySubsOfStorageV1052 {
    get(key: Uint8Array): Promise<[bigint, Uint8Array[]]>
    getAll(): Promise<[bigint, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, Uint8Array[]][]>
}

export class IdentitySuperOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SuperOf'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get isV1052(): boolean {
        return this.getTypeHash() === '3e2404306f316847b5946856f8222df193ecb9ace5e509cd9f8808145fd9b792'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get asV1052(): IdentitySuperOfStorageV1052 {
        assert(this.isV1052)
        return this as any
    }
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface IdentitySuperOfStorageV1052 {
    get(key: Uint8Array): Promise<([Uint8Array, v1052.Data] | undefined)>
    getAll(): Promise<[Uint8Array, v1052.Data][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, v1052.Data] | undefined)[]>
}

export class ImOnlineAuthoredBlocksStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'AuthoredBlocks'
    }

    /**
     *  For each session index, we keep a mapping of `T::ValidatorId` to the
     *  number of blocks authored by the given authority.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'cc6a8dbe383d37ce9fa22935e3a1838a5aa7615fa4449b4318806f402f116ec9'
    }

    /**
     *  For each session index, we keep a mapping of `T::ValidatorId` to the
     *  number of blocks authored by the given authority.
     */
    get asV1020(): ImOnlineAuthoredBlocksStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  For each session index, we keep a mapping of `T::ValidatorId` to the
 *  number of blocks authored by the given authority.
 */
export interface ImOnlineAuthoredBlocksStorageV1020 {
    get(key1: number, key2: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<number[]>
}

export class ImOnlineGossipAtStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'GossipAt'
    }

    /**
     *  The block number when we should gossip.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The block number when we should gossip.
     */
    get asV1020(): ImOnlineGossipAtStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The block number when we should gossip.
 */
export interface ImOnlineGossipAtStorageV1020 {
    get(): Promise<number>
}

export class ImOnlineHeartbeatAfterStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'HeartbeatAfter'
    }

    /**
     *  The block number after which it's ok to send heartbeats in current session.
     * 
     *  At the beginning of each session we set this to a value that should
     *  fall roughly in the middle of the session duration.
     *  The idea is to first wait for the validators to produce a block
     *  in the current session, so that the heartbeat later on will not be necessary.
     */
    get isV1045(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The block number after which it's ok to send heartbeats in current session.
     * 
     *  At the beginning of each session we set this to a value that should
     *  fall roughly in the middle of the session duration.
     *  The idea is to first wait for the validators to produce a block
     *  in the current session, so that the heartbeat later on will not be necessary.
     */
    get asV1045(): ImOnlineHeartbeatAfterStorageV1045 {
        assert(this.isV1045)
        return this as any
    }
}

/**
 *  The block number after which it's ok to send heartbeats in current session.
 * 
 *  At the beginning of each session we set this to a value that should
 *  fall roughly in the middle of the session duration.
 *  The idea is to first wait for the validators to produce a block
 *  in the current session, so that the heartbeat later on will not be necessary.
 */
export interface ImOnlineHeartbeatAfterStorageV1045 {
    get(): Promise<number>
}

export class ImOnlineKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'Keys'
    }

    /**
     *  The current set of keys that may issue a heartbeat.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of keys that may issue a heartbeat.
     */
    get asV1020(): ImOnlineKeysStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The current set of keys that may issue a heartbeat.
 */
export interface ImOnlineKeysStorageV1020 {
    get(): Promise<Uint8Array[]>
}

export class ImOnlineReceivedHeartbeatsStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'ReceivedHeartbeats'
    }

    /**
     *  For each session index, we keep a mapping of `AuthIndex`
     *  to `offchain::OpaqueNetworkState`.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '682157dad304389ac6525dcc32f225e326c71b23b36940fe6c6b0ba3c53ac61f'
    }

    /**
     *  For each session index, we keep a mapping of `AuthIndex`
     *  to `offchain::OpaqueNetworkState`.
     */
    get asV1020(): ImOnlineReceivedHeartbeatsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  For each session index, we keep a mapping of 'SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '1e6ba35502038271a716c3edc7af482c7f3b2c3797e0bd5bc206c2fe43459e4e'
    }

    /**
     *  For each session index, we keep a mapping of 'SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    get asV9111(): ImOnlineReceivedHeartbeatsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  For each session index, we keep a mapping of `AuthIndex`
 *  to `offchain::OpaqueNetworkState`.
 */
export interface ImOnlineReceivedHeartbeatsStorageV1020 {
    get(key1: number, key2: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<(Uint8Array | undefined)[]>
}

/**
 *  For each session index, we keep a mapping of 'SessionIndex` and `AuthIndex` to
 *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
 */
export interface ImOnlineReceivedHeartbeatsStorageV9111 {
    get(key1: number, key2: number): Promise<([number, v9111.BoundedOpaqueNetworkState] | undefined)>
    getAll(): Promise<[number, v9111.BoundedOpaqueNetworkState][]>
    getMany(keys: [number, number][]): Promise<([number, v9111.BoundedOpaqueNetworkState] | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: [number, v9111.BoundedOpaqueNetworkState]][]>
    getPairs(key1: number): Promise<[k: [number, number], v: [number, v9111.BoundedOpaqueNetworkState]][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: [number, v9111.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: [number, v9111.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: [number, v9111.BoundedOpaqueNetworkState]][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: [number, v9111.BoundedOpaqueNetworkState]][]>
}

export class IndicesAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Indices'
    }

    protected getName() {
        return 'Accounts'
    }

    /**
     *  The lookup from index to account.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '42d7ee809a9642338b77286d1f68a99e10272a83d9d5fa33c2b7f159255a39f8'
    }

    /**
     *  The lookup from index to account.
     */
    get asV1050(): IndicesAccountsStorageV1050 {
        assert(this.isV1050)
        return this as any
    }

    /**
     *  The lookup from index to account.
     */
    get isV2007(): boolean {
        return this.getTypeHash() === 'c6d4b452610ac51f7c9427bf2d9910242bb414a02409a484caf47fa24e50516e'
    }

    /**
     *  The lookup from index to account.
     */
    get asV2007(): IndicesAccountsStorageV2007 {
        assert(this.isV2007)
        return this as any
    }
}

/**
 *  The lookup from index to account.
 */
export interface IndicesAccountsStorageV1050 {
    get(key: number): Promise<([Uint8Array, bigint] | undefined)>
    getAll(): Promise<[Uint8Array, bigint][]>
    getMany(keys: number[]): Promise<([Uint8Array, bigint] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array, bigint]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array, bigint]][]>
}

/**
 *  The lookup from index to account.
 */
export interface IndicesAccountsStorageV2007 {
    get(key: number): Promise<([Uint8Array, bigint, boolean] | undefined)>
    getAll(): Promise<[Uint8Array, bigint, boolean][]>
    getMany(keys: number[]): Promise<([Uint8Array, bigint, boolean] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array, bigint, boolean]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array, bigint, boolean]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array, bigint, boolean]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array, bigint, boolean]][]>
}

export class IndicesEnumSetStorage extends StorageBase {
    protected getPrefix() {
        return 'Indices'
    }

    protected getName() {
        return 'EnumSet'
    }

    /**
     *  The enumeration sets.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  The enumeration sets.
     */
    get asV1020(): IndicesEnumSetStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The enumeration sets.
 */
export interface IndicesEnumSetStorageV1020 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
}

export class IndicesNextEnumSetStorage extends StorageBase {
    protected getPrefix() {
        return 'Indices'
    }

    protected getName() {
        return 'NextEnumSet'
    }

    /**
     *  The next free enumeration set.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free enumeration set.
     */
    get asV1020(): IndicesNextEnumSetStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The next free enumeration set.
 */
export interface IndicesNextEnumSetStorageV1020 {
    get(): Promise<number>
}

export class InitializerBufferedSessionChangesStorage extends StorageBase {
    protected getPrefix() {
        return 'Initializer'
    }

    protected getName() {
        return 'BufferedSessionChanges'
    }

    /**
     *  Buffered session changes along with the block number at which they should be applied.
     * 
     *  Typically this will be empty or one element long. Apart from that this item never hits
     *  the storage.
     * 
     *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
     *  upgrade boundaries or if governance intervenes.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '6914e52e4a9c335c02339b4e3e33d68b49a03e7e8aa3c2a6368d4d29c23f2382'
    }

    /**
     *  Buffered session changes along with the block number at which they should be applied.
     * 
     *  Typically this will be empty or one element long. Apart from that this item never hits
     *  the storage.
     * 
     *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
     *  upgrade boundaries or if governance intervenes.
     */
    get asV9010(): InitializerBufferedSessionChangesStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  Buffered session changes along with the block number at which they should be applied.
     * 
     *  Typically this will be empty or one element long. Apart from that this item never hits
     *  the storage.
     * 
     *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
     *  upgrade boundaries or if governance intervenes.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '8ca8921e3e82455d025ef60ac4a362641034332241c6a69a4183e6e8f6e58800'
    }

    /**
     *  Buffered session changes along with the block number at which they should be applied.
     * 
     *  Typically this will be empty or one element long. Apart from that this item never hits
     *  the storage.
     * 
     *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
     *  upgrade boundaries or if governance intervenes.
     */
    get asV9111(): InitializerBufferedSessionChangesStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Buffered session changes along with the block number at which they should be applied.
 * 
 *  Typically this will be empty or one element long. Apart from that this item never hits
 *  the storage.
 * 
 *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
 *  upgrade boundaries or if governance intervenes.
 */
export interface InitializerBufferedSessionChangesStorageV9010 {
    get(): Promise<v9010.BufferedSessionChange[]>
}

/**
 *  Buffered session changes along with the block number at which they should be applied.
 * 
 *  Typically this will be empty or one element long. Apart from that this item never hits
 *  the storage.
 * 
 *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
 *  upgrade boundaries or if governance intervenes.
 */
export interface InitializerBufferedSessionChangesStorageV9111 {
    get(): Promise<v9111.BufferedSessionChange[]>
}

export class InitializerHasInitializedStorage extends StorageBase {
    protected getPrefix() {
        return 'Initializer'
    }

    protected getName() {
        return 'HasInitialized'
    }

    /**
     *  Whether the parachains modules have been initialized within this block.
     * 
     *  Semantically a bool, but this guarantees it should never hit the trie,
     *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
     * 
     *  As a bool, `set(false)` and `remove()` both lead to the next `get()` being false, but one of
     *  them writes to the trie and one does not. This confusion makes `Option<()>` more suitable for
     *  the semantics of this variable.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '6ff2f39608fbf22c19e5525281db3aa2912456d1fc877d48f7b750ebbcdd9331'
    }

    /**
     *  Whether the parachains modules have been initialized within this block.
     * 
     *  Semantically a bool, but this guarantees it should never hit the trie,
     *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
     * 
     *  As a bool, `set(false)` and `remove()` both lead to the next `get()` being false, but one of
     *  them writes to the trie and one does not. This confusion makes `Option<()>` more suitable for
     *  the semantics of this variable.
     */
    get asV9010(): InitializerHasInitializedStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  Whether the parachains modules have been initialized within this block.
 * 
 *  Semantically a bool, but this guarantees it should never hit the trie,
 *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
 * 
 *  As a bool, `set(false)` and `remove()` both lead to the next `get()` being false, but one of
 *  them writes to the trie and one does not. This confusion makes `Option<()>` more suitable for
 *  the semantics of this variable.
 */
export interface InitializerHasInitializedStorageV9010 {
    get(): Promise<(null | undefined)>
}

export class Instance1CollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV1020(): Instance1CollectiveMembersStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance1CollectiveMembersStorageV1020 {
    get(): Promise<Uint8Array[]>
}

export class Instance1CollectivePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The member who provides the default vote for any other members that do not vote before
     *  the timeout. If None, then no member has that privilege.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The member who provides the default vote for any other members that do not vote before
     *  the timeout. If None, then no member has that privilege.
     */
    get asV1050(): Instance1CollectivePrimeStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  The member who provides the default vote for any other members that do not vote before
 *  the timeout. If None, then no member has that privilege.
 */
export interface Instance1CollectivePrimeStorageV1050 {
    get(): Promise<(Uint8Array | undefined)>
}

export class Instance1CollectiveProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV1020(): Instance1CollectiveProposalCountStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance1CollectiveProposalCountStorageV1020 {
    get(): Promise<number>
}

export class Instance1CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'ff658fad55af8e9e38fe1bed80067dc6842aefcacc9835f3404ef79a9bfa9a7f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1020(): Instance1CollectiveProposalOfStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1022(): boolean {
        return this.getTypeHash() === 'cf2bde75ee5bf4aedef305aabd50a859b561d2ea72a3ad32f0253c133c791f40'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1022(): Instance1CollectiveProposalOfStorageV1022 {
        assert(this.isV1022)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1024(): boolean {
        return this.getTypeHash() === 'af9a5b7fd3313a46c1c6b41b8b6812f69ff0f2b1edd8d66693a82c0ca49db343'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1024(): Instance1CollectiveProposalOfStorageV1024 {
        assert(this.isV1024)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1027(): boolean {
        return this.getTypeHash() === 'fcb038bcf495bae551346ead7a5d7cb7edff11f26babbbe2fcc9d0fbbfb0ee86'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1027(): Instance1CollectiveProposalOfStorageV1027 {
        assert(this.isV1027)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1029(): boolean {
        return this.getTypeHash() === '1fa524953ff02a11fb7b9dc520b34c836bf4a94b731f96f02d8442061891be9a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1029(): Instance1CollectiveProposalOfStorageV1029 {
        assert(this.isV1029)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1030(): boolean {
        return this.getTypeHash() === '722c944e5d464430da96eb7afb30cb22dcf97958e77a989b11b76e0a08bc91ae'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1030(): Instance1CollectiveProposalOfStorageV1030 {
        assert(this.isV1030)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1031(): boolean {
        return this.getTypeHash() === '04587b1736af13aca0b303f067e8d8ca82708a7c35f7e540deb889b26b16e850'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1031(): Instance1CollectiveProposalOfStorageV1031 {
        assert(this.isV1031)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1032(): boolean {
        return this.getTypeHash() === '687ab865a15f03a5c5501e45563136c8c7e04087d3f2d252349b1e3afc2bb95b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1032(): Instance1CollectiveProposalOfStorageV1032 {
        assert(this.isV1032)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1038(): boolean {
        return this.getTypeHash() === '4b12bc407721d3d627ff8c350094c66df705befac88991c10ee1900190e41fcd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1038(): Instance1CollectiveProposalOfStorageV1038 {
        assert(this.isV1038)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1039(): boolean {
        return this.getTypeHash() === '280c2b5e09651099a2df56d3a3b1021971981e68df34b2cc71f846a279441cf7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1039(): Instance1CollectiveProposalOfStorageV1039 {
        assert(this.isV1039)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '7b716afbe6383efdfa96087dbe25666ef1749a83171459d7a417e308370bf5ce'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1040(): Instance1CollectiveProposalOfStorageV1040 {
        assert(this.isV1040)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1042(): boolean {
        return this.getTypeHash() === 'ba9ae3f886667e78e6929d4b9f36feb891aad7e94d36a75d3c2835143d849183'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1042(): Instance1CollectiveProposalOfStorageV1042 {
        assert(this.isV1042)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === 'd780ab190a15dcdf4e9424c86844bcd43951578af085195d51e82860b74ea017'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1050(): Instance1CollectiveProposalOfStorageV1050 {
        assert(this.isV1050)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1054(): boolean {
        return this.getTypeHash() === '4ee1bcb3e88f1695c390a015a7bb5456bbed70aea3e714981690f4d1e6647d20'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1054(): Instance1CollectiveProposalOfStorageV1054 {
        assert(this.isV1054)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1055(): boolean {
        return this.getTypeHash() === '9b1888d08bbc63ca77fc479899195e8abbc91196043f964ed6ae05f7a6b92ac2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1055(): Instance1CollectiveProposalOfStorageV1055 {
        assert(this.isV1055)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === '51d22c65a4493fbee384e3c6b5480902226dcb7f07fdae2e09b1ed994581b8a2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1058(): Instance1CollectiveProposalOfStorageV1058 {
        assert(this.isV1058)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1062(): boolean {
        return this.getTypeHash() === '2bebfde2c19829d495b45d6c78ef1337d124232bf319c06661a736c67899c40b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1062(): Instance1CollectiveProposalOfStorageV1062 {
        assert(this.isV1062)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2005(): boolean {
        return this.getTypeHash() === 'b1d8bd7af8a0bdba85190975d77d06e416603175b1c190c6efc22966d2222b42'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2005(): Instance1CollectiveProposalOfStorageV2005 {
        assert(this.isV2005)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2007(): boolean {
        return this.getTypeHash() === '961aa31652f228fead4d9c95205bb44df6d3431225fc46ab1b2bb180613401d3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2007(): Instance1CollectiveProposalOfStorageV2007 {
        assert(this.isV2007)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2011(): boolean {
        return this.getTypeHash() === '611412d18d1c6341ce497288da6f8d52d113a683fd777fa5d7a6c0ac089326a1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2011(): Instance1CollectiveProposalOfStorageV2011 {
        assert(this.isV2011)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2013(): boolean {
        return this.getTypeHash() === '1095e28f34062b5a0a31d9abd5578a7aa39d989d65d6cd2c6987346f2cacface'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2013(): Instance1CollectiveProposalOfStorageV2013 {
        assert(this.isV2013)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2015(): boolean {
        return this.getTypeHash() === '633a2c0a40bf70aa7d1a84d140419484144593cd4c1fbd16efca4f71428abd5c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2015(): Instance1CollectiveProposalOfStorageV2015 {
        assert(this.isV2015)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2022(): boolean {
        return this.getTypeHash() === 'ba39e6f89dc7984a5de5986ba21ea9c7874a17928d35ee22e9f19a6a32b06ed7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2022(): Instance1CollectiveProposalOfStorageV2022 {
        assert(this.isV2022)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2023(): boolean {
        return this.getTypeHash() === '0eff9f067f650895cebad9eb8f6d2e0b87378eb99f6cfcc9188519b6809e81c7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2023(): Instance1CollectiveProposalOfStorageV2023 {
        assert(this.isV2023)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2024(): boolean {
        return this.getTypeHash() === 'f47e7718dc7af5fdbceb48ad3c23c248921145bbaaefecdaf3c6e766071a0379'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2024(): Instance1CollectiveProposalOfStorageV2024 {
        assert(this.isV2024)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2025(): boolean {
        return this.getTypeHash() === '20b9a67d80ebdfbcdbeab6296df5fb3c08e4edd42eb821b0d267a4e6a5639fe3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2025(): Instance1CollectiveProposalOfStorageV2025 {
        assert(this.isV2025)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2026(): boolean {
        return this.getTypeHash() === 'b96abbff6a00bf4f4edb47eab52154f403f584ec4ab38b7e4be1af0d215bc2e2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2026(): Instance1CollectiveProposalOfStorageV2026 {
        assert(this.isV2026)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === '399c92d404fea7dc92e323f9384520a1dcaf371691e5db7723306cc5b1246d94'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2028(): Instance1CollectiveProposalOfStorageV2028 {
        assert(this.isV2028)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2029(): boolean {
        return this.getTypeHash() === '468d59d5b40e80c13c2d81c4774d12f145dcf6ba2363aef718241ac2abc28d12'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2029(): Instance1CollectiveProposalOfStorageV2029 {
        assert(this.isV2029)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2030(): boolean {
        return this.getTypeHash() === 'd82835c91c052dffa0a14eb20b7a8a134d538d2d60742b962f3fa7823c1657fa'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2030(): Instance1CollectiveProposalOfStorageV2030 {
        assert(this.isV2030)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '198809793338f28c0a822990194fdeaf2dec25e8848048ce7bb835b676396a37'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9010(): Instance1CollectiveProposalOfStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9030(): boolean {
        return this.getTypeHash() === '133daac7167756eaebbdcb23c93e2211158671e84e107af848071d3534ed99bd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9030(): Instance1CollectiveProposalOfStorageV9030 {
        assert(this.isV9030)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9040(): boolean {
        return this.getTypeHash() === '45640f8fa172b75c33ced53cedf23106c06b9a91427a71e706d9d136aed8d3a6'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9040(): Instance1CollectiveProposalOfStorageV9040 {
        assert(this.isV9040)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '6ffbddf00697f7a651ddd2bd8789384e7dca3980a60aa5a2499d016d43b1ac56'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9050(): Instance1CollectiveProposalOfStorageV9050 {
        assert(this.isV9050)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === '5c95cef639e096f92226c0b752c338b2195817a6e7f6d387b5199e8de3e02bab'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9080(): Instance1CollectiveProposalOfStorageV9080 {
        assert(this.isV9080)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9090(): boolean {
        return this.getTypeHash() === '3060f9c0543c77d2a8f13dd41a665b6e953b60cd682f2cd0a4b9e47ca76c255d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9090(): Instance1CollectiveProposalOfStorageV9090 {
        assert(this.isV9090)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9100(): boolean {
        return this.getTypeHash() === '4da47ef769f8cd0065a1642d93ed9e4664c7b938642677491109a7b2d9dffc5c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9100(): Instance1CollectiveProposalOfStorageV9100 {
        assert(this.isV9100)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1020 {
    get(key: Uint8Array): Promise<(v1020.Proposal | undefined)>
    getAll(): Promise<v1020.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1020.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1022 {
    get(key: Uint8Array): Promise<(v1022.Proposal | undefined)>
    getAll(): Promise<v1022.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1022.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1024 {
    get(key: Uint8Array): Promise<(v1024.Proposal | undefined)>
    getAll(): Promise<v1024.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1024.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1027 {
    get(key: Uint8Array): Promise<(v1027.Proposal | undefined)>
    getAll(): Promise<v1027.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1027.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1029 {
    get(key: Uint8Array): Promise<(v1029.Proposal | undefined)>
    getAll(): Promise<v1029.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1029.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1030 {
    get(key: Uint8Array): Promise<(v1030.Proposal | undefined)>
    getAll(): Promise<v1030.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1030.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1031 {
    get(key: Uint8Array): Promise<(v1031.Proposal | undefined)>
    getAll(): Promise<v1031.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1031.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1032 {
    get(key: Uint8Array): Promise<(v1032.Proposal | undefined)>
    getAll(): Promise<v1032.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1032.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1038 {
    get(key: Uint8Array): Promise<(v1038.Proposal | undefined)>
    getAll(): Promise<v1038.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1038.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1039 {
    get(key: Uint8Array): Promise<(v1039.Proposal | undefined)>
    getAll(): Promise<v1039.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1039.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1040 {
    get(key: Uint8Array): Promise<(v1040.Proposal | undefined)>
    getAll(): Promise<v1040.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1040.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1042 {
    get(key: Uint8Array): Promise<(v1042.Proposal | undefined)>
    getAll(): Promise<v1042.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1042.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1050 {
    get(key: Uint8Array): Promise<(v1050.Proposal | undefined)>
    getAll(): Promise<v1050.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1050.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1054 {
    get(key: Uint8Array): Promise<(v1054.Proposal | undefined)>
    getAll(): Promise<v1054.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1054.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1054.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1054.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1054.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1054.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1055 {
    get(key: Uint8Array): Promise<(v1055.Proposal | undefined)>
    getAll(): Promise<v1055.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1055.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1055.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1055.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1055.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1055.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1058 {
    get(key: Uint8Array): Promise<(v1058.Proposal | undefined)>
    getAll(): Promise<v1058.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1058.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1058.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1058.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1058.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1058.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1062 {
    get(key: Uint8Array): Promise<(v1062.Proposal | undefined)>
    getAll(): Promise<v1062.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1062.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1062.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1062.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1062.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1062.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2005 {
    get(key: Uint8Array): Promise<(v2005.Proposal | undefined)>
    getAll(): Promise<v2005.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2005.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2005.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2005.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2005.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2005.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2007 {
    get(key: Uint8Array): Promise<(v2007.Proposal | undefined)>
    getAll(): Promise<v2007.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2007.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2007.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2007.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2007.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2007.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2011 {
    get(key: Uint8Array): Promise<(v2011.Proposal | undefined)>
    getAll(): Promise<v2011.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2011.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2011.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2011.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2011.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2011.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2013 {
    get(key: Uint8Array): Promise<(v2013.Proposal | undefined)>
    getAll(): Promise<v2013.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2013.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2013.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2013.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2013.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2013.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2015 {
    get(key: Uint8Array): Promise<(v2015.Proposal | undefined)>
    getAll(): Promise<v2015.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2015.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2015.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2015.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2015.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2015.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2022 {
    get(key: Uint8Array): Promise<(v2022.Proposal | undefined)>
    getAll(): Promise<v2022.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2022.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2022.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2022.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2022.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2022.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2023 {
    get(key: Uint8Array): Promise<(v2023.Proposal | undefined)>
    getAll(): Promise<v2023.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2023.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2023.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2023.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2023.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2023.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2024 {
    get(key: Uint8Array): Promise<(v2024.Proposal | undefined)>
    getAll(): Promise<v2024.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2024.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2024.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2024.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2024.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2024.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2025 {
    get(key: Uint8Array): Promise<(v2025.Proposal | undefined)>
    getAll(): Promise<v2025.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2025.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2025.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2025.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2025.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2025.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2026 {
    get(key: Uint8Array): Promise<(v2026.Proposal | undefined)>
    getAll(): Promise<v2026.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2026.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2026.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2026.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2026.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2026.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2028 {
    get(key: Uint8Array): Promise<(v2028.Proposal | undefined)>
    getAll(): Promise<v2028.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2028.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2028.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2028.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2028.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2028.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2029 {
    get(key: Uint8Array): Promise<(v2029.Proposal | undefined)>
    getAll(): Promise<v2029.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2029.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2029.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2029.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2029.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2029.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2030 {
    get(key: Uint8Array): Promise<(v2030.Proposal | undefined)>
    getAll(): Promise<v2030.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2030.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2030.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2030.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2030.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2030.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9010 {
    get(key: Uint8Array): Promise<(v9010.Proposal | undefined)>
    getAll(): Promise<v9010.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9010.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9010.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9010.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9010.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9010.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9030 {
    get(key: Uint8Array): Promise<(v9030.Proposal | undefined)>
    getAll(): Promise<v9030.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9030.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9030.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9030.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9030.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9030.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9040 {
    get(key: Uint8Array): Promise<(v9040.Proposal | undefined)>
    getAll(): Promise<v9040.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9040.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9040.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9040.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9040.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9040.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9050 {
    get(key: Uint8Array): Promise<(v9050.Proposal | undefined)>
    getAll(): Promise<v9050.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9050.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9050.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9050.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9050.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9050.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9080 {
    get(key: Uint8Array): Promise<(v9080.Proposal | undefined)>
    getAll(): Promise<v9080.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9080.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9080.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9080.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9080.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9080.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9090 {
    get(key: Uint8Array): Promise<(v9090.Proposal | undefined)>
    getAll(): Promise<v9090.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9090.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9090.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9090.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9090.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9090.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9100 {
    get(key: Uint8Array): Promise<(v9100.Proposal | undefined)>
    getAll(): Promise<v9100.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9100.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9100.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9100.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9100.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9100.Proposal][]>
}

export class Instance1CollectiveProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV1020(): Instance1CollectiveProposalsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface Instance1CollectiveProposalsStorageV1020 {
    get(): Promise<Uint8Array[]>
}

export class Instance1CollectiveVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'a49f71820894c68e6a42e5b7677c024504071e0ede7cfda1198b1450e21c1f22'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV1020(): Instance1CollectiveVotingStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV1050(): Instance1CollectiveVotingStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface Instance1CollectiveVotingStorageV1020 {
    get(key: Uint8Array): Promise<(v1020.Votes | undefined)>
    getAll(): Promise<v1020.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v1020.Votes | undefined)[]>
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface Instance1CollectiveVotingStorageV1050 {
    get(key: Uint8Array): Promise<(v1050.Votes | undefined)>
    getAll(): Promise<v1050.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v1050.Votes | undefined)[]>
}

export class Instance1MembershipMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Membership'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get asV1020(): Instance1MembershipMembersStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface Instance1MembershipMembersStorageV1020 {
    get(): Promise<Uint8Array[]>
}

export class Instance1MembershipPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Membership'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The current prime member, if one exists.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The current prime member, if one exists.
     */
    get asV1050(): Instance1MembershipPrimeStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  The current prime member, if one exists.
 */
export interface Instance1MembershipPrimeStorageV1050 {
    get(): Promise<(Uint8Array | undefined)>
}

export class Instance2CollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV1020(): Instance2CollectiveMembersStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance2CollectiveMembersStorageV1020 {
    get(): Promise<Uint8Array[]>
}

export class Instance2CollectivePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The member who provides the default vote for any other members that do not vote before
     *  the timeout. If None, then no member has that privilege.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The member who provides the default vote for any other members that do not vote before
     *  the timeout. If None, then no member has that privilege.
     */
    get asV1050(): Instance2CollectivePrimeStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  The member who provides the default vote for any other members that do not vote before
 *  the timeout. If None, then no member has that privilege.
 */
export interface Instance2CollectivePrimeStorageV1050 {
    get(): Promise<(Uint8Array | undefined)>
}

export class Instance2CollectiveProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV1020(): Instance2CollectiveProposalCountStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance2CollectiveProposalCountStorageV1020 {
    get(): Promise<number>
}

export class Instance2CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'ff658fad55af8e9e38fe1bed80067dc6842aefcacc9835f3404ef79a9bfa9a7f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1020(): Instance2CollectiveProposalOfStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1022(): boolean {
        return this.getTypeHash() === 'cf2bde75ee5bf4aedef305aabd50a859b561d2ea72a3ad32f0253c133c791f40'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1022(): Instance2CollectiveProposalOfStorageV1022 {
        assert(this.isV1022)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1024(): boolean {
        return this.getTypeHash() === 'af9a5b7fd3313a46c1c6b41b8b6812f69ff0f2b1edd8d66693a82c0ca49db343'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1024(): Instance2CollectiveProposalOfStorageV1024 {
        assert(this.isV1024)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1027(): boolean {
        return this.getTypeHash() === 'fcb038bcf495bae551346ead7a5d7cb7edff11f26babbbe2fcc9d0fbbfb0ee86'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1027(): Instance2CollectiveProposalOfStorageV1027 {
        assert(this.isV1027)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1029(): boolean {
        return this.getTypeHash() === '1fa524953ff02a11fb7b9dc520b34c836bf4a94b731f96f02d8442061891be9a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1029(): Instance2CollectiveProposalOfStorageV1029 {
        assert(this.isV1029)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1030(): boolean {
        return this.getTypeHash() === '722c944e5d464430da96eb7afb30cb22dcf97958e77a989b11b76e0a08bc91ae'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1030(): Instance2CollectiveProposalOfStorageV1030 {
        assert(this.isV1030)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1031(): boolean {
        return this.getTypeHash() === '04587b1736af13aca0b303f067e8d8ca82708a7c35f7e540deb889b26b16e850'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1031(): Instance2CollectiveProposalOfStorageV1031 {
        assert(this.isV1031)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1032(): boolean {
        return this.getTypeHash() === '687ab865a15f03a5c5501e45563136c8c7e04087d3f2d252349b1e3afc2bb95b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1032(): Instance2CollectiveProposalOfStorageV1032 {
        assert(this.isV1032)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1038(): boolean {
        return this.getTypeHash() === '4b12bc407721d3d627ff8c350094c66df705befac88991c10ee1900190e41fcd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1038(): Instance2CollectiveProposalOfStorageV1038 {
        assert(this.isV1038)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1039(): boolean {
        return this.getTypeHash() === '280c2b5e09651099a2df56d3a3b1021971981e68df34b2cc71f846a279441cf7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1039(): Instance2CollectiveProposalOfStorageV1039 {
        assert(this.isV1039)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '7b716afbe6383efdfa96087dbe25666ef1749a83171459d7a417e308370bf5ce'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1040(): Instance2CollectiveProposalOfStorageV1040 {
        assert(this.isV1040)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1042(): boolean {
        return this.getTypeHash() === 'ba9ae3f886667e78e6929d4b9f36feb891aad7e94d36a75d3c2835143d849183'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1042(): Instance2CollectiveProposalOfStorageV1042 {
        assert(this.isV1042)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === 'd780ab190a15dcdf4e9424c86844bcd43951578af085195d51e82860b74ea017'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1050(): Instance2CollectiveProposalOfStorageV1050 {
        assert(this.isV1050)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1054(): boolean {
        return this.getTypeHash() === '4ee1bcb3e88f1695c390a015a7bb5456bbed70aea3e714981690f4d1e6647d20'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1054(): Instance2CollectiveProposalOfStorageV1054 {
        assert(this.isV1054)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1055(): boolean {
        return this.getTypeHash() === '9b1888d08bbc63ca77fc479899195e8abbc91196043f964ed6ae05f7a6b92ac2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1055(): Instance2CollectiveProposalOfStorageV1055 {
        assert(this.isV1055)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === '51d22c65a4493fbee384e3c6b5480902226dcb7f07fdae2e09b1ed994581b8a2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1058(): Instance2CollectiveProposalOfStorageV1058 {
        assert(this.isV1058)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1062(): boolean {
        return this.getTypeHash() === '2bebfde2c19829d495b45d6c78ef1337d124232bf319c06661a736c67899c40b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1062(): Instance2CollectiveProposalOfStorageV1062 {
        assert(this.isV1062)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2005(): boolean {
        return this.getTypeHash() === 'b1d8bd7af8a0bdba85190975d77d06e416603175b1c190c6efc22966d2222b42'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2005(): Instance2CollectiveProposalOfStorageV2005 {
        assert(this.isV2005)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2007(): boolean {
        return this.getTypeHash() === '961aa31652f228fead4d9c95205bb44df6d3431225fc46ab1b2bb180613401d3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2007(): Instance2CollectiveProposalOfStorageV2007 {
        assert(this.isV2007)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2011(): boolean {
        return this.getTypeHash() === '611412d18d1c6341ce497288da6f8d52d113a683fd777fa5d7a6c0ac089326a1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2011(): Instance2CollectiveProposalOfStorageV2011 {
        assert(this.isV2011)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2013(): boolean {
        return this.getTypeHash() === '1095e28f34062b5a0a31d9abd5578a7aa39d989d65d6cd2c6987346f2cacface'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2013(): Instance2CollectiveProposalOfStorageV2013 {
        assert(this.isV2013)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2015(): boolean {
        return this.getTypeHash() === '633a2c0a40bf70aa7d1a84d140419484144593cd4c1fbd16efca4f71428abd5c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2015(): Instance2CollectiveProposalOfStorageV2015 {
        assert(this.isV2015)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2022(): boolean {
        return this.getTypeHash() === 'ba39e6f89dc7984a5de5986ba21ea9c7874a17928d35ee22e9f19a6a32b06ed7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2022(): Instance2CollectiveProposalOfStorageV2022 {
        assert(this.isV2022)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2023(): boolean {
        return this.getTypeHash() === '0eff9f067f650895cebad9eb8f6d2e0b87378eb99f6cfcc9188519b6809e81c7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2023(): Instance2CollectiveProposalOfStorageV2023 {
        assert(this.isV2023)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2024(): boolean {
        return this.getTypeHash() === 'f47e7718dc7af5fdbceb48ad3c23c248921145bbaaefecdaf3c6e766071a0379'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2024(): Instance2CollectiveProposalOfStorageV2024 {
        assert(this.isV2024)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2025(): boolean {
        return this.getTypeHash() === '20b9a67d80ebdfbcdbeab6296df5fb3c08e4edd42eb821b0d267a4e6a5639fe3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2025(): Instance2CollectiveProposalOfStorageV2025 {
        assert(this.isV2025)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2026(): boolean {
        return this.getTypeHash() === 'b96abbff6a00bf4f4edb47eab52154f403f584ec4ab38b7e4be1af0d215bc2e2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2026(): Instance2CollectiveProposalOfStorageV2026 {
        assert(this.isV2026)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === '399c92d404fea7dc92e323f9384520a1dcaf371691e5db7723306cc5b1246d94'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2028(): Instance2CollectiveProposalOfStorageV2028 {
        assert(this.isV2028)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2029(): boolean {
        return this.getTypeHash() === '468d59d5b40e80c13c2d81c4774d12f145dcf6ba2363aef718241ac2abc28d12'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2029(): Instance2CollectiveProposalOfStorageV2029 {
        assert(this.isV2029)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2030(): boolean {
        return this.getTypeHash() === 'd82835c91c052dffa0a14eb20b7a8a134d538d2d60742b962f3fa7823c1657fa'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2030(): Instance2CollectiveProposalOfStorageV2030 {
        assert(this.isV2030)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '198809793338f28c0a822990194fdeaf2dec25e8848048ce7bb835b676396a37'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9010(): Instance2CollectiveProposalOfStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9030(): boolean {
        return this.getTypeHash() === '133daac7167756eaebbdcb23c93e2211158671e84e107af848071d3534ed99bd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9030(): Instance2CollectiveProposalOfStorageV9030 {
        assert(this.isV9030)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9040(): boolean {
        return this.getTypeHash() === '45640f8fa172b75c33ced53cedf23106c06b9a91427a71e706d9d136aed8d3a6'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9040(): Instance2CollectiveProposalOfStorageV9040 {
        assert(this.isV9040)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '6ffbddf00697f7a651ddd2bd8789384e7dca3980a60aa5a2499d016d43b1ac56'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9050(): Instance2CollectiveProposalOfStorageV9050 {
        assert(this.isV9050)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === '5c95cef639e096f92226c0b752c338b2195817a6e7f6d387b5199e8de3e02bab'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9080(): Instance2CollectiveProposalOfStorageV9080 {
        assert(this.isV9080)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9090(): boolean {
        return this.getTypeHash() === '3060f9c0543c77d2a8f13dd41a665b6e953b60cd682f2cd0a4b9e47ca76c255d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9090(): Instance2CollectiveProposalOfStorageV9090 {
        assert(this.isV9090)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9100(): boolean {
        return this.getTypeHash() === '4da47ef769f8cd0065a1642d93ed9e4664c7b938642677491109a7b2d9dffc5c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9100(): Instance2CollectiveProposalOfStorageV9100 {
        assert(this.isV9100)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1020 {
    get(key: Uint8Array): Promise<(v1020.Proposal | undefined)>
    getAll(): Promise<v1020.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1020.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1022 {
    get(key: Uint8Array): Promise<(v1022.Proposal | undefined)>
    getAll(): Promise<v1022.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1022.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1024 {
    get(key: Uint8Array): Promise<(v1024.Proposal | undefined)>
    getAll(): Promise<v1024.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1024.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1027 {
    get(key: Uint8Array): Promise<(v1027.Proposal | undefined)>
    getAll(): Promise<v1027.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1027.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1029 {
    get(key: Uint8Array): Promise<(v1029.Proposal | undefined)>
    getAll(): Promise<v1029.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1029.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1030 {
    get(key: Uint8Array): Promise<(v1030.Proposal | undefined)>
    getAll(): Promise<v1030.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1030.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1031 {
    get(key: Uint8Array): Promise<(v1031.Proposal | undefined)>
    getAll(): Promise<v1031.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1031.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1032 {
    get(key: Uint8Array): Promise<(v1032.Proposal | undefined)>
    getAll(): Promise<v1032.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1032.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1038 {
    get(key: Uint8Array): Promise<(v1038.Proposal | undefined)>
    getAll(): Promise<v1038.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1038.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1039 {
    get(key: Uint8Array): Promise<(v1039.Proposal | undefined)>
    getAll(): Promise<v1039.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1039.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1040 {
    get(key: Uint8Array): Promise<(v1040.Proposal | undefined)>
    getAll(): Promise<v1040.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1040.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1042 {
    get(key: Uint8Array): Promise<(v1042.Proposal | undefined)>
    getAll(): Promise<v1042.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1042.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1050 {
    get(key: Uint8Array): Promise<(v1050.Proposal | undefined)>
    getAll(): Promise<v1050.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1050.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1054 {
    get(key: Uint8Array): Promise<(v1054.Proposal | undefined)>
    getAll(): Promise<v1054.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1054.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1054.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1054.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1054.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1054.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1055 {
    get(key: Uint8Array): Promise<(v1055.Proposal | undefined)>
    getAll(): Promise<v1055.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1055.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1055.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1055.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1055.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1055.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1058 {
    get(key: Uint8Array): Promise<(v1058.Proposal | undefined)>
    getAll(): Promise<v1058.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1058.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1058.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1058.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1058.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1058.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1062 {
    get(key: Uint8Array): Promise<(v1062.Proposal | undefined)>
    getAll(): Promise<v1062.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1062.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1062.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1062.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1062.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1062.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2005 {
    get(key: Uint8Array): Promise<(v2005.Proposal | undefined)>
    getAll(): Promise<v2005.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2005.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2005.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2005.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2005.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2005.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2007 {
    get(key: Uint8Array): Promise<(v2007.Proposal | undefined)>
    getAll(): Promise<v2007.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2007.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2007.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2007.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2007.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2007.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2011 {
    get(key: Uint8Array): Promise<(v2011.Proposal | undefined)>
    getAll(): Promise<v2011.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2011.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2011.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2011.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2011.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2011.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2013 {
    get(key: Uint8Array): Promise<(v2013.Proposal | undefined)>
    getAll(): Promise<v2013.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2013.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2013.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2013.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2013.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2013.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2015 {
    get(key: Uint8Array): Promise<(v2015.Proposal | undefined)>
    getAll(): Promise<v2015.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2015.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2015.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2015.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2015.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2015.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2022 {
    get(key: Uint8Array): Promise<(v2022.Proposal | undefined)>
    getAll(): Promise<v2022.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2022.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2022.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2022.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2022.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2022.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2023 {
    get(key: Uint8Array): Promise<(v2023.Proposal | undefined)>
    getAll(): Promise<v2023.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2023.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2023.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2023.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2023.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2023.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2024 {
    get(key: Uint8Array): Promise<(v2024.Proposal | undefined)>
    getAll(): Promise<v2024.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2024.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2024.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2024.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2024.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2024.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2025 {
    get(key: Uint8Array): Promise<(v2025.Proposal | undefined)>
    getAll(): Promise<v2025.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2025.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2025.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2025.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2025.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2025.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2026 {
    get(key: Uint8Array): Promise<(v2026.Proposal | undefined)>
    getAll(): Promise<v2026.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2026.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2026.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2026.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2026.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2026.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2028 {
    get(key: Uint8Array): Promise<(v2028.Proposal | undefined)>
    getAll(): Promise<v2028.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2028.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2028.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2028.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2028.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2028.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2029 {
    get(key: Uint8Array): Promise<(v2029.Proposal | undefined)>
    getAll(): Promise<v2029.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2029.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2029.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2029.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2029.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2029.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2030 {
    get(key: Uint8Array): Promise<(v2030.Proposal | undefined)>
    getAll(): Promise<v2030.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2030.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2030.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2030.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2030.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2030.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9010 {
    get(key: Uint8Array): Promise<(v9010.Proposal | undefined)>
    getAll(): Promise<v9010.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9010.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9010.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9010.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9010.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9010.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9030 {
    get(key: Uint8Array): Promise<(v9030.Proposal | undefined)>
    getAll(): Promise<v9030.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9030.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9030.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9030.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9030.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9030.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9040 {
    get(key: Uint8Array): Promise<(v9040.Proposal | undefined)>
    getAll(): Promise<v9040.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9040.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9040.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9040.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9040.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9040.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9050 {
    get(key: Uint8Array): Promise<(v9050.Proposal | undefined)>
    getAll(): Promise<v9050.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9050.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9050.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9050.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9050.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9050.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9080 {
    get(key: Uint8Array): Promise<(v9080.Proposal | undefined)>
    getAll(): Promise<v9080.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9080.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9080.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9080.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9080.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9080.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9090 {
    get(key: Uint8Array): Promise<(v9090.Proposal | undefined)>
    getAll(): Promise<v9090.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9090.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9090.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9090.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9090.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9090.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9100 {
    get(key: Uint8Array): Promise<(v9100.Proposal | undefined)>
    getAll(): Promise<v9100.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9100.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9100.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9100.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9100.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9100.Proposal][]>
}

export class Instance2CollectiveProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV1020(): Instance2CollectiveProposalsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface Instance2CollectiveProposalsStorageV1020 {
    get(): Promise<Uint8Array[]>
}

export class Instance2CollectiveVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'a49f71820894c68e6a42e5b7677c024504071e0ede7cfda1198b1450e21c1f22'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV1020(): Instance2CollectiveVotingStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV1050(): Instance2CollectiveVotingStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface Instance2CollectiveVotingStorageV1020 {
    get(key: Uint8Array): Promise<(v1020.Votes | undefined)>
    getAll(): Promise<v1020.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v1020.Votes | undefined)[]>
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface Instance2CollectiveVotingStorageV1050 {
    get(key: Uint8Array): Promise<(v1050.Votes | undefined)>
    getAll(): Promise<v1050.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v1050.Votes | undefined)[]>
}

export class MessageQueueBookStateForStorage extends StorageBase {
    protected getPrefix() {
        return 'MessageQueue'
    }

    protected getName() {
        return 'BookStateFor'
    }

    /**
     *  The index of the first and last (non-empty) pages.
     */
    get isV9430(): boolean {
        return this.getTypeHash() === '93fe23159341636a8044518de6373ca2f3d3b1c3055b6d2ce00b9962e365158d'
    }

    /**
     *  The index of the first and last (non-empty) pages.
     */
    get asV9430(): MessageQueueBookStateForStorageV9430 {
        assert(this.isV9430)
        return this as any
    }
}

/**
 *  The index of the first and last (non-empty) pages.
 */
export interface MessageQueueBookStateForStorageV9430 {
    get(key: v9430.AggregateMessageOrigin): Promise<v9430.BookState>
    getAll(): Promise<v9430.BookState[]>
    getMany(keys: v9430.AggregateMessageOrigin[]): Promise<v9430.BookState[]>
    getKeys(): Promise<v9430.AggregateMessageOrigin[]>
    getKeys(key: v9430.AggregateMessageOrigin): Promise<v9430.AggregateMessageOrigin[]>
    getKeysPaged(pageSize: number): AsyncIterable<v9430.AggregateMessageOrigin[]>
    getKeysPaged(pageSize: number, key: v9430.AggregateMessageOrigin): AsyncIterable<v9430.AggregateMessageOrigin[]>
    getPairs(): Promise<[k: v9430.AggregateMessageOrigin, v: v9430.BookState][]>
    getPairs(key: v9430.AggregateMessageOrigin): Promise<[k: v9430.AggregateMessageOrigin, v: v9430.BookState][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v9430.AggregateMessageOrigin, v: v9430.BookState][]>
    getPairsPaged(pageSize: number, key: v9430.AggregateMessageOrigin): AsyncIterable<[k: v9430.AggregateMessageOrigin, v: v9430.BookState][]>
}

export class MessageQueuePagesStorage extends StorageBase {
    protected getPrefix() {
        return 'MessageQueue'
    }

    protected getName() {
        return 'Pages'
    }

    /**
     *  The map of page indices to pages.
     */
    get isV9430(): boolean {
        return this.getTypeHash() === '90748ccdff779a7f9bace80620324853a2532f6f04d7a1fa795ab57a3c0fc734'
    }

    /**
     *  The map of page indices to pages.
     */
    get asV9430(): MessageQueuePagesStorageV9430 {
        assert(this.isV9430)
        return this as any
    }
}

/**
 *  The map of page indices to pages.
 */
export interface MessageQueuePagesStorageV9430 {
    get(key1: v9430.AggregateMessageOrigin, key2: number): Promise<(v9430.Page | undefined)>
    getAll(): Promise<v9430.Page[]>
    getMany(keys: [v9430.AggregateMessageOrigin, number][]): Promise<(v9430.Page | undefined)[]>
    getKeys(): Promise<[v9430.AggregateMessageOrigin, number][]>
    getKeys(key1: v9430.AggregateMessageOrigin): Promise<[v9430.AggregateMessageOrigin, number][]>
    getKeys(key1: v9430.AggregateMessageOrigin, key2: number): Promise<[v9430.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v9430.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, key1: v9430.AggregateMessageOrigin): AsyncIterable<[v9430.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, key1: v9430.AggregateMessageOrigin, key2: number): AsyncIterable<[v9430.AggregateMessageOrigin, number][]>
    getPairs(): Promise<[k: [v9430.AggregateMessageOrigin, number], v: v9430.Page][]>
    getPairs(key1: v9430.AggregateMessageOrigin): Promise<[k: [v9430.AggregateMessageOrigin, number], v: v9430.Page][]>
    getPairs(key1: v9430.AggregateMessageOrigin, key2: number): Promise<[k: [v9430.AggregateMessageOrigin, number], v: v9430.Page][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v9430.AggregateMessageOrigin, number], v: v9430.Page][]>
    getPairsPaged(pageSize: number, key1: v9430.AggregateMessageOrigin): AsyncIterable<[k: [v9430.AggregateMessageOrigin, number], v: v9430.Page][]>
    getPairsPaged(pageSize: number, key1: v9430.AggregateMessageOrigin, key2: number): AsyncIterable<[k: [v9430.AggregateMessageOrigin, number], v: v9430.Page][]>
}

export class MessageQueueServiceHeadStorage extends StorageBase {
    protected getPrefix() {
        return 'MessageQueue'
    }

    protected getName() {
        return 'ServiceHead'
    }

    /**
     *  The origin at which we should begin servicing.
     */
    get isV9430(): boolean {
        return this.getTypeHash() === 'd502ee4c5986385a23f736bd2e5ae2da53f75570a11c375a5cced66c634c3760'
    }

    /**
     *  The origin at which we should begin servicing.
     */
    get asV9430(): MessageQueueServiceHeadStorageV9430 {
        assert(this.isV9430)
        return this as any
    }
}

/**
 *  The origin at which we should begin servicing.
 */
export interface MessageQueueServiceHeadStorageV9430 {
    get(): Promise<(v9430.AggregateMessageOrigin | undefined)>
}

export class MultisigCallsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Calls'
    }

    get isV2011(): boolean {
        return this.getTypeHash() === 'f2c625a45f7e4212d08a35de621ee69426ec65ab8200e29512887abb064620ab'
    }

    get asV2011(): MultisigCallsStorageV2011 {
        assert(this.isV2011)
        return this as any
    }
}

export interface MultisigCallsStorageV2011 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, bigint] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, bigint][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
}

export class MultisigMultisigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Multisigs'
    }

    /**
     *  The set of open multisig operations.
     */
    get isV2005(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asV2005(): MultisigMultisigsStorageV2005 {
        assert(this.isV2005)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigMultisigsStorageV2005 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v2005.Multisig | undefined)>
    getAll(): Promise<v2005.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v2005.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v2005.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v2005.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v2005.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v2005.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v2005.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v2005.Multisig][]>
}

export class NisQueueTotalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Nis'
    }

    protected getName() {
        return 'QueueTotals'
    }

    /**
     *  The totals of items and balances within each queue. Saves a lot of storage reads in the
     *  case of sparsely packed queues.
     * 
     *  The vector is indexed by duration in `Period`s, offset by one, so information on the queue
     *  whose duration is one `Period` would be storage `0`.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '67637cf79fb2042d6f9976100af5ca8921a580769459271f2902d29698078547'
    }

    /**
     *  The totals of items and balances within each queue. Saves a lot of storage reads in the
     *  case of sparsely packed queues.
     * 
     *  The vector is indexed by duration in `Period`s, offset by one, so information on the queue
     *  whose duration is one `Period` would be storage `0`.
     */
    get asV9340(): NisQueueTotalsStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The totals of items and balances within each queue. Saves a lot of storage reads in the
 *  case of sparsely packed queues.
 * 
 *  The vector is indexed by duration in `Period`s, offset by one, so information on the queue
 *  whose duration is one `Period` would be storage `0`.
 */
export interface NisQueueTotalsStorageV9340 {
    get(): Promise<[number, bigint][]>
}

export class NisQueuesStorage extends StorageBase {
    protected getPrefix() {
        return 'Nis'
    }

    protected getName() {
        return 'Queues'
    }

    /**
     *  The queues of bids. Indexed by duration (in `Period`s).
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '70c5b3f30abfea02e22acf4a0d93299c0781d870ea5f30525742e4cb4712fea6'
    }

    /**
     *  The queues of bids. Indexed by duration (in `Period`s).
     */
    get asV9340(): NisQueuesStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The queues of bids. Indexed by duration (in `Period`s).
 */
export interface NisQueuesStorageV9340 {
    get(key: number): Promise<v9340.Type_723[]>
    getAll(): Promise<v9340.Type_723[][]>
    getMany(keys: number[]): Promise<v9340.Type_723[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9340.Type_723[]][]>
    getPairs(key: number): Promise<[k: number, v: v9340.Type_723[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9340.Type_723[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9340.Type_723[]][]>
}

export class NisReceiptsStorage extends StorageBase {
    protected getPrefix() {
        return 'Nis'
    }

    protected getName() {
        return 'Receipts'
    }

    /**
     *  The currently outstanding receipts, indexed according to the order of creation.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '326376d1ded7e6fd9dddc5f0cbf119124b3a495f3b7cff066c2796d6b7e15e29'
    }

    /**
     *  The currently outstanding receipts, indexed according to the order of creation.
     */
    get asV9340(): NisReceiptsStorageV9340 {
        assert(this.isV9340)
        return this as any
    }

    /**
     *  The currently outstanding receipts, indexed according to the order of creation.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === '54c764bfc6c4e48b7db6ee9413c2d3b3d9a4a884c91c2d6c64a6e4c515191cba'
    }

    /**
     *  The currently outstanding receipts, indexed according to the order of creation.
     */
    get asV9381(): NisReceiptsStorageV9381 {
        assert(this.isV9381)
        return this as any
    }
}

/**
 *  The currently outstanding receipts, indexed according to the order of creation.
 */
export interface NisReceiptsStorageV9340 {
    get(key: number): Promise<(v9340.ReceiptRecord | undefined)>
    getAll(): Promise<v9340.ReceiptRecord[]>
    getMany(keys: number[]): Promise<(v9340.ReceiptRecord | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9340.ReceiptRecord][]>
    getPairs(key: number): Promise<[k: number, v: v9340.ReceiptRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9340.ReceiptRecord][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9340.ReceiptRecord][]>
}

/**
 *  The currently outstanding receipts, indexed according to the order of creation.
 */
export interface NisReceiptsStorageV9381 {
    get(key: number): Promise<(v9381.ReceiptRecord | undefined)>
    getAll(): Promise<v9381.ReceiptRecord[]>
    getMany(keys: number[]): Promise<(v9381.ReceiptRecord | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9381.ReceiptRecord][]>
    getPairs(key: number): Promise<[k: number, v: v9381.ReceiptRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9381.ReceiptRecord][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9381.ReceiptRecord][]>
}

export class NisSummaryStorage extends StorageBase {
    protected getPrefix() {
        return 'Nis'
    }

    protected getName() {
        return 'Summary'
    }

    /**
     *  Summary information over the general state.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '697a785ead73870fe8f445fc28fa186df4d6b8fafdc2846eee673e02ff29d16a'
    }

    /**
     *  Summary information over the general state.
     */
    get asV9340(): NisSummaryStorageV9340 {
        assert(this.isV9340)
        return this as any
    }

    /**
     *  Summary information over the general state.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === 'c1321e85a1aaa86bccc54373e848c40ee346f60ba8d18be04a0bfaf23d53c8e0'
    }

    /**
     *  Summary information over the general state.
     */
    get asV9381(): NisSummaryStorageV9381 {
        assert(this.isV9381)
        return this as any
    }
}

/**
 *  Summary information over the general state.
 */
export interface NisSummaryStorageV9340 {
    get(): Promise<v9340.SummaryRecord>
}

/**
 *  Summary information over the general state.
 */
export interface NisSummaryStorageV9381 {
    get(): Promise<v9381.SummaryRecord>
}

export class NisCounterpartBalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'NisCounterpartBalances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV9340(): NisCounterpartBalancesAccountStorageV9340 {
        assert(this.isV9340)
        return this as any
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '12d9e780c790f66e9c340b94cabd98da447e1087819d4acb4b1fe22bbb2783fb'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV9420(): NisCounterpartBalancesAccountStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface NisCounterpartBalancesAccountStorageV9340 {
    get(key: Uint8Array): Promise<v9340.AccountData>
    getAll(): Promise<v9340.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v9340.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9340.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9340.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9340.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9340.AccountData][]>
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface NisCounterpartBalancesAccountStorageV9420 {
    get(key: Uint8Array): Promise<v9420.AccountData>
    getAll(): Promise<v9420.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v9420.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.AccountData][]>
}

export class NisCounterpartBalancesFreezesStorage extends StorageBase {
    protected getPrefix() {
        return 'NisCounterpartBalances'
    }

    protected getName() {
        return 'Freezes'
    }

    /**
     *  Freeze locks on account balances.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Freeze locks on account balances.
     */
    get asV9420(): NisCounterpartBalancesFreezesStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Freeze locks on account balances.
 */
export interface NisCounterpartBalancesFreezesStorageV9420 {
    get(key: Uint8Array): Promise<v9420.Type_544[]>
    getAll(): Promise<v9420.Type_544[][]>
    getMany(keys: Uint8Array[]): Promise<v9420.Type_544[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.Type_544[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.Type_544[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.Type_544[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.Type_544[]][]>
}

export class NisCounterpartBalancesHoldsStorage extends StorageBase {
    protected getPrefix() {
        return 'NisCounterpartBalances'
    }

    protected getName() {
        return 'Holds'
    }

    /**
     *  Holds on account balances.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Holds on account balances.
     */
    get asV9420(): NisCounterpartBalancesHoldsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Holds on account balances.
 */
export interface NisCounterpartBalancesHoldsStorageV9420 {
    get(key: Uint8Array): Promise<v9420.Type_544[]>
    getAll(): Promise<v9420.Type_544[][]>
    getMany(keys: Uint8Array[]): Promise<v9420.Type_544[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.Type_544[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.Type_544[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.Type_544[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.Type_544[]][]>
}

export class NisCounterpartBalancesInactiveIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'NisCounterpartBalances'
    }

    protected getName() {
        return 'InactiveIssuance'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV9340(): NisCounterpartBalancesInactiveIssuanceStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface NisCounterpartBalancesInactiveIssuanceStorageV9340 {
    get(): Promise<bigint>
}

export class NisCounterpartBalancesLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'NisCounterpartBalances'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV9340(): NisCounterpartBalancesLocksStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface NisCounterpartBalancesLocksStorageV9340 {
    get(key: Uint8Array): Promise<v9340.BalanceLock[]>
    getAll(): Promise<v9340.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<v9340.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9340.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9340.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9340.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9340.BalanceLock[]][]>
}

export class NisCounterpartBalancesReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'NisCounterpartBalances'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV9340(): NisCounterpartBalancesReservesStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface NisCounterpartBalancesReservesStorageV9340 {
    get(key: Uint8Array): Promise<v9340.ReserveData[]>
    getAll(): Promise<v9340.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v9340.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9340.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9340.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9340.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9340.ReserveData[]][]>
}

export class NisCounterpartBalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'NisCounterpartBalances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV9340(): NisCounterpartBalancesTotalIssuanceStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface NisCounterpartBalancesTotalIssuanceStorageV9340 {
    get(): Promise<bigint>
}

export class NominationPoolsBondedPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'BondedPools'
    }

    /**
     *  Storage for bonded pools.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '67944bfd3ece8ec03cf8b826771965a12ebd527ce15d35cb270c1d84427557e8'
    }

    /**
     *  Storage for bonded pools.
     */
    get asV9220(): NominationPoolsBondedPoolsStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Storage for bonded pools.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === '71e65a38fe13c43d62e01d4a26cc90c142271e60e61773941927ebd77e3df23a'
    }

    /**
     *  Storage for bonded pools.
     */
    get asV9230(): NominationPoolsBondedPoolsStorageV9230 {
        assert(this.isV9230)
        return this as any
    }

    /**
     *  Storage for bonded pools.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '8ee9b811b3610458137a5c6015bd84146600ec4f9ae92d1d2b13d735618d24d0'
    }

    /**
     *  Storage for bonded pools.
     */
    get asV9420(): NominationPoolsBondedPoolsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Storage for bonded pools.
 */
export interface NominationPoolsBondedPoolsStorageV9220 {
    get(key: number): Promise<(v9220.BondedPoolInner | undefined)>
    getAll(): Promise<v9220.BondedPoolInner[]>
    getMany(keys: number[]): Promise<(v9220.BondedPoolInner | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9220.BondedPoolInner][]>
    getPairs(key: number): Promise<[k: number, v: v9220.BondedPoolInner][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9220.BondedPoolInner][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9220.BondedPoolInner][]>
}

/**
 *  Storage for bonded pools.
 */
export interface NominationPoolsBondedPoolsStorageV9230 {
    get(key: number): Promise<(v9230.BondedPoolInner | undefined)>
    getAll(): Promise<v9230.BondedPoolInner[]>
    getMany(keys: number[]): Promise<(v9230.BondedPoolInner | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9230.BondedPoolInner][]>
    getPairs(key: number): Promise<[k: number, v: v9230.BondedPoolInner][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9230.BondedPoolInner][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9230.BondedPoolInner][]>
}

/**
 *  Storage for bonded pools.
 */
export interface NominationPoolsBondedPoolsStorageV9420 {
    get(key: number): Promise<(v9420.BondedPoolInner | undefined)>
    getAll(): Promise<v9420.BondedPoolInner[]>
    getMany(keys: number[]): Promise<(v9420.BondedPoolInner | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9420.BondedPoolInner][]>
    getPairs(key: number): Promise<[k: number, v: v9420.BondedPoolInner][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9420.BondedPoolInner][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9420.BondedPoolInner][]>
}

export class NominationPoolsClaimPermissionsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'ClaimPermissions'
    }

    /**
     *  Map from a pool member account to their opted claim permission.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'cecafce59b7786f4d0cda8d68dbbdb9539b8f3a7a65637f5481233f5b064abdd'
    }

    /**
     *  Map from a pool member account to their opted claim permission.
     */
    get asV9420(): NominationPoolsClaimPermissionsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Map from a pool member account to their opted claim permission.
 */
export interface NominationPoolsClaimPermissionsStorageV9420 {
    get(key: Uint8Array): Promise<v9420.ClaimPermission>
    getAll(): Promise<v9420.ClaimPermission[]>
    getMany(keys: Uint8Array[]): Promise<v9420.ClaimPermission[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.ClaimPermission][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.ClaimPermission][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.ClaimPermission][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.ClaimPermission][]>
}

export class NominationPoolsCounterForBondedPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForBondedPools'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9220(): NominationPoolsCounterForBondedPoolsStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForBondedPoolsStorageV9220 {
    get(): Promise<number>
}

export class NominationPoolsCounterForMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForMetadata'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9220(): NominationPoolsCounterForMetadataStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForMetadataStorageV9220 {
    get(): Promise<number>
}

export class NominationPoolsCounterForPoolMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForPoolMembers'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9220(): NominationPoolsCounterForPoolMembersStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForPoolMembersStorageV9220 {
    get(): Promise<number>
}

export class NominationPoolsCounterForReversePoolIdLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForReversePoolIdLookup'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9220(): NominationPoolsCounterForReversePoolIdLookupStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForReversePoolIdLookupStorageV9220 {
    get(): Promise<number>
}

export class NominationPoolsCounterForRewardPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForRewardPools'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9220(): NominationPoolsCounterForRewardPoolsStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForRewardPoolsStorageV9220 {
    get(): Promise<number>
}

export class NominationPoolsCounterForSubPoolsStorageStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForSubPoolsStorage'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9220(): NominationPoolsCounterForSubPoolsStorageStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForSubPoolsStorageStorageV9220 {
    get(): Promise<number>
}

export class NominationPoolsGlobalMaxCommissionStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'GlobalMaxCommission'
    }

    /**
     *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
     *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
     *  `GlobalMaxCommission` is lower than some current pool commissions.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
     *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
     *  `GlobalMaxCommission` is lower than some current pool commissions.
     */
    get asV9420(): NominationPoolsGlobalMaxCommissionStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
 *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
 *  `GlobalMaxCommission` is lower than some current pool commissions.
 */
export interface NominationPoolsGlobalMaxCommissionStorageV9420 {
    get(): Promise<(number | undefined)>
}

export class NominationPoolsLastPoolIdStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'LastPoolId'
    }

    /**
     *  Ever increasing number of all pools created so far.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Ever increasing number of all pools created so far.
     */
    get asV9220(): NominationPoolsLastPoolIdStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 *  Ever increasing number of all pools created so far.
 */
export interface NominationPoolsLastPoolIdStorageV9220 {
    get(): Promise<number>
}

export class NominationPoolsMaxPoolMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MaxPoolMembers'
    }

    /**
     *  Maximum number of members that can exist in the system. If `None`, then the count
     *  members are not bound on a system wide basis.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Maximum number of members that can exist in the system. If `None`, then the count
     *  members are not bound on a system wide basis.
     */
    get asV9220(): NominationPoolsMaxPoolMembersStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 *  Maximum number of members that can exist in the system. If `None`, then the count
 *  members are not bound on a system wide basis.
 */
export interface NominationPoolsMaxPoolMembersStorageV9220 {
    get(): Promise<(number | undefined)>
}

export class NominationPoolsMaxPoolMembersPerPoolStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MaxPoolMembersPerPool'
    }

    /**
     *  Maximum number of members that may belong to pool. If `None`, then the count of
     *  members is not bound on a per pool basis.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Maximum number of members that may belong to pool. If `None`, then the count of
     *  members is not bound on a per pool basis.
     */
    get asV9220(): NominationPoolsMaxPoolMembersPerPoolStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 *  Maximum number of members that may belong to pool. If `None`, then the count of
 *  members is not bound on a per pool basis.
 */
export interface NominationPoolsMaxPoolMembersPerPoolStorageV9220 {
    get(): Promise<(number | undefined)>
}

export class NominationPoolsMaxPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MaxPools'
    }

    /**
     *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
     *  pools can exist.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
     *  pools can exist.
     */
    get asV9220(): NominationPoolsMaxPoolsStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
 *  pools can exist.
 */
export interface NominationPoolsMaxPoolsStorageV9220 {
    get(): Promise<(number | undefined)>
}

export class NominationPoolsMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'Metadata'
    }

    /**
     *  Metadata for the pool.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Metadata for the pool.
     */
    get asV9220(): NominationPoolsMetadataStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 *  Metadata for the pool.
 */
export interface NominationPoolsMetadataStorageV9220 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class NominationPoolsMinCreateBondStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MinCreateBond'
    }

    /**
     *  Minimum bond required to create a pool.
     * 
     *  This is the amount that the depositor must put as their initial stake in the pool, as an
     *  indication of "skin in the game".
     */
    get isV9220(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Minimum bond required to create a pool.
     * 
     *  This is the amount that the depositor must put as their initial stake in the pool, as an
     *  indication of "skin in the game".
     */
    get asV9220(): NominationPoolsMinCreateBondStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 *  Minimum bond required to create a pool.
 * 
 *  This is the amount that the depositor must put as their initial stake in the pool, as an
 *  indication of "skin in the game".
 */
export interface NominationPoolsMinCreateBondStorageV9220 {
    get(): Promise<bigint>
}

export class NominationPoolsMinJoinBondStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MinJoinBond'
    }

    /**
     *  Minimum amount to bond to join a pool.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Minimum amount to bond to join a pool.
     */
    get asV9220(): NominationPoolsMinJoinBondStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 *  Minimum amount to bond to join a pool.
 */
export interface NominationPoolsMinJoinBondStorageV9220 {
    get(): Promise<bigint>
}

export class NominationPoolsPoolMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'PoolMembers'
    }

    /**
     *  Active members.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '4f9161a3af2171d1defcb37cc13acaaf238fa6c0a68eaa85950cb94339fca91a'
    }

    /**
     *  Active members.
     */
    get asV9220(): NominationPoolsPoolMembersStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Active members.
     */
    get isV9271(): boolean {
        return this.getTypeHash() === '4b73cf52c7b7da8a11c75fe9dae69e02b83c4fe7a62b5a2e5b996edd8168c745'
    }

    /**
     *  Active members.
     */
    get asV9271(): NominationPoolsPoolMembersStorageV9271 {
        assert(this.isV9271)
        return this as any
    }
}

/**
 *  Active members.
 */
export interface NominationPoolsPoolMembersStorageV9220 {
    get(key: Uint8Array): Promise<(v9220.PoolMember | undefined)>
    getAll(): Promise<v9220.PoolMember[]>
    getMany(keys: Uint8Array[]): Promise<(v9220.PoolMember | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9220.PoolMember][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9220.PoolMember][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9220.PoolMember][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9220.PoolMember][]>
}

/**
 *  Active members.
 */
export interface NominationPoolsPoolMembersStorageV9271 {
    get(key: Uint8Array): Promise<(v9271.PoolMember | undefined)>
    getAll(): Promise<v9271.PoolMember[]>
    getMany(keys: Uint8Array[]): Promise<(v9271.PoolMember | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9271.PoolMember][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9271.PoolMember][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9271.PoolMember][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9271.PoolMember][]>
}

export class NominationPoolsReversePoolIdLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'ReversePoolIdLookup'
    }

    /**
     *  A reverse lookup from the pool's account id to its id.
     * 
     *  This is only used for slashing. In all other instances, the pool id is used, and the
     *  accounts are deterministically derived from it.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  A reverse lookup from the pool's account id to its id.
     * 
     *  This is only used for slashing. In all other instances, the pool id is used, and the
     *  accounts are deterministically derived from it.
     */
    get asV9220(): NominationPoolsReversePoolIdLookupStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 *  A reverse lookup from the pool's account id to its id.
 * 
 *  This is only used for slashing. In all other instances, the pool id is used, and the
 *  accounts are deterministically derived from it.
 */
export interface NominationPoolsReversePoolIdLookupStorageV9220 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class NominationPoolsRewardPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'RewardPools'
    }

    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
     *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '724d7a53f1197646889eb508f3532c4f63929c8fa49e258a36ab7a7c6e3cd6d7'
    }

    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
     *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    get asV9220(): NominationPoolsRewardPoolsStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
     *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    get isV9271(): boolean {
        return this.getTypeHash() === '375666cc5d1267485e45c4d315cd3ed856c1f8bede82ba7bd7bf6b27e31a4872'
    }

    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
     *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    get asV9271(): NominationPoolsRewardPoolsStorageV9271 {
        assert(this.isV9271)
        return this as any
    }

    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout is
     *  claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'baa87c11370b546112f8970d07f6ff23bef0938379d1f9d3229bd55c32959de5'
    }

    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout is
     *  claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    get asV9420(): NominationPoolsRewardPoolsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
 *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
 */
export interface NominationPoolsRewardPoolsStorageV9220 {
    get(key: number): Promise<(v9220.RewardPool | undefined)>
    getAll(): Promise<v9220.RewardPool[]>
    getMany(keys: number[]): Promise<(v9220.RewardPool | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9220.RewardPool][]>
    getPairs(key: number): Promise<[k: number, v: v9220.RewardPool][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9220.RewardPool][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9220.RewardPool][]>
}

/**
 *  Reward pools. This is where there rewards for each pool accumulate. When a members payout
 *  is claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
 */
export interface NominationPoolsRewardPoolsStorageV9271 {
    get(key: number): Promise<(v9271.RewardPool | undefined)>
    getAll(): Promise<v9271.RewardPool[]>
    getMany(keys: number[]): Promise<(v9271.RewardPool | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9271.RewardPool][]>
    getPairs(key: number): Promise<[k: number, v: v9271.RewardPool][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9271.RewardPool][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9271.RewardPool][]>
}

/**
 *  Reward pools. This is where there rewards for each pool accumulate. When a members payout is
 *  claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
 */
export interface NominationPoolsRewardPoolsStorageV9420 {
    get(key: number): Promise<(v9420.RewardPool | undefined)>
    getAll(): Promise<v9420.RewardPool[]>
    getMany(keys: number[]): Promise<(v9420.RewardPool | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9420.RewardPool][]>
    getPairs(key: number): Promise<[k: number, v: v9420.RewardPool][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9420.RewardPool][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9420.RewardPool][]>
}

export class NominationPoolsSubPoolsStorageStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'SubPoolsStorage'
    }

    /**
     *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
     *  hence the name sub-pools. Keyed by the bonded pools account.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === 'dc5bb02a122fb418c88fbe5c06d8e91818c8d4fffe761fe0299ea8709df81bb3'
    }

    /**
     *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
     *  hence the name sub-pools. Keyed by the bonded pools account.
     */
    get asV9220(): NominationPoolsSubPoolsStorageStorageV9220 {
        assert(this.isV9220)
        return this as any
    }
}

/**
 *  Groups of unbonding pools. Each group of unbonding pools belongs to a bonded pool,
 *  hence the name sub-pools. Keyed by the bonded pools account.
 */
export interface NominationPoolsSubPoolsStorageStorageV9220 {
    get(key: number): Promise<(v9220.SubPools | undefined)>
    getAll(): Promise<v9220.SubPools[]>
    getMany(keys: number[]): Promise<(v9220.SubPools | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9220.SubPools][]>
    getPairs(key: number): Promise<[k: number, v: v9220.SubPools][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9220.SubPools][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9220.SubPools][]>
}

export class OffencesConcurrentReportsIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'ConcurrentReportsIndex'
    }

    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'd5c59a6db2baab9f1dcc1a37b0131a737935fd2082fcf39b6abc3f1d6e3ae008'
    }

    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    get asV1020(): OffencesConcurrentReportsIndexStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  A vector of reports of the same kind that happened at the same time slot.
 */
export interface OffencesConcurrentReportsIndexStorageV1020 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<Uint8Array[][]>
}

export class OffencesDeferredOffencesStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'DeferredOffences'
    }

    /**
     *  Deferred reports that have been rejected by the offence handler and need to be submitted
     *  at a later time.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === '65c2bd7c83332ec30382595579905bc2abf22a9f87aa00c33bcc28ba95f3b845'
    }

    /**
     *  Deferred reports that have been rejected by the offence handler and need to be submitted
     *  at a later time.
     */
    get asV1058(): OffencesDeferredOffencesStorageV1058 {
        assert(this.isV1058)
        return this as any
    }
}

/**
 *  Deferred reports that have been rejected by the offence handler and need to be submitted
 *  at a later time.
 */
export interface OffencesDeferredOffencesStorageV1058 {
    get(): Promise<[v1058.OffenceDetails[], number[], number][]>
}

export class OffencesReportsStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'Reports'
    }

    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'e52641726adeb87007a96ce7684aad2f8233624d39e0ad7727f22f889bc9279f'
    }

    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    get asV1020(): OffencesReportsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The primary structure that holds all offence records keyed by report identifiers.
 */
export interface OffencesReportsStorageV1020 {
    get(key: Uint8Array): Promise<(v1020.OffenceDetails | undefined)>
    getAll(): Promise<v1020.OffenceDetails[]>
    getMany(keys: Uint8Array[]): Promise<(v1020.OffenceDetails | undefined)[]>
}

export class OffencesReportsByKindIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'ReportsByKindIndex'
    }

    /**
     *  Enumerates all reports of a kind along with the time they happened.
     * 
     *  All reports are sorted by the time of offence.
     * 
     *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
     *  different types are not supported at the moment so we are doing the manual serialization.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '0f535b9892aaca40228e6d3f57b63c241690838a686fa8be3e7f0992bfda0d19'
    }

    /**
     *  Enumerates all reports of a kind along with the time they happened.
     * 
     *  All reports are sorted by the time of offence.
     * 
     *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
     *  different types are not supported at the moment so we are doing the manual serialization.
     */
    get asV1020(): OffencesReportsByKindIndexStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Enumerates all reports of a kind along with the time they happened.
 * 
 *  All reports are sorted by the time of offence.
 * 
 *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
 *  different types are not supported at the moment so we are doing the manual serialization.
 */
export interface OffencesReportsByKindIndexStorageV1020 {
    get(key: Uint8Array): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<Uint8Array[]>
}

export class ParaInclusionAvailabilityBitfieldsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInclusion'
    }

    protected getName() {
        return 'AvailabilityBitfields'
    }

    /**
     *  The latest bitfield for each validator, referred to by their index in the validator set.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '427b03442d1c34025fbd811519bd8197494cfb35a7860997ce064b28b820bd8e'
    }

    /**
     *  The latest bitfield for each validator, referred to by their index in the validator set.
     */
    get asV9010(): ParaInclusionAvailabilityBitfieldsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  The latest bitfield for each validator, referred to by their index in the validator set.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'bf97f32483242f327da32063a836c1f797b9f0b05ea5417192cc00309d339c23'
    }

    /**
     *  The latest bitfield for each validator, referred to by their index in the validator set.
     */
    get asV9111(): ParaInclusionAvailabilityBitfieldsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The latest bitfield for each validator, referred to by their index in the validator set.
 */
export interface ParaInclusionAvailabilityBitfieldsStorageV9010 {
    get(key: number): Promise<(v9010.AvailabilityBitfieldRecord | undefined)>
    getAll(): Promise<v9010.AvailabilityBitfieldRecord[]>
    getMany(keys: number[]): Promise<(v9010.AvailabilityBitfieldRecord | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9010.AvailabilityBitfieldRecord][]>
    getPairs(key: number): Promise<[k: number, v: v9010.AvailabilityBitfieldRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9010.AvailabilityBitfieldRecord][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9010.AvailabilityBitfieldRecord][]>
}

/**
 *  The latest bitfield for each validator, referred to by their index in the validator set.
 */
export interface ParaInclusionAvailabilityBitfieldsStorageV9111 {
    get(key: number): Promise<(v9111.AvailabilityBitfieldRecord | undefined)>
    getAll(): Promise<v9111.AvailabilityBitfieldRecord[]>
    getMany(keys: number[]): Promise<(v9111.AvailabilityBitfieldRecord | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9111.AvailabilityBitfieldRecord][]>
    getPairs(key: number): Promise<[k: number, v: v9111.AvailabilityBitfieldRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9111.AvailabilityBitfieldRecord][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9111.AvailabilityBitfieldRecord][]>
}

export class ParaInclusionPendingAvailabilityStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInclusion'
    }

    protected getName() {
        return 'PendingAvailability'
    }

    /**
     *  Candidates pending availability by `ParaId`.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '7f95dd70d9be9204fc6db7ec2d088508d7e12bcb315715fc0d8fd82897858c1b'
    }

    /**
     *  Candidates pending availability by `ParaId`.
     */
    get asV9010(): ParaInclusionPendingAvailabilityStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  Candidates pending availability by `ParaId`.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'd1ce28ee05b8364d55d8ee99dab4ba7567356381f70d142c1dda5b6de4abf79b'
    }

    /**
     *  Candidates pending availability by `ParaId`.
     */
    get asV9111(): ParaInclusionPendingAvailabilityStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Candidates pending availability by `ParaId`.
 */
export interface ParaInclusionPendingAvailabilityStorageV9010 {
    get(key: number): Promise<(v9010.CandidatePendingAvailability | undefined)>
    getAll(): Promise<v9010.CandidatePendingAvailability[]>
    getMany(keys: number[]): Promise<(v9010.CandidatePendingAvailability | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9010.CandidatePendingAvailability][]>
    getPairs(key: number): Promise<[k: number, v: v9010.CandidatePendingAvailability][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9010.CandidatePendingAvailability][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9010.CandidatePendingAvailability][]>
}

/**
 *  Candidates pending availability by `ParaId`.
 */
export interface ParaInclusionPendingAvailabilityStorageV9111 {
    get(key: number): Promise<(v9111.CandidatePendingAvailability | undefined)>
    getAll(): Promise<v9111.CandidatePendingAvailability[]>
    getMany(keys: number[]): Promise<(v9111.CandidatePendingAvailability | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9111.CandidatePendingAvailability][]>
    getPairs(key: number): Promise<[k: number, v: v9111.CandidatePendingAvailability][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9111.CandidatePendingAvailability][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9111.CandidatePendingAvailability][]>
}

export class ParaInclusionPendingAvailabilityCommitmentsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInclusion'
    }

    protected getName() {
        return 'PendingAvailabilityCommitments'
    }

    /**
     *  The commitments of candidates pending availability, by ParaId.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '4e6f7845cb653fd4982455ab1aefc6bf2c68b8591ae7b58226dd2c5b0621f0cf'
    }

    /**
     *  The commitments of candidates pending availability, by ParaId.
     */
    get asV9010(): ParaInclusionPendingAvailabilityCommitmentsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The commitments of candidates pending availability, by ParaId.
 */
export interface ParaInclusionPendingAvailabilityCommitmentsStorageV9010 {
    get(key: number): Promise<(v9010.CandidateCommitments | undefined)>
    getAll(): Promise<v9010.CandidateCommitments[]>
    getMany(keys: number[]): Promise<(v9010.CandidateCommitments | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9010.CandidateCommitments][]>
    getPairs(key: number): Promise<[k: number, v: v9010.CandidateCommitments][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9010.CandidateCommitments][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9010.CandidateCommitments][]>
}

export class ParaInherentIncludedStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInherent'
    }

    protected getName() {
        return 'Included'
    }

    /**
     *  Whether the paras inherent was included within this block.
     * 
     *  The `Option<()>` is effectively a bool, but it never hits storage in the `None` variant
     *  due to the guarantees of FRAME's storage APIs.
     * 
     *  If this is `None` at the end of the block, we panic and render the block invalid.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '6ff2f39608fbf22c19e5525281db3aa2912456d1fc877d48f7b750ebbcdd9331'
    }

    /**
     *  Whether the paras inherent was included within this block.
     * 
     *  The `Option<()>` is effectively a bool, but it never hits storage in the `None` variant
     *  due to the guarantees of FRAME's storage APIs.
     * 
     *  If this is `None` at the end of the block, we panic and render the block invalid.
     */
    get asV9010(): ParaInherentIncludedStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  Whether the paras inherent was included within this block.
 * 
 *  The `Option<()>` is effectively a bool, but it never hits storage in the `None` variant
 *  due to the guarantees of FRAME's storage APIs.
 * 
 *  If this is `None` at the end of the block, we panic and render the block invalid.
 */
export interface ParaInherentIncludedStorageV9010 {
    get(): Promise<(null | undefined)>
}

export class ParaInherentOnChainVotesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInherent'
    }

    protected getName() {
        return 'OnChainVotes'
    }

    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    get isV9122(): boolean {
        return this.getTypeHash() === '90024dc5cb8ad039cc5c064f6dae6d9b18bbb24fd2d8b5dda8f60b533147590b'
    }

    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    get asV9122(): ParaInherentOnChainVotesStorageV9122 {
        assert(this.isV9122)
        return this as any
    }
}

/**
 *  Scraped on chain data for extracting resolved disputes as well as backing votes.
 */
export interface ParaInherentOnChainVotesStorageV9122 {
    get(): Promise<(v9122.V1ScrapedOnChainVotes | undefined)>
}

export class ParaSchedulerAvailabilityCoresStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'AvailabilityCores'
    }

    /**
     *  One entry for each availability core. Entries are `None` if the core is not currently occupied. Can be
     *  temporarily `Some` if scheduled but not occupied.
     *  The i'th parachain belongs to the i'th core, with the remaining cores all being
     *  parathread-multiplexers.
     * 
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '7f07eeae3b19707b6c2d7d6d316072b68175ffebbad0a2329e61a8413e936151'
    }

    /**
     *  One entry for each availability core. Entries are `None` if the core is not currently occupied. Can be
     *  temporarily `Some` if scheduled but not occupied.
     *  The i'th parachain belongs to the i'th core, with the remaining cores all being
     *  parathread-multiplexers.
     * 
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    get asV9010(): ParaSchedulerAvailabilityCoresStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  One entry for each availability core. Entries are `None` if the core is not currently occupied. Can be
 *  temporarily `Some` if scheduled but not occupied.
 *  The i'th parachain belongs to the i'th core, with the remaining cores all being
 *  parathread-multiplexers.
 * 
 *  Bounded by the maximum of either of these two values:
 *    * The number of parachains and parathread multiplexers
 *    * The number of validators divided by `configuration.max_validators_per_core`.
 */
export interface ParaSchedulerAvailabilityCoresStorageV9010 {
    get(): Promise<(v9010.CoreOccupied | undefined)[]>
}

export class ParaSchedulerParathreadClaimIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'ParathreadClaimIndex'
    }

    /**
     *  An index used to ensure that only one claim on a parathread exists in the queue or is
     *  currently being handled by an occupied core.
     * 
     *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  An index used to ensure that only one claim on a parathread exists in the queue or is
     *  currently being handled by an occupied core.
     * 
     *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
     */
    get asV9010(): ParaSchedulerParathreadClaimIndexStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  An index used to ensure that only one claim on a parathread exists in the queue or is
 *  currently being handled by an occupied core.
 * 
 *  Bounded by the number of parathread cores and scheduling lookahead. Reasonably, 10 * 50 = 500.
 */
export interface ParaSchedulerParathreadClaimIndexStorageV9010 {
    get(): Promise<number[]>
}

export class ParaSchedulerParathreadQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'ParathreadQueue'
    }

    /**
     *  A queue of upcoming claims and which core they should be mapped onto.
     * 
     *  The number of queued claims is bounded at the `scheduling_lookahead`
     *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'c75714ddf007711a84c1420eb03081789539e9248fd15ec5bdfd7ef07d871660'
    }

    /**
     *  A queue of upcoming claims and which core they should be mapped onto.
     * 
     *  The number of queued claims is bounded at the `scheduling_lookahead`
     *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
     */
    get asV9010(): ParaSchedulerParathreadQueueStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  A queue of upcoming claims and which core they should be mapped onto.
 * 
 *  The number of queued claims is bounded at the `scheduling_lookahead`
 *  multiplied by the number of parathread multiplexer cores. Reasonably, 10 * 50 = 500.
 */
export interface ParaSchedulerParathreadQueueStorageV9010 {
    get(): Promise<v9010.ParathreadClaimQueue>
}

export class ParaSchedulerScheduledStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'Scheduled'
    }

    /**
     *  Currently scheduled cores - free but up to be occupied.
     * 
     *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
     * 
     *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
     *  for the upcoming block.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'bb9f4e8d639f52c0607247c8a8ed31914d8007ed7da9f4fb88b33572693a7a3c'
    }

    /**
     *  Currently scheduled cores - free but up to be occupied.
     * 
     *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
     * 
     *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
     *  for the upcoming block.
     */
    get asV9010(): ParaSchedulerScheduledStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  Currently scheduled cores - free but up to be occupied.
     * 
     *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
     * 
     *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
     *  for the upcoming block.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'ba9a2a711ca71cdb5388a14f4c122bb3979325380609bfba73d66568069257a7'
    }

    /**
     *  Currently scheduled cores - free but up to be occupied.
     * 
     *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
     * 
     *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
     *  for the upcoming block.
     */
    get asV9111(): ParaSchedulerScheduledStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Currently scheduled cores - free but up to be occupied.
 * 
 *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
 * 
 *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
 *  for the upcoming block.
 */
export interface ParaSchedulerScheduledStorageV9010 {
    get(): Promise<v9010.CoreAssignment[]>
}

/**
 *  Currently scheduled cores - free but up to be occupied.
 * 
 *  Bounded by the number of cores: one for each parachain and parathread multiplexer.
 * 
 *  The value contained here will not be valid after the end of a block. Runtime APIs should be used to determine scheduled cores/
 *  for the upcoming block.
 */
export interface ParaSchedulerScheduledStorageV9111 {
    get(): Promise<v9111.CoreAssignment[]>
}

export class ParaSchedulerSessionStartBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'SessionStartBlock'
    }

    /**
     *  The block number where the session start occurred. Used to track how many group rotations have occurred.
     * 
     *  Note that in the context of parachains modules the session change is signalled during
     *  the block and enacted at the end of the block (at the finalization stage, to be exact).
     *  Thus for all intents and purposes the effect of the session change is observed at the
     *  block following the session change, block number of which we save in this storage value.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The block number where the session start occurred. Used to track how many group rotations have occurred.
     * 
     *  Note that in the context of parachains modules the session change is signalled during
     *  the block and enacted at the end of the block (at the finalization stage, to be exact).
     *  Thus for all intents and purposes the effect of the session change is observed at the
     *  block following the session change, block number of which we save in this storage value.
     */
    get asV9010(): ParaSchedulerSessionStartBlockStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The block number where the session start occurred. Used to track how many group rotations have occurred.
 * 
 *  Note that in the context of parachains modules the session change is signalled during
 *  the block and enacted at the end of the block (at the finalization stage, to be exact).
 *  Thus for all intents and purposes the effect of the session change is observed at the
 *  block following the session change, block number of which we save in this storage value.
 */
export interface ParaSchedulerSessionStartBlockStorageV9010 {
    get(): Promise<number>
}

export class ParaSchedulerValidatorGroupsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'ValidatorGroups'
    }

    /**
     *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
     *  broader set of Polkadot validators, but instead just the subset used for parachains during
     *  this session.
     * 
     *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
     *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '6812c4f54daaeff8842c0895b0d89bea407fdfe1c921e760ce2f412477ce233d'
    }

    /**
     *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
     *  broader set of Polkadot validators, but instead just the subset used for parachains during
     *  this session.
     * 
     *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
     *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
     */
    get asV9010(): ParaSchedulerValidatorGroupsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
 *  broader set of Polkadot validators, but instead just the subset used for parachains during
 *  this session.
 * 
 *  Bound: The number of cores is the sum of the numbers of parachains and parathread multiplexers.
 *  Reasonably, 100-1000. The dominant factor is the number of validators: safe upper bound at 10k.
 */
export interface ParaSchedulerValidatorGroupsStorageV9010 {
    get(): Promise<number[][]>
}

export class ParaSessionInfoAccountKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'AccountKeys'
    }

    /**
     *  The validator account keys of the validators actively participating in parachain consensus.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === '9ec34a723b63dfc1d78a2d356bbdb08e5be19ef85e221f93b46f03e24229ffd0'
    }

    /**
     *  The validator account keys of the validators actively participating in parachain consensus.
     */
    get asV9230(): ParaSessionInfoAccountKeysStorageV9230 {
        assert(this.isV9230)
        return this as any
    }
}

/**
 *  The validator account keys of the validators actively participating in parachain consensus.
 */
export interface ParaSessionInfoAccountKeysStorageV9230 {
    get(key: number): Promise<(Uint8Array[] | undefined)>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<(Uint8Array[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class ParaSessionInfoAssignmentKeysUnsafeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'AssignmentKeysUnsafe'
    }

    /**
     *  Assignment keys for the current session.
     *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
     *  When in doubt, use `Sessions` API instead.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Assignment keys for the current session.
     *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
     *  When in doubt, use `Sessions` API instead.
     */
    get asV9010(): ParaSessionInfoAssignmentKeysUnsafeStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  Assignment keys for the current session.
 *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
 *  When in doubt, use `Sessions` API instead.
 */
export interface ParaSessionInfoAssignmentKeysUnsafeStorageV9010 {
    get(): Promise<Uint8Array[]>
}

export class ParaSessionInfoEarliestStoredSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'EarliestStoredSession'
    }

    /**
     *  The earliest session for which previous session info is stored.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The earliest session for which previous session info is stored.
     */
    get asV9010(): ParaSessionInfoEarliestStoredSessionStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The earliest session for which previous session info is stored.
 */
export interface ParaSessionInfoEarliestStoredSessionStorageV9010 {
    get(): Promise<number>
}

export class ParaSessionInfoSessionExecutorParamsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'SessionExecutorParams'
    }

    /**
     *  Executor parameter set for a given session index
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'adef626da99b30a4e9862c45fef3ada49ed979bf86b1897fe7492b09dfa62a31'
    }

    /**
     *  Executor parameter set for a given session index
     */
    get asV9420(): ParaSessionInfoSessionExecutorParamsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Executor parameter set for a given session index
 */
export interface ParaSessionInfoSessionExecutorParamsStorageV9420 {
    get(key: number): Promise<(v9420.V4ExecutorParam[] | undefined)>
    getAll(): Promise<v9420.V4ExecutorParam[][]>
    getMany(keys: number[]): Promise<(v9420.V4ExecutorParam[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9420.V4ExecutorParam[]][]>
    getPairs(key: number): Promise<[k: number, v: v9420.V4ExecutorParam[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9420.V4ExecutorParam[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9420.V4ExecutorParam[]][]>
}

export class ParaSessionInfoSessionsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'Sessions'
    }

    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'f8bd79f544a6e737b6526766ddb7fcfe1339a9318972eacf96568d40a5792dce'
    }

    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    get asV9010(): ParaSessionInfoSessionsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === '2df170f53bbb8953f8c99d9d7899c64705f4a7bf2a4a355720ab5a1d2f0698f5'
    }

    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    get asV9160(): ParaSessionInfoSessionsStorageV9160 {
        assert(this.isV9160)
        return this as any
    }
}

/**
 *  Session information in a rolling window.
 *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
 *  Does not have any entries before the session index in the first session change notification.
 */
export interface ParaSessionInfoSessionsStorageV9010 {
    get(key: number): Promise<(v9010.SessionInfo | undefined)>
    getAll(): Promise<v9010.SessionInfo[]>
    getMany(keys: number[]): Promise<(v9010.SessionInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9010.SessionInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9010.SessionInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9010.SessionInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9010.SessionInfo][]>
}

/**
 *  Session information in a rolling window.
 *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
 *  Does not have any entries before the session index in the first session change notification.
 */
export interface ParaSessionInfoSessionsStorageV9160 {
    get(key: number): Promise<(v9160.V2SessionInfo | undefined)>
    getAll(): Promise<v9160.V2SessionInfo[]>
    getMany(keys: number[]): Promise<(v9160.V2SessionInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9160.V2SessionInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9160.V2SessionInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9160.V2SessionInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9160.V2SessionInfo][]>
}

export class ParachainsAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  All authorities' keys at the moment.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  All authorities' keys at the moment.
     */
    get asV1020(): ParachainsAuthoritiesStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  All authorities' keys at the moment.
 */
export interface ParachainsAuthoritiesStorageV1020 {
    get(): Promise<Uint8Array[]>
}

export class ParachainsCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'Code'
    }

    /**
     *  The parachains registered at present.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The parachains registered at present.
     */
    get asV1020(): ParachainsCodeStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The parachains registered at present.
 */
export interface ParachainsCodeStorageV1020 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
}

export class ParachainsDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'DidUpdate'
    }

    /**
     *  Some if the parachain heads get updated in this block, along with the parachain IDs that
     *  did update. Ordered in the same way as `registrar::Active` (i.e. by ParaId).
     * 
     *  None if not yet updated.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'e007566ad70b61f5b2395e443784d1a97319710e80f5f29c5f928c0257113213'
    }

    /**
     *  Some if the parachain heads get updated in this block, along with the parachain IDs that
     *  did update. Ordered in the same way as `registrar::Active` (i.e. by ParaId).
     * 
     *  None if not yet updated.
     */
    get asV1020(): ParachainsDidUpdateStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Some if the parachain heads get updated in this block, along with the parachain IDs that
 *  did update. Ordered in the same way as `registrar::Active` (i.e. by ParaId).
 * 
 *  None if not yet updated.
 */
export interface ParachainsDidUpdateStorageV1020 {
    get(): Promise<(number[] | undefined)>
}

export class ParachainsDownwardMessageQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'DownwardMessageQueue'
    }

    /**
     *  Messages waiting to be delivered from the Relay chain into the parachain.
     */
    get isV2013(): boolean {
        return this.getTypeHash() === '21b8e229d7956a6fefa7428dba911ac150aa62f678ebad35c3ce614eeae10050'
    }

    /**
     *  Messages waiting to be delivered from the Relay chain into the parachain.
     */
    get asV2013(): ParachainsDownwardMessageQueueStorageV2013 {
        assert(this.isV2013)
        return this as any
    }
}

/**
 *  Messages waiting to be delivered from the Relay chain into the parachain.
 */
export interface ParachainsDownwardMessageQueueStorageV2013 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class ParachainsFutureCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'FutureCode'
    }

    get isV1058(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    get asV1058(): ParachainsFutureCodeStorageV1058 {
        assert(this.isV1058)
        return this as any
    }
}

export interface ParachainsFutureCodeStorageV1058 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ParachainsFutureCodeUpgradesStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'FutureCodeUpgrades'
    }

    get isV1058(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    get asV1058(): ParachainsFutureCodeUpgradesStorageV1058 {
        assert(this.isV1058)
        return this as any
    }
}

export interface ParachainsFutureCodeUpgradesStorageV1058 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class ParachainsHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'Heads'
    }

    /**
     *  The heads of the parachains registered at present.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The heads of the parachains registered at present.
     */
    get asV1020(): ParachainsHeadsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The heads of the parachains registered at present.
 */
export interface ParachainsHeadsStorageV1020 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
}

export class ParachainsNeedsDispatchStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'NeedsDispatch'
    }

    /**
     *  The ordered list of ParaIds that have a `RelayDispatchQueue` entry.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  The ordered list of ParaIds that have a `RelayDispatchQueue` entry.
     */
    get asV1020(): ParachainsNeedsDispatchStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The ordered list of ParaIds that have a `RelayDispatchQueue` entry.
 */
export interface ParachainsNeedsDispatchStorageV1020 {
    get(): Promise<number[]>
}

export class ParachainsPastCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'PastCode'
    }

    /**
     *  Actual past code, indicated by the parachain and the block number at which it
     *  became outdated.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === '6e792685cfbc88b8c231cc71eb367f5f6afd7a0241afec572c20059701e16244'
    }

    /**
     *  Actual past code, indicated by the parachain and the block number at which it
     *  became outdated.
     */
    get asV1058(): ParachainsPastCodeStorageV1058 {
        assert(this.isV1058)
        return this as any
    }
}

/**
 *  Actual past code, indicated by the parachain and the block number at which it
 *  became outdated.
 */
export interface ParachainsPastCodeStorageV1058 {
    get(key: [number, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key: [number, number]): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key: [number, number]): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key: [number, number]): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [number, number]): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class ParachainsPastCodeMetaStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'PastCodeMeta'
    }

    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to assist with availability.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === 'a069a7aca8874185413a0d1fd88ae2c96bd7ecd883dd17c9e349867c0b602302'
    }

    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to assist with availability.
     */
    get asV1058(): ParachainsPastCodeMetaStorageV1058 {
        assert(this.isV1058)
        return this as any
    }
}

/**
 *  Past code of parachains. The parachains themselves may not be registered anymore,
 *  but we also keep their code on-chain for the same amount of time as outdated code
 *  to assist with availability.
 */
export interface ParachainsPastCodeMetaStorageV1058 {
    get(key: number): Promise<v1058.ParaPastCodeMeta>
    getAll(): Promise<v1058.ParaPastCodeMeta[]>
    getMany(keys: number[]): Promise<v1058.ParaPastCodeMeta[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1058.ParaPastCodeMeta][]>
    getPairs(key: number): Promise<[k: number, v: v1058.ParaPastCodeMeta][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1058.ParaPastCodeMeta][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1058.ParaPastCodeMeta][]>
}

export class ParachainsPastCodePruningStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'PastCodePruning'
    }

    /**
     *  Past code pruning, in order of priority.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  Past code pruning, in order of priority.
     */
    get asV1058(): ParachainsPastCodePruningStorageV1058 {
        assert(this.isV1058)
        return this as any
    }
}

/**
 *  Past code pruning, in order of priority.
 */
export interface ParachainsPastCodePruningStorageV1058 {
    get(): Promise<[number, number][]>
}

export class ParachainsRelayDispatchQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'RelayDispatchQueue'
    }

    /**
     *  Messages ready to be dispatched onto the relay chain. It is subject to
     *  `MAX_MESSAGE_COUNT` and `WATERMARK_MESSAGE_SIZE`.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '21b8e229d7956a6fefa7428dba911ac150aa62f678ebad35c3ce614eeae10050'
    }

    /**
     *  Messages ready to be dispatched onto the relay chain. It is subject to
     *  `MAX_MESSAGE_COUNT` and `WATERMARK_MESSAGE_SIZE`.
     */
    get asV1020(): ParachainsRelayDispatchQueueStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Messages ready to be dispatched onto the relay chain. It is subject to
 *  `MAX_MESSAGE_COUNT` and `WATERMARK_MESSAGE_SIZE`.
 */
export interface ParachainsRelayDispatchQueueStorageV1020 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
}

export class ParachainsRelayDispatchQueueSizeStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'RelayDispatchQueueSize'
    }

    /**
     *  Size of the dispatch queues. Separated from actual data in order to avoid costly
     *  decoding when checking receipt validity. First item in tuple is the count of messages
     * 	second if the total length (in bytes) of the message payloads.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '11d84eadab69be0e8dde14b70110d550deeab55868bd2bc91f3c1cf340a76ef8'
    }

    /**
     *  Size of the dispatch queues. Separated from actual data in order to avoid costly
     *  decoding when checking receipt validity. First item in tuple is the count of messages
     * 	second if the total length (in bytes) of the message payloads.
     */
    get asV1020(): ParachainsRelayDispatchQueueSizeStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Size of the dispatch queues. Separated from actual data in order to avoid costly
 *  decoding when checking receipt validity. First item in tuple is the count of messages
 * 	second if the total length (in bytes) of the message payloads.
 */
export interface ParachainsRelayDispatchQueueSizeStorageV1020 {
    get(key: number): Promise<[number, number]>
    getAll(): Promise<[number, number][]>
    getMany(keys: number[]): Promise<[number, number][]>
}

export class ParachainsUnroutedIngressStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'UnroutedIngress'
    }

    /**
     *  Unrouted ingress. Maps (BlockNumber, to_chain) pairs to [(from_chain, egress_root)].
     * 
     *  There may be an entry under (i, p) in this map for every i between the parachain's
     *  watermark and the current block.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'a856709520a75e18c5d4252951787728f023e8104fc8e95e2e9e243a38e95938'
    }

    /**
     *  Unrouted ingress. Maps (BlockNumber, to_chain) pairs to [(from_chain, egress_root)].
     * 
     *  There may be an entry under (i, p) in this map for every i between the parachain's
     *  watermark and the current block.
     */
    get asV1020(): ParachainsUnroutedIngressStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Unrouted ingress. Maps (BlockNumber, to_chain) pairs to [(from_chain, egress_root)].
 * 
 *  There may be an entry under (i, p) in this map for every i between the parachain's
 *  watermark and the current block.
 */
export interface ParachainsUnroutedIngressStorageV1020 {
    get(key: [number, number]): Promise<([number, Uint8Array][] | undefined)>
    getAll(): Promise<[number, Uint8Array][][]>
    getMany(keys: [number, number][]): Promise<([number, Uint8Array][] | undefined)[]>
}

export class ParachainsWatermarksStorage extends StorageBase {
    protected getPrefix() {
        return 'Parachains'
    }

    protected getName() {
        return 'Watermarks'
    }

    /**
     *  The watermark heights of the parachains registered at present.
     *  For every parachain, this is the block height from which all messages targeting
     *  that parachain have been processed. Can be `None` only if the parachain doesn't exist.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The watermark heights of the parachains registered at present.
     *  For every parachain, this is the block height from which all messages targeting
     *  that parachain have been processed. Can be `None` only if the parachain doesn't exist.
     */
    get asV1020(): ParachainsWatermarksStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The watermark heights of the parachains registered at present.
 *  For every parachain, this is the block height from which all messages targeting
 *  that parachain have been processed. Can be `None` only if the parachain doesn't exist.
 */
export interface ParachainsWatermarksStorageV1020 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
}

export class ParasActionsQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'ActionsQueue'
    }

    /**
     *  The actions to perform during the start of a specific session index.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
    }

    /**
     *  The actions to perform during the start of a specific session index.
     */
    get asV9010(): ParasActionsQueueStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The actions to perform during the start of a specific session index.
 */
export interface ParasActionsQueueStorageV9010 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class ParasCodeByHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'CodeByHash'
    }

    /**
     *  Validation code stored by its hash.
     * 
     *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
     *  [`PastCodeHash`].
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Validation code stored by its hash.
     * 
     *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
     *  [`PastCodeHash`].
     */
    get asV9010(): ParasCodeByHashStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  Validation code stored by its hash.
 * 
 *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
 *  [`PastCodeHash`].
 */
export interface ParasCodeByHashStorageV9010 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class ParasCodeByHashRefsStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'CodeByHashRefs'
    }

    /**
     *  The number of reference on the validation code in [`CodeByHash`] storage.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The number of reference on the validation code in [`CodeByHash`] storage.
     */
    get asV9010(): ParasCodeByHashRefsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The number of reference on the validation code in [`CodeByHash`] storage.
 */
export interface ParasCodeByHashRefsStorageV9010 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class ParasCurrentCodeHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'CurrentCodeHash'
    }

    /**
     *  The validation code hash of every live para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  The validation code hash of every live para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get asV9010(): ParasCurrentCodeHashStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The validation code hash of every live para.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface ParasCurrentCodeHashStorageV9010 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ParasFutureCodeHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'FutureCodeHash'
    }

    /**
     *  The actual future code hash of a para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  The actual future code hash of a para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get asV9010(): ParasFutureCodeHashStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The actual future code hash of a para.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface ParasFutureCodeHashStorageV9010 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ParasFutureCodeUpgradesStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'FutureCodeUpgrades'
    }

    /**
     *  The block number at which the planned code change is expected for a para.
     *  The change will be applied after the first parablock for this ID included which executes
     *  in the context of a relay chain block with a number >= `expected_at`.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The block number at which the planned code change is expected for a para.
     *  The change will be applied after the first parablock for this ID included which executes
     *  in the context of a relay chain block with a number >= `expected_at`.
     */
    get asV9010(): ParasFutureCodeUpgradesStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The block number at which the planned code change is expected for a para.
 *  The change will be applied after the first parablock for this ID included which executes
 *  in the context of a relay chain block with a number >= `expected_at`.
 */
export interface ParasFutureCodeUpgradesStorageV9010 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class ParasHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'Heads'
    }

    /**
     *  The head-data of every registered para.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The head-data of every registered para.
     */
    get asV9010(): ParasHeadsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The head-data of every registered para.
 */
export interface ParasHeadsStorageV9010 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ParasParaLifecyclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'ParaLifecycles'
    }

    /**
     *  The current lifecycle of a all known Para IDs.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '45a3eed50f0f2fba6b06f48a315aabecc27c96194135525440ebe9c30e9ad688'
    }

    /**
     *  The current lifecycle of a all known Para IDs.
     */
    get asV9010(): ParasParaLifecyclesStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  The current lifecycle of a all known Para IDs.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '473075bfac0a21c841bb0ec54a9d1b0a1103a28ca5c11fc19789ead6f56d4516'
    }

    /**
     *  The current lifecycle of a all known Para IDs.
     */
    get asV9111(): ParasParaLifecyclesStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The current lifecycle of a all known Para IDs.
 */
export interface ParasParaLifecyclesStorageV9010 {
    get(key: number): Promise<(v9010.ParaLifecycle | undefined)>
    getAll(): Promise<v9010.ParaLifecycle[]>
    getMany(keys: number[]): Promise<(v9010.ParaLifecycle | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9010.ParaLifecycle][]>
    getPairs(key: number): Promise<[k: number, v: v9010.ParaLifecycle][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9010.ParaLifecycle][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9010.ParaLifecycle][]>
}

/**
 *  The current lifecycle of a all known Para IDs.
 */
export interface ParasParaLifecyclesStorageV9111 {
    get(key: number): Promise<(v9111.ParaLifecycle | undefined)>
    getAll(): Promise<v9111.ParaLifecycle[]>
    getMany(keys: number[]): Promise<(v9111.ParaLifecycle | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9111.ParaLifecycle][]>
    getPairs(key: number): Promise<[k: number, v: v9111.ParaLifecycle][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9111.ParaLifecycle][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9111.ParaLifecycle][]>
}

export class ParasParachainsStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'Parachains'
    }

    /**
     *  All parachains. Ordered ascending by ParaId. Parathreads are not included.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  All parachains. Ordered ascending by ParaId. Parathreads are not included.
     */
    get asV9010(): ParasParachainsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  All parachains. Ordered ascending by ParaId. Parathreads are not included.
 */
export interface ParasParachainsStorageV9010 {
    get(): Promise<number[]>
}

export class ParasPastCodeHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PastCodeHash'
    }

    /**
     *  Actual past code hash, indicated by the para id as well as the block number at which it
     *  became outdated.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '0d2411ae362670c0960f353ffe86371ae2c0b12979565bcbd9e6dd986619632d'
    }

    /**
     *  Actual past code hash, indicated by the para id as well as the block number at which it
     *  became outdated.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get asV9010(): ParasPastCodeHashStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  Actual past code hash, indicated by the para id as well as the block number at which it
 *  became outdated.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface ParasPastCodeHashStorageV9010 {
    get(key: [number, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key: [number, number]): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key: [number, number]): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key: [number, number]): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [number, number]): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class ParasPastCodeMetaStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PastCodeMeta'
    }

    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to keep it available for secondary checkers.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'a069a7aca8874185413a0d1fd88ae2c96bd7ecd883dd17c9e349867c0b602302'
    }

    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to keep it available for secondary checkers.
     */
    get asV9010(): ParasPastCodeMetaStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  Past code of parachains. The parachains themselves may not be registered anymore,
 *  but we also keep their code on-chain for the same amount of time as outdated code
 *  to keep it available for secondary checkers.
 */
export interface ParasPastCodeMetaStorageV9010 {
    get(key: number): Promise<v9010.ParaPastCodeMeta>
    getAll(): Promise<v9010.ParaPastCodeMeta[]>
    getMany(keys: number[]): Promise<v9010.ParaPastCodeMeta[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9010.ParaPastCodeMeta][]>
    getPairs(key: number): Promise<[k: number, v: v9010.ParaPastCodeMeta][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9010.ParaPastCodeMeta][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9010.ParaPastCodeMeta][]>
}

export class ParasPastCodePruningStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PastCodePruning'
    }

    /**
     *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
     *  Note that this is the actual height of the included block, not the expected height at which the
     *  code upgrade would be applied, although they may be equal.
     *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
     *  from the time at which the parachain perceives a code upgrade as having occurred.
     *  Multiple entries for a single para are permitted. Ordered ascending by block number.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
     *  Note that this is the actual height of the included block, not the expected height at which the
     *  code upgrade would be applied, although they may be equal.
     *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
     *  from the time at which the parachain perceives a code upgrade as having occurred.
     *  Multiple entries for a single para are permitted. Ordered ascending by block number.
     */
    get asV9010(): ParasPastCodePruningStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
 *  Note that this is the actual height of the included block, not the expected height at which the
 *  code upgrade would be applied, although they may be equal.
 *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
 *  from the time at which the parachain perceives a code upgrade as having occurred.
 *  Multiple entries for a single para are permitted. Ordered ascending by block number.
 */
export interface ParasPastCodePruningStorageV9010 {
    get(): Promise<[number, number][]>
}

export class ParasPvfActiveVoteListStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PvfActiveVoteList'
    }

    /**
     *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
     */
    get asV9160(): ParasPvfActiveVoteListStorageV9160 {
        assert(this.isV9160)
        return this as any
    }
}

/**
 *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
 */
export interface ParasPvfActiveVoteListStorageV9160 {
    get(): Promise<Uint8Array[]>
}

export class ParasPvfActiveVoteMapStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PvfActiveVoteMap'
    }

    /**
     *  All currently active PVF pre-checking votes.
     * 
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === '929cea40d98e7c9edbcba116da5df6e71054833d758ad8f6150d78bb4140a230'
    }

    /**
     *  All currently active PVF pre-checking votes.
     * 
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    get asV9160(): ParasPvfActiveVoteMapStorageV9160 {
        assert(this.isV9160)
        return this as any
    }
}

/**
 *  All currently active PVF pre-checking votes.
 * 
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface ParasPvfActiveVoteMapStorageV9160 {
    get(key: Uint8Array): Promise<(v9160.PvfCheckActiveVoteState | undefined)>
    getAll(): Promise<v9160.PvfCheckActiveVoteState[]>
    getMany(keys: Uint8Array[]): Promise<(v9160.PvfCheckActiveVoteState | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9160.PvfCheckActiveVoteState][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9160.PvfCheckActiveVoteState][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9160.PvfCheckActiveVoteState][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9160.PvfCheckActiveVoteState][]>
}

export class ParasUpcomingParasGenesisStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpcomingParasGenesis'
    }

    /**
     *  Upcoming paras instantiation arguments.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '253a974d17240b520923113bbc6b12a391a5ad347b228902564103b1736e0094'
    }

    /**
     *  Upcoming paras instantiation arguments.
     */
    get asV9010(): ParasUpcomingParasGenesisStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  Upcoming paras instantiation arguments.
     * 
     *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
     *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'd289d3b26c8320e9e0c7aba2fd8c14649921cc8f60b7a8425448a47acb39146f'
    }

    /**
     *  Upcoming paras instantiation arguments.
     * 
     *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
     *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
     */
    get asV9340(): ParasUpcomingParasGenesisStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  Upcoming paras instantiation arguments.
 */
export interface ParasUpcomingParasGenesisStorageV9010 {
    get(key: number): Promise<(v9010.ParaGenesisArgs | undefined)>
    getAll(): Promise<v9010.ParaGenesisArgs[]>
    getMany(keys: number[]): Promise<(v9010.ParaGenesisArgs | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9010.ParaGenesisArgs][]>
    getPairs(key: number): Promise<[k: number, v: v9010.ParaGenesisArgs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9010.ParaGenesisArgs][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9010.ParaGenesisArgs][]>
}

/**
 *  Upcoming paras instantiation arguments.
 * 
 *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
 *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
 */
export interface ParasUpcomingParasGenesisStorageV9340 {
    get(key: number): Promise<(v9340.ParaGenesisArgs | undefined)>
    getAll(): Promise<v9340.ParaGenesisArgs[]>
    getMany(keys: number[]): Promise<(v9340.ParaGenesisArgs | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9340.ParaGenesisArgs][]>
    getPairs(key: number): Promise<[k: number, v: v9340.ParaGenesisArgs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9340.ParaGenesisArgs][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9340.ParaGenesisArgs][]>
}

export class ParasUpcomingUpgradesStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpcomingUpgrades'
    }

    /**
     *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
     *  upgrade and at which relay-chain block it is expected at.
     * 
     *  Ordered ascending by block number.
     */
    get isV9090(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
     *  upgrade and at which relay-chain block it is expected at.
     * 
     *  Ordered ascending by block number.
     */
    get asV9090(): ParasUpcomingUpgradesStorageV9090 {
        assert(this.isV9090)
        return this as any
    }
}

/**
 *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
 *  upgrade and at which relay-chain block it is expected at.
 * 
 *  Ordered ascending by block number.
 */
export interface ParasUpcomingUpgradesStorageV9090 {
    get(): Promise<[number, number][]>
}

export class ParasUpgradeCooldownsStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpgradeCooldowns'
    }

    /**
     *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
     * 
     *  Ordered ascending by block number.
     */
    get isV9090(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
     * 
     *  Ordered ascending by block number.
     */
    get asV9090(): ParasUpgradeCooldownsStorageV9090 {
        assert(this.isV9090)
        return this as any
    }
}

/**
 *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
 * 
 *  Ordered ascending by block number.
 */
export interface ParasUpgradeCooldownsStorageV9090 {
    get(): Promise<[number, number][]>
}

export class ParasUpgradeGoAheadSignalStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpgradeGoAheadSignal'
    }

    /**
     *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade procedure.
     * 
     *  This value is absent when there are no upgrades scheduled or during the time the relay chain
     *  performs the checks. It is set at the first relay-chain block when the corresponding parachain
     *  can switch its upgrade function. As soon as the parachain's block is included, the value
     *  gets reset to `None`.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    get isV9090(): boolean {
        return this.getTypeHash() === '786a03d0aa558686ca05fde11178abf8294fdf543e7653a81ffbb6a04bbe926d'
    }

    /**
     *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade procedure.
     * 
     *  This value is absent when there are no upgrades scheduled or during the time the relay chain
     *  performs the checks. It is set at the first relay-chain block when the corresponding parachain
     *  can switch its upgrade function. As soon as the parachain's block is included, the value
     *  gets reset to `None`.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    get asV9090(): ParasUpgradeGoAheadSignalStorageV9090 {
        assert(this.isV9090)
        return this as any
    }
}

/**
 *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade procedure.
 * 
 *  This value is absent when there are no upgrades scheduled or during the time the relay chain
 *  performs the checks. It is set at the first relay-chain block when the corresponding parachain
 *  can switch its upgrade function. As soon as the parachain's block is included, the value
 *  gets reset to `None`.
 * 
 *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
 *  the format will require migration of parachains.
 */
export interface ParasUpgradeGoAheadSignalStorageV9090 {
    get(key: number): Promise<(v9090.UpgradeGoAhead | undefined)>
    getAll(): Promise<v9090.UpgradeGoAhead[]>
    getMany(keys: number[]): Promise<(v9090.UpgradeGoAhead | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9090.UpgradeGoAhead][]>
    getPairs(key: number): Promise<[k: number, v: v9090.UpgradeGoAhead][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9090.UpgradeGoAhead][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9090.UpgradeGoAhead][]>
}

export class ParasUpgradeRestrictionSignalStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpgradeRestrictionSignal'
    }

    /**
     *  This is used by the relay-chain to communicate that there are restrictions for performing
     *  an upgrade for this parachain.
     * 
     *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
     *  potential use case is when we want to perform some maintenance (such as storage migration)
     *  we could restrict upgrades to make the process simpler.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    get isV9090(): boolean {
        return this.getTypeHash() === '62e7d5f232f72916126ae45cffcab9e9fdfc355aeb79076a51f4aebd84afeb61'
    }

    /**
     *  This is used by the relay-chain to communicate that there are restrictions for performing
     *  an upgrade for this parachain.
     * 
     *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
     *  potential use case is when we want to perform some maintenance (such as storage migration)
     *  we could restrict upgrades to make the process simpler.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    get asV9090(): ParasUpgradeRestrictionSignalStorageV9090 {
        assert(this.isV9090)
        return this as any
    }
}

/**
 *  This is used by the relay-chain to communicate that there are restrictions for performing
 *  an upgrade for this parachain.
 * 
 *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
 *  potential use case is when we want to perform some maintenance (such as storage migration)
 *  we could restrict upgrades to make the process simpler.
 * 
 *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
 *  the format will require migration of parachains.
 */
export interface ParasUpgradeRestrictionSignalStorageV9090 {
    get(key: number): Promise<(v9090.UpgradeRestriction | undefined)>
    getAll(): Promise<v9090.UpgradeRestriction[]>
    getMany(keys: number[]): Promise<(v9090.UpgradeRestriction | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9090.UpgradeRestriction][]>
    getPairs(key: number): Promise<[k: number, v: v9090.UpgradeRestriction][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9090.UpgradeRestriction][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9090.UpgradeRestriction][]>
}

export class ParasDisputesBackersOnDisputesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'BackersOnDisputes'
    }

    /**
     *  Backing votes stored for each dispute.
     *  This storage is used for slashing.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === '0927addfecff9f8363e42d134edf2ce1156c2efdf83e698127f2c98bf17267de'
    }

    /**
     *  Backing votes stored for each dispute.
     *  This storage is used for slashing.
     */
    get asV9381(): ParasDisputesBackersOnDisputesStorageV9381 {
        assert(this.isV9381)
        return this as any
    }
}

/**
 *  Backing votes stored for each dispute.
 *  This storage is used for slashing.
 */
export interface ParasDisputesBackersOnDisputesStorageV9381 {
    get(key1: number, key2: Uint8Array): Promise<(number[] | undefined)>
    getAll(): Promise<number[][]>
    getMany(keys: [number, Uint8Array][]): Promise<(number[] | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number[]][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number[]][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number[]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number[]][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number[]][]>
}

export class ParasDisputesDisputesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'Disputes'
    }

    /**
     *  All ongoing or concluded disputes for the last several sessions.
     */
    get isV9130(): boolean {
        return this.getTypeHash() === '33f09b62f3e474c60f6ef89b56ae30d73cc40bae8a2b340cfd6d7548cf01234e'
    }

    /**
     *  All ongoing or concluded disputes for the last several sessions.
     */
    get asV9130(): ParasDisputesDisputesStorageV9130 {
        assert(this.isV9130)
        return this as any
    }
}

/**
 *  All ongoing or concluded disputes for the last several sessions.
 */
export interface ParasDisputesDisputesStorageV9130 {
    get(key1: number, key2: Uint8Array): Promise<(v9130.V1DisputeState | undefined)>
    getAll(): Promise<v9130.V1DisputeState[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v9130.V1DisputeState | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v9130.V1DisputeState][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v9130.V1DisputeState][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v9130.V1DisputeState][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v9130.V1DisputeState][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v9130.V1DisputeState][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v9130.V1DisputeState][]>
}

export class ParasDisputesFrozenStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'Frozen'
    }

    /**
     *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
     *  the chain will not accept any new parachain blocks for backing or inclusion,
     *  and its value indicates the last valid block number in the chain.
     *  It can only be set back to `None` by governance intervention.
     */
    get isV9130(): boolean {
        return this.getTypeHash() === '19526a9e9cd1a1912441bd5e7765970e1b7352c8a5ea7e7769fa36f8d2329f24'
    }

    /**
     *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
     *  the chain will not accept any new parachain blocks for backing or inclusion,
     *  and its value indicates the last valid block number in the chain.
     *  It can only be set back to `None` by governance intervention.
     */
    get asV9130(): ParasDisputesFrozenStorageV9130 {
        assert(this.isV9130)
        return this as any
    }
}

/**
 *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
 *  the chain will not accept any new parachain blocks for backing or inclusion,
 *  and its value indicates the last valid block number in the chain.
 *  It can only be set back to `None` by governance intervention.
 */
export interface ParasDisputesFrozenStorageV9130 {
    get(): Promise<(number | undefined)>
}

export class ParasDisputesIncludedStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'Included'
    }

    /**
     *  All included blocks on the chain, as well as the block number in this chain that
     *  should be reverted back to if the candidate is disputed and determined to be invalid.
     */
    get isV9130(): boolean {
        return this.getTypeHash() === '6c6235f5b0f971e080667bebe750cb6adb3a9877df221e67b3dc7a4419cdc5c1'
    }

    /**
     *  All included blocks on the chain, as well as the block number in this chain that
     *  should be reverted back to if the candidate is disputed and determined to be invalid.
     */
    get asV9130(): ParasDisputesIncludedStorageV9130 {
        assert(this.isV9130)
        return this as any
    }
}

/**
 *  All included blocks on the chain, as well as the block number in this chain that
 *  should be reverted back to if the candidate is disputed and determined to be invalid.
 */
export interface ParasDisputesIncludedStorageV9130 {
    get(key1: number, key2: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

export class ParasDisputesLastPrunedSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'LastPrunedSession'
    }

    /**
     *  The last pruned session, if any. All data stored by this module
     *  references sessions.
     */
    get isV9130(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The last pruned session, if any. All data stored by this module
     *  references sessions.
     */
    get asV9130(): ParasDisputesLastPrunedSessionStorageV9130 {
        assert(this.isV9130)
        return this as any
    }
}

/**
 *  The last pruned session, if any. All data stored by this module
 *  references sessions.
 */
export interface ParasDisputesLastPrunedSessionStorageV9130 {
    get(): Promise<(number | undefined)>
}

export class ParasDisputesSpamSlotsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'SpamSlots'
    }

    /**
     *  Maps session indices to a vector indicating the number of potentially-spam disputes
     *  each validator is participating in. Potentially-spam disputes are remote disputes which have
     *  fewer than `byzantine_threshold + 1` validators.
     * 
     *  The i'th entry of the vector corresponds to the i'th validator in the session.
     */
    get isV9130(): boolean {
        return this.getTypeHash() === '33935a30bb4f42bcb0fad1e2afd25d0dcba6d422da5f77a7e62202296371179d'
    }

    /**
     *  Maps session indices to a vector indicating the number of potentially-spam disputes
     *  each validator is participating in. Potentially-spam disputes are remote disputes which have
     *  fewer than `byzantine_threshold + 1` validators.
     * 
     *  The i'th entry of the vector corresponds to the i'th validator in the session.
     */
    get asV9130(): ParasDisputesSpamSlotsStorageV9130 {
        assert(this.isV9130)
        return this as any
    }
}

/**
 *  Maps session indices to a vector indicating the number of potentially-spam disputes
 *  each validator is participating in. Potentially-spam disputes are remote disputes which have
 *  fewer than `byzantine_threshold + 1` validators.
 * 
 *  The i'th entry of the vector corresponds to the i'th validator in the session.
 */
export interface ParasDisputesSpamSlotsStorageV9130 {
    get(key: number): Promise<(number[] | undefined)>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<(number[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class ParasSharedActiveValidatorIndicesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasShared'
    }

    protected getName() {
        return 'ActiveValidatorIndices'
    }

    /**
     *  All the validators actively participating in parachain consensus.
     *  Indices are into the broader validator set.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  All the validators actively participating in parachain consensus.
     *  Indices are into the broader validator set.
     */
    get asV9010(): ParasSharedActiveValidatorIndicesStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  All the validators actively participating in parachain consensus.
 *  Indices are into the broader validator set.
 */
export interface ParasSharedActiveValidatorIndicesStorageV9010 {
    get(): Promise<number[]>
}

export class ParasSharedActiveValidatorKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasShared'
    }

    protected getName() {
        return 'ActiveValidatorKeys'
    }

    /**
     *  The parachain attestation keys of the validators actively participating in parachain consensus.
     *  This should be the same length as `ActiveValidatorIndices`.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The parachain attestation keys of the validators actively participating in parachain consensus.
     *  This should be the same length as `ActiveValidatorIndices`.
     */
    get asV9010(): ParasSharedActiveValidatorKeysStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The parachain attestation keys of the validators actively participating in parachain consensus.
 *  This should be the same length as `ActiveValidatorIndices`.
 */
export interface ParasSharedActiveValidatorKeysStorageV9010 {
    get(): Promise<Uint8Array[]>
}

export class ParasSharedCurrentSessionIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasShared'
    }

    protected getName() {
        return 'CurrentSessionIndex'
    }

    /**
     *  The current session index.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current session index.
     */
    get asV9010(): ParasSharedCurrentSessionIndexStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The current session index.
 */
export interface ParasSharedCurrentSessionIndexStorageV9010 {
    get(): Promise<number>
}

export class ParasSlashingUnappliedSlashesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasSlashing'
    }

    protected getName() {
        return 'UnappliedSlashes'
    }

    /**
     *  Validators pending dispute slashes.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '74c2dadfcd08c5fc0cd7baaf8297441d73fb8e8fb487d1da56cc9fd4b6202edc'
    }

    /**
     *  Validators pending dispute slashes.
     */
    get asV9420(): ParasSlashingUnappliedSlashesStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Validators pending dispute slashes.
 */
export interface ParasSlashingUnappliedSlashesStorageV9420 {
    get(key1: number, key2: Uint8Array): Promise<(v9420.PendingSlashes | undefined)>
    getAll(): Promise<v9420.PendingSlashes[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v9420.PendingSlashes | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v9420.PendingSlashes][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v9420.PendingSlashes][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v9420.PendingSlashes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v9420.PendingSlashes][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v9420.PendingSlashes][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v9420.PendingSlashes][]>
}

export class ParasSlashingValidatorSetCountsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasSlashing'
    }

    protected getName() {
        return 'ValidatorSetCounts'
    }

    /**
     *  `ValidatorSetCount` per session.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  `ValidatorSetCount` per session.
     */
    get asV9420(): ParasSlashingValidatorSetCountsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  `ValidatorSetCount` per session.
 */
export interface ParasSlashingValidatorSetCountsStorageV9420 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class PhragmenElectionCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'Candidates'
    }

    /**
     *  The present candidate list. Sorted based on account id. A current member can never enter
     *  this vector and is always implicitly assumed to be a candidate.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The present candidate list. Sorted based on account id. A current member can never enter
     *  this vector and is always implicitly assumed to be a candidate.
     */
    get asV1020(): PhragmenElectionCandidatesStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === 'adcae43ed1e902c328abdddddb49e0dff8ba91c01e22ef88c186fdf0463008bd'
    }

    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get asV2028(): PhragmenElectionCandidatesStorageV2028 {
        assert(this.isV2028)
        return this as any
    }
}

/**
 *  The present candidate list. Sorted based on account id. A current member can never enter
 *  this vector and is always implicitly assumed to be a candidate.
 */
export interface PhragmenElectionCandidatesStorageV1020 {
    get(): Promise<Uint8Array[]>
}

/**
 *  The present candidate list. A current member or runner-up can never enter this vector
 *  and is always implicitly assumed to be a candidate.
 * 
 *  Second element is the deposit.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface PhragmenElectionCandidatesStorageV2028 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class PhragmenElectionElectionRoundsStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'ElectionRounds'
    }

    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    get asV1020(): PhragmenElectionElectionRoundsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface PhragmenElectionElectionRoundsStorageV1020 {
    get(): Promise<number>
}

export class PhragmenElectionMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current elected membership. Sorted based on account id.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'adcae43ed1e902c328abdddddb49e0dff8ba91c01e22ef88c186fdf0463008bd'
    }

    /**
     *  The current elected membership. Sorted based on account id.
     */
    get asV1020(): PhragmenElectionMembersStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get asV2028(): PhragmenElectionMembersStorageV2028 {
        assert(this.isV2028)
        return this as any
    }
}

/**
 *  The current elected membership. Sorted based on account id.
 */
export interface PhragmenElectionMembersStorageV1020 {
    get(): Promise<[Uint8Array, bigint][]>
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface PhragmenElectionMembersStorageV2028 {
    get(): Promise<v2028.SeatHolder[]>
}

export class PhragmenElectionRunnersUpStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'RunnersUp'
    }

    /**
     *  The current runners_up. Sorted based on low to high merit (worse to best runner).
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'adcae43ed1e902c328abdddddb49e0dff8ba91c01e22ef88c186fdf0463008bd'
    }

    /**
     *  The current runners_up. Sorted based on low to high merit (worse to best runner).
     */
    get asV1020(): PhragmenElectionRunnersUpStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    get asV2028(): PhragmenElectionRunnersUpStorageV2028 {
        assert(this.isV2028)
        return this as any
    }
}

/**
 *  The current runners_up. Sorted based on low to high merit (worse to best runner).
 */
export interface PhragmenElectionRunnersUpStorageV1020 {
    get(): Promise<[Uint8Array, bigint][]>
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface PhragmenElectionRunnersUpStorageV2028 {
    get(): Promise<v2028.SeatHolder[]>
}

export class PhragmenElectionStakeOfStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'StakeOf'
    }

    /**
     *  Locked stake of a voter.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '0bac40afaf72ceea5a87ae2baaa5fe7f69915323f3293bdd970e7790a9d968c0'
    }

    /**
     *  Locked stake of a voter.
     */
    get asV1020(): PhragmenElectionStakeOfStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Locked stake of a voter.
 */
export interface PhragmenElectionStakeOfStorageV1020 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
}

export class PhragmenElectionVotesOfStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'VotesOf'
    }

    /**
     *  Votes of a particular voter, with the round index of the votes.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'ad7e5187ae060fec07b1929f558af1374198afab9d21e08b23028f5c02a1b279'
    }

    /**
     *  Votes of a particular voter, with the round index of the votes.
     */
    get asV1020(): PhragmenElectionVotesOfStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Votes of a particular voter, with the round index of the votes.
 */
export interface PhragmenElectionVotesOfStorageV1020 {
    get(key: Uint8Array): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: Uint8Array[]): Promise<Uint8Array[][]>
}

export class PhragmenElectionVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'PhragmenElection'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes and locked stake of a particular voter.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
    }

    /**
     *  Votes and locked stake of a particular voter.
     */
    get asV1058(): PhragmenElectionVotingStorageV1058 {
        assert(this.isV1058)
        return this as any
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === '402dfebd0f940ad46e7a8f40f06109618105f99668e323b7a2f66bb12e66e352'
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    get asV2028(): PhragmenElectionVotingStorageV2028 {
        assert(this.isV2028)
        return this as any
    }
}

/**
 *  Votes and locked stake of a particular voter.
 */
export interface PhragmenElectionVotingStorageV1058 {
    get(key: Uint8Array): Promise<[bigint, Uint8Array[]]>
    getAll(): Promise<[bigint, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, Uint8Array[]][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface PhragmenElectionVotingStorageV2028 {
    get(key: Uint8Array): Promise<v2028.Voter>
    getAll(): Promise<v2028.Voter[]>
    getMany(keys: Uint8Array[]): Promise<v2028.Voter[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2028.Voter][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2028.Voter][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2028.Voter][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2028.Voter][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV9160(): PreimagePreimageForStorageV9160 {
        assert(this.isV9160)
        return this as any
    }

    get isV9320(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV9320(): PreimagePreimageForStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV9160 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export interface PreimagePreimageForStorageV9320 {
    get(key: [Uint8Array, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
}

export class PreimageStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'StatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV9160(): PreimageStatusForStorageV9160 {
        assert(this.isV9160)
        return this as any
    }

    /**
     *  The request status of a given hash.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV9320(): PreimageStatusForStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV9160 {
    get(key: Uint8Array): Promise<(v9160.RequestStatus | undefined)>
    getAll(): Promise<v9160.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9160.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9160.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9160.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9160.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9160.RequestStatus][]>
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV9320 {
    get(key: Uint8Array): Promise<(v9320.RequestStatus | undefined)>
    getAll(): Promise<v9320.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9320.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9320.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9320.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9320.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9320.RequestStatus][]>
}

export class ProxyAnnouncementsStorage extends StorageBase {
    protected getPrefix() {
        return 'Proxy'
    }

    protected getName() {
        return 'Announcements'
    }

    /**
     *  The announcements made by the proxy (key).
     */
    get isV2023(): boolean {
        return this.getTypeHash() === 'b93d53c53a308d910b0304bf5593bd71084bcf177629ea67da68b9026f4b417c'
    }

    /**
     *  The announcements made by the proxy (key).
     */
    get asV2023(): ProxyAnnouncementsStorageV2023 {
        assert(this.isV2023)
        return this as any
    }
}

/**
 *  The announcements made by the proxy (key).
 */
export interface ProxyAnnouncementsStorageV2023 {
    get(key: Uint8Array): Promise<[v2023.ProxyAnnouncement[], bigint]>
    getAll(): Promise<[v2023.ProxyAnnouncement[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v2023.ProxyAnnouncement[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v2023.ProxyAnnouncement[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v2023.ProxyAnnouncement[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v2023.ProxyAnnouncement[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v2023.ProxyAnnouncement[], bigint]][]>
}

export class ProxyProxiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Proxy'
    }

    protected getName() {
        return 'Proxies'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV2005(): boolean {
        return this.getTypeHash() === 'ec72946b5e1319a89d58a3cfb9a9ad1c78ee98d1981ae699f7316bc6fb29092f'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV2005(): ProxyProxiesStorageV2005 {
        assert(this.isV2005)
        return this as any
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV2023(): boolean {
        return this.getTypeHash() === 'da8c78ecc0328cf7e600e99d445f8a44dbb00eda73841a05b5dc279b7c54a440'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV2023(): ProxyProxiesStorageV2023 {
        assert(this.isV2023)
        return this as any
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === 'acc3faf186613356bb89da7b77e3f00db745f2a35ca9789e7458cbdf6f57bc4d'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV9180(): ProxyProxiesStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '1416c9202bb70d2c394fef1cda445f3024d987e7b76b803b4d3c30e352c44103'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV9420(): ProxyProxiesStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV2005 {
    get(key: Uint8Array): Promise<[[Uint8Array, v2005.ProxyType][], bigint]>
    getAll(): Promise<[[Uint8Array, v2005.ProxyType][], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[[Uint8Array, v2005.ProxyType][], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [[Uint8Array, v2005.ProxyType][], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [[Uint8Array, v2005.ProxyType][], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [[Uint8Array, v2005.ProxyType][], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [[Uint8Array, v2005.ProxyType][], bigint]][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV2023 {
    get(key: Uint8Array): Promise<[v2023.ProxyDefinition[], bigint]>
    getAll(): Promise<[v2023.ProxyDefinition[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v2023.ProxyDefinition[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v2023.ProxyDefinition[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v2023.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v2023.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v2023.ProxyDefinition[], bigint]][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV9180 {
    get(key: Uint8Array): Promise<[v9180.ProxyDefinition[], bigint]>
    getAll(): Promise<[v9180.ProxyDefinition[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v9180.ProxyDefinition[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v9180.ProxyDefinition[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v9180.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v9180.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v9180.ProxyDefinition[], bigint]][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV9420 {
    get(key: Uint8Array): Promise<[v9420.ProxyDefinition[], bigint]>
    getAll(): Promise<[v9420.ProxyDefinition[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v9420.ProxyDefinition[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v9420.ProxyDefinition[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v9420.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v9420.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v9420.ProxyDefinition[], bigint]][]>
}

export class RandomnessCollectiveFlipRandomMaterialStorage extends StorageBase {
    protected getPrefix() {
        return 'RandomnessCollectiveFlip'
    }

    protected getName() {
        return 'RandomMaterial'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get asV1020(): RandomnessCollectiveFlipRandomMaterialStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomnessCollectiveFlipRandomMaterialStorageV1020 {
    get(): Promise<Uint8Array[]>
}

export class RecoveryActiveRecoveriesStorage extends StorageBase {
    protected getPrefix() {
        return 'Recovery'
    }

    protected getName() {
        return 'ActiveRecoveries'
    }

    /**
     *  Active recovery attempts.
     * 
     *  First account is the account to be recovered, and the second account
     *  is the user trying to recover the account.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === 'f5dad44e1c51a87a418fb5a1db781c2d814656f6b4adea220158b1d85e9e1622'
    }

    /**
     *  Active recovery attempts.
     * 
     *  First account is the account to be recovered, and the second account
     *  is the user trying to recover the account.
     */
    get asV1040(): RecoveryActiveRecoveriesStorageV1040 {
        assert(this.isV1040)
        return this as any
    }
}

/**
 *  Active recovery attempts.
 * 
 *  First account is the account to be recovered, and the second account
 *  is the user trying to recover the account.
 */
export interface RecoveryActiveRecoveriesStorageV1040 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v1040.ActiveRecovery | undefined)>
    getAll(): Promise<v1040.ActiveRecovery[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v1040.ActiveRecovery | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v1040.ActiveRecovery][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v1040.ActiveRecovery][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v1040.ActiveRecovery][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1040.ActiveRecovery][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1040.ActiveRecovery][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1040.ActiveRecovery][]>
}

export class RecoveryProxyStorage extends StorageBase {
    protected getPrefix() {
        return 'Recovery'
    }

    protected getName() {
        return 'Proxy'
    }

    /**
     *  The list of allowed proxy accounts.
     * 
     *  Map from the user who can access it to the recovered account.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
    }

    /**
     *  The list of allowed proxy accounts.
     * 
     *  Map from the user who can access it to the recovered account.
     */
    get asV1050(): RecoveryProxyStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  The list of allowed proxy accounts.
 * 
 *  Map from the user who can access it to the recovered account.
 */
export interface RecoveryProxyStorageV1050 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
}

export class RecoveryRecoverableStorage extends StorageBase {
    protected getPrefix() {
        return 'Recovery'
    }

    protected getName() {
        return 'Recoverable'
    }

    /**
     *  The set of recoverable accounts and their recovery configuration.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === 'f9493d29ddc03c2d5f186ec1168f1f86ff2385eb4dc7ca3278f0f82111d9e70b'
    }

    /**
     *  The set of recoverable accounts and their recovery configuration.
     */
    get asV1040(): RecoveryRecoverableStorageV1040 {
        assert(this.isV1040)
        return this as any
    }
}

/**
 *  The set of recoverable accounts and their recovery configuration.
 */
export interface RecoveryRecoverableStorageV1040 {
    get(key: Uint8Array): Promise<(v1040.RecoveryConfig | undefined)>
    getAll(): Promise<v1040.RecoveryConfig[]>
    getMany(keys: Uint8Array[]): Promise<(v1040.RecoveryConfig | undefined)[]>
}

export class RecoveryRecoveredStorage extends StorageBase {
    protected getPrefix() {
        return 'Recovery'
    }

    protected getName() {
        return 'Recovered'
    }

    /**
     *  The final list of recovered accounts.
     * 
     *  Map from the recovered account to the user who can access it.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
    }

    /**
     *  The final list of recovered accounts.
     * 
     *  Map from the recovered account to the user who can access it.
     */
    get asV1040(): RecoveryRecoveredStorageV1040 {
        assert(this.isV1040)
        return this as any
    }
}

/**
 *  The final list of recovered accounts.
 * 
 *  Map from the recovered account to the user who can access it.
 */
export interface RecoveryRecoveredStorageV1040 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
}

export class ReferendaDecidingCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'DecidingCount'
    }

    /**
     *  The number of referenda being decided currently.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '1b8a61a1a77f8c4a893b856d3455f1f9ced6f6e4bfe87bb8b1390b14318a4333'
    }

    /**
     *  The number of referenda being decided currently.
     */
    get asV9320(): ReferendaDecidingCountStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The number of referenda being decided currently.
 */
export interface ReferendaDecidingCountStorageV9320 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class ReferendaMetadataOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'MetadataOf'
    }

    /**
     *  The metadata is a general information concerning the referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  The metadata is a general information concerning the referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get asV9420(): ReferendaMetadataOfStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The metadata is a general information concerning the referendum.
 *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
 *  dump or IPFS hash of a JSON file.
 * 
 *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
 *  large preimages.
 */
export interface ReferendaMetadataOfStorageV9420 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ReferendaReferendumCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'ReferendumCount'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asV9320(): ReferendaReferendumCountStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface ReferendaReferendumCountStorageV9320 {
    get(): Promise<number>
}

export class ReferendaReferendumInfoForStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'ReferendumInfoFor'
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '33899ab47ab8fe6857d9da2d98b7b7168468bb2627a189bdae062d9c5ad90e3a'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9320(): ReferendaReferendumInfoForStorageV9320 {
        assert(this.isV9320)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9350(): boolean {
        return this.getTypeHash() === '4adf07f2f69a8f559991f6f0e0723c30859a0ed73aeac6c1fb83b91e3f29a69c'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9350(): ReferendaReferendumInfoForStorageV9350 {
        assert(this.isV9350)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '2e118aad7ee2503a94d98e08177512fcbcb174783c0ea17e18b13efb0a6a5dff'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9370(): ReferendaReferendumInfoForStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === '282a6192ba32678409143f18c94f866f00f2c4e36ad01a5737156fa49a4fd5bb'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9381(): ReferendaReferendumInfoForStorageV9381 {
        assert(this.isV9381)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'db57abeb0a45cf88aa6c6be9867481c5b3f1bf5ae1df62f2e92a729accf21c98'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9420(): ReferendaReferendumInfoForStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV9320 {
    get(key: number): Promise<(v9320.Type_620 | undefined)>
    getAll(): Promise<v9320.Type_620[]>
    getMany(keys: number[]): Promise<(v9320.Type_620 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9320.Type_620][]>
    getPairs(key: number): Promise<[k: number, v: v9320.Type_620][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9320.Type_620][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9320.Type_620][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV9350 {
    get(key: number): Promise<(v9350.Type_620 | undefined)>
    getAll(): Promise<v9350.Type_620[]>
    getMany(keys: number[]): Promise<(v9350.Type_620 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9350.Type_620][]>
    getPairs(key: number): Promise<[k: number, v: v9350.Type_620][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9350.Type_620][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9350.Type_620][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV9370 {
    get(key: number): Promise<(v9370.Type_621 | undefined)>
    getAll(): Promise<v9370.Type_621[]>
    getMany(keys: number[]): Promise<(v9370.Type_621 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9370.Type_621][]>
    getPairs(key: number): Promise<[k: number, v: v9370.Type_621][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9370.Type_621][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9370.Type_621][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV9381 {
    get(key: number): Promise<(v9381.Type_626 | undefined)>
    getAll(): Promise<v9381.Type_626[]>
    getMany(keys: number[]): Promise<(v9381.Type_626 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9381.Type_626][]>
    getPairs(key: number): Promise<[k: number, v: v9381.Type_626][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9381.Type_626][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9381.Type_626][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV9420 {
    get(key: number): Promise<(v9420.ReferendumInfo | undefined)>
    getAll(): Promise<v9420.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v9420.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9420.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9420.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9420.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9420.ReferendumInfo][]>
}

export class ReferendaTrackQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'TrackQueue'
    }

    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     * 
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === 'd59fac77bd4348bf0179a7e6c5ac239a8b8781c07a1524886ec03b3194de72e3'
    }

    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     * 
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    get asV9320(): ReferendaTrackQueueStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
 *  conviction-weighted approvals.
 * 
 *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
 */
export interface ReferendaTrackQueueStorageV9320 {
    get(key: number): Promise<[number, bigint][]>
    getAll(): Promise<[number, bigint][][]>
    getMany(keys: number[]): Promise<[number, bigint][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, bigint][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, bigint][]][]>
}

export class RegistrarActiveStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'Active'
    }

    /**
     *  Parathreads/chains scheduled for execution this block. If the collator ID is set, then
     *  a particular collator has already been chosen for the next block, and no other collator
     *  may provide the block. In this case we allow the possibility of the combination being
     *  retried in a later block, expressed by `Retriable`.
     * 
     *  Ordered by ParaId.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '600a0ba133041dba38285984327d7c4afc137118681877b4a1a71e1ff612c44c'
    }

    /**
     *  Parathreads/chains scheduled for execution this block. If the collator ID is set, then
     *  a particular collator has already been chosen for the next block, and no other collator
     *  may provide the block. In this case we allow the possibility of the combination being
     *  retried in a later block, expressed by `Retriable`.
     * 
     *  Ordered by ParaId.
     */
    get asV1020(): RegistrarActiveStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Parathreads/chains scheduled for execution this block. If the collator ID is set, then
 *  a particular collator has already been chosen for the next block, and no other collator
 *  may provide the block. In this case we allow the possibility of the combination being
 *  retried in a later block, expressed by `Retriable`.
 * 
 *  Ordered by ParaId.
 */
export interface RegistrarActiveStorageV1020 {
    get(): Promise<[number, ([Uint8Array, v1020.Retriable] | undefined)][]>
}

export class RegistrarDebtorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'Debtors'
    }

    /**
     *  Users who have paid a parathread's deposit
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Users who have paid a parathread's deposit
     */
    get asV1020(): RegistrarDebtorsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Users who have paid a parathread's deposit
 */
export interface RegistrarDebtorsStorageV1020 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
}

export class RegistrarNextFreeIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'NextFreeId'
    }

    /**
     *  The next unused ParaId value. Start this high in order to keep low numbers for
     *  system-level chains.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next unused ParaId value. Start this high in order to keep low numbers for
     *  system-level chains.
     */
    get asV1020(): RegistrarNextFreeIdStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The next unused ParaId value. Start this high in order to keep low numbers for
 *  system-level chains.
 */
export interface RegistrarNextFreeIdStorageV1020 {
    get(): Promise<number>
}

export class RegistrarNextFreeParaIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'NextFreeParaId'
    }

    /**
     *  The next free `ParaId`.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free `ParaId`.
     */
    get asV9010(): RegistrarNextFreeParaIdStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The next free `ParaId`.
 */
export interface RegistrarNextFreeParaIdStorageV9010 {
    get(): Promise<number>
}

export class RegistrarParachainsStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'Parachains'
    }

    get isV1020(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    get asV1020(): RegistrarParachainsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

export interface RegistrarParachainsStorageV1020 {
    get(): Promise<number[]>
}

export class RegistrarParasStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'Paras'
    }

    /**
     *  Map of all registered parathreads/chains.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'a66817b4476764416e1f466dedf67727ff0df383806cc68dc6be044679888b0c'
    }

    /**
     *  Map of all registered parathreads/chains.
     */
    get asV1020(): RegistrarParasStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Map of all registered parathreads/chains.
 */
export interface RegistrarParasStorageV1020 {
    get(key: number): Promise<(v1020.ParaInfo | undefined)>
    getAll(): Promise<v1020.ParaInfo[]>
    getMany(keys: number[]): Promise<(v1020.ParaInfo | undefined)[]>
}

export class RegistrarPendingSwapStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'PendingSwap'
    }

    /**
     *  Pending swap operations.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  Pending swap operations.
     */
    get asV1020(): RegistrarPendingSwapStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Pending swap operations.
 */
export interface RegistrarPendingSwapStorageV1020 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
}

export class RegistrarRetryQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'RetryQueue'
    }

    /**
     *  The current queue for parathreads that should be retried.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '2d000462de6745859448e67b1ebf7fd04f4fb61f49e280524752c34dd9b541f8'
    }

    /**
     *  The current queue for parathreads that should be retried.
     */
    get asV1020(): RegistrarRetryQueueStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The current queue for parathreads that should be retried.
 */
export interface RegistrarRetryQueueStorageV1020 {
    get(): Promise<[number, Uint8Array][][]>
}

export class RegistrarSelectedThreadsStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'SelectedThreads'
    }

    /**
     *  An array of the queue of set of threads scheduled for the coming blocks; ordered by
     *  ascending para ID. There can be no duplicates of para ID in each list item.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '2d000462de6745859448e67b1ebf7fd04f4fb61f49e280524752c34dd9b541f8'
    }

    /**
     *  An array of the queue of set of threads scheduled for the coming blocks; ordered by
     *  ascending para ID. There can be no duplicates of para ID in each list item.
     */
    get asV1020(): RegistrarSelectedThreadsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  An array of the queue of set of threads scheduled for the coming blocks; ordered by
 *  ascending para ID. There can be no duplicates of para ID in each list item.
 */
export interface RegistrarSelectedThreadsStorageV1020 {
    get(): Promise<[number, Uint8Array][][]>
}

export class RegistrarThreadCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'ThreadCount'
    }

    /**
     *  The number of threads to schedule per block.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of threads to schedule per block.
     */
    get asV1020(): RegistrarThreadCountStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The number of threads to schedule per block.
 */
export interface RegistrarThreadCountStorageV1020 {
    get(): Promise<number>
}

export class SchedulerAgendaStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Agenda'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === 'c448e17ce7bf88fba590d693f24e06b0da135aa9deae98d1cc4063bd235eed69'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV1058(): SchedulerAgendaStorageV1058 {
        assert(this.isV1058)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV1062(): boolean {
        return this.getTypeHash() === '36b38bc8d4e942763821c3299a103de3cc18c0b13bffe80dcb74c830478d5602'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV1062(): SchedulerAgendaStorageV1062 {
        assert(this.isV1062)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV2005(): boolean {
        return this.getTypeHash() === 'a9500e48e9a35073881dca64414aeb6d89a104b61c3087791b1339dbb22f1722'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV2005(): SchedulerAgendaStorageV2005 {
        assert(this.isV2005)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV2007(): boolean {
        return this.getTypeHash() === '5b035c08d9a6ec4c8841057c19036f8801cdc1ccb792e11636f13bde66680ef1'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV2007(): SchedulerAgendaStorageV2007 {
        assert(this.isV2007)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV2011(): boolean {
        return this.getTypeHash() === 'e061eb64501157e93c383ed1abda0f33ed222d23c3e69db76833960783cc9f6f'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV2011(): SchedulerAgendaStorageV2011 {
        assert(this.isV2011)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV2013(): boolean {
        return this.getTypeHash() === '190888f54ccc61d785ffaa28c234fd95b941296c7e90852ee82143f6c7e0fe54'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV2013(): SchedulerAgendaStorageV2013 {
        assert(this.isV2013)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV2015(): boolean {
        return this.getTypeHash() === 'e9b47a7798116791b71ab1f0ad35f94ce932e648d72301dc26c7939fe4584f61'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV2015(): SchedulerAgendaStorageV2015 {
        assert(this.isV2015)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV2022(): boolean {
        return this.getTypeHash() === 'c64ae7e9f704ee466a875a958efe9699b89246b1c69a215f23881de6ad18e648'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV2022(): SchedulerAgendaStorageV2022 {
        assert(this.isV2022)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV2023(): boolean {
        return this.getTypeHash() === 'f05ab83ea3631057ebe10b71f18e5a211424c6de178d11913582d51d6b82d986'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV2023(): SchedulerAgendaStorageV2023 {
        assert(this.isV2023)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV2024(): boolean {
        return this.getTypeHash() === 'a8ba083030e42ac1d0aa82d4cdaa70f463dbe72f5ac0cd3c0404176927107a7b'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV2024(): SchedulerAgendaStorageV2024 {
        assert(this.isV2024)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV2025(): boolean {
        return this.getTypeHash() === '690f80a20d6304db81f6edc86fb5b4aa2cc06ee98fa4e676c9e09ffa60dc7537'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV2025(): SchedulerAgendaStorageV2025 {
        assert(this.isV2025)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV2026(): boolean {
        return this.getTypeHash() === 'f9d7f17aaa955368456accca3813336c3f0b5f4d7ad4c4081e8e769a6f3e1e4e'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV2026(): SchedulerAgendaStorageV2026 {
        assert(this.isV2026)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === 'c33dc5d845c433b8f321e4919359e2bbc4c32dc86d27ae90d7405ff250cb5790'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV2028(): SchedulerAgendaStorageV2028 {
        assert(this.isV2028)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV2029(): boolean {
        return this.getTypeHash() === '2263c6fd375169f0272aeffa1ded548f6467de9cb1d93d8e17025cfa32962997'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV2029(): SchedulerAgendaStorageV2029 {
        assert(this.isV2029)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV2030(): boolean {
        return this.getTypeHash() === '355d0546bdfb981306ab6d3731ca0e09ff1cb8675ff69593d0420ed6f9911242'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV2030(): SchedulerAgendaStorageV2030 {
        assert(this.isV2030)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'ff16c34460ef0425c5f09e7c478af16b4624e8fa3208d0040c6f9d900f491fe3'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9010(): SchedulerAgendaStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9030(): boolean {
        return this.getTypeHash() === 'dc1418cf07cd9d82f13f557bac39881a79c6ab498a35e8513d013523f6a75d97'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9030(): SchedulerAgendaStorageV9030 {
        assert(this.isV9030)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9040(): boolean {
        return this.getTypeHash() === 'e4de374320c23030d692bd68429c27007f026dd7102fcf09d4f318558a4c7ea0'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9040(): SchedulerAgendaStorageV9040 {
        assert(this.isV9040)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '6f0a778ffb782aa1aac88002610b4a8587f66fcc096c435ec3ab88f66d56c61f'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9050(): SchedulerAgendaStorageV9050 {
        assert(this.isV9050)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === 'f9dc5d982b0715090fad66e58049d2129691b19743950271e137c60fa5eab7fa'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9080(): SchedulerAgendaStorageV9080 {
        assert(this.isV9080)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9090(): boolean {
        return this.getTypeHash() === 'c767cc61d145c4f5cf13812715ac405d2ddaba943a46fb139f1bb53ffa32ac64'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9090(): SchedulerAgendaStorageV9090 {
        assert(this.isV9090)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9100(): boolean {
        return this.getTypeHash() === '77ec09e3eb473ebef4a49c49baf35c6295cc238889343f2c4229d3fd992fb766'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9100(): SchedulerAgendaStorageV9100 {
        assert(this.isV9100)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '855fd592dc08504b9f77ab44721fb5530a96ec7e39ae454c50853bfccf22f78d'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9111(): SchedulerAgendaStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9122(): boolean {
        return this.getTypeHash() === '992154c282b8081c78969e259f1a5ccc7218af7ce571ada232b51000c6f5debe'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9122(): SchedulerAgendaStorageV9122 {
        assert(this.isV9122)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9130(): boolean {
        return this.getTypeHash() === '30d53378261a79f00a9ab72dd9d5c24a814885e9a00961d6842c5f2cb23718e2'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9130(): SchedulerAgendaStorageV9130 {
        assert(this.isV9130)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === '93a83d3e9e9713272cf5eba2ebe46a2e8210173b9208d8e039eb7be9abf8c6a1'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9160(): SchedulerAgendaStorageV9160 {
        assert(this.isV9160)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === 'e4a7319ab6ce8260d93b4ea04802e913400e5ef90837b5656dbc16bdfe6b618e'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9170(): SchedulerAgendaStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '18dd9bed1eddc89263af6e84b44142680d4997a91849f1f1616c728298b7e1b6'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9180(): SchedulerAgendaStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '38c51890e381af33bc0191759181b8fe95286950f49b691ac6df64e4cd28b5d7'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9190(): SchedulerAgendaStorageV9190 {
        assert(this.isV9190)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === 'f25747d736742c964b8c1ab67804da392e2fb11200d0b7665aeb63a2a2b53236'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9220(): SchedulerAgendaStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === '2e52a770fdbc44a1c735b5f17910b8ca3807dc08d834f56efd9e492d2beaee77'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9230(): SchedulerAgendaStorageV9230 {
        assert(this.isV9230)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9250(): boolean {
        return this.getTypeHash() === '763b74570e5d2dc645f17eb9c9a35f6ec8ef9863cac033f45ddcf807653fb3f8'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9250(): SchedulerAgendaStorageV9250 {
        assert(this.isV9250)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9271(): boolean {
        return this.getTypeHash() === 'a120835d6fa6abebd066538315e5944fdd3e04d6f3561558def30d4f11d4c05d'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9271(): SchedulerAgendaStorageV9271 {
        assert(this.isV9271)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === '808705ea298473713ebf6d39078298bcb67c781da92e01623d6d9711c03c49db'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9291(): SchedulerAgendaStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === 'a9432053e5bdf0321dfad50276e601ccd5a7a584930bea46e185a387a90f9d35'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9300(): SchedulerAgendaStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === 'e414bd1d8730f0592bdb1de94e4c0dca0dd5ce2e70476822250367f72e83111e'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9320(): SchedulerAgendaStorageV9320 {
        assert(this.isV9320)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '98f7d3f98d82a159726271a03ba48aa720675b7b8bb59f3ca416e2f61c975d2c'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9370(): SchedulerAgendaStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === '9951402003264d1de62aa87a03bdb69d749f4c6bc2b111b143272d2bd84dff9d'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9381(): SchedulerAgendaStorageV9381 {
        assert(this.isV9381)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '62b36ab8424d18fddc4d5b88113baf0a185fe3a6b392e841ea1a4a005a25ceb8'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV9420(): SchedulerAgendaStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV1058 {
    get(key: number): Promise<(v1058.Scheduled | undefined)[]>
    getAll(): Promise<(v1058.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v1058.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v1058.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v1058.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v1058.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v1058.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV1062 {
    get(key: number): Promise<(v1062.Scheduled | undefined)[]>
    getAll(): Promise<(v1062.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v1062.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v1062.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v1062.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v1062.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v1062.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV2005 {
    get(key: number): Promise<(v2005.Scheduled | undefined)[]>
    getAll(): Promise<(v2005.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v2005.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v2005.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v2005.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v2005.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v2005.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV2007 {
    get(key: number): Promise<(v2007.Scheduled | undefined)[]>
    getAll(): Promise<(v2007.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v2007.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v2007.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v2007.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v2007.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v2007.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV2011 {
    get(key: number): Promise<(v2011.Scheduled | undefined)[]>
    getAll(): Promise<(v2011.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v2011.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v2011.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v2011.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v2011.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v2011.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV2013 {
    get(key: number): Promise<(v2013.Scheduled | undefined)[]>
    getAll(): Promise<(v2013.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v2013.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v2013.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v2013.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v2013.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v2013.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV2015 {
    get(key: number): Promise<(v2015.Scheduled | undefined)[]>
    getAll(): Promise<(v2015.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v2015.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v2015.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v2015.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v2015.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v2015.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV2022 {
    get(key: number): Promise<(v2022.Scheduled | undefined)[]>
    getAll(): Promise<(v2022.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v2022.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v2022.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v2022.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v2022.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v2022.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV2023 {
    get(key: number): Promise<(v2023.Scheduled | undefined)[]>
    getAll(): Promise<(v2023.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v2023.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v2023.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v2023.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v2023.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v2023.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV2024 {
    get(key: number): Promise<(v2024.Scheduled | undefined)[]>
    getAll(): Promise<(v2024.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v2024.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v2024.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v2024.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v2024.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v2024.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV2025 {
    get(key: number): Promise<(v2025.Scheduled | undefined)[]>
    getAll(): Promise<(v2025.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v2025.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v2025.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v2025.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v2025.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v2025.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV2026 {
    get(key: number): Promise<(v2026.Scheduled | undefined)[]>
    getAll(): Promise<(v2026.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v2026.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v2026.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v2026.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v2026.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v2026.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV2028 {
    get(key: number): Promise<(v2028.Scheduled | undefined)[]>
    getAll(): Promise<(v2028.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v2028.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v2028.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v2028.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v2028.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v2028.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV2029 {
    get(key: number): Promise<(v2029.Scheduled | undefined)[]>
    getAll(): Promise<(v2029.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v2029.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v2029.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v2029.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v2029.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v2029.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV2030 {
    get(key: number): Promise<(v2030.Scheduled | undefined)[]>
    getAll(): Promise<(v2030.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v2030.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v2030.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v2030.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v2030.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v2030.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9010 {
    get(key: number): Promise<(v9010.Scheduled | undefined)[]>
    getAll(): Promise<(v9010.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9010.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9010.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9010.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9010.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9010.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9030 {
    get(key: number): Promise<(v9030.Scheduled | undefined)[]>
    getAll(): Promise<(v9030.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9030.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9030.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9030.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9030.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9030.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9040 {
    get(key: number): Promise<(v9040.Scheduled | undefined)[]>
    getAll(): Promise<(v9040.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9040.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9040.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9040.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9040.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9040.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9050 {
    get(key: number): Promise<(v9050.Scheduled | undefined)[]>
    getAll(): Promise<(v9050.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9050.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9050.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9050.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9050.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9050.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9080 {
    get(key: number): Promise<(v9080.Scheduled | undefined)[]>
    getAll(): Promise<(v9080.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9080.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9080.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9080.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9080.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9080.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9090 {
    get(key: number): Promise<(v9090.Scheduled | undefined)[]>
    getAll(): Promise<(v9090.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9090.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9090.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9090.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9090.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9090.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9100 {
    get(key: number): Promise<(v9100.Scheduled | undefined)[]>
    getAll(): Promise<(v9100.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9100.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9100.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9100.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9100.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9100.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9111 {
    get(key: number): Promise<(v9111.ScheduledV2 | undefined)[]>
    getAll(): Promise<(v9111.ScheduledV2 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9111.ScheduledV2 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9111.ScheduledV2 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9111.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9111.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9111.ScheduledV2 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9122 {
    get(key: number): Promise<(v9122.ScheduledV2 | undefined)[]>
    getAll(): Promise<(v9122.ScheduledV2 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9122.ScheduledV2 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9122.ScheduledV2 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9122.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9122.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9122.ScheduledV2 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9130 {
    get(key: number): Promise<(v9130.ScheduledV2 | undefined)[]>
    getAll(): Promise<(v9130.ScheduledV2 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9130.ScheduledV2 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9130.ScheduledV2 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9130.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9130.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9130.ScheduledV2 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9160 {
    get(key: number): Promise<(v9160.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9160.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9160.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9160.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9160.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9160.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9160.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9170 {
    get(key: number): Promise<(v9170.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9170.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9170.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9170.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9170.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9170.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9170.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9180 {
    get(key: number): Promise<(v9180.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9180.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9180.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9180.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9180.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9180.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9180.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9190 {
    get(key: number): Promise<(v9190.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9190.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9190.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9190.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9190.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9190.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9190.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9220 {
    get(key: number): Promise<(v9220.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9220.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9220.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9220.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9220.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9220.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9220.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9230 {
    get(key: number): Promise<(v9230.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9230.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9230.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9230.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9230.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9230.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9230.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9250 {
    get(key: number): Promise<(v9250.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9250.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9250.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9250.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9250.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9250.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9250.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9271 {
    get(key: number): Promise<(v9271.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9271.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9271.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9271.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9271.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9271.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9271.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9291 {
    get(key: number): Promise<(v9291.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9291.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9291.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9291.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9291.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9291.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9291.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9300 {
    get(key: number): Promise<(v9300.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v9300.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v9300.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9300.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9300.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9300.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9300.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9320 {
    get(key: number): Promise<(v9320.Scheduled | undefined)[]>
    getAll(): Promise<(v9320.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9320.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9320.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9320.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9320.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9320.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9370 {
    get(key: number): Promise<(v9370.Scheduled | undefined)[]>
    getAll(): Promise<(v9370.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9370.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9370.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9370.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9370.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9370.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9381 {
    get(key: number): Promise<(v9381.Scheduled | undefined)[]>
    getAll(): Promise<(v9381.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9381.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9381.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9381.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9381.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9381.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV9420 {
    get(key: number): Promise<(v9420.Scheduled | undefined)[]>
    getAll(): Promise<(v9420.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v9420.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v9420.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v9420.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v9420.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v9420.Scheduled | undefined)[]][]>
}

export class SchedulerIncompleteSinceStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'IncompleteSince'
    }

    get isV9320(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    get asV9320(): SchedulerIncompleteSinceStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

export interface SchedulerIncompleteSinceStorageV9320 {
    get(): Promise<(number | undefined)>
}

export class SchedulerLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Lookup'
    }

    /**
     *  Lookup from identity to the block number and index of the task.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === 'd134b5bb4dad116817692e25dce47c836fbbb31d353d5749d4fc370b62e7286b'
    }

    /**
     *  Lookup from identity to the block number and index of the task.
     */
    get asV1058(): SchedulerLookupStorageV1058 {
        assert(this.isV1058)
        return this as any
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get asV9320(): SchedulerLookupStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  Lookup from identity to the block number and index of the task.
 */
export interface SchedulerLookupStorageV1058 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

/**
 *  Lookup from a name to the block number and index of the task.
 * 
 *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 *  identities.
 */
export interface SchedulerLookupStorageV9320 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

export class SchedulerStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV2015(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV2015(): SchedulerStorageVersionStorageV2015 {
        assert(this.isV2015)
        return this as any
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV9111(): SchedulerStorageVersionStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface SchedulerStorageVersionStorageV2015 {
    get(): Promise<v2015.Releases>
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface SchedulerStorageVersionStorageV9111 {
    get(): Promise<v9111.Type_580>
}

export class SessionCurrentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'CurrentIndex'
    }

    /**
     *  Current index of the session.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Current index of the session.
     */
    get asV1020(): SessionCurrentIndexStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Current index of the session.
 */
export interface SessionCurrentIndexStorageV1020 {
    get(): Promise<number>
}

export class SessionDisabledValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'DisabledValidators'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The set is cleared when `on_session_ending` returns a new set of identities.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The set is cleared when `on_session_ending` returns a new set of identities.
     */
    get asV1020(): SessionDisabledValidatorsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Indices of disabled validators.
 * 
 *  The set is cleared when `on_session_ending` returns a new set of identities.
 */
export interface SessionDisabledValidatorsStorageV1020 {
    get(): Promise<number[]>
}

export class SessionKeyOwnerStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'KeyOwner'
    }

    /**
     *  The owner of a key. The second key is the `KeyTypeId` + the encoded key.
     * 
     *  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of
     *  the trie. Having all data in the same branch should prevent slowing down other queries.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'd13b5df6532bb01442c1ee70d65ef880f0c2f7c8b505b1010155ed60e8ddc5c9'
    }

    /**
     *  The owner of a key. The second key is the `KeyTypeId` + the encoded key.
     * 
     *  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of
     *  the trie. Having all data in the same branch should prevent slowing down other queries.
     */
    get asV1020(): SessionKeyOwnerStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get isV1051(): boolean {
        return this.getTypeHash() === '1c05e6d248d0d3f2ef2467d3e23031e7885220321b761d4eda9deda33530daa1'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asV1051(): SessionKeyOwnerStorageV1051 {
        assert(this.isV1051)
        return this as any
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asV9111(): SessionKeyOwnerStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The owner of a key. The second key is the `KeyTypeId` + the encoded key.
 * 
 *  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of
 *  the trie. Having all data in the same branch should prevent slowing down other queries.
 */
export interface SessionKeyOwnerStorageV1020 {
    get(key1: Uint8Array, key2: [number, Uint8Array]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, [number, Uint8Array]][]): Promise<(Uint8Array | undefined)[]>
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageV1051 {
    get(key: [number, Uint8Array]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageV9111 {
    get(key: [Uint8Array, Uint8Array]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key: [Uint8Array, Uint8Array]): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairs(key: [Uint8Array, Uint8Array]): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
}

export class SessionNextKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'NextKeys'
    }

    /**
     *  The next session keys for a validator.
     * 
     *  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of
     *  the trie. Having all data in the same branch should prevent slowing down other queries.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '7ab43eb145e25456b876e18dac02bcc4c69c0d22f00108d52c674a35804868fe'
    }

    /**
     *  The next session keys for a validator.
     * 
     *  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of
     *  the trie. Having all data in the same branch should prevent slowing down other queries.
     */
    get asV1020(): SessionNextKeysStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  The next session keys for a validator.
     */
    get isV1051(): boolean {
        return this.getTypeHash() === '956ce8701e71dd9d50a09047fbdde932b038f3c8a9159f64b2a827684dbfb4be'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV1051(): SessionNextKeysStorageV1051 {
        assert(this.isV1051)
        return this as any
    }

    /**
     *  The next session keys for a validator.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === '863ab736aad303dae42a86573d0940425a7dc5f86df4507bd2046c94a92485c6'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV2028(): SessionNextKeysStorageV2028 {
        assert(this.isV2028)
        return this as any
    }

    /**
     *  The next session keys for a validator.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '3c6fcbefe7410f15bad0495b3f73dc8ed831dd09252a3ac11e3510578bfb8ced'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV9111(): SessionNextKeysStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The next session keys for a validator.
 * 
 *  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of
 *  the trie. Having all data in the same branch should prevent slowing down other queries.
 */
export interface SessionNextKeysStorageV1020 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array][]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined)[]>
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV1051 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined)[]>
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV2028 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV9111 {
    get(key: Uint8Array): Promise<(v9111.SessionKeys | undefined)>
    getAll(): Promise<v9111.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(v9111.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9111.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9111.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9111.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9111.SessionKeys][]>
}

export class SessionQueuedChangedStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedChanged'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get asV1020(): SessionQueuedChangedStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface SessionQueuedChangedStorageV1020 {
    get(): Promise<boolean>
}

export class SessionQueuedKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedKeys'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '60e9ef6d859b324f840841982876d81b2b58f08ea583a6d748cb5f02c048b4b6'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV1020(): SessionQueuedKeysStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === '8271d85dbd65415701fb3c54136c0537af5b065e3bebb0d1887ef75f6d0a349b'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV2028(): SessionQueuedKeysStorageV2028 {
        assert(this.isV2028)
        return this as any
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '1453d2146c195e5be6172441e0d99613270f104e70759afa2ff52f346b3ea040'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV9111(): SessionQueuedKeysStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV1020 {
    get(): Promise<[Uint8Array, [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV2028 {
    get(): Promise<[Uint8Array, [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV9111 {
    get(): Promise<[Uint8Array, v9111.SessionKeys][]>
}

export class SessionValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The current set of validators.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of validators.
     */
    get asV1020(): SessionValidatorsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The current set of validators.
 */
export interface SessionValidatorsStorageV1020 {
    get(): Promise<Uint8Array[]>
}

export class SlotsAuctionCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'AuctionCounter'
    }

    /**
     *  The number of auctions that been started so far.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of auctions that been started so far.
     */
    get asV1020(): SlotsAuctionCounterStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The number of auctions that been started so far.
 */
export interface SlotsAuctionCounterStorageV1020 {
    get(): Promise<number>
}

export class SlotsAuctionInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'AuctionInfo'
    }

    /**
     *  Information relating to the current auction, if there is one.
     * 
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  Information relating to the current auction, if there is one.
     * 
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    get asV1020(): SlotsAuctionInfoStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Information relating to the current auction, if there is one.
 * 
 *  The first item in the tuple is the lease period index that the first of the four
 *  contiguous lease periods on auction is for. The second is the block number when the
 *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
 */
export interface SlotsAuctionInfoStorageV1020 {
    get(): Promise<([number, number] | undefined)>
}

export class SlotsDepositsStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'Deposits'
    }

    /**
     *  Various amounts on deposit for each parachain. An entry in `ManagedIds` implies a non-
     *  default entry here.
     * 
     *  The actual amount locked on its behalf at any time is the maximum item in this list. The
     *  first item in the list is the amount locked for the current Lease Period. Following
     *  items are for the subsequent lease periods.
     * 
     *  The default value (an empty list) implies that the parachain no longer exists (or never
     *  existed) as far as this module is concerned.
     * 
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more zeroes to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '0c54571527d0756fb3f5933fbd2b7d0b81c2e3213e26e9771065002f7dc8bbbc'
    }

    /**
     *  Various amounts on deposit for each parachain. An entry in `ManagedIds` implies a non-
     *  default entry here.
     * 
     *  The actual amount locked on its behalf at any time is the maximum item in this list. The
     *  first item in the list is the amount locked for the current Lease Period. Following
     *  items are for the subsequent lease periods.
     * 
     *  The default value (an empty list) implies that the parachain no longer exists (or never
     *  existed) as far as this module is concerned.
     * 
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more zeroes to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     */
    get asV1020(): SlotsDepositsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Various amounts on deposit for each parachain. An entry in `ManagedIds` implies a non-
 *  default entry here.
 * 
 *  The actual amount locked on its behalf at any time is the maximum item in this list. The
 *  first item in the list is the amount locked for the current Lease Period. Following
 *  items are for the subsequent lease periods.
 * 
 *  The default value (an empty list) implies that the parachain no longer exists (or never
 *  existed) as far as this module is concerned.
 * 
 *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
 *  will be left-padded with one or more zeroes to denote the fact that nothing is held on
 *  deposit for the non-existent chain currently, but is held at some point in the future.
 */
export interface SlotsDepositsStorageV1020 {
    get(key: number): Promise<bigint[]>
    getAll(): Promise<bigint[][]>
    getMany(keys: number[]): Promise<bigint[][]>
}

export class SlotsLeasesStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'Leases'
    }

    /**
     *  Amounts held on deposit for each (possibly future) leased parachain.
     * 
     *  The actual amount locked on its behalf by any account at any time is the maximum of the second values
     *  of the items in this list whose first value is the account.
     * 
     *  The first item in the list is the amount locked for the current Lease Period. Following
     *  items are for the subsequent lease periods.
     * 
     *  The default value (an empty list) implies that the parachain no longer exists (or never
     *  existed) as far as this module is concerned.
     * 
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     * 
     *  It is illegal for a `None` value to trail in the list.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '045289c99cd38832bbd83d1da1c2329eef49e8a0cf672722d68751b969c19980'
    }

    /**
     *  Amounts held on deposit for each (possibly future) leased parachain.
     * 
     *  The actual amount locked on its behalf by any account at any time is the maximum of the second values
     *  of the items in this list whose first value is the account.
     * 
     *  The first item in the list is the amount locked for the current Lease Period. Following
     *  items are for the subsequent lease periods.
     * 
     *  The default value (an empty list) implies that the parachain no longer exists (or never
     *  existed) as far as this module is concerned.
     * 
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     * 
     *  It is illegal for a `None` value to trail in the list.
     */
    get asV9010(): SlotsLeasesStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  Amounts held on deposit for each (possibly future) leased parachain.
 * 
 *  The actual amount locked on its behalf by any account at any time is the maximum of the second values
 *  of the items in this list whose first value is the account.
 * 
 *  The first item in the list is the amount locked for the current Lease Period. Following
 *  items are for the subsequent lease periods.
 * 
 *  The default value (an empty list) implies that the parachain no longer exists (or never
 *  existed) as far as this module is concerned.
 * 
 *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
 *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
 *  deposit for the non-existent chain currently, but is held at some point in the future.
 * 
 *  It is illegal for a `None` value to trail in the list.
 */
export interface SlotsLeasesStorageV9010 {
    get(key: number): Promise<([Uint8Array, bigint] | undefined)[]>
    getAll(): Promise<([Uint8Array, bigint] | undefined)[][]>
    getMany(keys: number[]): Promise<([Uint8Array, bigint] | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: ([Uint8Array, bigint] | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: ([Uint8Array, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: ([Uint8Array, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: ([Uint8Array, bigint] | undefined)[]][]>
}

export class SlotsManagedIdsStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'ManagedIds'
    }

    /**
     *  Ordered list of all `ParaId` values that are managed by this module. This includes
     *  chains that are not yet deployed (but have won an auction in the future).
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Ordered list of all `ParaId` values that are managed by this module. This includes
     *  chains that are not yet deployed (but have won an auction in the future).
     */
    get asV1020(): SlotsManagedIdsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Ordered list of all `ParaId` values that are managed by this module. This includes
 *  chains that are not yet deployed (but have won an auction in the future).
 */
export interface SlotsManagedIdsStorageV1020 {
    get(): Promise<number[]>
}

export class SlotsOffboardingStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'Offboarding'
    }

    /**
     *  Off-boarding account; currency held on deposit for the parachain gets placed here if the
     *  parachain gets off-boarded; i.e. its lease period is up and it isn't renewed.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Off-boarding account; currency held on deposit for the parachain gets placed here if the
     *  parachain gets off-boarded; i.e. its lease period is up and it isn't renewed.
     */
    get asV1020(): SlotsOffboardingStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Off-boarding account; currency held on deposit for the parachain gets placed here if the
 *  parachain gets off-boarded; i.e. its lease period is up and it isn't renewed.
 */
export interface SlotsOffboardingStorageV1020 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
}

export class SlotsOnboardQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'OnboardQueue'
    }

    /**
     *  The set of Para IDs that have won and need to be on-boarded at an upcoming lease-period.
     *  This is cleared out on the first block of the lease period.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
    }

    /**
     *  The set of Para IDs that have won and need to be on-boarded at an upcoming lease-period.
     *  This is cleared out on the first block of the lease period.
     */
    get asV1020(): SlotsOnboardQueueStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The set of Para IDs that have won and need to be on-boarded at an upcoming lease-period.
 *  This is cleared out on the first block of the lease period.
 */
export interface SlotsOnboardQueueStorageV1020 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
}

export class SlotsOnboardingStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'Onboarding'
    }

    /**
     *  The actual on-boarding information. Only exists when one of the following is true:
     *  - It is before the lease period that the parachain should be on-boarded.
     *  - The full on-boarding information has not yet been provided and the parachain is not
     *  yet due to be off-boarded.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '445292ed8c4f3800f52c0936ea70aec863e5ffa949359118255bc91fa1dc1351'
    }

    /**
     *  The actual on-boarding information. Only exists when one of the following is true:
     *  - It is before the lease period that the parachain should be on-boarded.
     *  - The full on-boarding information has not yet been provided and the parachain is not
     *  yet due to be off-boarded.
     */
    get asV1020(): SlotsOnboardingStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The actual on-boarding information. Only exists when one of the following is true:
 *  - It is before the lease period that the parachain should be on-boarded.
 *  - The full on-boarding information has not yet been provided and the parachain is not
 *  yet due to be off-boarded.
 */
export interface SlotsOnboardingStorageV1020 {
    get(key: number): Promise<([number, v1020.IncomingParachain] | undefined)>
    getAll(): Promise<[number, v1020.IncomingParachain][]>
    getMany(keys: number[]): Promise<([number, v1020.IncomingParachain] | undefined)[]>
}

export class SlotsReservedAmountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'ReservedAmounts'
    }

    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'aff59eb49fe51cb559f68e912c242d462e6e49152ccb21918e6e5a83024144b4'
    }

    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    get asV1020(): SlotsReservedAmountsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Amounts currently reserved in the accounts of the bidders currently winning
 *  (sub-)ranges.
 */
export interface SlotsReservedAmountsStorageV1020 {
    get(key: v1020.Bidder): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: v1020.Bidder[]): Promise<(bigint | undefined)[]>
}

export class SlotsWinningStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'Winning'
    }

    /**
     *  The winning bids for each of the 10 ranges at each block in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Ending Period. The
     *  first block of the ending period is 0; the last is `EndingPeriod - 1`.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'ccec52f96cdd97c91b3c9b4297f402aec9614e99b08967c8c604f74277944587'
    }

    /**
     *  The winning bids for each of the 10 ranges at each block in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Ending Period. The
     *  first block of the ending period is 0; the last is `EndingPeriod - 1`.
     */
    get asV1020(): SlotsWinningStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The winning bids for each of the 10 ranges at each block in the final Ending Period of
 *  the current auction. The map's key is the 0-based index into the Ending Period. The
 *  first block of the ending period is 0; the last is `EndingPeriod - 1`.
 */
export interface SlotsWinningStorageV1020 {
    get(key: number): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)>
    getAll(): Promise<([Uint8Array, number, bigint] | undefined)[][]>
    getMany(keys: number[]): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)[]>
}

export class SocietyBidsStorage extends StorageBase {
    protected getPrefix() {
        return 'Society'
    }

    protected getName() {
        return 'Bids'
    }

    /**
     *  The current bids, stored ordered by the value of the bid.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '10cb2b16047aef87eb4b97693b155888dcdf8be529db6a3478537291fd09c4ea'
    }

    /**
     *  The current bids, stored ordered by the value of the bid.
     */
    get asV1040(): SocietyBidsStorageV1040 {
        assert(this.isV1040)
        return this as any
    }

    /**
     *  The current bids, stored ordered by the value of the bid.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '411686a59edbfe2554e1198de065938b91c3bf21c2de84694e25ec4198e08949'
    }

    /**
     *  The current bids, stored ordered by the value of the bid.
     */
    get asV9111(): SocietyBidsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The current bids, stored ordered by the value of the bid.
 */
export interface SocietyBidsStorageV1040 {
    get(): Promise<v1040.Bid[]>
}

/**
 *  The current bids, stored ordered by the value of the bid.
 */
export interface SocietyBidsStorageV9111 {
    get(): Promise<v9111.Bid[]>
}

export class SocietyCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'Society'
    }

    protected getName() {
        return 'Candidates'
    }

    /**
     *  The current set of candidates; bidders that are attempting to become members.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '10cb2b16047aef87eb4b97693b155888dcdf8be529db6a3478537291fd09c4ea'
    }

    /**
     *  The current set of candidates; bidders that are attempting to become members.
     */
    get asV1040(): SocietyCandidatesStorageV1040 {
        assert(this.isV1040)
        return this as any
    }

    /**
     *  The current set of candidates; bidders that are attempting to become members.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '411686a59edbfe2554e1198de065938b91c3bf21c2de84694e25ec4198e08949'
    }

    /**
     *  The current set of candidates; bidders that are attempting to become members.
     */
    get asV9111(): SocietyCandidatesStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The current set of candidates; bidders that are attempting to become members.
 */
export interface SocietyCandidatesStorageV1040 {
    get(): Promise<v1040.Bid[]>
}

/**
 *  The current set of candidates; bidders that are attempting to become members.
 */
export interface SocietyCandidatesStorageV9111 {
    get(): Promise<v9111.Bid[]>
}

export class SocietyDefenderStorage extends StorageBase {
    protected getPrefix() {
        return 'Society'
    }

    protected getName() {
        return 'Defender'
    }

    /**
     *  The defending member currently being challenged.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The defending member currently being challenged.
     */
    get asV1040(): SocietyDefenderStorageV1040 {
        assert(this.isV1040)
        return this as any
    }
}

/**
 *  The defending member currently being challenged.
 */
export interface SocietyDefenderStorageV1040 {
    get(): Promise<(Uint8Array | undefined)>
}

export class SocietyDefenderVotesStorage extends StorageBase {
    protected getPrefix() {
        return 'Society'
    }

    protected getName() {
        return 'DefenderVotes'
    }

    /**
     *  Votes for the defender.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '1fe3718f000611c375ff3fc9c5ff5c0d1352b72df9fe99984aed210abd7964fe'
    }

    /**
     *  Votes for the defender.
     */
    get asV1040(): SocietyDefenderVotesStorageV1040 {
        assert(this.isV1040)
        return this as any
    }
}

/**
 *  Votes for the defender.
 */
export interface SocietyDefenderVotesStorageV1040 {
    get(key: Uint8Array): Promise<(v1040.SocietyVote | undefined)>
    getAll(): Promise<v1040.SocietyVote[]>
    getMany(keys: Uint8Array[]): Promise<(v1040.SocietyVote | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1040.SocietyVote][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1040.SocietyVote][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1040.SocietyVote][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1040.SocietyVote][]>
}

export class SocietyFounderStorage extends StorageBase {
    protected getPrefix() {
        return 'Society'
    }

    protected getName() {
        return 'Founder'
    }

    /**
     *  The first member.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The first member.
     */
    get asV1040(): SocietyFounderStorageV1040 {
        assert(this.isV1040)
        return this as any
    }
}

/**
 *  The first member.
 */
export interface SocietyFounderStorageV1040 {
    get(): Promise<(Uint8Array | undefined)>
}

export class SocietyHeadStorage extends StorageBase {
    protected getPrefix() {
        return 'Society'
    }

    protected getName() {
        return 'Head'
    }

    /**
     *  The most primary from the most recently approved members.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The most primary from the most recently approved members.
     */
    get asV1040(): SocietyHeadStorageV1040 {
        assert(this.isV1040)
        return this as any
    }
}

/**
 *  The most primary from the most recently approved members.
 */
export interface SocietyHeadStorageV1040 {
    get(): Promise<(Uint8Array | undefined)>
}

export class SocietyMaxMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Society'
    }

    protected getName() {
        return 'MaxMembers'
    }

    /**
     *  The max number of members for the society at one time.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The max number of members for the society at one time.
     */
    get asV1040(): SocietyMaxMembersStorageV1040 {
        assert(this.isV1040)
        return this as any
    }
}

/**
 *  The max number of members for the society at one time.
 */
export interface SocietyMaxMembersStorageV1040 {
    get(): Promise<number>
}

export class SocietyMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Society'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current set of members, ordered.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of members, ordered.
     */
    get asV1040(): SocietyMembersStorageV1040 {
        assert(this.isV1040)
        return this as any
    }
}

/**
 *  The current set of members, ordered.
 */
export interface SocietyMembersStorageV1040 {
    get(): Promise<Uint8Array[]>
}

export class SocietyPayoutsStorage extends StorageBase {
    protected getPrefix() {
        return 'Society'
    }

    protected getName() {
        return 'Payouts'
    }

    /**
     *  Pending payouts; ordered by block number, with the amount that should be paid out.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '634e12d45992be72bb69b63c5640dcec8deb21a9d8b1b06b139451b1ee8b77b3'
    }

    /**
     *  Pending payouts; ordered by block number, with the amount that should be paid out.
     */
    get asV1040(): SocietyPayoutsStorageV1040 {
        assert(this.isV1040)
        return this as any
    }
}

/**
 *  Pending payouts; ordered by block number, with the amount that should be paid out.
 */
export interface SocietyPayoutsStorageV1040 {
    get(key: Uint8Array): Promise<[number, bigint][]>
    getAll(): Promise<[number, bigint][][]>
    getMany(keys: Uint8Array[]): Promise<[number, bigint][][]>
}

export class SocietyPotStorage extends StorageBase {
    protected getPrefix() {
        return 'Society'
    }

    protected getName() {
        return 'Pot'
    }

    /**
     *  Amount of our account balance that is specifically for the next round's bid(s).
     */
    get isV1040(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Amount of our account balance that is specifically for the next round's bid(s).
     */
    get asV1040(): SocietyPotStorageV1040 {
        assert(this.isV1040)
        return this as any
    }
}

/**
 *  Amount of our account balance that is specifically for the next round's bid(s).
 */
export interface SocietyPotStorageV1040 {
    get(): Promise<bigint>
}

export class SocietyRulesStorage extends StorageBase {
    protected getPrefix() {
        return 'Society'
    }

    protected getName() {
        return 'Rules'
    }

    /**
     *  A hash of the rules of this society concerning membership. Can only be set once and
     *  only by the founder.
     */
    get isV1042(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  A hash of the rules of this society concerning membership. Can only be set once and
     *  only by the founder.
     */
    get asV1042(): SocietyRulesStorageV1042 {
        assert(this.isV1042)
        return this as any
    }
}

/**
 *  A hash of the rules of this society concerning membership. Can only be set once and
 *  only by the founder.
 */
export interface SocietyRulesStorageV1042 {
    get(): Promise<(Uint8Array | undefined)>
}

export class SocietyStrikesStorage extends StorageBase {
    protected getPrefix() {
        return 'Society'
    }

    protected getName() {
        return 'Strikes'
    }

    /**
     *  The ongoing number of losing votes cast by the member.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The ongoing number of losing votes cast by the member.
     */
    get asV1040(): SocietyStrikesStorageV1040 {
        assert(this.isV1040)
        return this as any
    }
}

/**
 *  The ongoing number of losing votes cast by the member.
 */
export interface SocietyStrikesStorageV1040 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
}

export class SocietySuspendedCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'Society'
    }

    protected getName() {
        return 'SuspendedCandidates'
    }

    /**
     *  The set of suspended candidates.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '058575ab36a3716bfc871d4349ee61dd2ae86e5eae3fea166b94aa32c0aa10a0'
    }

    /**
     *  The set of suspended candidates.
     */
    get asV1040(): SocietySuspendedCandidatesStorageV1040 {
        assert(this.isV1040)
        return this as any
    }

    /**
     *  The set of suspended candidates.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '03c129b567eb923d3b5dbafe018996690d5ea9ff2dc10cd2c60c2e8c64759a15'
    }

    /**
     *  The set of suspended candidates.
     */
    get asV9111(): SocietySuspendedCandidatesStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The set of suspended candidates.
 */
export interface SocietySuspendedCandidatesStorageV1040 {
    get(key: Uint8Array): Promise<([bigint, v1040.BidKind] | undefined)>
    getAll(): Promise<[bigint, v1040.BidKind][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, v1040.BidKind] | undefined)[]>
}

/**
 *  The set of suspended candidates.
 */
export interface SocietySuspendedCandidatesStorageV9111 {
    get(key: Uint8Array): Promise<([bigint, v9111.BidKind] | undefined)>
    getAll(): Promise<[bigint, v9111.BidKind][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, v9111.BidKind] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, v9111.BidKind]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, v9111.BidKind]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, v9111.BidKind]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, v9111.BidKind]][]>
}

export class SocietySuspendedMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Society'
    }

    protected getName() {
        return 'SuspendedMembers'
    }

    /**
     *  The set of suspended members.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '29735300dba5135be0e1e53d771089aba86ed92479018d68d31c9d66cb9816e3'
    }

    /**
     *  The set of suspended members.
     */
    get asV1040(): SocietySuspendedMembersStorageV1040 {
        assert(this.isV1040)
        return this as any
    }

    /**
     *  The set of suspended members.
     */
    get isV1042(): boolean {
        return this.getTypeHash() === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
    }

    /**
     *  The set of suspended members.
     */
    get asV1042(): SocietySuspendedMembersStorageV1042 {
        assert(this.isV1042)
        return this as any
    }
}

/**
 *  The set of suspended members.
 */
export interface SocietySuspendedMembersStorageV1040 {
    get(key: Uint8Array): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: Uint8Array[]): Promise<(null | undefined)[]>
}

/**
 *  The set of suspended members.
 */
export interface SocietySuspendedMembersStorageV1042 {
    get(key: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<boolean[]>
}

export class SocietyVotesStorage extends StorageBase {
    protected getPrefix() {
        return 'Society'
    }

    protected getName() {
        return 'Votes'
    }

    /**
     *  Double map from Candidate -> Voter -> (Maybe) Vote.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '85829b361182877978da5efee007f1238e35f432a09132733eafee5c3e0a3478'
    }

    /**
     *  Double map from Candidate -> Voter -> (Maybe) Vote.
     */
    get asV1040(): SocietyVotesStorageV1040 {
        assert(this.isV1040)
        return this as any
    }
}

/**
 *  Double map from Candidate -> Voter -> (Maybe) Vote.
 */
export interface SocietyVotesStorageV1040 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v1040.SocietyVote | undefined)>
    getAll(): Promise<v1040.SocietyVote[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v1040.SocietyVote | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v1040.SocietyVote][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v1040.SocietyVote][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v1040.SocietyVote][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1040.SocietyVote][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1040.SocietyVote][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1040.SocietyVote][]>
}

export class SocietyVouchingStorage extends StorageBase {
    protected getPrefix() {
        return 'Society'
    }

    protected getName() {
        return 'Vouching'
    }

    /**
     *  Members currently vouching or banned from vouching again
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '37fcd9321a31e81d0e225810aa4633926f004ccc35f626c23b1fd140a9546edc'
    }

    /**
     *  Members currently vouching or banned from vouching again
     */
    get asV1040(): SocietyVouchingStorageV1040 {
        assert(this.isV1040)
        return this as any
    }
}

/**
 *  Members currently vouching or banned from vouching again
 */
export interface SocietyVouchingStorageV1040 {
    get(key: Uint8Array): Promise<(v1040.VouchingStatus | undefined)>
    getAll(): Promise<v1040.VouchingStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v1040.VouchingStatus | undefined)[]>
}

export class StakingActiveEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ActiveEra'
    }

    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era currently rewarded.
     *  Validator set of this era must be equal to `SessionInterface::validators`.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '2bb946dd9c19de9f4332897005d1255528c610172f7418fae165b5dafd3cfbfe'
    }

    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era currently rewarded.
     *  Validator set of this era must be equal to `SessionInterface::validators`.
     */
    get asV1050(): StakingActiveEraStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  The active era information, it holds index and start.
 * 
 *  The active era is the era currently rewarded.
 *  Validator set of this era must be equal to `SessionInterface::validators`.
 */
export interface StakingActiveEraStorageV1050 {
    get(): Promise<(v1050.ActiveEraInfo | undefined)>
}

export class StakingBondedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Bonded'
    }

    /**
     *  Map from all locked "stash" accounts to the controller account.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
    }

    /**
     *  Map from all locked "stash" accounts to the controller account.
     */
    get asV1020(): StakingBondedStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Map from all locked "stash" accounts to the controller account.
 */
export interface StakingBondedStorageV1020 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
}

export class StakingBondedErasStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'BondedEras'
    }

    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     */
    get asV1020(): StakingBondedErasStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  A mapping from still-bonded eras to the first session index of that era.
 */
export interface StakingBondedErasStorageV1020 {
    get(): Promise<[number, number][]>
}

export class StakingCanceledSlashPayoutStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CanceledSlashPayout'
    }

    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    get asV1020(): StakingCanceledSlashPayoutStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The amount of currency given to reporters of a slash event which was
 *  canceled by extraordinary circumstances (e.g. governance).
 */
export interface StakingCanceledSlashPayoutStorageV1020 {
    get(): Promise<bigint>
}

export class StakingChillThresholdStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ChillThreshold'
    }

    /**
     *  The threshold for when users can start calling `chill_other` for other validators / nominators.
     *  The threshold is compared to the actual number of validators / nominators (`CountFor*`) in
     *  the system compared to the configured max (`Max*Count`).
     */
    get isV9080(): boolean {
        return this.getTypeHash() === 'a05bf6dd806233a6b9a22cb1cd50bcf79bcb6a1f3014c295988bec299abc5cd3'
    }

    /**
     *  The threshold for when users can start calling `chill_other` for other validators / nominators.
     *  The threshold is compared to the actual number of validators / nominators (`CountFor*`) in
     *  the system compared to the configured max (`Max*Count`).
     */
    get asV9080(): StakingChillThresholdStorageV9080 {
        assert(this.isV9080)
        return this as any
    }
}

/**
 *  The threshold for when users can start calling `chill_other` for other validators / nominators.
 *  The threshold is compared to the actual number of validators / nominators (`CountFor*`) in
 *  the system compared to the configured max (`Max*Count`).
 */
export interface StakingChillThresholdStorageV9080 {
    get(): Promise<(number | undefined)>
}

export class StakingCounterForNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CounterForNominators'
    }

    /**
     *  A tracker to keep count of the number of items in the `Nominators` map.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  A tracker to keep count of the number of items in the `Nominators` map.
     */
    get asV9050(): StakingCounterForNominatorsStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  A tracker to keep count of the number of items in the `Nominators` map.
 */
export interface StakingCounterForNominatorsStorageV9050 {
    get(): Promise<number>
}

export class StakingCounterForValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CounterForValidators'
    }

    /**
     *  A tracker to keep count of the number of items in the `Validators` map.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  A tracker to keep count of the number of items in the `Validators` map.
     */
    get asV9050(): StakingCounterForValidatorsStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  A tracker to keep count of the number of items in the `Validators` map.
 */
export interface StakingCounterForValidatorsStorageV9050 {
    get(): Promise<number>
}

export class StakingCurrentElectedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentElected'
    }

    /**
     *  The currently elected validator set keyed by stash account ID.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The currently elected validator set keyed by stash account ID.
     */
    get asV1020(): StakingCurrentElectedStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The currently elected validator set keyed by stash account ID.
 */
export interface StakingCurrentElectedStorageV1020 {
    get(): Promise<Uint8Array[]>
}

export class StakingCurrentEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentEra'
    }

    /**
     *  The current era index.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current era index.
     */
    get asV1020(): StakingCurrentEraStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how session module queues the validator
     *  set, it might be active or not.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how session module queues the validator
     *  set, it might be active or not.
     */
    get asV1050(): StakingCurrentEraStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  The current era index.
 */
export interface StakingCurrentEraStorageV1020 {
    get(): Promise<number>
}

/**
 *  The current era index.
 * 
 *  This is the latest planned era, depending on how session module queues the validator
 *  set, it might be active or not.
 */
export interface StakingCurrentEraStorageV1050 {
    get(): Promise<(number | undefined)>
}

export class StakingCurrentEraPointsEarnedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentEraPointsEarned'
    }

    /**
     *  Rewards for the current era. Using indices of current elected set.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'c9c80f076e65b760730b101fa65c97291c622cd82a2926ed3f662fce619cc3d1'
    }

    /**
     *  Rewards for the current era. Using indices of current elected set.
     */
    get asV1020(): StakingCurrentEraPointsEarnedStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Rewards for the current era. Using indices of current elected set.
 */
export interface StakingCurrentEraPointsEarnedStorageV1020 {
    get(): Promise<v1020.EraPoints>
}

export class StakingCurrentEraStartStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentEraStart'
    }

    /**
     *  The start of the current era.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The start of the current era.
     */
    get asV1020(): StakingCurrentEraStartStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The start of the current era.
 */
export interface StakingCurrentEraStartStorageV1020 {
    get(): Promise<bigint>
}

export class StakingCurrentEraStartSessionIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentEraStartSessionIndex'
    }

    /**
     *  The session index at which the current era started.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The session index at which the current era started.
     */
    get asV1020(): StakingCurrentEraStartSessionIndexStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The session index at which the current era started.
 */
export interface StakingCurrentEraStartSessionIndexStorageV1020 {
    get(): Promise<number>
}

export class StakingCurrentPlannedSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentPlannedSession'
    }

    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`SessionManager::new_session`].
     */
    get isV2029(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`SessionManager::new_session`].
     */
    get asV2029(): StakingCurrentPlannedSessionStorageV2029 {
        assert(this.isV2029)
        return this as any
    }
}

/**
 *  The last planned session scheduled by the session pallet.
 * 
 *  This is basically in sync with the call to [`SessionManager::new_session`].
 */
export interface StakingCurrentPlannedSessionStorageV2029 {
    get(): Promise<number>
}

export class StakingEarliestUnappliedSlashStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'EarliestUnappliedSlash'
    }

    /**
     *  The earliest era for which we have a pending, unapplied slash.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The earliest era for which we have a pending, unapplied slash.
     */
    get asV1020(): StakingEarliestUnappliedSlashStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The earliest era for which we have a pending, unapplied slash.
 */
export interface StakingEarliestUnappliedSlashStorageV1020 {
    get(): Promise<(number | undefined)>
}

export class StakingEraElectionStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'EraElectionStatus'
    }

    /**
     *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
     *  solutions to be submitted.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === 'bf44282bdbc037310265361b5f110910184ee499c1366addfdbeb65aef359e28'
    }

    /**
     *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
     *  solutions to be submitted.
     */
    get asV1058(): StakingEraElectionStatusStorageV1058 {
        assert(this.isV1058)
        return this as any
    }
}

/**
 *  Flag to control the execution of the offchain election. When `Open(_)`, we accept
 *  solutions to be submitted.
 */
export interface StakingEraElectionStatusStorageV1058 {
    get(): Promise<v1058.ElectionStatus>
}

export class StakingErasRewardPointsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasRewardPoints'
    }

    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '48c202c7b8424da56b623834c54ceaf74129dbd88a59c39931cc7ba131501b50'
    }

    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    get asV1050(): StakingErasRewardPointsStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  Rewards for the last `HISTORY_DEPTH` eras.
 *  If reward hasn't been set or has been removed then 0 reward is returned.
 */
export interface StakingErasRewardPointsStorageV1050 {
    get(key: number): Promise<v1050.EraRewardPoints>
    getAll(): Promise<v1050.EraRewardPoints[]>
    getMany(keys: number[]): Promise<v1050.EraRewardPoints[]>
}

export class StakingErasStakersStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStakers'
    }

    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === 'f3f726cc814cef290657008054cd10667b250a01d2842ff3bbbcca24c98abf5b'
    }

    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get asV1050(): StakingErasStakersStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  Exposure of validator at era.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface StakingErasStakersStorageV1050 {
    get(key1: number, key2: Uint8Array): Promise<v1050.Exposure>
    getAll(): Promise<v1050.Exposure[]>
    getMany(keys: [number, Uint8Array][]): Promise<v1050.Exposure[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v1050.Exposure][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v1050.Exposure][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v1050.Exposure][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v1050.Exposure][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v1050.Exposure][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v1050.Exposure][]>
}

export class StakingErasStakersClippedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStakersClipped'
    }

    /**
     *  Clipped Exposure of validator at era.
     * 
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduce to the
     *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
     *  This is used to limit the i/o cost for the nominator payout.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === 'f3f726cc814cef290657008054cd10667b250a01d2842ff3bbbcca24c98abf5b'
    }

    /**
     *  Clipped Exposure of validator at era.
     * 
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduce to the
     *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
     *  This is used to limit the i/o cost for the nominator payout.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get asV1050(): StakingErasStakersClippedStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  Clipped Exposure of validator at era.
 * 
 *  This is similar to [`ErasStakers`] but number of nominators exposed is reduce to the
 *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
 *  This is used to limit the i/o cost for the nominator payout.
 * 
 *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface StakingErasStakersClippedStorageV1050 {
    get(key1: number, key2: Uint8Array): Promise<v1050.Exposure>
    getAll(): Promise<v1050.Exposure[]>
    getMany(keys: [number, Uint8Array][]): Promise<v1050.Exposure[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v1050.Exposure][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v1050.Exposure][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v1050.Exposure][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v1050.Exposure][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v1050.Exposure][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v1050.Exposure][]>
}

export class StakingErasStartSessionIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStartSessionIndex'
    }

    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras
     */
    get asV1050(): StakingErasStartSessionIndexStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  The session index at which the era start for the last `HISTORY_DEPTH` eras
 */
export interface StakingErasStartSessionIndexStorageV1050 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
}

export class StakingErasTotalStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasTotalStake'
    }

    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    get asV1050(): StakingErasTotalStakeStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  The total amount staked for the last `HISTORY_DEPTH` eras.
 *  If total hasn't been set or has been removed then 0 stake is returned.
 */
export interface StakingErasTotalStakeStorageV1050 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
}

export class StakingErasValidatorPrefsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasValidatorPrefs'
    }

    /**
     *  Similarly to `ErasStakers` this holds the preferences of validators.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '3b21d3470a6c89e6da0d574a6d1402846f9836bb0d1f42e73e3fab07653299c2'
    }

    /**
     *  Similarly to `ErasStakers` this holds the preferences of validators.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get asV1050(): StakingErasValidatorPrefsStorageV1050 {
        assert(this.isV1050)
        return this as any
    }

    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === '2f145e368b1c1a9540437d8c25b9502d09b7e977e27a6bb99156b6bf2c6269d2'
    }

    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get asV2028(): StakingErasValidatorPrefsStorageV2028 {
        assert(this.isV2028)
        return this as any
    }
}

/**
 *  Similarly to `ErasStakers` this holds the preferences of validators.
 * 
 *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 */
export interface StakingErasValidatorPrefsStorageV1050 {
    get(key1: number, key2: Uint8Array): Promise<v1050.ValidatorPrefs>
    getAll(): Promise<v1050.ValidatorPrefs[]>
    getMany(keys: [number, Uint8Array][]): Promise<v1050.ValidatorPrefs[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v1050.ValidatorPrefs][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v1050.ValidatorPrefs][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v1050.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v1050.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v1050.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v1050.ValidatorPrefs][]>
}

/**
 *  Similar to `ErasStakers`, this holds the preferences of validators.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 */
export interface StakingErasValidatorPrefsStorageV2028 {
    get(key1: number, key2: Uint8Array): Promise<v2028.ValidatorPrefs>
    getAll(): Promise<v2028.ValidatorPrefs[]>
    getMany(keys: [number, Uint8Array][]): Promise<v2028.ValidatorPrefs[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v2028.ValidatorPrefs][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v2028.ValidatorPrefs][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v2028.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v2028.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v2028.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v2028.ValidatorPrefs][]>
}

export class StakingErasValidatorRewardStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasValidatorReward'
    }

    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
    }

    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    get asV1050(): StakingErasValidatorRewardStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  The total validator era payout for the last `HISTORY_DEPTH` eras.
 * 
 *  Eras that haven't finished yet or has been removed doesn't have reward.
 */
export interface StakingErasValidatorRewardStorageV1050 {
    get(key: number): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<(bigint | undefined)[]>
}

export class StakingForceEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ForceEra'
    }

    /**
     *  True if the next session change will be a new era regardless of index.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'b7c79f26737f4e7aed039b709a4e473b3e4912bf8a2efbe7cc8c5fc9f7531c81'
    }

    /**
     *  True if the next session change will be a new era regardless of index.
     */
    get asV1020(): StakingForceEraStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  True if the next session change will be a new era regardless of index.
 */
export interface StakingForceEraStorageV1020 {
    get(): Promise<v1020.Forcing>
}

export class StakingHistoryDepthStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'HistoryDepth'
    }

    /**
     *  Number of era to keep in history.
     * 
     *  Information is kept for eras in `[current_era - history_depth; current_era]
     * 
     *  Must be more than the number of era delayed by session otherwise.
     *  i.e. active era must always be in history.
     *  i.e. `active_era > current_era - history_depth` must be guaranteed.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of era to keep in history.
     * 
     *  Information is kept for eras in `[current_era - history_depth; current_era]
     * 
     *  Must be more than the number of era delayed by session otherwise.
     *  i.e. active era must always be in history.
     *  i.e. `active_era > current_era - history_depth` must be guaranteed.
     */
    get asV1050(): StakingHistoryDepthStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  Number of era to keep in history.
 * 
 *  Information is kept for eras in `[current_era - history_depth; current_era]
 * 
 *  Must be more than the number of era delayed by session otherwise.
 *  i.e. active era must always be in history.
 *  i.e. `active_era > current_era - history_depth` must be guaranteed.
 */
export interface StakingHistoryDepthStorageV1050 {
    get(): Promise<number>
}

export class StakingInvulnerablesStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Invulnerables'
    }

    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    get asV1020(): StakingInvulnerablesStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
 *  easy to initialize and the performance hit is minimal (we expect no more than four
 *  invulnerables) and restricted to testnets.
 */
export interface StakingInvulnerablesStorageV1020 {
    get(): Promise<Uint8Array[]>
}

export class StakingIsCurrentSessionFinalStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'IsCurrentSessionFinal'
    }

    /**
     *  True if the current **planned** session is final. Note that this does not take era
     *  forcing into account.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the current **planned** session is final. Note that this does not take era
     *  forcing into account.
     */
    get asV1058(): StakingIsCurrentSessionFinalStorageV1058 {
        assert(this.isV1058)
        return this as any
    }
}

/**
 *  True if the current **planned** session is final. Note that this does not take era
 *  forcing into account.
 */
export interface StakingIsCurrentSessionFinalStorageV1058 {
    get(): Promise<boolean>
}

export class StakingLedgerStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Ledger'
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'c27b3ed6dad75f65e118399ee7274c494565332d8c67cc85aef297dd1092284b'
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    get asV1020(): StakingLedgerStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === 'acb0ae5b3ecc4c620a929a6d33a493f14d936906f24812ba68afe18beaf2314a'
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    get asV1050(): StakingLedgerStorageV1050 {
        assert(this.isV1050)
        return this as any
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === '838ac827cb2532f983c68467cfa97afcccf6147fb96e61e136394060880b64a4'
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     */
    get asV1058(): StakingLedgerStorageV1058 {
        assert(this.isV1058)
        return this as any
    }
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface StakingLedgerStorageV1020 {
    get(key: Uint8Array): Promise<(v1020.StakingLedger | undefined)>
    getAll(): Promise<v1020.StakingLedger[]>
    getMany(keys: Uint8Array[]): Promise<(v1020.StakingLedger | undefined)[]>
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface StakingLedgerStorageV1050 {
    get(key: Uint8Array): Promise<(v1050.StakingLedger | undefined)>
    getAll(): Promise<v1050.StakingLedger[]>
    getMany(keys: Uint8Array[]): Promise<(v1050.StakingLedger | undefined)[]>
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 */
export interface StakingLedgerStorageV1058 {
    get(key: Uint8Array): Promise<(v1058.StakingLedger | undefined)>
    getAll(): Promise<v1058.StakingLedger[]>
    getMany(keys: Uint8Array[]): Promise<(v1058.StakingLedger | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1058.StakingLedger][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1058.StakingLedger][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1058.StakingLedger][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1058.StakingLedger][]>
}

export class StakingMaxNominatorsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MaxNominatorsCount'
    }

    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get asV9050(): StakingMaxNominatorsCountStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  The maximum nominator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface StakingMaxNominatorsCountStorageV9050 {
    get(): Promise<(number | undefined)>
}

export class StakingMaxValidatorsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MaxValidatorsCount'
    }

    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get asV9050(): StakingMaxValidatorsCountStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  The maximum validator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface StakingMaxValidatorsCountStorageV9050 {
    get(): Promise<(number | undefined)>
}

export class StakingMigrateEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MigrateEra'
    }

    /**
     *  The era where we migrated from Lazy Payouts to Simple Payouts
     */
    get isV1058(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The era where we migrated from Lazy Payouts to Simple Payouts
     */
    get asV1058(): StakingMigrateEraStorageV1058 {
        assert(this.isV1058)
        return this as any
    }
}

/**
 *  The era where we migrated from Lazy Payouts to Simple Payouts
 */
export interface StakingMigrateEraStorageV1058 {
    get(): Promise<(number | undefined)>
}

export class StakingMinCommissionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinCommission'
    }

    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    get asV9160(): StakingMinCommissionStorageV9160 {
        assert(this.isV9160)
        return this as any
    }
}

/**
 *  The minimum amount of commission that validators can set.
 * 
 *  If set to `0`, no limit exists.
 */
export interface StakingMinCommissionStorageV9160 {
    get(): Promise<number>
}

export class StakingMinNominatorBondStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinNominatorBond'
    }

    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    get asV9050(): StakingMinNominatorBondStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  The minimum active bond to become and maintain the role of a nominator.
 */
export interface StakingMinNominatorBondStorageV9050 {
    get(): Promise<bigint>
}

export class StakingMinValidatorBondStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinValidatorBond'
    }

    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    get asV9050(): StakingMinValidatorBondStorageV9050 {
        assert(this.isV9050)
        return this as any
    }
}

/**
 *  The minimum active bond to become and maintain the role of a validator.
 */
export interface StakingMinValidatorBondStorageV9050 {
    get(): Promise<bigint>
}

export class StakingMinimumActiveStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinimumActiveStake'
    }

    /**
     *  The minimum active nominator stake of the last successful election.
     */
    get isV9360(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active nominator stake of the last successful election.
     */
    get asV9360(): StakingMinimumActiveStakeStorageV9360 {
        assert(this.isV9360)
        return this as any
    }
}

/**
 *  The minimum active nominator stake of the last successful election.
 */
export interface StakingMinimumActiveStakeStorageV9360 {
    get(): Promise<bigint>
}

export class StakingMinimumValidatorCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinimumValidatorCount'
    }

    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    get asV1020(): StakingMinimumValidatorCountStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Minimum number of staking participants before emergency conditions are imposed.
 */
export interface StakingMinimumValidatorCountStorageV1020 {
    get(): Promise<number>
}

export class StakingNominatorSlashInEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'NominatorSlashInEra'
    }

    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '019c211c1e4452f7fe517a6d5cafde0784f5991ddd51ac15e84213941f3208c2'
    }

    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    get asV1020(): StakingNominatorSlashInEraStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  All slashing events on nominators, mapped by era to the highest slash value of the era.
 */
export interface StakingNominatorSlashInEraStorageV1020 {
    get(key1: number, key2: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, Uint8Array][]): Promise<(bigint | undefined)[]>
}

export class StakingNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Nominators'
    }

    /**
     *  The map from nominator stash key to the set of stash keys of all validators to nominate.
     * 
     *  NOTE: is private so that we can ensure upgraded before all typical accesses.
     *  Direct storage APIs can still bypass this protection.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'a72d3e17e59f46bbd05fb0efd27052437fe2b1c41b0c89fe950edfb3b79e3c78'
    }

    /**
     *  The map from nominator stash key to the set of stash keys of all validators to nominate.
     * 
     *  NOTE: is private so that we can ensure upgraded before all typical accesses.
     *  Direct storage APIs can still bypass this protection.
     */
    get asV1020(): StakingNominatorsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The map from nominator stash key to the set of stash keys of all validators to nominate.
 * 
 *  NOTE: is private so that we can ensure upgraded before all typical accesses.
 *  Direct storage APIs can still bypass this protection.
 */
export interface StakingNominatorsStorageV1020 {
    get(key: Uint8Array): Promise<(v1020.Nominations | undefined)>
    getAll(): Promise<v1020.Nominations[]>
    getMany(keys: Uint8Array[]): Promise<(v1020.Nominations | undefined)[]>
}

export class StakingOffendingValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'OffendingValidators'
    }

    /**
     *  Indices of validators that have offended in the active era and whether they are currently
     *  disabled.
     * 
     *  This value should be a superset of disabled validators since not all offences lead to the
     *  validator being disabled (if there was no slash). This is needed to track the percentage of
     *  validators that have offended in the current era, ensuring a new era is forced if
     *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
     *  whether a given validator has previously offended using binary search. It gets cleared when
     *  the era ends.
     */
    get isV9122(): boolean {
        return this.getTypeHash() === 'f462a122689229c7df85ebbfd1e391ea27650c460999212f2c78a9a5675dd9e6'
    }

    /**
     *  Indices of validators that have offended in the active era and whether they are currently
     *  disabled.
     * 
     *  This value should be a superset of disabled validators since not all offences lead to the
     *  validator being disabled (if there was no slash). This is needed to track the percentage of
     *  validators that have offended in the current era, ensuring a new era is forced if
     *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
     *  whether a given validator has previously offended using binary search. It gets cleared when
     *  the era ends.
     */
    get asV9122(): StakingOffendingValidatorsStorageV9122 {
        assert(this.isV9122)
        return this as any
    }
}

/**
 *  Indices of validators that have offended in the active era and whether they are currently
 *  disabled.
 * 
 *  This value should be a superset of disabled validators since not all offences lead to the
 *  validator being disabled (if there was no slash). This is needed to track the percentage of
 *  validators that have offended in the current era, ensuring a new era is forced if
 *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
 *  whether a given validator has previously offended using binary search. It gets cleared when
 *  the era ends.
 */
export interface StakingOffendingValidatorsStorageV9122 {
    get(): Promise<[number, boolean][]>
}

export class StakingPayeeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Payee'
    }

    /**
     *  Where the reward payment should be made. Keyed by stash.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '997acadf80b79903fb4386b933d481dff61dad22612d657f19f39b937ea8d992'
    }

    /**
     *  Where the reward payment should be made. Keyed by stash.
     */
    get asV1020(): StakingPayeeStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 */
export interface StakingPayeeStorageV1020 {
    get(key: Uint8Array): Promise<v1020.RewardDestination>
    getAll(): Promise<v1020.RewardDestination[]>
    getMany(keys: Uint8Array[]): Promise<v1020.RewardDestination[]>
}

export class StakingQueuedElectedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'QueuedElected'
    }

    /**
     *  The next validator set. At the end of an era, if this is available (potentially from the
     *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
     *  is executed.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === '4eb4938a9c4768286e5e98cd46cabfc8a8c98b113bbbe8616621e5fc6aa8e4d5'
    }

    /**
     *  The next validator set. At the end of an era, if this is available (potentially from the
     *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
     *  is executed.
     */
    get asV1058(): StakingQueuedElectedStorageV1058 {
        assert(this.isV1058)
        return this as any
    }
}

/**
 *  The next validator set. At the end of an era, if this is available (potentially from the
 *  result of an offchain worker), it is immediately used. Otherwise, the on-chain election
 *  is executed.
 */
export interface StakingQueuedElectedStorageV1058 {
    get(): Promise<(v1058.ElectionResult | undefined)>
}

export class StakingQueuedScoreStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'QueuedScore'
    }

    /**
     *  The score of the current [`QueuedElected`].
     */
    get isV1058(): boolean {
        return this.getTypeHash() === 'fc5a4796e3467f3450c1f03819f4fe9e47a6e584803699b23c3072af283f03fa'
    }

    /**
     *  The score of the current [`QueuedElected`].
     */
    get asV1058(): StakingQueuedScoreStorageV1058 {
        assert(this.isV1058)
        return this as any
    }
}

/**
 *  The score of the current [`QueuedElected`].
 */
export interface StakingQueuedScoreStorageV1058 {
    get(): Promise<(bigint[] | undefined)>
}

export class StakingSlashRewardFractionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SlashRewardFraction'
    }

    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    get asV1020(): StakingSlashRewardFractionStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The percentage of the slash that is distributed to reporters.
 * 
 *  The rest of the slashed value is handled by the `Slash`.
 */
export interface StakingSlashRewardFractionStorageV1020 {
    get(): Promise<number>
}

export class StakingSlashingSpansStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SlashingSpans'
    }

    /**
     *  Slashing spans for stash accounts.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'ff450f1b753d13a5521c053c1ddf4b424ae5119d732701434520d017c5790332'
    }

    /**
     *  Slashing spans for stash accounts.
     */
    get asV1020(): StakingSlashingSpansStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Slashing spans for stash accounts.
     */
    get isV1045(): boolean {
        return this.getTypeHash() === 'b2f49d14e3e4e56cf533a97be4eadb0e19c21d28a6b1b78aa85d7fda1f7e298b'
    }

    /**
     *  Slashing spans for stash accounts.
     */
    get asV1045(): StakingSlashingSpansStorageV1045 {
        assert(this.isV1045)
        return this as any
    }
}

/**
 *  Slashing spans for stash accounts.
 */
export interface StakingSlashingSpansStorageV1020 {
    get(key: Uint8Array): Promise<(v1020.SlashingSpans | undefined)>
    getAll(): Promise<v1020.SlashingSpans[]>
    getMany(keys: Uint8Array[]): Promise<(v1020.SlashingSpans | undefined)[]>
}

/**
 *  Slashing spans for stash accounts.
 */
export interface StakingSlashingSpansStorageV1045 {
    get(key: Uint8Array): Promise<(v1045.SlashingSpans | undefined)>
    getAll(): Promise<v1045.SlashingSpans[]>
    getMany(keys: Uint8Array[]): Promise<(v1045.SlashingSpans | undefined)[]>
}

export class StakingSlotStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SlotStake'
    }

    /**
     *  The amount of balance actively at stake for each validator slot, currently.
     * 
     *  This is used to derive rewards and punishments.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount of balance actively at stake for each validator slot, currently.
     * 
     *  This is used to derive rewards and punishments.
     */
    get asV1020(): StakingSlotStakeStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The amount of balance actively at stake for each validator slot, currently.
 * 
 *  This is used to derive rewards and punishments.
 */
export interface StakingSlotStakeStorageV1020 {
    get(): Promise<bigint>
}

export class StakingSnapshotNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SnapshotNominators'
    }

    /**
     *  Snapshot of nominators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === '215c9d892fd7dcb1c19e9e4a7fa5848984bdbf3a79a842166eacdb84766538c2'
    }

    /**
     *  Snapshot of nominators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    get asV1058(): StakingSnapshotNominatorsStorageV1058 {
        assert(this.isV1058)
        return this as any
    }
}

/**
 *  Snapshot of nominators at the beginning of the current election window. This should only
 *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
 */
export interface StakingSnapshotNominatorsStorageV1058 {
    get(): Promise<(Uint8Array[] | undefined)>
}

export class StakingSnapshotValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SnapshotValidators'
    }

    /**
     *  Snapshot of validators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === '215c9d892fd7dcb1c19e9e4a7fa5848984bdbf3a79a842166eacdb84766538c2'
    }

    /**
     *  Snapshot of validators at the beginning of the current election window. This should only
     *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
     */
    get asV1058(): StakingSnapshotValidatorsStorageV1058 {
        assert(this.isV1058)
        return this as any
    }
}

/**
 *  Snapshot of validators at the beginning of the current election window. This should only
 *  have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
 */
export interface StakingSnapshotValidatorsStorageV1058 {
    get(): Promise<(Uint8Array[] | undefined)>
}

export class StakingSpanSlashStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SpanSlash'
    }

    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '3c3a6ad88aa43453f825e9fdcd8fb3dbdc0bef20e2be50b06d357c7c3d8e3488'
    }

    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    get asV1020(): StakingSpanSlashStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Records information about the maximum slash of a stash within a slashing span,
 *  as well as how much reward has been paid out.
 */
export interface StakingSpanSlashStorageV1020 {
    get(key: [Uint8Array, number]): Promise<v1020.SpanRecord>
    getAll(): Promise<v1020.SpanRecord[]>
    getMany(keys: [Uint8Array, number][]): Promise<v1020.SpanRecord[]>
}

export class StakingStakersStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Stakers'
    }

    /**
     *  Nominators for a particular account that is in action right now. You can't iterate
     *  through validators here, but you can find them in the Session module.
     * 
     *  This is keyed by the stash account.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'd3eee9271023eb9c766a48fd0a709136d59d1bde5407acf940037ad950c8900d'
    }

    /**
     *  Nominators for a particular account that is in action right now. You can't iterate
     *  through validators here, but you can find them in the Session module.
     * 
     *  This is keyed by the stash account.
     */
    get asV1020(): StakingStakersStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Nominators for a particular account that is in action right now. You can't iterate
 *  through validators here, but you can find them in the Session module.
 * 
 *  This is keyed by the stash account.
 */
export interface StakingStakersStorageV1020 {
    get(key: Uint8Array): Promise<v1020.Exposure>
    getAll(): Promise<v1020.Exposure[]>
    getMany(keys: Uint8Array[]): Promise<v1020.Exposure[]>
}

export class StakingStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  The version of storage for upgrade.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The version of storage for upgrade.
     */
    get asV1020(): StakingStorageVersionStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asV1050(): StakingStorageVersionStorageV1050 {
        assert(this.isV1050)
        return this as any
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'ef04544991bb54d78e35f735351ad18571d6f07748b22cbb3b9fcc24b06a94e9'
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get asV9111(): StakingStorageVersionStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '9d27f2caf6049b435f9ac14da3b267d0e65dfad3af06ab1bc4d6fe208abf3347'
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get asV9190(): StakingStorageVersionStorageV9190 {
        assert(this.isV9190)
        return this as any
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get isV9271(): boolean {
        return this.getTypeHash() === 'ada1e92667a52fdcb4e17dda7e6482dfa43e5fd766f816b93e620c415070cfcf'
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get asV9271(): StakingStorageVersionStorageV9271 {
        assert(this.isV9271)
        return this as any
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '5124cfaa968e88f2d457c9ef638f4306fd6837d49a99d8ecb792d7300f6f114c'
    }

    /**
     *  True if network has been upgraded to this version.
     *  Storage version of the pallet.
     * 
     *  This is set to v7.0.0 for new networks.
     */
    get asV9300(): StakingStorageVersionStorageV9300 {
        assert(this.isV9300)
        return this as any
    }
}

/**
 *  The version of storage for upgrade.
 */
export interface StakingStorageVersionStorageV1020 {
    get(): Promise<number>
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface StakingStorageVersionStorageV1050 {
    get(): Promise<v1050.Releases>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StakingStorageVersionStorageV9111 {
    get(): Promise<v9111.Type_228>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StakingStorageVersionStorageV9190 {
    get(): Promise<v9190.Type_240>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StakingStorageVersionStorageV9271 {
    get(): Promise<v9271.Type_248>
}

/**
 *  True if network has been upgraded to this version.
 *  Storage version of the pallet.
 * 
 *  This is set to v7.0.0 for new networks.
 */
export interface StakingStorageVersionStorageV9300 {
    get(): Promise<v9300.Type_252>
}

export class StakingUnappliedSlashesStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'UnappliedSlashes'
    }

    /**
     *  All unapplied slashes that are queued for later.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '8264329f163dd76100f9d2270735f3a3cb745c5af616ebd0e203d417e2039503'
    }

    /**
     *  All unapplied slashes that are queued for later.
     */
    get asV1020(): StakingUnappliedSlashesStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  All unapplied slashes that are queued for later.
 */
export interface StakingUnappliedSlashesStorageV1020 {
    get(key: number): Promise<v1020.UnappliedSlash[]>
    getAll(): Promise<v1020.UnappliedSlash[][]>
    getMany(keys: number[]): Promise<v1020.UnappliedSlash[][]>
}

export class StakingValidatorCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ValidatorCount'
    }

    /**
     *  The ideal number of staking participants.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The ideal number of staking participants.
     */
    get asV1020(): StakingValidatorCountStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The ideal number of staking participants.
 */
export interface StakingValidatorCountStorageV1020 {
    get(): Promise<number>
}

export class StakingValidatorSlashInEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ValidatorSlashInEra'
    }

    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'facf161fd07f9163ac7ab48199356f8083a31ec97fe569c9c5e6fd30fe0ce3ae'
    }

    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    get asV1020(): StakingValidatorSlashInEraStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  All slashing events on validators, mapped by era to the highest slash proportion
 *  and slash value of the era.
 */
export interface StakingValidatorSlashInEraStorageV1020 {
    get(key1: number, key2: Uint8Array): Promise<([number, bigint] | undefined)>
    getAll(): Promise<[number, bigint][]>
    getMany(keys: [number, Uint8Array][]): Promise<([number, bigint] | undefined)[]>
}

export class StakingValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '3f9d4868d833266bf0b4658a23fbe9b816c5eafdf27cd8520d058526e27af4c5'
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     */
    get asV1020(): StakingValidatorsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === 'fa08b7a9cd071c2833987f5924d940cf66842072b85af5ecfc3afcf9fbb2ebd0'
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     */
    get asV2028(): StakingValidatorsStorageV2028 {
        assert(this.isV2028)
        return this as any
    }
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 */
export interface StakingValidatorsStorageV1020 {
    get(key: Uint8Array): Promise<v1020.ValidatorPrefs>
    getAll(): Promise<v1020.ValidatorPrefs[]>
    getMany(keys: Uint8Array[]): Promise<v1020.ValidatorPrefs[]>
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 */
export interface StakingValidatorsStorageV2028 {
    get(key: Uint8Array): Promise<v2028.ValidatorPrefs>
    getAll(): Promise<v2028.ValidatorPrefs[]>
    getMany(keys: Uint8Array[]): Promise<v2028.ValidatorPrefs[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2028.ValidatorPrefs][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2028.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2028.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2028.ValidatorPrefs][]>
}

export class SudoIdentityOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'IdentityOf'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     */
    get isV1030(): boolean {
        return this.getTypeHash() === '316d54af8b462c02fdc77139e35592fccf3620b62b4bcfa5a7548db3fee8f8da'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     */
    get asV1030(): SudoIdentityOfStorageV1030 {
        assert(this.isV1030)
        return this as any
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     */
    get isV1032(): boolean {
        return this.getTypeHash() === 'eee9529c5197f7a5f8200e155d78bab0a612de49bd6c8941e539265edf54c3aa'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     */
    get asV1032(): SudoIdentityOfStorageV1032 {
        assert(this.isV1032)
        return this as any
    }
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 */
export interface SudoIdentityOfStorageV1030 {
    get(key: Uint8Array): Promise<(v1030.Registration | undefined)>
    getAll(): Promise<v1030.Registration[]>
    getMany(keys: Uint8Array[]): Promise<(v1030.Registration | undefined)[]>
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 */
export interface SudoIdentityOfStorageV1032 {
    get(key: Uint8Array): Promise<(v1032.Registration | undefined)>
    getAll(): Promise<v1032.Registration[]>
    getMany(keys: Uint8Array[]): Promise<(v1032.Registration | undefined)[]>
}

export class SudoKeyStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'Key'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV1020(): SudoKeyStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV1020 {
    get(): Promise<Uint8Array>
}

export class SudoNameOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'NameOf'
    }

    /**
     *  The lookup table for names.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '2057524b406c0da066a71270ca14868d7d6ec1450784f1c659ab6e5726329a76'
    }

    /**
     *  The lookup table for names.
     */
    get asV1020(): SudoNameOfStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The lookup table for names.
 */
export interface SudoNameOfStorageV1020 {
    get(key: Uint8Array): Promise<([Uint8Array, bigint] | undefined)>
    getAll(): Promise<[Uint8Array, bigint][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, bigint] | undefined)[]>
}

export class SudoRegistrarsStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'Registrars'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get isV1030(): boolean {
        return this.getTypeHash() === 'd53feea500c88336983c65706eeb51794b1fc991a17d6d33663d49aeb47b12b6'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get asV1030(): SudoRegistrarsStorageV1030 {
        assert(this.isV1030)
        return this as any
    }
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface SudoRegistrarsStorageV1030 {
    get(): Promise<(v1030.RegistrarInfo | undefined)[]>
}

export class SudoSubsOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'SubsOf'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts together with
     *  their "local" name (i.e. in the context of the identity).
     */
    get isV1030(): boolean {
        return this.getTypeHash() === '013f5d72921b88c5a4cbf7d69462f0a282741ea4aa9c1430a4e8d9c9e8fa9b14'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts together with
     *  their "local" name (i.e. in the context of the identity).
     */
    get asV1030(): SudoSubsOfStorageV1030 {
        assert(this.isV1030)
        return this as any
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     */
    get isV1031(): boolean {
        return this.getTypeHash() === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     */
    get asV1031(): SudoSubsOfStorageV1031 {
        assert(this.isV1031)
        return this as any
    }
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts together with
 *  their "local" name (i.e. in the context of the identity).
 */
export interface SudoSubsOfStorageV1030 {
    get(key: Uint8Array): Promise<[bigint, [Uint8Array, v1030.Data][]]>
    getAll(): Promise<[bigint, [Uint8Array, v1030.Data][]][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, [Uint8Array, v1030.Data][]][]>
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 */
export interface SudoSubsOfStorageV1031 {
    get(key: Uint8Array): Promise<[bigint, Uint8Array[]]>
    getAll(): Promise<[bigint, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, Uint8Array[]][]>
}

export class SudoSuperOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'SuperOf'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get isV1031(): boolean {
        return this.getTypeHash() === '3e2404306f316847b5946856f8222df193ecb9ace5e509cd9f8808145fd9b792'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get asV1031(): SudoSuperOfStorageV1031 {
        assert(this.isV1031)
        return this as any
    }
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface SudoSuperOfStorageV1031 {
    get(key: Uint8Array): Promise<([Uint8Array, v1031.Data] | undefined)>
    getAll(): Promise<[Uint8Array, v1031.Data][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, v1031.Data] | undefined)[]>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '2208f857b7cd6fecf78ca393cf3d17ec424773727d0028f07c9f0dc608fc1b7a'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV1050(): SystemAccountStorageV1050 {
        assert(this.isV1050)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV2025(): boolean {
        return this.getTypeHash() === 'eb40f1d91f26d72e29c60e034d53a72b9b529014c7e108f422d8ad5f03f0c902'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV2025(): SystemAccountStorageV2025 {
        assert(this.isV2025)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === '73070b537f1805475b37167271b33ac7fd6ffad8ba62da08bc14937a017b8bb2'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV2028(): SystemAccountStorageV2028 {
        assert(this.isV2028)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV2030(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV2030(): SystemAccountStorageV2030 {
        assert(this.isV2030)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === 'd6b7a816e0cf6dc8f60cb2bd55c5c5ae7ad928521a6e98aafbe6e954f5c54878'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV9420(): SystemAccountStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV1050 {
    get(key: Uint8Array): Promise<v1050.AccountInfo>
    getAll(): Promise<v1050.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v1050.AccountInfo[]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV2025 {
    get(key: Uint8Array): Promise<v2025.AccountInfo>
    getAll(): Promise<v2025.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v2025.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2025.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2025.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2025.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2025.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV2028 {
    get(key: Uint8Array): Promise<v2028.AccountInfo>
    getAll(): Promise<v2028.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v2028.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2028.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2028.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2028.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2028.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV2030 {
    get(key: Uint8Array): Promise<v2030.AccountInfo>
    getAll(): Promise<v2030.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v2030.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2030.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2030.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2030.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2030.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV9420 {
    get(key: Uint8Array): Promise<v9420.AccountInfo>
    getAll(): Promise<v9420.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v9420.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9420.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9420.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9420.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9420.AccountInfo][]>
}

export class SystemAccountNonceStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AccountNonce'
    }

    /**
     *  Extrinsics nonce for accounts.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  Extrinsics nonce for accounts.
     */
    get asV1020(): SystemAccountNonceStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Extrinsics nonce for accounts.
 */
export interface SystemAccountNonceStorageV1020 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
}

export class SystemAllExtrinsicsLenStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AllExtrinsicsLen'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asV1020(): SystemAllExtrinsicsLenStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageV1020 {
    get(): Promise<(number | undefined)>
}

export class SystemAllExtrinsicsWeightStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AllExtrinsicsWeight'
    }

    /**
     *  Total weight for all extrinsics put together, for the current block.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total weight for all extrinsics put together, for the current block.
     */
    get asV1020(): SystemAllExtrinsicsWeightStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Total weight for all extrinsics put together, for the current block.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
    }

    /**
     *  Total weight for all extrinsics put together, for the current block.
     */
    get asV1058(): SystemAllExtrinsicsWeightStorageV1058 {
        assert(this.isV1058)
        return this as any
    }
}

/**
 *  Total weight for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsWeightStorageV1020 {
    get(): Promise<(number | undefined)>
}

/**
 *  Total weight for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsWeightStorageV1058 {
    get(): Promise<(bigint | undefined)>
}

export class SystemBlockHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockHash'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asV1020(): SystemBlockHashStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageV1020 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
}

export class SystemBlockWeightStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockWeight'
    }

    /**
     *  The current weight for the block.
     */
    get isV2005(): boolean {
        return this.getTypeHash() === 'a48e4a92883111e45a4df82c24772ca4f3cf68ad664cd5f82e79bf2fa09efa46'
    }

    /**
     *  The current weight for the block.
     */
    get asV2005(): SystemBlockWeightStorageV2005 {
        assert(this.isV2005)
        return this as any
    }

    /**
     *  The current weight for the block.
     */
    get isV2027(): boolean {
        return this.getTypeHash() === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
    }

    /**
     *  The current weight for the block.
     */
    get asV2027(): SystemBlockWeightStorageV2027 {
        assert(this.isV2027)
        return this as any
    }

    /**
     *  The current weight for the block.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === 'd35f09c6f3fd2f6e93d9006f364b5b6e91ce1207594e51247070364731dba424'
    }

    /**
     *  The current weight for the block.
     */
    get asV9291(): SystemBlockWeightStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  The current weight for the block.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '1b5ecb31f1f780ce8b20535384ce7b3159da495c9f1cbf13a2f253ccb02ae175'
    }

    /**
     *  The current weight for the block.
     */
    get asV9320(): SystemBlockWeightStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV2005 {
    get(): Promise<v2005.ExtrinsicsWeight>
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV2027 {
    get(): Promise<v2027.ConsumedWeight>
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV9291 {
    get(): Promise<v9291.PerDispatchClass>
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV9320 {
    get(): Promise<v9320.PerDispatchClass>
}

export class SystemDigestStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Digest'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '1d49db8c467b8ce13c8d27dfc1293265e11d9e73050b590ac44aa31ca0eec876'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV1020(): SystemDigestStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '08ab0f1eb08eb281a0be5123646d1a04bf4254218b3b8617ed26e880f8eaa52f'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV9111(): SystemDigestStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV9130(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV9130(): SystemDigestStorageV9130 {
        assert(this.isV9130)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV1020 {
    get(): Promise<v1020.DigestOf>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV9111 {
    get(): Promise<v9111.Digest>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV9130 {
    get(): Promise<v9130.Digest>
}

export class SystemEventCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventCount'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asV1020(): SystemEventCountStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageV1020 {
    get(): Promise<number>
}

export class SystemEventTopicsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventTopics'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  The first key serves no purpose. This field is declared as double_map just
     *  for convenience of using `remove_prefix`.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '585b911b33f5f6144032aab18de940e63106098b8714e2d320c6c6bb9b1d67d8'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  The first key serves no purpose. This field is declared as double_map just
     *  for convenience of using `remove_prefix`.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get asV1020(): SystemEventTopicsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get isV1038(): boolean {
        return this.getTypeHash() === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get asV1038(): SystemEventTopicsStorageV1038 {
        assert(this.isV1038)
        return this as any
    }
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  The first key serves no purpose. This field is declared as double_map just
 *  for convenience of using `remove_prefix`.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface SystemEventTopicsStorageV1020 {
    get(key1: null, key2: Uint8Array): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: [null, Uint8Array][]): Promise<[number, number][][]>
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface SystemEventTopicsStorageV1038 {
    get(key: Uint8Array): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: Uint8Array[]): Promise<[number, number][][]>
}

export class SystemEventsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Events'
    }

    /**
     *  Events deposited for the current block.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '53e23414bf58dfbfe5970f26e1c2f14430f991ae9ff8b31b1ebd4a09b151dd33'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV1020(): SystemEventsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV1022(): boolean {
        return this.getTypeHash() === '4f7b600f0004a64e3264707628e4ca1b2fd8434f3b11f1a4f13266aee7c4d45c'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV1022(): SystemEventsStorageV1022 {
        assert(this.isV1022)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV1027(): boolean {
        return this.getTypeHash() === 'b74d0f1307e6714806170b25d69ea00a94b5ef2c2252155fe108b8aea5f304ae'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV1027(): SystemEventsStorageV1027 {
        assert(this.isV1027)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV1029(): boolean {
        return this.getTypeHash() === 'dea6fa4d0515991ff55990fbf0555db0f82a4ad3c8cc80bb7c4aedf6d7542d32'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV1029(): SystemEventsStorageV1029 {
        assert(this.isV1029)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV1030(): boolean {
        return this.getTypeHash() === 'd91432be9d7246dba612ebd59750b2fe77fd25f8755c37a532d2f66405ac5998'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV1030(): SystemEventsStorageV1030 {
        assert(this.isV1030)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV1031(): boolean {
        return this.getTypeHash() === '296a283880d0a4a982d6faae6198de5f0055a9b67e5dc7bead47253b82c0e546'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV1031(): SystemEventsStorageV1031 {
        assert(this.isV1031)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV1032(): boolean {
        return this.getTypeHash() === '3fe74e48177b83d89eb48109475b4e0f87970709d747e91d678ee20775ee112e'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV1032(): SystemEventsStorageV1032 {
        assert(this.isV1032)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV1038(): boolean {
        return this.getTypeHash() === '87d8ac71a1b029c839e17c725125b5b85069d599fb6d7c90fc88265c6b6167b1'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV1038(): SystemEventsStorageV1038 {
        assert(this.isV1038)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === 'f454cbc436e6c17edb4685416485dcb0dd276866923ea8fcee52fb70d0848418'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV1040(): SystemEventsStorageV1040 {
        assert(this.isV1040)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV1042(): boolean {
        return this.getTypeHash() === '562d8b49a5f4141bafad565298c7e8ee4329a4162fddd7405724bfe2504bcbff'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV1042(): SystemEventsStorageV1042 {
        assert(this.isV1042)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV1045(): boolean {
        return this.getTypeHash() === '7a4e45a763300140e2532d7deb4c5601588d90ce58ec529a359b23b26009ef9a'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV1045(): SystemEventsStorageV1045 {
        assert(this.isV1045)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '35f2ea1334faa6705413a2cfbf8a5548d12a4ffaa8b3e51f433b541ba3631bb7'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV1050(): SystemEventsStorageV1050 {
        assert(this.isV1050)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV1051(): boolean {
        return this.getTypeHash() === '26e7865f2c60cfcc31ac49755f8f905fea3d20a1d8cbaefd5fbb9f0f8cee4771'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV1051(): SystemEventsStorageV1051 {
        assert(this.isV1051)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === '54c63a1fc7690f0a112b814a7bccfd61c7008a270fcdd72a223595356ba0f0c1'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV1058(): SystemEventsStorageV1058 {
        assert(this.isV1058)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV1062(): boolean {
        return this.getTypeHash() === 'c68e229b65dbba6e6fca9c8317eb8245069a05bbf5d1537e82624b08a0a6f31e'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV1062(): SystemEventsStorageV1062 {
        assert(this.isV1062)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV2005(): boolean {
        return this.getTypeHash() === '508a31880545953db03710faa8d825f82a97e361f119d24f33aea5b7f57f9518'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV2005(): SystemEventsStorageV2005 {
        assert(this.isV2005)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV2007(): boolean {
        return this.getTypeHash() === '12e743130a32d0cfaf75bf85fb20864f46a451ded9fe51682c7a5b719d13b2cc'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV2007(): SystemEventsStorageV2007 {
        assert(this.isV2007)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV2008(): boolean {
        return this.getTypeHash() === 'cb9f4f65e9bd3094e028731f0e20b5df1f9219f268cc297891635e2dc43a1f2d'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV2008(): SystemEventsStorageV2008 {
        assert(this.isV2008)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV2011(): boolean {
        return this.getTypeHash() === '2a07ca11c94f2b3a892c1563e2112bb18ecfea7e652b289fb12368beb716c2e5'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV2011(): SystemEventsStorageV2011 {
        assert(this.isV2011)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV2015(): boolean {
        return this.getTypeHash() === '0f66c5dd7351c510868100b7ea54e3ffe478d9fb5ae49c35059aca4b2fa60b33'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV2015(): SystemEventsStorageV2015 {
        assert(this.isV2015)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV2023(): boolean {
        return this.getTypeHash() === 'ba21d40f3844b968ea97892f8a17b2a2953df9c5e076853b0dc97da9a6caa1c0'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV2023(): SystemEventsStorageV2023 {
        assert(this.isV2023)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV2024(): boolean {
        return this.getTypeHash() === '444e36a1558ccbda4753d43b59a13d6c815886ed2525fba685cbe19face62f5e'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV2024(): SystemEventsStorageV2024 {
        assert(this.isV2024)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV2025(): boolean {
        return this.getTypeHash() === '92c4367cb7d981a01fae577fa9225b658ffe9df33f819f675e2a8c437014e00f'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV2025(): SystemEventsStorageV2025 {
        assert(this.isV2025)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV2027(): boolean {
        return this.getTypeHash() === 'a04c5cfb4fbf70d9fcb1dcbadf44b219d69d8cd87e4fbc0b6a3956372e19bccb'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV2027(): SystemEventsStorageV2027 {
        assert(this.isV2027)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === '401139cf2663840826d418b3ee82cdbfe8cc42c9a663ded001f4757ae2dec72f'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV2028(): SystemEventsStorageV2028 {
        assert(this.isV2028)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV2029(): boolean {
        return this.getTypeHash() === '1a61a53a0cb049f374f14005a7645877af89538f7326a9a24632c7577b9e12d7'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV2029(): SystemEventsStorageV2029 {
        assert(this.isV2029)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV2030(): boolean {
        return this.getTypeHash() === '7e860044fee0f136abffb40cd1f5701913647662dbd4c80e425203090d17faf1'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV2030(): SystemEventsStorageV2030 {
        assert(this.isV2030)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'f424691663df1c1d72eeb6017544443766d3e556f6792b5e03b5697138cb7056'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV9010(): SystemEventsStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV9040(): boolean {
        return this.getTypeHash() === 'aee7fa8dea48b3aea315b2ac4dcead4f8307b601cbf199c06770c24779dafe1f'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV9040(): SystemEventsStorageV9040 {
        assert(this.isV9040)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '43bbc1c171973c5a6ca6b80217b066619e2e53541280dd3d19ab619eb9f61001'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV9050(): SystemEventsStorageV9050 {
        assert(this.isV9050)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === '9ef516bd40df41fee394737bbf8304a90f0db617d924e6ef807fe7f432fdb1cf'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV9080(): SystemEventsStorageV9080 {
        assert(this.isV9080)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV9090(): boolean {
        return this.getTypeHash() === 'c3c47ccaf1c8a8702109566a6c71d6cf8fd806c663f8397c3088047e825912ea'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV9090(): SystemEventsStorageV9090 {
        assert(this.isV9090)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV9100(): boolean {
        return this.getTypeHash() === '389ada7de210e11ac47ce2c14afde808d9da44b528a3d84ee1ac32bead12aede'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV9100(): SystemEventsStorageV9100 {
        assert(this.isV9100)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '1f9f4a18fcac9d31023dd1780ea3121b1cc7cca6c45bd7854fe9990ef8426fe7'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV9111(): SystemEventsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV9122(): boolean {
        return this.getTypeHash() === 'c62b00f09ca3a563abf5665cadbdc8d8da3ea0c3bfe611a8c200741641e664bd'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV9122(): SystemEventsStorageV9122 {
        assert(this.isV9122)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV9130(): boolean {
        return this.getTypeHash() === 'e7a64cc35acffb2857c723f89aa6af695b383e38bbb84ab96a2a0b5225ae5016'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV9130(): SystemEventsStorageV9130 {
        assert(this.isV9130)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === '11846065e79794b1d4e48fc5e5484c56540b90704a03d7b2386b9ffd3f1b5d39'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV9160(): SystemEventsStorageV9160 {
        assert(this.isV9160)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === 'fdec185d48f4f9aba2ba468d715ff4006f4037810e0f490d472a464cecda0636'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV9170(): SystemEventsStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === 'c420170629db0ee81118ba7a933e7c83477953ed8b1dbc2873b677d9c7b3bac4'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV9180(): SystemEventsStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === 'd264ea8aa10c69efd4a55b22b7508d750614152f25ba1081c19d1b96e71e53c8'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV9190(): SystemEventsStorageV9190 {
        assert(this.isV9190)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9200(): boolean {
        return this.getTypeHash() === 'df6a68646dd12291dab01e15a970457f59db73e4176ae5ed8e021b0f62b64cce'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9200(): SystemEventsStorageV9200 {
        assert(this.isV9200)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '9c8d709f4e2f5d36ea3a2242031d5c7b0a6dd9df92375a99207251139eff24b6'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9220(): SystemEventsStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === '0384393627c20b1ed1af15e116674653692d7b1f41f24452606bcb978a2d4116'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9230(): SystemEventsStorageV9230 {
        assert(this.isV9230)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9250(): boolean {
        return this.getTypeHash() === '8ddbfd96598b1429967b2bd45b6b045fb6f6811f22739b767ad64e2e5bae1405'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9250(): SystemEventsStorageV9250 {
        assert(this.isV9250)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9260(): boolean {
        return this.getTypeHash() === 'c24350ea24c23b214b11d40fadcc1e42df9c71517208032ebca3697b4fa0e2a8'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9260(): SystemEventsStorageV9260 {
        assert(this.isV9260)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9271(): boolean {
        return this.getTypeHash() === '9f93b5e97768c79118b6ee79a7654432fff5b694703bc1e646e4f0a9c4886eda'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9271(): SystemEventsStorageV9271 {
        assert(this.isV9271)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === '760b9eb792bce1271f669e4bafc84a5d3ca3cd7a66a3000264f16df40fae0ab9'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9291(): SystemEventsStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '5a6651c9aa742a18642e510ae2425c8308687f1919c46c1221490012acb9bedb'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9300(): SystemEventsStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === 'abc3d967db13da8f75ba1f1c5b5aa2a6ee83b29daea8bd063264f47cab149f24'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9320(): SystemEventsStorageV9320 {
        assert(this.isV9320)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === '63914855e478ccaee335bae23d9595627ec1557af8d5fe021cf5a798cc506c2e'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9340(): SystemEventsStorageV9340 {
        assert(this.isV9340)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9350(): boolean {
        return this.getTypeHash() === 'a2ca5b91b094656a40df312d72638540cea91bc5ad9d47929ff5e280df7594a3'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9350(): SystemEventsStorageV9350 {
        assert(this.isV9350)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '5fd1b94b1df0e9dc11695ab47b1d25255bafb33625b7730f97ad122cbd34781d'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9370(): SystemEventsStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === '3984d46061d46b5d9f56ab523f99da205528f844b8b5a8c3e45b45fd35be56ec'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9381(): SystemEventsStorageV9381 {
        assert(this.isV9381)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '0b3f7d68f8e4066036b388a7ef100ab3425e6cf892a9fc9e72966bb97abf204b'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9420(): SystemEventsStorageV9420 {
        assert(this.isV9420)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV9430(): boolean {
        return this.getTypeHash() === 'fb8e29b62e7ff0ba34cec413086d8f9ccad12614648e4b92b6ddab7fe575c037'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV9430(): SystemEventsStorageV9430 {
        assert(this.isV9430)
        return this as any
    }
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV1020 {
    get(): Promise<v1020.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV1022 {
    get(): Promise<v1022.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV1027 {
    get(): Promise<v1027.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV1029 {
    get(): Promise<v1029.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV1030 {
    get(): Promise<v1030.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV1031 {
    get(): Promise<v1031.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV1032 {
    get(): Promise<v1032.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV1038 {
    get(): Promise<v1038.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV1040 {
    get(): Promise<v1040.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV1042 {
    get(): Promise<v1042.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV1045 {
    get(): Promise<v1045.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV1050 {
    get(): Promise<v1050.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV1051 {
    get(): Promise<v1051.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV1058 {
    get(): Promise<v1058.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV1062 {
    get(): Promise<v1062.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV2005 {
    get(): Promise<v2005.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV2007 {
    get(): Promise<v2007.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV2008 {
    get(): Promise<v2008.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV2011 {
    get(): Promise<v2011.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV2015 {
    get(): Promise<v2015.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV2023 {
    get(): Promise<v2023.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV2024 {
    get(): Promise<v2024.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV2025 {
    get(): Promise<v2025.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV2027 {
    get(): Promise<v2027.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV2028 {
    get(): Promise<v2028.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV2029 {
    get(): Promise<v2029.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV2030 {
    get(): Promise<v2030.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV9010 {
    get(): Promise<v9010.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV9040 {
    get(): Promise<v9040.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV9050 {
    get(): Promise<v9050.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV9080 {
    get(): Promise<v9080.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV9090 {
    get(): Promise<v9090.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV9100 {
    get(): Promise<v9100.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV9111 {
    get(): Promise<v9111.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV9122 {
    get(): Promise<v9122.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV9130 {
    get(): Promise<v9130.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV9160 {
    get(): Promise<v9160.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV9170 {
    get(): Promise<v9170.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV9180 {
    get(): Promise<v9180.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV9190 {
    get(): Promise<v9190.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9200 {
    get(): Promise<v9200.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9220 {
    get(): Promise<v9220.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9230 {
    get(): Promise<v9230.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9250 {
    get(): Promise<v9250.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9260 {
    get(): Promise<v9260.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9271 {
    get(): Promise<v9271.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9291 {
    get(): Promise<v9291.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9300 {
    get(): Promise<v9300.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9320 {
    get(): Promise<v9320.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9340 {
    get(): Promise<v9340.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9350 {
    get(): Promise<v9350.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9370 {
    get(): Promise<v9370.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9381 {
    get(): Promise<v9381.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9420 {
    get(): Promise<v9420.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV9430 {
    get(): Promise<v9430.EventRecord[]>
}

export class SystemExecutionPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExecutionPhase'
    }

    /**
     *  The execution phase of the block.
     */
    get isV1055(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asV1055(): SystemExecutionPhaseStorageV1055 {
        assert(this.isV1055)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageV1055 {
    get(): Promise<(v1055.Phase | undefined)>
}

export class SystemExtrinsicCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicCount'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asV1020(): SystemExtrinsicCountStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageV1020 {
    get(): Promise<(number | undefined)>
}

export class SystemExtrinsicDataStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicData'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asV1020(): SystemExtrinsicDataStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageV1020 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
}

export class SystemExtrinsicsRootStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicsRoot'
    }

    /**
     *  Extrinsics root of the current block, also part of the block header.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Extrinsics root of the current block, also part of the block header.
     */
    get asV1020(): SystemExtrinsicsRootStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Extrinsics root of the current block, also part of the block header.
 */
export interface SystemExtrinsicsRootStorageV1020 {
    get(): Promise<Uint8Array>
}

export class SystemLastRuntimeUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'LastRuntimeUpgrade'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get isV1053(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asV1053(): SystemLastRuntimeUpgradeStorageV1053 {
        assert(this.isV1053)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageV1053 {
    get(): Promise<(v1053.LastRuntimeUpgradeInfo | undefined)>
}

export class SystemNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Number'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asV1020(): SystemNumberStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageV1020 {
    get(): Promise<number>
}

export class SystemParentHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ParentHash'
    }

    /**
     *  Hash of the previous block.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asV1020(): SystemParentHashStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageV1020 {
    get(): Promise<Uint8Array>
}

export class SystemRuntimeUpgradedStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'RuntimeUpgraded'
    }

    /**
     *  A bool to track if the runtime was upgraded last block.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  A bool to track if the runtime was upgraded last block.
     */
    get asV1050(): SystemRuntimeUpgradedStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  A bool to track if the runtime was upgraded last block.
 */
export interface SystemRuntimeUpgradedStorageV1050 {
    get(): Promise<boolean>
}

export class SystemUpgradedToDualRefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToDualRefCount'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
     *  (default) if not.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
     *  (default) if not.
     */
    get asV2028(): SystemUpgradedToDualRefCountStorageV2028 {
        assert(this.isV2028)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToDualRefCountStorageV2028 {
    get(): Promise<boolean>
}

export class SystemUpgradedToTripleRefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToTripleRefCount'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get isV2030(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asV2030(): SystemUpgradedToTripleRefCountStorageV2030 {
        assert(this.isV2030)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageV2030 {
    get(): Promise<boolean>
}

export class SystemUpgradedToU32RefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToU32RefCount'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get isV2025(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asV2025(): SystemUpgradedToU32RefCountStorageV2025 {
        assert(this.isV2025)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageV2025 {
    get(): Promise<boolean>
}

export class TechnicalCommitteeMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV9111(): TechnicalCommitteeMembersStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface TechnicalCommitteeMembersStorageV9111 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV9111(): TechnicalCommitteePrimeStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface TechnicalCommitteePrimeStorageV9111 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TechnicalCommitteeProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV9111(): TechnicalCommitteeProposalCountStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface TechnicalCommitteeProposalCountStorageV9111 {
    get(): Promise<number>
}

export class TechnicalCommitteeProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '54e55db1bed5771689c23398470e3d79c164300b3002e905baf8a07324946142'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9111(): TechnicalCommitteeProposalOfStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9122(): boolean {
        return this.getTypeHash() === '35e9c06eaf393488c6b16cf365c09693bf1c81cc6d198b6016c29648cb8b11db'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9122(): TechnicalCommitteeProposalOfStorageV9122 {
        assert(this.isV9122)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9130(): boolean {
        return this.getTypeHash() === '000fa9eac9f34fd52e1de16af6c8184e689b16aff5b69e5b770310c6592b9a23'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9130(): TechnicalCommitteeProposalOfStorageV9130 {
        assert(this.isV9130)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === 'ae191f57edfafa0ed77684f6c6956e661698f7626fcceabc35fc02aa204fc327'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9160(): TechnicalCommitteeProposalOfStorageV9160 {
        assert(this.isV9160)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === '92131b74d89cee349edae227d67d4039f396e38796421ef6ccad698229d1be87'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9170(): TechnicalCommitteeProposalOfStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '75d269266869aab19a7c849bd16e82439d759218a7ceb76d9d44ca8913eac77b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9180(): TechnicalCommitteeProposalOfStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === 'ad90492cf87d0e7973eb29afcc4224fdcd5cea7edbc9f874a78e09ffb7af764a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9190(): TechnicalCommitteeProposalOfStorageV9190 {
        assert(this.isV9190)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '4364e985a64c3f6addf377d90f061349553d92fcbc29839df8b7cde1ec346b0c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9220(): TechnicalCommitteeProposalOfStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === '60a712e8f852a3af336091a63ce735a781e9f17a09e4fb3ea560e93a76c19d2e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9230(): TechnicalCommitteeProposalOfStorageV9230 {
        assert(this.isV9230)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9250(): boolean {
        return this.getTypeHash() === 'c62c655cbb15038afffc766086c6f698f366a8695bacaa50b3b5b2d97d4b89f5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9250(): TechnicalCommitteeProposalOfStorageV9250 {
        assert(this.isV9250)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9271(): boolean {
        return this.getTypeHash() === 'b6f7b824ac82eac6e00f10809e508dfaacd22dda3aeafc8c9374020bd69d27ad'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9271(): TechnicalCommitteeProposalOfStorageV9271 {
        assert(this.isV9271)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === '15ce1541499aecffbe2bf8eeafc64023633a5d282a468972bd6c44aa77b52ce3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9291(): TechnicalCommitteeProposalOfStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '4489558a261f014c524a3fa533244e852a4234f4db9aba95f960d069aa1a2db7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9300(): TechnicalCommitteeProposalOfStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === 'e264f3acf17bae2089248c1b5be4b79c3766ff552e8565a925e0bceaa16c973b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9320(): TechnicalCommitteeProposalOfStorageV9320 {
        assert(this.isV9320)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'bac834a064b49e90d7838a7a187b8909126f18547277b5d8053bc5274c87c1c7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9340(): TechnicalCommitteeProposalOfStorageV9340 {
        assert(this.isV9340)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9350(): boolean {
        return this.getTypeHash() === '325aefbc233caff71e364b31bec3a78cdea40e407dacdb91f8743a0cd5529b7d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9350(): TechnicalCommitteeProposalOfStorageV9350 {
        assert(this.isV9350)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '02ea96d1290feb9231e11e833e8eb92c5f4c7bf8bc9033921415b61ac5e1e4b5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9370(): TechnicalCommitteeProposalOfStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === 'ee93cb7fd8840a07d97e1ae677ebb2b5785cefc002cf463089a970a4ada757f3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9381(): TechnicalCommitteeProposalOfStorageV9381 {
        assert(this.isV9381)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9111 {
    get(key: Uint8Array): Promise<(v9111.Call | undefined)>
    getAll(): Promise<v9111.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9111.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9111.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9111.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9111.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9111.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9122 {
    get(key: Uint8Array): Promise<(v9122.Call | undefined)>
    getAll(): Promise<v9122.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9122.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9122.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9122.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9122.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9122.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9130 {
    get(key: Uint8Array): Promise<(v9130.Call | undefined)>
    getAll(): Promise<v9130.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9130.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9130.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9130.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9130.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9130.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9160 {
    get(key: Uint8Array): Promise<(v9160.Call | undefined)>
    getAll(): Promise<v9160.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9160.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9160.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9160.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9160.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9160.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9170 {
    get(key: Uint8Array): Promise<(v9170.Call | undefined)>
    getAll(): Promise<v9170.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9170.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9170.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9170.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9170.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9170.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9180 {
    get(key: Uint8Array): Promise<(v9180.Call | undefined)>
    getAll(): Promise<v9180.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9180.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9180.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9180.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9180.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9180.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9190 {
    get(key: Uint8Array): Promise<(v9190.Call | undefined)>
    getAll(): Promise<v9190.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9190.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9190.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9190.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9190.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9190.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9220 {
    get(key: Uint8Array): Promise<(v9220.Call | undefined)>
    getAll(): Promise<v9220.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9220.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9220.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9220.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9220.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9220.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9230 {
    get(key: Uint8Array): Promise<(v9230.Call | undefined)>
    getAll(): Promise<v9230.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9230.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9230.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9230.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9230.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9230.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9250 {
    get(key: Uint8Array): Promise<(v9250.Call | undefined)>
    getAll(): Promise<v9250.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9250.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9250.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9250.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9250.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9250.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9271 {
    get(key: Uint8Array): Promise<(v9271.Call | undefined)>
    getAll(): Promise<v9271.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9271.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9271.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9271.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9271.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9271.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9291 {
    get(key: Uint8Array): Promise<(v9291.Call | undefined)>
    getAll(): Promise<v9291.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9291.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9291.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9291.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9291.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9291.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9300 {
    get(key: Uint8Array): Promise<(v9300.Call | undefined)>
    getAll(): Promise<v9300.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9300.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9300.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9300.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9300.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9300.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9320 {
    get(key: Uint8Array): Promise<(v9320.Call | undefined)>
    getAll(): Promise<v9320.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9320.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9320.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9320.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9320.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9320.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9340 {
    get(key: Uint8Array): Promise<(v9340.Call | undefined)>
    getAll(): Promise<v9340.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9340.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9340.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9340.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9340.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9340.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9350 {
    get(key: Uint8Array): Promise<(v9350.Call | undefined)>
    getAll(): Promise<v9350.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9350.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9350.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9350.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9350.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9350.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9370 {
    get(key: Uint8Array): Promise<(v9370.Call | undefined)>
    getAll(): Promise<v9370.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9370.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9381 {
    get(key: Uint8Array): Promise<(v9381.Call | undefined)>
    getAll(): Promise<v9381.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9381.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9381.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9381.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9381.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9381.Call][]>
}

export class TechnicalCommitteeProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV9111(): TechnicalCommitteeProposalsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface TechnicalCommitteeProposalsStorageV9111 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteeVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV9111(): TechnicalCommitteeVotingStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface TechnicalCommitteeVotingStorageV9111 {
    get(key: Uint8Array): Promise<(v9111.Votes | undefined)>
    getAll(): Promise<v9111.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v9111.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9111.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9111.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9111.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9111.Votes][]>
}

export class TechnicalMembershipMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalMembership'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get asV9111(): TechnicalMembershipMembersStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface TechnicalMembershipMembersStorageV9111 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalMembershipPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalMembership'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The current prime member, if one exists.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The current prime member, if one exists.
     */
    get asV9111(): TechnicalMembershipPrimeStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The current prime member, if one exists.
 */
export interface TechnicalMembershipPrimeStorageV9111 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TimestampDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'DidUpdate'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asV1020(): TimestampDidUpdateStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageV1020 {
    get(): Promise<boolean>
}

export class TimestampNowStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'Now'
    }

    /**
     *  Current time for the current block.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asV1020(): TimestampNowStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageV1020 {
    get(): Promise<bigint>
}

export class TipsReasonsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tips'
    }

    protected getName() {
        return 'Reasons'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV9111(): TipsReasonsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TipsReasonsStorageV9111 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class TipsTipsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tips'
    }

    protected getName() {
        return 'Tips'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV9111(): TipsTipsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsTipsStorageV9111 {
    get(key: Uint8Array): Promise<(v9111.OpenTip | undefined)>
    getAll(): Promise<v9111.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v9111.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9111.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9111.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9111.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9111.OpenTip][]>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isV1052(): boolean {
        return this.getTypeHash() === '3c9260c078e57deb94e3d10dca1995a3263c48d53634c311a3537412486bb35e'
    }

    get asV1052(): TransactionPaymentNextFeeMultiplierStorageV1052 {
        assert(this.isV1052)
        return this as any
    }

    get isV1058(): boolean {
        return this.getTypeHash() === '8840628264db1877ef5c3718a00459d4b519de0922f813836237f71320a25aa6'
    }

    get asV1058(): TransactionPaymentNextFeeMultiplierStorageV1058 {
        assert(this.isV1058)
        return this as any
    }

    get isV9111(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV9111(): TransactionPaymentNextFeeMultiplierStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageV1052 {
    get(): Promise<bigint>
}

export interface TransactionPaymentNextFeeMultiplierStorageV1058 {
    get(): Promise<bigint>
}

export interface TransactionPaymentNextFeeMultiplierStorageV9111 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isV2011(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    get asV2011(): TransactionPaymentStorageVersionStorageV2011 {
        assert(this.isV2011)
        return this as any
    }

    get isV9111(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asV9111(): TransactionPaymentStorageVersionStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageV2011 {
    get(): Promise<v2011.Releases>
}

export interface TransactionPaymentStorageVersionStorageV9111 {
    get(): Promise<v9111.Type_199>
}

export class TreasuryApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Approvals'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get asV1020(): TreasuryApprovalsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface TreasuryApprovalsStorageV1020 {
    get(): Promise<number[]>
}

export class TreasuryBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Bounties'
    }

    /**
     *  Bounties that have been made.
     */
    get isV2025(): boolean {
        return this.getTypeHash() === 'e276510ea57efb7a40938452ef5d335bafe4cc416f094226131c0321c9bb6599'
    }

    /**
     *  Bounties that have been made.
     */
    get asV2025(): TreasuryBountiesStorageV2025 {
        assert(this.isV2025)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface TreasuryBountiesStorageV2025 {
    get(key: number): Promise<(v2025.Bounty | undefined)>
    getAll(): Promise<v2025.Bounty[]>
    getMany(keys: number[]): Promise<(v2025.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v2025.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v2025.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v2025.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v2025.Bounty][]>
}

export class TreasuryBountyApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'BountyApprovals'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get isV2025(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get asV2025(): TreasuryBountyApprovalsStorageV2025 {
        assert(this.isV2025)
        return this as any
    }
}

/**
 *  Bounty indices that have been approved but not yet funded.
 */
export interface TreasuryBountyApprovalsStorageV2025 {
    get(): Promise<number[]>
}

export class TreasuryBountyCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'BountyCount'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get isV2025(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get asV2025(): TreasuryBountyCountStorageV2025 {
        assert(this.isV2025)
        return this as any
    }
}

/**
 *  Number of bounty proposals that have been made.
 */
export interface TreasuryBountyCountStorageV2025 {
    get(): Promise<number>
}

export class TreasuryBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'BountyDescriptions'
    }

    /**
     *  The description of each bounty.
     */
    get isV2025(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV2025(): TreasuryBountyDescriptionsStorageV2025 {
        assert(this.isV2025)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface TreasuryBountyDescriptionsStorageV2025 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class TreasuryDeactivatedStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Deactivated'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get asV9370(): TreasuryDeactivatedStorageV9370 {
        assert(this.isV9370)
        return this as any
    }
}

/**
 *  The amount which has been reported as inactive to Currency.
 */
export interface TreasuryDeactivatedStorageV9370 {
    get(): Promise<bigint>
}

export class TreasuryInactiveStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Inactive'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get asV9340(): TreasuryInactiveStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  The amount which has been reported as inactive to Currency.
 */
export interface TreasuryInactiveStorageV9340 {
    get(): Promise<bigint>
}

export class TreasuryProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Number of proposals that have been made.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of proposals that have been made.
     */
    get asV1020(): TreasuryProposalCountStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Number of proposals that have been made.
 */
export interface TreasuryProposalCountStorageV1020 {
    get(): Promise<number>
}

export class TreasuryProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  Proposals that have been made.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV1020(): TreasuryProposalsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV1020 {
    get(key: number): Promise<(v1020.TreasuryProposal | undefined)>
    getAll(): Promise<v1020.TreasuryProposal[]>
    getMany(keys: number[]): Promise<(v1020.TreasuryProposal | undefined)[]>
}

export class TreasuryReasonsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Reasons'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get isV1038(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV1038(): TreasuryReasonsStorageV1038 {
        assert(this.isV1038)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TreasuryReasonsStorageV1038 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class TreasuryTipsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Tips'
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV1038(): boolean {
        return this.getTypeHash() === '04a94fc868891debd43b4077251f040bf182373364459a957722242a70afa20d'
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV1038(): TreasuryTipsStorageV1038 {
        assert(this.isV1038)
        return this as any
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV2013(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV2013(): TreasuryTipsStorageV2013 {
        assert(this.isV2013)
        return this as any
    }
}

/**
 *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TreasuryTipsStorageV1038 {
    get(key: Uint8Array): Promise<(v1038.OpenTip | undefined)>
    getAll(): Promise<v1038.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v1038.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1038.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1038.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1038.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1038.OpenTip][]>
}

/**
 *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TreasuryTipsStorageV2013 {
    get(key: Uint8Array): Promise<(v2013.OpenTip | undefined)>
    getAll(): Promise<v2013.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v2013.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2013.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2013.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2013.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2013.OpenTip][]>
}

export class UmpCounterForOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'CounterForOverweight'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9381(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9381(): UmpCounterForOverweightStorageV9381 {
        assert(this.isV9381)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface UmpCounterForOverweightStorageV9381 {
    get(): Promise<number>
}

export class UmpNeedsDispatchStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'NeedsDispatch'
    }

    /**
     *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
     * 
     *  Invariant:
     *  - The set of items from this vector should be exactly the set of the keys in
     *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
     * 
     *  Invariant:
     *  - The set of items from this vector should be exactly the set of the keys in
     *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
     */
    get asV9010(): UmpNeedsDispatchStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The ordered list of `ParaId`s that have a `RelayDispatchQueue` entry.
 * 
 *  Invariant:
 *  - The set of items from this vector should be exactly the set of the keys in
 *    `RelayDispatchQueues` and `RelayDispatchQueueSize`.
 */
export interface UmpNeedsDispatchStorageV9010 {
    get(): Promise<number[]>
}

export class UmpNextDispatchRoundStartWithStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'NextDispatchRoundStartWith'
    }

    /**
     *  This is the para that gets will get dispatched first during the next upward dispatchable queue
     *  execution round.
     * 
     *  Invariant:
     *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  This is the para that gets will get dispatched first during the next upward dispatchable queue
     *  execution round.
     * 
     *  Invariant:
     *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
     */
    get asV9010(): UmpNextDispatchRoundStartWithStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  This is the para that gets will get dispatched first during the next upward dispatchable queue
 *  execution round.
 * 
 *  Invariant:
 *  - If `Some(para)`, then `para` must be present in `NeedsDispatch`.
 */
export interface UmpNextDispatchRoundStartWithStorageV9010 {
    get(): Promise<(number | undefined)>
}

export class UmpOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These messages stay there until manually dispatched.
     */
    get isV9100(): boolean {
        return this.getTypeHash() === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These messages stay there until manually dispatched.
     */
    get asV9100(): UmpOverweightStorageV9100 {
        assert(this.isV9100)
        return this as any
    }
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These messages stay there until manually dispatched.
 */
export interface UmpOverweightStorageV9100 {
    get(key: bigint): Promise<([number, Uint8Array] | undefined)>
    getAll(): Promise<[number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
}

export class UmpOverweightCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'OverweightCount'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
     *  index).
     */
    get isV9100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
     *  index).
     */
    get asV9100(): UmpOverweightCountStorageV9100 {
        assert(this.isV9100)
        return this as any
    }
}

/**
 *  The number of overweight messages ever recorded in `Overweight` (and thus the lowest free
 *  index).
 */
export interface UmpOverweightCountStorageV9100 {
    get(): Promise<bigint>
}

export class UmpRelayDispatchQueueSizeStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'RelayDispatchQueueSize'
    }

    /**
     *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
     * 
     *  First item in the tuple is the count of messages and second
     *  is the total length (in bytes) of the message payloads.
     * 
     *  Note that this is an auxilary mapping: it's possible to tell the byte size and the number of
     *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
     *  loading the whole message queue if only the total size and count are required.
     * 
     *  Invariant:
     *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '11d84eadab69be0e8dde14b70110d550deeab55868bd2bc91f3c1cf340a76ef8'
    }

    /**
     *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
     * 
     *  First item in the tuple is the count of messages and second
     *  is the total length (in bytes) of the message payloads.
     * 
     *  Note that this is an auxilary mapping: it's possible to tell the byte size and the number of
     *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
     *  loading the whole message queue if only the total size and count are required.
     * 
     *  Invariant:
     *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
     */
    get asV9010(): UmpRelayDispatchQueueSizeStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  Size of the dispatch queues. Caches sizes of the queues in `RelayDispatchQueue`.
 * 
 *  First item in the tuple is the count of messages and second
 *  is the total length (in bytes) of the message payloads.
 * 
 *  Note that this is an auxilary mapping: it's possible to tell the byte size and the number of
 *  messages only looking at `RelayDispatchQueues`. This mapping is separate to avoid the cost of
 *  loading the whole message queue if only the total size and count are required.
 * 
 *  Invariant:
 *  - The set of keys should exactly match the set of keys of `RelayDispatchQueues`.
 */
export interface UmpRelayDispatchQueueSizeStorageV9010 {
    get(key: number): Promise<[number, number]>
    getAll(): Promise<[number, number][]>
    getMany(keys: number[]): Promise<[number, number][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, number]][]>
    getPairs(key: number): Promise<[k: number, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, number]][]>
}

export class UmpRelayDispatchQueuesStorage extends StorageBase {
    protected getPrefix() {
        return 'Ump'
    }

    protected getName() {
        return 'RelayDispatchQueues'
    }

    /**
     *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
     * 
     *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
     *  channel management messages.
     * 
     *  The messages are processed in FIFO order.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '21b8e229d7956a6fefa7428dba911ac150aa62f678ebad35c3ce614eeae10050'
    }

    /**
     *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
     * 
     *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
     *  channel management messages.
     * 
     *  The messages are processed in FIFO order.
     */
    get asV9010(): UmpRelayDispatchQueuesStorageV9010 {
        assert(this.isV9010)
        return this as any
    }
}

/**
 *  The messages waiting to be handled by the relay-chain originating from a certain parachain.
 * 
 *  Note that some upward messages might have been already processed by the inclusion logic. E.g.
 *  channel management messages.
 * 
 *  The messages are processed in FIFO order.
 */
export interface UmpRelayDispatchQueuesStorageV9010 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class UtilityMultisigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Utility'
    }

    protected getName() {
        return 'Multisigs'
    }

    /**
     *  The set of open multisig operations.
     */
    get isV1032(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asV1032(): UtilityMultisigsStorageV1032 {
        assert(this.isV1032)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface UtilityMultisigsStorageV1032 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v1032.Multisig | undefined)>
    getAll(): Promise<v1032.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v1032.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v1032.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v1032.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v1032.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1032.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1032.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1032.Multisig][]>
}

export class VestingStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Vesting'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with latest version, as determined by the genesis build.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '5370c514276f3735e13df7db1f1bbacaba918c365a3ed949597f7ce091eeb77e'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with latest version, as determined by the genesis build.
     */
    get asV9111(): VestingStorageVersionStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with latest version, as determined by the genesis build.
 */
export interface VestingStorageVersionStorageV9111 {
    get(): Promise<v9111.Type_568>
}

export class VestingVestingStorage extends StorageBase {
    protected getPrefix() {
        return 'Vesting'
    }

    protected getName() {
        return 'Vesting'
    }

    /**
     *  Information regarding the vesting of a given account.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '04a3bd3844d81bd0b622c91e507de0014c997b5d7949e81b50c1607437b412fa'
    }

    /**
     *  Information regarding the vesting of a given account.
     */
    get asV1050(): VestingVestingStorageV1050 {
        assert(this.isV1050)
        return this as any
    }

    /**
     *  Information regarding the vesting of a given account.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '22ac0db91087ba9b3f5dee769d5e3398f8c8c045cabf7f6585992df66dba74db'
    }

    /**
     *  Information regarding the vesting of a given account.
     */
    get asV9111(): VestingVestingStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Information regarding the vesting of a given account.
 */
export interface VestingVestingStorageV1050 {
    get(key: Uint8Array): Promise<(v1050.VestingInfo | undefined)>
    getAll(): Promise<v1050.VestingInfo[]>
    getMany(keys: Uint8Array[]): Promise<(v1050.VestingInfo | undefined)[]>
}

/**
 *  Information regarding the vesting of a given account.
 */
export interface VestingVestingStorageV9111 {
    get(key: Uint8Array): Promise<(v9111.VestingInfo[] | undefined)>
    getAll(): Promise<v9111.VestingInfo[][]>
    getMany(keys: Uint8Array[]): Promise<(v9111.VestingInfo[] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9111.VestingInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9111.VestingInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9111.VestingInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9111.VestingInfo[]][]>
}

export class VoterListCounterForListNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'VoterList'
    }

    protected getName() {
        return 'CounterForListNodes'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV9230(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV9230(): VoterListCounterForListNodesStorageV9230 {
        assert(this.isV9230)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface VoterListCounterForListNodesStorageV9230 {
    get(): Promise<number>
}

export class VoterListListBagsStorage extends StorageBase {
    protected getPrefix() {
        return 'VoterList'
    }

    protected getName() {
        return 'ListBags'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === '5e403bdbad581142351437d955e87280596a0c5b07d7b18a98a2f9d2fb3469cf'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get asV9230(): VoterListListBagsStorageV9230 {
        assert(this.isV9230)
        return this as any
    }
}

/**
 *  A bag stored in storage.
 * 
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface VoterListListBagsStorageV9230 {
    get(key: bigint): Promise<(v9230.Bag | undefined)>
    getAll(): Promise<v9230.Bag[]>
    getMany(keys: bigint[]): Promise<(v9230.Bag | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v9230.Bag][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v9230.Bag][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v9230.Bag][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v9230.Bag][]>
}

export class VoterListListNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'VoterList'
    }

    protected getName() {
        return 'ListNodes'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === 'd750de9f70dc579f36482219336f529b62912998b5a4be0a48c69cf3c6158042'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get asV9230(): VoterListListNodesStorageV9230 {
        assert(this.isV9230)
        return this as any
    }
}

/**
 *  A single node, within some bag.
 * 
 *  Nodes store links forward and back within their respective bags.
 */
export interface VoterListListNodesStorageV9230 {
    get(key: Uint8Array): Promise<(v9230.Node | undefined)>
    getAll(): Promise<v9230.Node[]>
    getMany(keys: Uint8Array[]): Promise<(v9230.Node | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9230.Node][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9230.Node][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9230.Node][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9230.Node][]>
}

export class WhitelistWhitelistedCallStorage extends StorageBase {
    protected getPrefix() {
        return 'Whitelist'
    }

    protected getName() {
        return 'WhitelistedCall'
    }

    get isV9320(): boolean {
        return this.getTypeHash() === '29735300dba5135be0e1e53d771089aba86ed92479018d68d31c9d66cb9816e3'
    }

    get asV9320(): WhitelistWhitelistedCallStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

export interface WhitelistWhitelistedCallStorageV9320 {
    get(key: Uint8Array): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: Uint8Array[]): Promise<(null | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: null][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: null][]>
}

export class XcmPalletAssetTrapsStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'AssetTraps'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get asV9111(): XcmPalletAssetTrapsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface XcmPalletAssetTrapsStorageV9111 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class XcmPalletCurrentMigrationStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'CurrentMigration'
    }

    /**
     *  The current migration's stage, if any.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
    }

    /**
     *  The current migration's stage, if any.
     */
    get asV9111(): XcmPalletCurrentMigrationStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The current migration's stage, if any.
 */
export interface XcmPalletCurrentMigrationStorageV9111 {
    get(): Promise<(v9111.VersionMigrationStage | undefined)>
}

export class XcmPalletLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'LockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === '83620d989e5dd77ea5cdf77e62586d64ad0b7ace0ba3b24d7f207643583d77cc'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get asV9381(): XcmPalletLockedFungiblesStorageV9381 {
        assert(this.isV9381)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface XcmPalletLockedFungiblesStorageV9381 {
    get(key: Uint8Array): Promise<([bigint, v9381.VersionedMultiLocation][] | undefined)>
    getAll(): Promise<[bigint, v9381.VersionedMultiLocation][][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, v9381.VersionedMultiLocation][] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, v9381.VersionedMultiLocation][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, v9381.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, v9381.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, v9381.VersionedMultiLocation][]][]>
}

export class XcmPalletQueriesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'Queries'
    }

    /**
     *  The ongoing queries.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'ae8e3438dd16f0912a0a76dfeb9e62216e42277085497217b9181be5bd15251e'
    }

    /**
     *  The ongoing queries.
     */
    get asV9111(): XcmPalletQueriesStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  The ongoing queries.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === '8497eae9bd9ecc14a9d7da5daf99074e5fb888ce8b1254175ebacb93a450f902'
    }

    /**
     *  The ongoing queries.
     */
    get asV9160(): XcmPalletQueriesStorageV9160 {
        assert(this.isV9160)
        return this as any
    }

    /**
     *  The ongoing queries.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === 'd10dd933536b6a509757649a144befe6c924fc7ec281f36a7bd0d258223921f2'
    }

    /**
     *  The ongoing queries.
     */
    get asV9370(): XcmPalletQueriesStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  The ongoing queries.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === 'c33614a63099009a42799d8206979c61fd1a7b5d142259a57bdcbc726105e8f1'
    }

    /**
     *  The ongoing queries.
     */
    get asV9381(): XcmPalletQueriesStorageV9381 {
        assert(this.isV9381)
        return this as any
    }
}

/**
 *  The ongoing queries.
 */
export interface XcmPalletQueriesStorageV9111 {
    get(key: bigint): Promise<(v9111.QueryStatus | undefined)>
    getAll(): Promise<v9111.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v9111.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v9111.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v9111.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v9111.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v9111.QueryStatus][]>
}

/**
 *  The ongoing queries.
 */
export interface XcmPalletQueriesStorageV9160 {
    get(key: bigint): Promise<(v9160.QueryStatus | undefined)>
    getAll(): Promise<v9160.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v9160.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v9160.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v9160.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v9160.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v9160.QueryStatus][]>
}

/**
 *  The ongoing queries.
 */
export interface XcmPalletQueriesStorageV9370 {
    get(key: bigint): Promise<(v9370.QueryStatus | undefined)>
    getAll(): Promise<v9370.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v9370.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v9370.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v9370.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v9370.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v9370.QueryStatus][]>
}

/**
 *  The ongoing queries.
 */
export interface XcmPalletQueriesStorageV9381 {
    get(key: bigint): Promise<(v9381.QueryStatus | undefined)>
    getAll(): Promise<v9381.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v9381.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v9381.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v9381.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v9381.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v9381.QueryStatus][]>
}

export class XcmPalletQueryCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'QueryCounter'
    }

    /**
     *  The latest available query index.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The latest available query index.
     */
    get asV9111(): XcmPalletQueryCounterStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The latest available query index.
 */
export interface XcmPalletQueryCounterStorageV9111 {
    get(): Promise<bigint>
}

export class XcmPalletRemoteLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'RemoteLockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === '32350375a3f683ddfbcb5dbc0bc4773d1d5aa9c2f1f2e358dced4492be76a541'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asV9381(): XcmPalletRemoteLockedFungiblesStorageV9381 {
        assert(this.isV9381)
        return this as any
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get isV9430(): boolean {
        return this.getTypeHash() === '1149837e63a49b75805a12d31afe81a1d8d4392ee13be03404f08d002d1c9928'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asV9430(): XcmPalletRemoteLockedFungiblesStorageV9430 {
        assert(this.isV9430)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface XcmPalletRemoteLockedFungiblesStorageV9381 {
    get(key1: number, key2: Uint8Array, key3: v9381.VersionedAssetId): Promise<(v9381.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<v9381.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, v9381.VersionedAssetId][]): Promise<(v9381.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, v9381.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, v9381.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, v9381.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: v9381.VersionedAssetId): Promise<[number, Uint8Array, v9381.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, v9381.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, v9381.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, v9381.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v9381.VersionedAssetId): AsyncIterable<[number, Uint8Array, v9381.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, v9381.VersionedAssetId], v: v9381.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, v9381.VersionedAssetId], v: v9381.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, v9381.VersionedAssetId], v: v9381.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: v9381.VersionedAssetId): Promise<[k: [number, Uint8Array, v9381.VersionedAssetId], v: v9381.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, v9381.VersionedAssetId], v: v9381.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, v9381.VersionedAssetId], v: v9381.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, v9381.VersionedAssetId], v: v9381.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v9381.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, v9381.VersionedAssetId], v: v9381.RemoteLockedFungibleRecord][]>
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface XcmPalletRemoteLockedFungiblesStorageV9430 {
    get(key1: number, key2: Uint8Array, key3: v9430.VersionedAssetId): Promise<(v9430.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<v9430.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, v9430.VersionedAssetId][]): Promise<(v9430.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, v9430.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, v9430.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, v9430.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: v9430.VersionedAssetId): Promise<[number, Uint8Array, v9430.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, v9430.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, v9430.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, v9430.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v9430.VersionedAssetId): AsyncIterable<[number, Uint8Array, v9430.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, v9430.VersionedAssetId], v: v9430.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, v9430.VersionedAssetId], v: v9430.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, v9430.VersionedAssetId], v: v9430.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: v9430.VersionedAssetId): Promise<[k: [number, Uint8Array, v9430.VersionedAssetId], v: v9430.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, v9430.VersionedAssetId], v: v9430.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, v9430.VersionedAssetId], v: v9430.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, v9430.VersionedAssetId], v: v9430.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v9430.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, v9430.VersionedAssetId], v: v9430.RemoteLockedFungibleRecord][]>
}

export class XcmPalletSafeXcmVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'SafeXcmVersion'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get asV9111(): XcmPalletSafeXcmVersionStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface XcmPalletSafeXcmVersionStorageV9111 {
    get(): Promise<(number | undefined)>
}

export class XcmPalletSupportedVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'SupportedVersion'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'bf203870a932f637011bee3e0dae76dc35a120f80e5ac7fb32e2dbede4fd5795'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV9111(): XcmPalletSupportedVersionStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '523e16bf5eab0fa24d391969017bb7ba96a0ccf8c757f474e1305f6fb2ca4c56'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV9370(): XcmPalletSupportedVersionStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === '0e2aec9a2da85831b6c7f06cf2ebb00fa3489433254df2ecc1d89a9f142d7859'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV9381(): XcmPalletSupportedVersionStorageV9381 {
        assert(this.isV9381)
        return this as any
    }
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface XcmPalletSupportedVersionStorageV9111 {
    get(key1: number, key2: v9111.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v9111.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9111.VersionedMultiLocation): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9111.VersionedMultiLocation): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9111.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v9111.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v9111.VersionedMultiLocation): Promise<[k: [number, v9111.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9111.VersionedMultiLocation): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: number][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface XcmPalletSupportedVersionStorageV9370 {
    get(key1: number, key2: v9370.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v9370.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9370.VersionedMultiLocation): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9370.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v9370.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v9370.VersionedMultiLocation): Promise<[k: [number, v9370.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: number][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface XcmPalletSupportedVersionStorageV9381 {
    get(key1: number, key2: v9381.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v9381.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9381.VersionedMultiLocation): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9381.VersionedMultiLocation): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9381.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v9381.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v9381.VersionedMultiLocation): Promise<[k: [number, v9381.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9381.VersionedMultiLocation): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: number][]>
}

export class XcmPalletVersionDiscoveryQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'VersionDiscoveryQueue'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '16a258fa3891b3d97c16b446ca40a6dbafd16eb5bc2936a51286241b38207f42'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV9111(): XcmPalletVersionDiscoveryQueueStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === 'c083fea4cf1195adcbfad7e0e32371a867d5ee11c67b4620ec6977d399fd1aee'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV9370(): XcmPalletVersionDiscoveryQueueStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === '1861bd13354557dc519a64b8d53a95cd897ff993484c969af972f15ebe14ed22'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV9381(): XcmPalletVersionDiscoveryQueueStorageV9381 {
        assert(this.isV9381)
        return this as any
    }
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface XcmPalletVersionDiscoveryQueueStorageV9111 {
    get(): Promise<[v9111.VersionedMultiLocation, number][]>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface XcmPalletVersionDiscoveryQueueStorageV9370 {
    get(): Promise<[v9370.VersionedMultiLocation, number][]>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface XcmPalletVersionDiscoveryQueueStorageV9381 {
    get(): Promise<[v9381.VersionedMultiLocation, number][]>
}

export class XcmPalletVersionNotifiersStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'VersionNotifiers'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'c04d92c1d09bb51782b185c1fa4f78678bd7c63c2388986e2fe34f2f1e02cf9a'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV9111(): XcmPalletVersionNotifiersStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === 'b91f3dac7afb55835a6f5f37431cda7a2fb7722283e5e5ad9feea7b84cffdc7a'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV9370(): XcmPalletVersionNotifiersStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === '2e570d6a39a9644e69bdccf883c25d1723f752493a252d530fc3667560486716'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV9381(): XcmPalletVersionNotifiersStorageV9381 {
        assert(this.isV9381)
        return this as any
    }
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface XcmPalletVersionNotifiersStorageV9111 {
    get(key1: number, key2: v9111.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v9111.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9111.VersionedMultiLocation): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9111.VersionedMultiLocation): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9111.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v9111.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v9111.VersionedMultiLocation): Promise<[k: [number, v9111.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9111.VersionedMultiLocation): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: bigint][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface XcmPalletVersionNotifiersStorageV9370 {
    get(key1: number, key2: v9370.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v9370.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9370.VersionedMultiLocation): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9370.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v9370.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v9370.VersionedMultiLocation): Promise<[k: [number, v9370.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: bigint][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface XcmPalletVersionNotifiersStorageV9381 {
    get(key1: number, key2: v9381.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v9381.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9381.VersionedMultiLocation): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9381.VersionedMultiLocation): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9381.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v9381.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v9381.VersionedMultiLocation): Promise<[k: [number, v9381.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9381.VersionedMultiLocation): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: bigint][]>
}

export class XcmPalletVersionNotifyTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'VersionNotifyTargets'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV9100(): boolean {
        return this.getTypeHash() === '462a05bf074fa5324fc4233e656891d6c6a155771b2b76c995d3c56a976fd341'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV9100(): XcmPalletVersionNotifyTargetsStorageV9100 {
        assert(this.isV9100)
        return this as any
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'be7b24532d6af66a6c35ced8427c3201e32a7ab9e2a0c901f57c6d5a416ddc46'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV9111(): XcmPalletVersionNotifyTargetsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '0366789a1c94a7567fc5a8d256e5cd0721b84138187c2fffb75e3528ebb47078'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV9370(): XcmPalletVersionNotifyTargetsStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === '080bdd3fd57ea1cba05e6b46642e4860965e8f150a64cc9d5bafc6eebd6207fb'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV9381(): XcmPalletVersionNotifyTargetsStorageV9381 {
        assert(this.isV9381)
        return this as any
    }
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface XcmPalletVersionNotifyTargetsStorageV9100 {
    get(key1: number, key2: v9100.VersionedMultiLocation): Promise<([bigint, bigint, number] | undefined)>
    getAll(): Promise<[bigint, bigint, number][]>
    getMany(keys: [number, v9100.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(): Promise<[number, v9100.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9100.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9100.VersionedMultiLocation): Promise<[number, v9100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9100.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9100.VersionedMultiLocation): AsyncIterable<[number, v9100.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9100.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number): Promise<[k: [number, v9100.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number, key2: v9100.VersionedMultiLocation): Promise<[k: [number, v9100.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9100.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9100.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9100.VersionedMultiLocation): AsyncIterable<[k: [number, v9100.VersionedMultiLocation], v: [bigint, bigint, number]][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface XcmPalletVersionNotifyTargetsStorageV9111 {
    get(key1: number, key2: v9111.VersionedMultiLocation): Promise<([bigint, bigint, number] | undefined)>
    getAll(): Promise<[bigint, bigint, number][]>
    getMany(keys: [number, v9111.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9111.VersionedMultiLocation): Promise<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9111.VersionedMultiLocation): AsyncIterable<[number, v9111.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9111.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number): Promise<[k: [number, v9111.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number, key2: v9111.VersionedMultiLocation): Promise<[k: [number, v9111.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9111.VersionedMultiLocation): AsyncIterable<[k: [number, v9111.VersionedMultiLocation], v: [bigint, bigint, number]][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface XcmPalletVersionNotifyTargetsStorageV9370 {
    get(key1: number, key2: v9370.VersionedMultiLocation): Promise<([bigint, bigint, number] | undefined)>
    getAll(): Promise<[bigint, bigint, number][]>
    getMany(keys: [number, v9370.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9370.VersionedMultiLocation): Promise<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[number, v9370.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9370.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number): Promise<[k: [number, v9370.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number, key2: v9370.VersionedMultiLocation): Promise<[k: [number, v9370.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9370.VersionedMultiLocation): AsyncIterable<[k: [number, v9370.VersionedMultiLocation], v: [bigint, bigint, number]][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface XcmPalletVersionNotifyTargetsStorageV9381 {
    get(key1: number, key2: v9381.VersionedMultiLocation): Promise<([bigint, v9381.Weight, number] | undefined)>
    getAll(): Promise<[bigint, v9381.Weight, number][]>
    getMany(keys: [number, v9381.VersionedMultiLocation][]): Promise<([bigint, v9381.Weight, number] | undefined)[]>
    getKeys(): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v9381.VersionedMultiLocation): Promise<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v9381.VersionedMultiLocation): AsyncIterable<[number, v9381.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v9381.VersionedMultiLocation], v: [bigint, v9381.Weight, number]][]>
    getPairs(key1: number): Promise<[k: [number, v9381.VersionedMultiLocation], v: [bigint, v9381.Weight, number]][]>
    getPairs(key1: number, key2: v9381.VersionedMultiLocation): Promise<[k: [number, v9381.VersionedMultiLocation], v: [bigint, v9381.Weight, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: [bigint, v9381.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: [bigint, v9381.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v9381.VersionedMultiLocation): AsyncIterable<[k: [number, v9381.VersionedMultiLocation], v: [bigint, v9381.Weight, number]][]>
}

export class XcmPalletXcmExecutionSuspendedStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'XcmExecutionSuspended'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get isV9420(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get asV9420(): XcmPalletXcmExecutionSuspendedStorageV9420 {
        assert(this.isV9420)
        return this as any
    }
}

/**
 *  Global suspension state of the XCM executor.
 */
export interface XcmPalletXcmExecutionSuspendedStorageV9420 {
    get(): Promise<boolean>
}
