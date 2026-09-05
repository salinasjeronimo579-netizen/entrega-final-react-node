import {Router} from "express";
import { listar, crear, eliminar, actualizar, buscarPorNombre } from "../controllers/ControllerUsuario.js";

export const router_usuario = Router()

router_usuario.get("/api/usuarios/", listar)
router_usuario.get("/api/usuarios/buscar/:nombre", buscarPorNombre)
router_usuario.post("/api/usuarios/", crear)
router_usuario.delete("/api/usuarios/:id", eliminar)
router_usuario.patch("/api/usuarios/:id", actualizar)

