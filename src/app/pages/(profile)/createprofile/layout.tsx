'use client'

import Footer from "@/app/components/home/(layout)/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function EditLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <html lang="en">
                <body>
                    <nav id="top" className="sticky w-full h-10 md:h-12 md:px-12 flex justify-between items-center bg-gradient-to-r from-[#FFBCE1] via-[#F27BBD] to-[#FFBCE1]  z-20 ">
                        <div className="flex justify-between items-center mt-3 md:mt-0">
                            <div className="flex items-center mx-2 md:mx-0">
                                <span className="text-pink-500 text-3xl mx-1 max-sm:mb-4 md:text-4xl font-bold">MUA</span>
                            </div>
                        </div>
                        <ul className={`flex justify-center items-center gap-6 max-sm:bg-gradient-to-r from-[#FFBCE1] via-[#F27BBD] to-[#FFBCE1] flex-col w-full left-0 z-40 absolute md:z-auto md:static md:w-auto md:flex md:flex-row md:items-center md:justify-between md:py-0 py-4 md:pl-0  md:gap-12 md:opacity-100 transition-all ease-in duration-500 ${open ? 'top-[38px] opacity-100' : 'top-[-400px] opacity-0'}`}>
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
                            <img width="30" height="30" src="https://img.icons8.com/material-sharp/48/user-male-circle.png" alt="user-male-circle" className="max-w-[30px] max-h-[30px] bg-white overflow-hidden rounded-full " />
                        </Link>
                        <span className="md:hidden block mx-4" onClick={() => setOpen(!open)}>
                            {open ? <Image
                                src="/icons8-close.svg"
                                alt="menu h-10 cursor-pointer"
                                width={30}
                                height={25}
                            /> : <Image
                                src="/icons8-menu.svg"
                                alt="menu h-10 cursor-pointer"
                                width={35}
                                height={25}
                            />}
                        </span>
                    </nav>
                    {children}
                    <Footer />
                </body>
            </html>
        </>
    );
}
