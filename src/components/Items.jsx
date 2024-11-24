import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa6';
import { NavLink, Link } from 'react-router-dom';
import Heading from '../components/Heading';
import ItemCard from './ItemCard';
import Spinner from './Spinner';
import itemsData from '../items.json';
import AOS from 'aos';

const getImagePath = (imgName) => `/assets/product/${imgName}`;

const Items = ({ category, setCategory, showPagination = false }) => {
  const { pathname } = useLocation();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const mapItemsData = (data, categoryName) =>
      data.map((item) => ({
        id: item.id,
        img: getImagePath(item.imgName),
        title: item.title,
        price: item.price,
        aosDelay: item.aosDelay,
        category: categoryName,
      }));

    const footwearData = mapItemsData(itemsData.footwear, 'footwear');
    const outerwearData = mapItemsData(itemsData.Outerwear, 'outerwear');
    const topsData = mapItemsData(itemsData.tops, 'tops');
    const accessoriesData = mapItemsData(itemsData.accessories, 'accessories');
    const shortsData = mapItemsData(itemsData.shorts, 'shorts');
    const pantsData = mapItemsData(itemsData.pants, 'pants');
    const allCatalogsData = mapItemsData(itemsData.allcatalogs, 'allcatalogs');

    const allData = [
      ...footwearData,
      ...outerwearData,
      ...topsData,
      ...accessoriesData,
      ...shortsData,
      ...pantsData,
    ];

    const randomData = [...allCatalogsData];

    let filteredItems;
    if (category === 'all') {
      filteredItems = randomData;
    } else {
      filteredItems = allData.filter((item) => item.category === category);
    }

    const isHomePage = pathname === '/';
    const displayedItems = isHomePage ? filteredItems.slice(0, 8) : filteredItems;

    const itemsPerPage = 12;
    const totalItems = displayedItems.length;
    setTotalPages(Math.ceil(totalItems / itemsPerPage));

    const paginatedItems = displayedItems.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    setItems(paginatedItems);
    setLoading(false);
  }, [pathname, category, currentPage]);

  // Reset currentPage to 1 only when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    AOS.refresh();
  };

  useEffect(() => {
    AOS.refresh();
  }, [items]);

  return (
    <div className="container py-6">
      {/* Header section */}
      <Link to="/shop">
        <Heading title="Our Catalogs" subtitle={'Explore Our Items'} />
      </Link>

      {/* Category Dropdown (Hidden on Home Page) */}
      {pathname !== '/' && (
        <div className="mb-6 mt-4 flex justify-center items-center lg:justify-end font-mono">
          <li className="relative cursor-pointer group list-none top-4 lg:right-0">
            <NavLink
              to="#"
              className="flex items-center gap-[2px] font-semibold text-black dark:text-white
              dark:hover:text-white py-2 duration-200 w-40 justify-center lg:text-xl"
            >
              {category === 'all'
                ? 'All Catalogs'
                : category.charAt(0).toUpperCase() + category.slice(1)}
              <FaCaretDown className="group-hover:rotate-180 duration-300" />
            </NavLink>

            {/* Dropdown Links */}
            <div
              className="absolute z-[9999] hidden group-hover:block w-[130px] rounded-md 
            bg-gray-400 dark:bg-gray-600 shadow-md p-2 dark:text-white left-3 lg:text-lg"
            >
              <ul className="space-y-2">
                <li
                  className="hover:text-white dark:text-white dark:hover:text-black 
                    duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md 
                    font-semibold"
                >
                  <button onClick={() => setCategory('all')}>All Catalogs</button>
                </li>
                <li
                  className="hover:text-white dark:text-white dark:hover:text-black 
                    duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md 
                    font-semibold"
                >
                  <button onClick={() => setCategory('footwear')}>Footwear</button>
                </li>
                <li
                  className="hover:text-white dark:text-white dark:hover:text-black 
                    duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md 
                    font-semibold"
                >
                  <button onClick={() => setCategory('outerwear')}>Outerwear</button>
                </li>
                <li
                  className="hover:text-white dark:text-white dark:hover:text-black 
                    duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md 
                    font-semibold"
                >
                  <button onClick={() => setCategory('tops')}>Tops</button>
                </li>
                <li
                  className="hover:text-white dark:text-white dark:hover:text-black 
                    duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md 
                    font-semibold"
                >
                  <button onClick={() => setCategory('accessories')}>Accessories</button>
                </li>
                <li
                  className="hover:text-white dark:text-white dark:hover:text-black 
                    duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md 
                    font-semibold"
                >
                  <button onClick={() => setCategory('shorts')}>Shorts</button>
                </li>
                <li
                  className="hover:text-white dark:text-white dark:hover:text-black 
                    duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md 
                    font-semibold"
                >
                  <button onClick={() => setCategory('pants')}>Pants</button>
                </li>
              </ul>
            </div>
          </li>
        </div>
      )}

      {/* Body section */}
      {loading ? <Spinner loading={loading} /> : <ItemCard item={items} />}

      {/* Pagination - Only show on Shop Page */}
      {showPagination && (
        <div className="flex justify-center mt-6 space-x-2 lg:space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm lg:text-xl rounded-md hover:text-red-500 cursor-pointer"
          >
            &lt;
          </button>
          <span className="flex items-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1  lg:px-4 lg:py-2 mx-1 border rounded-md hover:bg-red-800 ${
                  currentPage === index + 1 ? 'bg-primary text-white' : ''
                } cursor-pointer`}
              >
                {index + 1}
              </button>
            ))}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 lg:px-4 lg:py-2 text-md lg:text-xl rounded-md hover:text-red-500 cursor-pointer"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Items;
