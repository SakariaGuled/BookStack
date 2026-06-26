export default function Search() {
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
        <div className="relative rounded-2xl border border-white/10 h-[120px] w-[65%] mx-auto mt-16 bg-white/10 backdrop-blur-[10px]">
          <div className="flex items-center justify-center h-full px-6">
            <input
              type="text"
              placeholder="SEARCH"
              className="bg-white focus:outline-none h-[80px] w-full text-black text-4xl text-center rounded-xl px-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}
