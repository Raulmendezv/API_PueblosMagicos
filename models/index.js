const dbConfig = require("../config/db.config");
// const Sequelize = require("sequelize");
// const User = require("./User");
// const User_Email = require("./User_Email");
// const Town = require("./Town");
// const Town_Attraction = require("./Town_Attraction");
// const Town_Dishes = require("./Town_Dishes");
// const Town_Ethnics = require("./Town_Ethnics");
// const Town_Festivities = require("./Town_Festivities");
// const Town_Photos = require("./Town_Photos");
// const Review = require("./Review");
// const Admin = require("./Admin");
// const Admin_Email = require("./Admin_Email");

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
