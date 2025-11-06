"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/addtocartSlice";
import { Star } from "lucide-react";
import { FaCartPlus, FaHeart } from "react-icons/fa";

export default function ProductDetails({ product }) {
  const dispatch = useDispatch();

  const [selectedWeight, setSelectedWeight] = useState(product.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);

  // 🛒 Add to cart handler
  const handleAddToCart = () => {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      img1: product.img1,
      quantity: quantity, // ✅ user selected quantity
      size: selectedWeight,
    };

    dispatch(addToCart(itemToAdd));

    alert(`${product.name} (${quantity} pcs) added to cart 🛒`);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl">
      {product.badge && (
        <span className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-md mb-2">
          {product.badge}
        </span>
      )}

      <h1 className="text-2xl font-semibold text-gray-800">{product.name}</h1>

      {/* ⭐ Rating */}
      <div className="flex items-center space-x-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
        <span className="text-gray-500 text-sm ml-1">{product.rating}</span>
      </div>

      {/* 💰 Price */}
      <div className="mt-3 flex items-center space-x-3">
        <p className="text-3xl font-bold text-green-600">${product.price}</p>
        {product.oldPrice && (
          <p className="text-gray-400 line-through text-lg">${product.oldPrice}</p>
        )}
      </div>

      <p className="text-gray-500 mt-3 text-sm leading-relaxed">
        {product.description}
      </p>

      {/* ⚖️ Sizes / Weights */}
      {product.sizes?.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Size / Weight:
          </h4>
          <div className="flex gap-2 flex-wrap">
            {product.sizes.map((w) => (
              <button
                key={w}
                onClick={() => setSelectedWeight(w)}
                className={`px-3 py-1 border rounded-md text-sm font-medium transition ${
                  selectedWeight === w
                    ? "bg-green-500 text-white border-green-500"
                    : "border-gray-300 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 🔢 Quantity & Actions */}
      <div className="flex items-center mt-5 gap-3">
        {/* Quantity Input */}
        <div className="flex border rounded-md items-center">
          <button
            className="px-3 py-2 text-gray-600"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, Number(e.target.value) || 1))
            }
            className="w-14 text-center border-x outline-none"
          />
          <button
            className="px-3 py-2 text-gray-600"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </button>
        </div>

        {/* 🛒 Add to cart */}
        <button
          onClick={handleAddToCart}
          className="flex items-center gap-2 px-3 bg-[#25AD7A] cursor-pointer text-white font-semibold py-2 rounded-md hover:bg-green-600 transition"
        >
          <FaCartPlus />
          Add to cart
        </button>

        {/* ❤️ Wishlist */}
        <button className="border rounded-md text-red-700 p-3 hover:text-red-400 transition">
          <FaHeart />
        </button>

        {/* 🔄 Refresh */}
        <button className="border p-2 rounded-md text-gray-600 hover:text-blue-500 transition">
          🔄
        </button>
      </div>

      {/* 📦 Extra Details */}
      <div className="border-t mt-6 pt-4 text-sm text-gray-600 space-y-1">
        <p>
          <span className="font-semibold text-gray-800">Type:</span>{" "}
          {product.type}
        </p>
        <p>
          <span className="font-semibold text-gray-800">MFG:</span>{" "}
          {product.mfg}
        </p>
        <p>
          <span className="font-semibold text-gray-800">LIFE:</span>{" "}
          {product.life}
        </p>
        <p>
          <span className="font-semibold text-gray-800">SKU:</span>{" "}
          {product.sku}
        </p>
        <p>
          <span className="font-semibold text-gray-800">Tags: </span>{" "}
          {product.tags}
        </p>
        <p>
          <span className="font-semibold text-gray-800">Stock:</span>{" "}
          <span className="text-green-600 font-semibold">
            {product.stock} Items In Stock
          </span>
        </p>
      </div>
    </div>
  );
}
