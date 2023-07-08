import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Era} from "./era.model"
import {EraNominator} from "./eraNominator.model"
import {EraValidator} from "./eraValidator.model"

@Entity_()
export class EraNomination {
    constructor(props?: Partial<EraNomination>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Era, {nullable: true})
    era!: Era

    @Index_()
    @ManyToOne_(() => EraNominator, {nullable: true})
    nominator!: EraNominator

    @Index_()
    @ManyToOne_(() => EraValidator, {nullable: true})
    validator!: EraValidator

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    vote!: bigint
}
