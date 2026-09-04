import { crearEjemplar, obtenerEjemplar, actualizarEjemplar, eliminarEjemplar, obtenerEjemplarCodigo } from "../repositories/RepositoryEjemplar.js";

export function registrarEjemplar(data) {
    if (!data.codigo_inventario || !data.ubicacion_estante || !data.fecha_adquisicion || !data.codigo_barras) {
        return new Promise.reject(new Error("Campos incompletos..."))
    }
    return crearEjemplar(data)
}

export function listarEjemplares(data) {
    return obtenerEjemplar(data)
}

export function modificarEjemplar(data, id) {
    if(!id){
        return new Promise.reject(new Error("Id vacio.."))
    }
    return actualizarEjemplar(data, id)
}

export function consultarEjemplarCodigo(codigo) {
    if(!codigo){
        return new Promise.reject(new Error("Campo incompleto..."))
    }
    return obtenerEjemplarCodigo(codigo)
}

export function borrarEjemplar(id) {
    if(!id){
        return new Promise.reject(new Error("Id vacio..."))
    }

    return eliminarEjemplar(id)
}
