import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const ModelEditorial = conn.define("Editorial", {
  id_editorial: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_editorial: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  pagina_web: {
    type: DataTypes.STRING(200),
    allowNull: true
  }
}, {
  tableName: "Editoriales",
  timestamps: true
});
