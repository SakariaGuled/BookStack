import Logo from "../assets/bookshelflogo.svg";

export default function Nav() {
  return (
    <>
      <div
        className="flex flex-row  justify-between items-center h-16
        bg-neutral-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100"
      >
        <div className="flex flex-row p-[8px] text-white text-3xl items-center  ">
          <img src={Logo} alt="logo" className="h-5" />
          <h1> BookStack</h1>
        </div>
        <div className="flex flex-row justify-center-safe text-white text 2xl gap-5 p-[8px]">
          <h2>LIBRARY</h2>
          <h2> SEARCH </h2>
        </div>
        <div className="w-9 h-9 rounded-full p-[10px] bg-purple-600 flex items-center justify-center cursor-pointer text-white text-sm font-medium">
          AB
        </div>
      </div>
    </>
  );
}
