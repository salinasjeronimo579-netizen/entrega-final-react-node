import { crearEditorial, obtenerEditorial, actualizarEditorial, eliminarEditorial, obtenerEditorialNombre } from "../repositories/RepositoryEditorial.js";

export function registrarEditorial(data) {
    if (!data.nombre_editorial || !data.email) {
        return new Promise.reject(new Error("Campos incompletos..."))
    }
    return crearEditorial(data)
}

export function listarEditoriales(data) {
    return obtenerEditorial(data)
}

export function modificarEditorial(data, id) {
    if(!id){
        return new Promise.reject(new Error("Id vacio.."))
    }
    return actualizarEditorial(data, id)
}

export function consultarEditorialNombre(nombre) {
    if(!nombre){
        return new Promise.reject(new Error("Campo incompleto..."))
    }
    return obtenerEditorialNombre(nombre)
}

export function borrarEditorial(id) {
    if(!id){
        return new Promise.reject(new Error("Id vacio..."))
    }

    return eliminarEditorial(id)
}
