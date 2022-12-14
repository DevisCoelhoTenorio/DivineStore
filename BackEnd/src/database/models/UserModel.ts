import { BOOLEAN } from 'sequelize';
import { Model, INTEGER, STRING } from 'sequelize';
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
        allowNull: false,
    }
}, {
    sequelize: db,
    modelName: 'users',
    timestamps: false,
})

export default User;