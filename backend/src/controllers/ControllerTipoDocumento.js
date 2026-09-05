import { registrarTipoDocumento, borrarTipoDocumento, listarTiposDocumento, modificarTipoDocumento, consultarTipoDocumentoNombre } from "../services/ServicesTipoDocumento.js";

export function crear(req, res) {
    registrarTipoDocumento(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function eliminar(req, res) {
    borrarTipoDocumento(req.params.id)
        .then((response) => {
            res.status(200).json({ message: "tipo de documento eliminado correctamente" })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function listar(req, res) {
    listarTiposDocumento()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

export function actualizar(req, res) {
    modificarTipoDocumento(req.body, req.params.id)
        .then((response)=>{
            res.status(200).json({message: "Tipo de documento editado correctamente."})
        })
        .catch((error)=>{
            res.status(400).json({error: error.message})
        })
}

export function buscarPorNombre(req, res) {
    consultarTipoDocumentoNombre(req.params.nombre)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}
