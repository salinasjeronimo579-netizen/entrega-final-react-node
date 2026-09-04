import { crearTipoDocumento, obtenerTipoDocumento, actualizarTipoDocumento, eliminarTipoDocumento, obtenerTipoDocumentoNombre } from "../repositories/RepositoryTipoDocumento.js";

export function registrarTipoDocumento(data) {
    if (!data.codigo || !data.nombre) {
        return Promise.reject(new Error("Campos incompletos..."))
    }
    return crearTipoDocumento(data)
}

export function listarTiposDocumento(data) {
    return obtenerTipoDocumento(data)
}

export function modificarTipoDocumento(data, id) {
    if(!id){
        return Promise.reject(new Error("Id vacio.."))
    }
    return actualizarTipoDocumento(data, id)
}

export function consultarTipoDocumentoNombre(nombre) {
    if(!nombre){
        return Promise.reject(new Error("Campo incompleto..."))
    }
    return obtenerTipoDocumentoNombre(nombre)
}

export function borrarTipoDocumento(id) {
    if(!id){
        return Promise.reject(new Error("Id vacio..."))
    }

    return eliminarTipoDocumento(id)
}
