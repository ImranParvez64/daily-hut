export const dynamic = "force-dynamic";


import OthersHero from "@/Components/Shared/OthersHero";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <section className="mt-10 mb-30 px-6 bg-white text-gray-800 mx-auto container">
      {/* Header */}
      <div className="mb-20">
        <OthersHero title={"About us"}></OthersHero>
        
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Area */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="https://images.pexels.com/photos/5632409/pexels-photo-5632409.jpeg"
            alt="daily Illustration"
            className="w-full h-full object-cover"
            width={300}
            height={200}
          />
        </div>

        {/* Content Area */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
          <p className="text-gray-600 leading-7 text-sm mb-6">
            DailyHut is a fresh and modern e‑commerce platform designed to empower
            local businesses across Bangladesh. We connect customers with
            authentic Bangladeshi products — ensuring quality, trust, and
            convenience in every order.
          </p>

          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600 leading-7 text-sm mb-6">
            To make online shopping easier, faster, and more accessible for
            everyone in Bangladesh, while supporting small and medium businesses
            to grow in the digital age.
          </p>

          <h3 className="text-2xl font-semibold mb-3">Why Choose Us?</h3>
          <ul className="text-gray-600 text-sm space-y-3">
            <li>✅ 100% trusted Bangladeshi sellers</li>
            <li>✅ Fast local delivery across the country</li>
            <li>✅ Secure transactions & customer support</li>
            <li>✅ Best prices & authentic products</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
