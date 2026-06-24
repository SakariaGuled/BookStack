import express from "express";
import { getAllBooks } from "../controller/bookController.js";

const router = express.Router();

router.get("/getAllBooks", getAllBooks);
router.get("/getBookById/:id", (req, res) => {
  res.send("Get book by ID");
});

export default router;
