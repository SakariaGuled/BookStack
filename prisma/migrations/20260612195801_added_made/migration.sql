/*
  Warnings:

  - Added the required column `updated` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "readStatus" AS ENUM ('Not_Read', 'Reading', 'Read');

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "rank" INTEGER NOT NULL DEFAULT 99999,
ADD COLUMN     "readStatus" "readStatus" NOT NULL DEFAULT 'Not_Read',
ADD COLUMN     "updated" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
