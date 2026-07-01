import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookById } from "../requests/GetBookById";
import type { bookType } from "../types/bookType";

export default function BookDetailPage() {
  const { title, id } = useParams<{ title: string; id: string }>();
  console.log("BookDetailPage id:", id);
  const [book, setBook] = useState<bookType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchBook = async () => {
      setLoading(true);
      const result: bookType | null = await getBookById(id);
      setBook(result);
      setLoading(false);
    };

    fetchBook();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!book) return <p className="3xl">Book not found.</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <img
        src={book.imageUrl || "/path/to/default/image.jpg"}
        alt={book.title || "No title"}
      />
    </div>
  );
}
