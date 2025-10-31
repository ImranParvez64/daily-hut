"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

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
      <div className="container mx-auto flex justify-between items-center py-3 px-4">

        {/* ✅ LEFT: Browse Categories */}
        <div className="flex items-center gap-3">
          {/* Desktop version */}
          <div className="hidden md:block">
            <select className="select w-50 outline-none font-bold bg-[#25AD7A] text-white">
              <option>Browse All Categories</option>
              {categories.map((category) => (
                <option key={category.id} className="font-normal">
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile version */}
          <div className="relative md:hidden">
            <button
              onClick={() => setCatOpen(!catOpen)}
              className="bg-[#25AD7A] text-white px-3 py-2 rounded-md font-semibold text-sm"
            >
              Browse Categories
            </button>

            {catOpen && (
              <ul className="absolute left-0 top-10 bg-white border border-gray-200 rounded-md shadow-md w-48 z-10">
                {categories.map((category) => (
                  <li
                    key={category.id}
                    className="px-3 py-2 hover:bg-gray-100 text-gray-700 text-sm"
                    onClick={() => setCatOpen(false)}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* ✅ CENTER: Menu Links (Desktop Only) */}
        <div className="hidden md:flex justify-center items-center gap-10 font-semibold text-gray-700 [&>a:hover]:text-[#25ab76]">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* ✅ RIGHT: Support (Desktop Only) */}
        <div className="hidden md:block">
          <div className="font-semibold text-sm text-end">
            <div className="flex gap-2 items-center text-[#25AD76] text-xl justify-end">
              <FaHeadphonesSimple /> 1900-888
            </div>
            (24/7 Support Center)
          </div>
        </div>

        {/* ✅ RIGHT (Mobile): Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* ✅ MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <ul className="flex flex-col items-center py-3 gap-2 font-medium text-gray-700">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
            <li><Link href="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
