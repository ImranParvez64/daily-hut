import React from 'react';
import { IoMdHome } from 'react-icons/io';

const OthersHero = ({title}) => {
    return (
        <div className='bg-[#D8F1E5] rounded-3xl p-15'>
            <h1 className='text-5xl font-bold text-gray-600 mb-6'>{title}</h1>
            <div className='flex items-center gap-2 font-semibold text-[#25AD7A]'>
                <IoMdHome className='text-[#25AD7A]'/>
                <p>Home / <span className='text-gray-500'>{title}</span></p>
                

            </div>
        </div>
    );
};

export default OthersHero;