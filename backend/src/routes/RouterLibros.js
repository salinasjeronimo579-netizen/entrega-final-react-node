import {Router} from "express";
import { listar, crear, eliminar, actualizar, buscarPorTitulo } from "../controllers/ControllerLibro.js";

export const router_libro = Router()

router_libro.get("/api/libros/", listar)
router_libro.get("/api/libros/buscar/:titulo", buscarPorTitulo)
router_libro.post("/api/libros/", crear)
router_libro.delete("/api/libros/:id", eliminar)
router_libro.patch("/api/libros/:id", actualizar)
