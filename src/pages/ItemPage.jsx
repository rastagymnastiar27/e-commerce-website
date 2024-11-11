import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';

const ItemPage = () => {
  const { id } = useParams(); // Get the item ID from the URL
  const [itemDetails, setItemDetails] = useState(null);

  // Simulate fetching data based on the item ID
  useEffect(() => {
    // Replace this with an actual fetch call to your API or data source
    const fetchItemDetails = async () => {
      // Example of fetching item data (you can replace this with your actual data)
      const itemData = {
        1: { title: "Item 1", description: "Details of Item 1", price: 100 },
        2: { title: "Item 2", description: "Details of Item 2", price: 150 },
        // Add more items as needed
      };
      setItemDetails(itemData[id]);
    };

    fetchItemDetails();
  }, [id]); // Run the effect whenever the `id` changes

  if (!itemDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="dark:bg-gray-950 bg-gray-200">
        <div className="container m-auto left-0 py-6">
          <Link
            to="/shop"
            className="text-black hover:text-primary flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to catalog page
          </Link>
        </div>
      </section>
      <h1>{itemDetails.title}</h1>
      <p>{itemDetails.description}</p>
      <p>Price: ${itemDetails.price}</p>
    </>
  );
};

export default ItemPage;
