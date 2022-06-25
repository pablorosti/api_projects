import { Role } from "../models/Role.js";
import { User } from "../models/User.js";
import { encryptPassword } from "./encryptPassword.js";

export const createAdminUser = async () => {
  try {
    const countRole = await Role.count();
    const countUser = await User.count();
    if (countRole > 0 && countUser > 0) return;

    const newPassword = await encryptPassword("admin");

    const user = await User.create({
      username: "admin",
      email: "admin@admin.com",
      password: newPassword,
    });
    await Role.create({ name: "admin", userId: user.id });
  } catch (error) {
    console.log(error);
  }
};
