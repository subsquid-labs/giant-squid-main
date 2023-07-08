import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToOne as OneToOne_, Index as Index_, JoinColumn as JoinColumn_, ManyToOne as ManyToOne_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {PayeeType} from "./_payeeType"
import {StakingRole} from "./_stakingRole"
import {StakingData, fromJsonStakingData} from "./_stakingData"
import {StakingReward} from "./stakingReward.model"
import {StakingBond} from "./stakingBond.model"

@Entity_()
export class Staker {
    constructor(props?: Partial<Staker>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_({unique: true})
    @OneToOne_(() => Account, {nullable: true})
    @JoinColumn_()
    stash!: Account

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    controller!: Account | undefined | null

    @Column_("varchar", {length: 10, nullable: false})
    payeeType!: PayeeType

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    payee!: Account | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    activeBond!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalReward!: bigint

    @Column_("varchar", {length: 9, nullable: false})
    role!: StakingRole

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonStakingData(obj)}, nullable: true})
    data!: StakingData | undefined | null

    @OneToMany_(() => StakingReward, e => e.staker)
    rewards!: StakingReward[]

    @OneToMany_(() => StakingBond, e => e.staker)
    bonds!: StakingBond[]
}
