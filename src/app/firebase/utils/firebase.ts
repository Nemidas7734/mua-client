// firebase.ts
"use server"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { db } from "../firebase_config";
import { doc, setDoc } from "firebase/firestore";
import { artistSchema, ArtistFormData, FormState } from '@/app/lib/schema/validationSchema';
import { z } from 'zod';
import { initializeApp, getApps, getApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_Auth_Domain,
  projectId: process.env.NEXT_PUBLIC_Project_ID,
  storageBucket: process.env.NEXT_PUBLIC_Storage_Bucket,
  messagingSenderId: process.env.NEXT_PUBLIC_Messaging_ID,
  appId: process.env.NEXT_PUBLIC_App_ID,
};

export const registerForm = async (prevState: FormState, formData: FormData): Promise<FormState> => {
  try {
    const data: Partial<ArtistFormData> = {};
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        data[key as keyof ArtistFormData] = value;
      }
    });
    
    data.role = 'artist';

    const validatedData = artistSchema.parse(data);

    // // If you need to convert certain fields to numbers after validation:
    // const finalData = {
    //   ...validatedData,
    //   mobNo: parseInt(validatedData.mobNo, 10),
    //   workExp: parseInt(validatedData.workExp, 10),
    //   adharNo: parseInt(validatedData.adharNo, 10),
    // };

    // Initialize Firebase on the server
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    const firestore = getFirestore(app);

    const collectionRef = collection(firestore, 'Artists');
    const docRef = await addDoc(collectionRef, validatedData);
    return {
      message: 'success',
    };
  } catch (error) {
    console.error('Error in registerForm:', error);
    if (error instanceof z.ZodError) {
      return {
        message: 'validation_error',
        errors: error.errors,
      };
    }
    return {
      message: 'error',
      errors: [{
        code: 'custom',
        path: [],
        message: error instanceof Error ? error.message : 'An unexpected error occurred'
      }],
    };
  }
}

export const createUserDocument = async (userId: string, userData: any) => {
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const firestore = getFirestore(app);
  const userRef = doc(firestore, "users", userId);
  await setDoc(userRef, {
      ...userData,
      createdAt: new Date(),
  });
};

export const createArtistDocument = async (userId: string, artistData: any) => {
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const firestore = getFirestore(app);
  const artistRef = doc(firestore, "Artists", userId);
  await setDoc(artistRef, {
      ...artistData,
      createdAt: new Date(),
  });
};