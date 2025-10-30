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
        const res = await fetch(`/products.json`, { cache: "no-store" });
        if (!res.ok) throw new Error("File load error");

        const data = await res.json();
        const singleProduct = data.find((p) => p.id.toString() === id);

        if (!singleProduct) throw new Error("Product not found");

        setProduct(singleProduct);
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
      <ProductsDetailsPath productName={product.name} />

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="flex p-8 border border-gray-200">
          <Image
            src={product.img1 || "/placeholder.png"}
            alt={product.title}
            width={500}
            height={400}
            className="object-cover rounded"
          />
        </div>

        <div className="flex">
          <ProductDetails product={product} />
        </div>
      </div>
    </div>
  );
};

export default Page;
