'use client'
import React, { useState } from 'react';
import Title from '@/Components/MiniComponents/Title';
import ProductCard from '@/Components/Shared/ProductCard';

const PopularProducts = ({ categories, products }) => {
    const [selectCat, setSelectCat] = useState("All");
    console.log(categories);
    

    const handleCategory = (cat) => setSelectCat(cat);

    const filterData = selectCat === "All"
        ? products
        : products.filter(product => product.category === selectCat);

    return (
        <div className='  container mx-auto py-10'>
           <div className='flex justify-between items-center'>
 <Title title={"Popular Products"} />

            <div className='flex flex-wrap gap-6 mt-4'>
                <div
                    className={`uppercase text-sm font-semibold cursor-pointer 
                        ${selectCat === "All"
                            ? "text-teal-500 border-b-2 border-teal-500"
                            : "text-gray-500 hover:text-teal-500"}
                    `}
                    onClick={() => handleCategory("All")}
                >
                    All
                </div>
                 {categories.slice(0,5).map(cat => (
                    <div
                        key={cat.id}
                        className={`
                            uppercase text-sm font-semibold cursor-pointer 
                            ${selectCat === cat.name
                                ? "text-teal-500 border-b-2 border-teal-500"
                                : "text-gray-500 hover:text-teal-500"}
                        `}
                        onClick={() => handleCategory(cat.name)}
                    >
                        {cat.name}
                    </div>
                ))}
            </div>
           </div>
           

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8'>
                {
                    filterData.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default PopularProducts;
