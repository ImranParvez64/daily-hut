"use client";
import Image from "next/image";
import React from "react";

export default function OrderTracking() {
    return (
        <div className="container mx-auto px-4 flex flex-col items-center justify-center  py-20">

            {/* Header */}
            <div className="w-full max-w-md bg-white shadow rounded-lg p-8 md:p-12 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Track Your Order</h2>
                <p className="text-gray-500 mb-6">
                    Enter your order ID and email address to track your order status.
                </p>

                {/* Form */}
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Order ID"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#25AD7A] text-white font-semibold py-2 rounded-md hover:bg-green-600 transition"
                    >
                        Track Order
                    </button>
                </form>

                {/* Optional Info */}
                <p className="text-xs text-gray-400 mt-4">
                    Make sure you enter the order ID provided in your confirmation email.
                </p>
            </div>
        </div>
    );
}
