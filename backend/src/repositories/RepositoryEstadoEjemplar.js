import { ModelEstadoEjemplar } from "../models/ModelEstadoEjemplar.js";

export function crearEstadoEjemplar(data) {
    return ModelEstadoEjemplar.create(data)
}

export function obtenerEstadoEjemplar(data) {
    return ModelEstadoEjemplar.findAll(data)
}

export function obtenerEstadoEjemplarNombre(nombre) {
    return ModelEstadoEjemplar.findAll({
        where: {nombre_estado: nombre}
    })
}

export function actualizarEstadoEjemplar(data, id) {
    return ModelEstadoEjemplar.update(data, {
        where: {id_estado_ejemplar: id}
    })
}

export function eliminarEstadoEjemplar(id) {
    return ModelEstadoEjemplar.destroy({
        where: {id_estado_ejemplar: id}
    })
}
