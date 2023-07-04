import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToOne as OneToOne_, Index as Index_, JoinColumn as JoinColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Judgement} from "./_judgement"
import {SubIdentity} from "./subIdentity.model"
import {IdentityAdditionalField} from "./_identityAdditionalField"

@Entity_()
export class Identity {
    constructor(props?: Partial<Identity>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_({unique: true})
    @OneToOne_(() => Account, {nullable: false})
    @JoinColumn_()
    account!: Account

    @Column_("varchar", {length: 10, nullable: false})
    judgement!: Judgement

    @OneToMany_(() => SubIdentity, e => e.identity)
    subs!: SubIdentity[]

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new IdentityAdditionalField(undefined, marshal.nonNull(val)))}, nullable: true})
    additional!: (IdentityAdditionalField)[] | undefined | null

    @Column_("text", {nullable: true})
    display!: string | undefined | null

    @Column_("text", {nullable: true})
    legal!: string | undefined | null

    @Column_("text", {nullable: true})
    web!: string | undefined | null

    @Column_("text", {nullable: true})
    riot!: string | undefined | null

    @Column_("text", {nullable: true})
    email!: string | undefined | null

    @Column_("text", {nullable: true})
    pgpFingerprint!: string | undefined | null

    @Column_("text", {nullable: true})
    image!: string | undefined | null

    @Column_("text", {nullable: true})
    twitter!: string | undefined | null

    @Column_("bool", {nullable: false})
    isKilled!: boolean
}
