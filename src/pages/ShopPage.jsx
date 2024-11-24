import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Items from "../components/Items";
import Popup from "../components/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopPage = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [category, setCategory] = useState("all"); // Default to 'all'
  
  const { search } = useLocation(); // Get query params from the URL
  const queryParams = new URLSearchParams(search);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation()]); 


  useEffect(() => {
    const categoryFromUrl = queryParams.get("category");
    if (categoryFromUrl) {
      setCategory(categoryFromUrl);
    }
  }, [search]);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="dark:text-white duration-200 overflow-hidden lg:my-12">
      {/* Pass category and setCategory */}
      <Items category={category} setCategory={setCategory} showPagination={true} />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default ShopPage;
