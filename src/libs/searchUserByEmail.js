import { User } from "../models/User.js";

export const searchUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};
