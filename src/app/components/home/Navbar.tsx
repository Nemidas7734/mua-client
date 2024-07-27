"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav id="top" className="fixed w-[430px] md:w-full h-10 md:h-12 md:px-12 px-2 flex justify-between items-center bg-gradient-to-r from-[#FFBCE1] via-[#F27BBD] to-[#FFBCE1] border-slate-300 shadow-lg z-40 ">
      <div className="flex justify-center items-center mx-2 md:mx-0">
        <span className="text-[#EA2793] text-3xl mx-1 md:text-4xl font-bold">MUA</span>
      </div>
      <ul className={`flex justify-center items-center gap-6 max-sm:bg-gradient-to-r from-[#FFBCE1] via-[#F27BBD] to-[#FFBCE1] flex-col w-full left-0 z-[-1] absolute md:z-auto md:static md:w-auto md:flex md:flex-row md:items-center md:justify-between md:py-0 py-4 md:pl-0  md:gap-12 md:opacity-100 transition-all ease-in duration-500 ${open ? 'top-10 opacity-100' : 'top-[-400px] opacity-0'}`}>
        <li className="text-white font-semibold text-base"><a href="/">Home</a></li>
        <li className="text-white font-semibold text-base"><a href="/#gallery">Gallery</a></li>
        <li className="text-white font-semibold text-base"><a href="/#about">About</a></li>
        <li className="md:hidden text-base m-auto px-4 pb-[2px]  md:px-4 md:py-1 rounded-full w-20 md:w-auto text-white font-semibold bg-pink-500 hover:bg-pink-600">
          <Link href="/pages/login">
            Login
          </Link>
        </li>
      </ul>
      <Link href="/pages/login">
        <Image src="/gallery/woman.png" alt="" width={35} height={35} quality={100} className="object-cover max-sm:hidden" />
      </Link>
      <span className="md:hidden block z-40" onClick={() => setOpen(!open)}>
        {open ? <Image
          src="/icons8-close.svg"
          alt="menu"
          width={30}
          height={20}
          className="h-8 cursor-pointer"
        /> : <Image
          src="/icons8-menu.svg"
          alt="menu"
          width={35}
          height={20}
          className="h-8 cursor-pointer"
        />}
      </span>
    </nav>
  );
}