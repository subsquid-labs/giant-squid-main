import {CallMapper, EventMapper, IPallet} from '../../../../interfaces'
import {Config} from './config'

export class Pallet implements IPallet<Config> {
    constructor(readonly config: Config) {}

    readonly events: Record<string, EventMapper> = {}

    readonly calls: Record<string, CallMapper> = {}
}
