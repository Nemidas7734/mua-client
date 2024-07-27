"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav id="top" className="fixed w-[427px] md:w-full h-10 md:h-12 md:px-12 px-2 flex justify-between items-center bg-gradient-to-r from-[#FFBCE1] via-[#F27BBD] to-[#FFBCE1] border-slate-300 shadow-lg z-40 ">
        <div className="flex justify-center items-center mx-2 md:mx-0">
          <span className="text-[#EA2793] text-3xl mx-1 md:text-4xl font-bold">MUA</span>
        </div>
      <ul className="hidden md:flex justify-center items-center gap-10">
        <li className="text-white font-semibold text-base"><a href="/">Home</a></li>
        <li className="text-white font-semibold text-base"><a href="/#gallery">Gallery</a></li>
        <li className="text-white font-semibold text-base"><a href="/#about">About</a></li>
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