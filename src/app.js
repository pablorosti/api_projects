import express from "express";
import morgan from "morgan";
import projectsRoutes from "./routes/projects.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import userRoutes from "./routes/auth.routes.js";
import rolesRoute from "./routes/roles.routes.js";
import userRoute from "./routes/user.routes.js";
import { createAdminUser } from "./libs/initialSetup.js";
import "dotenv/config";

const app = express();
createAdminUser();

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", projectsRoutes);
app.use("/api", taskRoutes);
app.use("/api/auth", userRoutes);
app.use("/api", rolesRoute);
app.use("/api", userRoute);

export default app;
