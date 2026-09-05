import {Router} from "express";
import { listar, crear, eliminar, actualizar, buscarPorNombre } from "../controllers/ControllerIdioma.js";

export const router_idioma = Router()

router_idioma.get("/api/idiomas/", listar)
router_idioma.get("/api/idiomas/buscar/:nombre", buscarPorNombre)
router_idioma.post("/api/idiomas/", crear)
router_idioma.delete("/api/idiomas/:id", eliminar)
router_idioma.patch("/api/idiomas/:id", actualizar)
