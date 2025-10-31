"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const FlashDealCard = ({ product }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date(product.discountEnd).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, mins, secs });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [product.discountEnd]);

  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white flex flex-col">
      
      {/* Image */}
      <div className="relative w-full h-56 sm:h-48">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="rounded-t-2xl object-contain p-3"
        />
        {/* Countdown Timer */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-white/90 p-2 rounded-xl shadow-md text-[10px] sm:text-xs">
          {['Days', 'Hours', 'Mins', 'Sec'].map((label, i) => {
            const value = [timeLeft.days, timeLeft.hours, timeLeft.mins, timeLeft.secs][i];
            return (
              <div key={label} className="text-center">
                <p className="text-green-600 font-bold text-xs sm:text-sm">
                  {value.toString().padStart(2, '0')}
                </p>
                <span className="text-gray-500">{label}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between space-y-2">
        <h2 className="font-semibold text-gray-800 text-sm sm:text-base line-clamp-2">{product.name}</h2>

        <div className="flex items-center text-yellow-500 gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
            />
          ))}
          <span className="ml-1 text-xs sm:text-sm text-gray-500">({product.rating})</span>
        </div>

        <p className="text-xs sm:text-sm text-gray-400">
          By <span className="text-green-600 font-medium">{product.brand}</span>
        </p>

        <div className="flex items-center gap-2 mt-1">
          <p className="text-sm sm:text-base font-bold text-green-600">${product.price}</p>
          <p className="line-through text-xs sm:text-sm text-gray-400">${product.oldPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default FlashDealCard;
