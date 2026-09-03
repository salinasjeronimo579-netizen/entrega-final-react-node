import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const ModelCategoria = conn.define("Categoria", {
  id_categoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
}, {
  tableName: "Categorias",
  timestamps: true
});
