import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const ModelEstadoEjemplar = conn.define("EstadoEjemplar", {
  id_estado_ejemplar: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_estado: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  tableName: "Estados_Ejemplar",
  timestamps: true
});
