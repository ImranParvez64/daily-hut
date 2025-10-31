"use client";

import Title from '@/Components/MiniComponents/Title';
import React from 'react';
import FlashDealCard from './HomeComponents/DealCards';

const products = [
  {
    "id": 1,
    "name": "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    "brand": "NestFood",
    "rating": 4.0,
    "img": "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-5.png",
    "discountEnd": "2025-11-05T00:00:00",
    "price": 25.00,
    "oldPrice": 32.00
  },
  {
    "id": 2,
    "name": "Fresh Organic Broccoli, Green & Healthy",
    "brand": "FreshMart",
    "rating": 4.5,
    "img": "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-6.png",
    "discountEnd": "2025-11-08T00:00:00",
    "price": 18.50,
    "oldPrice": 24.00
  },
  {
    "id": 3,
    "name": "Tasty Farm Fresh Avocados, 6 Pack",
    "brand": "Nature’s Choice",
    "rating": 4.8,
    "img": "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-7.png",
    "discountEnd": "2025-11-10T00:00:00",
    "price": 15.00,
    "oldPrice": 20.00
  },
  {
    "id": 4,
    "name": "Organic Red Apples, Sweet & Crunchy",
    "brand": "GreenLeaf",
    "rating": 4.6,
    "img": "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-8.png",
    "discountEnd": "2025-11-12T00:00:00",
    "price": 12.00,
    "oldPrice": 16.00
  }
]

const Deal = () => {
    return (
        <div className='container mx-auto px-4 pb-10'>
            <Title title={"Deals Of The Day"} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
                {products.map(product => (
                    <FlashDealCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Deal;
