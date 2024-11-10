import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h1>{itemDetails.title}</h1>
      <p>{itemDetails.description}</p>
      <p>Price: ${itemDetails.price}</p>
    </div>
  );
};

export default ItemPage;
