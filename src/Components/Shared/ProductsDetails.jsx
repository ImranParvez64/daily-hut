"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slice/addtocartSlice";
import { Star } from "lucide-react";
import { FaCartPlus, FaHeart } from "react-icons/fa";

export default function ProductDetails({ product }) {
  const dispatch = useDispatch();
  const [selectedWeight, setSelectedWeight] = useState(product.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        img1: product.img1,
        size: selectedWeight,
        quantity,
      })
    );
    alert(`${product.name} (${quantity}) added to cart`);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-md border">
      {/* Badge */}
      {product.badge && (
        <span className="inline-block bg-pink-100 text-pink-600 text-xs sm:text-sm font-semibold px-3 py-1 rounded-md mb-3">
          {product.badge}
        </span>
      )}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">{product.name}</h1>
      {/* Rating */}
      <div className="flex items-center space-x-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
        ))}
        <span className="text-gray-500 text-sm sm:text-base ml-1">{product.rating}</span>
      </div>

      {/* Price */}
      <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
        <p className="text-2xl sm:text-3xl font-bold text-green-600">${product.price}</p>
        {product.oldPrice && <p className="text-gray-400 line-through text-lg">${product.oldPrice}</p>}
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-3 text-sm sm:text-base">{product.description}</p>

      {/* Sizes */}
      {product.sizes?.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm sm:text-base font-semibold text-gray-700 mb-2">Size / Weight:</h4>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((w) => (
              <button
                key={w}
                onClick={() => setSelectedWeight(w)}
                className={`px-3 py-1 sm:px-4 sm:py-2 border rounded-md text-sm font-medium transition ${
                  selectedWeight === w ? "bg-green-500 text-white border-green-500" : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity & Actions */}
      <div className="flex flex-wrap items-center mt-6 gap-3 sm:gap-4">
        <div className="flex border rounded-md items-center">
          <button className="px-3 py-2 text-gray-600" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
          <input type="text" readOnly value={quantity} className="w-10 sm:w-12 text-center border-x outline-none" />
          <button className="px-3 py-2 text-gray-600" onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>
        <button onClick={handleAddToCart} className="flex items-center gap-2 px-4 sm:px-6 bg-[#25AD7A] text-white font-semibold py-2 sm:py-2.5 rounded-md hover:bg-green-600 transition">
          <FaCartPlus />
          Add to Cart
        </button>
        <button className="border rounded-md text-red-600 p-3 hover:text-red-400 transition"><FaHeart /></button>
      </div>
    </div>
  );
}
