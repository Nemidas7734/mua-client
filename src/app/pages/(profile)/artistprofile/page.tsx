"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAuthStore } from '@/app/lib/store/authStore';
import ArtistAbout from "@/app/components/artist/ArtistAbout";
import ArtistGallery from "@/app/components/artist/ArtistGallery";
import ArtistInfo from "@/app/components/artist/ArtistInfo";
import ArtistReviews from "@/app/components/artist/ArtistReviews";
import { getArtistData } from "@/app/firebase/utils/firebaseData";
import { DocumentData } from "firebase/firestore";

// Define ImageObject interface
interface ImageObject {
  url: string;
  alt: string;
}

// Define a type for the artist data
interface ArtistData extends DocumentData {
  name: string;
  userId: string;
  location: string;
  expertise: string;
  coverImageUrl?: string;
  profileImageUrl?: string;
  description: string;
  skills: string;
  startingPrice: number;
  galleryUrls: string[];
  reviews: Array<{
    id: string;
    text: string;
    rating: number;
    date: string;
    userName?: string;
    userId?: string;
  }>;
}

function transformGalleryUrls(urls: string[]): ImageObject[] {
  return urls?.map(url => ({ url, alt: "Gallery image" }));
}

// In page.tsx

function ArtistProfileContent() {
  const searchParams = useSearchParams();
  const { userId } = useAuthStore();
  const [artistData, setArtistData] = useState<ArtistData | null>(null);
  const [artistId, setArtistId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArtistData() {
      const paramArtistId = searchParams.get('id');
      if (paramArtistId) {
        setArtistId(paramArtistId);
        const data = await getArtistData(paramArtistId);
        if (data) {
          setArtistData(data as ArtistData);
        }
      } else {
        setArtistId(userId);
        const data = await getArtistData(userId);
        if (data) {
          setArtistData(data as ArtistData);
        }
      }
    }
    fetchArtistData();
  }, [searchParams, userId]);

  if (!artistData || !artistId) return <div>Loading...</div>;

  return (
    <section className="flex flex-col items-center gap-4 md:gap-10">
      <ArtistInfo artistData={artistData} artistId={artistId} />
      <ArtistAbout artistData={artistData} />
      <ArtistGallery images={transformGalleryUrls(artistData.galleryUrls)} />
      <ArtistReviews artistId={artistId} reviews={artistData.reviews} />
    </section>
  );
}

export default function ArtistProfile() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArtistProfileContent />
    </Suspense>
  );
}