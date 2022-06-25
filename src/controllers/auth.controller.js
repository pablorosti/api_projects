import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import { Role } from "../models/Role.js";
import { searchUserByEmail } from "../libs/searchUserByEmail.js";
import { generateToken } from "../libs/generateToken.js";
import { encryptPassword } from "../libs/encryptPassword.js";

export const signUp = async (req, res) => {
  const { username, password, email, role } = req.body;

  const userExist = await searchUserByEmail(email);
  if (userExist) {
    return res.send("El email ya está en uso");
  }

  const newPassword = await encryptPassword(password);
  try {
    const signUp = await User.create({
      username,
      password: newPassword,
      email,
    });

    if (role === "user" || role === "" || role === undefined) {
      await Role.create({
        name: "user",
        userId: signUp.id,
      });
    } else if (role === "admin") {
      await Role.create({
        name: "admin",
        userId: signUp.id,
      });
    }

    const token = generateToken(signUp.id);
    res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  // search user for email
  const foundUser = await searchUserByEmail(email);
  if (!foundUser) return res.status(400).json({ message: "User not found" });

  // compare password
  const match = await bcrypt.compare(password, foundUser.password);
  if (!match) return res.status(400).json({ message: "Invalid password" });

  // send token client
  const token = generateToken(foundUser.id);
  res.json({ token });
};
