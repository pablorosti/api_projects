import { DataTypes } from "sequelize";

import { sequelize } from "../database/database.js";
import { Task } from "./Task.js";

export const Project = sequelize.define(
  "projects",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    priority: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    timestamps: false,
  }
);

Project.hasMany(Task, {
  foreignKey: "projectId",
  sourceKey: "id",
});

Task.belongsTo(Project, {
  foreignKey: "projectId",
  targetId: "id",
});
