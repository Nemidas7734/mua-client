"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface EditInfoProps {
    profileData: {
        name: string
        location: string
        whatsappNumber: string
        contactNumber: string
        description: string
        expertise: string
        skills: string
        startingPrice: string
    }
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onCoverImageChange: (file: File) => void
    onProfileImageChange: (file: File) => void
    coverImagePreview: string
    profileImagePreview: string
}

export default function EditInfo({
    profileData,
    onInputChange,
    onCoverImageChange,
    onProfileImageChange,
    coverImagePreview,
    profileImagePreview
}: EditInfoProps) {
    const [localCoverImagePreview, setLocalCoverImagePreview] = useState(coverImagePreview)
    const [localProfileImagePreview, setLocalProfileImagePreview] = useState(profileImagePreview)

    useEffect(() => {
        setLocalCoverImagePreview(coverImagePreview)
        setLocalProfileImagePreview(profileImagePreview)
    }, [coverImagePreview, profileImagePreview])

    const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            setLocalCoverImagePreview(URL.createObjectURL(file))
            onCoverImageChange(file)
        }
    }

    const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            setLocalProfileImagePreview(URL.createObjectURL(file))
            onProfileImageChange(file)
        }
    }

    return (
        <div className="w-full max-w-[1120px] mx-auto rounded-xl border-2 shadow-2xl shadow-[#0000001F] mb-8 overflow-hidden">
            {/* Cover Image */}
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[356px]">
                <Image
                    src={localCoverImagePreview || "/images/Hero.png"}
                    alt="Cover photo"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                />
                <label className="absolute bottom-2 right-2 bg-white p-2 rounded-full cursor-pointer">
                    <input type="file" className="hidden" onChange={handleCoverImageChange} accept="image/*" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </label>
            </div>
            {/* Profile Image */}
            <div className="relative mx-4 sm:mx-8 -mt-16 sm:-mt-20 mb-8">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-stone-400 overflow-hidden relative">
                    <Image
                        src={localProfileImagePreview || "/images/placeholder.jpg"}
                        alt="Profile"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>

                <label className="absolute bottom-0 bg-white p-2 rounded-full cursor-pointer">
                    <input type="file" className="hidden" onChange={handleProfileImageChange} accept="image/*" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </label>
            </div>
            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-8 pb-8">
                <input name="name" value={profileData.name} onChange={onInputChange} className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="Name" />
                <input name="location" value={profileData.location} onChange={onInputChange} className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="Area, City" />
                <input name="whatsappNumber" value={profileData.whatsappNumber} onChange={onInputChange} className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="WhatsApp Number" />
                <input name="contactNumber" value={profileData.contactNumber} onChange={onInputChange} className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="Contact Number" />
                <textarea name="description" value={profileData.description} onChange={onInputChange} className="w-full h-24 border p-2 rounded-md border-stone-700 font-normal placeholder:text-black sm:col-span-2" placeholder="Description" />
                <input name="expertise" value={profileData.expertise} onChange={onInputChange} className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal placeholder:text-black" placeholder="Expertise (comma-separated)" />
                <input
                    name="skills"
                    value={profileData.skills || ''}
                    onChange={(e) => onInputChange({
                        ...e,
                        target: { ...e.target, value: e.target.value.toString() }
                    })}
                    className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal placeholder:text-black"
                    placeholder="Skills (comma-separated)"
                />            
            </div>
        </div>
    )
}