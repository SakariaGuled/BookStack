import express from "express";
import {
  login,
  register,
  logoutController,
} from "../controller/authController.js";

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.post("/logout", logoutController);

export default router;
