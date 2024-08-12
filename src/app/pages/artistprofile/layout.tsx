"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useAuthStore } from "@/app/lib/store/authStore";
import { useRouter } from 'next/navigation'
import Footer from "@/app/components/home/Footer";



export default function ArtistProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user, role, logout } = useAuthStore()
    const router = useRouter()
    const [isClient, setIsClient] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsClient(true)
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside as unknown as EventListener);
        return () => document.removeEventListener("mousedown", handleClickOutside as unknown as EventListener);
    }, [])


    const handleProfileClick = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const handleLogout = async () => {
        await logout()
        setDropdownOpen(false)
        router.push('/')
    }

    const renderDropdownContent = () => {
        if (!user) {
            return (
                <div className="py-1">
                    <Link href="/pages/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Login
                    </Link>
                </div>
            );
        }

        if (role === 'artist') {
            return (
                <div className="py-1">
                    {/* <Link href="/pages/artistprofile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        View Profile
                    </Link> */}
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Logout
                    </button>
                </div>
            );
        }

        return (
            <div className="py-1">
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Logout
                </button>
            </div>
        );
    }

    return (
        <>
            <html lang="en">
                <body>
                    <nav id="top" className="md:fixed w-full h-10 md:h-12 md:px-12 px-2 flex justify-between items-center bg-gradient-to-r from-[#FFBCE1] via-[#F27BBD] to-[#FFBCE1] border-slate-300 shadow-lg z-40 ">
                        <div className="flex justify-center items-center mx-2 md:mx-0">
                            <span className="text-[#EA2793] text-3xl mx-1 md:text-4xl font-bold">MUA</span>
                        </div>
                        <ul className={`flex justify-center items-center gap-6 max-sm:bg-gradient-to-r from-[#FFBCE1] via-[#F27BBD] to-[#FFBCE1] flex-col w-full left-0 z-40 absolute md:z-auto md:static md:w-auto md:flex md:flex-row md:items-center md:justify-between md:py-0 py-4 md:pl-0  md:gap-12 md:opacity-100 transition-all ease-in duration-500 ${open ? 'top-[38px] opacity-100' : 'top-[-400px] opacity-0'}`}>
                            <li className="text-white font-medium text-base"><Link href="/">Home</Link></li>
                            {role === 'artist' ? (<li className="text-white font-medium text-base"><Link href="/pages/editprofile">Edit Profile</Link></li>
                            ) : (<li className="text-white font-medium text-base"><Link href="/pages/artistlisting">Artists</Link></li>
                            )}
                            <li className="text-white font-medium text-base"><Link href="/#about">About</Link></li>
                            <li className="md:hidden text-base m-auto px-5 pb-[2px] md:px-4 md:py-1 rounded-full w-20 md:w-auto">
                                {isClient && user ? (
                                    role === 'artist' ? (
                                        <button onClick={handleLogout} className="relative  h-[35px] w-[35px] font-semibold rounded-full">
                                            <Image src="/gallery/user-logout.png" alt="Profile" width={35} height={35} className="p-1 mx-[2px]" />
                                        </button>

                                    ) : (
                                        <button onClick={handleLogout} className="relative  h-[35px] w-[35px] font-semibold rounded-full">
                                            <Image src="/gallery/user-logout.png" alt="Profile" width={35} height={35} className="p-1 mx-[2px]" />
                                        </button>
                                    )
                                ) : (
                                    <Link href="/pages/login" className="font-semibold rounded-full">
                                        <Image src="/gallery/user2.png" alt="Profile" width={35} height={35} />
                                    </Link>
                                )}
                            </li>
                        </ul>
                        <div className="max-sm:hidden flex items-center relative" ref={dropdownRef}>
                            {isClient && (
                                <button onClick={handleProfileClick} className="flex items-center  w-[35px] h-[35px] rounded-full">
                                    <Image src="/gallery/user2.png" alt="Profile" width={40} height={40} className="object-cover w-full h-full" />
                                </button>
                            )}
                            {dropdownOpen && (
                                <div className={`origin-top-right absolute right-0 mt-24 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${role === 'artist' ? 'mter-logout' : 'mt-24'}`}>
                                    {renderDropdownContent()}
                                </div>
                            )}
                        </div>


                        <span className="md:hidden block z-40 mx-1" onClick={() => setOpen(!open)}>
                            {open ? (
                                <Image src="/icons8-close.svg" alt="menu" width={30} height={20} className="h-8 cursor-pointer" />
                            ) : (
                                <Image src="/icons8-menu.svg" alt="menu" width={35} height={20} className="h-8 cursor-pointer" />
                            )}
                        </span>
                    </nav>
                    {children}
                    <Footer />
                </body>
            </html>
        </>
    );
}
