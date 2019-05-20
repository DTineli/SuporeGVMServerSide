const mysql = require('mysql2');

const conectaBd = () => {
    const con = mysql.createConnection({
        host: 'mysql873.umbler.com',
        port: '41890',
        user: 'gvm',
        password: 'saraposa92#',
        database: 'gvm'
    });
    return con;
}



module.exports = conectaBd;