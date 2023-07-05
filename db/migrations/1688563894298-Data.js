module.exports = class Data1688563894298 {
    name = 'Data1688563894298'

    async up(db) {
        await db.query(`ALTER TABLE "sub_identity" DROP CONSTRAINT "FK_e52887ef5c374d8dc83e01ee9c3"`)
        await db.query(`DROP INDEX "public"."IDX_e52887ef5c374d8dc83e01ee9c"`)
        await db.query(`ALTER TABLE "sub_identity" RENAME COLUMN "identity_id" TO "super_id"`)
        await db.query(`CREATE INDEX "IDX_8fef48900f5dbedc38ecd25150" ON "sub_identity" ("super_id") `)
        await db.query(`ALTER TABLE "sub_identity" ADD CONSTRAINT "FK_8fef48900f5dbedc38ecd25150b" FOREIGN KEY ("super_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "sub_identity" ADD CONSTRAINT "FK_e52887ef5c374d8dc83e01ee9c3" FOREIGN KEY ("identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`CREATE INDEX "IDX_e52887ef5c374d8dc83e01ee9c" ON "sub_identity" ("identity_id") `)
        await db.query(`ALTER TABLE "sub_identity" RENAME COLUMN "super_id" TO "identity_id"`)
        await db.query(`DROP INDEX "public"."IDX_8fef48900f5dbedc38ecd25150"`)
        await db.query(`ALTER TABLE "sub_identity" DROP CONSTRAINT "FK_8fef48900f5dbedc38ecd25150b"`)
    }
}
