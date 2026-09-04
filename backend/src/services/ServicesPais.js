import { crearPais, obtenerPais, actualizarPais, eliminarPais, obtenerPaisNombre } from "../repositories/RepositoryPais.js";

export function registrarPais(data) {
    if (!data.nombre_pais) {
        return new Promise.reject(new Error("Campos incompletos..."))
    }
    return crearPais(data)
}

export function listarPaises(data) {
    return obtenerPais(data)
}

export function modificarPais(data, id) {
    if(!id){
        return new Promise.reject(new Error("Id vacio.."))
    }
    return actualizarPais(data, id)
}

export function consultarPaisNombre(nombre) {
    if(!nombre){
        return new Promise.reject(new Error("Campo incompleto..."))
    }
    return obtenerPaisNombre(nombre)
}

export function borrarPais(id) {
    if(!id){
        return new Promise.reject(new Error("Id vacio..."))
    }

    return eliminarPais(id)
}
