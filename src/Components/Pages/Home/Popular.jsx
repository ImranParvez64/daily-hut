"use client";

import React, { useEffect, useState } from "react";
import PopularProducts from "./HomeComponents/PopularProducts";

const Popular = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                // fetch categories.json from public
                const catRes = await fetch("/categories.json", { cache: "no-store" });
                const catData = await catRes.json();
                setCategories(catData);

                // fetch products.json from public
                const proRes = await fetch("/products.json", { cache: "no-store" });
                const proData = await proRes.json();
                setProducts(proData);
            } catch (error) {
                console.log("Error fetching popular section data:", error);
            }
        };

        loadData();
    }, []);

    return (
        <div className="mb-15">
            <PopularProducts categories={categories} products={products} />
        </div>
    );
};

export default Popular;
