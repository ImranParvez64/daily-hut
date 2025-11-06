"use client";

import IconBtn from "@/Components/MiniComponents/IconBtn";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import Link from "next/link";
import { useSelector } from "react-redux";

const SecondHeader = () => {
  const cartCount = useSelector((state) =>
    state.cart.cartItems.reduce((sum, item) => sum + item.quantity, 0)
  );
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
        <Link href={"/"} className="pl-2 md:pl-0">
          <Image
            src={"https://i.ibb.co.com/LDt7Mqkk/Adobe-Express-file-2.png"}
            alt="Logo"
            width={800}
            height={200}
            className="w-40 md:w-70 md:h-20"
          />
        </Link>

        {/* Search + Categories */}
        <div className="md:flex gap-2 items-center sm:pr-4 md:pr-0 md:translate-x-20">
          {/* Categories */}
          <select className="select w-40 outline-none font-bold md:block hidden">
            <option>All Categories</option>
            {categories?.map((category) => (
              <option key={category.id}>{category.name}</option>
            ))}
          </select>

          {/* Search */}
          <label className="input  w-40 md:w-80 outline-none flex-1 mr-4 md:mr-0">
            <input
              type="search"
              required
              placeholder="Search"
              className="w-full"
            />
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
          </label>
        </div>

        {/* Buttons */}
        <div className="md:flex justify-between gap-4 hidden pr-3">
          <Link href={"/wishlist"}>
            <IconBtn
              icon={<FaRegHeart />}
              text={"Wishlist"}
              className="hidden md:flex"
            />
          </Link>
          <Link href={"/addtocart"} className="relative">
            <div>
              <IconBtn icon={<MdAddShoppingCart />} text={"Cart"} />
            </div>
            <div className="absolute -top-2 -right-5 bg-red-500 text-white text-xs font-semibold px-[6px] py-[1px] rounded-full shadow-md transition-all duration-300">
              {cartCount}
            </div>
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
