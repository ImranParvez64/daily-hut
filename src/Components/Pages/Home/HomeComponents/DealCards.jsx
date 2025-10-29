'use client'
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
    <div className=" rounded-2xl overflow-hidden shadow-md hover:shadow-md transition-all duration-300 bg-white">
      <div className="relative">
        <Image
          src={product.img}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-t-2xl w-full"
        />

        {/* Countdown timer */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-white/90 p-2 rounded-xl shadow-md">
          {['Days', 'Hours', 'Mins', 'Sec'].map((label, index) => {
            const value = [timeLeft.days, timeLeft.hours, timeLeft.mins, timeLeft.secs][index];
            return (
              <div key={label} className="text-center px-2">
                <p className="text-green-600 font-bold text-lg">
                  {value.toString().padStart(2, '0')}
                </p>
                <span className="text-[11px] text-gray-500">{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product info */}
      <div className="p-4 space-y-2">
        <h2 className="font-semibold text-gray-800 text-sm">{product.name}</h2>

        <div className="flex items-center text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
            />
          ))}
          <span className="ml-1 text-sm text-gray-500">({product.rating})</span>
        </div>

        <p className="text-sm text-gray-400">
          By <span className="text-green-600 font-medium">{product.brand}</span>
        </p>

        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-green-600">${product.price}</p>
          <p className="line-through text-sm text-gray-400">${product.oldPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default FlashDealCard;
