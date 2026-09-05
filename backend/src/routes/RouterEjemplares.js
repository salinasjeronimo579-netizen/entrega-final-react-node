import {Router} from "express";
import { listar, crear, eliminar, actualizar, buscarPorCodigo } from "../controllers/ControllerEjemplar.js";

export const router_ejemplar = Router()

router_ejemplar.get("/api/ejemplares/", listar)
router_ejemplar.get("/api/ejemplares/buscar/:codigo", buscarPorCodigo)
router_ejemplar.post("/api/ejemplares/", crear)
router_ejemplar.delete("/api/ejemplares/:id", eliminar)
router_ejemplar.patch("/api/ejemplares/:id", actualizar)
