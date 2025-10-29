import React from 'react';
import { IoMdHome } from 'react-icons/io';

const ProductsDetailsPath = ({ title, productName }) => {
    return (
        <div>
            <div className='flex items-center gap-2 font-semibold text-[#25AD7A] py-2'>
                <IoMdHome className='text-[#25AD7A]' />
                <p>Home / <span>Products / </span> <span className='text-gray-600'>{productName}</span></p>
                
            </div>
        </div>
    );
};

export default ProductsDetailsPath;