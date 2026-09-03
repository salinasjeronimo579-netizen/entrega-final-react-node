import { ModelAutor } from "./ModelAutor.js";
import { ModelCategoria } from "./ModelCategoria.js";
import { ModelEditorial } from "./ModelEditorial.js";
import { ModelEjemplar } from "./ModelEjemplar.js";
import { ModelEstadoEjemplar } from "./ModelEstadoEjemplar.js";
import { ModelEstadoUsuario } from "./ModelEstadoUsuario.js";
import { ModelIdioma } from "./ModelIdioma.js";
import { ModelLibro } from "./ModelLibro.js";
import { ModelLibroAutor } from "./ModelLibroAutor.js";
import { ModelLibroCategoria } from "./ModelLibroCategoria.js";
import { ModelPais } from "./ModelPais.js";
import { ModelRol } from "./ModelRol.js";
import { ModelTipoDocumento } from "./ModelTipoDocumento.js";
import { ModelUsuario } from "./ModelUsuario.js";

// Se importa solo para que se ejecuten las asociaciones entre modelos
// (Relaciones.js no exporta nada, es un archivo de efecto secundario).
import "./Relaciones.js";

export const models = {
  ModelAutor,
  ModelCategoria,
  ModelEditorial,
  ModelEjemplar,
  ModelEstadoEjemplar,
  ModelEstadoUsuario,
  ModelIdioma,
  ModelLibro,
  ModelLibroAutor,
  ModelLibroCategoria,
  ModelPais,
  ModelRol,
  ModelTipoDocumento,
  ModelUsuario
};
