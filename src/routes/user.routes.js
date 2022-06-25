import Router from "express";
import { getUsers } from "../controllers/user.controller.js";
import { isAdmin, verifyToken } from "../middlewares/authJwt.js";

const router = Router();

router.get("/users", [verifyToken, isAdmin], getUsers);

export default router;
