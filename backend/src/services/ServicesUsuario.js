import { crearUsuario, obtenerUsuario, actualizarUsuario, eliminarUsuario, obtenerUsuarioNombre} from "../repositories/RepositoryUsuario.js";

export function registrarUsuario(data) {
    if (!data.primer_nombre || !data.primer_apellido || !data.telefono || !data.email || !data.direccion || !data.fecha_registro){
        return Promise.reject(new Error("Campos incompletos..."))
    }
    return crearUsuario(data)
}

export function listarUsuarios(data) {
    return obtenerUsuario(data)
}

export function modificarUsuario(data, id) {
    if(!id){
        return Promise.reject(new Error("Id vacio.."))
    }
    return actualizarUsuario(data, id)
}

export function consultarUsuariosNombre(nombre) {
    if(!nombre){
        return Promise.reject(new Error("Campo incompleto..."))
    }
    return obtenerUsuarioNombre(nombre)
}

export function borrarUsuario(id) {
    if(!id){
        return Promise.reject(new Error("Id vacio..."))
    }

    return eliminarUsuario(id)
}
