import { registrarEditorial, borrarEditorial, listarEditoriales, modificarEditorial, consultarEditorialNombre } from "../services/ServicesEditorial.js";

export function crear(req, res) {
    registrarEditorial(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarEditorial(req.params.id)
        .then((response) => {
            res.status(200).json({ message: "editorial eliminada correctamente" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarEditoriales()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function actualizar(req, res) {
    modificarEditorial(req.body, req.params.id)
        .then((response)=>{
            res.status(200).json({message: "Editorial editada correctamente."})
        })
        .catch((error)=>{
            res.status(400).json({error: error.message})
        })
}

export function buscarPorNombre(req, res) {
    consultarEditorialNombre(req.params.nombre)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}
