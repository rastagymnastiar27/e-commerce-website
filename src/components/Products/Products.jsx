import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import data from "../../products.json"; // Adjust the path to your JSON file if needed

// Import images
import nike from "../../assets/product/nike.png";
import docmart from "../../assets/product/1460.png";
import belts from "../../assets/product/belts.png";
import hats from "../../assets/product/hats.png";
import jackets from "../../assets/product/jackets.png";
import tops from "../../assets/product/tops.png";
import jeans from "../../assets/product/jeans.png";
import rings from "../../assets/product/rings.png";

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

const Products = () => {
  // Transform JSON data to match ProductCard requirements
  const ProductsData = data.footwear.map((item) => ({
    id: item.id,
    img: images[item.imgName],
    title: item.title,
    price: item.price,
    aosDelay: item.aosDelay,
  }));

  const ProductsData2 = data.Outerwear.map((item) => ({
    id: item.id,
    img: images[item.imgName],
    title: item.title,
    price: item.price,
    aosDelay: item.aosDelay,
  }));

  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Catalogs" subtitle={"Explore Our Items"} />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
