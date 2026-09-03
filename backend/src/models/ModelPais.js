import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const ModelPais = conn.define("Pais", {
  id_pais: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_pais: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  tableName: "Paises",
  timestamps: true
});
