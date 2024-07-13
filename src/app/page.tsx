import Image from "next/image";
import Navbar from "./components/home/Navbar";
import MuaSection from "./components/home/MuaSection";
import PopularCity from "./components/home/PopularCity";
import Categories from "./components/home/Categories";
import ProductBanner from "./components/ProductBanner";
import Gallery from "./components/home/Gallery";
import Founder from "./components/home/Founder";
import Blogs from "./components/home/Blogs";
import Footer from "./components/home/Footer";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <PopularCity />
      <MuaSection />
      <Categories />
      <ProductBanner />
      <Gallery />
      <Founder />
      <Blogs />
      <Footer />
    </main>
  );
}
