import Router from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controller.js";
import { isAdmin, verifyToken } from "../middlewares/authJwt.js";

const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);
router.post("/tasks", [verifyToken, isAdmin], createTask);
router.put("/tasks/:id", [verifyToken, isAdmin], updateTask);
router.delete("/tasks/:id", [verifyToken, isAdmin], deleteTask);

export default router;
