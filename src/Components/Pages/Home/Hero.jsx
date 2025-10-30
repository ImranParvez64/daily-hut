// Example.jsx
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function Hero() {
    return (
        <div>
            <div className='container mx-auto my-6 '>
                <Swiper modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }} className="mySwiper">
                    <SwiperSlide className=' relative w-full h-[500px] '>
                        <Image
                            src={"https://nest-frontend-v6.vercel.app/assets/imgs/slider/slider-1.png"}
                            alt="Logo"
                            width={1920}
                            height={1080}
                            className='object-cover rounded-3xl'
                        />
                        <div className="absolute inset-0 flex flex-col justify-center pl-20 items-start rounded-3xl bg-black/20 text-white ">
                            <h1 className="text-6xl font-bold mb-4 text-gray-700">
                                Don’t miss amazing
                                <br />
                                grocery deals
                            </h1>
                            <p className="text-2xl font-semibold mb-6 text-gray-500">Sign up for daily newslater</p>
                            <div className='flex justify-center items-center'>
                                <label className="input w-80 validator outline-none bg-white rounded-full border-none pl-5 ">
                                    <svg className="h-[1em] text-gray-500 text-xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </g>
                                    </svg>
                                    <input type="email" placeholder="enter you mail" required className='placeholder:text-gray-600 text-gray-600' />
                                </label>

                                <button className="px-6 py-2 bg-[#3BB77E] rounded-full -translate-x-20 cursor-pointer z-10">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className=' relative w-full h-[500px] '>
                        <Image
                            src={"https://nest-frontend-v6.vercel.app/assets/imgs/slider/slider-2.png"}
                            alt="Logo"
                            width={1920}
                            height={1080}
                            className='object-cover rounded-3xl '
                        />
                        <div className="absolute inset-0 flex flex-col rounded-3xl justify-center pl-20 items-start  bg-black/20 text-white ">
                            <h1 className="text-6xl font-bold mb-4 text-gray-700">
                                Don’t miss amazing
                                <br />
                                grocery deals
                            </h1>
                            <p className="text-2xl font-semibold mb-6 text-gray-500">Sign up for daily newslater</p>
                            <div className='flex justify-center items-center'>
                                <label className="input w-80 validator outline-none bg-white rounded-full border-none pl-5 ">
                                    <svg className="h-[1em] text-gray-500 text-xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </g>
                                    </svg>
                                    <input type="email" placeholder="enter you mail" required className='placeholder:text-gray-600 text-gray-600' />
                                </label>

                                <button className="px-6 py-2 bg-[#3BB77E] rounded-full -translate-x-20 cursor-pointer z-10">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
}
