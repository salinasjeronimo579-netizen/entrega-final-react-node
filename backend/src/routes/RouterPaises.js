import {Router} from "express";
import { listar, crear, eliminar, actualizar, buscarPorNombre } from "../controllers/ControllerPais.js";

export const router_pais = Router()

router_pais.get("/api/paises/", listar)
router_pais.get("/api/paises/buscar/:nombre", buscarPorNombre)
router_pais.post("/api/paises/", crear)
router_pais.delete("/api/paises/:id", eliminar)
router_pais.patch("/api/paises/:id", actualizar)
