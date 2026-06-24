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

const generateJWT = (userId, res) => {
  const payload = { id: userId };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });

  res.cookie("jwt", token, {
    httOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });
  return token;
};

const logout = (res) => {
  res.clearCookie("jwt"); 
  return { message: "Logged out successfully" };
};

export { hashPassword, isPasswordValid, generateJWT, logout };
