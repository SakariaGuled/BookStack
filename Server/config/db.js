import dotenv from "dotenv";
dotenv.config();
import { PrismaClient } from "../src/generated/prisma/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({
  adapter,
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("DB Connected via prisma");
  } catch (error) {
    console.log(`Connection not succesful => error: ${error}`);
    process.exit(1);
  }
};

const disconnetDB = async () => {
  await prisma.$disconnect();
};

export { prisma, connectDB, disconnetDB };
