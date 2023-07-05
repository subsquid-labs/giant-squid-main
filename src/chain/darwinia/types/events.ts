import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'

export class BalancesTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Transfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transfer succeeded.
     */
    get isV6100(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '23222c59f2992c12387568241620899d2d399ab9027595daca8255637f62ece3'
    }

    /**
     * Transfer succeeded.
     */
    get asV6100(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV6100)
        return this._chain.decodeEvent(this.event)
    }
}
