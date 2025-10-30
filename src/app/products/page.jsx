"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsMain from "../../Components/Pages/ProductComponents/ProductsMain";
import OthersHero from "@/Components/Shared/OthersHero";
import { fetchProducts } from "../../redux/slice/productSlice";
import { fetchCategories } from "../../redux/slice/categoriesSlice";

export default function Page() {
  const dispatch = useDispatch();

  const { items: products, loading: productsLoading } = useSelector(
    (state) => state.products
  );
  const { items: categories, loading: categoriesLoading } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  if (productsLoading || categoriesLoading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto my-6">
      <OthersHero title={"Products"} />
      <div>
        <ProductsMain categories={categories} products={products} />
      </div>
    </div>
  );
}
