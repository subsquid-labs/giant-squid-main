module.exports = class Data1691690139868 {
    name = 'Data1691690139868'

    async up(db) {
        await db.query(`ALTER TABLE "staking_era" DROP COLUMN "timestamp"`)
        await db.query(`ALTER TABLE "staking_era" ADD "created_at" integer NOT NULL`)
        await db.query(`ALTER TABLE "staking_era" ALTER COLUMN "started_at" DROP NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "staking_era" ADD "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL`)
        await db.query(`ALTER TABLE "staking_era" DROP COLUMN "created_at"`)
        await db.query(`ALTER TABLE "staking_era" ALTER COLUMN "started_at" SET NOT NULL`)
    }
}
