import app from './app';
import MySQLConnection from './utils/MySQLConnection';

import * as dotenv from 'dotenv';
dotenv.config({path: __dirname+'/.env'})

const database = new MySQLConnection();

database.connect().getConnection().then(_result => {
    app.listen(process.env.PORT || 3000);
    console.log(`Server start in port ${process.env.PORT || 3000}`);
    
}).catch(error => {
    console.log(error);
})