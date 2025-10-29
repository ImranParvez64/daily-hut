'use client';

import React, { useEffect, useState } from 'react';
import Title from '@/Components/MiniComponents/Title';
import CategoryCard from './HomeComponents/CategoryCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Categories() {
        const [categories, setCategories] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                const res = await fetch('http://localhost:4000/categories');
                const data = await res.json();
                setCategories(data);
            };
            fetchData();
        }, []);

        return (
            <div className='container mx-auto py-10'>
                <Title title='Featured Categories' />

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={8}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 8 },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    className='pb-8 mt-10'
                >
                    {categories.map((category) => (
                        <SwiperSlide key={category.id}>
                            <CategoryCard category={category} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    };