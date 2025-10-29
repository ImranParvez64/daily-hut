'use client'
import React from 'react';
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";

const FooterEnd = () => {
    return (
        <div className="text-gray-600 text-md mb-3">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <p>© 2025 <span className="text-green-500 font-semibold">Daily Hut</span> - New Bangladehi Ecommerce</p>
                    <p>All rights reserved</p>
                </div>

                {/* Middle Side */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex items-center gap-3">
                        <FaPhoneAlt className="text-green-500 text-lg" />
                        <div>
                            <p className="text-green-600 font-bold">1900 - 6666</p>
                            <p className="text-xs text-gray-400">Working 8:00 - 22:00</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaPhoneAlt className="text-green-500 text-lg" />
                        <div>
                            <p className="text-green-600 font-bold">1900 - 8888</p>
                            <p className="text-xs text-gray-400">24/7 Support Center</p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col items-center md:items-end">
                    <h3 className="font-semibold">Follow Us</h3>
                    <div className="flex gap-3 mt-2">
                        <a href="#" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"><FaFacebookF /></a>
                        <a href="#" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"><FaTwitter /></a>
                        <a href="#" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"><FaInstagram /></a>
                        <a href="#" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"><FaPinterestP /></a>
                        <a href="#" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"><FaYoutube /></a>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Up to 15% discount on your first subscribe</p>
                </div>

            </div>
        </div>
    );
};

export default FooterEnd;
