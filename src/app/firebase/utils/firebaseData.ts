import { doc, getDoc, updateDoc, arrayUnion, getFirestore } from "firebase/firestore";
import { initializeApp, getApps, getApp } from 'firebase/app';
import { DocumentData } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_Auth_Domain,
  projectId: process.env.NEXT_PUBLIC_Project_ID,
  storageBucket: process.env.NEXT_PUBLIC_Storage_Bucket,
  messagingSenderId: process.env.NEXT_PUBLIC_Messaging_ID,
  appId: process.env.NEXT_PUBLIC_App_ID,
};

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

export async function getArtistData(artistId: string): Promise<ArtistData | null> {
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const firestore = getFirestore(app);
  const artistRef = doc(firestore, "Artists", artistId);
  const artistSnapshot = await getDoc(artistRef);

  if (artistSnapshot.exists()) {
    return artistSnapshot.data() as ArtistData;
  } else {
    console.log("No such artist!");
    return null;
  }
}

export async function addReview(artistId: string, review: any) {
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const firestore = getFirestore(app);
  const artistRef = doc(firestore, "Artists", artistId);
  await updateDoc(artistRef, {
    reviews: arrayUnion(review)
  });
}