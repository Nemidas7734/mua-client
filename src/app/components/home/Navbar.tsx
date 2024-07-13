import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav id="top" className="w-full h-8 md:h-12 md:px-12 md:flex md:justify-between md:items-center bg-gradient-to-r from-[#FFBCE1] via-[#F27BBD] to-[#FFBCE1] border-slate-300 shadow-lg z-20 ">
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
        <svg width="26" height="26" viewBox="0 0 36 35" fill="none"  xmlns="http://www.w3.org/2000/svg">
          <path d="M18 0.236328C13.05 0.236328 9 5.06252 9 11.0091C9 16.9556 13.05 21.7818 18 21.7818C22.95 21.7818 27 16.9556 27 11.0091C27 5.06252 22.95 0.236328 18 0.236328ZM8.595 21.7818C3.825 21.9973 0 25.7462 0 30.4V34.7091H36V30.4C36 25.7462 32.22 21.9973 27.405 21.7818C24.975 24.4104 21.645 26.0909 18 26.0909C14.355 26.0909 11.025 24.4104 8.595 21.7818Z" fill="black" />
        </svg>
      </Link>
    </nav>
  );
}