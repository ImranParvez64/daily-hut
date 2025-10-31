"use client";

import React from "react";
import Image from "next/image";
import OthersHero from "@/Components/Shared/OthersHero";

const ContactForm = () => {
  return (
 <div className="container mx-auto mt-6"> 
    <OthersHero title={"Contact"}></OthersHero>
       <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20">
      
      {/* Left Side: Form */}
      <div>
        <p className="text-green-600 font-medium mb-2">Contact form</p>
        <h2 className="text-3xl font-bold mb-2">Drop Us a Line</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Your email address will not be published. Required fields are marked *
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 md:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-800 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors md:col-span-2"
          >
            Send message
          </button>
        </form>
      </div>

      {/* Right Side: Image */}
      <div className="w-full h-full flex justify-center md:justify-end mt-40">
        <div className="w-80 h-80 relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" // Replace with your image path
            alt="Contact Person"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
 </div>
  );
};

export default ContactForm;
