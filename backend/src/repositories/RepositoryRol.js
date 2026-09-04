import { ModelRol } from "../models/ModelRol.js";

export function crearRol(data) {
    return ModelRol.create(data)
}

export function obtenerRol(data) {
    return ModelRol.findAll(data)
}

export function obtenerRolNombre(nombre) {
    return ModelRol.findAll({
        where: {nombre_rol: nombre}
    })
}

export function actualizarRol(data, id) {
    return ModelRol.update(data, {
        where: {id_rol: id}
    })
}

export function eliminarRol(id) {
    return ModelRol.destroy({
        where: {id_rol: id}
    })
}