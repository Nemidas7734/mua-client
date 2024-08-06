"use client"

import { useEffect, useState } from "react"
import { useAuthStore } from '@/app/lib/store/authStore'
import ArtistAbout from "@/app/components/artist/ArtistAbout"
import ArtistGallery from "@/app/components/artist/ArtistGallery"
import ArtistInfo from "@/app/components/artist/ArtistInfo"
import ArtistReviews from "@/app/components/artist/ArtistReviews"
import { getArtistData } from "@/app/firebase/utils/firebaseData"
import { DocumentData } from "firebase/firestore"

// Define ImageObject interface
interface ImageObject {
  url: string;
  alt: string;
}

// Define a type for the artist data
interface ArtistData extends DocumentData {
    name: string;
    location: string;
    expertise: string;
    coverImageUrl?: string;
    profileImageUrl?: string;
    description: string;
    startingPrice: number;
    galleryUrls: string[];
    reviews: Array<{
        text: string;
        rating: number;
        date: string;
        userName?: string;
    }>;
}


function transformGalleryUrls(urls: string[]): ImageObject[] {
  return urls.map(url => ({ url, alt: "Gallery image" }));
}

export default function Artist() {
    const { userId } = useAuthStore()
    console.log("id",userId);
    const [artistData, setArtistData] = useState<ArtistData | null>(null)

    useEffect(() => {
        async function fetchArtistData() {
            if (userId && typeof userId === 'string') {
                const data = await getArtistData(userId)
                if (data) {
                    setArtistData(data as ArtistData)
                }
            }
        }
        fetchArtistData()
    }, [userId])

    if (!artistData) return <div>Loading...</div>

    return (
        <section className="flex flex-col items-center gap-4 md:gap-10">
            <ArtistInfo artistData={artistData} />
            <ArtistAbout artistData={artistData} />
            <ArtistGallery images={transformGalleryUrls(artistData.galleryUrls)} />
            <ArtistReviews artistId={userId as string} reviews={artistData.reviews} />
        </section>
    )
}