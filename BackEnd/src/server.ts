import app from './app';
import MySQLConnection from './utils/MySQLConnection';

import * as dotenv from 'dotenv';
dotenv.config({path: __dirname+'/.env'})

const database = new MySQLConnection();

database.connect().getConnection().then(_result => {
    app.listen(process.env.MYSQL_PORT || 3306);
    console.log(`Server start in port ${process.env.MYSQL_PORT || 3306}`);
    
}).catch(error => {
    console.log(error);
})