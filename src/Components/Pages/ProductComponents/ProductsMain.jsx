'use client'
import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import ProductsCard from '@/Components/Shared/ProductCard';

const ProductsMain = ({ categories, products }) => {

    const [selectCat, setSelectCat] = useState("All");
    const [rating, setRating] = useState(null);
    const [hoverRating, setHoverRating] = useState(null);
    const [price, setPrice] = useState([0, 2000]);

    const handleCategory = (cat) => setSelectCat(cat);

    const filterData = products.filter(product => {

        // Category filter
        if (selectCat !== "All" && product.category !== selectCat) {
            return false;
        }

        // Rating filter only if set
        if (rating && product.rating < rating) {
            return false;
        }

        // Price filter only if changed
        if (price[0] !== 0 || price[1] !== 2000) {
            const p = Number(product.price);
            if (p < price[0] || p > price[1]) {
                return false;
            }
        }

        return true;
    });

    return (
        <div className='container mx-auto py-6'>
            <div className='grid grid-cols-12 gap-8'>
               
                {/* Sidebar Filter */}
                <div className='col-span-4 bg-white p-5 rounded-xl shadow-lg space-y-6'>
                    <h2 className='font-bold text-lg text-gray-800 border-b pb-2'>Filter</h2>

                    {/* Category Filter */}
                    <div>
                        <h3 className='uppercase text-xs font-bold text-gray-600 mb-3'>Category</h3>

                        <div className='space-y-2'>
                            {/* All */}
                            <div
                                onClick={() => handleCategory("All")}
                                className={`
                  px-3 py-2 rounded-lg text-sm font-semibold cursor-pointer transition
                  ${selectCat === "All"
                                        ? 'bg-[#25AD7A] text-white shadow'
                                        : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'}
                `}
                            >
                                All
                            </div>

                            {categories.map(cat => (
                                <div
                                    key={cat.id}
                                    onClick={() => handleCategory(cat.name)}
                                    className={`
                    px-3 py-2 rounded-lg text-sm font-semibold cursor-pointer transition
                    ${selectCat === cat.name
                                            ? 'bg-[#25AD7A] text-white shadow'
                                            : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'}
                  `}
                                >
                                    {cat.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rating Filter */}
                    <div>
                        <h3 className='uppercase text-xs font-bold text-gray-600 mb-3'>Rating</h3>

                        <div className='flex space-x-1'>
                            {[1, 2, 3, 4, 5].map(star => {
                                const filled = star <= (hoverRating || rating);

                                return (
                                    <FaStar
                                        key={star}
                                        size={22}
                                        className={`cursor-pointer transition ${filled ? 'text-yellow-400 drop-shadow' : 'text-gray-300 hover:text-yellow-300'
                                            }`}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(null)}
                                        onClick={() => setRating(star)}
                                    />
                                );
                            })}
                        </div>

                        <p
                            className='text-xs text-blue-500 cursor-pointer mt-1'
                            onClick={() => setRating(null)}
                        >
                            Reset Rating
                        </p>
                    </div>

                    {/* Price Slider */}
                    <div>
                        <h3 className='uppercase text-xs font-bold text-gray-600 mb-3'>Price</h3>

                        <input
                            type="range"
                            min="0"
                            max="2000"
                            value={price[1]}
                            onChange={(e) => setPrice([price[0], Number(e.target.value)])}
                            className='w-full accent-[#25AD7A] cursor-pointer'
                        />

                        <div className='flex justify-between text-sm font-semibold text-teal-600 mt-1'>
                            <span>${price[0]}</span>
                            <span>to</span>
                            <span>${price[1]}</span>
                        </div>
                    </div>

                </div>
                 {/* Products */}
                <div className='col-span-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

                        {filterData.map(product => (
                            <ProductsCard key={product.id} product={product} />
                        ))}

                        {filterData.length === 0 && (
                            <p className="text-gray-500 col-span-5 text-center py-10">
                                No products found ☹️
                            </p>
                        )}
                    </div>
                </div>



            </div>
        </div>
    );
};

export default ProductsMain;
