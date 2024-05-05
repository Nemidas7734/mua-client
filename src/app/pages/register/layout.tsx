'use client'

import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";



const inter = Inter({ subsets: ["latin"] });

export default function resultLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <html lang="en">
                <body className={inter.className}>
                    <nav id="top" className="sticky w-full h-12 md:h-20 md:px-12 md:flex md:justify-between md:items-center bg-white  border-b-2 border-slate-300 shadow-lg z-20 ">
                        <div className="flex justify-between items-center mt-3 md:mt-0">
                            <div className="flex items-center mx-2 md:mx-0">
                                {/* <Image
                        src="/images/Logo.png"
                        alt="logo"
                        className="cursor-pointer inline h-12 w-12 md:h-16 md:w-16"
                        width={65}
                        height={25}
                    /> */}
                                <span className="text-pink-500 text-3xl mx-1 md:text-4xl font-bold">MUA</span>
                            </div>
                        </div>
                        <span className="text-2xl font-semibold">Registration Form</span>
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
                </body>
            </html>
        </>
    );
}
