"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Import CSS for autoplay
import { Autoplay } from "swiper"; // Correct module for v10+
import Image from "next/image";

const ImageSlider = ({ images }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
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
