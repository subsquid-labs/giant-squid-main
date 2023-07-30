export function createEraId(index: number) {
    return index.toString().padStart(10, '0')
}

export function createEraStakerId(eraId: string, stakerId: string) {
    return eraId + '-' + stakerId
}

export function createEraNominationId(eraId: string, validatorId: string, nominatorId: string) {
    return eraId + '-' + validatorId + '-' + nominatorId
}
