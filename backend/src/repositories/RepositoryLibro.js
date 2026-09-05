import { ModelLibro } from "../models/ModelLibro.js";
import { ModelAutor } from "../models/ModelAutor.js";
import { ModelCategoria } from "../models/ModelCategoria.js";

export function crearLibro(data) {
    return ModelLibro.create(data)
}

export function obtenerLibro(data) {
    return ModelLibro.findAll({
        ...data,
        include: [
            { model: ModelAutor, as: "autores" },
            { model: ModelCategoria, as: "categorias" }
        ]
    })
}

export function obtenerLibroTitulo(titulo) {
    return ModelLibro.findAll({
        where: {titulo: titulo}
    })
}

export function actualizarLibro(data, id) {
    return ModelLibro.update(data, {
        where: {id_libro: id}
    })
}

export function eliminarLibro(id) {
    return ModelLibro.destroy({
        where: {id_libro: id}
    })
}
