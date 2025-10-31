"use client";

import React, { useEffect, useState } from "react";
import PopularProducts from "./HomeComponents/PopularProducts";

const Popular = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const catRes = await fetch("/categories.json", { cache: "no-store" });
                const catData = await catRes.json();
                setCategories(catData);

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
        <section className="mb-20">
            <PopularProducts categories={categories} products={products} />
        </section>
    );
};

export default Popular;
