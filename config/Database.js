import { Sequelize } from "sequelize";

const db = new Sequelize("multi_roles_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
