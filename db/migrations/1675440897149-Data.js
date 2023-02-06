module.exports = class Data1675440897149 {
    name = 'Data1675440897149'

    async up(db) {
        await db.query(`ALTER TABLE "native_transfer" ADD "success" boolean NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "native_transfer" DROP COLUMN "success"`)
    }
}
