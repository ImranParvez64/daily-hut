import Image from "next/image";
import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="flex justify-center">
      <div
        className="w-52 h-52 rounded-xl cursor-pointer p-4 flex flex-col justify-center items-center shadow-md hover:shadow-lg transition-all duration-300"
        style={{ background: category.bgColor }}
      >
        <div className="w-30 h-20 relative mb-3">
          <Image
            src={category.img}
            alt={category.name}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-700 text-center">
          {category.name}
        </h3>
        <p className="text-gray-500 text-sm text-center">
          Items: {category.items}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
