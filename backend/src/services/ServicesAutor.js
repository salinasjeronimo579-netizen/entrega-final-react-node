import { crearAutor, obtenerAutor, actualizarAutor, eliminarAutor, obtenerAutorNombre } from "../repositories/RepositoryAutor.js";

export function registrarAutor(data) {
    if (!data.nombre || !data.apellido || !data.nacionalidad || !data.fecha_nacimiento) {
        return new Promise.reject(new Error("Campos incompletos..."))
    }
    return crearAutor(data)
}

export function listarAutores(data) {
    return obtenerAutor(data)
}

export function modificarAutor(data, id) {
    if(!id){
        return new Promise.reject(new Error("Id vacio.."))
    }
    return actualizarAutor(data, id)
}

export function consultarAutorNombre(nombre) {
    if(!nombre){
        return new Promise.reject(new Error("Campo incompleto..."))
    }
    return obtenerAutorNombre(nombre)
}

export function borrarAutor(id) {
    if(!id){
        return new Promise.reject(new Error("Id vacio..."))
    }

    return eliminarAutor(id)
}
