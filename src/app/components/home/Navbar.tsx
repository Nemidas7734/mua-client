"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useAuthStore } from "@/app/lib/store/authStore";
import { useRouter } from 'next/navigation'

export default function Navbar() {
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
          <Link href="/pages/artistprofile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            View Profile
          </Link>
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
    <nav id="top" className="md:fixed w-full h-10 md:h-12 md:px-12 px-2 flex justify-between items-center bg-gradient-to-r from-[#FFBCE1] via-[#F27BBD] to-[#FFBCE1] border-slate-300 shadow-lg z-40 ">
      <div className="flex justify-center items-center mx-2 md:mx-0">
        <span className="text-[#EA2793] text-3xl font-[sans-serif] mx-1 md:text-4xl font-bold">MUA</span>
      </div>
      <ul className={`menu3 flex justify-center items-center gap-6 max-sm:bg-gradient-to-r from-[#FFBCE1] via-[#F27BBD] to-[#FFBCE1] flex-col w-full left-0 z-40 absolute md:z-auto md:static md:w-auto md:flex md:flex-row md:items-center md:justify-between md:py-0 py-4 md:pl-0  md:gap-12 md:opacity-100 transition-all ease-in duration-500 ${open ? 'top-[38px] opacity-100' : 'top-[-400px] opacity-0'}`}>
        <li className="text-white font-medium font-[sans-serif] text-base"><Link href="/">Home</Link></li>
        <li className="text-white font-medium font-[sans-serif] text-base"><Link href="/#gallery">Gallery</Link></li>
        <li className="text-white font-medium font-[sans-serif] text-base"><Link href="/#about">About</Link></li>
        <li className="md:hidden not-visible text-base m-auto px-6 pb-[2px] md:px-4 md:py-1 rounded-full w-20">
          {isClient && user ? (
            role === 'artist' ? (
              <button onClick={handleProfileClick} className="mr-4 flex flex-col gap-2 w-[30px] h-[30px] rounded-full">
                <img width="30" height="30" src="https://img.icons8.com/material-sharp/48/user-male-circle.png" alt="user-male-circle" className="max-w-[30px] max-h-[30px] bg-white overflow-hidden rounded-full " />
                <button onClick={handleLogout} className="relative h-[30px] w-[30px] font-semibold rounded-full">
                  <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/logout-rounded.png" alt="logout-rounded" className="max-w-8 max-h-8 bg-white rounded-full" />
                </button>
              </button>
            ) : (
              <button onClick={handleLogout} className="relative h-[30px] w-[30px] font-semibold rounded-full">
                <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/logout-rounded.png" alt="logout-rounded" className="max-w-8 max-h-8 bg-white rounded-full" />
              </button>
            )
          ) : (
            <Link href="/pages/login" className="font-semibold rounded-full w-[30px] h-[30px]">
              <img width="30" height="30" src="https://img.icons8.com/material-sharp/48/user-male-circle.png" alt="user-male-circle" className="max-w-[30px] max-h-[30px] bg-white overflow-hidden rounded-full " />
            </Link>
          )}
        </li>
      </ul>
      <div className="max-sm:hidden flex items-center relative" ref={dropdownRef}>
        {isClient && (
          <div onClick={handleProfileClick} className="w-[30px] h-[30px]  rounded-full">
            <img width="30" height="30" src="https://img.icons8.com/material-sharp/48/user-male-circle.png" alt="user-male-circle" className="max-w-[30px] max-h-[30px] bg-white overflow-hidden rounded-full " />
          </div>
        )}
        {dropdownOpen && (
          <div className={`origin-top-right absolute right-0 mt-24 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${role === 'artist' ? 'mt-[132px]' : 'mt-24'}`}>
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
  );
}