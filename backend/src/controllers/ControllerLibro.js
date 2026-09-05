import { registrarLibro, borrarLibro, listarLibros, modificarLibro, consultarLibroTitulo } from "../services/ServicesLibro.js";

export function crear(req, res) {
    registrarLibro(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarLibro(req.params.id)
        .then((response) => {
            res.status(200).json({ message: "libro eliminado correctamente" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarLibros()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function actualizar(req, res) {
    modificarLibro(req.body, req.params.id)
        .then((response)=>{
            res.status(200).json({message: "Libro editado correctamente."})
        })
        .catch((error)=>{
            res.status(400).json({error: error.message})
        })
}

export function buscarPorTitulo(req, res) {
    consultarLibroTitulo(req.params.titulo)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}
