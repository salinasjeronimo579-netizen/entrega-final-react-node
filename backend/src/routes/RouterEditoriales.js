import {Router} from "express";
import { listar, crear, eliminar, actualizar, buscarPorNombre } from "../controllers/ControllerEditorial.js";

export const router_editorial = Router()

router_editorial.get("/api/editoriales/", listar)
router_editorial.get("/api/editoriales/buscar/:nombre", buscarPorNombre)
router_editorial.post("/api/editoriales/", crear)
router_editorial.delete("/api/editoriales/:id", eliminar)
router_editorial.patch("/api/editoriales/:id", actualizar)
