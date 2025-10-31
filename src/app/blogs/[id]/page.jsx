"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { MdOutlineAvTimer } from "react-icons/md";
import Link from "next/link";

const BlogPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [allBlogs, setAllBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch("/blogs.json", { cache: "no-store" });
                const data = await res.json();

                setAllBlogs(data);

                const singleBlog = data.find((b) => b.id.toString() === id);
                setBlog(singleBlog || null);
            } catch {
                setBlog(null);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchBlog();
    }, [id]);

    if (loading)
        return (
            <div className="container mx-auto p-6">
                <p className="text-gray-500 font-medium">Loading blog...</p>
            </div>
        );

    if (!blog)
        return (
            <div className="container mx-auto p-6 text-center">
                <p className="text-gray-500 font-medium text-lg">Blog not found</p>
            </div>
        );

    // Filter out the current blog
    const otherBlogs = allBlogs.filter((b) => b.id.toString() !== id);

    return (
        <div className="container mx-auto p-6 flex flex-col md:flex-row gap-10 mb-20">
            {/* Main Blog Section */}
            <div className="md:w-2/3">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    {blog.title}
                </h1>

                {/* Category */}
                <p className="text-sm text-gray-500 mb-4">{blog.category}</p>

                {/* Author */}
                <div className="flex items-center gap-4 mb-4">
                    <Image
                        src={blog.author?.avatar || "/images/authors/imran.png"}
                        alt={blog.author?.name || "Author"}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-gray-700">{blog.author?.name}</p>
                        <p className="text-gray-500 text-sm">{blog.published}</p>
                    </div>
                </div>

                {/* Short Description */}
                <p className="text-gray-600 mb-4">{blog.shortDescription}</p>


                {/* Featured Image */}
                <div className="w-full h-[400px] mb-6 rounded-xl overflow-hidden shadow-lg relative">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="rounded-xl object-cover"
                    />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer text-sm"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Read Time */}
                <div className="flex items-center gap-2 mb-6 text-gray-500">
                    <MdOutlineAvTimer className="text-xl" />
                    <span>{blog.readTime}</span>
                </div>


                {/* Full Content */}
                <div className="prose max-w-full text-gray-700">
                    {blog.content.split("\n").map((line, idx) => (
                        <p key={idx} className="mb-4">
                            {line}
                        </p>
                    ))}
                </div>
                {blog.mainContent && (
                    <p className="text-gray-700 mb-4 leading-relaxed">{blog.mainContent}</p>
                )}
            </div>

            {/* Sidebar: Other Blogs */}
            <div className="md:w-1/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Others Blogs</h2>
                <div className="grid gap-4">
                    {otherBlogs.map((b) => (
                        <Link
                            key={b.id}
                            href={`/blogs/${b.id}`}
                            className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all flex justify-start"
                        >
                            <div className="relative w-20 p-10 h-30">
                                <Image
                                    src={b.thumbnail}
                                    alt={b.title}
                                    fill
                                    className="p-5"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                    {b.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-2">{b.category}</p>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
