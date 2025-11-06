"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCartPlus, FaStar, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  // Quantity Control
  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Add to cart handler
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div className="group transition-all duration-300 cursor-pointer w-full sm:w-auto">
      <div className="border border-gray-200 shadow-md rounded-xl bg-white overflow-hidden flex flex-col h-full hover:shadow-lg">

        {/* Image */}
        <div className="relative w-full h-40 sm:h-44 md:h-48 lg:h-52">
          <Image
            src={product.img1}
            fill
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
            alt={product.name}
          />
          {product.badge && (
            <span className="absolute top-2 left-2 bg-[#E7EAF2] text-gray-700 px-2 py-0.5 rounded-br-2xl rounded-tl-xl font-medium text-xs sm:text-[10px]">
              {product.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-3 md:p-4 flex flex-col flex-1 justify-between space-y-2">
          <p className="text-[10px] sm:text-xs font-semibold text-gray-400">
            {product.category}
          </p>

          <Link href={`/products/${product.id}`}>
            <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-600 line-clamp-1 group-hover:text-[#3BB77E] transition">
              {product.name}
            </h2>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {stars.map((star, index) => (
              <FaStar
                key={index}
                className={`text-[10px] sm:text-xs md:text-sm ${
                  star <= Math.floor(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-1 text-[10px] sm:text-xs text-gray-500">
              ({product.rating.toFixed(1)})
            </span>
          </div>

          {/* Price + Add Button */}
          <div className="flex justify-between items-center mt-2">
            <div className="text-sm sm:text-base font-semibold text-[#3BB77E]">
              ${product.price}
              <span className="ml-1 line-through text-[10px] sm:text-xs font-semibold text-gray-400">
                ${product.oldPrice}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Quantity Control */}
              <div className="flex items-center border rounded-md overflow-hidden">
                <button
                  onClick={decreaseQty}
                  className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 transition"
                >
                  <FaMinus />
                </button>
                <span className="px-2 text-sm font-semibold">{quantity}</span>
                <button
                  onClick={increaseQty}
                  className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 transition"
                >
                  <FaPlus />
                </button>
              </div>

              {/* Add Button */}
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-1 bg-[#DEF9EC] px-2 py-1 sm:px-3 sm:py-1.5 rounded-md font-semibold hover:bg-[#3BB77E] hover:text-white text-[10px] sm:text-xs transition-all duration-300"
              >
                <FaCartPlus className="text-[10px] sm:text-xs" /> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
