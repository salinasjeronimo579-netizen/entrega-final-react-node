import {Router} from "express";
import { listar, crear, eliminar, actualizar, buscarPorNombre } from "../controllers/ControllerCategoria.js";

export const router_categoria = Router()

router_categoria.get("/api/categorias/", listar)
router_categoria.get("/api/categorias/buscar/:nombre", buscarPorNombre)
router_categoria.post("/api/categorias/", crear)
router_categoria.delete("/api/categorias/:id", eliminar)
router_categoria.patch("/api/categorias/:id", actualizar)
