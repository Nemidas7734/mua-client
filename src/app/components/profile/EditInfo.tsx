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
        expertise: string | string[]
        skills: string | string[]
        startingPrice: string
    }
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onCoverImageChange: (file: File) => void
    onProfileImageChange: (file: File) => void
    coverImagePreview: string
    profileImagePreview: string
    onExpertiseChange: (expertise: string[]) => void
    onSkillsChange: (skills: string[]) => void
}

export default function EditInfo({
    profileData,
    onInputChange,
    onCoverImageChange,
    onProfileImageChange,
    coverImagePreview,
    profileImagePreview,
    onExpertiseChange,
    onSkillsChange
}: EditInfoProps) {
    const [localCoverImagePreview, setLocalCoverImagePreview] = useState(coverImagePreview)
    const [localProfileImagePreview, setLocalProfileImagePreview] = useState(profileImagePreview)
    const [expertiseList, setExpertiseList] = useState<string[]>([])
    const [skillsList, setSkillsList] = useState<string[]>([])
    const [newExpertise, setNewExpertise] = useState("")
    const [newSkill, setNewSkill] = useState("")

    useEffect(() => {
        setLocalCoverImagePreview(coverImagePreview)
        setLocalProfileImagePreview(profileImagePreview)
        setExpertiseList(Array.isArray(profileData.expertise)
            ? profileData.expertise
            : (profileData.expertise ? profileData.expertise.split(',').map(item => item.trim()) : []))
        setSkillsList(Array.isArray(profileData.skills)
            ? profileData.skills
            : (profileData.skills ? profileData.skills.split(',').map(item => item.trim()) : []))
    }, [coverImagePreview, profileImagePreview, profileData.expertise, profileData.skills])

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

    const handleAddExpertise = () => {
        if (newExpertise && !expertiseList.includes(newExpertise)) {
            const updatedExpertise = [...expertiseList, newExpertise]
            setExpertiseList(updatedExpertise)
            onExpertiseChange(updatedExpertise)
            setNewExpertise("")
        }
    }

    const handleRemoveExpertise = (item: string) => {
        const updatedExpertise = expertiseList.filter(e => e !== item)
        setExpertiseList(updatedExpertise)
        onExpertiseChange(updatedExpertise)
    }

    const handleAddSkill = () => {
        if (newSkill && !skillsList.includes(newSkill)) {
            const updatedSkills = [...skillsList, newSkill]
            setSkillsList(updatedSkills)
            onSkillsChange(updatedSkills)
            setNewSkill("")
        }
    }

    const handleRemoveSkill = (item: string) => {
        const updatedSkills = skillsList.filter(s => s !== item)
        setSkillsList(updatedSkills)
        onSkillsChange(updatedSkills)
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
                <div>
                    <label htmlFor="name" className="block mb-1">Name</label>
                    <input id="name" name="name" value={profileData.name} onChange={onInputChange} className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal" placeholder="Name"/>
                </div>
                <div>
                    <label htmlFor="location" className="block mb-1">Location</label>
                    <input id="location" name="location" value={profileData.location} onChange={onInputChange} className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal" placeholder="Area, City"/>
                </div>
                <div>
                    <label htmlFor="whatsappNumber" className="block mb-1">WhatsApp Number</label>
                    <input id="whatsappNumber" name="whatsappNumber" value={profileData.whatsappNumber} onChange={onInputChange} className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal" placeholder="WhatsApp Number"/>
                </div>
                <div>
                    <label htmlFor="contactNumber" className="block mb-1">Contact Number</label>
                    <input id="contactNumber" name="contactNumber" value={profileData.contactNumber} onChange={onInputChange} className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal" placeholder="Contact Number"/>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="description" className="block mb-1">Description</label>
                    <textarea id="description" name="description" value={profileData.description} onChange={onInputChange} className="w-full h-24 border p-2 rounded-md border-stone-700 font-normal" placeholder="Describe yourself and your services"/>
                </div>
                {/* Expertise Section */}
                <div>
                    <label htmlFor="expertise" className="block mb-1">Expertise</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {expertiseList.map((item: string, index: number) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center">
                                {item}
                                <button onClick={() => handleRemoveExpertise(item)} className="ml-1 text-blue-600 hover:text-blue-800">×</button>
                            </span>
                        ))}
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            value={newExpertise}
                            onChange={(e) => setNewExpertise(e.target.value)}
                            className="w-full h-10 border p-2 rounded-l-md border-stone-700 font-normal"
                            placeholder="Add expertise"
                        />
                        <button onClick={handleAddExpertise} className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600">Add</button>
                    </div>
                </div>

                {/* Skills Section */}
                <div>
                    <label htmlFor="skills" className="block mb-1">Skills</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {skillsList.map((item: string, index: number) => (
                            <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm flex items-center">
                                {item}
                                <button onClick={() => handleRemoveSkill(item)} className="ml-1 text-green-600 hover:text-green-800">×</button>
                            </span>
                        ))}
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            className="w-full h-10 border p-2 rounded-l-md border-stone-700 font-normal"
                            placeholder="Add skill"
                        />
                        <button onClick={handleAddSkill} className="bg-green-500 text-white px-4 rounded-r-md hover:bg-green-600">Add</button>
                    </div>
                </div>
                <div>
                    <label htmlFor="startingPrice" className="block mb-1">Starting Price</label>
                    <input id="startingPrice" name="startingPrice" value={profileData.startingPrice} onChange={onInputChange} className="w-full h-10 border p-2 rounded-md border-stone-700 font-normal" placeholder="Starting Price"/>
                </div>
            </div>
        </div>
    )
}