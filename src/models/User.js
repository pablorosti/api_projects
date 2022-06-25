import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Role } from "./Role.js";

export const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(64),
    },
  },
  {
    timestamps: false,
  }
);

User.hasMany(Role, {
  foreignKey: "userId",
  sourceKey: "id",
});

Role.belongsTo(User, {
  foreignKey: "userId",
  targetId: "id",
});
