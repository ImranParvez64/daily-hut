export const dynamic = "force-dynamic";


import OthersHero from "@/Components/Shared/OthersHero";
import Image from "next/image";
import React from "react";
import ImageSlider from "./ImageSlider";
import Features from "@/Components/Pages/Home/Features";
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
    <section className="mt-10 mb-30 bg-white text-gray-800 mx-auto container">
      {/* Header */}
      <div className="mb-20">
        <OthersHero title={"About us"}></OthersHero>

      </div>

      {/* main  */}
      <div>
        <div className="flex justify-center items-center gap-10">
          <div className="">
            <Image
              src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-1.png"
              alt="about"
              height={580}
              width={500}
              className="rounded-xl"
            />
          </div>
          <div className="w-[50%] space-y-4 text-gray-400">
            <h1 className="text-5xl font-semibold text-gray-600">
              Welcome to DailyHut
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
            <p>
              Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
            </p>
            <ImageSlider images={images}></ImageSlider>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-semibold border-b-2 border-gray-300 text-center pb-2">
            What We Provide?
          </h1>
          <div>
            <AboutFeatures></AboutFeatures>
          </div>


        </div>
        <div></div>
      </div>
    </section>
  );
}
