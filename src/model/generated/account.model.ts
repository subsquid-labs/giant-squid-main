import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_, OneToOne as OneToOne_} from "typeorm"
import {Transfer} from "./transfer.model"
import {StakingReward} from "./stakingReward.model"
import {Identity} from "./identity.model"
import {IdentitySub} from "./identitySub.model"
import {Staker} from "./staker.model"

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

    @OneToMany_(() => Transfer, e => e.account)
    transfers!: Transfer[]

    @OneToMany_(() => StakingReward, e => e.account)
    rewards!: StakingReward[]

    @OneToOne_(() => Identity, e => e.account)
    identity!: Identity | undefined | null

    @OneToOne_(() => IdentitySub, e => e.account)
    sub!: IdentitySub | undefined | null

    @OneToOne_(() => Staker, e => e.stash)
    stashOf!: Staker | undefined | null

    @OneToOne_(() => Staker, e => e.controller)
    controllerOf!: Staker | undefined | null
}
