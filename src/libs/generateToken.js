import jwt from "jsonwebtoken";
import "dotenv/config";

export const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET_TOKEN, {
    expiresIn: 86400,
  });
  return token;
};
