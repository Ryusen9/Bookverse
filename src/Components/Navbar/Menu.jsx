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
      <ul className="flex space-x-4 font-pilCrowRounded tracking-wide text-base font-semibold">
        {menuItems.map((item, index) => {
          return (
            <NavLink
              to={item.link}
              key={index}
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
              {item?.subMenu && (
                <ul>text</ul>
              )}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
