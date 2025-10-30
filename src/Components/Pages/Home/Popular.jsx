import React from 'react';
import PopularProducts from './HomeComponents/PopularProducts';

const Popular = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`, { cache: "no-store" });
    const categories = await res.json();

    
    

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, { cache: "no-store" });
    const products = await response.json();

    return (
        <div className='mb-15'>
            <PopularProducts categories={categories} products={products} />
        
        </div>
    );
};

export default Popular;
