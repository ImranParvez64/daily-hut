import Image from 'next/image';
import React from 'react';
import ContactInfo from './ContactInfo';
import FooterLinks from './FooterLinks';

const MainFooter = () => {
    return (
        <div className='container mx-auto mb-6 pb-5 border-b border-[#29AC7B]'>
            <div className='grid grid-cols-8 gap-4'>
                <div className='col-span-2 space-y-4'>
                    <Image
                        src={"https://i.ibb.co.com/LDt7Mqkk/Adobe-Express-file-2.png"}
                        alt="Logo"
                        width={600}
                        height={200}
                        className='w-70 h-19'
                    />
                    <p>DailyHut — everything you need, just a click away.</p>
                    <ContactInfo></ContactInfo>
                </div>
                <div className='col-span-4 mt-6'>
                    <FooterLinks></FooterLinks>
                </div>
                <div className='col-span-2'>
                    <div>
                        <h1 className='text-2xl font-bold mt-6 mb-10'>Install App</h1>
                        <p>From App Store or Google Play</p>
                        <div className='flex gap-4 mt-4'>
                            <Image
                                src={"https://nest-frontend-v6.vercel.app/assets/imgs/theme/google-play.jpg"}
                                alt="Logo"
                                width={600}
                                height={200}
                                className='w-40 h-auto'
                            />
                            <Image
                                src={"https://nest-frontend-v6.vercel.app/assets/imgs/theme/app-store.jpg"}
                                alt="Logo"
                                width={600}
                                height={200}
                                className='w-40 h-auto'
                            />
                        </div>

                    </div>
                    <div className='mt-10'>
                        <p>Secured Payment Gateways</p>
                        <div className='flex gap-4 mt-4'>
                            <Image
                                src={"https://nest-frontend-v6.vercel.app/assets/imgs/theme/payment-method.png"}
                                alt="Logo"
                                width={100}
                                height={100}
                                className='w-40 h-auto'
                            />
                        
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default MainFooter;