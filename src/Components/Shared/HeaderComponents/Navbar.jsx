"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHeadphonesSimple } from "react-icons/fa6";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await fetch("/categories.json", { cache: "no-store" });
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.log("Categories fetch error", error);
      }
    };
    loadCategories();
  }, []);

  return (
    <div className="border-b border-b-gray-200">
      <div className="flex justify-between items-center container mx-auto py-3">

        {/* Categories Dropdown */}
        <div>
          <select className="select w-50 outline-none font-bold bg-[#25AD7A] text-white">
            <option>Browse All Categories</option>

            {categories.map((category) => (
              <option key={category.id} className="font-normal">
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Menu Links */}
        <div className="flex justify-center items-center gap-15 font-semibold text-gray-700 [&>a:hover]:text-[#25ab76] -translate-x-18">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Support Section */}
        <div>
          <div className="font-semibold text-sm">
            <div className="flex gap-3 items-center text-[#25AD76] text-xl">
              <FaHeadphonesSimple /> 1900-888
            </div>
            (24/7 Support Center)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
