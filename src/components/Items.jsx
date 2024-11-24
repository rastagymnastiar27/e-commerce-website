import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
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
    setCurrentPage(1);
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

    //all-catalogs random data
    const randomData = [...allCatalogsData];

    let filteredItems;
    if (category === 'all') {
      filteredItems = randomData;
    } else {
      filteredItems = allData.filter((item) => item.category === category);
    }
    
  console.log('Filtered Items:', filteredItems);

    const isHomePage = pathname === '/';
    const displayedItems = isHomePage ? filteredItems.slice(0, 8) : filteredItems;

    const itemsPerPage = 12;
    const totalItems = displayedItems.length;
    setTotalPages(Math.ceil(totalItems / itemsPerPage));

    const paginatedItems = displayedItems.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    
  console.log('Displayed Items:', displayedItems);

    setItems(paginatedItems);
    setLoading(false);
  }, [pathname, category, currentPage]);

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
      <Heading title="Our Catalogs" subtitle={'Explore Our Items'} />

      {/* Category Dropdown (Hidden on Home Page) */}
      {pathname !== '/' && (
        <div className="mb-6 mt-4 flex justify-center items-center lg:justify-end">
          <li className="relative cursor-pointer group list-none top-4 lg:right-0">
            <NavLink
              to="#"
              className="flex items-center gap-[2px] font-semibold text-black dark:text-gray-300 
              dark:hover:text-white py-2 duration-200 w-40 justify-center"
            >
              {category === 'all'
                ? 'All Catalogs'
                : category.charAt(0).toUpperCase() + category.slice(1)}
              <FaCaretDown className="group-hover:rotate-180 duration-300" />
            </NavLink>

            {/* Dropdown Links */}
            <div
              className="absolute z-[9999] hidden group-hover:block w-[130px] rounded-md 
            bg-gray-400 dark:bg-gray-600 shadow-md p-2 dark:text-white left-3"
            >
              <ul className="space-y-2">
                <li>
                  <button onClick={() => setCategory('all')}>All Catalogs</button>
                </li>
                <li>
                  <button onClick={() => setCategory('footwear')}>Footwear</button>
                </li>
                <li>
                  <button onClick={() => setCategory('outerwear')}>Outerwear</button>
                </li>
                <li>
                  <button onClick={() => setCategory('tops')}>Tops</button>
                </li>
                <li>
                  <button onClick={() => setCategory('accessories')}>Accessories</button>
                </li>
                <li>
                  <button onClick={() => setCategory('shorts')}>Shorts</button>
                </li>
                <li>
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
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-xl rounded-md hover:text-red-500 cursor-pointer"
          >
            &lt;
          </button>
          <span className="flex items-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 border rounded-md hover:bg-red-800 ${
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
            className="px-4 py-2 text-xl rounded-md hover:text-red-500 cursor-pointer"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Items;
