import Image from 'next/image';
import React from 'react';

const Features = () => {
    const features = [
        {
            id: 1,
            title: "Best prices & offers",
            subtitle: "Orders $50 or more",
            icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-1.svg"
        },
        {
            id: 2,
            title: "Free delivery",
            subtitle: "24/7 amazing services",
            icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-2.svg"
        },
        {
            id: 3,
            title: "Great daily deal",
            subtitle: "When you sign up",
            icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-3.svg"
        },
        {
            id: 4,
            title: "Wide assortment",
            subtitle: "Mega Discounts",
            icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-4.svg"
        },
        {
            id: 5,
            title: "Easy returns",
            subtitle: "Within 30 days",
            icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-5.svg"
        },
            {
            id: 3,
            title: "Great daily deal",
            subtitle: "When you sign up",
            icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-3.svg"
        }]
    return (
        <div className='container mx-auto my-20 px-4'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
                {features.map(feature => (
                    <div key={feature.id} className='bg-[#F4F6FA] flex gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl items-center'>
                        <div className='shrink-0'>
                            <Image
                                src={feature.icon}
                                width={50}
                                height={50}
                                alt={feature.title}
                            />
                        </div>
                        <div>
                            <h1 className='text-lg sm:text-xl font-semibold text-gray-600 line-clamp-1'>{feature.title}</h1>
                            <h3 className='text-gray-400 text-sm sm:text-base'>{feature.subtitle}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
