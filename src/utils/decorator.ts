export function implements_<T>() {
    return <U extends T>(constructor: U) => {constructor}
}