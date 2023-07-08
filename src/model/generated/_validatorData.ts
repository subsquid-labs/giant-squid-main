import assert from "assert"
import * as marshal from "./marshal"

export class ValidatorData {
    public readonly isTypeOf = 'ValidatorData'
    private _commission!: number
    private _blocked!: boolean

    constructor(props?: Partial<Omit<ValidatorData, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._commission = marshal.float.fromJSON(json.commission)
            this._blocked = marshal.boolean.fromJSON(json.blocked)
        }
    }

    get commission(): number {
        assert(this._commission != null, 'uninitialized access')
        return this._commission
    }

    set commission(value: number) {
        this._commission = value
    }

    get blocked(): boolean {
        assert(this._blocked != null, 'uninitialized access')
        return this._blocked
    }

    set blocked(value: boolean) {
        this._blocked = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            commission: this.commission,
            blocked: this.blocked,
        }
    }
}
