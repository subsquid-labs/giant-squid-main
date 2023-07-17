import {CallMapper, EventMapper, IPallet} from '../../../../interfaces'
import {TransferEventMapper} from './events'
import {Config} from './config'

export class Pallet implements IPallet<Config> {
    constructor(readonly config: Config) {}

    readonly events: Record<string, EventMapper> = {
        Transfer: new TransferEventMapper(this.config),
    }

    readonly calls: Record<string, CallMapper> = {}
}
