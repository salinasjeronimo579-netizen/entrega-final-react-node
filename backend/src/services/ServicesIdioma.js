import { crearIdioma, obtenerIdioma, actualizarIdioma, eliminarIdioma, obtenerIdiomaNombre } from "../repositories/RepositoryIdioma.js";

export function registrarIdioma(data) {
    if (!data.nombre) {
        return Promise.reject(new Error("Campos incompletos..."))
    }
    return crearIdioma(data)
}

export function listarIdiomas(data) {
    return obtenerIdioma(data)
}

export function modificarIdioma(data, id) {
    if(!id){
        return Promise.reject(new Error("Id vacio.."))
    }
    return actualizarIdioma(data, id)
}

export function consultarIdiomaNombre(nombre) {
    if(!nombre){
        return Promise.reject(new Error("Campo incompleto..."))
    }
    return obtenerIdiomaNombre(nombre)
}

export function borrarIdioma(id) {
    if(!id){
        return Promise.reject(new Error("Id vacio..."))
    }

    return eliminarIdioma(id)
}
