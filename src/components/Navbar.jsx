import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const MenuLinks = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Shop', link: '/shop' },
  { id: 3, name: 'Blogs', link: '/blogs' },
];

const DropdownLinks = [
  { id: 1, name: 'Trending Products', link: '/#' },
  { id: 2, name: 'Best Selling', link: '/#' },
  { id: 3, name: 'Top Rated', link: '/#' },
];

const Navbar = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const handleSearchChange = (e) => setSearchQuery(e.target.value); 

  return (
    <div className="dark:text-white duration-200 z-40 font-mono">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Culture
            </NavLink>

            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <NavLink
                      to={data.link}
                      className="inline-block px-4 font-semibold text-black hover:text-white dark:text-white dark:hover:text-black duration-200"
                    >
                      {data.name}
                    </NavLink>
                  </li>
                ))}

                {/* Dropdown */}
                <li className="relative cursor-pointer group">
                  <NavLink
                    to="#"
                    className="flex items-center gap-[2px] font-semibold text-black dark:text-white dark:hover:text-black py-2 duration-200"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </NavLink>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-gray-400 dark:bg-gray-600 shadow-md p-2 dark:text-white">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <NavLink
                            className="text-black hover:text-white dark:hover:text-black duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            to={data.link}
                          >
                            {data.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section for Desktop */}
          <div className="hidden lg:flex justify-between items-center gap-4 font-sans">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-bar bg-transparent dark:bg-transparent placeholder:text-black 
                dark:placeholder:text-gray-400"
              />
              <IoMdSearch
                className="text-xl   text-black group-hover:text-primary dark:text-white 
              absolute top-1/2 -translate-y-1/2 right-3 duration-200 cursor-pointer"
              />
            </div>

            <NavLink to="/cart" className="relative p-3">
              <FaCartShopping className="text-xl text-black dark:text-white duration-200" />
              <div
                className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex 
              items-center justify-center text-xs"
              >
                {totalItems}
              </div>
            </NavLink>

            <div>
              <DarkMode />
            </div>
          </div>

          {/* Mobile View */}
          <div className="flex lg:hidden items-center gap-4">
            <NavLink to="/cart" className="relative p-3">
              <FaCartShopping className="text-xl text-black dark:text-white" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
              {totalItems}
              </div>
            </NavLink>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black dark:text-white duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Full-page menu for small screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-opacity duration-200 h-full ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`bg-black/10 backdrop-blur-md w-[75%] h-full p-6 absolute right-0 top-0 flex flex-col gap-6 transition-transform duration-200 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end text-black dark:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <div className="relative group mb-4">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-2 pl-10 rounded-lg text-white placeholder:text-gray-400 bg-transparent border-2 border-gray-300 dark:border-gray-700 focus:outline-none"
            />
            <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-400 dark:text-white" />
          </div>

          <ul className="flex flex-col items-start gap-4">
            {MenuLinks.map((data) => (
              <li
                key={data.id}
                className="w-full border-b-2 border-gray-300 dark:border-gray-700 pb-3"
              >
                <NavLink
                  to={data.link}
                  className="text-xl font-semibold text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-black"
                >
                  {data.name}
                </NavLink>
              </li>
            ))}
            <div>
              <DarkMode />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
