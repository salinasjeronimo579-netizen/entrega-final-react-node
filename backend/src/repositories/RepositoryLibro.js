import { ModelLibro } from "../models/ModelLibro.js";

export function crearLibro(data) {
    return ModelLibro.create(data)
}

export function obtenerLibro(data) {
    return ModelLibro.findAll(data)
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
