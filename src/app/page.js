import Categories from "@/Components/Pages/Home/Categories";
import Hero from "@/Components/Pages/Home/Hero";
import Offer from "@/Components/Pages/Home/Offer";
import Popular from "@/Components/Pages/Home/Popular";
import PopularProducts from "@/Components/Pages/Home/HomeComponents/PopularProducts";
import Subscribe from "@/Components/Pages/Home/Subscribe";
import Features from "@/Components/Pages/Home/Features";
import Deal from "@/Components/Pages/Home/Deal";
import Top from "@/Components/Pages/Home/Top";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <Categories></Categories>
      <Offer></Offer>
      <Popular></Popular>

      <Deal></Deal>
      <Top></Top>
      <Subscribe></Subscribe>
      <Features></Features>
    </div>
  );
}
