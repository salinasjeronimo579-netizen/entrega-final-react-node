import { registrarEjemplar, borrarEjemplar, listarEjemplares, modificarEjemplar, consultarEjemplarCodigo } from "../services/ServicesEjemplar.js";

export function crear(req, res) {
    registrarEjemplar(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarEjemplar(req.params.id)
        .then((response) => {
            res.status(200).json({ message: "ejemplar eliminado correctamente" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarEjemplares()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function actualizar(req, res) {
    modificarEjemplar(req.body, req.params.id)
        .then((response)=>{
            res.status(200).json({message: "Ejemplar editado correctamente."})
        })
        .catch((error)=>{
            res.status(400).json({error: error.message})
        })
}

export function buscarPorCodigo(req, res) {
    consultarEjemplarCodigo(req.params.codigo)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}
