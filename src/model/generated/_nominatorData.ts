import assert from "assert"
import * as marshal from "./marshal"

export class NominatorData {
    public readonly isTypeOf = 'NominatorData'
    private _targets!: (string)[]

    constructor(props?: Partial<Omit<NominatorData, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._targets = marshal.fromList(json.targets, val => marshal.string.fromJSON(val))
        }
    }

    get targets(): (string)[] {
        assert(this._targets != null, 'uninitialized access')
        return this._targets
    }

    set targets(value: (string)[]) {
        this._targets = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            targets: this.targets,
        }
    }
}
