import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from "../context/CartContext";

const MainLayout = () => {
  const { cartItems, addToCart } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartItems={cartItems} />
      <div className="flex-grow">
        <Outlet /> {/* Render halaman di dalam outlet */}
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
