import { json } from "express";
import { prisma } from "../../config/db.js";
import {
  hashPassword,
  isPasswordValid,
  generateJWT,
} from "../services/authService.js";

const register = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    // 1. Validate input
    if (!name || !username || !password) {
      return res.status(400).json({ error: "All fields required" });
    }

    // 2. Check if user exists
    const userExists = await prisma.user.findUnique({
      where: { username },
    });

    if (userExists) {
      return res
        .status(400)
        .json({ error: "User already exists with this username" });
    }

    // 3. Hash password
    const hashedPassword = await hashPassword(password);

    // 4. Create user
    const user = await prisma.user.create({
      data: {
        name,
        username,
        password: hashedPassword,
      },
    });

    //generate token
    //generate JWTT Token
    const token = generateJWT(userExists.id);

    // 5. Return response
    res.status(201).json({
      status: "success",
      data: {
        id: user.id,
        name: user.name,
        username: user.username,
        createdAt: user.createdAt,
      },
      token: token,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Registration failed" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  // 2. Check if username exists
  const userExists = await prisma.user.findUnique({
    where: { username },
  });
  if (!userExists) {
    return res.status(401).json({ error: "no user with this username" });
  }

  // verify password
  const isUserValid = isPasswordValid(password, userExists);
  if (!isUserValid) {
    return res.status(401).json({ error: "Wrong Password" });
  }

  //generate JWTT Token
  const token = generateJWT(userExists.id);

  return res.status(200).json({
    status: "success",
    data: {
      id: userExists.id,
      username: userExists.username,
      createdAt: userExists.createdAt,
    },
    token: token,
  });
};

export { register, login };
