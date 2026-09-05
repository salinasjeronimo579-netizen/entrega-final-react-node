import {Router} from "express";
import { listar, crear, eliminar, actualizar, buscarPorNombre } from "../controllers/ControllerAutor.js";

export const router_autor = Router()

router_autor.get("/api/autores/", listar)
router_autor.get("/api/autores/buscar/:nombre", buscarPorNombre)
router_autor.post("/api/autores/", crear)
router_autor.delete("/api/autores/:id", eliminar)
router_autor.patch("/api/autores/:id", actualizar)
