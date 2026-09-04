import { ModelUsuario } from "../models/ModelUsuario.js";

export function crearUsuario(data) {
    return ModelUsuario.create(data);
}

export function obtenerUsuario(data) {
    return ModelUsuario.findAll(data)
}

export function actualizarUsuario(data, id) {
    return ModelUsuario.update(data, {
        where: { id_usuario: id }
    })
}

export function eliminarUsuario(id){
    return ModelUsuario.destroy({
        where: {id_usuario: id}
    })
}

export function obtenerUsuarioNombre(nombre) {
    return ModelUsuario.findAll({
        where: {primer_nombre: nombre}
    })
}


