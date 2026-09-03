import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const ModelAutor = conn.define("Autor", {
  id_autor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  nacionalidad: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  biografia: {
    type: DataTypes.STRING(300),
    allowNull: true
  }
}, {
  tableName: "Autores",
  timestamps: true
});
