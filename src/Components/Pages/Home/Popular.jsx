import React from 'react';
import PopularProducts from './HomeComponents/PopularProducts';

const Popular = async () => {
    const res = await fetch("http://localhost:4000/categories", { cache: "no-store" });
    const categories = await res.json();

    
    

    const response = await fetch("http://localhost:4000/products", { cache: "no-store" });
    const products = await response.json();

    return (
        <div className='mb-15'>
            <PopularProducts categories={categories} products={products} />
        
        </div>
    );
};

export default Popular;
