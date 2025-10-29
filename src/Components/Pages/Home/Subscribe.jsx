import Image from 'next/image';
import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <div className='w-full h-[400px] overflow-hidden container mx-auto my-10 bg-[#D8F1E5] rounded-3xl'>
                <div className="flex justify-between items-center rounded-3xl p-10">
                    <div className="flex-1 pr-10">
                        <h1 className="text-4xl font-bold mb-4 text-gray-700">
                            Stay home & get your daily
                            <br />
                            needs from our shop
                        </h1>
                        <p className="text-xl font-semibold mb-6 text-gray-500">Start Your Daily Shopping with Daily Hut</p>
                        <div className='flex items-center gap-0'>
                            <label className="flex items-center w-full max-w-md bg-white rounded-full px-5 py-2 border-none">
                                <svg className="h-6 w-6 text-gray-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" placeholder="Enter your email" required className='w-full placeholder:text-gray-600 text-gray-600 outline-none border-none' />
                            </label>
                            <button className="px-6 py-2 bg-[#3BB77E] rounded-full ml-[-50px] z-10 text-white font-semibold">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="shrink-0">
                        <Image
                            src={"https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-9.png"}
                            alt="Logo"
                            width={700}
                            height={200}
                            className='rounded-3xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
