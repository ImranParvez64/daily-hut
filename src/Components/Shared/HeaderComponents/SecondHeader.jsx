"use client";

import IconBtn from "@/Components/MiniComponents/IconBtn";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import Link from "next/link";

const SecondHeader = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/categories.json", { cache: "no-store" });
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.log("Category load failed:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={"https://i.ibb.co.com/LDt7Mqkk/Adobe-Express-file-2.png"}
            alt="Logo"
            width={800}
            height={200}
            className="w-80 h-20"
          />
        </Link>

        {/* Search + Categories */}
        <div className="flex gap-2 items-center -translate-x-12">

          {/* Categories */}
          <select className="select w-40 outline-none font-bold hidden md:block">
            <option>All Categories</option>
            {categories?.map((category) => (
              <option key={category.id}>{category.name}</option>
            ))}
          </select>

          {/* Search */}
          <label className="input  w-80 outline-none flex-1">
            <input type="search" required placeholder="Search" className="w-full" />
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-2">
          <IconBtn icon={<FaRegHeart />} text={"Wishlist"} className="hidden md:flex" />
          <Link href={"/addtocart"}>
          <IconBtn icon={<MdAddShoppingCart />} text={"Cart"} />
          </Link>
          <Link href={"/login"}>
            <IconBtn icon={<IoPerson />} text={"Login"} />
          </Link>
          <Link href={"/register"}>
            <IconBtn icon={<IoMdPersonAdd />} text={"Register"} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SecondHeader;
