import {ValidatorData} from "./_validatorData"
import {NominatorData} from "./_nominatorData"

export type StakingData = ValidatorData | NominatorData

export function fromJsonStakingData(json: any): StakingData {
    switch(json?.isTypeOf) {
        case 'ValidatorData': return new ValidatorData(undefined, json)
        case 'NominatorData': return new NominatorData(undefined, json)
        default: throw new TypeError('Unknown json object passed as StakingData')
    }
}
