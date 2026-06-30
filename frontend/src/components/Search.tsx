import { useState } from "react";
import { getBooksByTitle } from "../requests/GetBooks";
import type { bookSearchType } from "../types/bookSearchType";
import SearchResult from "./SearchResult";
import { useEffect } from "react";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState<bookSearchType[] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!searchValue.trim()) return;
    const books = await getBooksByTitle(searchValue);
    setResults(books);
    setHasSearched(true);
    sessionStorage.setItem(
      "lastSearch",
      JSON.stringify({ searchValue, results: books, hasSearched: true }),
    );
  };

  useEffect(() => {
    const saved = sessionStorage.getItem("lastSearch");
    if (saved) {
      const { searchValue, results, hasSearched } = JSON.parse(saved);
      setSearchValue(searchValue);
      setResults(results);
      setHasSearched(hasSearched);
    }
  }, []);

  return (
    <>
      <style>{`
        input::placeholder {
          text-align: center;
        }
      `}</style>
      <div>
        <h1 className="text-white text-4xl text-center mt-16">
          Find your next favorite read
        </h1>
        <h3 className="text-white text-xl text-center mt-4">
          Search millions of books and add them to your personal library
        </h3>
        <div className="relative rounded-2xl border border-white/10 h-[120px] w-[50%] mx-auto mt-16 bg-white/10 backdrop-blur-[10px]">
          <div className="flex items-center justify-center h-full px-6">
            <input
              type="text"
              placeholder="SEARCH"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="bg-white focus:outline-none h-[80px] w-full text-black text-4xl text-center rounded-xl px-4"
            />
          </div>
        </div>

        {hasSearched && <SearchResult results={results} />}
      </div>
    </>
  );
}
