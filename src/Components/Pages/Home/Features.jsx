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
        }
    ];
    return (
        <div className='container mx-auto my-20'>
            <div className='flex items-center justify-between gap-8'>
                {
                    features.map(feature => (
                        <div key={feature.id} className='bg-[#F4F6FA] flex gap-5 p-5 rounded-2xl'>
                            <div>
                                <Image
                                src={feature.icon}
                                width={50}
                                height={50}
                                alt='feature1'
                                ></Image>
                            </div>
                            <div>
                                <h1 className='text-xl line-clamp-1 font-semibold text-gray-600'>{feature.title}</h1>
                                <h3 className='text-gray-400'>{feature.subtitle}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Features;