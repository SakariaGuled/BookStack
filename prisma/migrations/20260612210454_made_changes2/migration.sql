/*
  Warnings:

  - You are about to drop the column `UserId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `author_names` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `content_warnings` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `create` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `posisionintSeries` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `release_date` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `series_names` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `Book` table. All the data in the column will be lost.
  - The `readStatus` column on the `Book` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `authorNames` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `releaseDate` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ReadStatus" AS ENUM ('NOT_READ', 'READING', 'READ');

-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_UserId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "UserId",
DROP COLUMN "author_names",
DROP COLUMN "content_warnings",
DROP COLUMN "create",
DROP COLUMN "posisionintSeries",
DROP COLUMN "release_date",
DROP COLUMN "series_names",
DROP COLUMN "updated",
ADD COLUMN     "authorNames" TEXT NOT NULL,
ADD COLUMN     "contentWarnings" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "positionInSeries" INTEGER,
ADD COLUMN     "releaseDate" INTEGER NOT NULL,
ADD COLUMN     "seriesNames" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "readStatus",
ADD COLUMN     "readStatus" "ReadStatus" NOT NULL DEFAULT 'NOT_READ';

-- DropEnum
DROP TYPE "readStatus";

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
