import { registrarEstadoEjemplar, borrarEstadoEjemplar, listarEstadosEjemplar, modificarEstadoEjemplar, consultarEstadoEjemplarNombre } from "../services/ServicesEstadoEjemplar.js";

export function crear(req, res) {
    registrarEstadoEjemplar(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarEstadoEjemplar(req.params.id)
        .then((response) => {
            res.status(200).json({ message: "estado de ejemplar eliminado correctamente" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarEstadosEjemplar()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function actualizar(req, res) {
    modificarEstadoEjemplar(req.body, req.params.id)
        .then((response)=>{
            res.status(200).json({message: "Estado de ejemplar editado correctamente."})
        })
        .catch((error)=>{
            res.status(400).json({error: error.message})
        })
}

export function buscarPorNombre(req, res) {
    consultarEstadoEjemplarNombre(req.params.nombre)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}
