"use client";
import OthersHero from '@/Components/Shared/OthersHero';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdOutlineAvTimer } from 'react-icons/md';

const Page = () => {
    const [blogs, setBlogs] = useState([]);

   useEffect(() => {
  const getBlogs = async () => {
    try {
      const res = await fetch("/blogs.json");
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error(err);
    }
  };
  getBlogs();
}, []);


    return (
        <div className='container mx-auto py-6'>
            <OthersHero title={'Blogs'} />

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
                {blogs.map(blog => (
                    <Link 
                        key={blog.id} 
                        href={`/blogs/${blog.id}`}  // ✅ Fixed: removed extra curly brace
                        className="flex flex-col md:flex-row gap-6 border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        {/* Image */}
                        <div className='md:w-1/4 w-full relative h-48 md:h-auto'>
                            <Image
                                src={blog.thumbnail}
                                alt={blog.title}
                                fill
                                style={{ objectFit: 'cover', borderRadius: '1rem', padding: '0.5rem' }}
                                className="rounded-xl border"
                            />
                        </div>

                        {/* Content */}
                        <div className='md:w-3/4 w-full flex flex-col justify-between'>
                            <div>
                                <h2 className="font-bold text-2xl text-gray-600 mb-2 line-clamp-1">{blog.title}</h2>
                                <p className="text-gray-600 mb-3">{blog.shortDescription}</p>

                                {/* Tags */}
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {blog.tags && blog.tags.map((tag, index) => (
                                        <span 
                                            key={index} 
                                            className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='flex justify-between items-center mt-3'>
                                <p className='font-semibold text-gray-500'>Author: {blog.author.name}</p>
                                <p className='font-semibold text-gray-500 flex items-center gap-2'>
                                    <MdOutlineAvTimer className='text-xl' />
                                    {blog.readTime}
                                </p>
                            </div>

                            <p className='font-semibold text-gray-500 mt-2'>Published: {blog.published}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Page;
