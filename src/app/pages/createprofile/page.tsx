"use client"

import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/app/lib/store/authStore'
import CreateInfo from "@/app/components/profile/CreateInfo"
import CreateGallery from "@/app/components/profile/CreateGallery"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "@/app/firebase/firebase_config"

export default function CreateArtistProfile() {
    const router = useRouter()
    const { user, role } = useAuthStore()
    const [profileData, setProfileData] = useState({
        name: '',
        location: '',
        whatsappNumber: '',
        contactNumber: '',
        description: '',
        expertise: '',
        startingPrice: '',
    })
    const [coverImage, setCoverImage] = useState<File | null>(null)
    const [profileImage, setProfileImage] = useState<File | null>(null)
    const [galleryImages, setGalleryImages] = useState<File[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (!user || role !== 'artist') {
            router.push('/')
        }
    }, [user, role, router])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setProfileData(prev => ({ ...prev, [name]: value }))
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

        setIsLoading(true)
        try {
            const artistRef = doc(db, 'Artists', user.uid)
            const updateData: any = { ...profileData }

            if (coverImage) {
                updateData.coverImageUrl = await uploadImage(coverImage, `artists/${user.uid}/cover.jpg`)
            }

            if (profileImage) {
                updateData.profileImageUrl = await uploadImage(profileImage, `artists/${user.uid}/profile.jpg`)
            }

            if (galleryImages.length > 0) {
                const galleryUrls = await Promise.all(
                    galleryImages.map((file, index) =>
                        uploadImage(file, `artists/${user.uid}/gallery/${index}.jpg`)
                    )
                )
                updateData.galleryUrls = galleryUrls
            } else {
                updateData.galleryUrls = []
            }

            await setDoc(artistRef, updateData)
            alert('Profile created successfully!')
            router.push('/pages/artistprofile')
        } catch (error) {
            console.error('Error creating profile:', error);
            if (error instanceof Error) {
                alert(`An error occurred: ${error.message}`);
            } else {
                alert('An unknown error occurred while creating the profile.');
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-8">Create Profile</h1>
            <CreateInfo
                profileData={profileData}
                onInputChange={handleInputChange}
                onCoverImageChange={handleCoverImageChange}
                onProfileImageChange={handleProfileImageChange}
            />
            <CreateGallery
                onGalleryImagesChange={handleGalleryImagesChange}
            />
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
            >
                Create Profile
            </button>
        )}
    </div>
)
}