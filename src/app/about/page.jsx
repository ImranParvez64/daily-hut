export const dynamic = "force-dynamic";

import OthersHero from "@/Components/Shared/OthersHero";
import Image from "next/image";
import React from "react";
import ImageSlider from "./ImageSlider";
import AboutFeatures from "./AboutFeatures";

export default function AboutPage() {
  const images = [
    { src: "https://nest-frontend-v6.vercel.app/assets/imgs/page/about-1.png", caption: "Organic Foods" },
    { src: "https://nest-frontend-v6.vercel.app/assets/imgs/page/about-2.png", caption: "Fresh Apples" },
    { src: "https://nest-frontend-v6.vercel.app/assets/imgs/page/about-3.png", caption: "Carrots" },
    { src: "https://nest-frontend-v6.vercel.app/assets/imgs/page/about-4.png", caption: "Carrots" },
    { src: "https://nest-frontend-v6.vercel.app/assets/imgs/page/about-2.png", caption: "Carrots" },
    { src: "https://nest-frontend-v6.vercel.app/assets/imgs/page/about-6.png", caption: "Carrots" }
  ];

  return (
    <section className="container mx-auto px-4 lg:px-0 mt-10 mb-20 text-gray-800">

      {/* Header */}
      <div className="mb-10">
        <OthersHero title={"About us"} />
      </div>

      {/* About section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-1.png"
            alt="about"
            height={580}
            width={500}
            className="rounded-xl w-full max-w-md lg:max-w-full"
          />
        </div>

        {/* Text */}
        <div className="space-y-4 text-gray-500">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-700 leading-tight">
            Welcome to DailyHut
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et. Donec vitae sapien ut libero venenatis faucibus.
          </p>

          {/* Slider */}
          <div className="mt-4">
            <ImageSlider images={images} />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-20">
        <h1 className="text-2xl md:text-3xl font-semibold border-b-2 border-gray-300 text-center pb-2 mb-10">
          What We Provide?
        </h1>
        <AboutFeatures />
      </div>
    </section>
  );
}
