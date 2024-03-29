import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/Project.js";
import "./models/Task.js";
import "./models/User.js";
import "./models/Role.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(process.env.PORT ?? 4000);
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
