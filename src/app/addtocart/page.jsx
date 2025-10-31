"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import Subscribe from "@/Components/Pages/Home/Subscribe";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "Field Roost Chao Cheese Creamy Original",
    img: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-4-1.jpg",
    price: 2.51,
    rating: 4,
  };

  const subtotal = product.price * quantity;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10">
      <h1 className="text-2xl font-bold mb-2 text-gray-600">Your Cart</h1>
      <p className="text-gray-500 mb-5">There is 1 product in your cart</p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-1 bg-white shadow rounded-lg p-4 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-gray-600">
                <th className="py-2 px-2"><input type="checkbox" /></th>
                <th className="py-2 px-2">Product</th>
                <th className="py-2 px-2">Unit Price</th>
                <th className="py-2 px-2">Quantity</th>
                <th className="py-2 px-2">Subtotal</th>
                <th className="py-2 px-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 px-2"><input type="checkbox" /></td>
                <td className="flex items-center gap-3 py-2 px-2 min-w-[250px]">
                  <div className="w-20 h-16 relative">
                    <Image src={product.img} alt={product.name} fill className="object-contain" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">{product.name}</p>
                    <div className="flex gap-1 mt-1 text-yellow-400 text-sm">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i}>{i < product.rating ? "★" : "☆"}</span>
                      ))}
                      <span className="text-gray-400 ml-1">({product.rating}.0)</span>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-2">${product.price.toFixed(2)}</td>
                <td className="py-2 px-2">
                  <input
                    type="number"
                    value={quantity}
                    min={1}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-16 border border-gray-200 rounded px-1 font-semibold text-gray-600"
                  />
                </td>
                <td className="py-2 px-2 text-green-600 font-semibold">${subtotal.toFixed(2)}</td>
                <td className="py-2 px-2 text-red-500 cursor-pointer">
                  <FaTrash />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex flex-col sm:flex-row justify-between mt-5 gap-2">
            <button className="bg-[#25AD7A] text-white px-4 py-2 rounded hover:bg-green-600 transition">
              ← Continue Shopping
            </button>
            <button className="bg-[#25AD7A] text-white px-4 py-2 rounded hover:bg-green-600 transition">
              Update Cart
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="w-full lg:w-1/3 bg-white shadow rounded-lg p-4 flex flex-col gap-3">
          <h2 className="text-lg font-semibold mb-3">Summary</h2>
          <div className="flex justify-between py-1">
            <span>Subtotal</span>
            <span className="font-semibold text-green-600">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between py-1 font-bold text-gray-700 text-lg">
            <span>Total</span>
            <span className="text-green-600">${subtotal.toFixed(2)}</span>
          </div>
          <button className="mt-5 w-full bg-[#25AD7A] text-white py-2 rounded hover:bg-green-600 transition">
            Proceed To Checkout →
          </button>
        </div>
      </div>

      <div className="mt-10">
        <Subscribe />
      </div>
    </div>
  );
};

export default CartPage;
