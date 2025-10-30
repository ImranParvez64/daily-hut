import Link from 'next/link';
import React from 'react';
import { FaHeadphonesSimple } from "react-icons/fa6";


const Navbar = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`);
    const categories = await res.json();
    return (
        <div className='border-b border-b-gray-200'>

            <div className='flex justify-between items-center container mx-auto py-3'>
                <div>
                    <select defaultValue="Pick a color" className="select w-50 outline-none font-bold bg-[#25AD7A] text-white">
                        <option >Browse All Categories</option>
                        {
                            categories.map(category => (
                                <div key={category.id} className='font-normal'>
                                    <option>{category.name}</option>
                                </div>
                            ))
                        }

                    </select>
                </div>
                <div className='flex justify-center items-center gap-15 text font-semibold text-gray-700 [&>a:hover]:text-[#25ab76] -translate-x-18 '>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/products"}>Products</Link>
                    <Link href={"/blogs"}>Blogs</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/contact"}>Contact</Link>
                </div>
                <div>
                    <div className='font-semibold text-sm' ><div className='flex gap-3 items-center text-[#25AD76] text-xl '>

                        <FaHeadphonesSimple /> 1900-888
                    </div>(24/7 Support Center)</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;