const {Pool} = require("pg")

module.exports = new Pool ({
    user: 'postgres',
    password: "matheus//*",
    host: "localhost",
    port: 5432,
    database: "foodfy"
})
