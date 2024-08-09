"use client"

import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/app/lib/store/authStore'
import EditInfo from "@/app/components/profile/EditInfo"
import EditGallery from "@/app/components/profile/EditGallery"
import { doc, updateDoc, getDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "@/app/firebase/firebase_config"



export default function EditArtistProfile() {

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
    const [coverImagePreview, setCoverImagePreview] = useState<string | ''>('')
    const [profileImagePreview, setProfileImagePreview] = useState<string | ''>('')
    const [existingGalleryUrls, setExistingGalleryUrls] = useState<string[]>([])
    const [currentGalleryUrls, setCurrentGalleryUrls] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        if (!user || role !== 'artist') {
            router.push('/')
        } else {
            fetchExistingProfile()
        }
    }, [user, role, router])

    const fetchExistingProfile = async () => {
        if (user) {
            const artistRef = doc(db, 'Artists', user.uid)
            const artistDoc = await getDoc(artistRef)
            if (artistDoc.exists()) {
                const data = artistDoc.data()
                setProfileData({
                    name: data.name || '',
                    location: data.location || '',
                    whatsappNumber: data.whatsappNumber || '',
                    contactNumber: data.contactNumber || '',
                    description: data.description || '',
                    expertise: data.expertise || '',
                    startingPrice: data.startingPrice || '',
                })

                // Set existing image URLs
                if (data.coverImageUrl) {
                    setCoverImagePreview(data.coverImageUrl)
                }
                if (data.profileImageUrl) {
                    setProfileImagePreview(data.profileImageUrl)
                }
                if (data.galleryUrls && Array.isArray(data.galleryUrls)) {
                    setExistingGalleryUrls(data.galleryUrls)
                    setCurrentGalleryUrls(data.galleryUrls)
                }
            } else {
                alert('No profile found. Redirecting to create profile page.')
                router.push('/pages/createprofile')
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


    const handleGalleryImagesChange = (files: File[], urls: string[]) => {
        setGalleryImages(files)
        setCurrentGalleryUrls(urls)
    }

    const uploadImage = async (file: File, path: string) => {
        const storageRef = ref(storage, path)
        await uploadBytes(storageRef, file)
        return getDownloadURL(storageRef)
    }




    const handleSaveChanges = async () => {
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

            // Handle gallery images
            const newGalleryUrls = await Promise.all(
                galleryImages.map((file, index) =>
                    uploadImage(file, `artists/${user.uid}/gallery/${index}-${Date.now()}.jpg`)
                )
            )

            // Combine new gallery URLs with existing ones that weren't deleted
            updateData.galleryUrls = [...newGalleryUrls, ...currentGalleryUrls.filter(url => !url.startsWith('blob:'))]

            await updateDoc(artistRef, updateData)
            alert('Profile updated successfully!')
            router.push("/pages/artistprofile")
        } catch (error) {
            console.error('Error updating profile:', error);
            if (error instanceof Error) {
                alert(`An error occurred: ${error.message}`);
            } else {
                alert('An unknown error occurred while updating the profile.');
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-8">Edit Profile</h1>
            <EditInfo
                profileData={profileData}
                onInputChange={handleInputChange}
                onCoverImageChange={handleCoverImageChange}
                onProfileImageChange={handleProfileImageChange}
                coverImagePreview={coverImagePreview}
                profileImagePreview={profileImagePreview}
            />
            <EditGallery
                onGalleryImagesChange={handleGalleryImagesChange}
                existingGalleryUrls={existingGalleryUrls}
            />
            {isLoading ? (
                <div className="mt-8 flex flex-col items-center">
                    <div className="loader"></div>
                    <p className="mt-4 text-lg text-center">
                        Please wait, your profile is being updated. This may take a few minutes.
                    </p>
                </div>
            ) : (
                <button
                    onClick={handleSaveChanges}
                    className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Save Changes
                </button>
            )}
        </div>
    )
}