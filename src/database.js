const mysql = require('mysql');
const {promisify} = require('util');
const {database} = require('./keys');
const pool = mysql.createPool(database);

pool.getConnection((err, connection) =>{
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('CONEXION CERRADA');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('BD CON MUCHAS CONEXIONES');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('CONEXION RECHAZADA');
        }
    }
    if(connection) connection.release();
    console.log('DB CONECTADA');
    return;
});
pool.query = promisify(pool.query);
module.exports = pool;