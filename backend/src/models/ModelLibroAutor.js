import { conn } from "../config/database.js";

// Tabla intermedia Libro <-> Autor (muchos a muchos)
// Las columnas id_libro / id_autor se agregan automáticamente
// desde las asociaciones (belongsToMany) definidas en Relaciones.js
export const ModelLibroAutor = conn.define("LibroAutor", {}, {
  tableName: "Libro_Autor",
  timestamps: false
});
