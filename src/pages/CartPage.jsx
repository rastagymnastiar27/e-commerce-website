import React from 'react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { FaTrash } from 'react-icons/fa'; // Import icon trash

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart(); // Tambahkan removeFromCart dari context

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="mx-auto dark:text-white duration-200">
      <section
        className="container mx-auto py-4 group shadow-[0_0_10px_1px_rgba(0,0,0,0.3)] rounded-lg 
        bg-gradient-to-br 
            from-white/60 to-white/40 dark:from-black/60 dark:to-black/40 
            transition-shadow duration-100"
      >
        <h1 className="text-2xl font-semibold">Your Order</h1>
        <div className="my-6">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="space-y-4 ">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-4 border-b-2 border-black 
                  dark:border-white"
                >
                  <div className="flex items-center">
                    <img
                      src={`/assets/product/${item.imgName}`}
                      alt={item.title}
                      className="w-24 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 object-cover rounded-md 
                      mr-4"
                    />
                    <div>
                      <h2 className="font-semibold">{item.title}</h2>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end mt-1">
                    <p>{formatCurrency(item.price * item.quantity)}</p>
                    {/* Delete Button */}
                    <button
                      className="mt-2 text-red-300 hover:text-red-700 flex items-center"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash className="mr-1 text-xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-between items-center p-4 border-t-2 border-black 
        dark:border-white">
          <h2 className="font-semibold text-xl">Total:</h2>
          <p className="text-xl">{formatCurrency(calculateTotal())}</p>
        </div>
        {/* Checkout Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-black text-white hover:bg-white hover:text-black px-6 
          py-2 rounded-lg duration-200">
            Proceed to Checkout
          </button>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
