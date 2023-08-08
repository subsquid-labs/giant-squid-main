import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import {AccountTransfer} from "./accountTransfer.model"
import {StakingReward} from "./stakingReward.model"
import {SignedExtrinsic} from "./signedExtrinsic.model"

@Entity_()
export class Account {
    constructor(props?: Partial<Account>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    publicKey!: string

    @OneToMany_(() => AccountTransfer, e => e.account)
    transfers!: AccountTransfer[]

    @OneToMany_(() => StakingReward, e => e.account)
    rewards!: StakingReward[]

    @OneToMany_(() => SignedExtrinsic, e => e.account)
    extrinsics!: SignedExtrinsic[]
}
