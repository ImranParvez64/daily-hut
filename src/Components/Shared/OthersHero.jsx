import React from 'react';
import { IoMdHome } from 'react-icons/io';

const OthersHero = ({ title }) => {
  return (
    <div className="bg-[#D8F1E5] rounded-3xl mx-4 p-6 md:p-10 lg:p-16 flex flex-col items-start text-center gap-3 md:gap-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600">
        {title}
      </h1>

      <div className="flex items-center justify-center gap-2 font-semibold text-[#25AD7A] flex-wrap">
        <IoMdHome className="text-[#25AD7A] text-xl" />
        <p className="text-sm md:text-base">
          Home / <span className="text-gray-500">{title}</span>
        </p>
      </div>
    </div>
  );
};

export default OthersHero;
