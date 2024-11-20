import React, { useState } from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/CartPage";
import BlogsPage from "./pages/BlogsPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = () => {
    setCartItems(prevCount => prevCount + 1);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainLayout cartItems={cartItems} handleAddToCart={handleAddToCart} />}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/item/:id" element={<ItemPage onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
