import { crearEstadoUsuario, obtenerEstadoUsuario, actualizarEstadoUsuario, eliminarEstadoUsuario, obtenerEstadoUsuarioNombre } from "../repositories/RepositoryEstadoUsuario.js";

export function registrarEstadoUsuario(data) {
    if (!data.nombre_estado_usuario) {
        return Promise.reject(new Error("Campos incompletos..."))
    }
    return crearEstadoUsuario(data)
}

export function listarEstadosUsuario(data) {
    return obtenerEstadoUsuario(data)
}

export function modificarEstadoUsuario(data, id) {
    if(!id){
        return Promise.reject(new Error("Id vacio.."))
    }
    return actualizarEstadoUsuario(data, id)
}

export function consultarEstadoUsuarioNombre(nombre) {
    if(!nombre){
        return Promise.reject(new Error("Campo incompleto..."))
    }
    return obtenerEstadoUsuarioNombre(nombre)
}

export function borrarEstadoUsuario(id) {
    if(!id){
        return Promise.reject(new Error("Id vacio..."))
    }

    return eliminarEstadoUsuario(id)
}
