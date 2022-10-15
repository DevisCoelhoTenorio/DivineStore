"use strict";
require("dotenv/config");
const config = {
    username: process.env.MYSQL_USE || 'root',
    password: process.env.MYSQL_ROOT_PASSWOR || 'password',
    database: process.env.MYSQL_DB_NAME || 'divineStore_db',
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT) || 3306,
    dialect: 'mysql',
};
module.exports = config;
