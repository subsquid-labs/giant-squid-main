import {CallMapper, Encodable, EventMapper, IPallet, Type} from '../../../interfaces'

export interface Config {
    AccountId: Type<Uint8Array, Encodable>
}

export class Pallet implements IPallet<Config> {
    constructor(readonly config: Config) {}

    readonly events: Record<string, EventMapper> = {}

    readonly calls: Record<string, CallMapper> = {}
}
