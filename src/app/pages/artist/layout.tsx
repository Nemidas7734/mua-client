'use client'

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Inter } from "next/font/google";




const inter = Inter({ subsets: ["latin"] });

export default function ResultLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="en">
                <body className={inter.className}>
                    <Navbar/>
                    {children}
                    <Footer/>
                </body>
            </html>
        </>
    );
}
