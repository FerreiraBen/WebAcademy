import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'EngComp123#',
  database: 'josiasapp',
  port: 3306,
  logging: false,
});

export default connection;
