import { Router } from "express"
import * as universoController from './../controllers/bruxoController.js'

const router = Router();

router.get("/", universoController.listarTodos);
router.get("/:id", universoController.listarTodos);

export default router;