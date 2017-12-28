var mysql = require('mysql');
pool = mysql.createPool({
    connectionLimit: 30,
    waitForConnections: true,
    queueLimit: 0,
    host: '10.0.87.28',
    user: 'root',
    password: 'root',
    database: 'goal_management',
    debug: false,
    wait_timeout: 28800,
    multipleStatements: true
});

module.exports = {pool: pool}