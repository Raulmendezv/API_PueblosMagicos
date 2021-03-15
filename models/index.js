const dbConfig = require("../config/db.config");

const mysql = require("mysql2");

const pool = mysql.createPool(dbConfig.db);

pool.getConnection((err, conn) => {
  if (err) {
    console.log("Error conectandome a la Base de Datos");
    return;
  }
  console.log("Conexion con la Base de Datos establecida");
  pool.releaseConnection(conn);
});

module.exports = pool;
