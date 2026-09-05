import { Router } from "express";
import { router_usuario } from "./RouterUsuarios.js";


const router = Router()

router.use(router_usuario)

export {router};
