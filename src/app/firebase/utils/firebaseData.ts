import { doc, getDoc, updateDoc, arrayUnion, getFirestore } from "firebase/firestore";
import { initializeApp, getApps, getApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_Auth_Domain,
  projectId: process.env.NEXT_PUBLIC_Project_ID,
  storageBucket: process.env.NEXT_PUBLIC_Storage_Bucket,
  messagingSenderId: process.env.NEXT_PUBLIC_Messaging_ID,
  appId: process.env.NEXT_PUBLIC_App_ID,
};

export async function getArtistData(artistId: string) {
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const firestore = getFirestore(app);
  const artistRef = doc(firestore, "Artists", artistId);
  const artistSnap = await getDoc(artistRef);
  
  if (artistSnap.exists()) {
    return artistSnap.data();
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