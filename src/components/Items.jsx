import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Heading from "../components/Heading";
import ItemCard from "./ItemCard";
import Spinner from "./Spinner";
import itemsData from "../items.json"; // Adjust the path to your JSON file if needed

// Import images
import nike from "../assets/product/nike.png";
import docmart from "../assets/product/1460.png";
import belts from "../assets/product/belts.png";
import hats from "../assets/product/hats.png";
import jackets from "../assets/product/jackets.png";
import tops from "../assets/product/tops.png";
import jeans from "../assets/product/jeans.png";
import rings from "../assets/product/rings.png";

// Map image names to imported files
const images = {
  "nike.png": nike,
  "1460.png": docmart,
  "jackets.png": jackets,
  "belts.png": belts,
  "hats.png": hats,
  "tops.png": tops,
  "jeans.png": jeans,
  "rings.png": rings,
};

const Items = () => {
  const { pathname } = useLocation(); // Get the current route
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Transform JSON data to match ItemCard requirements
    const footwearData = itemsData.footwear.map((item) => ({
      id: item.id,
      img: images[item.imgName],
      title: item.title,
      price: item.price,
      aosDelay: item.aosDelay,
    }));

    const outerwearData = itemsData.Outerwear.map((item) => ({
      id: item.id,
      img: images[item.imgName],
      title: item.title,
      price: item.price,
      aosDelay: item.aosDelay,
    }));

    const allItems = [...footwearData, ...outerwearData];

    // Check if the user is on the home page or shop page
    const isHomePage = pathname === "/";

    // Display 8 items for the home page or all items for the shop page
    const displayedItems = isHomePage ? allItems.slice(0, 8) : allItems;

    setItems(displayedItems);
    setLoading(false);
  }, [pathname]);

  return (
    <div>
      <div className="container py-10">
        {/* Header section */}
        <Heading title="Our Catalogs" subtitle={"Explore Our Items"} />
        {/* Body section */}
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <ItemCard item={items} />
        )}
      </div>
    </div>
  );
};

export default Items;
