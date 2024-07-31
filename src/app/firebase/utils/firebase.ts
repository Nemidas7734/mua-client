"use server"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase_config"
import { artistSchema, ArtistFormData, FormState } from '@/app/lib/validationSchema'
import { z } from 'zod';


export const registerForm = async (prevState: FormState, formData: FormData): Promise<FormState> => {
    try {
      const data: Partial<ArtistFormData> = {};
      formData.forEach((value, key) => {
        if (typeof value === 'string') {
          data[key as keyof ArtistFormData] = value;
        }
      });
  
      const validatedData = artistSchema.parse(data);
  
      const collectionRef = collection(db, 'Artists');
      const docRef = await addDoc(collectionRef, validatedData);
  
      return {
        message: 'success',
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          message: 'validation_error',
          errors: error.errors,
        };
      }
      return {
        message: 'error',
      };
    }
  }