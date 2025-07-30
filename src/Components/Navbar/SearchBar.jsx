import { HiMagnifyingGlass } from "react-icons/hi2";
import { RiCloseLargeLine } from "react-icons/ri";

const SearchBar = ({ style, currentState, onClose }) => {
  return (
    <div
      className={`${style} z-9999 transform transition-all duration-300 ease-in-out ${
        currentState ? "translate-y-0" : "-translate-y-[150%]"
      } min-h-screen w-full p-6 bg-white/50 dark:bg-black/50 backdrop-blur-md absolute top-0 left-0`}
    >
      <div className="flex justify-end items-center px-5 py-5">
        <button
          onClick={onClose}
          className="text-white cursor-pointer dark:text-white text-3xl bg-white dark:bg-black p-1.5 rounded-full relative"
        >
          <RiCloseLargeLine />
        </button>
      </div>
      <div>
        <label
          className="flex justify-center items-center mt-6"
          htmlFor="search-input"
        >
          <span className="h-12 p-2 flex items-center justify-center text-2xl bg-purple-400 rounded-l-md">
            <HiMagnifyingGlass />
          </span>
          <input
            type="text"
            className="border-none w-60 md:w-72 h-12 rounded-r-md bg-black dark:bg-white text-white dark:text-black p-2"
          />
        </label>
      </div>
      {/* Suggestions */}
      <div className="border-2 w-full h-full mt-6 p-4">
        suggestions will go here
      </div>
    </div>
  );
};

export default SearchBar;
