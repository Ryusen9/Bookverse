import React from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ mobileMenuCurrentState }) => {
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
    <aside
      className={`w-[350px] z-10 absolute top-0 rounded-r-xl left-0 min-h-screen transform transition-transform border-r font-pilCrowRounded duration-300 ease-in-out ${
        mobileMenuCurrentState ? "translate-x-0" : "-translate-x-full"
      } bg-white dark:bg-black`}
    >
      <ul className="w-full min-h-full flex flex-col gap-1 p-3 mt-16">
        {menuItems.map((item, index) => {
          const hasSubMenu = !!item.subMenu;

          return (
            <li
              key={index}
              className={`relative p-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer duration-300 ${
                hasSubMenu ? "group" : ""
              }`}
            >
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "text-purple-400" : ""
                }
              >
                {item.name}
              </NavLink>

              {/* Submenu */}
              {hasSubMenu && (
                <ul className="pl-4 mt-2 flex flex-col gap-2 max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="p-2 hover:bg-purple-400 hover:text-white duration-300"
                    >
                      <NavLink to={subItem.link}>{subItem.name}</NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default MobileMenu;
