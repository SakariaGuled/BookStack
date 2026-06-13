import { prisma } from "../../config/db.js";

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await prisma.book.findMany();
    if (!allBooks || allBooks.length == 0) {
      return res.status(404).json({ error: "No books found" });
    }
    res.status(200).json({ data: allBooks });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

export { getAllBooks };
