import Title from '@/Components/MiniComponents/Title';
import React from 'react';
import TopProductsCard from './HomeComponents/TopProductsCard';

const Top = async () => {
    const response = await fetch("http://localhost:4000/products", { cache: "no-store" });
    const products = await response.json();
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-4 gap-8'>
                {/* title  */}
                <div>
                    <div className='border-b border-gray-300 pb-3'>
                        <Title title={"TopSelling"}></Title>
                    </div>

                    <div className='grid gap-4 mt-8'>
                        {
                            products.slice(0, 3).map(product => <TopProductsCard key={product.id} product={product}></TopProductsCard>)
                        }
                    </div>
                </div>
                <div>
                    <div className='border-b border-gray-300 pb-3'>
                        <Title title={"Trending Products"}></Title>
                    </div>

                    <div className='grid gap-4 mt-8'>
                        {
                            products.slice(4, 7).map(product => <TopProductsCard key={product.id} product={product}></TopProductsCard>)
                        }
                    </div>
                </div>
                <div>
                    <div className='border-b border-gray-300 pb-3'>
                        <Title title={"Top Rated"}></Title>
                    </div>

                    <div className='grid gap-4 mt-8'>
                        {
                            products.slice(8, 11).map(product => <TopProductsCard key={product.id} product={product}></TopProductsCard>)
                        }
                    </div>
                </div>
                <div>
                    <div className='border-b border-gray-300 pb-3'>
                        <Title title={"Recently Added"}></Title>
                    </div>

                    <div className='grid gap-4 mt-8'>
                        {
                            products.slice(9, 13).map(product => <TopProductsCard key={product.id} product={product}></TopProductsCard>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Top;