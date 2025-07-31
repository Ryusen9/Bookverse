import React, { useState } from "react";
import { PiMagnifyingGlassLight, PiShoppingCart } from "react-icons/pi";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const toggleSearchFunctions = () => {
    setToggleSearch(!toggleSearch);
  };
  const toggleMobileMenuFunctions = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };
  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between p-2">
      <div className="flex relative items-center z-50 justify-between py-2 px-5 bg-black dark:bg-white text-white dark:text-black mx-auto w-full md:w-3/5 rounded-2xl">
        <div
          onClick={toggleMobileMenuFunctions}
          className="lg:hidden text-2xl z-30"
        >
          {toggleMobileMenu ? <VscChromeClose /> : <RxHamburgerMenu />}
        </div>
        {/* Logo */}
        <p className="text-2xl font-pilCrowRounded font-semibold tracking-wider">
          BookVerse
        </p>
        {/* menu */}
        <div className="hidden lg:flex items-center justify-center w-full">
          <Menu />
        </div>
        {/* Other */}
        <div className="flex items-center justify-center gap-2">
          {/* Search */}
          <div>
            <button
              onClick={toggleSearchFunctions}
              className="text-xl cursor-pointer z-30 text-black dark:text-white bg-white dark:bg-black p-1.5 rounded-full relative"
            >
              <PiMagnifyingGlassLight />
            </button>
          </div>
          {/* Cart */}
          <div className="text-xl z-30 text-black dark:text-white bg-white dark:bg-black p-1.5 rounded-full relative">
            <PiShoppingCart />
            <span className="absolute p-1 bg-red-600 rounded-full top-0 right-0"></span>
          </div>
        </div>
      </div>
      <SearchBar currentState={toggleSearch} onClose={toggleSearchFunctions} />
      {/* Mobile Menu */}
      <MobileMenu mobileMenuCurrentState={toggleMobileMenu} />
    </nav>
  );
};

export default Navbar;
