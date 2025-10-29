import ProductsMain from '../../Components/Pages/ProductComponents/ProductsMain';
import OthersHero from '@/Components/Shared/OthersHero';
import React from 'react';

const page = async() => {
    const res = await fetch("http://localhost:4000/categories", { cache: "no-store" });
    const categories = await res.json();

    const response = await fetch("http://localhost:4000/products", { cache: "no-store" });
    const products = await response.json();

    return (
        <div className='container mx-auto my-6'>
            <OthersHero title={"Products"}></OthersHero>
            <div>
                <ProductsMain categories={categories} products={products} />
            </div>
            <div></div>
        </div>
    );
};

export default page;