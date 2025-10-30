import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa6';

const TopProductsCard = ({ product }) => {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1);
    return (
        <div className='flex gap-3  p-5 cursor-pointer border border-gray-100 rounded-2xl'>
            <div className='shadow-sm '>
                <Image
                    src={product.img1}
                    width={100}
                    height={200}
                    className="object-contain transition-transform duration-500 hover:scale-105 "
                    alt={product.name}
                />
            </div>
            <div className='space-y-3'>
                <Link href={`/products/${product.id}`}>
                    <h1 className='text-xl font-semibold text-gray-600 line-clamp-1 hover:text-[#3BB77E]'>{product.name}</h1></Link>
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
                <h3 className="text-sm font-semibold text-[#3BB77E]">
                    ${product.price}{" "}
                    <span className="ml-1 line-through text-xs font-semibold text-gray-400">
                        ${product.oldPrice}
                    </span>
                </h3>
            </div>
        </div>
    );
};

export default TopProductsCard;