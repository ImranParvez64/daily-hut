"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import Image from "next/image";

const ImageSlider = ({ images }) => {
  return (
    <Swiper
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: { slidesPerView: 1 },       // Mobile
        640: { slidesPerView: 1 },     // Small devices
        768: { slidesPerView: 2 },     // Tablet
        1024: { slidesPerView: 3 },    // Desktop
        1280: { slidesPerView: 4 },    // Large screens (optional)
      }}
    >
      {images.map((imgObj, idx) => (
        <SwiperSlide key={idx}>
          <div className="w-full h-64 relative">
            <Image
              src={imgObj.src}
              alt={imgObj.caption || `Slide ${idx + 1}`}
              fill
              className="w-full h-full object-cover rounded-xl"
            />
            {imgObj.caption && (
              <p className="absolute bottom-2 left-4 text-white bg-black bg-opacity-50 px-2 py-1 rounded text-sm">
                {imgObj.caption}
              </p>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
