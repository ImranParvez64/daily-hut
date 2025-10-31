import Image from 'next/image';
import React from 'react';

const AboutFeatures = () => {
    const features = [
        {
            id: 1,
            title: "Best prices & offers",
            subtitle: "Orders $50 or more",
            icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-1.svg",
            content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
        },
        {
            id: 2,
            title: "Free delivery",
            subtitle: "24/7 amazing services",
            icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-2.svg",
            content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
        },
        {
            id: 3,
            title: "Great daily deal",
            subtitle: "When you sign up",
            icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-3.svg",
            content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
        },
        {
            id: 4,
            title: "Wide assortment",
            subtitle: "Mega Discounts",
            icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-4.svg",
            content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
        },
        {
            id: 5,
            title: "Easy returns",
            subtitle: "Within 30 days",
            icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-5.svg",
            content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
        },
         {
            id: 6,
            title: "Best prices & offers",
            subtitle: "Orders $50 or more",
            icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-1.svg",
            content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
        },
        {
            id: 7,
            title: "Free delivery",
            subtitle: "24/7 amazing services",
            icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-2.svg",
            content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
        },
        {
            id: 8,
            title: "Great daily deal",
            subtitle: "When you sign up",
            icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-3.svg",
            content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
        }
    ];
    return (
        <div className='container mx-auto my-20'>
            <div className='flex items-center justify-between flex-wrap gap-8'>
                {
                    features.map(feature => (
                        <div key={feature.id} className='border p-10 w-90 border-gray-200 gap-5  rounded-2xl flex flex-col justify-center items-center text-center space-y-4' >
                            <div>
                                <Image
                                src={feature.icon}
                                width={120}
                                height={50}
                                alt='feature1'
                                ></Image>
                            </div>
                            <div className='space-y-5'>
                                <h1 className='text-xl line-clamp-1 font-semibold text-gray-600'>{feature.title}</h1>
                                <h3 className='text-gray-400'>{feature.subtitle}</h3>
                                <p className='text-gray-400'>{feature.content}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AboutFeatures;