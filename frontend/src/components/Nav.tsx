import Logo from "../assets/bookshelflogo.svg";

export default function Nav() {
  return (
    <>
      <nav className="relative flex flex-row justify-between items-center px-6 h-16 backdrop-blur-md bg-white/5 border-b border-white/10">
        {/* Left — logo */}
        <div className="flex flex-row gap-2 text-white items-center">
          <img src={Logo} alt="logo" className="h-5" />
          <h1 className="text-xl font-semibold">BookStack</h1>
        </div>

        {/* Center — always perfectly centered */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-row gap-10 text-white text-2xl font-medium">
          <h2 className="cursor-pointer hover:text-purple-400 transition-colors hover:underline decoration-purple-400 decoration-2 underline-offset-8">
            SEARCH
          </h2>
          <h2 className="cursor-pointer hover:text-purple-400 transition-colors  hover:underline decoration-purple-400 decoration-2 underline-offset-8">
            LIBRARY
          </h2>
        </div>

        {/* Right — avatar */}
        <div className="shrink-0 w-11 h-11 rounded-full bg-purple-600 flex items-center justify-center cursor-pointer text-white text-sm font-medium">
          AB
        </div>
      </nav>
    </>
  );
}
