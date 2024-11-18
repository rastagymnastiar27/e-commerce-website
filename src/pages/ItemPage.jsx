import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Spinner from "../components/Spinner";
import itemsData from "../items.json"; // Adjust the path accordingly

const ItemPage = () => {
  const { id } = useParams(); // Get the item ID from the URL
  const [itemDetails, setItemDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Spinner state

  // Simulate fetching data based on the item ID
  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true); // Start loading
      const allItems = [...itemsData.footwear, ...itemsData.Outerwear]; // Merge categories
      const selectedItem = allItems.find((item) => item.id === parseInt(id));

      setTimeout(() => {
        setItemDetails(selectedItem || null);
        setLoading(false); // Stop loading after fetching
      }); // Simulated delay
    };

    fetchItem();
  }, [id]);

  const handleAddToCart = () => {
    alert(`${itemDetails.title} has been added to your cart.`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to checkout for ${itemDetails.title}.`);
  };

  // Show spinner while loading
  if (loading) {
    return <Spinner loading={loading} />;
  }


  return (
    <div className="dark:text-white duration-200 overflow-hidden">
      <section className="container mx-auto py-4 w-auto">
        <div className="w-48 justify-center items-center">
          <NavLink
            to="/shop"
            className="text-black dark:text-white hover:text-primary dark:hover:text-primary flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to catalog page
          </NavLink>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row lg:w-3/4 lg:mx-auto lg:my-6 lg:gap-8 justify-center items-center p-4 rounded-lg">
        {/* Image Container */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg">
          <img
            src={`/assets/product/${itemDetails.imgName}`}
            alt={itemDetails.title}
            className="w-[300px] h-[200px] lg:w-[450px] lg:h-[450px] object-cover rounded-lg image-reflection"
          />
        </div>

        {/* Details Container */}
        <div className="flex flex-col w-full lg:w-1/4 justify-center p-4 rounded-lg">
          <h1 className="text-lg lg:text-2xl font-semibold mt-4">
            {itemDetails.title}
          </h1>
          <p className="mt-2 text-md">${itemDetails.price}</p>
          <p className="mt-4 text-sm text-black dark:text-white italic text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 w-full lg:w-auto justify-center">
            <button
              onClick={handleAddToCart}
              className="w-full lg:w-32 px-4 py-2 bg-white/10 text-black border-black rounded-lg hover:bg-black hover:text-[#b1a7a2] backdrop-blur-sm duration-200"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="w-full lg:w-32 px-4 py-2 bg-black text-[#b1a7a2] border-black rounded-lg hover:bg-white/10 hover:text-black backdrop-blur-sm duration-200"
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
