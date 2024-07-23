
import MuaSection from "./components/home/MuaSection";
import PopularCity from "./components/home/PopularCity";
import Categories from "./components/home/Categories";
import ProductBanner from "./components/home/ProductBanner";
import Gallery from "./components/home/Gallery";
import Founder from "./components/home/Founder";
import Blogs from "./components/home/Blogs";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Faq from "./components/home/Faq";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <PopularCity />
      <MuaSection />
      <About/>
      <Categories />
      <Founder />
      {/* <ProductBanner /> */}
      <Gallery />
      <Blogs />
      <Faq/>
      <Footer/>
    </main>
  );
}
