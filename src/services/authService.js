import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
}

async function isPasswordValid(password, user) {
  return await bcrypt.compare(password, user.password);
}

const generateJWT = (userId) => {
  const payload = { id: userId };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d"
  });

  return token;
};

export { hashPassword, isPasswordValid, generateJWT };
