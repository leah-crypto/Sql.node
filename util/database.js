const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'first_schema',
    password: 'kirey3434'
})

module.exports = pool.promise();