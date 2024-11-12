import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

// Assuming items.json is imported as a module or fetched from public folder
import itemsData from "../items.json"; // Adjust the path accordingly

const ItemPage = () => {
  const { id } = useParams(); // Get the item ID from the URL
  const [itemDetails, setItemDetails] = useState(null);

  // Cart state (for demonstration purposes; in a real app, use global state or context)
  const [cart, setCart] = useState([]);

  // Simulate fetching data based on the item ID
  useEffect(() => {
    const allItems = [...itemsData.footwear, ...itemsData.Outerwear]; // Merge both categories (footwear and outerwear)
    const selectedItem = allItems.find((item) => item.id === parseInt(id));

    if (selectedItem) {
      setItemDetails(selectedItem);
    } else {
      setItemDetails(null);
    }
  }, [id]);

  // Handle adding item to cart
  const handleAddToCart = () => {
    setCart((prevCart) => [...prevCart, itemDetails]);
    alert(`${itemDetails.title} has been added to your cart.`);
  };

  // Handle "Buy Now" button click
  const handleBuyNow = () => {
    alert(`Proceeding to checkout for ${itemDetails.title}.`);
    // Here, you can implement navigation to a checkout page or payment process
  };

  if (!itemDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" dark:text-white duration-200 overflow-hidden min-h-screen">
      <section>
        <div className="container mx-auto py-4 w-full">
          <NavLink
            to="/shop"
            className="text-black dark:text-white hover:text-primary dark:hover:text-primary flex items-center pb-4"
          >
            <FaArrowLeft className="mr-2" /> Back to catalog page
          </NavLink>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={`/assets/product/${itemDetails.imgName}`}
            alt={itemDetails.title}
            className="lg:w-[300px] h-[200px] object-cover rounded-lg"
          />
        </div>
      </section>
      <section>
        <div className="flex w-60 mx-auto my-auto flex-col pb-10 justify-center items-start">
          <h1 className="text-lg lg:text-2xl font-semibold mt-4">
            {itemDetails.title}
          </h1>
          <p className="mt-2 text-md">${itemDetails.price}</p>
          <p className="mt-4 text-sm text-gray-600 italic text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            {itemDetails.description}
          </p>
          {/* Add to Cart and Buy Now buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 duration-200"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="px-4 py-2 bg-brandGreen text-white rounded-lg hover:bg-brandGreen/80 duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemPage;
