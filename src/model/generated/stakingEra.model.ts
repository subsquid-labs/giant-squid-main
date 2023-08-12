import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"
import {StakingEraStatus} from "./_stakingEraStatus"

@Entity_()
export class StakingEra {
    constructor(props?: Partial<StakingEra>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("int4", {nullable: false})
    index!: number

    @Column_("varchar", {length: 7, nullable: false})
    status!: StakingEraStatus

    @Column_("int4", {nullable: false})
    createdAt!: number

    @Column_("int4", {nullable: true})
    startedAt!: number | undefined | null

    @Column_("int4", {nullable: true})
    endedAt!: number | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    total!: bigint

    @Column_("int4", {nullable: false})
    validatorsCount!: number

    @Column_("int4", {nullable: false})
    nominatorsCount!: number
}
