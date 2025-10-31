"use client";

import Image from 'next/image';
import React from 'react';
import ContactInfo from './ContactInfo';
import FooterLinks from './FooterLinks';

const MainFooter = () => {
    return (
        <footer className='bg-white border-t border-gray-200'>
            <div className='container mx-auto px-4 py-10'>
                <div className='grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-8 gap-8'>

                    {/* Logo & Contact */}
                    <div className='col-span-1 md:col-span-2 space-y-4 place-items-center md:place-items-start'>
                        <Image
                            src="https://i.ibb.co/LDt7Mqkk/Adobe-Express-file-2.png"
                            alt="Logo"
                            width={600}
                            height={200}
                            className='w-40 h-auto object-contain'
                        />
                        <p className='text-gray-600 text-sm sm:text-base'>
                            DailyHut — everything you need, just a click away.
                        </p>
                        <ContactInfo />
                    </div>

                    {/* Footer Links */}
                    <div className='col-span-1 md:col-span-2 lg:col-span-4 mt-6 md:mt-0'>
                        <FooterLinks />
                    </div>

                    {/* Install App & Payment */}
                    <div className='col-span-1 md:col-span-2 space-y-6 '>
                        <div className='place-items-center md:place-items-start'>
                            <h1 className='text-xl sm:text-2xl font-bold mb-2'>Install App</h1>
                            <p className='text-sm text-gray-600'>From App Store or Google Play</p>
                            <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                                <Image
                                    src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/google-play.jpg"
                                    alt="Google Play"
                                    width={150}
                                    height={50}
                                    className='md:w-full w-40 h-auto'
                                />
                                <Image
                                    src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/app-store.jpg"
                                    alt="App Store"
                                    width={150}
                                    height={50}
                                    className='md:w-full w-40 h-auto'
                                />
                            </div>
                        </div>

                        <div className='place-items-center md:place-items-start'>
                            <p className='text-sm text-gray-600'>Secured Payment Gateways</p>
                            <Image
                                src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/payment-method.png"
                                alt="Payment Methods"
                                width={200}
                                height={50}
                                className='w-full sm:w-40 h-auto mt-2'
                            />
                        </div>
                    </div>

                </div>

                <p className='text-center text-gray-400 text-sm mt-10'>
                    © 2025 DailyHut. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default MainFooter;
