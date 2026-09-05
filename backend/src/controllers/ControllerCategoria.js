import { registrarCategoria, borrarCategoria, listarCategorias, modificarCategoria, consultarCategoriaNombre } from "../services/ServicesCategoria.js";

export function crear(req, res) {
    registrarCategoria(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarCategoria(req.params.id)
        .then((response) => {
            res.status(200).json({ message: "categoria eliminada correctamente" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarCategorias()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function actualizar(req, res) {
    modificarCategoria(req.body, req.params.id)
        .then((response)=>{
            res.status(200).json({message: "Categoria editada correctamente."})
        })
        .catch((error)=>{
            res.status(400).json({error: error.message})
        })
}

export function buscarPorNombre(req, res) {
    consultarCategoriaNombre(req.params.nombre)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}
