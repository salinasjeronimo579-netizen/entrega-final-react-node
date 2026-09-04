import { crearLibro, obtenerLibro, actualizarLibro, eliminarLibro, obtenerLibroTitulo } from "../repositories/RepositoryLibro.js";

export function registrarLibro(data) {
    if (!data.titulo || !data.isbn || !data.anio_publicacion || !data.num_paginas) {
        return new Promise.reject(new Error("Campos incompletos..."))
    }
    return crearLibro(data)
}

export function listarLibros(data) {
    return obtenerLibro(data)
}

export function modificarLibro(data, id) {
    if(!id){
        return new Promise.reject(new Error("Id vacio.."))
    }
    return actualizarLibro(data, id)
}

export function consultarLibroTitulo(titulo) {
    if(!titulo){
        return new Promise.reject(new Error("Campo incompleto..."))
    }
    return obtenerLibroTitulo(titulo)
}

export function borrarLibro(id) {
    if(!id){
        return new Promise.reject(new Error("Id vacio..."))
    }

    return eliminarLibro(id)
}
