import Image from 'next/image';
import React from 'react';

const AboutFeatures = () => {
    const features = [
        { id: 1, title: "Best prices & offers", subtitle: "Orders $50 or more", icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-1.svg", content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" },
        { id: 2, title: "Free delivery", subtitle: "24/7 amazing services", icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-2.svg", content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" },
        { id: 3, title: "Great daily deal", subtitle: "When you sign up", icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-3.svg", content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" },
        { id: 4, title: "Wide assortment", subtitle: "Mega Discounts", icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-4.svg", content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" },
        { id: 5, title: "Easy returns", subtitle: "Within 30 days", icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-5.svg", content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" },
        { id: 6, title: "Best prices & offers", subtitle: "Orders $50 or more", icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-1.svg", content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" },
        { id: 7, title: "Free delivery", subtitle: "24/7 amazing services", icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-2.svg", content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" },
        { id: 8, title: "Great daily deal", subtitle: "When you sign up", icon: "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-3.svg", content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" }
    ];

    return (
        <div className='container mx-auto my-20 px-4'>
            {/* Responsive Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {features.map(feature => (
                    <div
                        key={feature.id}
                        className='border p-8 border-gray-200 rounded-2xl flex flex-col items-center text-center hover:shadow-md transition'
                    >
                        <Image src={feature.icon} width={80} height={80} alt={feature.title} />

                        <h1 className='text-lg font-semibold text-gray-700 mt-4'>{feature.title}</h1>
                        <h3 className='text-gray-400 text-sm'>{feature.subtitle}</h3>
                        <p className='text-gray-500 text-sm mt-2'>{feature.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutFeatures;
