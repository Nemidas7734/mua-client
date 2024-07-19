import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav id="top" className="fixed w-full h-8 md:h-12 md:px-12 md:flex md:justify-between md:items-center bg-gradient-to-r from-[#FFBCE1] via-[#F27BBD] to-[#FFBCE1] border-slate-300 shadow-lg z-40 ">
      <div className="flex justify-between items-center mt-3 md:mt-0">
        <div className="flex items-center mx-2 md:mx-0">
          <span className="text-[#EA2793] text-3xl mx-1 md:text-4xl font-bold">MUA</span>
        </div>
      </div>
      <ul className="flex justify-center items-center gap-10">
        <li className="text-white font-semibold text-base"><a href="/">Home</a></li>
        <li className="text-white font-semibold text-base"><a href="/#gallery">Gallery</a></li>
        <li className="text-white font-semibold text-base"><a href="/#about">About</a></li>
      </ul>
      <Link href="/pages/login">
        <Image src="/gallery/woman.png" alt="" width={35} height={35} quality={100} className="object-cover" />
      </Link>
    </nav>
  );
}