import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Heading from "../components/Heading";
import ItemCard from "./ItemCard";
import Spinner from "./Spinner";
import itemsData from "../items.json";

// Path to public assets
const getImagePath = (imgName) => `/assets/product/${imgName}`;

const Items = () => {
  const { pathname } = useLocation();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    // Transform JSON data to match ItemCard requirements
    const footwearData = itemsData.footwear.map((item) => ({
      id: item.id,
      img: getImagePath(item.imgName),
      title: item.title,
      price: item.price,
      aosDelay: item.aosDelay,
    }));

    const outerwearData = itemsData.Outerwear.map((item) => ({
      id: item.id,
      img: getImagePath(item.imgName),
      title: item.title,
      price: item.price,
      aosDelay: item.aosDelay,
    }));

    // Filter items based on the selected category
    let filteredItems = [];
    if (category === "footwear") {
      filteredItems = footwearData;
    } else if (category === "Outerwear") {
      filteredItems = outerwearData;
    } else {
      filteredItems = [...footwearData, ...outerwearData];
    }

    // Check if the user is on the home page or shop page
    const isHomePage = pathname === "/";
    const displayedItems = isHomePage
      ? filteredItems.slice(0, 8)
      : filteredItems;

    setItems(displayedItems);
    setLoading(false);
  }, [pathname, category]);

  return (
    <>
      <div className="container py-6 ">
        {/* Header section */}
        <Heading title="Our Catalogs" subtitle={"Explore Our Items"} />

        {/* Category Dropdown (Hidden on Home Page) */}
        {pathname !== "/" && (
          <div className="mb-6 mt-4 flex justify-center items-center lg:justify-end">
            {/* Fixed Dropdown Menu with Consistent Width */}
            <li className="relative cursor-pointer group list-none top-4 lg:right-0">
              <NavLink
                to="#"
                className="flex items-center gap-[2px] font-semibold text-black dark:text-gray-400 dark:hover:text-white py-2 duration-200 w-40 justify-center"
              >
                {category === "all"
                  ? "All Catalogs"
                  : category.charAt(0).toUpperCase() + category.slice(1)}
                <FaCaretDown className="group-hover:rotate-180 duration-300" />
              </NavLink>

              {/* Dropdown Links */}
              <div className="absolute z-[9999] hidden group-hover:block w-[130px] rounded-md bg-gray-400 dark:bg-gray-600 shadow-md p-2 dark:text-white left-3">
                <ul className="space-y-2">
                  <li>
                    <button
                      className="text-black hover:text-white dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold text-left"
                      onClick={() => setCategory("all")}
                    >
                      All Catalogs
                    </button>
                  </li>
                  <li>
                    <button
                      className="text-black hover:text-white dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold text-left"
                      onClick={() => setCategory("footwear")}
                    >
                      Footwear
                    </button>
                  </li>
                  <li>
                    <button
                      className="text-black hover:text-white dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold text-left"
                      onClick={() => setCategory("Outerwear")}
                    >
                      Outerwear
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </div>
        )}

        {/* Body section */}
        {loading ? <Spinner loading={loading} /> : <ItemCard item={items} />}
      </div>
    </>
  );
};

export default Items;
