import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'

export class BalancesTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Transfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transfer succeeded. \[from, to, value\]
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
    }

    /**
     * Transfer succeeded. \[from, to, value\]
     */
    get asV900(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV1201(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '23222c59f2992c12387568241620899d2d399ab9027595daca8255637f62ece3'
    }

    /**
     * Transfer succeeded.
     */
    get asV1201(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV1201)
        return this._chain.decodeEvent(this.event)
    }
}
