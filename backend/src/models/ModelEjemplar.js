import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const ModelEjemplar = conn.define("Ejemplar", {
  id_ejemplar: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codigo_inventario: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  ubicacion_estante: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  fecha_adquisicion: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  codigo_barras: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: "Ejemplares",
  timestamps: true
});
