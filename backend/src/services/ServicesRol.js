import { crearRol, obtenerRol, actualizarRol, eliminarRol, obtenerRolNombre } from "../repositories/RepositoryRol.js";

export function registrarRol(data) {
    if (!data.nombre_rol || !data.descripcion_rol) {
        return new Promise.reject(new Error("Campos incompletos..."))
    }
    return crearRol(data)
}

export function listarRoles(data) {
    return obtenerRol(data)
}

export function modificarRol(data, id) {
    if(!id){
        return new Promise.reject(new Error("Id vacio.."))
    }
    return actualizarRol(data, id)
}

export function consultarRolNombre(nombre) {
    if(!nombre){
        return new Promise.reject(new Error("Campo incompleto..."))
    }
    return obtenerRolNombre(nombre)
}

export function borrarRol(id) {
    if(!id){
        return new Promise.reject(new Error("Id vacio..."))
    }

    return eliminarRol(id)
}
