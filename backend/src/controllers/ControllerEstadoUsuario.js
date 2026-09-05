import { registrarEstadoUsuario, borrarEstadoUsuario, listarEstadosUsuario, modificarEstadoUsuario, consultarEstadoUsuarioNombre } from "../services/ServicesEstadoUsuario.js";

export function crear(req, res) {
    registrarEstadoUsuario(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarEstadoUsuario(req.params.id)
        .then((response) => {
            res.status(200).json({ message: "estado de usuario eliminado correctamente" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarEstadosUsuario()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function actualizar(req, res) {
    modificarEstadoUsuario(req.body, req.params.id)
        .then((response)=>{
            res.status(200).json({message: "Estado de usuario editado correctamente."})
        })
        .catch((error)=>{
            res.status(400).json({error: error.message})
        })
}

export function buscarPorNombre(req, res) {
    consultarEstadoUsuarioNombre(req.params.nombre)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}
