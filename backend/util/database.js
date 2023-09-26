const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'crud_operation',
    password: 'Shilpi@123'
});
module.exports = db;