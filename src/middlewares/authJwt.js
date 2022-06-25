import jwt from "jsonwebtoken";
import { Role } from "../models/Role.js";
import { User } from "../models/User.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({ message: "no token provided" });

    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    req.userId = decoded.id;

    const user = await User.findByPk(decoded.id);
    if (!user) return res.status(404).json({ message: "user not found" });
    next();
  } catch (error) {
    return res.status(500).json({ message: "Unauthorize" });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.userId },
      include: Role,
    });
    if (user.roles[0].name !== "admin")
      return res.status(404).json({ message: "Required admin role" });
    next();
  } catch (error) {
    return res.status(404).json({ message: "Unanthorize" });
  }
};
