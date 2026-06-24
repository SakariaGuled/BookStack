import dotenv from "dotenv";
dotenv.config(); 

import express from "express";
import { connectDB, disconnetDB } from "../config/db.js";

const PORT = process.env.PORT || 5001;

//import routes
import bookRoter from "./routes/booksRouter.js";
import authRoutes from "./routes/authRoutes.js";

connectDB();

const app = express();

//Body Parsing middleware
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

//Api Routes
app.use("/books", bookRoter);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
    console.log("✅ DATABASE_URL loaded:", process.env.DATABASE_URL);;
});

// Handle unhandled promise rejections (e.g., database connection errors)
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  await disconnectDB();
  process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});
