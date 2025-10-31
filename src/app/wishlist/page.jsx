"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaTrash, FaCartPlus } from "react-icons/fa";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Field Roost Chao Cheese Creamy Original",
      img: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-4-1.jpg",
      price: 2.51,
      rating: 4,
    },
    {
      id: 2,
      name: "Organic Carrots",
      img: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-5-1.jpg",
      price: 1.99,
      rating: 5,
    },
  ]);

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10 mt-20 mb-20">
      <h1 className="text-2xl font-bold mb-2 text-gray-600">My Wishlist</h1>
      <p className="text-gray-500 mb-5">You have {wishlist.length} item(s) in your wishlist</p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Wishlist Items */}
        <div className="flex-1 bg-white shadow rounded-lg p-4 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-gray-600">
                <th className="py-2 px-2">Product</th>
                <th className="py-2 px-2">Price</th>
                <th className="py-2 px-2">Add to Cart</th>
                <th className="py-2 px-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((product) => (
                <tr key={product.id} className="border-b border-gray-200">
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
                    <button className="flex items-center gap-1 bg-[#DEF9EC] px-3 py-1 rounded-md font-semibold text-green-600 hover:bg-green-600 hover:text-white transition">
                      <FaCartPlus /> Add
                    </button>
                  </td>
                  <td className="py-2 px-2 text-red-500 cursor-pointer" onClick={() => removeItem(product.id)}>
                    <FaTrash />
                  </td>
                </tr>
              ))}
              {wishlist.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-10 text-gray-500">
                    Your wishlist is empty ☹️
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Optional Sidebar / Info */}
        <div className="w-full lg:w-1/3 bg-white shadow rounded-lg p-4 flex flex-col gap-3">
          <h2 className="text-lg font-semibold mb-3">Wishlist Info</h2>
          <p className="text-gray-500 text-sm">
            You can add items from your wishlist to the cart and proceed to checkout. Keep track of your favorite products here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
