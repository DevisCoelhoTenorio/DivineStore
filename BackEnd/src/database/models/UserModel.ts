import { Model, INTEGER, STRING, BOOLEAN } from 'sequelize';
import db from '.'

class User extends Model {
    id!: number;
    email!: string;
    password!: string;
}

User.init({
    id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: STRING,
        allowNull: false,
    },
    email: {
        type: STRING,
        allowNull: false,
    },
    password: {
        type: STRING,
        allowNull: false,
    },
    admin: {
        type: BOOLEAN,
    }
}, {
    sequelize: db,
    modelName: 'users',
    timestamps: false,
})

export default User;