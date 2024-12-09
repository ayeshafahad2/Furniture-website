"use client";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

function Cart() {
  const initialCart = [
    { id: 1, name: "Breed Dry Dog Food", price: 100, image: "/cart-a.png" },
  ];

  const [cartItems, setCartItems] = useState(initialCart);

  const handleRemoveItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const calculateSubtotal = (price: number) => price;

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item.price), 0);
  };

  const subtotal = calculateTotal();
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div>
      <div className="relative">
        <img
          src="/blog.png"
          alt="Hero Image"
          className="w-full h-[300px] md:h-[250px] sm:h-[200px] object-cover"
        />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-16 h-16 sm:w-12 sm:h-12 object-contain cursor-pointer"
            />
          </Link>
          <div className="mt-4">
            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold mb-1 text-gray-800">
              Cart
            </h1>
            <p className="text-gray-600 text-lg sm:text-base">Home &gt; Cart</p>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto p-4 pb-16">
        {/* Main Flexbox Section - Responsive Cart View */}
        <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-8">
          {/* Cart Items Section */}
          <div className="w-full md:w-2/3 bg-customCream px-2 py-4 rounded-lg shadow-md">
            <div className="overflow-auto mb-8 bg-customCream">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="border px-4 py-2 text-lg bg-selfcolors-lightCream">Product</th>
                    <th className="border px-4 py-2 text-lg bg-selfcolors-lightCream">Price</th>
                    <th className="border px-4 py-2 text-lg bg-selfcolors-lightCream">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b group hover:bg-gray-100">
                      <td className="px-4 py-2 flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-contain"
                        />
                        <span className="text-lg md:text-base">{item.name}</span>
                      </td>
                      <td className="px-4 py-2 text-lg md:text-base">${item.price}</td>
                      <td className="px-4 py-2 flex justify-center items-center">
                        <button
                          className="text-selfcolors-darkBrown hover:text-red-800 transition px-2 py-1"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <FaTrash className="text-lg" />
                          <span className="ml-1 text-sm">Remove</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="w-full md:w-1/3 bg-selfcolors-customCream shadow-md p-6 border rounded-md">
            <h2 className="text-gray-900 text-2xl md:text-3xl text-center font-bold mb-4">
              Cart Summary
            </h2>
            <div className="flex justify-between mb-2 text-sm md:text-lg">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between mb-2 text-sm md:text-lg">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between mb-4 font-bold text-lg md:text-xl">
              <span>Total:</span>
              <span>${total}</span>
            </div>
            <button
              className="w-full bg-selfcolors-lightCream text-selfcolors-darkBrown px-4 py-2 rounded-lg shadow-md border-black border hover:bg-yellow-400 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
