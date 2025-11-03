import { Router } from "express"
import * as universoController from './../controllers/bruxoController.js'

const router = Router();

router.get("/", universoController.listarTodos);
router.get("/:id", universoController.listarTodos);
router.post("/", createuniverso);
router.delete("/:id", deleteuniverso);
router.put("/:id", updateuniverso);

export default router;