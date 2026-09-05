import { registrarIdioma, borrarIdioma, listarIdiomas, modificarIdioma, consultarIdiomaNombre } from "../services/ServicesIdioma.js";

export function crear(req, res) {
    registrarIdioma(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarIdioma(req.params.id)
        .then((response) => {
            res.status(200).json({ message: "idioma eliminado correctamente" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarIdiomas()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function actualizar(req, res) {
    modificarIdioma(req.body, req.params.id)
        .then((response)=>{
            res.status(200).json({message: "Idioma editado correctamente."})
        })
        .catch((error)=>{
            res.status(400).json({error: error.message})
        })
}

export function buscarPorNombre(req, res) {
    consultarIdiomaNombre(req.params.nombre)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}
