import Image from 'next/image';
import React from 'react';

const Subscribe = () => {
    return (
        <div className="container mx-auto my-10 px-4">
            <div className='w-full bg-[#D8F1E5] rounded-3xl overflow-hidden'>
                <div className="flex flex-col lg:flex-row justify-between items-center p-8 lg:p-10 gap-8">
                    
                    {/* Text & Input */}
                    <div className="flex-1 flex flex-col lg:pr-10 gap-4">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 leading-snug">
                            Stay home & get your daily
                            <br />
                            needs from our shop
                        </h1>
                        <p className="text-lg sm:text-xl font-semibold text-gray-500">
                            Start Your Daily Shopping with Daily Hut
                        </p>

                        {/* Input & Button */}
                        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 w-full max-w-md'>
                            <label className="flex items-center w-full bg-white rounded-full px-4 py-2 border-none">
                                <svg className="h-5 w-5 text-gray-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    required 
                                    className='w-full placeholder:text-gray-600 text-gray-600 outline-none border-none' 
                                />
                            </label>
                            <button className="px-6 py-2 bg-[#3BB77E] rounded-full text-white font-semibold w-full sm:w-auto">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="shrink-0 w-full lg:w-auto">
                        <Image
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-9.png"
                            alt="Subscribe Banner"
                            width={700}
                            height={400}
                            className='rounded-xl md:rounded-3xl w-full translate-y-10 md:traslate-y-0'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
