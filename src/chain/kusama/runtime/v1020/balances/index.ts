import {CallMapper, Encodable, EventMapper, Pallet} from '../../../interfaces'
import {BalancesTransferMapperV1020} from './events'

export interface BalancesConfigV1020 {
    AccountId: Encodable
}

export class BalancesPalletV1020 implements Pallet {
    constructor(readonly config: BalancesConfigV1020) {}

    readonly events: Record<string, EventMapper> = {
        Transfer: new BalancesTransferMapperV1020(this.config),
    }

    readonly calls: Record<string, CallMapper> = {}
}
