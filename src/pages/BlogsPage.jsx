import React from "react";
import Blogs from "../components/Blogs";
import Popup from "../components/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

const shopPage = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

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
    <div className="dark:text-white duration-200 overflow-hidden">
      <Blogs />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default shopPage;
