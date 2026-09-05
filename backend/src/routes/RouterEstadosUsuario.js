import {Router} from "express";
import { listar, crear, eliminar, actualizar, buscarPorNombre } from "../controllers/ControllerEstadoUsuario.js";

export const router_estado_usuario = Router()

router_estado_usuario.get("/api/estados-usuario/", listar)
router_estado_usuario.get("/api/estados-usuario/buscar/:nombre", buscarPorNombre)
router_estado_usuario.post("/api/estados-usuario/", crear)
router_estado_usuario.delete("/api/estados-usuario/:id", eliminar)
router_estado_usuario.patch("/api/estados-usuario/:id", actualizar)
