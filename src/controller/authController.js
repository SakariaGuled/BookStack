import { json } from "express";
import { prisma } from "../../config/db.js";
import { hashPassword } from "../services/authService.js";

const register = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    // 1. Validate input
    if (!name || !username || !password) {
      return res.status(400).json({ error: "All fields required" }); // ← Add return!
    }

    // 2. Check if user exists
    const userExists = await prisma.user.findUnique({
      where: { username },
    });

    if (userExists) {
      return res
        .status(400)
        .json({ error: "User already exists with this username" }); // ← Add return!
    }

    // 3. Hash password
    const hashedPassword = await hashPassword(password); // ← Await if async

    // 4. Create user
    const user = await prisma.user.create({
      data: {
        name,
        username,
        password: hashedPassword,
      },
    });

    // 5. Return response
    res.status(201).json({
      status: "success",
      data: {
        id: user.id,
        name: user.name,
        username: user.username,
        createdAt: user.createdAt, // ← Correct field names
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Registration failed" });
  }
};

export { register };
