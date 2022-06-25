import Sequelize from "sequelize";
import "dotenv/config";

const dbname = process.env.DB_NAME;
const db = process.env.DATABASE;
const password = process.env.PASSWORD_DB;
const host = process.env.HOST

export const sequelize = new Sequelize(dbname, db, password, {
  host: host,
  dialect: "postgres",
});
