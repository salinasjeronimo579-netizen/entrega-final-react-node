import { registrarPais, borrarPais, listarPaises, modificarPais, consultarPaisNombre } from "../services/ServicesPais.js";

export function crear(req, res) {
    registrarPais(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarPais(req.params.id)
        .then((response) => {
            res.status(200).json({ message: "pais eliminado correctamente" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarPaises()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function actualizar(req, res) {
    modificarPais(req.body, req.params.id)
        .then((response)=>{
            res.status(200).json({message: "Pais editado correctamente."})
        })
        .catch((error)=>{
            res.status(400).json({error: error.message})
        })
}

export function buscarPorNombre(req, res) {
    consultarPaisNombre(req.params.nombre)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}
