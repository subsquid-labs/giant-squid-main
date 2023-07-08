import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Staker} from "./staker.model"
import {Era} from "./era.model"
import {EraNomination} from "./eraNomination.model"

@Entity_()
export class EraNominator {
    constructor(props?: Partial<EraNominator>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Staker, {nullable: true})
    staker!: Staker

    @Index_()
    @ManyToOne_(() => Era, {nullable: true})
    era!: Era

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    bonded!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    eraReward!: bigint

    @OneToMany_(() => EraNomination, e => e.nominator)
    validators!: EraNomination[]
}
