import mysql, { Pool } from 'mysql2/promise';
import * as dotenv from 'dotenv';
import AbstractConnection from './AbstractConnection';

dotenv.config({ path: `${__dirname}/.env` });

export default class MySQLConnection extends AbstractConnection<Pool> {
  private static connection: Pool;

  public connect(): Pool {
    const connection = MySQLConnection.connection = mysql.createPool({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USE || 'root',
      password: process.env.MYSQL_ROOT_PASSWOR || 'password',
      database: process.env.MYSQL_DB_NAME || 'divineStore_db',
    });
    return connection;
  }
}
