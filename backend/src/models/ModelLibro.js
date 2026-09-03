import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const ModelLibro = conn.define("Libro", {
  id_libro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  isbn: {
    type: DataTypes.STRING(17),
    allowNull: false
  },
  anio_publicacion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  num_paginas: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sinopsis: {
    type: DataTypes.STRING(200),
    allowNull: true
  }
}, {
  tableName: "Libros",
  timestamps: true
});
