import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

// Assuming items.json is imported as a module or fetched from public folder
import itemsData from "../items.json"; // Adjust the path accordingly

const ItemPage = () => {
  const { id } = useParams(); // Get the item ID from the URL
  const [itemDetails, setItemDetails] = useState(null);

  // Simulate fetching data based on the item ID
  useEffect(() => {
    // Find the item in the data array
    const allItems = [...itemsData.footwear, ...itemsData.Outerwear]; // Merge both categories (footwear and outerwear)
    const selectedItem = allItems.find((item) => item.id === parseInt(id)); // Find item by ID

    if (selectedItem) {
      setItemDetails(selectedItem); // Set item details if found
    } else {
      setItemDetails(null); // Handle case when item is not found
    }
  }, [id]); // Run the effect whenever the `id` changes

  if (!itemDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section>
        <div className="container mx-auto py-6 w-full">
          <NavLink
            to="/shop"
            className="text-black hover:text-primary flex items-center mb-4"
          >
            <FaArrowLeft className="mr-2" /> Back to catalog page
          </NavLink>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center">
          <img
            src={`/assets/product/${itemDetails.imgName}`} // Image source updated to public/assets/product folder
            alt={itemDetails.title}
            className="w-[300px] h-[200px] object-cover rounded-lg"
          />
          <h1 className="text-3xl font-semibold mt-4">{itemDetails.title}</h1>
          <p className="mt-2 text-lg">Price: ${itemDetails.price}</p>
        </div>
      </section>
    </>
  );
};

export default ItemPage;
