const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Jamil622!",
    host: "localhost",
    port: 5432,
    database: "tasklist"
});

module.exports = pool;