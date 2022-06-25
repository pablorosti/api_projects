import { Role } from "../models/Role.js";
import { User } from "../models/User.js";

export const getUsers = async (req, res) => {
  const users = await User.findAll({
    include: Role,
    through: {
      attributes: ["name"],
    },
  });
  res.send(users);
};
