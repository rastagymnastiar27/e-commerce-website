import React from 'react';
import { formatCurrency } from '../utils/formatCurrency'; 

const CartPage = ({ cartItems = [] }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="dark:text-white duration-200">
      <section className="container mx-auto py-4">
        <h1 className="text-2xl font-semibold">Your Order</h1>

        {/* List of Cart Items */}
        <div className="my-6">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-4 border-b-2">
                  <div className="flex items-center">
                    <img
                      src={`/assets/product/${item.imgName}`}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h2 className="font-semibold">{item.title}</h2>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p>{formatCurrency(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Total Price */}
        <div className="flex justify-between items-center p-4 border-t-2">
          <h2 className="font-semibold text-xl">Total:</h2>
          <p className="text-xl">{formatCurrency(calculateTotal())}</p>
        </div>

        {/* Checkout Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 duration-200">
            Proceed to Checkout
          </button>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
