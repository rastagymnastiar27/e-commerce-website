import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const MenuLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Shop", link: "/#shop" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Blogs", link: "/#blog" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu toggle state
  const [searchQuery, setSearchQuery] = useState(""); // Search query state

  const handleSearchChange = (e) => setSearchQuery(e.target.value); // Handle search input change

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 font-mono">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
            >
              Culture
            </a>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {" "}
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown  */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li>
                          <a
                            className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section for Desktop: Search, Cart, Dark Mode Button */}
          <div className="hidden lg:flex justify-between items-center gap-4 font-sans">
            {/* Search Bar section for desktop */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-bar"
              />
              <IoMdSearch
                className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200 cursor-pointer"
              />
            </div>

            {/* Cart Button */}
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                1 {/* Cart badge */}
              </div>
            </button>

            {/* Dark Mode Button */}
            <div>
              <DarkMode />
            </div>
          </div>

          {/* Mobile View */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Cart Button for mobile */}
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                1 {/* Cart badge */}
              </div>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Full-page menu for small screens */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="bg-white dark:bg-gray-900 w-[75%] h-full p-6 absolute right-0 top-0 flex flex-col gap-6">
            <button onClick={() => setIsMenuOpen(false)} className="self-end text-gray-600 dark:text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Search Bar Above Menu Links for Mobile */}
            <div className="relative group mb-4">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full p-2 pl-10 rounded-lg text-gray-700 dark:text-white dark:bg-gray-800 focus:outline-none"
              />
              <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-600 dark:text-gray-400" />
            </div>

            {/* Menu Links for Mobile */}
            <ul className="flex flex-col items-start gap-4">
              {MenuLinks.map((data) => (
                <li key={data.id} className="w-full border-b-2 border-gray-300 dark:border-gray-700 pb-3">
                  <a href={data.link} className="text-xl font-semibold text-gray-500 hover:text-black dark:hover:text-white">
                    {data.name}
                  </a>
                </li>
              ))}
              <li className="relative cursor-pointer group w-full border-b-2 border-gray-300 dark:border-gray-700 pb-3">
                <a href="#" className="flex items-center gap-[2px] text-xl font-semibold text-gray-500 dark:hover:text-white py-2">
                  Quick Links
                  <FaCaretDown className="group-hover:rotate-180 duration-300" />
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                  <ul className="space-y-2">
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold" href={data.link}>
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* Dark Mode button inside the mobile menu */}
              <div>
                <DarkMode />
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
