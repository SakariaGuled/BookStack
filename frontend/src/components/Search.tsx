export default function Search() {
  return (
    <>
      <div>
        <h1 className="text-white text-4xl text-center mt-16">
          Find your next favorite read
        </h1>
        <h3 className="text-white text-xl text-center mt-4">
          Search millions of books and add them to you personal library
        </h3>
        <div className="rounded-xl h-[120px] w-[65%] mx-auto mt-16 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 backdrop-saturate-100 backdrop-contrast-100">
          <div className="flex flex-row items-center justify-center gap-2  h-full items-center f">
            <input
              type="text"
              placeholder="SEARCH"
              className="bg-whiteocus:outline-none h-[80px] w-[900px] text-black text-4xl placeholder:text-gray-400 placeholder:text-4xl text-center placeholder:text-center rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
