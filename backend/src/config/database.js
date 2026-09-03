import { NAME_DB, USER_DB, PASSWORD_DB, OBJ_CONN } from "./credentials.js";
import { Sequelize } from "sequelize";

export const conn = new Sequelize(NAME_DB, USER_DB, PASSWORD_DB, OBJ_CONN)