import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const ModelIdioma = conn.define("Idioma", {
  id_idioma: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  tableName: "Idiomas",
  timestamps: true
});
