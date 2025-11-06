"use client";
import { addToCart } from "@/redux/slice/addtocartSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="group w-full transition-all duration-300 cursor-pointer">
      <div className="border border-gray-200 shadow-md rounded-2xl bg-white overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">

        {/* Product Image */}
        <div className="relative w-full h-44 sm:h-48 md:h-52">
          <Image
            src={product.img1}
            fill
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
            alt={product.name}
          />
          {product.badge && (
            <span className="absolute top-2 left-2 bg-[#E7EAF2] text-gray-700 px-2 py-1 rounded-br-2xl rounded-tl-xl font-medium text-xs sm:text-[10px]">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between space-y-2">

          {/* Category */}
          <p className="text-[10px] sm:text-xs font-semibold text-gray-400">
            {product.category}
          </p>

          {/* Product Name */}
          <Link href={`/products/${product.id}`}>
            <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 line-clamp-2 group-hover:text-[#25AD7A] transition-colors duration-300">
              {product.name}
            </h2>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {stars.map((star, idx) => (
              <FaStar
                key={idx}
                className={`text-[10px] sm:text-xs md:text-sm ${
                  star <= Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-1 text-[10px] sm:text-xs text-gray-500">
              ({product.rating.toFixed(1)})
            </span>
          </div>

          {/* Price + Add Button */}
          <div className="flex justify-between items-center mt-2 flex-wrap gap-2">

            {/* Price */}
            <div className="text-sm sm:text-base font-semibold text-[#25AD7A] flex items-center gap-1">
              ${product.price}
              {product.oldPrice && (
                <span className="text-[10px] sm:text-xs line-through font-normal text-gray-400">
                  ${product.oldPrice}
                </span>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-1 bg-[#DEF9EC] hover:bg-[#25AD7A] hover:text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-md transition-colors duration-300 flex-1 sm:flex-auto"
            >
              <FaCartPlus className="text-[10px] sm:text-xs" /> Add
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
