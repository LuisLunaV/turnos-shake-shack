const mysql = require('mysql2');

const db = {
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASS_DB,
  database: process.env.NAME_DB
}

const createDataBase = async() => {
  try {
    const runDataBase = await mysql.createPool(db);
    // console.log('Base de datos en línea');
    return runDataBase;
  } catch (error) {
    throw new Error( error )
  }
}

module.exports = {
  createDataBase
};