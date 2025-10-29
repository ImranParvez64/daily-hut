"use client";
import { useState } from "react";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";

export default function RegisterForm() {
  const [role, setRole] = useState("vendor");

  return (
    <div className="flex flex-col md:flex-row items-start justify-center  bg-white p-6 md:p-12 gap-10 my-20">
      {/* Left Form Section */}
      <div className="w-full max-w-md space-y-5">
        <h2 className="text-3xl font-semibold text-gray-800">
          Create an Account
        </h2>
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <a href="#" className="text-green-600 font-medium hover:underline">
            Login
          </a>
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
          />

          {/* Security Code */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Security code *"
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            />
            <div className="bg-green-100 text-green-700 font-semibold px-6 py-2 rounded-md">
              8675
            </div>
          </div>

          {/* Role Selection */}
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="radio"
                checked={role === "customer"}
                onChange={() => setRole("customer")}
              />
              I am a customer
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="radio"
                checked={role === "vendor"}
                onChange={() => setRole("vendor")}
              />
              I am a vendor
            </label>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <input type="checkbox" className="mt-1" />
            <span>
              I agree to terms & Policy.{" "}
              <a href="#" className="text-green-600 font-medium hover:underline">
                Learn more
              </a>
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition"
          >
            Submit & Register
          </button>

          <p className="text-xs text-gray-500 leading-relaxed">
            Note: Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
        </form>
      </div>

      {/* Right Social Login Section */}
      <div className="w-full max-w-sm flex flex-col gap-3 mt-50">
        <button className="flex items-center justify-center gap-2 bg-[#1877F2] text-white py-2 rounded-md font-medium hover:opacity-90 transition">
          <FaFacebookF /> Continue with Facebook
        </button>
        <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 rounded-md font-medium hover:bg-gray-50 transition">
          <FaGoogle className="text-red-500" /> Continue with Google
        </button>
        <button className="flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md font-medium hover:opacity-90 transition">
          <FaApple /> Continue with Apple
        </button>
      </div>
    </div>
  );
}
