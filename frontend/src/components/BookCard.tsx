export default function BookCard() {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "9780743273565",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "9780061935466",
    },
    { id: 3, title: "1984", author: "George Orwell", isbn: "9780451524935" },
    { id: 4, title: "Dune", author: "Frank Herbert", isbn: "9780441013593" },
    {
      id: 5,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      isbn: "9780547928227",
    },
    {
      id: 6,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      isbn: "9780141439518",
    },
    {
      id: 7,
      title: "The Alchemist",
      author: "Paulo Coelho",
      isbn: "9780062315007",
    },
    {
      id: 8,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      isbn: "9780062316097",
    },
    {
      id: 9,
      title: "Atomic Habits",
      author: "James Clear",
      isbn: "9780735211292",
    },
    {
      id: 10,
      title: "The Road",
      author: "Cormac McCarthy",
      isbn: "9780307387899",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 ">
      {books.map((book) => (
        <div
          key={book.id}
          className="p-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm transition transform duration-300 ease-in-out 
               hover:scale-105 hover:-translate-y-1 hover:bg-black/30"
        >
          <img
            src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
            alt={book.title}
            className="w-full h-[280px] object-contain rounded-lg bg-purple-100"
          />
          <h2 className="text-white text-lg font-semibold mt-3">
            {book.title}
          </h2>
          <p className="text-white/60 text-sm">{book.author}</p>
        </div>
      ))}
    </div>
  );
}
