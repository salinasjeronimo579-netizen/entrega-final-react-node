import {Router} from "express";
import { listar, crear, eliminar, actualizar, buscarPorNombre } from "../controllers/ControllerEstadoEjemplar.js";

export const router_estado_ejemplar = Router()

router_estado_ejemplar.get("/api/estados-ejemplar/", listar)
router_estado_ejemplar.get("/api/estados-ejemplar/buscar/:nombre", buscarPorNombre)
router_estado_ejemplar.post("/api/estados-ejemplar/", crear)
router_estado_ejemplar.delete("/api/estados-ejemplar/:id", eliminar)
router_estado_ejemplar.patch("/api/estados-ejemplar/:id", actualizar)
