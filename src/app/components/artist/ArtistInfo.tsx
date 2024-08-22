"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Ratings from "./Ratings";
import { doc, updateDoc, getFirestore, getDoc } from "firebase/firestore";
import { ArtistFormData } from "@/app/lib/schema/validationSchema";
import { initializeApp, getApps, getApp } from 'firebase/app';
import { useSearchParams } from "next/navigation";


import { z } from "zod";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_Auth_Domain,
    projectId: process.env.NEXT_PUBLIC_Project_ID,
    storageBucket: process.env.NEXT_PUBLIC_Storage_Bucket,
    messagingSenderId: process.env.NEXT_PUBLIC_Messaging_ID,
    appId: process.env.NEXT_PUBLIC_App_ID,
};


interface ArtistData {
    name: string;
    location: string;
    expertise: string | number | boolean | null | undefined;
    coverImageUrl?: string;
    profileImageUrl?: string;
    reviews: Array<{
        id: string;
        text: string;
        rating: number;
        date: string;
        userName?: string;
        userId?: string;
    }>;
}

interface ArtistInfoProps {
    artistData: ArtistData;
    artistId: string;
}

const calculateAverageRating = (
    reviews: ArtistData["reviews"] | undefined
): number => {
    if (!reviews || reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / reviews.length;
};

export default function ArtistInfo({ artistData, artistId }: ArtistInfoProps) {
    const searchParams = useSearchParams();
    const averageRating = artistData
        ? calculateAverageRating(artistData.reviews || [])
        : 0;
    const [showConnect, setShowConnect] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [artistContact, setArtistContact] = useState({ email: '', phone: '' });
    const [formData, setFormData] = useState<Partial<ArtistFormData>>({
        email: "",
        phoneNumber: "",
        eventDate: "",
        message: "",
        otp: "",
    });

    const fetchArtistContact = async () => {
        try {
            const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
            const firestore = getFirestore(app);
            const artistRef = doc(firestore, "Artists", artistId);
            const artistDoc = await getDoc(artistRef);
            if (artistDoc.exists()) {
                const data = artistDoc.data();
                setArtistContact({
                    email: data.email || '',
                    phone: data.phoneNumber || ''
                });
            }
        } catch (error) {
            console.error("Error fetching artist contact:", error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));
        // if (errors[name]) {
        //     setErrors((prev) => ({ ...prev, [name]: '' }));
        // }
    };



    const handleContactClick = () => {
        if (formData.otp) {
            // OTP has been verified, show contact info
            setShowContact(true);
            setShowConnect(false);
        } else {
            // OTP not verified, show connect div for OTP verification
            setShowConnect(true);
            setShowContact(false);
        }
    };
    const verifyOtp = async (otp?: string): Promise<boolean> => {
        // Implement your OTP verification logic here
        // Return true if OTP is valid, false otherwise
        return true; // Placeholder
    };
    

    const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Add OTP verification logic here
        const isOtpValid = await verifyOtp(formData.otp); // Implement this function

        if (isOtpValid) {
            try {
                const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
                const firestore = getFirestore(app);
                const artistRef = doc(firestore, "Artists", artistId);
                await updateDoc(artistRef, {
                    message: formData.message,
                });
                setShowSuccess(true);
                fetchArtistContact(); // Fetch contact info after successful OTP verification
            } catch (error) {
                console.error("Error sending message:", error);
            }
        } else {
            // Handle invalid OTP
            console.error("Invalid OTP");
        }
    };




    if (!artistData) return <div>Loading...</div>;

    // Function to render expertise badges
    const renderExpertiseBadges = () => {
        if (Array.isArray(artistData.expertise)) {
            return artistData.expertise.map((exp, index) => (
                <span key={index} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-green-600/20 whitespace-nowrap">
                    {exp}
                </span>
            ));
        } else if (typeof artistData.expertise === 'string' && artistData.expertise.trim() !== '') {
            return artistData.expertise.split(',').map((exp, index) => (
                <span key={index} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 whitespace-nowrap">
                    {exp.trim()}
                </span>
            ));
        }
        return <span className="text-gray-500">No expertise listed</span>;
    };

    return (
        <div className="w-full max-w-[1120px] mx-auto rounded-xl border-2 shadow-2xl shadow-[#0000001F] mt-4 sm:mt-10 md:mt-20 overflow-hidden">
            <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-[356px]">
                <Image
                    src={artistData.coverImageUrl || "/images/Hero.png"}
                    alt="Cover photo"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                />
                <div className="absolute bottom-0 left-4 sm:left-6 md:left-8 transform translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-stone-400 flex items-center justify-center overflow-hidden">
                    {artistData.profileImageUrl ? (
                        <Image
                            src={artistData.profileImageUrl}
                            alt="Profile"
                            layout="fill"
                            objectFit="cover"
                        />
                    ) : (
                        <svg className="w-3/4 h-3/4 text-black" viewBox="0 0 36 35" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0.236328C13.05 0.236328 9 5.06252 9 11.0091C9 16.9556 13.05 21.7818 18 21.7818C22.95 21.7818 27 16.9556 27 11.0091C27 5.06252 22.95 0.236328 18 0.236328ZM8.595 21.7818C3.825 21.9973 0 25.7462 0 30.4V34.7091H36V30.4C36 25.7462 32.22 21.9973 27.405 21.7818C24.975 24.4104 21.645 26.0909 18 26.0909C14.355 26.0909 11.025 24.4104 8.595 21.7818Z" />
                        </svg>
                    )}
                </div>
            </div>
            <div className={`max-sm:grid max-sm:grid-flow-row max-sm:${showConnect ? 'grid-rows-2' : 'grid-rows-1'} md:grid md:grid-flow-col md:grid-cols-2`}>
                <div className="flex flex-col px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-20 pb-6">
                    <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">{artistData.name}</h1>
                    <h2 className="font-normal text-sm sm:text-base md:text-lg lg:text-xl mt-1">{artistData.location}</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {renderExpertiseBadges()}
                    </div>
                    <div className="mt-2">
                        <Ratings rating={averageRating} />
                    </div>
                    <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4">
                        <button className="px-8 py-1 border-2 shadow-md rounded-md text-xs sm:text-sm md:text-base text-black" onClick={() => setShowConnect(!showConnect)}>Message</button>
                        <button className="px-8 py-1 bg-[#007AFF] rounded-md text-xs sm:text-sm md:text-base text-white" onClick={() => setShowConnect(!showConnect)}>Contact</button>
                    </div>
                </div>
                <div id="connect" className={`m-auto w-full ${showConnect ? "flex" : "hidden"}`}>
                    {showContact && (
                        <div className="mt-4">
                            <h2 className="text-lg font-bold mb-2">Contact Information</h2>
                            <p>Email: {artistContact.email}</p>
                            <p>Phone: {artistContact.phone}</p>
                        </div>
                    )}
                    {showSuccess && !showContact ? (
                        <div className="m-auto">
                            <h1 className="text-2xl font-bold mb-4">Message Sent</h1>
                            <p>Your message has been sent to the artist.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSendMessage} className="flex flex-col w-auto h-auto max-sm:p-4 max-sm:pt-0 md:border md:mr-2 border-black rounded-xl">
                            <h1 className="md:p-2 max-sm:m-auto max-sm:mt-2">Connect with the Artist</h1>
                            <div className="grid grid-flow-row max-sm:mt-4 md:grid md:grid-flow-col md:grid-cols-3 gap-2 p-2">
                                <input
                                    name="email"
                                    value={formData.email || ""}
                                    onChange={handleInputChange}
                                    className="border border-black rounded-md placeholder:text-xs pl-2"
                                    placeholder="Email"
                                />
                                <input
                                    name="phoneNumber"
                                    value={formData.phoneNumber || ""}
                                    onChange={handleInputChange}
                                    className="border border-black rounded-md placeholder:text-xs pl-2"
                                    placeholder="Mob No."
                                />
                                <input
                                    name="eventDate"
                                    type="date"
                                    value={formData.eventDate || ""}
                                    onChange={handleInputChange}
                                    className="border border-black rounded-md placeholder:text-xsa pl-2"
                                    placeholder="Event Date"
                                />
                            </div>
                            <div className="grid grid-flow-row md:grid md:grid-flow-col md:grid-cols-3 gap-2 p-2 mb-2 h-full">
                                <textarea
                                    name="message"
                                    value={formData.message || ""}
                                    onChange={handleInputChange}
                                    className="max-sm:row-span-2 md:col-span-2 border border-black rounded-md h-full placeholder:text-xs pl-2 pt-2"
                                    placeholder="Message"
                                />
                                <div className="w-auto max-sm:gap-2 grid grid-flow-col grid-cols-2 md:flex md:flex-col">
                                    <input
                                        name="otp"
                                        value={formData.otp || ""}
                                        onChange={handleInputChange}
                                        className="p-2 md:mr-4 md:ml-4 mt-1 md:mt-4 w-auto border h-[25px] border-black rounded-md placeholder:text-xs"
                                        placeholder="OTP"
                                    />
                                    <button
                                        type="submit"
                                        className="text-sm text-white md:ml-2 md:mr-2 mt-[2px] md:mt-4 w-auto border h-[30px] bg-[#007AFF] border-black rounded-md"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}