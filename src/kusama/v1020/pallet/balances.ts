import {BalancesTransferEvent} from '~metadata/kusama/events'
import Default from '~pallets/balances/v1'
import {Event, Parameter} from '~interfaces'

export const TransferEvent = <AccountId extends Parameter>(AccountId: AccountId) =>
    class TransferEvent {
        readonly from: InstanceType<AccountId>
        readonly to: InstanceType<AccountId>
        readonly amount: bigint

        constructor(event: Event) {
            const data = new BalancesTransferEvent(event).asV1020

            this.from = new AccountId(data[0]) as any
            this.to = new AccountId(data[1]) as any
            this.amount = data[2]
        }
    }

export default () => {
    const P = Default((Config) => ({
        Events: {
            Transfer: TransferEvent(Config.AccountId),
        },
    }))

    return P
}
