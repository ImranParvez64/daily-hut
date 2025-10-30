import IconBtn from '@/Components/MiniComponents/IconBtn';
import Image from 'next/image';
import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import Link from 'next/link';

const SecondHeader = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`);
  const categories = await res.json();

  return (
    <div className='border-b border-gray-200'>
      <div className='container mx-auto py-4 flex justify-between items-center'>
        {/* Logo */}
        <Link href={'/'}>
        <div>
         
          <Image
            src={"https://i.ibb.co.com/LDt7Mqkk/Adobe-Express-file-2.png"}
            alt="Logo"
            width={700}
            height={200}
            className='w-28 h-10 sm:w-36 sm:h-12'
          />
        </div>
         </Link>

        {/* Search + Categories */}
        <div className='flex gap-2 items-center'>
          {/* Hide on mobile */}
          <select
            defaultValue="Pick a color"
            className="select w-40 outline-none font-bold hidden md:block"
          >
            <option>All Categories</option>
            {categories.map(category => (
              <option key={category.id}>{category.name}</option>
            ))}
          </select>

          <label className="input w-40 outline-none flex-1">
            <input type="search" required placeholder="Search" className="w-full" />
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
          </label>
        </div>

        {/* Buttons */}
        <div className='flex justify-between gap-2'>
          {/* Wishlist hide on mobile */}
          <IconBtn icon={<FaRegHeart />} text={"Wishlist"} className="hidden md:flex" />
          <IconBtn icon={<MdAddShoppingCart />} text={"Cart"} />
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
