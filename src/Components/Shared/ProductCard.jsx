import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="transition-transform duration-300 hover:scale-105 cursor-pointer w-[220px]">

      <div
        key={product.id}
        className="border-gray-200 shadow-md border rounded-xl bg-white overflow-hidden"
      >
        <div className="relative overflow-hidden w-full h-40">
          <Image
            src={product.img1}
            fill
            className="object-contain transition-transform duration-500 hover:scale-105 p-3"
            alt={product.name}
          />
          <p className="absolute top-2 left-2 bg-[#E7EAF2] text-gray-700 px-2 py-0.5 rounded-br-2xl rounded-tl-xl font-medium text-xs">
            {product.badge}
          </p>
        </div>

        {/* 🧾 Content Section */}
        <div className="p-3 space-y-1">
          <p className="text-xs font-semibold text-gray-400">{product.category}</p>
          <Link href={`/products/${product.id}`}>
            <h2 className="text-lg font-semibold text-gray-600 line-clamp-1">
              {product.name}
            </h2>
          </Link>

          {/* ⭐ Rating Section */}
          <div className="flex items-center gap-1">
            {stars.map((star, index) => (
              <FaStar
                key={index}
                className={`text-sm ${star <= Math.floor(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                  }`}
              />
            ))}
            <span className="ml-1 text-xs text-gray-500">
              ({product.rating.toFixed(1)})
            </span>
          </div>

          {/* 💲 Price + 🛒 Button */}
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-semibold text-[#3BB77E]">
              ${product.price}{" "}
              <span className="ml-1 line-through text-xs font-semibold text-gray-400">
                ${product.oldPrice}
              </span>
            </h3>
            <button className="flex items-center justify-between gap-1 bg-[#DEF9EC] px-2 py-1 rounded-md font-semibold cursor-pointer hover:bg-[#3BB77E] hover:text-white text-xs transition-all duration-300">
              <FaCartPlus className="text-xs" /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
