'use client'

import Footer from "@/app/components/home/Footer";
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
                            <li className="text-white font-medium text-base"><a href="/">Home</a></li>
                            <li className="text-white font-medium text-base"><a href="/#gallery">Gallery</a></li>
                            <li className="text-white font-medium text-base"><a href="/#about">About</a></li>
                            <li className="md:hidden m-auto w-[35px] h-[35px] rounded-full">
                                <Link href="/pages/artistprofile">
                                <Image src="/gallery/user2.png" alt="Profile" width={35} height={35} />
                                </Link>
                            </li>
                        </ul>
                        <Link href="/pages/artistprofile">
                            <Image src="/gallery/user2.png" alt="" width={35} height={35} quality={100} className="object-cover max-sm:hidden" />
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
