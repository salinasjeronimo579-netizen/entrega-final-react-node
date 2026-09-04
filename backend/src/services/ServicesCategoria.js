import { crearCategoria, obtenerCategoria, actualizarCategoria, eliminarCategoria, obtenerCategoriaNombre } from "../repositories/RepositoryCategoria.js";

export function registrarCategoria(data) {
    if (!data.nombre) {
        return Promise.reject(new Error("Campos incompletos..."))
    }
    return crearCategoria(data)
}

export function listarCategorias(data) {
    return obtenerCategoria(data)
}

export function modificarCategoria(data, id) {
    if(!id){
        return Promise.reject(new Error("Id vacio.."))
    }
    return actualizarCategoria(data, id)
}

export function consultarCategoriaNombre(nombre) {
    if(!nombre){
        return Promise.reject(new Error("Campo incompleto..."))
    }
    return obtenerCategoriaNombre(nombre)
}

export function borrarCategoria(id) {
    if(!id){
        return Promise.reject(new Error("Id vacio..."))
    }

    return eliminarCategoria(id)
}
