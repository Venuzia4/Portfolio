require("dotenv").config();
const fetch = require("node-fetch");
const mysql = require("mysql2/promise");

const migrate = async () => {
  const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true,
  });

  await connection.query(`drop database if exists ${DB_NAME}`);
  await connection.query(`create database ${DB_NAME}`);
  await connection.query(`use ${DB_NAME}`);

  const response = await fetch("https://cdn-104.anonfiles.com/L3U1s5p1yb/1985ae2e-1655126081/wcs_steam.sql");
  const sql = await response.text();

  await connection.query(sql);

  connection.end();
};

try {
  migrate();
} catch (err) {
  console.error(err);
}
