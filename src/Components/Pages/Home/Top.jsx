"use client";

import React, { useEffect } from "react";
import Title from "@/Components/MiniComponents/Title";
import TopProductsCard from "./HomeComponents/TopProductsCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/slice/productSlice";

export default function Top() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Top Selling */}
        <div>
          <div className="border-b border-gray-300 pb-2">
            <Title title={"Top Selling"} />
          </div>
          <div className="grid gap-4 mt-4">
            {items.slice(0, 3).map((product) => (
              <TopProductsCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Trending Products */}
        <div>
          <div className="border-b border-gray-300 pb-2">
            <Title title={"Trending Products"} />
          </div>
          <div className="grid gap-4 mt-4">
            {items.slice(4, 7).map((product) => (
              <TopProductsCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Top Rated */}
        <div>
          <div className="border-b border-gray-300 pb-2">
            <Title title={"Top Rated"} />
          </div>
          <div className="grid gap-4 mt-4">
            {items.slice(8, 11).map((product) => (
              <TopProductsCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Recently Added */}
        <div>
          <div className="border-b border-gray-300 pb-2">
            <Title title={"Recently Added"} />
          </div>
          <div className="grid gap-4 mt-4">
            {items.slice(9, 13).map((product) => (
              <TopProductsCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
