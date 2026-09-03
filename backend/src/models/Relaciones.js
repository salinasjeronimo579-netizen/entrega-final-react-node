import { ModelLibro } from "./ModelLibro.js";
import { ModelAutor } from "./ModelAutor.js";
import { ModelCategoria } from "./ModelCategoria.js";
import { ModelEditorial } from "./ModelEditorial.js";
import { ModelIdioma } from "./ModelIdioma.js";
import { ModelEjemplar } from "./ModelEjemplar.js";
import { ModelEstadoEjemplar } from "./ModelEstadoEjemplar.js";
import { ModelEstadoUsuario } from "./ModelEstadoUsuario.js";
import { ModelRol } from "./ModelRol.js";
import { ModelTipoDocumento } from "./ModelTipoDocumento.js";
import { ModelUsuario } from "./ModelUsuario.js";
import { ModelLibroAutor } from "./ModelLibroAutor.js";
import { ModelLibroCategoria } from "./ModelLibroCategoria.js";

// Este archivo solo define las relaciones entre los modelos que ya existen.
// Todavía faltan tablas (Prestamo, Reserva, etc.), así que esas no se
// incluyen. El modelo Pais tampoco se relaciona por ahora: ningún modelo
// tiene una columna id_pais (por ejemplo, "nacionalidad" en Autor es
// texto libre, no una FK), así que no hay nada que conectar todavía.

// --- Libro <-> Autor (muchos a muchos, a través de Libro_Autor) ---
ModelLibro.belongsToMany(ModelAutor, {
  through: ModelLibroAutor,
  foreignKey: "id_libro",
  otherKey: "id_autor",
  as: "autores"
});
ModelAutor.belongsToMany(ModelLibro, {
  through: ModelLibroAutor,
  foreignKey: "id_autor",
  otherKey: "id_libro",
  as: "libros"
});

// --- Libro <-> Categoria (muchos a muchos, a través de Libro_Categoria) ---
ModelLibro.belongsToMany(ModelCategoria, {
  through: ModelLibroCategoria,
  foreignKey: "id_libro",
  otherKey: "id_categoria",
  as: "categorias"
});
ModelCategoria.belongsToMany(ModelLibro, {
  through: ModelLibroCategoria,
  foreignKey: "id_categoria",
  otherKey: "id_libro",
  as: "libros"
});

// --- Editorial 1 --- N Libro ---
ModelEditorial.hasMany(ModelLibro, { foreignKey: "id_editorial", as: "libros" });
ModelLibro.belongsTo(ModelEditorial, { foreignKey: "id_editorial", as: "editorial" });

// --- Idioma 1 --- N Libro ---
ModelIdioma.hasMany(ModelLibro, { foreignKey: "id_idioma", as: "libros" });
ModelLibro.belongsTo(ModelIdioma, { foreignKey: "id_idioma", as: "idioma" });

// --- Libro 1 --- N Ejemplar (cada ejemplar es una copia física de un libro) ---
ModelLibro.hasMany(ModelEjemplar, { foreignKey: "id_libro", as: "ejemplares" });
ModelEjemplar.belongsTo(ModelLibro, { foreignKey: "id_libro", as: "libro" });

// --- EstadoEjemplar 1 --- N Ejemplar ---
ModelEstadoEjemplar.hasMany(ModelEjemplar, { foreignKey: "id_estado_ejemplar", as: "ejemplares" });
ModelEjemplar.belongsTo(ModelEstadoEjemplar, { foreignKey: "id_estado_ejemplar", as: "estado" });

// --- Rol 1 --- N Usuario ---
ModelRol.hasMany(ModelUsuario, { foreignKey: "id_rol", as: "usuarios" });
ModelUsuario.belongsTo(ModelRol, { foreignKey: "id_rol", as: "rol" });

// --- EstadoUsuario 1 --- N Usuario ---
ModelEstadoUsuario.hasMany(ModelUsuario, { foreignKey: "id_estado_usuario", as: "usuarios" });
ModelUsuario.belongsTo(ModelEstadoUsuario, { foreignKey: "id_estado_usuario", as: "estado" });

// --- TipoDocumento 1 --- N Usuario ---
ModelTipoDocumento.hasMany(ModelUsuario, { foreignKey: "id_tipo_documento", as: "usuarios" });
ModelUsuario.belongsTo(ModelTipoDocumento, { foreignKey: "id_tipo_documento", as: "tipoDocumento" });
