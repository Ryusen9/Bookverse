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
    </div>
  );
};

export default SearchBar;