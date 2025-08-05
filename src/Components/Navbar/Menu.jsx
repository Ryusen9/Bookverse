import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    {
      name: "Products",
      link: "/products",
      subMenu: [
        { name: "Books", link: "/products/books" },
        { name: "E-books", link: "/products/ebooks" },
        { name: "Audiobooks", link: "/products/audiobooks" },
      ],
    },
    {
      name: "Services",
      link: "/services",
      subMenu: [
        { name: "Delivery", link: "/services/delivery" },
        { name: "Payment", link: "/services/payment" },
        { name: "Support", link: "/services/support" },
      ],
    },
  ];

  return (
    <div>
      <ul className="flex space-x-6 font-pilCrowRounded tracking-wide text-base font-semibold relative">
        {menuItems.map((item, index) => (
          <li key={index} className="relative group">
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `relative overflow-hidden group ${
                  isActive ? "text-purple-400" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 transform transition-all duration-300 ease-in-out bg-white dark:bg-black ${
                      isActive ? "scale-100" : "scale-0 group-hover:scale-100"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
            {/* submenu */}
            {item?.subMenu && (
              <ul className="absolute rounded-b-lg top-8 left-1/2 -translate-x-1/2 min-w-[200px] z-20 bg-black text-white dark:bg-white dark:text-black p-5 flex flex-col items-center justify-center space-y-2 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out">
                {item.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <NavLink
                      to={subItem.link}
                      className={({ isActive }) =>
                        `relative overflow-hidden group ${
                          isActive ? "text-purple-400" : ""
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <span
                          className={`block hover:text-purple-300 duration-400 ${
                            isActive ? "text-purple-400" : ""
                          }`}
                        >
                          {subItem.name}
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
