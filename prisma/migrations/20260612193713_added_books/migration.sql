-- AlterTable
CREATE SEQUENCE user_id_seq;
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT nextval('user_id_seq'),
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE user_id_seq OWNED BY "User"."id";

-- DropIndex
DROP INDEX "User_id_key";

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT,
    "genres" TEXT[],
    "author_names" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pages" INTEGER,
    "release_date" INTEGER NOT NULL,
    "series" TEXT,
    "series_names" TEXT,
    "posisionintSeries" INTEGER,
    "numberOfBooksInSeries" INTEGER,
    "content_warnings" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
