'use client'

import Footer from "@/app/components/home/Footer";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



const inter = Inter({ subsets: ["latin"] });

export default function RegisterLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="en">
                <body className={inter.className}>
                    <nav id="top" className="sticky w-full h-12 md:h-20 md:px-12 md:flex md:justify-between md:items-center bg-white  border-b-2 border-slate-300 shadow-lg z-20 ">
                        <div className="flex justify-between items-center mt-3 md:mt-0">
                            <div className="flex items-center mx-2 md:mx-0">
                                <span className="text-pink-500 text-3xl mx-1 md:text-4xl font-bold">MUA</span>
                            </div>
                        </div>
                        <span className="text-2xl font-semibold">Registration Form</span>
                        <span className="block mx-4">
                            <Link href="/pages/login">
                                <Image src="/gallery/woman.png" alt="" width={35} height={35} quality={100} className="object-cover" />
                            </Link>
                        </span>
                    </nav>
                    {children}
                </body>
            </html>
        </>
    );
}
