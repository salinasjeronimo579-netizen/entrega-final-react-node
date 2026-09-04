import { crearEstadoEjemplar, obtenerEstadoEjemplar, actualizarEstadoEjemplar, eliminarEstadoEjemplar, obtenerEstadoEjemplarNombre } from "../repositories/RepositoryEstadoEjemplar.js";

export function registrarEstadoEjemplar(data) {
    if (!data.nombre_estado) {
        return Promise.reject(new Error("Campos incompletos..."))
    }
    return crearEstadoEjemplar(data)
}

export function listarEstadosEjemplar(data) {
    return obtenerEstadoEjemplar(data)
}

export function modificarEstadoEjemplar(data, id) {
    if(!id){
        return Promise.reject(new Error("Id vacio.."))
    }
    return actualizarEstadoEjemplar(data, id)
}

export function consultarEstadoEjemplarNombre(nombre) {
    if(!nombre){
        return Promise.reject(new Error("Campo incompleto..."))
    }
    return obtenerEstadoEjemplarNombre(nombre)
}

export function borrarEstadoEjemplar(id) {
    if(!id){
        return Promise.reject(new Error("Id vacio..."))
    }

    return eliminarEstadoEjemplar(id)
}
