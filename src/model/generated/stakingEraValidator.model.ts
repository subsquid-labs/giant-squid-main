import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Staker} from "./staker.model"
import {StakingEra} from "./stakingEra.model"
import {StakingEraNomination} from "./stakingEraNomination.model"

@Entity_()
export class StakingEraValidator {
    constructor(props?: Partial<StakingEraValidator>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Staker, {nullable: true})
    staker!: Staker

    @Index_()
    @ManyToOne_(() => StakingEra, {nullable: true})
    era!: StakingEra

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    bonded!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalBonded!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    eraReward!: bigint

    @Column_("int4", {nullable: true})
    commission!: number | undefined | null

    @OneToMany_(() => StakingEraNomination, e => e.validator)
    nominators!: StakingEraNomination[]
}
