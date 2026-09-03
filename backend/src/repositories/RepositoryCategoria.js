import { ModelCategoria } from "../models/ModelCategoria.js";

export function crearCategoria(data) {
    return ModelCategoria.create(data)
}

export function obtenerCategoria(data) {
    return ModelCategoria.findAll(data)
}

export function obtenerCategoriaNombre(nombre) {
    return ModelCategoria.findAll({
        where: {nombre: nombre}
    })
}

export function actualizarCategoria(data, id) {
    return ModelCategoria.update(data, {
        where: {id_categoria: id}
    })
}

export function eliminarCategoria(id) {
    return ModelCategoria.destroy({
        where: {id_categoria: id}
    })
}
