"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 my-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="md:rounded-3xl rounded-xl overflow-hidden"
        >
          {/* === Slide 1 === */}
          <SwiperSlide>
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
              <Image
                src="https://nest-frontend-v6.vercel.app/assets/imgs/slider/slider-1.png"
                alt="Hero Slide 1"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-5 sm:px-10 md:px-20 text-white md:rounded-3xl rounded-xl">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100">
                  Don’t miss amazing
                  <br />
                  grocery deals
                </h1>
                <p className="text-sm sm:text-lg md:text-xl mt-3 mb-5 text-gray-200">
                  Sign up for daily newsletter
                </p>
                <div className="flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-48 sm:w-64 md:w-80 px-4 py-2 rounded-full outline-none bg-white text-gray-700"
                  />
                  <button className="-ml-8 sm:-ml-12 bg-[#3BB77E] text-white px-5 py-2 rounded-full font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* === Slide 2 === */}
          <SwiperSlide>
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
              <Image
                src="https://nest-frontend-v6.vercel.app/assets/imgs/slider/slider-2.png"
                alt="Hero Slide 2"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-5 sm:px-10 md:px-20 text-white md:rounded-3xl rounded-xl">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100">
                  Fresh Arrivals Every Day
                </h1>
                <p className="text-sm sm:text-lg md:text-xl mt-3 mb-5 text-gray-200">
                  Get the best products at amazing prices!
                </p>
                <div className="flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-48 sm:w-64 md:w-80 px-4 py-2 rounded-full outline-none text-gray-700 bg-white"
                  />
                  <button className="-ml-8 sm:-ml-12 bg-[#3BB77E] text-white px-5 py-2 rounded-full font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
