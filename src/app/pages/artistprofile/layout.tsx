'use client'

import Footer from "@/app/components/home/Footer";
import Navbar from "@/app/components/home/Navbar";
import { useState } from "react";


export default function ArtistProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <html lang="en">
                <body>
                    <Navbar/>
                    {children}
                    <Footer/>
                </body>
            </html>
        </>
    );
}
