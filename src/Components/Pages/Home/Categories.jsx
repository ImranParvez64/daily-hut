'use client';

import React, { useEffect } from 'react';
import Title from '@/Components/MiniComponents/Title';
import CategoryCard from './HomeComponents/CategoryCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../redux/slice/categoriesSlice';

export default function Categories() {
    const dispatch = useDispatch();
    const { items: categories, loading, error } = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    if (loading) return <p>Loading categories...</p>;
    if (error) return <p className="text-red-500">❌ {error}</p>;

    return (
        <div className='container mx-auto py-10'>
            <Title title='Featured Categories' />

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={8}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 8 },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className='pb-8 mt-10'
            >
                {categories.map(category => (
                    <SwiperSlide key={category.id}>
                        <CategoryCard category={category} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
