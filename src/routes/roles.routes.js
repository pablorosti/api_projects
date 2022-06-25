import Router from "express";
import { getRoles } from "../controllers/role.controller.js";

const router = Router();

router.get("/roles", getRoles);

export default router;
