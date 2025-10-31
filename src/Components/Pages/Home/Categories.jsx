'use client';

import React, { useEffect } from 'react';
import Title from '@/Components/MiniComponents/Title';
import CategoryCard from './HomeComponents/CategoryCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../redux/slice/categoriesSlice';
import Link from 'next/link';

export default function Categories() {
  const dispatch = useDispatch();
  const { items: categories, loading, error } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p className="text-red-500">❌ {error}</p>;

  return (
    <div className="container mx-auto py-6 sm:py-8 md:py-10 px-3">
      
      {/* Responsive Title */}
      <div className="text-center md:text-start mb-6 sm:mb-8 md:mb-10">
        <Title title="Featured Categories" />
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={15}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 2 },       // small devices
          480: { slidesPerView: 3 },     // slightly larger mobiles
          768: { slidesPerView: 6 },     // medium tablets
          1024: { slidesPerView: 8 },    // desktops
        }}
        className="mt-6 sm:mt-8 md:mt-10 pb-8"
      >
        {categories.map(category => (
          <SwiperSlide key={category.id} className="flex justify-center">
            <Link href={'/products'}>
              <CategoryCard category={category} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
