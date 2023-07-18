import {CallMapper, EventMapper, IPallet} from '../../../interfaces'
import {Config, TransferEventMapper} from '../../v9050/pallet/balances'

export {Config, TransferEventMapper}

export class Pallet implements IPallet<Config> {
    constructor(readonly config: Config) {}

    readonly events: Record<string, EventMapper> = {
        Transfer: new TransferEventMapper(this.config),
    }

    readonly calls: Record<string, CallMapper> = {}
}
