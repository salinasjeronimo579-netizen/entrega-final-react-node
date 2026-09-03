import { ModelTipoDocumento } from "../models/ModelTipoDocumento.js";

export function agregarTipoDocumento(data) {
    return ModelTipoDocumento.create(data)
}

export function obtenerTipoDocumentoNombre(nombre) {
    return ModelTipoDocumento.findAll({
        where: {nombre: nombre}
    })
}

export function actualizarTipoDocumento(data, id) {
    return ModelTipoDocumento.update(data, {
        where: {id_tipo_documento: id}
    })
}

export function eliminarTipoDocumento(id) {
    return ModelTipoDocumento.destroy({
        where: {id_tipo_documento: id}
    })
}