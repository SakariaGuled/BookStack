import type { bookSearchType } from "../types/bookSearchType";
import BookCard from "./BookCard";

type Props = {
  results: bookSearchType[] | null;
};

export default function SearchResult({ results }: Props) {
  if (!results || results.length === 0) {
    return <p className="text-white text-center mt-8">No books found.</p>;
  }

  return (
    <>
      <div>
        <h1 className="pl-[20%] mb-10 mt-10 text-gray-600 text-2xl">RESULTS</h1>
      </div>
      <div
        className="grid gap-5 max-w-7xl mx-auto px-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
      >
        {results.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </>
  );
}
