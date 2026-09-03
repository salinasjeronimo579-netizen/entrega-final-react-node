import { ModelEstadoUsuario } from "../models/ModelEstadoUsuario.js";

export function crearEstadoUsuario(data) {
    return ModelEstadoUsuario.create(data)
}

export function obtenerEstadoUsuario(data) {
    return ModelEstadoUsuario.findAll(data)
}

export function obtenerEstadoUsuarioNombre(nombre) {
    return ModelEstadoUsuario.findAll({
        where: {nombre_estado_usuario: nombre}
    })
}

export function actualizarEstadoUsuario(data, id) {
    return ModelEstadoUsuario.update(data, {
        where: {id_estado_usuario: id}
    })
}

export function eliminarEstadoUsuario(id) {
    return ModelEstadoUsuario.destroy({
        where: {id_estado_usuario: id}
    })
}
