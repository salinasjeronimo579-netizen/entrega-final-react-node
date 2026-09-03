import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";
 
export const ModelTipoDocumento = conn.define("TipoDocumento", {
  id_tipo_documento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codigo: {
    type: DataTypes.STRING(5),
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  tableName: "Tipos_Documento",
  timestamps: true
});
