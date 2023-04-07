import { sequelize } from "sequelize";

const db = new sequelize("multi_roles_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
