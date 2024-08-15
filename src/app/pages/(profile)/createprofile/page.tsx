"use client"

import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/app/lib/store/authStore'
import CreateInfo from "@/app/components/profile/CreateInfo"
import CreateGallery from "@/app/components/profile/CreateGallery"
import { doc, updateDoc, getDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "@/app/firebase/firebase_config"

interface ProfileData {
    name: string;
    location: string;
    whatsappNumber: string;
    contactNumber: string;
    description: string;
    expertise: string[];
    skills: string[];
    startingPrice: string;
}

export default function CreateArtistProfile() {
    const router = useRouter()
    const { user, role } = useAuthStore()
    const [profileData, setProfileData] = useState<ProfileData>({
        name: '',
        location: '',
        whatsappNumber: '',
        contactNumber: '',
        description: '',
        expertise: [],
        skills: [],
        startingPrice: '',
    })
    const [coverImage, setCoverImage] = useState<File | null>(null)
    const [profileImage, setProfileImage] = useState<File | null>(null)
    const [galleryImages, setGalleryImages] = useState<File[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!user || role !== 'artist') {
            router.push('/')
        }
    }, [user, role, router])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setProfileData(prev => ({ ...prev, [name]: value }))
    }

    const handleExpertiseChange = (expertise: string[]) => {
        setProfileData(prev => ({ ...prev, expertise }))
    }

    const handleSkillsChange = (skills: string[]) => {
        setProfileData(prev => ({ ...prev, skills }))
    }

    const handleCoverImageChange = (file: File) => {
        setCoverImage(file)
    }

    const handleProfileImageChange = (file: File) => {
        setProfileImage(file)
    }

    const handleGalleryImagesChange = (files: File[]) => {
        setGalleryImages(files)
    }

    const uploadImage = async (file: File, path: string) => {
        const storageRef = ref(storage, path)
        await uploadBytes(storageRef, file)
        return getDownloadURL(storageRef)
    }

    const handleCreateProfile = async () => {
        if (!user) return
    
        setError(null)
        setIsLoading(true)
    
        if (galleryImages.length < 6) {
            setError("Please upload at least 6 gallery images.")
            setIsLoading(false)
            return
        }
    
        try {
            const artistRef = doc(db, 'Artists', user.uid)
            
            // First, get the existing document
            const artistDoc = await getDoc(artistRef)
            const existingData = artistDoc.data() || {}
    
            const updateData: any = { ...existingData, ...profileData }
    
            if (coverImage) {
                updateData.coverImageUrl = await uploadImage(coverImage, `artists/${user.uid}/cover.jpg`)
            }
    
            if (profileImage) {
                updateData.profileImageUrl = await uploadImage(profileImage, `artists/${user.uid}/profile.jpg`)
            }
    
            const galleryUrls = await Promise.all(
                galleryImages.map((file, index) =>
                    uploadImage(file, `artists/${user.uid}/gallery/${index}.jpg`)
                )
            )
            updateData.galleryUrls = galleryUrls
    
            // Use updateDoc instead of setDoc
            await updateDoc(artistRef, updateData)
            alert('Profile updated successfully!')
            router.push('/pages/artistprofile')
        } catch (error) {
            console.error('Error updating profile:', error);
            if (error instanceof Error) {
                setError(`An error occurred: ${error.message}`);
            } else {
                setError('An unknown error occurred while updating the profile.');
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-8">Create Artist Profile</h1>
            
            <CreateInfo
                profileData={profileData}
                onInputChange={handleInputChange}
                onExpertiseChange={handleExpertiseChange}
                onSkillsChange={handleSkillsChange}
                onCoverImageChange={handleCoverImageChange}
                onProfileImageChange={handleProfileImageChange}
            />
            
            <CreateGallery
                onGalleryImagesChange={handleGalleryImagesChange}
            />

            {error && (
                <div className="mt-4 text-red-500 text-center">
                    {error}
                </div>
            )}

            {isLoading ? (
                <div className="mt-8 flex flex-col items-center">
                    <div className="loader"></div>
                    <p className="mt-4 text-lg text-center">
                        Please wait, your profile is being created. This may take a few minutes.
                    </p>
                </div>
            ) : (
                <button
                    onClick={handleCreateProfile}
                    className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    disabled={isLoading}
                >
                    Create Profile
                </button>
            )}
        </div>
    )
}