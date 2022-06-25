import Router from "express";
import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
  updateProject,
} from "../controllers/projects.controller.js";

import { isAdmin, verifyToken } from "../middlewares/authJwt.js";

const router = Router();

router.get("/projects", getProjects);
router.get("/projects/:id", getProject);
router.post("/projects", [verifyToken, isAdmin], createProject);
router.put("/projects/:id", [verifyToken, isAdmin], updateProject);
router.delete("/projects/:id", [verifyToken, isAdmin], deleteProject);

export default router;
