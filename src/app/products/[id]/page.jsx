"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import ProductDetails from "@/Components/Shared/ProductsDetails";
import ProductsDetailsPath from "@/Components/Shared/ProductsDetailsPath";

const Page = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`http://localhost:4000/products/${id}`, {
                    cache: "no-store",
                });

                if (!res.ok) {
                    throw new Error(`Product not found (status: ${res.status})`);
                }

                const data = await res.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            }
        };

        if (id) fetchProduct();
    }, [id]);

    if (error) return <p className="text-red-500">❌ {error}</p>;
    if (!product) return <p>Loading...</p>;

    return (
        <div className="p-6 container mx-auto">
            <ProductsDetailsPath productName={product.name}></ProductsDetailsPath>
            <div className="flex">
                <div>
                    <Image
                        src={product.img1}
                        alt={product.name}
                        height={400}
                        width={500}
                    >

                    </Image>
                </div>
                <div>
                    <ProductDetails product={product}></ProductDetails>
                </div>
            </div>
        </div>
    );
};

export default Page;
