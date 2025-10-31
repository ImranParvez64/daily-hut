"use client";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";

export default function LoginForm() {
  return (
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center my-20 bg-white py-10">

      {/* Left Login Form */}
      <div className="w-full max-w-md space-y-5 md:mr-10 mb-10 md:mb-0">
        <h2 className="text-3xl font-semibold text-gray-800">Login</h2>
        <p className="text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="#" className="text-green-600 font-medium hover:underline">
            Register
          </a>
        </p>

        <form className="space-y-4">
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3BB77E] text-white font-semibold py-2 rounded-md hover:bg-green-600 transition"
          >
            Login
          </button>
        </form>
      </div>

      {/* Right Social Login */}
      <div className="w-full max-w-sm flex flex-col gap-3">
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
