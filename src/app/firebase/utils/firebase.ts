"use server"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase_config"
import { redirect } from "next/navigation";

export const registerForm = async (prevState: any,formData:FormData) => {
        const collectionRef = collection(db,'Artists');

        const docRef = await addDoc(collectionRef,{
            Name : formData.get('name'),
            LastName : formData.get('lastName'),
            DOB : formData.get('dob'),
            Address : formData.get('address'),
            City : formData.get('city'),
            Region : formData.get('region'),
            State : formData.get('state'),
            MobNo : formData.get('mobNo'),
            Email : formData.get('email'),
            ShopActLicence: formData.get('shopActLicence'),
            WorkExp : formData.get('workExp'),
            Gender : formData.get('gender'),
            AdharNo : formData.get('adharNo'),
            BusinessNo :formData.get('businessNo')
            

            // redirect('/pages/profile')
        })
        return {
            message: 'success',
        }
}