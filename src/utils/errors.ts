export class UnknownVersionError extends Error {
    constructor(c: InstanceType<any>) {
        super(`There is no relevant version for ${c.prototype.name}`)
    }
}
