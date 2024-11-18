import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('lt_web', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;