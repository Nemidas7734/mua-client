"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuthStore } from "@/app/lib/store/authStore";
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, role, logout } = useAuthStore()
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // console.log('Current user:', user);
    setIsClient(true)
  }, [])

  const handleProfileClick = () => {
    if (role === 'artist') {
      router.push('/pages/artistprofile')
    }
  }

  const handleLogout = async () => {
    await logout()
    router.push('/')
  }

  return (
    <nav id="top" className="md:fixed w-full h-10 md:h-12 md:px-12 px-2 flex justify-between items-center bg-gradient-to-r from-[#FFBCE1] via-[#F27BBD] to-[#FFBCE1] border-slate-300 shadow-lg z-40 ">
      <div className="flex justify-center items-center mx-2 md:mx-0">
        <span className="text-[#EA2793] text-3xl mx-1 md:text-4xl font-bold">MUA</span>
      </div>
      <ul className={`flex justify-center items-center gap-6 max-sm:bg-gradient-to-r from-[#FFBCE1] via-[#F27BBD] to-[#FFBCE1] flex-col w-full left-0 z-40 absolute md:z-auto md:static md:w-auto md:flex md:flex-row md:items-center md:justify-between md:py-0 py-4 md:pl-0  md:gap-12 md:opacity-100 transition-all ease-in duration-500 ${open ? 'top-[38px] opacity-100' : 'top-[-400px] opacity-0'}`}>
            <li className="text-white font-semibold text-base"><Link href="/">Home</Link></li>
            <li className="text-white font-semibold text-base"><Link href="/#gallery">Gallery</Link></li>
            <li className="text-white font-semibold text-base"><Link href="/#about">About</Link></li>
        <li className="md:hidden text-base m-auto px-4 pb-[2px] md:px-4 md:py-1 rounded-full w-20 md:w-auto text-white font-semibold bg-pink-500 hover:bg-pink-600">
          {isClient && user ? (
            <button onClick={handleLogout} className="relative bg-[#EE4B68] h-[35px] w-[35px] font-semibold rounded-full">
              <Image src="/gallery/user-logout.png" alt="Profile" width={35} height={35} className="p-1 mx-[2px]" />
            </button>
          ) : (
            <Image src="/gallery/woman.png" alt="Profile" width={35} height={35} />
          )}
        </li>
      </ul>
      <div className="flex items-center">
        {isClient && user ? (
          role === 'artist' ? (
            <button onClick={handleProfileClick} className="mr-4 flex gap-2">
              <Image src="/gallery/woman.png" alt="Profile" width={35} height={35} />
              <button onClick={handleLogout} className="relative bg-[#EE4B68] h-[35px] w-[35px] font-semibold rounded-full">
                <Image src="/gallery/user-logout.png" alt="Profile" width={35} height={35} className="p-1 mx-[2px]" />
              </button>
            </button>
          ) : (
            <button onClick={handleLogout} className="relative bg-[#EE4B68] h-[35px] w-[35px] font-semibold rounded-full">
              <Image src="/gallery/user-logout.png" alt="Profile" width={35} height={35} className="p-1 mx-[2px]" />
            </button>
          )
        ) : (
          <Link href="/pages/login" className="font-semibold rounded-full">
            <Image src="/gallery/woman.png" alt="Profile" width={35} height={35} />
          </Link>
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
  );
}