import React from "react";

import Hero from "../components/Hero.jsx";
import Category from "../components/Category.jsx";
import Category2 from "../components/Category2.jsx";
import Services from "../components/Services.jsx";
import Banner from "../components/Banner.jsx";

import docmart from "../assets/hero/2.png";
import vinyl from "../assets/category/vinyl.png";

import Items from "../components/Items.jsx";
import Blogs from "../components/Blogs.jsx";
import Popup from "../components/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "30% OFF",
  title: "Fine kick!!",
  date: "15 Nov to 31 Dec",
  image: docmart,
  title2: "Dr.Martens 1460",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#561E1F",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Music!",
  date: "15 Nov to 31 Dec",
  image: vinyl,
  title2: "Antique Vinyl",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#A69563",
};

const App = () => {
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
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Items />
      <Banner data={BannerData2} />
      <Blogs />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default App;
