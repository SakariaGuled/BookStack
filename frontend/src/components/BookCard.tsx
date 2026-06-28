import type { bookSearchType } from "../types/bookSearchType";

type Props = {
  book: bookSearchType;
};

export default function BookCard({ book }: Props) {
  return (
    <div className="p-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm transition transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:bg-black/30">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-[280px] object-fit rounded-lg bg-purple-100"
      />
      <h2 className="text-white text-lg font-semibold mt-3">{book.title}</h2>
      <p className="text-white/60 text-sm">{book.author}</p>
      <div className="flex justify-end mt-2">
        <button className="text-white text-sm font-semibold text-center px-5 py-1 rounded-2xl  border-white/2 bg-white/2 backdrop-blur-md hover:bg-purple-500">
          Add
        </button>
      </div>
    </div>
  );
}
