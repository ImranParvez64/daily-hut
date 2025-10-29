import IconBtn from '@/Components/MiniComponents/IconBtn';
import Image from 'next/image';
import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import Link from 'next/link';


const SecondHeader = async () => {
    const res = await fetch("http://localhost:4000/categories");
    const categories = await res.json();
    return (
      <div className='border-b border-gray-200'>
          <div className='container mx-auto py-4 flex justify-between items-center'>
            <div>
                <Image
                    src={"https://i.ibb.co.com/LDt7Mqkk/Adobe-Express-file-2.png"}
                    alt="Logo"
                    width={600}
                    height={200}
                    className='w-70 h-19'
                />
            </div>
            <div>
                <div className='flex gap-2 '>
                    <select defaultValue="Pick a color" className="select w-40 outline-none font-bold">
                        <option >All Categories</option>
                        {
                            categories.map(category => (
                          <option key={category.id}>{category.name}</option>
                            
                            ))
                        }

                    </select>
                    <label className="input w-100 outline-none">
                        <input type="search" required placeholder="Search" />
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
            </div>
            <div className='flex justify-between gap-5'>
                <IconBtn icon={<FaRegHeart />} text={"Wishlist"}></IconBtn>
                <IconBtn icon={<MdAddShoppingCart />} text={"Cart"}></IconBtn>
                <Link href={"/login"}>
                <IconBtn icon={<IoPerson />} text={"Login"}></IconBtn>
                </Link>
                <Link href={"/register"} >
                <IconBtn icon={<IoMdPersonAdd />} text={"Register"}></IconBtn>
                </Link>
            </div>
        </div>
      </div>
    );
};

export default SecondHeader;