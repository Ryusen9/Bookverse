import React, { useState } from "react";
import { PiMagnifyingGlassLight, PiShoppingCart } from "react-icons/pi";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const toggleSearchFunctions = () => {
    setToggleSearch(!toggleSearch);
  };
  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between p-2 bg-black">
      <div className="flex relative items-center justify-between py-2 px-5 border bg-black dark:bg-white text-white dark:text-black mx-auto w-full md:w-3/5 rounded-2xl">
        {/* Logo */}
        <p className="text-2xl font-pilCrowRounded font-semibold tracking-wider">
          BookVerse
        </p>
        {/* Other */}
        <div className="flex items-center justify-center gap-2">
          {/* Search */}
          <div>
            <button
              onClick={toggleSearchFunctions}
              className="text-xl cursor-pointer text-white dark:text-white bg-white dark:bg-black p-1.5 rounded-full relative"
            >
              <PiMagnifyingGlassLight />
            </button>
          </div>
          {/* Cart */}
          <div className="text-xl text-white dark:text-white bg-white dark:bg-black p-1.5 rounded-full relative">
            <PiShoppingCart />
            <span className="absolute p-1 bg-red-600 rounded-full top-0 right-0"></span>
          </div>
        </div>
      </div>
      <SearchBar currentState={toggleSearch} onClose={toggleSearchFunctions} />
    </nav>
  );
};

export default Navbar;
