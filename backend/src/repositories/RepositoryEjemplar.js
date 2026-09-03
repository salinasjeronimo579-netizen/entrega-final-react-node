import { ModelEjemplar } from "../models/ModelEjemplar.js";

export function crearEjemplar(data) {
    return ModelEjemplar.create(data)
}

export function obtenerEjemplar(data) {
    return ModelEjemplar.findAll(data)
}

export function obtenerEjemplarCodigo(codigo) {
    return ModelEjemplar.findAll({
        where: {codigo_inventario: codigo}
    })
}

export function actualizarEjemplar(data, id) {
    return ModelEjemplar.update(data, {
        where: {id_ejemplar: id}
    })
}

export function eliminarEjemplar(id) {
    return ModelEjemplar.destroy({
        where: {id_ejemplar: id}
    })
}
