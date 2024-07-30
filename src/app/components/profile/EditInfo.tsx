"use client"

import Image from "next/image"
import { useState } from "react"

export default function EditInfo() {
    const [coverImage, setCoverImage] = useState("/images/Hero.png")
    const [profileImage, setProfileImage] = useState("")

    const handleCoverImageChange = (e : any) => {
        if (e.target.files && e.target.files[0]) {
            setCoverImage(URL.createObjectURL(e.target.files[0]))
        }
    }

    const handleProfileImageChange = (e :any) => {
        if (e.target.files && e.target.files[0]) {
            setProfileImage(URL.createObjectURL(e.target.files[0]))
        }
    }

    return (
        <div className="w-full max-w-[1120px] mx-auto rounded-xl border-2 shadow-2xl shadow-[#0000001F] mb-8 overflow-hidden">
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[356px]">
                <Image src={coverImage} alt="Cover photo" layout="fill" objectFit="cover" className="rounded-t-xl" />
                <label className="absolute bottom-2 right-2 bg-white p-2 rounded-full cursor-pointer">
                    <input type="file" className="hidden" onChange={handleCoverImageChange} accept="image/*" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </label>
            </div>
            <div className="relative mx-4 sm:mx-8 -mt-16 sm:-mt-20 mb-8">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-stone-400 overflow-hidden">
                    {profileImage ? (
                        <Image src={profileImage} alt="Profile" layout="fill" objectFit="cover" />
                    ) : (
                        <svg className="w-full h-full p-4" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0.236328C13.05 0.236328 9 5.06252 9 11.0091C9 16.9556 13.05 21.7818 18 21.7818C22.95 21.7818 27 16.9556 27 11.0091C27 5.06252 22.95 0.236328 18 0.236328ZM8.595 21.7818C3.825 21.9973 0 25.7462 0 30.4V34.7091H36V30.4C36 25.7462 32.22 21.9973 27.405 21.7818C24.975 24.4104 21.645 26.0909 18 26.0909C14.355 26.0909 11.025 24.4104 8.595 21.7818Z" fill="black" />
                        </svg>
                    )}
                </div>
                <label className="absolute bottom-0  bg-white p-2 rounded-full cursor-pointer">
                    <input type="file" className="hidden" onChange={handleProfileImageChange} accept="image/*" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-8 pb-8">
                <input className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="Name" />
                <input className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="Area, City" />
                <input className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="WhatsApp Number" />
                <input className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="Contact Number" />
                <textarea className="w-full h-24 border p-2 rounded-md border-stone-700 font-normal placeholder:text-black sm:col-span-2" placeholder="Description" />
                <input className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="Expertise" />
                <input className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="Starting Price" />
            </div>
        </div>
    )
}