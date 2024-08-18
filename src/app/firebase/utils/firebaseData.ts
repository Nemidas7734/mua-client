import { doc, getDoc, updateDoc, arrayUnion, arrayRemove, getFirestore } from "firebase/firestore";
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

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);

interface ArtistData extends DocumentData {
  name: string;
  userId: string;
  location: string;
  expertise: string;
  coverImageUrl?: string;
  profileImageUrl?: string;
  description: string;
  startingPrice: number;
  galleryUrls: string[];
  reviews: Array<Review>;
}

interface Review {
  id: string;
  text: string;
  rating: number;
  date: string;
  userName?: string;
  userId?: string;
}



export async function getArtistData(artistId: string): Promise<ArtistData | null> {
  try {
    const artistRef = doc(firestore, "Artists", artistId);
    const artistSnapshot = await getDoc(artistRef);

    if (artistSnapshot.exists()) {
      return artistSnapshot.data() as ArtistData;
    } else {
      console.log("No such artist!");
      return null;
    }
  } catch (error) {
    console.error("Error accessing Firestore:", error);
    return null;
  }
}


export async function getReviewByUser(artistId: string, userId: string): Promise<Review | null> {
  if (!artistId) {
    console.error("Artist ID is undefined");
    return null;
  }

  const artistRef = doc(firestore, "Artists", artistId);
  const artistSnapshot = await getDoc(artistRef);

  if (artistSnapshot.exists()) {
    const artistData = artistSnapshot.data();
    const reviews = artistData.reviews || [];
    const userReview = reviews.find((review: Review) => review.userId === userId);
    return userReview || null;
  }

  return null;
}

export async function addReview(artistId: string, review: Review): Promise<void> {
  if (!artistId) {
    console.error("Artist ID is undefined");
    return;
  }

  const artistRef = doc(firestore, "Artists", artistId);
  const artistSnapshot = await getDoc(artistRef);

  if (artistSnapshot.exists()) {
    const artistData = artistSnapshot.data();
    const reviews = artistData.reviews || [];
    reviews.push(review);
    await updateDoc(artistRef, { reviews });
  }
}

export async function updateReview(artistId: string, reviewId: string, updatedReview: Review): Promise<void> {
  if (!artistId) {
    console.error("Artist ID is undefined");
    return;
  }

  const artistRef = doc(firestore, "Artists", artistId);
  const artistSnapshot = await getDoc(artistRef);

  if (artistSnapshot.exists()) {
    const artistData = artistSnapshot.data();
    const reviews = artistData.reviews || [];
    const reviewIndex = reviews.findIndex((review: Review) => review.id === reviewId);
    if (reviewIndex !== -1) {
      reviews[reviewIndex] = { ...reviews[reviewIndex], ...updatedReview };
      await updateDoc(artistRef, { reviews });
    }
  }
}

export async function getUserName(userId: string): Promise<string> {
  const userRef = doc(firestore, "Users", userId);
  const userSnapshot = await getDoc(userRef);

  if (userSnapshot.exists()) {
    const userData = userSnapshot.data();
    return userData.name || "Anonymous";
  } else {
    console.log("No such user!");
    return "Anonymous";
  }
}
