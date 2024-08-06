"use client"

import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/app/lib/store/authStore'
import EditInfo from "@/app/components/profile/EditInfo"
import EditGallery from "@/app/components/profile/EditGallery"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "@/app/firebase/firebase_config"
import { StaticImport } from "next/dist/shared/lib/get-img-props"




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
    const [coverImagePreview, setCoverImagePreview] = useState<string | StaticImport>('')
    const [profileImagePreview, setProfileImagePreview] = useState<string | null>(null)
    const [existingGalleryUrls, setExistingGalleryUrls] = useState<string[]>([])

    useEffect(() => {
        if (!user || role !== 'artist') {
            router.push('/')
        } else {
            checkExistingProfile()
        }
    }, [user, role, router])

    const checkExistingProfile = async () => {
        if (user) {
            const artistRef = doc(db, 'Artists', user.uid)
            const artistDoc = await getDoc(artistRef)
            if (artistDoc.exists()) {
                alert('You already have a profile. Redirecting to edit page.')
                router.push('/pages/editprofile')
            }
        }
    }


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

        try {
            const artistRef = doc(db, 'Artists', user.uid)
            const artistDoc = await getDoc(artistRef)
            
            if (artistDoc.exists()) {
                alert('You already have a profile. Redirecting to edit page.')
                router.push('/pages/editprofile')
                return
            }

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
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-8">Create Profile</h1>
            <EditInfo
                profileData={profileData}
                onInputChange={handleInputChange}
                onCoverImageChange={handleCoverImageChange}
                coverImagePreview={coverImagePreview}
                profileImagePreview={profileImagePreview}
                onProfileImageChange={handleProfileImageChange}
            />
            <EditGallery
                onGalleryImagesChange={handleGalleryImagesChange}
                existingGalleryUrls={existingGalleryUrls}
            />
            <button
                onClick={handleCreateProfile}
                className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Create Profile
            </button>
        </div>
    )
}