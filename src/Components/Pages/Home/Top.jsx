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
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
        {/* Top Selling */}
        <div className="mx-4">
          <div className="border-b border-gray-300 pb-3   ">
            <Title title={"TopSelling"} />
          </div>
          <div className="grid gap-4 mt-8">
            {items.slice(0, 3).map((product) => (
              <TopProductsCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Trending Products */}
        <div className="mx-4">
          <div className="border-b border-gray-300 pb-3">
            <Title title={"Trending Products"} />
          </div>
          <div className="grid gap-4 mt-8">
            {items.slice(4, 7).map((product) => (
              <TopProductsCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Top Rated */}
        <div className="mx-4">
          <div className="border-b border-gray-300 pb-3">
            <Title title={"Top Rated"} />
          </div>
          <div className="grid gap-4 mt-8">
            {items.slice(8, 11).map((product) => (
              <TopProductsCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Recently Added */}
        <div className="mx-4">
          <div className="border-b border-gray-300 pb-3">
            <Title title={"Recently Added"} />
          </div>
          <div className="grid gap-4 mt-8">
            {items.slice(9, 13).map((product) => (
              <TopProductsCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
