import {Router} from "express";
import { listar, crear, eliminar, actualizar, buscarPorNombre } from "../controllers/ControllerRol.js";

export const router_rol = Router()

router_rol.get("/api/roles/", listar)
router_rol.get("/api/roles/buscar/:nombre", buscarPorNombre)
router_rol.post("/api/roles/", crear)
router_rol.delete("/api/roles/:id", eliminar)
router_rol.patch("/api/roles/:id", actualizar)
