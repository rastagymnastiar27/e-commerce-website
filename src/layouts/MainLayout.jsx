import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ cartItems, handleAddToCart }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartItems={cartItems} />
      <div className="flex-grow">
        <Outlet /> {/* This will render the content */}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
