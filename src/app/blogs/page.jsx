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
        <div className="container mx-auto py-6">
            <OthersHero title="Blogs" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-4">
                {blogs.map(blog => (
                    <Link
                        key={blog.id}
                        href={`/blogs/${blog.id}`}
                        className="flex flex-col md:flex-row gap-5 border border-gray-200 p-4 md:p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="relative w-full md:w-1/3 h-48 mt-6 md:h-40 rounded-xl overflow-hidden">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <h2 className="font-bold text-lg md:text-xl text-gray-700 mb-2 line-clamp-2">
                                    {blog.title}
                                </h2>
                                <p className="text-gray-600 text-sm md:text-base line-clamp-2 mb-3">
                                    {blog.shortDescription}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {blog.tags?.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm shadow-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer meta */}
                            <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
                                <span>Author: {blog.author.name}</span>
                                <span className="flex items-center gap-1">
                                    <MdOutlineAvTimer /> {blog.readTime}
                                </span>
                            </div>

                            <p className="text-gray-500 text-sm mt-1">
                                Published: {blog.published}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Page;
