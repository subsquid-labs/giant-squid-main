import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {StakingEra} from "./stakingEra.model"
import {StakingEraNominator} from "./stakingEraNominator.model"
import {StakingEraValidator} from "./stakingEraValidator.model"

@Entity_()
export class StakingEraNomination {
    constructor(props?: Partial<StakingEraNomination>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => StakingEra, {nullable: true})
    era!: StakingEra

    @Index_()
    @ManyToOne_(() => StakingEraNominator, {nullable: true})
    nominator!: StakingEraNominator

    @Index_()
    @ManyToOne_(() => StakingEraValidator, {nullable: true})
    validator!: StakingEraValidator

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    vote!: bigint
}
