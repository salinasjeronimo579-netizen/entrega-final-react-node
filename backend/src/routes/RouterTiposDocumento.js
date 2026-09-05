import {Router} from "express";
import { listar, crear, eliminar, actualizar, buscarPorNombre } from "../controllers/ControllerTipoDocumento.js";

export const router_tipo_documento = Router()

router_tipo_documento.get("/api/tipos-documento/", listar)
router_tipo_documento.get("/api/tipos-documento/buscar/:nombre", buscarPorNombre)
router_tipo_documento.post("/api/tipos-documento/", crear)
router_tipo_documento.delete("/api/tipos-documento/:id", eliminar)
router_tipo_documento.patch("/api/tipos-documento/:id", actualizar)
