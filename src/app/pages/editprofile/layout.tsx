'use client'

import Footer from "@/app/components/home/Footer";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";




const inter = Inter({ subsets: ["latin"] });

export default function ResultLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <html lang="en">
                <body className={inter.className}>
                <nav id="top" className="sticky w-full h-12 md:h-12 md:px-12 md:flex md:justify-between md:items-center bg-white  z-20 ">
                        <div className="flex justify-between items-center mt-3 md:mt-0">
                            <div className="flex items-center mx-2 md:mx-0">
                                <span className="text-pink-500 text-3xl mx-1 md:text-4xl font-bold">MUA</span>
                            </div>
                        </div>
                        {/* <span className="text-2xl font-semibold">Registration Form</span> */}
                        <span className="block mx-4" onClick={() => setOpen(!open)}>
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
                    <Footer/>
                </body>
            </html>
        </>
    );
}
