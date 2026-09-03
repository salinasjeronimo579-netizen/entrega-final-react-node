import { conn } from "../config/database.js";

// Tabla intermedia Libro <-> Categoria (muchos a muchos)
// Las columnas id_libro / id_categoria se agregan automáticamente
// desde las asociaciones (belongsToMany) definidas en Relaciones.js
export const ModelLibroCategoria = conn.define("LibroCategoria", {}, {
  tableName: "Libro_Categoria",
  timestamps: false
});
