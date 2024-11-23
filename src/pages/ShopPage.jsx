import React from "react";
import Items from "../components/Items";
import Popup from "../components/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopPage = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [category, setCategory] = React.useState("all");

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
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
      <Items category={category} setCategory={setCategory} />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default ShopPage;
